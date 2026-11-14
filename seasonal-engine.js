/**
 * ==============================================================================
 * TECNOMAX SECURITY - AMBIENTACIÓN NAVIDEÑA (SEASONAL ENGINE)
 * ==============================================================================
 * Efectos de temporada navideña para Tecnomax Security:
 * - Copos de nieve cinematográficos en Canvas 2D (60 FPS, acelerado por GPU).
 * - Guirnalda sutil de micro-luces LED suspendidas bajo el navbar.
 * - Botón flotante directo para Activar / Desactivar con interruptor visual (ON / OFF).
 * - Cero interferencia: pointer-events: none en todos los efectos interactivos.
 * - Persistencia del estado elegido en localStorage.
 */

(function () {
  'use strict';

  // 1. ESTADO DE LA AMBIENTACIÓN
  // Por defecto está ACTIVO (true), a menos que el usuario lo haya apagado explícitamente.
  let isHolidayActive = localStorage.getItem('tecnomax_holiday_mode') !== 'false';

  // Variables de control de animación
  let canvas = null;
  let ctx = null;
  let animationFrameId = null;
  let particles = [];
  let lightsElement = null;
  let controlPill = null;

  // 2. GUIRNALDA DE MICRO-LUCES NAVIDEÑAS
  function setupChristmasLights(enable) {
    if (lightsElement) {
      lightsElement.remove();
      lightsElement = null;
    }

    if (!enable) return;

    lightsElement = document.createElement('div');
    lightsElement.className = 'seasonal-lights-container';
    lightsElement.setAttribute('aria-hidden', 'true');

    const wire = document.createElement('div');
    wire.className = 'seasonal-lights-wire';
    lightsElement.appendChild(wire);

    // Cantidad de bombillos adaptada al ancho de pantalla
    const screenWidth = window.innerWidth || document.documentElement.clientWidth;
    const bulbCount = Math.max(12, Math.floor(screenWidth / 48));
    const colors = ['red', 'gold', 'green', 'blue', 'purple'];

    for (let i = 0; i < bulbCount; i++) {
      const bulb = document.createElement('div');
      const color = colors[i % colors.length];
      bulb.className = `seasonal-bulb ${color}`;
      bulb.style.animationDelay = `${(i * 0.18) % 2.5}s`;
      lightsElement.appendChild(bulb);
    }

    document.body.appendChild(lightsElement);
  }

  // 3. MOTOR DE NIEVE CINEMÁTICA (CANVAS 2D)
  function initSnowParticles(enable) {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }

    if (canvas) {
      canvas.remove();
      canvas = null;
      ctx = null;
    }

    if (!enable) return;

    canvas = document.createElement('canvas');
    canvas.id = 'seasonal-snow-canvas';
    canvas.setAttribute('aria-hidden', 'true');
    document.body.appendChild(canvas);
    ctx = canvas.getContext('2d');

    resizeCanvas();
    createSnowflakes();
    animateSnow();
  }

  function resizeCanvas() {
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createSnowflakes() {
    particles = [];
    const count = window.innerWidth < 768 ? 22 : 40; // Cantidad moderada y elegante

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2.6 + 1.2,
        speedY: Math.random() * 0.85 + 0.35,
        speedX: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.55 + 0.25,
        angle: Math.random() * Math.PI * 2
      });
    }
  }

  function animateSnow() {
    if (!ctx || !canvas || !isHolidayActive) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      p.angle += 0.012;
      p.y += p.speedY;
      p.x += Math.sin(p.angle) * 0.45 + p.speedX;

      // Reset suave cuando el copo llega al fondo de la pantalla
      if (p.y > canvas.height) {
        p.y = -6;
        p.x = Math.random() * canvas.width;
      }
      if (p.x > canvas.width) p.x = 0;
      if (p.x < 0) p.x = canvas.width;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
      ctx.shadowColor = 'rgba(255, 255, 255, 0.45)';
      ctx.shadowBlur = p.radius > 2.2 ? 3 : 0;
      ctx.fill();
    }

    animationFrameId = requestAnimationFrame(animateSnow);
  }

  // 4. APLICAR / CAMBIAR ESTADO
  function setHolidayEffects(active) {
    isHolidayActive = active;
    localStorage.setItem('tecnomax_holiday_mode', active);

    setupChristmasLights(isHolidayActive);
    initSnowParticles(isHolidayActive);
    updateButtonUI();
  }

  function toggleHolidayEffects() {
    setHolidayEffects(!isHolidayActive);
  }

  // 5. BOTÓN FLOTANTE DIRECTO ON / OFF (SIN MENÚS COMPLICADOS)
  function setupControlUI() {
    if (document.getElementById('seasonal-control-pill')) return;

    controlPill = document.createElement('div');
    controlPill.id = 'seasonal-control-pill';
    controlPill.className = 'seasonal-control-pill';
    controlPill.setAttribute('role', 'button');
    controlPill.setAttribute('tabindex', '0');

    // Clic directo para Activar o Desactivar
    controlPill.addEventListener('click', toggleHolidayEffects);
    controlPill.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleHolidayEffects();
      }
    });

    document.body.appendChild(controlPill);
    updateButtonUI();
  }

  function updateButtonUI() {
    if (!controlPill) return;

    const switchClass = isHolidayActive ? 'on' : '';
    const statusText = isHolidayActive ? 'ON' : 'OFF';
    const tooltip = isHolidayActive 
      ? 'Modo Navideño activado (Clic para desactivar nieve y luces)' 
      : 'Modo Navideño desactivado (Clic para activar nieve y luces)';

    controlPill.title = tooltip;
    controlPill.setAttribute('aria-label', tooltip);

    controlPill.innerHTML = `
      <span style="font-size: 1.15rem; line-height: 1; display: inline-flex; align-items: center;" aria-hidden="true">❄️</span>
      <span class="seasonal-switch-track ${switchClass}">
        <span class="seasonal-switch-knob"></span>
      </span>
    `;
  }

  // 6. INICIALIZACIÓN
  function init() {
    window.addEventListener('resize', () => {
      resizeCanvas();
      if (isHolidayActive) {
        setupChristmasLights(true);
      }
    }, { passive: true });

    setupControlUI();
    setHolidayEffects(isHolidayActive);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // API global para control externo si se requiere
  window.TecnomaxHoliday = {
    toggle: toggleHolidayEffects,
    enable: () => setHolidayEffects(true),
    disable: () => setHolidayEffects(false),
    isActive: () => isHolidayActive
  };

})();
