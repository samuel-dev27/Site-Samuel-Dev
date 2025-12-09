
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import { Language } from './types';

/**
 * COMPONENTE PRINCIPAL (APP) / COMPONENTE PRINCIPAL (APP)
 * -------------------------------------------------------
 * [ES] Este es el componente raíz que maneja:
 *      1. Enrutamiento (HashRouter para compatibilidad).
 *      2. Estado Global (Idioma actual).
 *      3. Layout Wrapper (Persistencia de Header/Footer).
 * 
 * [PT] Este é o componente raiz que gerencia:
 *      1. Roteamento (HashRouter para compatibilidade).
 *      2. Estado Global (Idioma atual).
 *      3. Layout Wrapper (Persistência de Header/Footer).
 */

const App: React.FC = () => {
  // [ES] 1. Lógica de Inicialización de Idioma
  //      Intenta encontrar el idioma guardado en LocalStorage, sino detecta el del navegador.
  // [PT] 1. Lógica de Inicialização de Idioma
  //      Tenta encontrar o idioma salvo no LocalStorage, senão detecta o do navegador.
  const getInitialLang = (): Language => {
    const saved = localStorage.getItem('samuel_lang') as Language;
    if (saved) return saved;
    
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('es')) return 'es';
    if (browserLang.startsWith('pt')) return 'pt';
    return 'en'; // Default fallback
  };

  const [lang, setLang] = useState<Language>(getInitialLang);

  return (
    <Router>
      {/* 
        [ES] Layout envuelve todas las rutas. Recibe 'lang' y 'setLang' para pasarlos al Header/Footer.
        [PT] Layout envolve todas as rotas. Recebe 'lang' e 'setLang' para passá-los ao Header/Footer.
      */}
      <Layout currentLang={lang} setLang={setLang}>
        <Routes>
          {/* 
             [ES] Cada ruta recibe la prop currentLang para renderizar el texto en el idioma correcto.
             [PT] Cada rota recebe a prop currentLang para renderizar o texto no idioma correto.
          */}
          <Route path="/" element={<Home currentLang={lang} />} />
          <Route path="/sobre-mi" element={<About currentLang={lang} />} />
          <Route path="/servicios" element={<Services currentLang={lang} />} />
          <Route path="/blog" element={<Blog currentLang={lang} />} />
          {/* Dynamic Route for Blog Post (uses :slug parameter) */}
          <Route path="/blog/:slug" element={<BlogPost currentLang={lang} />} />
          <Route path="/contacto" element={<Contact currentLang={lang} />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;