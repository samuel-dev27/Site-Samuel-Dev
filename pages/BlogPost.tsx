
import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { posts } from '../data/posts';
import { i18nData } from '../data/i18n';
import { Language } from '../types';

interface BlogPostProps {
  currentLang: Language;
}

/**
 * PÁGINA DE DETALLE DEL BLOG / PÁGINA DE DETALHE DO BLOG
 * ------------------------------------------------------
 * [ES] Renderiza un artículo individual basado en el slug de la URL.
 *      Actualiza el SEO (título) dinámicamente.
 * 
 * [PT] Renderiza um artigo individual com base no slug da URL.
 *      Atualiza o SEO (título) dinamicamente.
 */
const BlogPost: React.FC<BlogPostProps> = ({ currentLang }) => {
  // 1. Get Slug from URL
  const { slug } = useParams<{ slug: string }>();
  
  // 2. Find post in data
  const post = posts.find(p => p.slug === slug);
  const t = i18nData[currentLang].blog_page;
  const t_tags = i18nData[currentLang].tags;

  // 3. 404 Handling (Redirect to blog if not found)
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // 4. Get content for current language
  const content = post.locales[currentLang];

  // [ES] Actualiza el título de la pestaña para SEO
  // [PT] Atualiza o título da aba para SEO
  useEffect(() => {
    document.title = `${content.title} | Samuel.DEV Blog`;
    // Cleanup: Reset to default title when leaving
    return () => {
        document.title = "Samuel.DEV | Full Stack & IT Support";
    }
  }, [content.title]);

  return (
    <div className="w-full overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 py-12">
        <Link to="/blog" className="text-sm text-slate-500 hover:text-brand-orange transition mb-8 inline-block font-bold uppercase tracking-widest">
            ← {t.back_to_blog}
        </Link>

        {/* Header Info */}
        <header className="mb-12">
            <div className="flex gap-4 items-center mb-6">
                <span className="text-brand-orange font-bold uppercase tracking-widest text-sm bg-brand-orange/10 px-3 py-1 rounded">
                    {content.category}
                </span>
                <span className="w-px h-4 bg-white/20"></span>
                <span className="text-slate-500 text-sm font-mono"><i className="fa-regular fa-calendar mr-2"></i>{post.date}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-bold uppercase leading-tight mb-8">
                {content.title}
            </h1>
            <img 
                src={post.img} 
                alt={content.title} 
                className="w-full aspect-video object-cover rounded-xl border border-white/10 shadow-2xl" 
            />
        </header>

        {/* 
            ARTICLE CONTENT
            Renders HTML content from JSON.
            Uses Tailwind 'prose' (typography plugin logic via utility classes) for styling.
        */}
        <article 
            className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:uppercase prose-a:text-brand-orange prose-img:rounded-xl prose-p:text-slate-300 prose-p:font-light"
            dangerouslySetInnerHTML={{ __html: content.content }}
        />

        {/* Footer Tags */}
        <div className="mt-12 pt-8 border-t border-white/10 flex gap-2">
            {post.tags.map(tag => (
                <span key={tag} className="text-xs text-slate-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full uppercase font-bold tracking-wider">#{t_tags[tag] || tag}</span>
            ))}
        </div>
        </div>
    </div>
  );
};

export default BlogPost;
