import React, { useState } from 'react';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marcas from './components/Marcas';
import WhatsAppWidget from './components/WhatsAppWidget';

export default function App() {
  const [sedeSeleccionada, setSedeSeleccionada] = useState('bogota');
  const [cotizadorAbierto, setCotizadorAbierto] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleOpenCotizador = () => {
    const el = document.getElementById('cotizador');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setCotizadorAbierto(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#080b13] text-slate-100 flex flex-col font-sans selection:bg-purple-600 selection:text-white">
      {/* 1. Barra Superior Informativa con Selector de Sede */}
      <Topbar 
        sedeSeleccionada={sedeSeleccionada} 
        setSedeSeleccionada={setSedeSeleccionada} 
      />

      {/* 2. Navbar Principal con Logo Original y Navegación Fluida */}
      <Navbar 
        onOpenCotizador={handleOpenCotizador}
        cartCount={cartItems.length}
        onOpenCart={() => alert('Tu lista de cotización se abrirá aquí')}
      />

      {/* 3. Hero Section de Alto Impacto */}
      <main className="flex-grow">
        <Hero onOpenCotizador={handleOpenCotizador} />

        {/* 4. Marcas Oficiales Autorizadas */}
        <Marcas />

        {/* Placeholder dinámico de las siguientes secciones */}
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <div className="p-8 rounded-2xl bg-purple-950/20 border border-purple-500/20 max-w-xl mx-auto">
            <span className="text-xs font-bold text-purple-400 uppercase tracking-widest block mb-2">Fase 1 Completada con Éxito</span>
            <h3 className="text-xl font-bold text-white mb-2">Base, Header, Hero y WhatsApp Inteligente Listos</h3>
            <p className="text-slate-400 text-sm">
              Siguiente paso: Construcción del <strong>Catálogo Mayorista Interactivo con Fotos Reales</strong> y el <strong>Cotizador Exprés de Kits</strong>.
            </p>
          </div>
        </div>
      </main>

      {/* 5. Botón de WhatsApp Multi-Sede Inteligente */}
      <WhatsAppWidget />
    </div>
  );
}
