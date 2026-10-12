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
    nombre: "Lo Pedís, Lo Tenes",
    tagline: "Tienda online que vende todos los días.",
    descripcion:
      "E-commerce real en producción para un negocio de importación: catálogo con cientos de productos, pedidos ordenados y panel de control.",
    puntos: [
      "Tienda online funcionando con clientes reales",
      "Catálogo, pedidos y panel de control",
      "Calidad profesional: revisado y con copias de seguridad",
    ],
    fondo: "/trabajos/bg-ecommerce.jpg",
    fondoAlt: "Operativa portuaria nocturna vista con dron",
    fondoVideo: "/trabajos/bg-harbor.mp4",
    fondoPoster: "/trabajos/bg-harbor.jpg",
    capturas: [
      {
        src: "/trabajos/cap-ie-catalogo.jpg",
        alt: "Catálogo web de Lo Pedís, Lo Tenes",
        titulo: "Catálogo web — vista inicial",
      },
      {
        src: "/trabajos/cap-ie-admin.jpg",
        alt: "Panel de control de Lo Pedís, Lo Tenes",
        titulo: "Panel de control",
      },
    ],
    urlDeploy: "https://lopedis-lotenes.up.railway.app",
    etiqueta: "Cliente en producción",
    real: true,
    ctaMsg: "Hola Nicolás, quiero algo como Lo Pedís, Lo Tenes para mi negocio.",
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
    tagline: "Reservas directas para alojamientos turísticos.",
    descripcion:
      "Propuesta para hoteles y alojamientos turísticos: reservas directas por WhatsApp, sin comisiones ni intermediarios.",
    puntos: [
      "Reservas directas por WhatsApp, sin comisiones",
      "Fichas por habitación con galería",
      "Buscador por zona turística",
      "Sección para sumar nuevas propiedades",
    ],
    fondo: "/trabajos/bg-montana.jpg",
    fondoAlt: "Cabañas entre el bosque vistas con dron",
    fondoVideo: "/trabajos/bg-cabins.mp4",
    fondoPoster: "/trabajos/bg-cabins.jpg",
    capturas: [
      {
        src: "/trabajos/bg-cabins.jpg",
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
