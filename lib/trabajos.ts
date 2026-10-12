import { waLink } from "./site";

export type Captura = {
  src: string;
  alt: string;
  titulo: string;
};

export type Trabajo = {
  slug: string;
  nombre: string;
  tagline: string;
  descripcion: string;
  puntos: string[];
  fondo: string;
  fondoAlt: string;
  fondoVideo?: string;
  fondoPoster?: string;
  capturas?: Captura[];
  urlDeploy?: string;
  etiqueta: string;
  real: boolean;
  ctaMsg: string;
};

export const trabajos: Trabajo[] = [
  {
    slug: "importexpress",
    nombre: "ImportExpress",
    tagline: "Tienda online que vende todos los días.",
    descripcion:
      "E-commerce real en producción para un negocio de importación: catálogo con cientos de productos, pedidos ordenados y panel de administración.",
    puntos: [
      "Tienda online funcionando con clientes reales",
      "Catálogo, pedidos y panel de administración",
      "Calidad profesional: tests automáticos y copias de seguridad",
    ],
    fondo: "/trabajos/bg-ecommerce.jpg",
    fondoAlt: "Operativa portuaria nocturna vista con dron",
    fondoVideo: "/trabajos/bg-harbor.mp4",
    fondoPoster: "/trabajos/bg-harbor.jpg",
    capturas: [
      {
        src: "/trabajos/cap-ie-catalogo.jpg",
        alt: "Catálogo web de ImportExpress",
        titulo: "Catálogo web — vista inicial",
      },
      {
        src: "/trabajos/cap-ie-admin.jpg",
        alt: "Acceso al panel de administración de ImportExpress",
        titulo: "Panel admin — acceso",
      },
    ],
    urlDeploy: "https://lopedis-lotenes.up.railway.app",
    etiqueta: "Cliente en producción",
    real: true,
    ctaMsg: "Hola Nicolás, quiero algo como ImportExpress para mi negocio.",
  },
  {
    slug: "brinines",
    nombre: "Brinines",
    tagline: "Ventas ordenadas por Instagram y WhatsApp.",
    descripcion:
      "Sistema real para un negocio de budines artesanales: CRM con clientes, pedidos y automatizaciones que convierten seguidores en ventas.",
    puntos: [
      "Sistema que ordena ventas por Instagram y WhatsApp",
      "CRM con clientes, pedidos y automatizaciones",
      "201 seguidores, 5 productos, venta directa sin intermediarios",
    ],
    fondo: "/trabajos/bg-horno.jpg",
    fondoAlt: "Porción de budín marmolado artesanal",
    fondoVideo: "/trabajos/bg-brinines.mp4",
    fondoPoster: "/trabajos/bg-brinines.jpg",
    capturas: [
      {
        src: "/trabajos/cap-brinines.jpg",
        alt: "Vista principal del CRM de Brinines",
        titulo: "Vista principal — Brinines",
      },
    ],
    urlDeploy: "https://brinines-crm.vercel.app",
    etiqueta: "Negocio real",
    real: true,
    ctaMsg: "Hola Nicolás, quiero un sistema como Brinines para mis ventas.",
  },
  {
    slug: "hoteleria",
    nombre: "Hotelería",
    tagline: "Reservas directas para alojamientos de los valles.",
    descripcion:
      "Propuesta para hoteles y alojamientos turísticos de Tafí, El Mollar, San Javier y Amaicha: reservas directas por WhatsApp, sin comisiones ni intermediarios.",
    puntos: [
      "Reservas directas por WhatsApp, sin comisiones",
      "Fichas por habitación con galería",
      "Buscador por zona turística",
      "Sección para sumar nuevas propiedades",
    ],
    fondo: "/trabajos/bg-montana.jpg",
    fondoAlt: "Cielo tormentoso sobre la montaña",
    fondoVideo: "/trabajos/bg-hotel.mp4",
    fondoPoster: "/trabajos/bg-hotel.jpg",
    capturas: [
      {
        src: "/trabajos/bg-hotel.jpg",
        alt: "Concepto visual Hotelería",
        titulo: "Vista concepto — Hotelería",
      },
    ],
    urlDeploy: "https://landing-nicolas.vercel.app/trabajos/hoteleria",
    etiqueta: "Demo conceptual",
    real: false,
    ctaMsg: "Hola Nicolás, tengo un alojamiento y quiero una página así.",
  },
];

export const trabajoPorSlug = (slug: string) =>
  trabajos.find((t) => t.slug === slug);

export const waTrabajo = (t: Trabajo) => waLink(t.ctaMsg);
