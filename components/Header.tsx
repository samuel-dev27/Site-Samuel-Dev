
import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { Language } from '../types';
import { i18nData } from '../data/i18n';

interface HeaderProps {
  currentLang: Language;
  setLang: (lang: Language) => void;
}

/**
 * COMPONENTE HEADER / COMPONENTE HEADER
 * -------------------------------------
 * Features:
 * [ES] 1. Visibilidad inteligente (se oculta al bajar scroll).
 *      2. Cambio de idioma con banderas.
 *      3. Menú Móvil con Animación de Onda (usando Portal).
 * 
 * [PT] 1. Visibilidade inteligente (oculta ao rolar para baixo).
 *      2. Troca de idioma com bandeiras.
 *      3. Menu Móvel com Animação de Onda (usando Portal).
 */
const Header: React.FC<HeaderProps> = ({ currentLang, setLang }) => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const t = i18nData[currentLang].nav;
  const location = useLocation();
  const langMenuRef = useRef<HTMLDivElement>(null);

  /**
   * SMART HEADER LOGIC
   * Detects scroll direction to hide/show the navbar.
   */
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Only hide if mobile menu is NOT open (to avoid UX confusion)
      if (!mobileMenuOpen) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setVisible(false); // Hide on scroll down
        } else {
          setVisible(true);  // Show on scroll up
        }
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  /**
   * LOCK BODY SCROLL
   * Prevents background scrolling when mobile menu is active.
   */
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  /**
   * CLICK OUTSIDE LOGIC
   * Closes the language dropdown if clicking outside of it.
   */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setLangMenuOpen(false);
      }
    };

    if (langMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [langMenuOpen]);

  const isActive = (path: string) => {
      if (path === '/' && location.pathname !== '/') return false;
      return location.pathname.startsWith(path);
  }

  // Returns the emoji flag for the current language
  const getFlag = (lang: Language) => {
      switch(lang) {
          case 'es': return '🇪🇸';
          case 'pt': return '🇧🇷';
          case 'en': return '🇺🇸';
          default: return '';
      }
  }

  const navLinks = [
    { label: t.home, path: '/' },
    { label: t.about, path: '/sobre-mi' },
    { label: t.services, path: '/servicios' },
    { label: t.blog, path: '/blog' },
    { label: t.contact, path: '/contacto' },
  ];

  // CSS class to toggle header visibility
  const headerTransformClass = (mobileMenuOpen || visible) ? 'translate-y-0' : '-translate-y-full';

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-[100] transition-transform duration-500 ease-in-out bg-[#020202]/80 backdrop-blur-md border-b border-white/5 ${headerTransformClass}`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-xl md:text-2xl font-display font-bold tracking-tight uppercase relative hover:opacity-80 transition z-[101]"
            onClick={() => setMobileMenuOpen(false)}
          >
            SAMUEL.<span className="text-brand-orange">DEV</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`text-xs font-ui font-bold uppercase tracking-widest transition-colors hover:text-brand-orange ${isActive(link.path) ? 'text-brand-orange' : 'text-slate-400'}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Controls: Language & Mobile Menu */}
          <div className="flex items-center gap-4 z-[101]">
              
              {/* Language Switcher Dropdown */}
              <div className="relative" ref={langMenuRef}>
                  <button 
                      onClick={() => setLangMenuOpen(!langMenuOpen)}
                      className="flex items-center gap-2 text-xs font-ui font-bold border border-white/10 px-3 py-2 rounded-full hover:bg-white/5 transition uppercase bg-black/20 backdrop-blur-sm active:scale-95 text-white"
                  >
                      <span className="text-base leading-none filter grayscale-[0.2]">{getFlag(currentLang)}</span> 
                      <span>{currentLang.toUpperCase()}</span>
                      <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${langMenuOpen ? 'rotate-180' : ''}`}></i>
                  </button>
                  
                  {/* Dropdown Content */}
                  <div 
                    className={`absolute top-full right-0 mt-2 bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col min-w-[140px] origin-top-right transition-all duration-200 ${langMenuOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}
                  >
                      {(['es', 'pt', 'en'] as Language[]).map(l => (
                          <button
                              key={l}
                              onClick={() => {
                                  setLang(l);
                                  setLangMenuOpen(false);
                                  localStorage.setItem('samuel_lang', l);
                              }}
                              className={`px-4 py-3 text-left hover:bg-white/5 text-xs font-bold uppercase flex items-center gap-3 w-full transition-colors ${currentLang === l ? 'text-brand-orange bg-white/5' : 'text-slate-400'}`}
                          >
                              <span className="text-lg leading-none w-6 text-center">{getFlag(l)}</span> 
                              {l.toUpperCase()}
                          </button>
                      ))}
                  </div>
              </div>

              {/* Mobile Menu Toggle Button */}
              <button 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden text-2xl w-10 h-10 flex items-center justify-center border border-white/10 rounded-full hover:bg-white/5 transition text-white active:scale-90"
                  aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
              >
                  {mobileMenuOpen ? (
                     <i className="fa-solid fa-xmark"></i>
                  ) : (
                     <i className="fa-solid fa-bars"></i>
                  )}
              </button>
          </div>
        </div>
      </header>

      {/* 
        MOBILE MENU PORTAL / PORTAL DO MENU MÓVEL
        [ES] Usamos createPortal para renderizar este menú a nivel de <body>.
             Esto previene problemas de z-index con el Header.
        [PT] Usamos createPortal para renderizar este menu no nível do <body>.
             Isso evita problemas de z-index com o Header.
      */}
      {createPortal(
        <div 
          className="fixed inset-0 z-[90] bg-[#020202] flex flex-col items-center justify-start transition-[clip-path] duration-700 ease-[cubic-bezier(0.7,0,0.3,1)]"
          style={{
              // CIRCULAR WAVE ANIMATION:
              // Expands from the top-right corner where the button is.
              clipPath: mobileMenuOpen 
                  ? 'circle(150% at calc(100% - 2rem) 2.5rem)' 
                  : 'circle(0% at calc(100% - 2rem) 2.5rem)',
              pointerEvents: mobileMenuOpen ? 'all' : 'none',
              paddingTop: '8rem' // Spacing to clear the fixed header
          }}
        >
          {/* Internal decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-brand-orange/5 blur-[100px] rounded-full pointer-events-none"></div>

          {/* Links Container */}
          <nav className="flex flex-col items-center gap-8 relative z-10 w-full px-6">
              {navLinks.map((link, index) => (
                  <Link 
                      key={link.path} 
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      // Staggered Animation: Each link appears with a slight delay
                      className={`text-4xl sm:text-5xl font-display font-bold uppercase hover:text-brand-orange transition-all duration-500 ease-out transform w-full text-center ${
                          mobileMenuOpen 
                              ? 'translate-y-0 opacity-100' 
                              : 'translate-y-12 opacity-0'
                      }`}
                      style={{ transitionDelay: mobileMenuOpen ? `${index * 100 + 100}ms` : '0ms' }}
                  >
                      {link.label}
                  </Link>
              ))}
          </nav>
          
          {/* Footer Info (Socials) */}
          <div 
              className={`absolute bottom-12 text-center transition-all duration-500 delay-500 ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
              <p className="text-slate-500 text-xs uppercase tracking-widest mb-4">{t.follow_me}</p>
              <div className="flex gap-6 justify-center text-xl text-slate-300">
                  <a href="https://github.com/momo-dev27" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
                  <a href="https://linkedin.com/in/samuel-dev27" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                  <a href="mailto:samuellpasa@gmail.com"><i className="fa-solid fa-envelope"></i></a>
              </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Header;