import React, { useState } from 'react';
import { Truck, Phone, MapPin, ChevronDown, Clock, ShieldCheck } from 'lucide-react';
import { SEDES } from '../data/mockData';

export default function Topbar({ sedeSeleccionada, setSedeSeleccionada }) {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const sedeActual = SEDES.find(s => s.id === sedeSeleccionada) || SEDES[0];

  return (
    <div className="bg-[#0b0f19] border-b border-white/5 text-xs text-slate-300 py-2 px-4 sm:px-6 lg:px-8 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        
        {/* Banner de Envíos y Garantía */}
        <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
          <div className="flex items-center gap-1.5 text-purple-400 font-medium">
            <Truck className="w-3.5 h-3.5 text-purple-400" />
            <span>Envíos a toda Colombia en 24/48h</span>
          </div>
          <span className="hidden sm:inline text-slate-600">|</span>
          <div className="hidden sm:flex items-center gap-1.5 text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>Garantía Oficial Directa Dahua & Marcas Aliadas</span>
          </div>
        </div>

        {/* Sedes y Teléfono Directo */}
        <div className="flex items-center gap-3 relative">
          <span className="text-slate-400 hidden sm:inline">Sede comercial:</span>
          
          {/* Dropdown de Sede */}
          <div className="relative">
            <button 
              onClick={() => setMenuAbierto(!menuAbierto)}
              className="flex items-center gap-1.5 bg-slate-900/80 hover:bg-slate-800 text-white px-2.5 py-1 rounded-md border border-white/10 transition-colors"
            >
              <MapPin className="w-3 h-3 text-magenta-400 text-purple-400" />
              <span className="font-semibold text-purple-200">{sedeActual.ciudad}</span>
              <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform ${menuAbierto ? 'rotate-180' : ''}`} />
            </button>

            {menuAbierto && (
              <div className="absolute right-0 mt-1 w-64 bg-slate-900 border border-purple-500/30 rounded-lg shadow-2xl p-2 z-50">
                <div className="text-[11px] font-semibold text-slate-400 px-2 py-1 uppercase tracking-wider">
                  Nuestras Bodegas y Tiendas:
                </div>
                {SEDES.map(sede => (
                  <button
                    key={sede.id}
                    onClick={() => {
                      setSedeSeleccionada(sede.id);
                      setMenuAbierto(false);
                    }}
                    className={`w-full text-left p-2 rounded-md transition-all flex flex-col gap-0.5 ${
                      sede.id === sedeSeleccionada 
                        ? 'bg-purple-950/60 border border-purple-500/40 text-white' 
                        : 'hover:bg-slate-800 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs text-white">{sede.ciudad}</span>
                      <span className="text-[10px] text-purple-400 font-mono">{sede.pbx.split('/')[0]}</span>
                    </div>
                    <span className="text-[11px] text-slate-400 truncate">{sede.direccion}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Teléfono directo PBX */}
          <a 
            href={`tel:${sedeActual.celularRaw}`}
            className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors bg-cyan-950/30 px-2.5 py-1 rounded-md border border-cyan-800/40"
          >
            <Phone className="w-3 h-3 text-cyan-400" />
            <span className="font-mono font-medium">{sedeActual.celular}</span>
          </a>
        </div>

      </div>
    </div>
  );
}
