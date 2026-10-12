"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "es" | "en";

const LangCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "es",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Siempre hidrata en ES (igual que el SSR) y aplica lo guardado tras montar:
  // leer localStorage en el init rompe la hidratación (React #418) en visitas EN.
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("lang");
      if (saved === "en" || saved === "es") setLangState(saved);
    } catch {
      /* almacenamiento no disponible */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem("lang", lang);
    } catch {
      /* almacenamiento no disponible */
    }
  }, [lang]);

  return (
    <LangCtx.Provider value={{ lang, setLang: setLangState }}>
      {children}
    </LangCtx.Provider>
  );
}

export function useLang() {
  return useContext(LangCtx);
}

export function LanguageToggle() {
  const { lang, setLang } = useLang();
  const btn = (l: Lang, label: string) => (
    <button
      key={l}
      type="button"
      onClick={() => setLang(l)}
      aria-pressed={lang === l}
      aria-label={l === "es" ? "Ver en español" : "View in English"}
      className={`px-2.5 py-1.5 transition ${
        lang === l
          ? "bg-gold text-ink"
          : "text-white/55 hover:text-gold"
      }`}
    >
      {label}
    </button>
  );
  return (
    <div className="flex items-center overflow-hidden rounded-xl border border-white/20 text-xs font-bold">
      {btn("es", "ES")}
      <span aria-hidden className="h-4 w-px bg-white/20" />
      {btn("en", "EN")}
    </div>
  );
}

