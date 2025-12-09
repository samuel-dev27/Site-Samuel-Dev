
import React from 'react';
import { Language } from '../types';
import { i18nData } from '../data/i18n';

interface FooterProps {
  currentLang: Language;
}

/**
 * COMPONENTE FOOTER / COMPONENTE FOOTER
 * -------------------------------------
 * [ES] Footer estándar de 3 columnas con enlaces y botón flotante de WhatsApp.
 * [PT] Footer padrão de 3 colunas com links e botão flutuante do WhatsApp.
 */
const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const t = i18nData[currentLang].footer;
  const t_nav = i18nData[currentLang].nav;

  return (
    <footer className="border-t border-white/10 bg-[#020202] relative overflow-hidden pt-20 pb-12">
        {/* Background Decorative Text (Giant "SAMUEL") */}
        <h2 className="absolute bottom-[-10%] left-0 w-full text-center text-[20vw] font-display font-bold text-white/[0.02] select-none pointer-events-none leading-none">
            SAMUEL
        </h2>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-3 gap-12 mb-16">
                
                {/* Column 1: Brand Identity */}
                <div>
                    <h2 className="text-3xl font-display font-bold uppercase leading-none mb-6">
                        SAMUEL.<span className="text-brand-orange">DEV</span>
                    </h2>
                    <p className="text-xl text-slate-400 font-light max-w-sm">
                        {t.phrase}
                    </p>
                </div>

                {/* Column 2: Navigation Links */}
                <div className="md:pl-12">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-slate-600 mb-6">Links</h3>
                    <ul className="space-y-4 text-sm font-medium">
                        <li><a href="#/" className="hover:text-brand-orange transition">{t_nav.home}</a></li>
                        <li><a href="#/sobre-mi" className="hover:text-brand-orange transition">{t_nav.about}</a></li>
                        <li><a href="#/servicios" className="hover:text-brand-orange transition">{t_nav.services}</a></li>
                        <li><a href="#/blog" className="hover:text-brand-orange transition">{t_nav.blog}</a></li>
                    </ul>
                </div>

                {/* Column 3: Contact Info */}
                <div>
                     <h3 className="text-sm font-bold uppercase tracking-widest text-slate-600 mb-6">Contacto Directo</h3>
                     <div className="space-y-4">
                        {/* GitHub */}
                        <a href="https://github.com/momo-dev27" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-white group transition">
                            <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-orange group-hover:text-black transition">
                                <i className="fa-brands fa-github"></i>
                            </span>
                            <span>github.com/momo-dev27</span>
                        </a>
                        {/* LinkedIn */}
                        <a href="https://linkedin.com/in/samuel-dev27" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-white group transition">
                            <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-orange group-hover:text-black transition">
                                <i className="fa-brands fa-linkedin-in"></i>
                            </span>
                            <span>/samuel-dev27</span>
                        </a>
                        {/* Email */}
                        <a href="mailto:samuellpasa@gmail.com" className="flex items-center gap-3 text-slate-300 hover:text-white group transition">
                            <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-orange group-hover:text-black transition">
                                <i className="fa-solid fa-envelope"></i>
                            </span>
                            <span>samuellpasa@gmail.com</span>
                        </a>
                        {/* WhatsApp (Text) */}
                        <a href="https://wa.me/5541997773252" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-white group transition">
                            <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-orange group-hover:text-black transition">
                                <i className="fa-brands fa-whatsapp"></i>
                            </span>
                            <span>+55 (41) 9 9777-3252</span>
                        </a>
                     </div>
                </div>
            </div>

            {/* Copyright Line */}
            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 uppercase tracking-widest">
                <p>© 2025 Samuel Albarran.</p>
                <p>Curitiba, PR, Brasil.</p>
            </div>
        </div>
        
        {/* Floating WhatsApp Button (Bottom Right) */}
        <a 
            href="https://wa.me/5541997773252"
            target="_blank"
            rel="noreferrer"
            className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 transition z-50 animate-pulse"
            title="Chat on WhatsApp"
        >
            <i className="fa-brands fa-whatsapp text-3xl"></i>
        </a>
    </footer>
  );
};

export default Footer;