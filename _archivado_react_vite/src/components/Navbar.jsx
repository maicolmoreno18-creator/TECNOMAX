import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, X, Shield, Calculator, Building2, PhoneCall, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenCotizador, cartCount = 0, onOpenCart }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <nav className="sticky top-0 z-40 bg-[#080b13]/90 backdrop-blur-md border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Original con Respaldo Oficial */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-3 group">
              <div className="bg-white p-1.5 rounded-lg shadow-lg shadow-purple-950/40 border border-purple-500/30 group-hover:border-purple-400 transition-all flex items-center justify-center">
                <img 
                  src="/tecnomax-logo.jpg" 
                  alt="Tecnomax Security S.A.S" 
                  className="h-9 sm:h-11 object-contain"
                />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-[10px] tracking-widest text-purple-400 font-bold uppercase">Distribuidor Mayorista</span>
                <span className="text-xs font-semibold text-slate-300 flex items-center gap-1">
                  Dahua Colombia <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                </span>
              </div>
            </a>
          </div>

          {/* Enlaces de Navegación Escritorio */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#catalogo" className="hover:text-purple-400 transition-colors">Catálogo</a>
            <a href="#marcas" className="hover:text-purple-400 transition-colors">Marcas</a>
            <a 
              href="#cotizador" 
              onClick={(e) => {
                if (onOpenCotizador) {
                  e.preventDefault();
                  onOpenCotizador();
                }
              }}
              className="flex items-center gap-1.5 text-purple-300 hover:text-purple-200 bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/30 px-3 py-1.5 rounded-full transition-all"
            >
              <Calculator className="w-3.5 h-3.5 text-purple-400" />
              <span>Cotizador Exprés</span>
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-[10px] text-white px-1.5 py-0.2 rounded-full font-bold">PRO</span>
            </a>
            <a href="#sedes" className="hover:text-purple-400 transition-colors">Sedes y Bodegas</a>
            <a href="#nosotros" className="hover:text-purple-400 transition-colors">Nosotros</a>
          </div>

          {/* Acciones del Navbar (Buscador, Carrito, Botón Mayorista) */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            
            {/* Buscador Rápido (Desktop) */}
            <div className="hidden md:flex items-center relative">
              <input
                type="text"
                placeholder="Buscar cámara, NVR, disco..."
                className="bg-slate-900/80 border border-white/10 text-xs text-white rounded-full pl-9 pr-4 py-2 w-48 lg:w-60 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 placeholder-slate-500 transition-all"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
            </div>

            {/* Botón Carrito / Cotización */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-white/10 hover:border-purple-500/50 transition-all flex items-center justify-center group"
              title="Ver Cotización"
            >
              <ShoppingBag className="w-5 h-5 text-slate-300 group-hover:text-purple-400 transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/40">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Botón CTA Mayorista */}
            <a
              href="#cotizador"
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 text-white text-xs font-bold px-4 py-2.5 rounded-full shadow-lg shadow-purple-900/40 border border-purple-400/30 transition-all hover:scale-[1.02] active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-200" />
              <span>Canal Integrador</span>
            </a>

            {/* Botón Hamburguesa Móvil */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-900 text-slate-300 border border-white/10 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>
      </div>

      {/* Menú Desplegable Móvil (Fluido y 100% Responsivo) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0b0f19] border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
          <div className="relative mb-3">
            <input
              type="text"
              placeholder="Buscar cámara, NVR, Dahua..."
              className="w-full bg-slate-900 border border-white/10 text-xs text-white rounded-lg pl-9 pr-4 py-2.5 placeholder-slate-500"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          </div>

          <div className="flex flex-col space-y-2 text-sm font-medium">
            <a 
              href="#catalogo" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-md hover:bg-slate-800 text-slate-200"
            >
              📦 Catálogo Mayorista
            </a>
            <a 
              href="#marcas" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-md hover:bg-slate-800 text-slate-200"
            >
              🛡️ Marcas Autorizadas
            </a>
            <a 
              href="#cotizador" 
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenCotizador) onOpenCotizador();
              }}
              className="p-2 rounded-md bg-purple-950/60 border border-purple-500/40 text-purple-200 flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <Calculator className="w-4 h-4 text-purple-400" />
                Cotizador Exprés de Kits
              </span>
              <span className="text-[10px] bg-purple-600 text-white px-2 py-0.5 rounded-full font-bold">NUEVO</span>
            </a>
            <a 
              href="#sedes" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-md hover:bg-slate-800 text-slate-200"
            >
              🏢 Sedes: Bogotá · Medellín · Barranquilla
            </a>
            <a 
              href="#nosotros" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-md hover:bg-slate-800 text-slate-200"
            >
              🤝 Nosotros y Garantías
            </a>
          </div>

          <div className="pt-2 border-t border-white/5">
            <a
              href="#cotizador"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold py-3 rounded-lg shadow-lg shadow-purple-900/40"
            >
              <Sparkles className="w-4 h-4" />
              Solicitar Precios de Distribuidor
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