const es = {
  nav: {
    tag: "Webs que venden",
    links: ["Inicio", "Proyectos", "Servicios", "Precios", "Contacto"],
    quote: "Pedir presupuesto",
    quoteShort: "Presupuesto",
    hrefs: ["/#inicio", "/#proyectos", "/#servicios", "/#precios", "/#contacto"],
  },
  waGeneral: "Hola Nicolás, quiero un presupuesto sin compromiso para mi negocio.",
  hero: {
    h1a: "Tu negocio vendiendo todos los días,",
    h1b: "incluso cuando vos descansás.",
    sub: "Sitios rápidos, catálogos digitales y pedidos por WhatsApp para tiendas, servicios y alojamientos. Sin vueltas: el cliente entra, entiende y te escribe.",
    cta: "Pedir presupuesto por WhatsApp →",
    wa: "Hola Nicolás, quiero un presupuesto sin compromiso para mi negocio.",
    strip: "Trabajos reales en producción",
    seeWork: "Ver trabajos",
    trust: [
      { metric: "En producción", label: "Tienda real con clientes" },
      { metric: "CI + backups", label: "Datos a salvo" },
      { metric: "+300 productos", label: "Catálogo activo hoy" },
      { metric: "Trato directo", label: "Sin intermediarios" },
    ],
  },
  metrics: {
    title: "Lo que ya está funcionando.",
    items: [
      "productos activos en tienda real",
      "seguidores gestionados con CRM y ventas",
      "engagement real del negocio",
    ],
    decimalSep: ",",
  },
  problem: {
    title: "Esto le pasa a casi todos los negocios.",
    pains: [
      {
        title: "No existís en internet",
        text: "Si el cliente te busca y no te encuentra, le compra a la competencia. Así de simple.",
      },
      {
        title: "Perdés horas en WhatsApp",
        text: "Responder “hola, qué tal” todo el día te cuesta tiempo que podrías usar en vender y producir.",
      },
      {
        title: "Tu catálogo es un PDF viejo",
        text: "Fotos sueltas, precios desactualizados y cero forma de pedir. El cliente se cansa y se va.",
      },
      {
        title: "Dependés del boca en boca",
        text: "Funciona… hasta que no funciona. Un activo digital vende por vos las 24 horas.",
      },
    ],
    closing: "Todo esto tiene solución — y más barata de lo que creés.",
    closingLink: "Pedila acá →",
  },
  process: {
    title: "Cómo vamos a trabajar juntos.",
    sub: "Sin reuniones eternas ni tecnicismos: así avanza tu proyecto, de la primera charla a la entrega.",
    steps: [
      {
        paso: "Paso 1",
        title: "Charlamos de tu negocio",
        text: "Me contás qué vendés, cómo trabajás hoy y qué te frena. Te digo qué te conviene, cuánto sale y en cuánto tiempo lo tenés.",
        meta: "Sin compromiso",
      },
      {
        paso: "Paso 2",
        title: "Lo construyo a la vista",
        text: "Landing en días, tienda en semanas. Ves avances reales mientras lo armo, no renders ni promesas.",
        meta: "Avances visibles",
      },
      {
        paso: "Paso 3",
        title: "Medimos y te acompaño",
        text: "Miramos consultas y ventas recuperadas, ajustamos lo necesario y tenés 30 días de soporte incluidos.",
        meta: "Soporte 30 días",
      },
    ],
    cta: "Empezar por el paso 1 →",
    wa: "Hola Nicolás, quiero arrancar con el paso 1: charlar de mi negocio.",
  },
  services: {
    title: "Elegí lo que tu negocio necesita hoy.",
    from: "Desde",
    names: {
      "Landing Page": "Landing Page",
      "Sitio con gestion y catalogo": "Sitio con gestion y catalogo",
      "E-commerce Premium": "E-commerce Premium",
    } as Record<string, string>,
    detail: {
      "Landing Page": {
        outcome: "Convierte visitas en mensajes de WhatsApp.",
        points: [
          "Diseño rápido y moderno",
          "Botón directo a tu WhatsApp",
          "Lista para vender desde el día 1",
        ],
      },
      "Sitio con gestion y catalogo": {
        outcome: "Tu catálogo siempre actualizado, sin PDFs viejos.",
        points: [
          "Menúes y catálogos digitales con QR",
          "Panel para manejar stock y precios",
          "Pedidos ordenados por WhatsApp",
        ],
      },
      "E-commerce Premium": {
        outcome: "Tu local abierto 24/7: vende mientras descansás.",
        points: [
          "Tienda completa con pagos",
          "Panel de administración y reportes",
          "Backups automáticos y despliegue profesional",
        ],
      },
    } as Record<string, { outcome: string; points: string[] }>,
    cta: "Consultar este servicio",
    waService: (name: string, price: string) =>
      `Hola Nicolás, me interesa el servicio ${name} (desde ${price}). ¿Me pasás presupuesto?`,
  },
  cases: {
    title: "En qué estoy trabajando.",
    see: "Ver proyecto →",
  },
  pricing: {
    title: "Precios de frente, sin letra chica.",
    sub: "El precio final depende del alcance y se define en el presupuesto sin compromiso. Sin sorpresas, sin letra chica.",
    from: "Desde",
    times: {
      "Landing Page": "Entrega en días",
      "Sitio con gestion y catalogo": "Entrega en 1–2 semanas",
      "E-commerce Premium": "Entrega en 3–6 semanas",
    } as Record<string, string>,
    cta: "Pedir presupuesto",
    waService: (name: string, price: string) =>
      `Hola Nicolás, quiero presupuesto del servicio ${name} (desde ${price}).`,
    note: "Forma de pago: 50% al confirmar y 50% al entregar. Soporte de 30 días incluido en todos los planes.",
  },
  faq: {
    title: "Sacate las dudas.",
    items: [
      {
        q: "¿Cuánto tarda mi página?",
        a: "Una landing en días, un sitio con catálogo en 1–2 semanas y una tienda completa en 3–6 semanas. Te doy fecha concreta en el presupuesto.",
      },
      {
        q: "¿Cómo se paga?",
        a: "50% al confirmar el trabajo y 50% al entregar. Precios en USD al equivalente del día, sin sorpresas.",
      },
      {
        q: "¿Qué necesitás de mi parte?",
        a: "Lo básico: nombre del negocio, fotos (o las armamos juntos), precios y tu WhatsApp. Del resto me encargo yo.",
      },
      {
        q: "¿Y si ya tengo una página vieja?",
        a: "La audito gratis: te digo qué sirve, qué frena ventas y cuánto sale arreglarla o hacerla de nuevo. Sin compromiso.",
      },
      {
        q: "¿Hay soporte después de entregar?",
        a: "Sí: 30 días de soporte incluidos para ajustes y dudas. Y mantenimiento mensual opcional si querés seguir mejorando.",
      },
    ],
  },
  contact: {
    title: "Hablemos de tu negocio.",
    text: "Contame qué vendés y te digo qué te conviene, cuánto sale y en cuánto tiempo lo tenés. Te respondo yo personalmente, sin bots ni formularios eternos.",
    wa: "Hola Nicolás, estoy listo para llevar mi negocio al siguiente nivel. ¿Hablamos?",
    ctaWa: "Hablar por WhatsApp →",
    ctaWork: "Ver trabajos",
    note: "Presupuesto sin compromiso — respuesta directa",
    alt1: "Reunión de trabajo con un negocio en una sala moderna",
    alt2: "Dueña de negocio revisando pedidos con su tablet",
  },
  footer: {
    tagline: "Sitios web que venden para tiendas, servicios y alojamientos.",
    sections: "Secciones",
    services: "Servicios",
    direct: "Contacto directo",
    links: ["Servicios", "Trabajos", "Precios", "Preguntas"] as string[],
    waCta: "Escribime por WhatsApp →",
    waMsg: "Hola Nicolás, quiero un presupuesto sin compromiso para mi negocio.",
    bottom2: "Sitios web que venden.",
  },
  trabajo: {
    back: "← Proyectos",
    visit: "Entrar al sitio →",
    want: "Quiero algo así",
  },
  trabajosData: {
    importexpress: {
      tagline: "Tienda online que vende todos los días.",
      descripcion:
        "E-commerce real en producción para un negocio de importación: catálogo con cientos de productos, pedidos ordenados y panel de administración.",
      puntos: [
        "Tienda online funcionando con clientes reales",
        "Catálogo, pedidos y panel de administración",
        "Calidad profesional: tests automáticos y copias de seguridad",
      ],
      etiqueta: "Cliente en producción",
      ctaMsg: "Hola Nicolás, quiero algo como Lo Pedís, Lo Tenes para mi negocio.",
      capturas: [
        { alt: "Catálogo web de Lo Pedís, Lo Tenes", titulo: "Catálogo web — vista inicial" },
        { alt: "Dashboard del panel de administración de Lo Pedís, Lo Tenes", titulo: "Panel admin — dashboard" },
      ],
    },
    brinines: {
      tagline: "Ventas ordenadas por Instagram y WhatsApp.",
      descripcion:
        "Sistema real para un negocio de budines artesanales: CRM con clientes, pedidos y automatizaciones que convierten seguidores en ventas.",
      puntos: [
        "Sistema que ordena ventas por Instagram y WhatsApp",
        "CRM con clientes, pedidos y automatizaciones",
        "201 seguidores, 5 productos, venta directa sin intermediarios",
      ],
      etiqueta: "Negocio real",
      ctaMsg: "Hola Nicolás, quiero un sistema como Brinines para mis ventas.",
      capturas: [
        { alt: "Vista principal del CRM de Brinines", titulo: "Vista principal — Brinines" },
      ],
    },
    hoteleria: {
      tagline: "Reservas directas para alojamientos de los valles.",
      descripcion:
        "Propuesta para hoteles y alojamientos turísticos de Tafí, El Mollar, San Javier y Amaicha: reservas directas por WhatsApp, sin comisiones ni intermediarios.",
      puntos: [
        "Reservas directas por WhatsApp, sin comisiones",
        "Fichas por habitación con galería",
        "Buscador por zona turística",
        "Sección para sumar nuevas propiedades",
      ],
      etiqueta: "Demo conceptual",
      ctaMsg: "Hola Nicolás, tengo un alojamiento y quiero una página así.",
      capturas: [
        { alt: "Concepto visual Hotelería", titulo: "Vista concepto — Hotelería" },
      ],
    },
  } as Record<
    string,
    {
      tagline: string;
      descripcion: string;
      puntos: string[];
      etiqueta: string;
      ctaMsg: string;
      capturas: { alt: string; titulo: string }[];
    }
  >,
};

