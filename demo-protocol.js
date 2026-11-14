/**
 * ==============================================================================
 * TECNOMAX SECURITY - PROTOCOLO DE PRUEBA Y DEMOSTRACIÓN (GIOTECH ING.)
 * ==============================================================================
 * Este script implementa:
 * 1. Marcas de agua diagonales en pantalla completa no intrusivas.
 * 2. Chip de estado flotante permanente en la esquina inferior izquierda.
 * 3. Pantalla modal flotante recurrente cada 2 minutos que notifica al usuario:
 *    "Esta es una página de prueba desarrollada por GioTech Ing."
 * 
 * INSTRUCCIÓN DE DESACTIVACIÓN RÁPIDA:
 * Para retirar todo el protocolo cuando el usuario diga "quita el protocolo de prueba",
 * simplemente cambia la constante PROTOCOL_ACTIVE a false.
 */

(function () {
  'use strict';

  // ==========================================================================
  // INTERRUPTOR MAESTRO: true = ACTIVO, false = TOTALMENTE DESACTIVADO
  // ==========================================================================
  const PROTOCOL_ACTIVE = true;

  if (!PROTOCOL_ACTIVE) return;

  // Configuración de intervalos (en milisegundos)
  const INTERVAL_MS = 2 * 60 * 1000; // Cada 2 minutos (120,000 ms)
  const FIRST_POPUP_DELAY_MS = 90 * 1000; // Primer aviso a los 90 segundos

  let timerId = null;
  let modalBackdrop = null;

  // 1. INYECTAR MARCAS DE AGUA DIAGONALES EN PANTALLA COMPLETA
  function injectWatermarks() {
    if (document.querySelector('.demo-watermark-overlay')) return;

    const overlay = document.createElement('div');
    overlay.className = 'demo-watermark-overlay';
    overlay.setAttribute('aria-hidden', 'true');

    const phrases = [
      'VERSIÓN DE PRUEBA · GIOTECH ING. · GEORGE MORENO',
      'DEMO B2B EXCLUSIVA · TECNOMAX SECURITY · GIOTECH ING.',
      'ARQUITECTURA DIGITAL EN EVALUACIÓN · GIOTECH ING.',
      'PROPUESTA COMERCIAL · INGENIERÍA POR GIOTECH ING.'
    ];

    // Crear 8 filas diagonales a lo largo del alto de pantalla
    for (let i = 0; i < 9; i++) {
      const row = document.createElement('div');
      row.className = 'demo-watermark-row';
      const text = phrases[i % phrases.length];
      // Repetir el texto 6 veces por fila para cubrir pantallas ultra-wide
      row.textContent = `${text}  —  ${text}  —  ${text}  —  ${text}  —  ${text}`;
      overlay.appendChild(row);
    }

    document.body.appendChild(overlay);
  }

  // 2. INYECTAR CHIP FLOTANTE INFERIOR IZQUIERDA
  function injectStatusPill() {
    if (document.querySelector('.demo-status-pill')) return;

    const pill = document.createElement('div');
    pill.className = 'demo-status-pill';
    pill.setAttribute('role', 'button');
    pill.setAttribute('tabindex', '0');
    pill.setAttribute('title', 'Clic para ver detalles de la versión de prueba');
    pill.innerHTML = `
      <span class="demo-status-pulse"></span>
      <span>Versión Demo · <strong>GioTech Ing.</strong></span>
    `;

    pill.addEventListener('click', () => {
      showDemoModal();
    });

    document.body.appendChild(pill);
  }

  // 3. CREAR PANTALLA FLOTANTE / MODAL RECURRENTE
  function buildDemoModal() {
    if (modalBackdrop) return;

    modalBackdrop = document.createElement('div');
    modalBackdrop.className = 'demo-modal-backdrop';
    modalBackdrop.id = 'giotechDemoModalBackdrop';
    modalBackdrop.setAttribute('role', 'dialog');
    modalBackdrop.setAttribute('aria-modal', 'true');

    modalBackdrop.innerHTML = `
      <div class="demo-modal-card">
        <button type="button" class="demo-modal-close" id="btnDemoClose" aria-label="Cerrar ventana">
          &times;
        </button>
        
        <div>
          <span class="demo-badge-giotech">
            <i class="bi bi-shield-lock-fill me-1"></i> Entorno de Prueba y Demostración
          </span>
        </div>

        <div class="d-flex align-items-center justify-content-center mb-2">
          <img src="./logos/giotech.png" alt="GioTech Ing." class="demo-modal-logo" onerror="this.style.display='none'">
        </div>

        <h4 class="fw-bold mb-2 text-white" style="font-size: 1.35rem; letter-spacing: -0.01em;">
          Plataforma en Fase de Demostración
        </h4>
        
        <p class="small text-secondary mb-3" style="font-size: 0.90rem; color: #94a3b8 !important; line-height: 1.6;">
          Esta es una página de prueba y arquitectura digital B2B desarrollada y diseñada exclusivamente para 
          <strong class="text-white">Tecnomax Security S.A.S.</strong> por la firma tecnológica 
          <strong style="color: #c084fc;">GioTech Ing.</strong>
        </p>

        <div class="demo-timer-badge">
          <div class="d-flex align-items-center justify-content-center gap-2 mb-1">
            <i class="bi bi-info-circle text-primary"></i>
            <span class="fw-semibold text-white">Aviso de Derechos & Evaluación Técnica</span>
          </div>
          <span style="font-size: 0.80rem; color: #94a3b8;">
            Ingeniero Responsable: <strong>George Moreno</strong> (Ing. de Sistemas) · Esta pantalla informativa se presenta periódicamente durante la sesión de evaluación.
          </span>
        </div>

        <div class="d-flex flex-column flex-sm-row align-items-center justify-content-center gap-2.5 mt-2">
          <button type="button" class="btn btn-outline-light rounded-pill px-4 py-2 w-100 fw-semibold" id="btnDemoContinue" style="border-color: rgba(255,255,255,0.25); font-size: 0.88rem;">
            Continuar viendo demo
          </button>
          <a href="https://wa.me/573502837223?text=Hola%20George,%20estoy%20viendo%20la%20p%C3%A1gina%20de%20prueba%20de%20Tecnomax%20Security%20y%20deseo%20contactarte" 
             target="_blank" 
             class="btn rounded-pill px-4 py-2 w-100 fw-bold d-inline-flex align-items-center justify-content-center gap-2 shadow-sm text-white"
             style="background: #8b2cf5; border: 1px solid #a855f7; font-size: 0.88rem;">
            <i class="bi bi-whatsapp"></i> Hablar con GioTech
          </a>
        </div>
      </div>
    `;

    document.body.appendChild(modalBackdrop);

    // Event listeners para cerrar el modal
    const closeBtn = modalBackdrop.querySelector('#btnDemoClose');
    const continueBtn = modalBackdrop.querySelector('#btnDemoContinue');

    if (closeBtn) closeBtn.addEventListener('click', hideDemoModal);
    if (continueBtn) continueBtn.addEventListener('click', hideDemoModal);

    // Cerrar al hacer clic en el backdrop oscuro exterior
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        hideDemoModal();
      }
    });

    // Cerrar con la tecla Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
        hideDemoModal();
      }
    });
  }

  function showDemoModal() {
    if (!modalBackdrop) buildDemoModal();
    if (modalBackdrop) {
      modalBackdrop.classList.add('active');
    }
  }

  function hideDemoModal() {
    if (modalBackdrop) {
      modalBackdrop.classList.remove('active');
    }
    // Reiniciar el temporizador para los próximos 2 minutos
    restartInterval();
  }

  // 4. CONTROLADOR DEL TEMPORIZADOR RECURRENTE (CADA 2 MINUTOS)
  function restartInterval() {
    if (timerId) clearInterval(timerId);
    timerId = setInterval(() => {
      showDemoModal();
    }, INTERVAL_MS);
  }

  // 5. ESCUDO DE SEGURIDAD ANTI-INSPECCIÓN Y ANTI-COPIA
  function setupSecurityShield() {
    // 5.1 Deshabilitar menú contextual de clic derecho
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      return false;
    }, false);

    // 5.2 Deshabilitar atajos de inspección y descarga (F12, Ctrl+U, Ctrl+Shift+I/J/C, Ctrl+S)
    document.addEventListener('keydown', (e) => {
      // F12
      if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
        return false;
      }
      // Ctrl+Shift+I (DevTools), Ctrl+Shift+J (Consola), Ctrl+Shift+C (Inspeccionar)
      if (e.ctrlKey && e.shiftKey && ['i', 'I', 'j', 'J', 'c', 'C'].includes(e.key)) {
        e.preventDefault();
        return false;
      }
      // Ctrl+U (Ver código fuente)
      if (e.ctrlKey && (e.key === 'u' || e.key === 'U')) {
        e.preventDefault();
        return false;
      }
      // Ctrl+S (Guardar página completa en disco)
      if (e.ctrlKey && (e.key === 's' || e.key === 'S')) {
        e.preventDefault();
        return false;
      }
    }, false);

    // 5.3 Advertencia corporativa en consola
    try {
      console.clear();
      console.log(
        '%c🔒 ENTORNO DE EVALUACIÓN TÉCNICA · GIOTECH ING.',
        'color: #8b2cf5; font-size: 18px; font-weight: 800; padding: 4px;'
      );
      console.log(
        '%cEsta plataforma y su arquitectura de código son propiedad intelectual exclusiva de George Moreno (GioTech Ing.) desarrollada para Tecnomax Security S.A.S. Prohibida su extracción o duplicación no autorizada.',
        'color: #94a3b8; font-size: 12px; line-height: 1.5;'
      );
    } catch (err) {}
  }

  // 6. INICIALIZACIÓN
  function initProtocol() {
    setupSecurityShield();
    injectWatermarks();
    injectStatusPill();
    buildDemoModal();

    // Primer modal al llegar al tiempo inicial, luego recurrente cada 2 minutos
    timerId = setTimeout(() => {
      showDemoModal();
      restartInterval();
    }, FIRST_POPUP_DELAY_MS);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProtocol);
  } else {
    initProtocol();
  }

  // API Global para control si se requiere
  window.GioTechDemoProtocol = {
    isActive: () => PROTOCOL_ACTIVE,
    showModal: showDemoModal,
    hideModal: hideDemoModal,
    disable: () => {
      if (timerId) clearInterval(timerId);
      const overlay = document.querySelector('.demo-watermark-overlay');
      if (overlay) overlay.remove();
      const pill = document.querySelector('.demo-status-pill');
      if (pill) pill.remove();
      if (modalBackdrop) modalBackdrop.remove();
      console.log('Protocolo de prueba GioTech Ing. desactivado.');
    }
  };

})();
