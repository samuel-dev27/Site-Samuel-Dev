
/**
 * DEFINICIONES DE TIPOS / DEFINIÇÕES DE TIPOS
 * -------------------------------------------
 * [ES] Este archivo actúa como el contrato central para las estructuras de datos.
 *      Asegura que los objetos (como posts o traducciones) sigan siempre la misma forma.
 * 
 * [PT] Este arquivo atua como o contrato central para as estruturas de dados.
 *      Garante que os objetos (como posts ou traduções) sigam sempre a mesma forma.
 */

// Idiomas soportados / Idiomas suportados
export type Language = 'es' | 'pt' | 'en';

// [ES] Estructura para contenido localizado dentro de un post
// [PT] Estrutura para conteúdo localizado dentro de um post
export interface LocalizedContent {
  title: string;
  category: string;
  content: string; // HTML content
  desc?: string;   // Optional short description/excerpt
}

// [ES] Estructura completa de un Post del Blog
// [PT] Estrutura completa de um Post do Blog
export interface BlogPost {
  slug: string; // URL identifier (e.g., 'my-post')
  date: string; // Display date
  img: string;  // Image URL
  url: string;  // Redundant but used for internal linking logic
  tags: string[]; // Keys that must match keys in Translation.tags
  locales: Record<Language, LocalizedContent>; // Content for each language
}

// [ES] Estructura para ítems FAQ en Servicios
// [PT] Estrutura para itens FAQ em Serviços
export interface FAQItem {
  question: string;
  answer: string;
}

// [ES] La Interfaz Principal de Traducción (Define la forma de 'i18nData')
// [PT] A Interface Principal de Tradução (Define a forma de 'i18nData')
export interface Translation {
  nav: {
    home: string;
    about: string;
    services: string;
    blog: string;
    contact: string;
    follow_me: string;
  };
  hero: {
    role: string;
    location: string;
    sub: string;
    cta_portfolio: string;
    cta_contact: string;
    bento_profile_title: string;
    bento_profile_desc: string;
    tags: string[]; // Array of strings for profile tags
    bento_services_title: string;
    bento_services_link: string;
    bento_education_title: string;
    bento_education_desc: string;
    bento_blog_title: string;
    path_title: string;
    path_recruiters: string;
    path_recruiters_desc: string;
    path_recruiters_btn: string;
    path_business: string;
    path_business_desc: string;
    path_business_btn: string;
  };
  about: {
    title: string;
    bio: string;
    timeline_title: string;
    cv_btn: string;
    portfolio_title: string;
    projects: Array<{
        title: string;
        desc: string;
        category: string;
    }>;
  };
  services: {
    title: string;
    subtitle: string;
    card1_title: string;
    card1_desc: string;
    card1_btn: string;
    card1_features?: string[];
    card2_title: string;
    card2_desc: string;
    card2_btn: string;
    card2_features?: string[];
    card3_title: string;
    card3_desc: string;
    card3_btn: string;
    card3_features?: string[];
    whatsapp_cta: string;
    faq_title: string;
    faq_items: FAQItem[];
    cta_portfolio_card: { title: string; desc: string; btn: string; };
    cta_blog_card: { title: string; desc: string; btn: string; };
  };
  blog_page: {
    title: string;
    subtitle: string;
    filter_all: string;
    open_filters: string;
    close_filters: string;
    clear_filters: string;
    sort_label: string;
    sort_newest: string;
    sort_oldest: string;
    read_more: string;
    back_to_blog: string;
  };
  // [ES] Diccionario de etiquetas: Mapea ID interno a nombre visible
  // [PT] Dicionário de tags: Mapeia ID interno para nome visível
  tags: Record<string, string>;
  contact: {
    title: string;
    hero_title_highlight: string;
    subtitle: string;
    hero_questions: string;
    response_time_title: string;
    response_time_desc: string;
    location_label: string;
    placeholder_name: string;
    placeholder_email: string;
    placeholder_message: string;
    name: string;
    email: string;
    subject: string;
    options: string[];
    message: string;
    send: string;
  };
  footer: {
    phrase: string;
  };
}
