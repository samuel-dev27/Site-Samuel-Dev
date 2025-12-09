
import React, { useState } from 'react';
import { Language } from '../types';
import { i18nData } from '../data/i18n';
import RevealOnScroll from '../components/RevealOnScroll';

interface ContactProps {
  currentLang: Language;
}

/**
 * PÁGINA DE CONTACTO / PÁGINA DE CONTATO
 * --------------------------------------
 * [ES] Diseño dividido: Columna izquierda para info, columna derecha para formulario.
 *      Formulario funcional via 'mailto'.
 * [PT] Layout dividido: Coluna esquerda para info, coluna direita para formulário.
 *      Formulário funcional via 'mailto'.
 */
const Contact: React.FC<ContactProps> = ({ currentLang }) => {
  const t = i18nData[currentLang].contact;

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: t.options[0], // Default to first option
    message: ''
  });

  // Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { name, email, subject, message } = formData;
    
    // Construct Email Body
    const emailBody = `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
    `.trim();

    // Construct Mailto Link
    const mailtoLink = `mailto:samuellpasa@gmail.com?subject=${encodeURIComponent(`[Portfolio] ${subject}`)}&body=${encodeURIComponent(emailBody)}`;

    // Open Email Client
    window.location.href = mailtoLink;
  };

  return (
    <div className="relative max-w-7xl mx-auto px-6 py-20 overflow-hidden">
      
      {/* Giant Background Text */}
      <h1 className="absolute top-10 -left-10 text-[20vw] font-display font-bold text-transparent border-text select-none pointer-events-none z-0 opacity-5 leading-none tracking-tighter" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.2)' }}>
          CONTACT
      </h1>

      <div className="relative z-10 grid md:grid-cols-2 gap-16 items-start mt-12">
          
          {/* Column 1: Info & Socials */}
          <RevealOnScroll>
              <span className="text-brand-orange font-mono text-sm mb-4 block">04 / CONTACT</span>
              
              <h2 className="text-5xl md:text-7xl font-display uppercase font-bold mb-6 leading-none">
                {t.title} de tu <br/><span className="text-brand-orange">{t.hero_title_highlight}</span>
              </h2>
              
              <p className="text-xl text-slate-300 font-light mb-8 max-w-md">
                 {t.hero_questions}
              </p>

              {/* Floating Response Badge */}
              <div className="glass-card inline-flex items-center gap-4 p-4 rounded-xl border border-white/20 mb-12 animate-pulse-slow">
                   <div className="w-10 h-10 rounded-full bg-brand-orange text-black flex items-center justify-center text-xl">
                       <i className="fa-solid fa-comments"></i>
                   </div>
                   <div>
                       <p className="text-white font-bold uppercase text-sm">{t.response_time_title}</p>
                       <p className="text-slate-400 text-xs">{t.response_time_desc}</p>
                   </div>
              </div>

              <div className="space-y-8">
                  <div>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Email</h3>
                      <a href="mailto:samuellpasa@gmail.com" className="text-2xl font-display hover:text-brand-orange transition">samuellpasa@gmail.com</a>
                  </div>
                  <div>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Social</h3>
                      <div className="flex gap-4">
                          <a href="https://github.com/momo-dev27" target="_blank" rel="noreferrer" className="px-4 py-2 border border-white/10 rounded-full hover:bg-white hover:text-black transition uppercase text-xs font-bold">GitHub</a>
                          <a href="https://linkedin.com/in/samuel-dev27" target="_blank" rel="noreferrer" className="px-4 py-2 border border-white/10 rounded-full hover:bg-white hover:text-black transition uppercase text-xs font-bold">LinkedIn</a>
                      </div>
                  </div>
                  <div>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">{t.location_label}</h3>
                      <p className="text-lg">Curitiba, Paraná, Brasil.</p>
                  </div>
              </div>
          </RevealOnScroll>

          {/* Column 2: Contact Form */}
          <RevealOnScroll delay={200} className="glass-card p-8 md:p-12 rounded-2xl border-t border-t-white/10 bg-[#050505]/50 backdrop-blur-xl">
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Name */}
                <div>
                    <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">{t.name}</label>
                    <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-black/40 border border-white/10 rounded-none border-b-2 border-b-white/20 p-4 text-white focus:border-brand-orange focus:outline-none transition placeholder-slate-700" 
                        placeholder={t.placeholder_name} 
                        required
                    />
                </div>
                
                {/* Email */}
                <div>
                    <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">{t.email}</label>
                    <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-black/40 border border-white/10 rounded-none border-b-2 border-b-white/20 p-4 text-white focus:border-brand-orange focus:outline-none transition placeholder-slate-700" 
                        placeholder={t.placeholder_email} 
                        required
                    />
                </div>

                {/* Subject Dropdown */}
                <div>
                    <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">{t.subject}</label>
                    <select 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-black/40 border border-white/10 rounded-none border-b-2 border-b-white/20 p-4 text-white focus:border-brand-orange focus:outline-none transition appearance-none cursor-pointer"
                    >
                        {t.options.map((opt, idx) => (
                            <option key={idx} value={opt} className="bg-slate-900 text-white">{opt}</option>
                        ))}
                    </select>
                </div>

                {/* Message */}
                <div>
                    <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">{t.message}</label>
                    <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4} 
                        className="w-full bg-black/40 border border-white/10 rounded-none border-b-2 border-b-white/20 p-4 text-white focus:border-brand-orange focus:outline-none transition placeholder-slate-700" 
                        placeholder={t.placeholder_message}
                        required
                    ></textarea>
                </div>

                <button type="submit" className="w-full bg-brand-orange text-black font-display font-bold uppercase text-xl py-6 hover:bg-white transition duration-300 mt-4 shadow-lg shadow-orange-500/20">
                    {t.send}
                </button>
              </form>
          </RevealOnScroll>

      </div>
    </div>
  );
};

export default Contact;