export type Dict = typeof es;

const en: Dict = {
  nav: {
    tag: "Websites that sell",
    links: ["Home", "Projects", "Services", "Pricing", "Contact"],
    quote: "Get a quote",
    quoteShort: "Quote",
    hrefs: ["/#inicio", "/#proyectos", "/#servicios", "/#precios", "/#contacto"],
  },
  waGeneral: "Hi Nicolás, I want a no-commitment quote for my business.",
  hero: {
    h1a: "Your business selling every day,",
    h1b: "even while you rest.",
    sub: "Fast sites, digital catalogs and WhatsApp orders for shops, services and rentals. No fluff: customers arrive, understand and message you.",
    cta: "Get a WhatsApp quote →",
    wa: "Hi Nicolás, I want a no-commitment quote for my business.",
    strip: "Real work in production",
    seeWork: "See work",
    trust: [
      { metric: "In production", label: "Real store with customers" },
      { metric: "CI + backups", label: "Data kept safe" },
      { metric: "+300 products", label: "Active catalog today" },
      { metric: "Direct deal", label: "No middlemen" },
    ],
  },
  metrics: {
    title: "Already working.",
    items: [
      "active products in a real store",
      "followers managed with CRM and sales",
      "real business engagement",
    ],
    decimalSep: ".",
  },
  problem: {
    title: "This happens to almost every business.",
    pains: [
      {
        title: "Invisible online",
        text: "If customers search for you and can't find you, they buy from competitors. That simple.",
      },
      {
        title: "Losing hours on WhatsApp",
        text: "Answering “hi, how are you” all day costs time you could spend selling and producing.",
      },
      {
        title: "Your catalog is an old PDF",
        text: "Loose photos, outdated prices and no way to order. Customers get tired and leave.",
      },
      {
        title: "Relying on word of mouth",
        text: "It works… until it doesn't. A digital asset sells for you 24 hours a day.",
      },
    ],
    closing: "All of this has a fix — cheaper than you think.",
    closingLink: "Get it here →",
  },
  process: {
    title: "How we'll work together.",
    sub: "No endless meetings or jargon: this is how your project moves, from the first chat to delivery.",
    steps: [
      {
        paso: "Step 1",
        title: "Let's talk about your business",
        text: "You tell me what you sell, how you work today and what's holding you back. I tell you what suits you, what it costs and how fast you get it.",
        meta: "No commitment",
      },
      {
        paso: "Step 2",
        title: "I build it in the open",
        text: "Landing in days, store in weeks. You see real progress while I build — no renders, no promises.",
        meta: "Visible progress",
      },
      {
        paso: "Step 3",
        title: "We measure and I stick around",
        text: "We look at inquiries and recovered sales, adjust what's needed and you get 30 days of support included.",
        meta: "30-day support",
      },
    ],
    cta: "Start with step 1 →",
    wa: "Hi Nicolás, I want to start with step 1: talking about my business.",
  },
  services: {
    title: "Pick what your business needs today.",
    from: "From",
    names: {
      "Landing Page": "Landing Page",
      "Sitio con gestion y catalogo": "Catalog + management site",
      "E-commerce Premium": "E-commerce Premium",
    } as Record<string, string>,
    detail: {
      "Landing Page": {
        outcome: "Turns visits into WhatsApp messages.",
        points: [
          "Fast, modern design",
          "Direct button to your WhatsApp",
          "Ready to sell from day 1",
        ],
      },
      "Sitio con gestion y catalogo": {
        outcome: "Your catalog always updated, no old PDFs.",
        points: [
          "Digital menus and catalogs with QR",
          "Panel to manage stock and prices",
          "Orders organized via WhatsApp",
        ],
      },
      "E-commerce Premium": {
        outcome: "Your shop open 24/7: selling while you rest.",
        points: [
          "Full store with payments",
          "Admin panel and reports",
          "Automatic backups and professional deploys",
        ],
      },
    } as Record<string, { outcome: string; points: string[] }>,
    cta: "Ask about this service",
    waService: (name: string, price: string) =>
      `Hi Nicolás, I'm interested in ${name} (from ${price}). Can you quote me?`,
  },
  cases: {
    title: "What I'm working on.",
    see: "See project →",
  },
  pricing: {
    title: "Upfront prices, no fine print.",
    sub: "Final price depends on scope and is set in the no-commitment quote. No surprises, no fine print.",
    from: "From",
    times: {
      "Landing Page": "Delivery in days",
      "Sitio con gestion y catalogo": "Delivery in 1–2 weeks",
      "E-commerce Premium": "Delivery in 3–6 weeks",
    } as Record<string, string>,
    cta: "Get a quote",
    waService: (name: string, price: string) =>
      `Hi Nicolás, I want a quote for ${name} (from ${price}).`,
    note: "Payment: 50% on confirmation and 50% on delivery. 30 days of support included in every plan.",
  },
  faq: {
    title: "Questions, answered.",
    items: [
      {
        q: "How long does my page take?",
        a: "A landing in days, a catalog site in 1–2 weeks and a full store in 3–6 weeks. I give you a firm date in the quote.",
      },
      {
        q: "How do payments work?",
        a: "50% when confirming the job and 50% on delivery. Prices in USD at the day's rate, no surprises.",
      },
      {
        q: "What do you need from me?",
        a: "The basics: business name, photos (or we put them together), prices and your WhatsApp. I handle the rest.",
      },
      {
        q: "What if I already have an old page?",
        a: "I audit it free: I tell you what works, what blocks sales and what fixing or redoing it costs. No commitment.",
      },
      {
        q: "Is there support after delivery?",
        a: "Yes: 30 days of included support for tweaks and questions. And optional monthly maintenance if you want to keep improving.",
      },
    ],
  },
  contact: {
    title: "Let's talk about your business.",
    text: "Tell me what you sell and I'll tell you what suits you, what it costs and how fast you get it. I reply personally — no bots, no endless forms.",
    wa: "Hi Nicolás, I'm ready to take my business to the next level. Shall we talk?",
    ctaWa: "Chat on WhatsApp →",
    ctaWork: "See work",
    note: "No-commitment quote — direct reply",
    alt1: "Work meeting with a business in a modern room",
    alt2: "Shop owner checking orders on her tablet",
  },
  footer: {
    tagline: "Websites that sell for shops, services and rentals.",
    sections: "Sections",
    services: "Services",
    direct: "Direct contact",
    links: ["Services", "Work", "Pricing", "FAQ"] as string[],
    waCta: "Write me on WhatsApp →",
    waMsg: "Hi Nicolás, I want a no-commitment quote for my business.",
    bottom2: "Websites that sell.",
  },
  trabajo: {
    back: "← Projects",
    visit: "Visit live site →",
    want: "I want something like this",
  },
  trabajosData: {
    importexpress: {
      tagline: "Online store selling every day.",
      descripcion:
        "Real e-commerce in production for an import business: catalog with hundreds of products, organized orders and admin panel.",
      puntos: [
        "Online store running with real customers",
        "Catalog, orders and admin panel",
        "Professional quality: automatic tests and backups",
      ],
      etiqueta: "Live client",
      ctaMsg: "Hi Nicolás, I want something like Lo Pedís, Lo Tenes for my business.",
      capturas: [
        { alt: "Lo Pedís, Lo Tenes web catalog", titulo: "Web catalog — first view" },
        { alt: "Lo Pedís, Lo Tenes admin panel dashboard", titulo: "Admin panel — dashboard" },
      ],
    },
    brinines: {
      tagline: "Sales organized via Instagram and WhatsApp.",
      descripcion:
        "Real system for an artisan pudding business: CRM with customers, orders and automations turning followers into sales.",
      puntos: [
        "System organizing sales via Instagram and WhatsApp",
        "CRM with customers, orders and automations",
        "201 followers, 5 products, direct sales with no middlemen",
      ],
      etiqueta: "Real business",
      ctaMsg: "Hi Nicolás, I want a system like Brinines for my sales.",
      capturas: [
        { alt: "Brinines CRM main view", titulo: "Main view — Brinines" },
      ],
    },
    hoteleria: {
      tagline: "Direct bookings for valley rentals.",
      descripcion:
        "Proposal for hotels and tourist rentals in Tafí, El Mollar, San Javier and Amaicha: direct bookings via WhatsApp, no commissions, no middlemen.",
      puntos: [
        "Direct bookings via WhatsApp, no commissions",
        "Room pages with gallery",
        "Search by tourist area",
        "Section to add new properties",
      ],
      etiqueta: "Concept demo",
      ctaMsg: "Hi Nicolás, I own a rental and want a page like this.",
      capturas: [
        { alt: "Hotelería visual concept", titulo: "Concept view — Hotelería" },
      ],
    },
  } as Record<
    string,
    {
      tagline: string;
      descripcion: string;
      puntos: string[];
      etiqueta: string;
      ctaMsg: string;
      capturas: { alt: string; titulo: string }[];
    }
  >,
};

export const strings: Record<Lang, Dict> = { es, en };
