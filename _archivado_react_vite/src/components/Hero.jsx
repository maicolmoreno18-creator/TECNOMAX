import React from 'react';
import { ShieldCheck, ArrowRight, Calculator, CheckCircle2, Zap, Award, Sparkles, Eye, Radio } from 'lucide-react';

export default function Hero({ onOpenCotizador }) {
  return (
    <section className="relative overflow-hidden pt-10 pb-20 md:pt-16 md:pb-28">
      {/* Luces y fondos decorativos */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-600/20 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[250px] bg-cyan-500/15 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Columna Izquierda: Texto y Propuesta de Valor */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill de Estado en Vivo */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-300 text-xs font-semibold shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Distribuidor Mayorista Autorizado Dahua Colombia</span>
            </div>

            {/* Titular Principal de Alto Impacto */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Tecnología y Seguridad Electrónica{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                al Precio Mayorista Real
              </span>
            </h1>

            {/* Subtítulo enfocado en resolver las necesidades del integrador */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Suministramos a empresas de seguridad, integradores e instaladores en toda Colombia. Stock garantizado en <strong className="text-white">Bogotá, Medellín y Barranquilla</strong> con despacho en 24h y respaldo técnico de fábrica.
            </p>

            {/* Botones de Llamada a la Acción (CTAs) */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#catalogo"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm px-7 py-4 rounded-xl shadow-xl shadow-purple-950/60 border border-purple-400/40 transition-all hover:scale-105 active:scale-95 group"
              >
                <span>Explorar Catálogo Mayorista</span>
                <ArrowRight className="w-4 h-4 text-purple-200 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenCotizador}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm px-6 py-4 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all group"
              >
                <Calculator className="w-4 h-4 text-purple-400 group-hover:rotate-12 transition-transform" />
                <span>Cotizador Exprés de Kits</span>
                <span className="bg-purple-950 border border-purple-500/30 text-purple-300 text-[10px] px-2 py-0.5 rounded-full font-bold">30s</span>
              </button>
            </div>

            {/* Badges de Confianza / Puntos Fuertes */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-purple-950/60 text-purple-400 border border-purple-800/40 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">+15.000</h4>
                  <p className="text-[11px] text-slate-400">Proyectos entregados</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-cyan-950/60 text-cyan-400 border border-cyan-800/40 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Garantía Directa</h4>
                  <p className="text-[11px] text-slate-400">1 a 3 años de fábrica</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 mt-0.5">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Despacho 24h</h4>
                  <p className="text-[11px] text-slate-400">Cobertura nacional</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-pink-950/60 text-pink-400 border border-pink-800/40 mt-0.5">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">3 Bodegas</h4>
                  <p className="text-[11px] text-slate-400">Bogotá · Med · Baq</p>
                </div>
              </div>
            </div>

          </div>

          {/* Columna Derecha: Tarjeta Visual Tecnológica / Producto Estrella */}
          <div className="lg:col-span-5 relative">
            
            {/* Resplandor trasero */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 to-cyan-500/30 blur-2xl rounded-3xl -z-10" />

            <div className="bg-slate-900/90 border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden backdrop-blur-xl">
              
              {/* Badge superior de la tarjeta */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Top Ventas Instaladores</span>
                </div>
                <span className="bg-purple-900/70 text-purple-300 text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-purple-500/40">
                  Dahua WizSense
                </span>
              </div>

              {/* Imagen y Presentación del Producto */}
              <div className="py-6 text-center relative group">
                <div className="inline-block relative">
                  <img
                    src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80"
                    alt="Cámara de Seguridad Dahua 4MP"
                    className="w-56 h-56 object-cover mx-auto rounded-xl shadow-lg border border-purple-500/20 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-md px-2 py-1 rounded text-[10px] text-cyan-400 font-mono flex items-center gap-1 border border-cyan-500/30">
                    <Radio className="w-3 h-3 animate-spin" />
                    <span>IA WizSense</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mt-4">
                  Cámara Domo Dahua 4MP Full-Color
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Modelo: IPC-HDW2439T-AS-LED-S2 · Visión Nocturna 24/7 a Color
                </p>
              </div>

              {/* Especificaciones Clave */}
              <div className="grid grid-cols-2 gap-2 text-xs py-3 border-t border-b border-white/10">
                <div className="bg-slate-800/60 p-2 rounded-lg border border-white/5">
                  <span className="text-slate-400 block text-[10px]">Resolución</span>
                  <span className="font-bold text-white">4 Megapíxeles QHD</span>
                </div>
                <div className="bg-slate-800/60 p-2 rounded-lg border border-white/5">
                  <span className="text-slate-400 block text-[10px]">Iluminación</span>
                  <span className="font-bold text-cyan-400">Full-Color 30m</span>
                </div>
                <div className="bg-slate-800/60 p-2 rounded-lg border border-white/5">
                  <span className="text-slate-400 block text-[10px]">Audio</span>
                  <span className="font-bold text-white">Micrófono Integrado</span>
                </div>
                <div className="bg-slate-800/60 p-2 rounded-lg border border-white/5">
                  <span className="text-slate-400 block text-[10px]">Inteligencia</span>
                  <span className="font-bold text-purple-400">Detección Humano/Auto</span>
                </div>
              </div>

              {/* Precio y CTA Rápido */}
              <div className="mt-4 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] text-slate-400 block">Precio Mayorista sugerido:</span>
                  <span className="text-lg font-extrabold text-white font-mono">$185.000 <span className="text-xs text-purple-400">COP</span></span>
                </div>
                <a
                  href="https://wa.me/573112067139?text=Hola%20Tecnomax,%20me%20interesa%20cotizar%20la%20C%C3%A1mara%20Dahua%204MP%20Full-Color%20vista%20en%20la%20web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-4 py-2.5 rounded-lg shadow-lg shadow-emerald-950/40 flex items-center gap-1.5 transition-all"
                >
                  <span>Cotizar por WhatsApp</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
