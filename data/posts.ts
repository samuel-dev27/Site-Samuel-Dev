
import { BlogPost } from '../types';

/**
 * DATOS DE LOS POSTS DEL BLOG / DADOS DOS POSTS DO BLOG
 * -----------------------------------------------------
 * [ES] Este array contiene todos los artículos del blog.
 *      ESTRUCTURA PARA NUEVOS POSTS:
 *      - slug: ID único para la URL.
 *      - tags: Deben coincidir con las claves en i18n.ts -> tags.
 *      - locales: Objeto con el contenido (título, HTML) para es, pt, en.
 * 
 * [PT] Este array contém todos os artigos do blog.
 *      ESTRUTURA PARA NOVOS POSTS:
 *      - slug: ID único para a URL.
 *      - tags: Devem coincidir com as chaves em i18n.ts -> tags.
 *      - locales: Objeto com o conteúdo (título, HTML) para es, pt, en.
 */

export const posts: BlogPost[] = [
  {
    slug: 'negocio-necesita-sitio-web',
    date: '2025-12-15',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop', // Business/Tech image
    url: '/blog/negocio-necesita-sitio-web',
    tags: ['WebDev', 'Business'], // Using the new 'Business' tag
    locales: {
        // SPANISH CONTENT
        es: {
            title: '¿Por qué tu negocio necesita un sitio web profesional en 2025?',
            category: 'Negocios',
            content: `
              <p class="lead text-xl mb-6 text-slate-300">Muchos dueños de negocios creen que tener una cuenta de Instagram o Facebook es suficiente. "Mis clientes están ahí", dicen. Pero, ¿qué pasa cuando el algoritmo cambia? ¿O cuando un cliente te busca en Google y no aparece nada profesional? En este artículo, explico por qué una web es tu activo más valioso.</p>
              
              <h3 class="text-2xl font-bold text-white mt-8 mb-4">1. Credibilidad y Primera Impresión</h3>
              <p>Vivimos en la era de la desconfianza. Antes de comprar un servicio o visitar un local, el 84% de las personas busca el negocio en Google. Si no tienes una web, o si tu web se ve vieja y descuidada, pierdes credibilidad instantáneamente.</p>
              <p>Un sitio web profesional dice: <strong>"Soy un negocio serio, invierto en mi imagen y estoy aquí para quedarme"</strong>.</p>

              <h3 class="text-2xl font-bold text-white mt-8 mb-4">2. Control Total (Tú eres el dueño)</h3>
              <p>Las redes sociales son terreno alquilado. Hoy tienes alcance, mañana Instagram cambia el algoritmo y nadie ve tus publicaciones. Un sitio web es <strong>propiedad digital</strong>. Nadie te lo puede quitar, nadie puede ocultar tu contenido y tú decides cómo presentar tus productos.</p>

              <h3 class="text-2xl font-bold text-white mt-8 mb-4">3. Ventas y Atención 24/7</h3>
              <p>Tu negocio físico cierra a las 18:00. Tu sitio web no. Una web bien diseñada actúa como un vendedor que trabaja las 24 horas del día:</p>
              <ul class="list-disc list-inside space-y-2 ml-4 text-slate-300">
                  <li>Responde preguntas frecuentes (FAQ).</li>
                  <li>Muestra tu portafolio o catálogo.</li>
                  <li>Permite agendar citas o pedir presupuestos mientras duermes.</li>
              </ul>

              <h3 class="text-2xl font-bold text-white mt-8 mb-4">4. El Ecosistema Local: Google Maps y la Inmediatez</h3>
              <p>Aquí es donde entra el factor decisivo. Imagina a un cliente potencial en su auto, buscando resolver un problema urgente. Ejemplo:</p>
              
              <blockquote class="border-l-4 border-brand-orange pl-4 italic text-slate-400 my-4 bg-white/5 p-4 rounded-r-lg">
                "Necesito imprimir unos documentos urgentes para una reunión y es sábado por la tarde. Busco en mi celular: <strong>'Papelería abierta cerca de mí'</strong>."
              </blockquote>

              <p>Si tu negocio tiene un sitio web vinculado correctamente a tu ficha de <strong>Google Business Profile (Maps)</strong>, ese cliente verá:</p>
              <ul class="list-disc list-inside space-y-2 ml-4 text-slate-300 my-4">
                  <li>✅ Tu ubicación exacta en el mapa.</li>
                  <li>✅ Tus horarios actualizados (Confirmando que estás abierto).</li>
                  <li>✅ <strong>Un enlace directo a WhatsApp</strong> en tu web para preguntar: "¿Imprimen planos a color?".</li>
              </ul>

              <p>Si esa información no está accesible a un clic, o si el cliente tiene dudas y no puede contactarte rápido, se irá con el competidor que sí le facilitó la vida. <strong>La meta es reducir la fricción:</strong> que entre el deseo del cliente y tu negocio solo haya un clic de distancia.</p>

              <h3 class="text-2xl font-bold text-white mt-8 mb-4">Conclusión</h3>
              <p>Un sitio web no es un gasto, es una inversión con retorno. Si quieres dejar de depender de la suerte en redes sociales y construir una base sólida para tu marca, el momento de crear tu web es ahora.</p>
            `
        },
        // PORTUGUESE CONTENT
        pt: {
            title: 'Por que seu negócio precisa de um site profissional em 2025?',
            category: 'Negócios',
            content: `
              <p class="lead text-xl mb-6 text-slate-300">Muitos donos de negócios acreditam que ter uma conta no Instagram ou Facebook é suficiente. "Meus clientes estão lá", dizem. Mas o que acontece quando o algoritmo muda? Ou quando um cliente te procura no Google e nada profissional aparece? Neste artigo, explico por que um site é seu ativo mais valioso.</p>
              
              <h3 class="text-2xl font-bold text-white mt-8 mb-4">1. Credibilidade e Primeira Impressão</h3>
              <p>Vivemos na era da desconfiança. Antes de comprar um serviço ou visitar um local, 84% das pessoas pesquisam o negócio no Google. Se você não tem um site, ou se seu site parece velho e descuidado, você perde credibilidade instantaneamente.</p>
              <p>Um site profissional diz: <strong>"Sou um negócio sério, invisto na minha imagem e estou aqui para ficar"</strong>.</p>

              <h3 class="text-2xl font-bold text-white mt-8 mb-4">2. Controle Total (Você é o dono)</h3>
              <p>As redes sociais são terreno alugado. Hoje você tem alcance, amanhã o Instagram muda o algoritmo e ninguém vê seus posts. Um site é <strong>propriedade digital</strong>. Ninguém pode tirá-lo de você, ninguém pode ocultar seu conteúdo e você decide como apresentar seus produtos.</p>

              <h3 class="text-2xl font-bold text-white mt-8 mb-4">3. Vendas e Atendimento 24/7</h3>
              <p>Seu negócio físico fecha às 18:00. Seu site não. Um site bem projetado atua como um vendedor que trabalha 24 horas por dia:</p>
              <ul class="list-disc list-inside space-y-2 ml-4 text-slate-300">
                  <li>Responde perguntas frequentes (FAQ).</li>
                  <li>Mostra seu portfólio ou catálogo.</li>
                  <li>Permite agendar horários ou pedir orçamentos enquanto você dorme.</li>
              </ul>

              <h3 class="text-2xl font-bold text-white mt-8 mb-4">4. O Ecossistema Local: Google Maps e o Imediatismo</h3>
              <p>Aqui entra o fator decisivo. Imagine um cliente potencial no carro, tentando resolver um problema urgente. Exemplo:</p>
              
              <blockquote class="border-l-4 border-brand-orange pl-4 italic text-slate-400 my-4 bg-white/5 p-4 rounded-r-lg">
                "Preciso imprimir uns documentos urgentes para uma reunião e é sábado à tarde. Pesquiso no celular: <strong>'Papelaria aberta perto de mim'</strong>."
              </blockquote>

              <p>Se o seu negócio tem um site vinculado corretamente à sua ficha do <strong>Google Business Profile (Maps)</strong>, esse cliente verá:</p>
              <ul class="list-disc list-inside space-y-2 ml-4 text-slate-300 my-4">
                  <li>✅ Sua localização exata no mapa.</li>
                  <li>✅ Seus horários atualizados (Confirmando que você está aberto).</li>
                  <li>✅ <strong>Um link direto para o WhatsApp</strong> no seu site para perguntar: "Vocês imprimem colorido?".</li>
              </ul>

              <p>Se essa informação não estiver acessível a um clique, ou se o cliente tiver dúvidas e não conseguir te contatar rápido, ele irá para o concorrente que facilitou a vida dele. <strong>A meta é reduzir a fricção:</strong> garantir que entre o desejo do cliente e o seu negócio exista apenas um clique de distância.</p>

              <h3 class="text-2xl font-bold text-white mt-8 mb-4">Conclusão</h3>
              <p>Um site não é uma despesa, é um investimento com retorno. Se você quer parar de depender da sorte nas redes sociais e construir uma base sólida para sua marca, o momento de criar seu site é agora.</p>
            `
        },
        // ENGLISH CONTENT
        en: {
            title: 'Why Your Business Needs a Professional Website in 2025',
            category: 'Business',
            content: `
              <p class="lead text-xl mb-6 text-slate-300">Many business owners believe that having an Instagram or Facebook account is enough. "My customers are there," they say. But what happens when the algorithm changes? Or when a customer Googles you and nothing professional comes up? In this article, I explain why a website is your most valuable asset.</p>
              
              <h3 class="text-2xl font-bold text-white mt-8 mb-4">1. Credibility and First Impressions</h3>
              <p>We live in an era of distrust. Before buying a service or visiting a location, 84% of people search for the business on Google. If you don't have a website, or if your website looks old and neglected, you lose credibility instantly.</p>
              <p>A professional website says: <strong>"I am a serious business, I invest in my image, and I am here to stay"</strong>.</p>

              <h3 class="text-2xl font-bold text-white mt-8 mb-4">2. Total Control (You own it)</h3>
              <p>Social media is rented land. Today you have reach, tomorrow Instagram changes the algorithm and no one sees your posts. A website is <strong>digital property</strong>. No one can take it away from you, no one can hide your content, and you decide how to present your products.</p>

              <h3 class="text-2xl font-bold text-white mt-8 mb-4">3. Sales and Service 24/7</h3>
              <p>Your physical business closes at 6:00 PM. Your website does not. A well-designed website acts as a salesperson working 24 hours a day:</p>
              <ul class="list-disc list-inside space-y-2 ml-4 text-slate-300">
                  <li>Answers frequently asked questions (FAQ).</li>
                  <li>Showcases your portfolio or catalog.</li>
                  <li>Allows scheduling appointments or requesting quotes while you sleep.</li>
              </ul>

              <h3 class="text-2xl font-bold text-white mt-8 mb-4">4. The Local Ecosystem: Google Maps and Immediacy</h3>
              <p>This is where the decisive factor comes in. Imagine a potential customer in their car, trying to solve an urgent problem. Example:</p>
              
              <blockquote class="border-l-4 border-brand-orange pl-4 italic text-slate-400 my-4 bg-white/5 p-4 rounded-r-lg">
                "I need to print some documents urgently for a meeting and it's Saturday afternoon. I search on my phone: <strong>'Print shop open near me'</strong>."
              </blockquote>

              <p>If your business has a website correctly linked to your <strong>Google Business Profile (Maps)</strong>, that customer will see:</p>
              <ul class="list-disc list-inside space-y-2 ml-4 text-slate-300 my-4">
                  <li>✅ Your exact location on the map.</li>
                  <li>✅ Your up-to-date hours (Confirming you are open).</li>
                  <li>✅ <strong>A direct WhatsApp link</strong> on your site to ask: "Do you print in color?".</li>
              </ul>

              <p>If that information is not accessible within a click, or if the customer has doubts and cannot contact you quickly, they will go to the competitor who made their life easier. <strong>The goal is to reduce friction:</strong> ensuring that between the customer's desire and your business, there is only one click of distance.</p>

              <h3 class="text-2xl font-bold text-white mt-8 mb-4">Conclusion</h3>
              <p>A website is not an expense, it is an investment with a return. If you want to stop relying on luck on social media and build a solid foundation for your brand, the time to create your website is now.</p>
            `
        }
    }
  },
  {
    slug: 'diagnostico-hardware-avanzado',
    date: '2025-11-28',
    img: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=800&auto=format&fit=crop',
    url: '/blog/diagnostico-hardware-avanzado',
    tags: ['Hardware', 'Support'],
    locales: {
        es: {
            title: 'Diagnóstico de Hardware: Más allá del reinicio',
            category: 'Reflexión',
            content: `<p>A veces, apagar y prender no es suficiente. Herramientas como MemTest86 y CrystalDiskInfo son esenciales para detectar fallos antes de que sean catastróficos.</p>`
        },
        pt: {
            title: 'Diagnóstico de Hardware: Além de reiniciar',
            category: 'Reflexão',
            content: `<p>Às vezes, desligar e ligar não é suficiente. Ferramentas como MemTest86 e CrystalDiskInfo são essenciais.</p>`
        },
        en: {
            title: 'Hardware Diagnostics: Beyond Rebooting',
            category: 'Reflection',
            content: `<p>Sometimes turning it off and on again isn't enough. Tools like MemTest86 and CrystalDiskInfo are essential.</p>`
        }
    }
  },
  {
    slug: 'react-vs-html-statico',
    date: '2025-10-15',
    img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop',
    url: '/blog/react-vs-html-statico',
    tags: ['React', 'WebDev'],
    locales: {
        es: {
            title: '¿Cuándo usar React y cuándo HTML estático?',
            category: 'Código',
            content: `<p>La sobreingeniería es real. No todo necesita un SPA. Un sitio corporativo simple carga más rápido y tiene mejor SEO con HTML estático o generadores como Astro.</p>`
        },
        pt: {
            title: 'Quando usar React e quando usar HTML estático?',
            category: 'Código',
            content: `<p>A engenharia excessiva é real. Nem tudo precisa de uma SPA. Um site corporativo simples carrega mais rápido com HTML estático.</p>`
        },
        en: {
            title: 'When to Use React vs Static HTML?',
            category: 'Code',
            content: `<p>Overengineering is real. Not everything needs an SPA. A simple corporate site loads faster with static HTML.</p>`
        }
    }
  },
  {
    slug: 'configuracion-redes-pymes',
    date: '2025-09-02',
    img: 'https://images.unsplash.com/photo-1544197150-b99a580bbcbf?q=80&w=800&auto=format&fit=crop',
    url: '/blog/configuracion-redes-pymes',
    tags: ['Networking', 'IT'],
    locales: {
        es: {
             title: 'Configuración básica de redes para PyMEs',
             category: 'Tutorial',
             content: `<p>Segmentación de redes, seguridad básica y configuración de routers Mikrotik para pequeñas oficinas.</p>`
        },
        pt: {
             title: 'Configuração básica de rede para PMEs',
             category: 'Tutorial',
             content: `<p>Segmentação de rede, segurança básica e configuração de roteadores Mikrotik.</p>`
        },
        en: {
             title: 'Basic Network Configuration for SMBs',
             category: 'Tutorial',
             content: `<p>Network segmentation, basic security, and Mikrotik router configuration for small offices.</p>`
        }
    }
  },
  {
    slug: 'futuro-ingenieria-sistemas',
    date: '2025-08-20',
    img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop',
    url: '/blog/futuro-ingenieria-sistemas',
    tags: ['Career', 'Engineering'],
    locales: {
        es: {
            title: 'El futuro de la Ingeniería de Sistemas',
            category: 'Reflexión',
            content: `<p>Opinión sobre hacia dónde va la carrera con la llegada de la IA generativa.</p>`
        },
        pt: {
            title: 'O futuro da Engenharia de Sistemas',
            category: 'Reflexão',
            content: `<p>Opinião sobre para onde vai a carreira com a chegada da IA generativa.</p>`
        },
        en: {
            title: 'The Future of Systems Engineering',
            category: 'Reflection',
            content: `<p>Opinion on where the career is heading with the arrival of generative AI.</p>`
        }
    }
  },
  {
    slug: 'linux-para-principiantes',
    date: '2025-07-10',
    img: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=800&auto=format&fit=crop',
    url: '/blog/linux-para-principiantes',
    tags: ['Linux', 'OS'],
    locales: {
        es: {
            title: 'Linux para principiantes: Terminal sin miedo',
            category: 'Tutorial',
            content: `<p>Comandos básicos que te salvarán la vida en tu primer servidor VPS.</p>`
        },
        pt: {
            title: 'Linux para iniciantes: Terminal sem medo',
            category: 'Tutorial',
            content: `<p>Comandos básicos que salvarão sua vida no seu primeiro servidor VPS.</p>`
        },
        en: {
            title: 'Linux for Beginners: Fearless Terminal',
            category: 'Tutorial',
            content: `<p>Basic commands that will save your life on your first VPS server.</p>`
        }
    }
  }
];