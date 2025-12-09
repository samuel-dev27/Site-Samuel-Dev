
import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import { i18nData } from '../data/i18n';
import { posts } from '../data/posts';
import RevealOnScroll from '../components/RevealOnScroll';

interface HomeProps {
  currentLang: Language;
}

/**
 * PÁGINA DE INICIO (HOME) / PÁGINA INICIAL (HOME)
 * -----------------------------------------------
 * [ES] Layout Editorial "Magazine":
 *      - Imagen de fondo gigante (Samuel) que cruza secciones (z-10).
 *      - Texto Hero encima (z-20).
 *      - Bento Grid encima de las piernas de la imagen (z-30).
 * 
 * [PT] Layout Editorial "Magazine":
 *      - Imagem de fundo gigante (Samuel) que cruza seções (z-10).
 *      - Texto Hero acima (z-20).
 *      - Bento Grid acima das pernas da imagem (z-30).
 */
const Home: React.FC<HomeProps> = ({ currentLang }) => {
  const t = i18nData[currentLang].hero;
  const t_tags = i18nData[currentLang].tags;
  const latestPost = posts[0];
  const postContent = latestPost.locales[currentLang];

  // Helper to color code tags
  const getTagClass = (tag: string) => {
    if (['Engineering', 'Business', 'Career', 'Desarrollo', 'Desenvolvimento', 'Development'].includes(tag)) return 'tag-orange';
    if (['WebDev', 'React', 'WordPress', 'Web'].includes(tag)) return 'tag-blue';
    if (['Support', 'Hardware', 'IT', 'Networking', 'Soporte', 'Suporte'].includes(tag)) return 'tag-green';
    return 'tag-gray';
  };

  return (
    <div className="relative w-full overflow-hidden min-h-screen">
      
      {/* 
        ========================================
        GLOBAL BACKGROUND ELEMENTS
        ========================================
      */}

      {/* 1. GIANT BACKGROUND TEXT (Layer 0) */}
      <h1 className="absolute top-[20%] left-1/2 -translate-x-1/2 text-[15vw] font-display font-bold text-transparent border-text select-none pointer-events-none z-0 opacity-10 whitespace-nowrap leading-none tracking-tighter" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>
          SAMUEL
      </h1>

      {/* 2. GIANT EDITORIAL IMAGE (Layer 10 - Desktop) */}
      <img
        src="https://i.postimg.cc/V6806McS/sam.png"
        alt="Samuel Albarran"
        className="hidden md:block absolute top-0 right-0 h-[135vh] w-auto object-cover z-10 pointer-events-none select-none mask-gradient-bottom opacity-90"
      />

      {/* 2b. MOBILE IMAGE (Layer 10 - Mobile) */}
      <img
        src="https://i.postimg.cc/V6806McS/sam.png"
        alt="Samuel Albarran"
        className="md:hidden absolute top-0 left-0 right-0 mx-auto w-full h-[80vh] object-contain object-top z-0 pointer-events-none select-none"
      />

      {/* 3. DECORATIVE BLUR (Layer 0) */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#083344] rounded-full blur-[150px] opacity-20 pointer-events-none z-0 mix-blend-screen animate-pulse-slow"></div>
      
      {/* Floating Shapes - More added for 'Alive' feeling */}
      <div className="absolute top-[15%] left-[10%] text-brand-orange text-4xl opacity-50 animate-float z-0 pointer-events-none">
          <i className="fa-solid fa-star"></i>
      </div>
      <div className="absolute bottom-[20%] left-[20%] text-blue-500 text-2xl opacity-30 animate-float z-0 pointer-events-none" style={{ animationDelay: '2s' }}>
          <i className="fa-solid fa-code"></i>
      </div>
      <div className="absolute top-[40%] right-[40%] text-green-500 text-xl opacity-20 animate-float z-0 pointer-events-none" style={{ animationDelay: '1.5s' }}>
          <i className="fa-solid fa-terminal"></i>
      </div>


      {/* 
        ========================================
        HERO SECTION (Layer 20)
        ========================================
      */}
      <section className="relative min-h-[90vh] flex flex-col justify-center pt-20 pb-20 z-20">
        
        {/* Floating Glass Card 1 - Location */}
        <div className="absolute top-[25%] left-[5%] md:left-auto md:right-[35%] z-30 animate-float">
            <div className="glass-card px-4 py-2 rounded-xl flex items-center gap-3 shadow-2xl bg-black/40 md:bg-white/5 backdrop-blur-md border border-white/20">
                <div className="w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center text-black">
                    <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                    <p className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">Location</p>
                    <p className="text-xs font-bold text-white">{t.location}</p>
                </div>
            </div>
        </div>

        {/* Floating Glass Card 2 - Role */}
        <div className="absolute bottom-[35%] right-[5%] md:right-[10%] z-30 animate-float" style={{ animationDelay: '1.5s' }}>
            <div className="glass-card px-4 py-2 rounded-xl flex items-center gap-3 shadow-2xl bg-black/40 md:bg-white/5 backdrop-blur-md border border-white/20">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-brand-orange border border-white/10">
                    <i className="fa-solid fa-code"></i>
                </div>
                <div>
                    <p className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">Status</p>
                    <p className="text-xs font-bold text-white">Available</p>
                </div>
            </div>
        </div>
        
        <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center h-full">
          
          {/* TEXT CONTENT (Left Side) */}
          <RevealOnScroll className="md:col-span-7 flex flex-col justify-center text-center md:text-left mt-32 md:mt-0">
             <h2 className="text-5xl md:text-8xl font-display font-bold uppercase tracking-tight leading-[0.9] mb-6 drop-shadow-2xl relative z-20">
                Samuel<br/><span className="text-white/60">Albarran</span>
             </h2>
             <div className="h-1 w-24 bg-brand-orange mb-6 mx-auto md:mx-0 shadow-[0_0_20px_rgba(255,107,0,0.5)]"></div>
             <p className="text-xl md:text-2xl text-slate-200 font-light font-body max-w-lg mx-auto md:mx-0 mb-8 drop-shadow-md bg-black/30 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none rounded-lg p-4 md:p-0 relative z-20 border border-white/10 md:border-none">
                {t.sub} <br/> <span className="text-brand-orange text-lg font-bold"><i className="fa-solid fa-location-dot"></i> {t.location}</span>
             </p>
             
             {/* Mobile-Only CTA */}
             <div className="md:hidden flex justify-center relative z-20">
                <Link to="/servicios" className="px-8 py-3 bg-brand-orange text-black font-bold uppercase tracking-widest rounded-full hover:bg-white transition shadow-lg shadow-orange-500/20">
                    {t.cta_contact}
                </Link>
             </div>
          </RevealOnScroll>

        </div>
      </section>

      {/* 
        ========================================
        BENTO GRID SECTION (Layer 30)
        ========================================
      */}
      <section className="relative z-30 max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[300px]">
            
            {/* Card 1: Profile & Tags */}
            <RevealOnScroll className="md:col-span-2 glass-card p-8 rounded-2xl flex flex-col justify-between group hover:border-brand-orange/30 transition duration-500 bg-[#020202]/80 backdrop-blur-xl">
                 <div>
                    <div className="flex justify-between items-start mb-4">
                        <i className="fa-solid fa-terminal text-3xl text-slate-600 group-hover:text-brand-orange transition animate-float"></i>
                        <div className="px-3 py-1 bg-white/5 rounded-full text-[10px] uppercase font-bold tracking-wider text-green-400 border border-green-500/20 shadow-[0_0_10px_rgba(74,222,128,0.2)] animate-pulse-slow">Available</div>
                    </div>
                    <h3 className="text-3xl font-display uppercase mb-2">{t.bento_profile_title}</h3>
                    <p className="text-slate-400">{t.bento_profile_desc}</p>
                 </div>
                 <div className="flex gap-2 mt-4 flex-wrap">
                    {t.tags.map(tag => (
                        <span key={tag} className={`tag-badge ${getTagClass(tag)}`}>
                            {t_tags[tag] || tag}
                        </span>
                    ))}
                </div>
            </RevealOnScroll>

            {/* Card 2: Services Link */}
            <RevealOnScroll delay={100} className="md:col-span-2 h-full">
                <Link to="/servicios" className="block w-full h-full glass-card p-8 rounded-2xl relative overflow-hidden group hover:bg-white/5 transition duration-500 bg-[#020202]/80 backdrop-blur-xl">
                    <div className="relative z-10 flex flex-col h-full justify-between">
                        <div>
                            <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center text-black mb-4 group-hover:scale-110 transition shadow-lg shadow-orange-500/30">
                                <span className="material-icons text-2xl">rocket_launch</span>
                            </div>
                            <h3 className="text-3xl font-display uppercase leading-none">{t.bento_services_title}</h3>
                        </div>
                        <div className="flex justify-between items-end">
                            <span className="text-sm text-slate-400 flex items-center gap-2"><i className="fa-solid fa-list-check"></i> {t.bento_services_link}</span>
                            <span className="text-3xl group-hover:translate-x-2 transition text-brand-orange">→</span>
                        </div>
                    </div>
                    {/* Background Blob */}
                    <div className="absolute right-0 top-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none group-hover:bg-brand-orange/20 transition"></div>
                </Link>
            </RevealOnScroll>

            {/* Card 3: Experience Link */}
            <RevealOnScroll delay={200} className="md:col-span-1 h-full">
                <Link to="/sobre-mi" className="block w-full h-full glass-card p-6 rounded-2xl flex flex-col justify-center hover:bg-white/5 transition duration-500 group relative overflow-hidden bg-[#020202]/80 backdrop-blur-xl">
                    <div className="absolute top-4 right-4 text-slate-700 group-hover:text-brand-orange/20 transition">
                        <i className="fa-solid fa-graduation-cap text-6xl"></i>
                    </div>
                    <span className="text-xs font-bold text-slate-500 uppercase mb-2 relative z-10">Formación</span>
                    <h3 className="text-xl font-display uppercase leading-tight mb-2 group-hover:text-brand-orange transition relative z-10">{t.bento_education_title}</h3>
                    <p className="text-xs text-slate-400 mt-2 relative z-10 flex items-center gap-1">
                        <i className="fa-solid fa-certificate"></i> {t.bento_education_desc}
                    </p>
                </Link>
            </RevealOnScroll>

            {/* Card 4: Blog Preview */}
            <RevealOnScroll delay={300} className="md:col-span-3 h-full">
                <Link to="/blog" className="block w-full h-full glass-card p-8 rounded-2xl flex flex-col md:flex-row items-center gap-8 hover:bg-white/5 transition duration-500 group bg-[#020202]/80 backdrop-blur-xl">
                    <div className="w-full md:w-1/3 aspect-video bg-slate-800 rounded-lg overflow-hidden border border-white/5 relative">
                        <div className="absolute top-2 left-2 bg-black/50 backdrop-blur text-white text-[10px] px-2 py-1 rounded uppercase font-bold border border-white/10">New</div>
                        <img src={latestPost.img} alt={postContent.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500" />
                    </div>
                    <div className="flex-1">
                        <span className="text-brand-orange text-xs font-bold tracking-widest uppercase mb-2 block flex items-center gap-2">
                            <i className="fa-regular fa-newspaper"></i> {t.bento_blog_title}
                        </span>
                        <h3 className="text-2xl font-display uppercase mb-4 leading-tight group-hover:underline">{postContent.title}</h3>
                        <p className="text-sm text-slate-400 line-clamp-2">{postContent.category} • {latestPost.date}</p>
                    </div>
                    <div className="hidden md:block">
                        <span className="text-3xl -rotate-45 block group-hover:rotate-0 transition duration-300">↗</span>
                    </div>
                </Link>
            </RevealOnScroll>

        </div>
      </section>

      {/* CHOOSE YOUR PATH (Split Section) */}
      <section className="relative z-30 max-w-7xl mx-auto px-6 mb-24">
          <RevealOnScroll>
              <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-8 text-center flex items-center justify-center gap-4">
                  <span className="h-px w-8 bg-slate-800"></span>
                  {t.path_title}
                  <span className="h-px w-8 bg-slate-800"></span>
              </h2>
          </RevealOnScroll>
          <RevealOnScroll className="grid md:grid-cols-2 gap-0 border border-white/10 rounded-2xl overflow-hidden divide-y md:divide-y-0 md:divide-x divide-white/10 bg-[#020202]/80 backdrop-blur-md">
              
              {/* Option A: Recruiters */}
              <Link to="/sobre-mi" className="p-12 hover:bg-white/5 transition group text-center md:text-right relative">
                  <div className="mb-4 text-slate-700 group-hover:text-white transition">
                      <i className="fa-solid fa-user-tie text-4xl animate-float"></i>
                  </div>
                  <h3 className="text-3xl font-display uppercase mb-2">{t.path_recruiters}</h3>
                  <p className="text-slate-400 mb-6 text-sm">{t.path_recruiters_desc}</p>
                  <span className="inline-block px-6 py-2 border border-white/20 rounded-full text-xs uppercase hover:bg-white hover:text-black transition">{t.path_recruiters_btn}</span>
              </Link>

              {/* Option B: Business */}
              <Link to="/contacto" className="p-12 hover:bg-brand-orange/10 transition group text-center md:text-left">
                  <div className="mb-4 text-brand-orange">
                      <i className="fa-solid fa-briefcase text-4xl animate-float" style={{ animationDelay: '1s' }}></i>
                  </div>
                  <h3 className="text-3xl font-display uppercase mb-2 text-brand-orange">{t.path_business}</h3>
                  <p className="text-slate-400 mb-6 text-sm">{t.path_business_desc}</p>
                  <span className="inline-block px-6 py-2 bg-brand-orange text-black font-bold rounded-full text-xs uppercase hover:bg-white transition">{t.path_business_btn}</span>
              </Link>

          </RevealOnScroll>
      </section>

    </div>
  );
};

export default Home;
