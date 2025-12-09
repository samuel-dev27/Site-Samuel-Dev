
import React from 'react';
import { Language } from '../types';
import { i18nData } from '../data/i18n';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';

interface ServicesProps {
  currentLang: Language;
}

/**
 * PÁGINA DE SERVICIOS / PÁGINA DE SERVIÇOS
 * ----------------------------------------
 * [ES] Secciones:
 *      1. Intro/Hero.
 *      2. Grid de 3 tarjetas de Precios/Servicios.
 *      3. CTA WhatsApp.
 *      4. Acordeón FAQ (Estilizado).
 *      5. CTAs Internos (Link a Portfolio/Blog).
 * 
 * [PT] Seções:
 *      1. Intro/Hero.
 *      2. Grid de 3 cartões de Preços/Serviços.
 *      3. CTA WhatsApp.
 *      4. Acordeão FAQ (Estilizado).
 *      5. CTAs Internos (Link para Portfolio/Blog).
 */
const Services: React.FC<ServicesProps> = ({ currentLang }) => {
  const t = i18nData[currentLang].services;

  return (
    <div className="w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20">
        
        {/* 1. HERO TITLE */}
        <RevealOnScroll className="text-center mb-24 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-brand-orange/10 blur-[120px] rounded-full pointer-events-none"></div>
            <span className="text-brand-orange font-mono text-sm mb-4 block animate-pulse-slow">02 / SERVICES</span>
            <h1 className="text-5xl md:text-8xl font-display uppercase font-bold mb-6 relative z-10">
            {t.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl mx-auto relative z-10">
            {t.subtitle}
            </p>
        </RevealOnScroll>

        {/* 2. SERVICES GRID */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
            
            {/* Card 1: Web Express */}
            <RevealOnScroll delay={100} className="glass-card p-8 rounded-2xl flex flex-col hover:-translate-y-2 transition duration-500 border-t-4 border-t-slate-700">
                <div className="mb-6">
                    <div className="flex justify-between items-start mb-6">
                        <span className="text-5xl block text-slate-600 font-display">01</span>
                        <i className="fa-solid fa-rocket text-3xl text-brand-orange animate-float"></i>
                    </div>
                    <h3 className="text-2xl font-display uppercase mb-4 text-white">{t.card1_title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed min-h-[60px]">{t.card1_desc}</p>
                    <ul className="mt-4 space-y-2 text-xs text-slate-500">
                        {t.card1_features && t.card1_features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2"><i className="fa-solid fa-check text-brand-orange"></i> {feature}</li>
                        ))}
                        {!t.card1_features && (
                            <>
                                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-brand-orange"></i> Responsive Design</li>
                                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-brand-orange"></i> SEO Basic</li>
                                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-brand-orange"></i> Fast Delivery</li>
                            </>
                        )}
                    </ul>
                </div>
                <div className="mt-auto pt-6 border-t border-white/10">
                    <Link to="/contacto" className="text-sm font-bold uppercase tracking-widest text-white hover:text-brand-orange transition flex items-center gap-2">
                        {t.card1_btn} <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                </div>
            </RevealOnScroll>

            {/* Card 2: Corporate - Highlighted */}
            <RevealOnScroll delay={200} className="glass-card p-8 rounded-2xl flex flex-col hover:-translate-y-2 transition duration-500 border-t-4 border-t-brand-orange bg-white/[0.03] relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-orange text-black text-xs font-bold uppercase px-4 py-1 rounded-full shadow-lg shadow-brand-orange/50 animate-pulse-slow">Popular</div>
                <div className="mb-6">
                    <div className="flex justify-between items-start mb-6">
                        <span className="text-5xl block text-brand-orange font-display">02</span>
                        <i className="fa-solid fa-building text-3xl text-white animate-float" style={{ animationDelay: '1s' }}></i>
                    </div>
                    <h3 className="text-2xl font-display uppercase mb-4 text-white">{t.card2_title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed min-h-[60px]">{t.card2_desc}</p>
                    <ul className="mt-4 space-y-2 text-xs text-slate-400">
                        {t.card2_features && t.card2_features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2"><i className="fa-solid fa-check text-brand-orange"></i> {feature}</li>
                        ))}
                    </ul>
                </div>
                <div className="mt-auto pt-6 border-t border-white/10">
                    <Link to="/contacto" className="text-sm font-bold uppercase tracking-widest text-brand-orange hover:text-white transition flex items-center gap-2">
                        {t.card2_btn} <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                </div>
            </RevealOnScroll>

            {/* Card 3: Support */}
            <RevealOnScroll delay={300} className="glass-card p-8 rounded-2xl flex flex-col hover:-translate-y-2 transition duration-500 border-t-4 border-t-slate-700">
                <div className="mb-6">
                    <div className="flex justify-between items-start mb-6">
                        <span className="text-5xl block text-slate-600 font-display">03</span>
                        <i className="fa-solid fa-screwdriver-wrench text-3xl text-brand-orange animate-float" style={{ animationDelay: '2s' }}></i>
                    </div>
                    <h3 className="text-2xl font-display uppercase mb-4 text-white">{t.card3_title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed min-h-[60px]">{t.card3_desc}</p>
                    <ul className="mt-4 space-y-2 text-xs text-slate-500">
                        {t.card3_features && t.card3_features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2"><i className="fa-solid fa-check text-brand-orange"></i> {feature}</li>
                        ))}
                    </ul>
                </div>
                <div className="mt-auto pt-6 border-t border-white/10">
                    <Link to="/contacto" className="text-sm font-bold uppercase tracking-widest text-white hover:text-brand-orange transition flex items-center gap-2">
                        {t.card3_btn} <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                </div>
            </RevealOnScroll>
        </div>

        {/* 3. CTA WHATSAPP */}
        <RevealOnScroll className="text-center mb-24">
            <a href="https://wa.me/5541997773252" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-full font-bold uppercase tracking-widest hover:bg-[#20bd5a] transition shadow-lg shadow-green-900/20 group hover:scale-105 active:scale-95">
                <i className="fa-brands fa-whatsapp text-2xl group-hover:scale-110 transition"></i>
                <span>{t.whatsapp_cta}</span>
            </a>
        </RevealOnScroll>

        {/* 4. FAQ SECTION & INTERNAL LINKS */}
        <div className="grid md:grid-cols-12 gap-12">
            
            {/* FAQ Column */}
            <div className="md:col-span-8">
                <RevealOnScroll>
                    <h3 className="text-2xl font-display uppercase mb-8 text-brand-orange flex items-center gap-3">
                        <i className="fa-solid fa-circle-question"></i> {t.faq_title}
                    </h3>
                </RevealOnScroll>
                <div className="space-y-4">
                    {t.faq_items.map((item, index) => (
                        <RevealOnScroll key={index} delay={index * 100}>
                            <details className="group border border-white/10 rounded-xl bg-white/[0.02] open:bg-white/5 transition duration-300">
                                <summary className="cursor-pointer p-6 font-bold flex justify-between items-center list-none select-none text-slate-200 hover:text-white transition">
                                    <span className="text-lg">{item.question}</span>
                                    <span className="group-open:rotate-180 transition text-brand-orange bg-white/5 w-8 h-8 flex items-center justify-center rounded-full text-xl font-light">↓</span>
                                </summary>
                                <div className="p-6 pt-0 text-slate-400 text-sm leading-relaxed border-t border-white/5 mt-2 animate-in fade-in slide-in-from-top-2">
                                    {item.answer}
                                </div>
                            </details>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>

            {/* Internal Links Column */}
            <div className="md:col-span-4 space-y-6">
                <RevealOnScroll delay={100} className="glass-card p-6 rounded-xl hover:border-brand-orange/50 transition group flex flex-col justify-between min-h-[160px] bg-white/[0.02]">
                    <div>
                            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white mb-4 border border-white/10 group-hover:bg-brand-orange group-hover:text-black transition">
                                <i className="fa-solid fa-briefcase"></i>
                            </div>
                            <h4 className="text-lg font-display uppercase mb-2 text-white">{t.cta_portfolio_card.title}</h4>
                            <p className="text-xs text-slate-400 mb-4">{t.cta_portfolio_card.desc}</p>
                    </div>
                    <Link to="/sobre-mi" className="text-brand-orange text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:translate-x-2 transition">
                        {t.cta_portfolio_card.btn} <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                </RevealOnScroll>

                <RevealOnScroll delay={200} className="glass-card p-6 rounded-xl hover:border-brand-orange/50 transition group flex flex-col justify-between min-h-[160px] bg-white/[0.02]">
                    <div>
                            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white mb-4 border border-white/10 group-hover:bg-brand-orange group-hover:text-black transition">
                                <i className="fa-regular fa-newspaper"></i>
                            </div>
                            <h4 className="text-lg font-display uppercase mb-2 text-white">{t.cta_blog_card.title}</h4>
                            <p className="text-xs text-slate-400 mb-4">{t.cta_blog_card.desc}</p>
                    </div>
                    <Link to="/blog" className="text-brand-orange text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:translate-x-2 transition">
                        {t.cta_blog_card.btn} <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                </RevealOnScroll>
            </div>

        </div>
        </div>
    </div>
  );
};

export default Services;
