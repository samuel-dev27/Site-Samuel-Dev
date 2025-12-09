
import React from 'react';
import { Language } from '../types';
import { i18nData } from '../data/i18n';
import RevealOnScroll from '../components/RevealOnScroll';
import { Link } from 'react-router-dom';

interface AboutProps {
  currentLang: Language;
}

/**
 * PÁGINA SOBRE MÍ (ABOUT) / PÁGINA SOBRE MIM (ABOUT)
 * --------------------------------------------------
 * [ES] Rediseño completo:
 *      1. Header centrado con Foto + Nombre + Tags coloreados.
 *      2. Layout grid para "Mi Historia" y "Trayectoria".
 *      3. Tarjeta "Trabajamos Juntos".
 * 
 * [PT] Redesign completo:
 *      1. Header centralizado com Foto + Nome + Tags coloridas.
 *      2. Layout grid para "Minha História" e "Trajetória".
 *      3. Cartão "Trabalhamos Juntos".
 */
const About: React.FC<AboutProps> = ({ currentLang }) => {
  const t = i18nData[currentLang].about;
  const t_hero = i18nData[currentLang].hero;
  const t_tags = i18nData[currentLang].tags;

  // Timeline Data
  const timeline = [
    { 
        year: '2025', 
        role: currentLang === 'es' ? 'Asistente Web Design' : (currentLang === 'pt' ? 'Assistente Web Design' : 'Web Design Assistant'), 
        company: 'Apache Creative', 
        desc: currentLang === 'en' ? 'Frontend development and UI assistance.' : (currentLang === 'pt' ? 'Assistência em desenvolvimento frontend e UI.' : 'Asistencia en desarrollo frontend y UI.'),
        icon: 'fa-solid fa-paint-brush'
    },
    { 
        year: '2020 - 2022', 
        role: currentLang === 'es' ? 'Soporte Técnico' : (currentLang === 'pt' ? 'Suporte Técnico' : 'Technical Support'), 
        company: currentLang === 'es' ? 'Freelance / Autónomo' : (currentLang === 'pt' ? 'Freelance / Autônomo' : 'Freelance'), 
        desc: currentLang === 'en' ? 'PC assembly, hardware diagnostics, Windows configuration, networks.' : (currentLang === 'pt' ? 'Montagem de PCs, diagnóstico de hardware, Windows, redes.' : 'Montaje de PCs, diagnóstico de hardware, configuración Windows, redes.'),
        icon: 'fa-solid fa-screwdriver-wrench'
    },
    { 
        year: '2020', 
        role: currentLang === 'es' ? 'Informática Avanzada' : (currentLang === 'pt' ? 'Informática Avançada' : 'Advanced IT Course'), 
        company: 'Instituto CICA', 
        desc: currentLang === 'en' ? 'Maintenance of computers and advanced IT.' : (currentLang === 'pt' ? 'Manutenção de computadores e informática avançada.' : 'Mantenimiento de computadores e informática avanzada.'),
        icon: 'fa-solid fa-graduation-cap'
    },
    { 
        year: '2017 - 2020', 
        role: currentLang === 'es' ? 'Ing. Sistemas (Incompleto)' : (currentLang === 'pt' ? 'Eng. Sistemas (Incompleto)' : 'Systems Eng. (Incomplete)'), 
        company: 'I.U.P. Santiago Mariño', 
        desc: currentLang === 'en' ? '3 years completed. Focused on Systems Engineering.' : (currentLang === 'pt' ? '3 anos cursados. Foco em Engenharia de Sistemas.' : '3 años cursados. Enfoque en Ingeniería de Sistemas.'),
        icon: 'fa-solid fa-university'
    }
  ];

  const stack = [
      { name: 'HTML5', icon: 'fa-brands fa-html5', color: 'text-[#E34F26]' },
      { name: 'CSS3', icon: 'fa-brands fa-css3-alt', color: 'text-[#1572B6]' },
      { name: 'JavaScript', icon: 'fa-brands fa-js', color: 'text-[#F7DF1E]' },
      { name: 'Tailwind CSS', icon: 'fa-solid fa-wind', color: 'text-[#38B2AC]' },
      { name: 'WordPress', icon: 'fa-brands fa-wordpress', color: 'text-[#21759B]' },
      { name: 'Windows', icon: 'fa-brands fa-windows', color: 'text-[#0078D6]' },
      { name: 'Hardware', icon: 'fa-solid fa-microchip', color: 'text-slate-400' },
      { name: 'Networks', icon: 'fa-solid fa-network-wired', color: 'text-slate-400' }
  ];

  const getCvLink = () => {
      switch(currentLang) {
          case 'pt': return '/cv-samuel-pt.pdf';
          case 'es': return '/cv-samuel-es.pdf';
          default: return '/cv-samuel-en.pdf';
      }
  }

  // Tags for Profile Header
  const profileTags = ['Engineering', 'WebDev', 'Support'];
  
  // Color Logic for Tags
  const getTagClass = (tag: string) => {
      if (['Engineering', 'Business', 'Career'].includes(tag)) return 'tag-orange';
      if (['WebDev', 'React', 'WordPress'].includes(tag)) return 'tag-blue';
      if (['Support', 'Hardware', 'IT', 'Networking'].includes(tag)) return 'tag-green';
      return 'tag-gray';
  };

  // Projects Data from i18n
  const projects = t.projects;
  const projectImages = [
      'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=800&auto=format&fit=crop', // Tattoo
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop', // Sweets
      'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=800&auto=format&fit=crop'  // Studio
  ];

  return (
    <div className="w-full overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-20">
        
        {/* 1. CENTERED PROFILE HEADER */}
        <RevealOnScroll className="flex flex-col items-center text-center mb-24 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none"></div>
            
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl mb-8 relative z-10 hover:scale-105 transition duration-500">
                <img src="https://i.postimg.cc/hj33LSPJ/samuel.png" alt="Samuel" className="w-full h-full object-cover object-top bg-[#050505]" />
            </div>

            <h1 className="text-5xl md:text-6xl font-display uppercase font-bold mb-2 relative z-10 text-white">Samuel Albarran</h1>
            <p className="text-xl text-brand-orange font-mono mb-6 relative z-10">{t_hero.role}</p>
            
            <div className="flex gap-3 flex-wrap justify-center relative z-10">
                {profileTags.map(tag => (
                    <span key={tag} className={`tag-badge ${getTagClass(tag)}`}>
                        {t_tags[tag] || tag}
                    </span>
                ))}
            </div>

            {/* CV Button */}
            <div className="mt-8 relative z-10">
                <a href={getCvLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-300 border border-white/20 px-8 py-3 rounded-full hover:bg-white hover:text-black transition">
                    <i className="fa-solid fa-download"></i> {t.cv_btn}
                </a>
            </div>
        </RevealOnScroll>

        {/* 2. MAIN GRID LAYOUT */}
        <div className="grid md:grid-cols-12 gap-12 mb-24">
            
            {/* LEFT COL: HISTORY (5 cols) */}
            <div className="md:col-span-5 space-y-8">
                <RevealOnScroll className="glass-card p-8 rounded-2xl border-t-2 border-brand-orange">
                    <h2 className="text-2xl font-display uppercase mb-6 flex items-center gap-3">
                        <i className="fa-regular fa-id-card text-brand-orange"></i> Mi Historia
                    </h2>
                    <p className="text-slate-300 leading-relaxed font-light mb-6">
                        {t.bio}
                    </p>
                    <p className="text-sm text-slate-500 italic border-l-2 border-white/20 pl-4">
                        {currentLang === 'es' ? 'Cuando no estoy estudiando o trabajando, puedes encontrarme contribuyendo a proyectos open source o explorando nuevas tecnologías.' : (currentLang === 'pt' ? 'Quando não estou estudando ou trabalhando, você pode me encontrar contribuindo para projetos open source ou explorando novas tecnologias.' : 'When I am not studying or working, you can find me contributing to open source projects or exploring new technologies.')}
                    </p>
                </RevealOnScroll>

                {/* Work Together Card */}
                <RevealOnScroll delay={200} className="glass-card p-8 rounded-2xl bg-white/[0.03]">
                    <h3 className="text-xl font-display uppercase mb-2">
                        {currentLang === 'es' ? '¿Trabajamos Juntos?' : (currentLang === 'pt' ? 'Trabalhamos Juntos?' : 'Work Together?')}
                    </h3>
                    <p className="text-xs text-slate-400 mb-6">
                        {currentLang === 'es' ? 'Disponible para proyectos freelance y consultoría.' : 'Disponível para projetos freelance e consultoria.'}
                    </p>
                    <div className="space-y-4">
                        <a href="mailto:samuellpasa@gmail.com" className="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition group">
                            <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-black transition"><i className="fa-solid fa-envelope"></i></span>
                            samuellpasa@gmail.com
                        </a>
                        <a href="https://github.com/momo-dev27" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition group">
                            <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-black transition"><i className="fa-brands fa-github"></i></span>
                            github.com/momo-dev27
                        </a>
                    </div>
                </RevealOnScroll>
            </div>

            {/* RIGHT COL: TRAJECTORY (7 cols) */}
            <div className="md:col-span-7">
                <RevealOnScroll className="mb-8 flex items-center gap-4">
                    <h2 className="text-3xl font-display uppercase">{t.timeline_title}</h2>
                    <span className="h-px flex-1 bg-white/10"></span>
                </RevealOnScroll>
                
                <div className="space-y-0 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[19px] top-4 bottom-0 w-0.5 bg-gradient-to-b from-brand-orange via-brand-orange/50 to-transparent"></div>

                    {timeline.map((item, index) => (
                        <RevealOnScroll key={index} delay={index * 100} className="relative pl-12 pb-12 last:pb-0 group">
                            {/* Dot on line */}
                            <div className="absolute left-[13px] top-1.5 w-3.5 h-3.5 rounded-full bg-black border-2 border-brand-orange group-hover:scale-125 transition duration-300 z-10 shadow-[0_0_10px_rgba(255,107,0,0.5)]"></div>
                            
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-brand-orange transition">{item.role}</h3>
                                        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">{item.company}</p>
                                    </div>
                                    <span className="text-xs font-mono text-brand-orange bg-brand-orange/10 px-2 py-1 rounded border border-brand-orange/20 whitespace-nowrap mt-2 md:mt-0">{item.year}</span>
                            </div>
                            
                            <p className="text-slate-400 text-sm leading-relaxed max-w-lg">{item.desc}</p>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>

        </div>

        {/* 3. TECH STACK */}
        <RevealOnScroll className="mb-24">
            <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-display uppercase text-slate-500">Tech Stack</h2>
                <div className="h-px flex-1 bg-white/10"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {stack.map((tech, idx) => (
                <div key={tech.name} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col items-center gap-2 hover:bg-white/5 transition group">
                <i className={`${tech.icon} ${tech.color} text-2xl group-hover:scale-110 transition animate-float`} style={{ animationDelay: `${idx * 0.2}s` }}></i>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{tech.name}</span>
                </div>
            ))}
            </div>
        </RevealOnScroll>

        {/* 4. FEATURED PROJECTS (Portfolio) */}
        <section>
            <RevealOnScroll className="mb-12 text-center">
                <span className="text-brand-orange font-mono text-xs mb-2 block">02 / PORTFOLIO</span>
                <h2 className="text-4xl md:text-5xl font-display uppercase font-bold">{t.portfolio_title}</h2>
            </RevealOnScroll>

            <div className="grid md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <RevealOnScroll key={index} delay={index * 150} className="glass-card rounded-2xl overflow-hidden group hover:-translate-y-2 transition duration-500 flex flex-col h-full">
                        {/* Image Placeholder */}
                        <div className="aspect-video bg-slate-800 relative overflow-hidden">
                            <img src={projectImages[index]} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-60 group-hover:opacity-100" />
                            <div className="absolute top-4 left-4">
                                <span className="bg-black/80 backdrop-blur text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/10">
                                    {project.category}
                                </span>
                            </div>
                        </div>
                        
                        {/* Content */}
                        <div className="p-6 flex flex-col flex-1">
                            <h3 className="text-xl font-display uppercase mb-3 group-hover:text-brand-orange transition">{project.title}</h3>
                            <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1">
                                {project.desc}
                            </p>
                            <a href="#" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-brand-orange transition mt-auto">
                                Ver Proyecto <i className="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>
                    </RevealOnScroll>
                ))}
            </div>
        </section>
        </div>
    </div>
  );
};

export default About;
