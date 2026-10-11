import { cases, waLink } from "../lib/site";
import Eyebrow from "./Eyebrow";

const extra: Record<string, { badge: string; real: boolean; points: string[]; cta: string }> = {
  ImportExpress: {
    badge: "Cliente real — en producción",
    real: true,
    points: [
      "Tienda online funcionando con clientes reales",
      "Catálogo, pedidos y panel de administración",
      "Calidad profesional: tests automáticos y copias de seguridad",
    ],
    cta: "Hola Nicolás, quiero algo como ImportExpress para mi negocio.",
  },
  "Brinines AI": {
    badge: "Negocio real — ventas reales",
    real: true,
    points: [
      "Sistema que ordena ventas por Instagram y WhatsApp",
      "CRM con clientes, pedidos y automatizaciones",
      "201 seguidores, 5 productos, venta directa sin intermediarios",
    ],
    cta: "Hola Nicolás, quiero un sistema como Brinines AI para mis ventas.",
  },
  "Alquiler temporario turistico Tucuman": {
    badge: "Demo conceptual",
    real: false,
    points: [
      "Buscador de propiedades que sí responde",
      "Fichas con galería y consulta por WhatsApp por propiedad",
      "Pensado para cabañas y alquileres en Tafí, El Mollar y San Javier",
    ],
    cta: "Hola Nicolás, tengo un alquiler temporario y quiero una página así.",
  },
};

const titleOf = (name: string) =>
  name === "Alquiler temporario turistico Tucuman"
    ? "Alquiler temporario turístico"
    : name;

export default function Cases() {
  return (
    <section id="casos" className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <Eyebrow index="04" dark>
          Trabajos
        </Eyebrow>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.02em] md:text-5xl">
          Cosas reales, no promesas
        </h2>
        <div className="mt-12">
          {cases.map((c, i) => {
            const e = extra[c.name] ?? { badge: "", real: true, points: [], cta: "" };
            return (
              <article
                key={c.name}
                className="grid gap-6 border-t border-white/10 py-10 last:border-b lg:grid-cols-[60px_1.2fr_1fr_auto] lg:items-start"
              >
                <span className="font-mono text-sm font-medium text-white/35">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <span
                    className={`inline-block rounded-full border px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.18em] ${
                      e.real
                        ? "border-mint/40 text-mint"
                        : "border-amber-300/40 text-amber-300"
                    }`}
                  >
                    {e.badge}
                  </span>
                  <h3 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl">
                    {titleOf(c.name)}
                  </h3>
                  <p className="mt-2 max-w-md text-[15px] leading-relaxed text-white/55">
                    {c.description}
                  </p>
                </div>
                <ul className="space-y-2.5 text-sm leading-snug text-white/75">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5">
                      <span className="font-bold text-mint">✓</span>
                      {pt}
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink(e.cta)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whitespace-nowrap rounded-lg border border-white/25 px-5 py-3 text-center text-sm font-semibold text-white transition hover:border-white hover:bg-white hover:text-ink"
                >
                  Quiero algo así →
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
