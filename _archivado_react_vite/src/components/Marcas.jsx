import React from 'react';
import { Award, ShieldCheck, Sparkles } from 'lucide-react';
import { MARCAS } from '../data/mockData';

export default function Marcas() {
  return (
    <section id="marcas" className="py-14 border-y border-white/10 bg-[#0a0d16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de Sección */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-300 text-xs font-semibold mb-3">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>Alianzas Estratégicas Directas</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Distribuidores Oficiales Autorizados
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2">
            Respaldamos a cada instalador con equipos 100% originales, firmware en español y garantía directa de fábrica.
          </p>
        </div>

        {/* Grid de Marcas */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {MARCAS.map((marca, i) => (
            <div
              key={i}
              className="bg-slate-900/80 hover:bg-slate-800/90 border border-white/5 hover:border-purple-500/40 rounded-xl p-4 text-center flex flex-col items-center justify-between transition-all group hover:-translate-y-1"
            >
              <div className="h-12 w-full flex items-center justify-center mb-3">
                <span className="font-extrabold text-base tracking-wider text-slate-200 group-hover:text-purple-300 transition-colors">
                  {marca.nombre}
                </span>
              </div>
              <div className="w-full pt-2 border-t border-white/5">
                <span className="text-[10px] text-purple-400 font-semibold block leading-tight">
                  {marca.nivel}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
