
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Language } from '../types';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  currentLang: Language;
  setLang: (lang: Language) => void;
}

/**
 * COMPONENTE DE DISEÑO (LAYOUT) / COMPONENTE DE LAYOUT
 * ----------------------------------------------------
 * [ES] Envuelve cada página. Asegura que Header y Footer estén siempre presentes.
 *      También contiene los efectos globales de fondo (brillo naranja).
 * 
 * [PT] Envolve cada página. Garante que Header e Footer estejam sempre presentes.
 *      Também contém os efeitos globais de fundo (brilho laranja).
 */
const Layout: React.FC<LayoutProps> = ({ children, currentLang, setLang }) => {
  const { pathname } = useLocation();

  // [ES] Scroll hacia arriba cada vez que cambia la ruta
  // [PT] Rolagem para o topo sempre que a rota muda
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // [ES] Actualiza el título del documento (SEO básico)
  // [PT] Atualiza o título do documento (SEO básico)
  useEffect(() => {
    document.title = "Samuel.DEV | Full Stack & IT Support";
  }, []);

  return (
    <div className="relative min-h-screen text-white font-body selection:bg-brand-orange selection:text-black">
      {/* 
        Dynamic Backglow Effect 
        Changed from orange to Dark Tech Blue (#083344)
      */}
      <div className="fixed top-[-20%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] bg-[#083344] rounded-full blur-[150px] opacity-30 pointer-events-none z-0 mix-blend-screen animate-pulse-slow"></div>
      
      {/* Header receives lang props to handle switching */}
      <Header currentLang={currentLang} setLang={setLang} />
      
      {/* Main Content Area */}
      <main className="relative z-10 pt-24 min-h-[calc(100vh-400px)]">
        {children}
      </main>

      <Footer currentLang={currentLang} />
    </div>
  );
};

export default Layout;
