import { waLink } from "./site";

export type Trabajo = {
  slug: string;
  nombre: string;
  tagline: string;
  descripcion: string;
  puntos: string[];
  fondo: string;
  fondoAlt: string;
  captura?: string;
  capturaAlt?: string;
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
    fondoAlt: "Pantalla con tienda online en un local",
    captura: "/trabajos/cap-importexpress.jpg",
    capturaAlt: "Vista principal de la tienda ImportExpress",
    urlDeploy: "https://lopedislotenes.com",
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
    fondoAlt: "Pan artesanal saliendo del horno",
    captura: "/trabajos/cap-brinines.jpg",
    capturaAlt: "Vista principal del CRM de Brinines",
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
    fondoAlt: "Refugio de montaña junto al lago",
    etiqueta: "Demo conceptual",
    real: false,
    ctaMsg: "Hola Nicolás, tengo un alojamiento y quiero una página así.",
  },
];

export const trabajoPorSlug = (slug: string) =>
  trabajos.find((t) => t.slug === slug);

export const waTrabajo = (t: Trabajo) => waLink(t.ctaMsg);
