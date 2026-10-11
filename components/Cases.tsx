import { cases, waLink } from "../lib/site";

const extra: Record<string, { badge: string; real: boolean; points: string[]; cta: string }> = {
  ImportExpress: {
    badge: "CLIENTE REAL — EN PRODUCCIÓN",
    real: true,
    points: [
      "Tienda online funcionando con clientes reales",
      "Catálogo, pedidos y panel de administración",
      "Calidad profesional: tests automáticos y copias de seguridad",
    ],
    cta: "Hola Nicolás, quiero algo como ImportExpress para mi negocio.",
  },
  "Brinines AI": {
    badge: "NEGOCIO REAL — VENTAS REALES",
    real: true,
    points: [
      "Sistema que ordena ventas por Instagram y WhatsApp",
      "CRM con clientes, pedidos y automatizaciones",
      "201 seguidores, 5 productos, venta directa sin intermediarios",
    ],
    cta: "Hola Nicolás, quiero un sistema como Brinines AI para mis ventas.",
  },
  "Alquiler temporario turistico Tucuman": {
    badge: "DEMO CONCEPTUAL",
    real: false,
    points: [
      "Buscador de propiedades que sí responde",
      "Fichas con galería y consulta por WhatsApp por propiedad",
      "Pensado para cabañas y alquileres en Tafí, El Mollar y San Javier",
    ],
    cta: "Hola Nicolás, tengo un alquiler temporario y quiero una página así.",
  },
};

export default function Cases() {
  return (
    <section id="casos" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-xs font-bold uppercase tracking-widest text-emerald-700">
          Trabajos
        </p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-neutral-900 md:text-4xl">
          Cosas reales, no promesas
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {cases.map((c) => {
            const e = extra[c.name] ?? { badge: "", real: true, points: [], cta: "" };
            return (
              <article
                key={c.name}
                className="flex flex-col rounded-2xl border border-neutral-200 bg-neutral-50 p-6"
              >
                <span
                  className={`inline-block w-fit rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-wider ${
                    e.real
                      ? "bg-emerald-500 text-white"
                      : "bg-amber-400 text-neutral-900"
                  }`}
                >
                  {e.badge}
                </span>
                <h3 className="mt-3 text-xl font-extrabold text-neutral-900">
                  {c.name === "Alquiler temporario turistico Tucuman"
                    ? "Alquiler temporario turístico"
                    : c.name}
                </h3>
                <p className="mt-1 text-sm text-neutral-600">{c.description}</p>
                <ul className="mt-4 flex-1 space-y-2 text-sm text-neutral-700">
                  {e.points.map((pt) => (
                    <li key={pt}>✓ {pt}</li>
                  ))}
                </ul>
                <a
                  href={waLink(e.cta)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 rounded-full border-2 border-neutral-900 px-5 py-2.5 text-center text-sm font-bold text-neutral-900 transition hover:bg-neutral-900 hover:text-white"
                >
                  Quiero algo así
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
