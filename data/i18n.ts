
import { Translation } from '../types';

/**
 * DATOS DE INTERNACIONALIZACIÓN (i18n) / DADOS DE INTERNACIONALIZAÇÃO
 * -------------------------------------------------------------------
 * [ES] Este archivo contiene todo el texto del sitio web, separado por idioma.
 *      ESTRUCTURA:
 *      - Las claves ('es', 'pt', 'en') corresponden al tipo Language.
 *      - Dentro de cada idioma, el contenido se agrupa por sección (nav, hero, etc.).
 * 
 * [PT] Este arquivo contém todo o texto do site, separado por idioma.
 *      ESTRUTURA:
 *      - As chaves ('es', 'pt', 'en') correspondem ao tipo Language.
 *      - Dentro de cada idioma, o conteúdo é agrupado por seção (nav, hero, etc.).
 */

export const i18nData: Record<string, Translation> = {
  // ==================================================================================
  // SPANISH (Español)
  // ==================================================================================
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre Mí',
      services: 'Servicios',
      blog: 'Blog',
      contact: 'Contacto',
      follow_me: 'Sígueme',
    },
    hero: {
      role: 'Desarrollo Web & Soporte',
      location: 'Curitiba, PR',
      sub: 'Desarrollo Web y Soluciones Digitales',
      cta_portfolio: 'Ver Portafolio / CV',
      cta_contact: 'Contratar Web / Soporte',
      bento_profile_title: 'Samuel.DEV',
      bento_profile_desc: 'Desarrollador Web Full Stack & Especialista IT',
      tags: ['Desarrollo', 'Web', 'Soporte', 'Hardware'],
      bento_services_title: '¿Necesitas una Web?',
      bento_services_link: 'Ver Servicios',
      bento_education_title: 'Ingeniería de Sistemas',
      bento_education_desc: '+ Cursos Web Design',
      bento_blog_title: 'Último Post',
      path_title: 'Elige tu camino',
      path_recruiters: 'Reclutadores',
      path_recruiters_desc: 'Ver Portafolio / CV',
      path_recruiters_btn: 'Ver Perfil',
      path_business: 'Negocios',
      path_business_desc: 'Contratar Web / Soporte',
      path_business_btn: 'Hablemos',
    },
    about: {
      title: 'Desarrollo Web + Creatividad',
      bio: 'Estudiante de Ingeniería de Sistemas (3 años cursados) con enfoque total en Desarrollo Web y Soluciones Digitales. Me especializo en crear sitios rápidos y funcionales, además de ofrecer soporte técnico de hardware. Soy bilingüe (Español/Portugués) y combino la lógica de la ingeniería con el diseño moderno.',
      timeline_title: 'Trayectoria',
      cv_btn: 'Descargar Currículum',
      portfolio_title: 'Proyectos Destacados',
      projects: [
        {
            title: 'Momo Tattoo Studio',
            desc: 'Sitio web de portafolio minimalista para artista del tatuaje, enfocado en mostrar la galería de trabajos y estilo artístico.',
            category: 'Portafolio'
        },
        {
            title: 'Tequetiba Dulces',
            desc: 'Plataforma para emprendimiento de dulces y catering. Catálogo de productos, paquetes para eventos y contacto directo para pedidos.',
            category: 'E-Commerce / Catálogo'
        },
        {
            title: 'InkStart Tattoo',
            desc: 'Sitio web accesible para estudio de tatuajes y piercings. Información de servicios, cuidados post-tatuaje y galería.',
            category: 'Sitio Corporativo'
        }
      ]
    },
    services: {
      title: 'Soluciones Digitales',
      subtitle: 'Webs rápidas + soporte técnico real.',
      card1_title: 'Web Express',
      card1_desc: 'Sitio web de una sola página (One-Page) optimizado para velocidad y conversión. Ideal para portafolios personales, lanzamientos de productos o landing pages de campañas publicitarias. Incluye diseño responsive y formulario de contacto.',
      card1_btn: 'Cotizar',
      card1_features: ['Diseño Responsive', 'SEO Básico', 'Carga Rápida', 'Formulario Contacto'],
      card2_title: 'Sitio Corporativo',
      card2_desc: 'Desarrollo web multipágina completo, escalable y autoadministrable. Incluye integración de CMS (WordPress o personalizado), optimización SEO avanzada, catálogo de productos, integración básica con WooCommerce y seguridad reforzada.',
      card2_btn: 'Cotizar Proyecto',
      card2_features: ['Autoadministrable (CMS)', 'SEO Avanzado', 'Catálogo Productos', 'WooCommerce Básico', 'Seguridad'],
      card3_title: 'Soporte IT',
      card3_desc: 'Servicio técnico especializado en hardware y software en Curitiba. Diagnóstico y reparación de PCs/Laptops, limpieza interna, optimización del sistema operativo, eliminación de virus y configuración de redes locales (LAN/WiFi).',
      card3_btn: 'Solicitar Soporte',
      card3_features: ['Diagnóstico Hardware', 'Limpieza PC/Laptop', 'Optimización Windows', 'Redes LAN/WiFi', 'Eliminación Virus'],
      whatsapp_cta: 'Hablemos por WhatsApp',
      faq_title: 'Preguntas Frecuentes',
      faq_items: [
        {
            question: '¿Trabajas remoto?',
            answer: 'Sí, para desarrollo web trabajo con clientes globales. Soporte técnico de hardware exclusivo para Curitiba y región.'
        },
        {
            question: '¿Emites factura?',
            answer: 'Sí, emito factura (Nota Fiscal) para todos los servicios contratados.'
        },
        {
            question: '¿Qué incluye el soporte IT?',
            answer: 'Diagnóstico, limpieza de hardware, formateo, instalación de drivers, configuración de redes y consultoría de upgrades.'
        }
      ],
      cta_portfolio_card: { title: 'Ver mi trabajo', desc: 'Explora proyectos recientes y casos de éxito.', btn: 'Ver Portafolio' },
      cta_blog_card: { title: 'Leer el Blog', desc: 'Tutoriales, guías y novedades tecnológicas.', btn: 'Ir al Blog' },
    },
    blog_page: {
        title: 'Samuel.dev.Blog',
        subtitle: 'Tutoriales, reflexiones y código.',
        filter_all: 'Todos',
        open_filters: 'Filtrar Temas',
        close_filters: 'Cerrar Filtros',
        clear_filters: 'Limpiar Filtros',
        sort_label: 'Ordenar por',
        sort_newest: 'Más Recientes',
        sort_oldest: 'Más Antiguos',
        read_more: 'Leer Artículo',
        back_to_blog: 'Volver al Blog',
    },
    // [ES] Diccionario de Tags: Mapea ID interno -> Nombre visible
    tags: {
        'Business': 'Negocios', 
        'WordPress': 'WordPress',
        'Productivity': 'Productividad',
        'Hardware': 'Hardware',
        'Support': 'Soporte',
        'React': 'React',
        'WebDev': 'Des. Web',
        'Networking': 'Redes',
        'IT': 'TI',
        'Career': 'Carrera',
        'Engineering': 'Ingeniería',
        'Linux': 'Linux',
        'OS': 'Sistema Op.',
    },
    contact: {
      title: 'Hablemos',
      hero_title_highlight: 'Proyecto',
      hero_questions: '¿Tienes una idea? ¿Una PC en llamas? ¿Necesitas una web? Conversemos.',
      subtitle: '¿Listo para empezar un proyecto o necesitas soporte inmediato? Escríbeme.',
      response_time_title: 'Respuesta en 24h',
      response_time_desc: 'Mínimo tiempo, máximo resultado',
      location_label: 'Ubicación',
      placeholder_name: 'Tu Nombre',
      placeholder_email: 'tu@email.com',
      placeholder_message: 'Cuéntame sobre tu proyecto...',
      name: 'Nombre',
      email: 'Email',
      subject: 'Asunto',
      options: ['Proyecto Web', 'Soporte IT', 'Colaboración', 'Otro'],
      message: 'Mensaje',
      send: 'Enviar Mensaje',
    },
    footer: {
      phrase: '¿Tienes un proyecto o una PC en llamas?',
    },
  },

  // ==================================================================================
  // PORTUGUESE (Português)
  // ==================================================================================
  pt: {
    nav: {
      home: 'Início',
      about: 'Sobre Mim',
      services: 'Serviços',
      blog: 'Blog',
      contact: 'Contato',
      follow_me: 'Siga-me',
    },
    hero: {
      role: 'Desenvolvimento Web & Suporte',
      location: 'Curitiba, PR',
      sub: 'Desenvolvimento Web e Soluções Digitais',
      cta_portfolio: 'Ver Portfólio / CV',
      cta_contact: 'Contratar Web / Suporte',
      bento_profile_title: 'Samuel.DEV',
      bento_profile_desc: 'Desenvolvedor Web Full Stack & Especialista em TI',
      tags: ['Desenvolvimento', 'Web', 'Suporte', 'Hardware'],
      bento_services_title: 'Precisa de um site?',
      bento_services_link: 'Ver Serviços',
      bento_education_title: 'Engenharia de Sistemas',
      bento_education_desc: '+ Cursos de Web Design',
      bento_blog_title: 'Último Post',
      path_title: 'Escolha seu caminho',
      path_recruiters: 'Recrutadores',
      path_recruiters_desc: 'Ver Portfólio / CV',
      path_recruiters_btn: 'Ver Perfil',
      path_business: 'Negócios',
      path_business_desc: 'Contratar Web / Suporte',
      path_business_btn: 'Vamos Conversar',
    },
    about: {
      title: 'Desenvolvimento + Criatividade',
      bio: 'Estudante de Engenharia de Sistemas (3 anos cursados) com foco total em Desenvolvimento Web e Soluções Digitais. Especializo-me em criar sites rápidos e funcionais, além de oferecer suporte técnico de hardware. Sou bilíngue (Espanhol/Português) e combino a lógica da engenharia com design moderno.',
      timeline_title: 'Trajetória',
      cv_btn: 'Baixar Currículo',
      portfolio_title: 'Projetos em Destaque',
      projects: [
        {
            title: 'Momo Tattoo Studio',
            desc: 'Site de portfólio minimalista para tatuador, focado em exibir a galeria de trabalhos e estilo artístico.',
            category: 'Portfólio'
        },
        {
            title: 'Tequetiba Doces',
            desc: 'Plataforma para empreendimento de doces e catering. Catálogo de produtos, pacotes para eventos e contato direto para pedidos.',
            category: 'E-Commerce / Catálogo'
        },
        {
            title: 'InkStart Tattoo',
            desc: 'Site acessível para estúdio de tatuagens e piercings. Informações de serviços, cuidados pós-tatuagem e galeria.',
            category: 'Site Corporativo'
        }
      ]
    },
    services: {
      title: 'Soluções Digitais',
      subtitle: 'Sites rápidos + suporte técnico real.',
      card1_title: 'Web Express',
      card1_desc: 'Site de página única (One-Page) otimizado para velocidade e conversão. Ideal para portfólios pessoais, lançamentos de produtos ou landing pages. Inclui design responsivo e formulário de contato.',
      card1_btn: 'Orçar',
      card1_features: ['Design Responsivo', 'SEO Básico', 'Entrega Rápida', 'Formulário de Contato'],
      card2_title: 'Site Corporativo',
      card2_desc: 'Desenvolvimento web multipágina completo, escalável e autogerenciável. Inclui integração de CMS (WordPress ou personalizado), otimização SEO avançada, catálogo de produtos, integração básica com WooCommerce e segurança reforçada.',
      card2_btn: 'Orçar Projeto',
      card2_features: ['Autogerenciável (CMS)', 'SEO Avançado', 'Catálogo Produtos', 'WooCommerce Básico', 'Segurança'],
      card3_title: 'Suporte IT',
      card3_desc: 'Serviço técnico especializado em hardware e software em Curitiba. Diagnóstico e reparo de PCs/Notebooks, limpeza interna, otimização do sistema operacional, remoção de vírus e configuração de redes locais (LAN/WiFi).',
      card3_btn: 'Solicitar Suporte',
      card3_features: ['Diagnóstico de Hardware', 'Limpeza e Manutenção', 'Otimização Windows', 'Redes LAN/WiFi', 'Remoção de Vírus'],
      whatsapp_cta: 'Conversar no WhatsApp',
      faq_title: 'Perguntas Frequentes',
      faq_items: [
        {
            question: 'Você trabalha remotamente?',
            answer: 'Sim, para desenvolvimento web trabalho com clientes globais. Suporte técnico de hardware exclusivo para Curitiba e região.'
        },
        {
            question: 'Você emite nota fiscal?',
            answer: 'Sim, emito Nota Fiscal para todos os serviços contratados.'
        },
        {
            question: 'O que inclui o suporte de TI?',
            answer: 'Diagnóstico, limpeza de hardware, formatação, instalação de drivers, configuração de rede e consultoria de upgrades.'
        }
      ],
      cta_portfolio_card: { title: 'Ver meu trabalho', desc: 'Explore projetos recentes e casos de sucesso.', btn: 'Ver Portfólio' },
      cta_blog_card: { title: 'Ler o Blog', desc: 'Tutoriais, guias e novidades tecnológicas.', btn: 'Ir para o Blog' },
    },
    blog_page: {
        title: 'Samuel.dev.Blog',
        subtitle: 'Tutoriais, reflexões e código.',
        filter_all: 'Todos',
        open_filters: 'Filtrar Tópicos',
        close_filters: 'Fechar Filtros',
        clear_filters: 'Limpar Filtros',
        sort_label: 'Ordenar por',
        sort_newest: 'Mais Recentes',
        sort_oldest: 'Mais Antigos',
        read_more: 'Ler Artigo',
        back_to_blog: 'Voltar ao Blog',
    },
    tags: {
        'Business': 'Negócios', 
        'WordPress': 'WordPress',
        'Productivity': 'Produtividade',
        'Hardware': 'Hardware',
        'Support': 'Suporte',
        'React': 'React',
        'WebDev': 'Dev. Web',
        'Networking': 'Redes',
        'IT': 'TI',
        'Career': 'Carreira',
        'Engineering': 'Engenharia',
        'Linux': 'Linux',
        'OS': 'Sistema Op.',
    },
    contact: {
      title: 'Vamos Falar',
      hero_title_highlight: 'Projeto',
      hero_questions: 'Tem uma ideia? Um PC pegando fogo? Precisa de um site? Vamos conversar.',
      subtitle: 'Pronto para iniciar um projeto ou precisa de suporte imediato? Escreva-me.',
      response_time_title: 'Resposta em 24h',
      response_time_desc: 'Mínimo tempo, máximo resultado',
      location_label: 'Localização',
      placeholder_name: 'Seu Nome',
      placeholder_email: 'seu@email.com',
      placeholder_message: 'Conte-me sobre seu projeto...',
      name: 'Nome',
      email: 'Email',
      subject: 'Assunto',
      options: ['Projeto Web', 'Suporte IT', 'Colaboração', 'Outro'],
      message: 'Mensagem',
      send: 'Enviar Mensagem',
    },
    footer: {
      phrase: 'Tem um projeto ou um PC pegando fogo?',
    },
  },

  // ==================================================================================
  // ENGLISH (Inglés)
  // ==================================================================================
  en: {
    nav: {
      home: 'Home',
      about: 'About Me',
      services: 'Services',
      blog: 'Blog',
      contact: 'Contact',
      follow_me: 'Follow Me',
    },
    hero: {
      role: 'Web Development & Support',
      location: 'Curitiba, PR',
      sub: 'Web Development & Digital Solutions',
      cta_portfolio: 'View Portfolio / CV',
      cta_contact: 'Hire Web / Support',
      bento_profile_title: 'Samuel.DEV',
      bento_profile_desc: 'Full Stack Web Developer & IT Specialist',
      tags: ['Development', 'Web', 'Support', 'Hardware'],
      bento_services_title: 'Need a Website?',
      bento_services_link: 'View Services',
      bento_education_title: 'Systems Engineering',
      bento_education_desc: '+ Web Design Courses',
      bento_blog_title: 'Latest Post',
      path_title: 'Choose your path',
      path_recruiters: 'Recruiters',
      path_recruiters_desc: 'View Portfolio / CV',
      path_recruiters_btn: 'View Profile',
      path_business: 'Business',
      path_business_desc: 'Hire Web / Support',
      path_business_btn: 'Let\'s Talk',
    },
    about: {
      title: 'Development + Creativity',
      bio: 'Systems Engineering Student (3 years completed) fully focused on Web Development and Digital Solutions. I specialize in creating fast, functional websites and providing technical hardware support. I am bilingual (Spanish/Portuguese) and combine engineering logic with modern design.',
      timeline_title: 'Trajectory',
      cv_btn: 'Download Resume',
      portfolio_title: 'Featured Projects',
      projects: [
        {
            title: 'Momo Tattoo Studio',
            desc: 'Minimalist portfolio website for tattoo artist, focused on showcasing work gallery and artistic style.',
            category: 'Portfolio'
        },
        {
            title: 'Tequetiba Sweets',
            desc: 'Platform for sweets and catering business. Product catalog, event packages, and direct contact for orders.',
            category: 'E-Commerce / Catalog'
        },
        {
            title: 'InkStart Tattoo',
            desc: 'Accessible website for tattoo and piercing studio. Service information, aftercare, and gallery.',
            category: 'Corporate Site'
        }
      ]
    },
    services: {
      title: 'Digital Solutions',
      subtitle: 'Fast websites + real technical support.',
      card1_title: 'Web Express',
      card1_desc: 'One-Page website optimized for speed and conversion. Ideal for personal portfolios, product launches, or campaign landing pages. Includes responsive design and contact form integration.',
      card1_btn: 'Get a Quote',
      card1_features: ['Responsive Design', 'Basic SEO', 'Fast Delivery', 'Contact Form'],
      card2_title: 'Corporate Site',
      card2_desc: 'Complete multi-page web development, scalable and self-manageable. Includes CMS integration (WordPress or custom), advanced SEO optimization, product catalog, basic WooCommerce integration, and reinforced security.',
      card2_btn: 'Quote Project',
      card2_features: ['Self-Manageable (CMS)', 'Advanced SEO', 'Product Catalog', 'Basic WooCommerce', 'Security'],
      card3_title: 'IT Support',
      card3_desc: 'Specialized technical service for hardware and software in Curitiba. Diagnostics and repair of PCs/Laptops, internal cleaning, OS optimization, virus removal, and local network configuration (LAN/WiFi).',
      card3_btn: 'Request Support',
      card3_features: ['Hardware Diagnostics', 'Cleaning & Maintenance', 'Windows Optimization', 'WiFi / LAN Networks', 'Virus Removal'],
      whatsapp_cta: 'Chat on WhatsApp',
      faq_title: 'Frequently Asked Questions',
      faq_items: [
        {
            question: 'Do you work remotely?',
            answer: 'Yes, for web development I work with global clients. Hardware technical support is exclusive to Curitiba and the region.'
        },
        {
            question: 'Do you issue invoices?',
            answer: 'Yes, I issue invoices (Nota Fiscal) for all contracted services.'
        },
        {
            question: 'What does IT support include?',
            answer: 'Diagnostics, hardware cleaning, formatting, driver installation, network configuration, and upgrade consulting.'
        }
      ],
      cta_portfolio_card: { title: 'See my work', desc: 'Explore recent projects and success stories.', btn: 'View Portfolio' },
      cta_blog_card: { title: 'Read the Blog', desc: 'Tutorials, guides, and tech insights.', btn: 'Go to Blog' },
    },
    blog_page: {
        title: 'Samuel.dev.Blog',
        subtitle: 'Tutoriales, thoughts and code.',
        filter_all: 'All',
        open_filters: 'Filter Topics',
        close_filters: 'Close Filters',
        clear_filters: 'Clear Filters',
        sort_label: 'Sort by',
        sort_newest: 'Newest',
        sort_oldest: 'Oldest',
        read_more: 'Read Article',
        back_to_blog: 'Back to Blog',
    },
    tags: {
        'Business': 'Business', 
        'WordPress': 'WordPress',
        'Productivity': 'Productivity',
        'Hardware': 'Hardware',
        'Support': 'Support',
        'React': 'React',
        'WebDev': 'WebDev',
        'Networking': 'Networking',
        'IT': 'IT',
        'Career': 'Career',
        'Engineering': 'Engineering',
        'Linux': 'Linux',
        'OS': 'OS',
    },
    contact: {
      title: 'Let\'s Talk',
      hero_title_highlight: 'Project',
      hero_questions: 'Have an idea? A PC on fire? Need a website? Let\'s chat.',
      subtitle: 'Ready to start a project or need immediate support? Write to me.',
      response_time_title: 'Response in 24h',
      response_time_desc: 'Minimum time, maximum result',
      location_label: 'Location',
      placeholder_name: 'Your Name',
      placeholder_email: 'you@email.com',
      placeholder_message: 'Tell me about your project...',
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      options: ['Web Project', 'IT Support', 'Collaboration', 'Other'],
      message: 'Message',
      send: 'Send Message',
    },
    footer: {
      phrase: 'Have a project or a PC on fire?',
    },
  },
};
