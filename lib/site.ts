export const WHATSAPP_NUMBER = "5493813562078";

export function waLink(mensaje: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
}

export const services = [
  { name: "Landing Page", priceFrom: "USD 200" },
  { name: "Sitio con gestion y catalogo", priceFrom: "USD 800" },
  { name: "E-commerce Premium", priceFrom: "USD 3000" },
] as const;

export const cases = [
  { name: "ImportExpress", description: "E-commerce real en produccion con CI y backups." },
  { name: "Brinines AI", description: "CRM con 201 seguidores, ER 3.88% y 5 SKUs." },
  { name: "Alquiler temporario turistico Tucuman", description: "DEMO CONCEPTUAL; sin metricas inventadas." },
] as const;
