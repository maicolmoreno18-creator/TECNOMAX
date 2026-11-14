import React, { useState } from 'react';
import { MessageSquare, X, ChevronRight, MapPin, Wrench, Package, Sparkles } from 'lucide-react';
import { SEDES } from '../data/mockData';

export default function WhatsAppWidget() {
  const [abierto, setAbierto] = useState(false);

  const opciones = [
    {
      titulo: 'Sede Bogotá D.C.',
      detalle: 'Calle 22 # 9 - 16, Centro',
      numero: '573112067139',
      mensaje: 'Hola Tecnomax Bogotá, deseo solicitar cotización de equipos de seguridad electrónica.',
      icon: MapPin,
      badge: 'Asesor Bogotá'
    },
    {
      titulo: 'Sede Medellín',
      detalle: 'Calle 48C # 66 - 07 Loc 101',
      numero: '573104155128',
      mensaje: 'Hola Tecnomax Medellín, requiero información y precios de seguridad para entrega en Antioquia.',
      icon: MapPin,
      badge: 'Asesor Medellín'
    },
    {
      titulo: 'Sede Barranquilla',
      detalle: 'Cra 43 # 40 - 69',
      numero: '573112067139',
      mensaje: 'Hola Tecnomax Barranquilla, necesito cotización de cámaras y equipos para la Costa.',
      icon: MapPin,
      badge: 'Asesor Costa'
    },
    {
      titulo: 'Soporte Técnico & Garantías',
      detalle: 'Ingenieros certificados Dahua & ZKTeco',
      numero: '573116394950',
      mensaje: 'Hola equipo de Soporte Técnico Tecnomax, requiero asistencia técnica / radicar una garantía.',
      icon: Wrench,
      badge: 'Soporte'
    },
    {
      titulo: 'Canal Mayoristas & Nuevos Integradores',
      detalle: 'Lista de precios gremio y líneas de crédito',
      numero: '573112067139',
      mensaje: 'Hola, soy instalador/integrador y deseo registrarme para acceder a precios mayoristas especiales.',
      icon: Package,
      badge: 'Precios Gremio'
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Modal Desplegable de Sedes / Canales */}
      {abierto && (
        <div className="mb-4 w-80 sm:w-96 bg-slate-900 border border-purple-500/30 rounded-2xl shadow-2xl shadow-black/80 overflow-hidden backdrop-blur-xl animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          {/* Header del Modal */}
          <div className="bg-gradient-to-r from-purple-800 to-indigo-900 p-4 text-white relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-md shadow-emerald-950">
                  <MessageSquare className="w-5 h-5 fill-white" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Canales Oficiales WhatsApp</h4>
                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Asesores disponibles en línea</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setAbierto(false)}
                className="p-1 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-[11px] text-purple-200 mt-2">
              Selecciona tu ciudad o departamento para atenderte al instante:
            </p>
          </div>

          {/* Lista de Canales por Ciudad */}
          <div className="p-3 space-y-2 max-h-[380px] overflow-y-auto">
            {opciones.map((opcion, index) => {
              const Icono = opcion.icon;
              return (
                <a
                  key={index}
                  href={`https://wa.me/${opcion.numero}?text=${encodeURIComponent(opcion.mensaje)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/80 hover:bg-purple-950/60 border border-white/5 hover:border-purple-500/40 transition-all group"
                >
                  <div className="flex items-start gap-2.5">
                    <div className="p-2 rounded-lg bg-emerald-950/70 text-emerald-400 border border-emerald-500/30 group-hover:scale-105 transition-transform mt-0.5">
                      <Icono className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-white group-hover:text-purple-300 transition-colors">
                          {opcion.titulo}
                        </span>
                        <span className="text-[9px] bg-slate-700/60 text-slate-300 px-1.5 py-0.2 rounded font-medium">
                          {opcion.badge}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-400 block">{opcion.detalle}</span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                </a>
              );
            })}
          </div>

          {/* Footer del Modal */}
          <div className="bg-slate-950/90 px-4 py-2.5 border-t border-white/5 text-center">
            <span className="text-[10px] text-slate-400">
              Respuesta promedio: <strong className="text-emerald-400 font-semibold">menos de 3 minutos</strong>
            </span>
          </div>

        </div>
      )}

      {/* Botón Flotante Principal de WhatsApp */}
      <button
        onClick={() => setAbierto(!abierto)}
        className="relative flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-bold p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl shadow-emerald-950/80 border-2 border-emerald-300/40 hover:scale-105 active:scale-95 transition-all group"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>

        {/* Ícono Oficial */}
        <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>

        <span className="hidden sm:inline text-xs font-extrabold tracking-wide">
          Atención Inmediata WhatsApp
        </span>
      </button>

    </div>
  );
}
