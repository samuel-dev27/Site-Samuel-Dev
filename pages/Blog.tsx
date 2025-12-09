
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../data/posts';
import { i18nData } from '../data/i18n';
import { Language } from '../types';
import RevealOnScroll from '../components/RevealOnScroll';

interface BlogProps {
  currentLang: Language;
}

/**
 * PÁGINA DE BLOG / PÁGINA DE BLOG
 * -------------------------------
 * [ES] Muestra una lista de posts con filtros avanzados.
 *      Features:
 *      1. Filtrado por Etiquetas (Multi-selección).
 *      2. Ordenar por Fecha (Reciente/Antiguo).
 *      3. UI de Filtro Expandible.
 * 
 * [PT] Exibe uma lista de posts com filtros avançados.
 *      Features:
 *      1. Filtragem por Tags (Multi-seleção).
 *      2. Ordenar por Data (Recente/Antigo).
 *      3. UI de Filtro Expansível.
 */
const Blog: React.FC<BlogProps> = ({ currentLang }) => {
  const t = i18nData[currentLang].blog_page;
  const t_tags = i18nData[currentLang].tags;
  
  // State for filtering and sorting controls
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  /**
   * EXTRACCIÓN DE ETIQUETAS / EXTRAÇÃO DE TAGS
   * [ES] Crea una lista de etiquetas únicas de todos los posts disponibles.
   * [PT] Cria uma lista de tags únicas de todos os posts disponíveis.
   */
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    posts.forEach(post => post.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags).sort();
  }, []);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const clearTags = () => setSelectedTags([]);

  /**
   * LÓGICA DE FILTRADO / LÓGICA DE FILTRAGEM
   * 1. [ES] Filtra posts que coinciden con CUALQUIERA de las etiquetas seleccionadas.
   *    [PT] Filtra posts que correspondem a QUALQUER uma das tags selecionadas.
   * 2. [ES] Ordena por fecha.
   *    [PT] Ordena por data.
   */
  const filteredPosts = useMemo(() => {
    let result = [...posts];

    // Filter by selected tags (OR logic)
    if (selectedTags.length > 0) {
      result = result.filter(post => 
        post.tags.some(tag => selectedTags.includes(tag))
      );
    }

    // Sort
    result.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });

    return result;
  }, [selectedTags, sortOrder]);

  return (
    <div className="w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20">
        
        {/* HEADER */}
        <div className="text-center mb-16">
            <RevealOnScroll>
                <span className="text-brand-orange font-mono text-sm mb-4 block">03 / JOURNAL</span>
                <h1 className="text-5xl md:text-8xl font-display font-bold uppercase mb-4 tracking-tight">
                    {t.title}
                </h1>
                <p className="text-xl text-slate-400 font-light">{t.subtitle}</p>
            </RevealOnScroll>
        </div>

        {/* FILTER & SORT BAR */}
        <RevealOnScroll className="mb-12">
            <div className="border-y border-white/10 py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                
                {/* Filter Drawer Toggle */}
                <button 
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    className={`text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition hover:text-brand-orange ${isFilterOpen ? 'text-brand-orange' : 'text-white'}`}
                >
                    <i className={`fa-solid ${isFilterOpen ? 'fa-minus' : 'fa-plus'}`}></i>
                    {isFilterOpen ? t.close_filters : t.open_filters}
                    {selectedTags.length > 0 && !isFilterOpen && (
                        <span className="bg-brand-orange text-black px-2 rounded-full text-[10px] ml-2">{selectedTags.length}</span>
                    )}
                </button>

                {/* Sort Selector */}
                <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 whitespace-nowrap">
                        {t.sort_label}
                    </label>
                    <div className="relative">
                    <select 
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value as 'newest' | 'oldest')}
                            className="appearance-none bg-transparent border-none text-white font-bold text-xs uppercase cursor-pointer pr-6 focus:outline-none hover:text-brand-orange transition text-right"
                        >
                            <option value="newest" className="bg-black">{t.sort_newest}</option>
                            <option value="oldest" className="bg-black">{t.sort_oldest}</option>
                        </select>
                        <i className="fa-solid fa-chevron-down absolute right-0 top-1/2 -translate-y-1/2 text-[10px] text-slate-500 pointer-events-none"></i>
                    </div>
                </div>
            </div>

            {/* EXPANDABLE FILTER DRAWER */}
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isFilterOpen ? 'max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                <div className="p-6 border border-white/10 rounded-xl bg-white/[0.02]">
                    <div className="flex flex-wrap gap-3">
                        {/* Clear Button */}
                        {selectedTags.length > 0 && (
                            <button
                                onClick={clearTags}
                                className="px-4 py-2 rounded-full text-xs font-bold uppercase transition bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500 hover:text-white"
                            >
                                <i className="fa-solid fa-xmark mr-2"></i> {t.clear_filters}
                            </button>
                        )}

                        {/* Tag Buttons */}
                        {allTags.map(tag => {
                            const isSelected = selectedTags.includes(tag);
                            return (
                                <button
                                    key={tag}
                                    onClick={() => toggleTag(tag)}
                                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase transition border ${
                                        isSelected
                                        ? 'bg-brand-orange border-brand-orange text-black'
                                        : 'bg-transparent border-white/10 text-slate-400 hover:border-brand-orange hover:text-white'
                                    }`}
                                >
                                    #{t_tags[tag] || tag}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* ACTIVE TAGS SUMMARY (Visible when drawer closed) */}
            {!isFilterOpen && selectedTags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2 animate-pulse-once">
                    {selectedTags.map(tag => (
                        <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-brand-orange border border-brand-orange/20 bg-brand-orange/5 px-2 py-1 rounded">
                            #{t_tags[tag] || tag}
                        </span>
                    ))}
                </div>
            )}

        </RevealOnScroll>

        {/* POSTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 min-h-[400px]">
            {filteredPosts.length > 0 ? (
                filteredPosts.map((post, index) => {
                const content = post.locales[currentLang];
                return (
                    <RevealOnScroll key={post.slug} delay={index * 100} className="h-full">
                        <Link 
                            to={`/blog/${post.slug}`} 
                            className="group block flex flex-col h-full"
                        >
                            {/* Post Thumbnail */}
                            <div className="overflow-hidden rounded-xl border border-white/10 aspect-[4/3] mb-6 relative">
                            <div className="absolute inset-0 bg-brand-orange/0 group-hover:bg-brand-orange/10 transition z-10 pointer-events-none"></div>
                            <img 
                                src={post.img} 
                                alt={content.title} 
                                className="w-full h-full object-cover transition duration-700 ease-out grayscale group-hover:grayscale-0 group-hover:scale-105"
                            />
                            </div>
                            
                            {/* Metadata */}
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-brand-orange text-[10px] font-bold uppercase tracking-widest border border-brand-orange/20 px-2 py-1 rounded bg-brand-orange/5">
                                    {content.category}
                                </span>
                                <span className="text-slate-500 text-xs font-mono">{post.date}</span>
                            </div>

                            <h3 className="text-2xl font-display uppercase leading-[1.1] mb-4 group-hover:text-brand-orange transition-colors">
                            {content.title}
                            </h3>
                            
                            {/* Read More Link */}
                            <div className="mt-auto">
                                <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-white transition flex items-center gap-2">
                                    {t.read_more} <span className="text-lg leading-none">→</span>
                                </span>
                            </div>
                        </Link>
                    </RevealOnScroll>
                );
                })
            ) : (
                // Empty State
                <div className="col-span-full text-center py-20 text-slate-500">
                    <i className="fa-regular fa-folder-open text-4xl mb-4 opacity-50"></i>
                    <p>No posts found for this filter.</p>
                </div>
            )}
        </div>
        </div>
    </div>
  );
};

export default Blog;
