import { services, waLink } from "../lib/site";

const detail: Record<string, { outcome: string; points: string[] }> = {
  "Landing Page": {
    outcome: "Convierte visitas en mensajes de WhatsApp.",
    points: ["Diseño rápido y moderno", "Botón directo a tu WhatsApp", "Lista para vender desde el día 1"],
  },
  "Sitio con gestion y catalogo": {
    outcome: "Tu catálogo siempre actualizado, sin PDFs viejos.",
    points: ["Menúes y catálogos digitales con QR", "Panel para manejar stock y precios", "Pedidos ordenados por WhatsApp"],
  },
  "E-commerce Premium": {
    outcome: "Tu local abierto 24/7: vende mientras descansás.",
    points: ["Tienda completa con pagos", "Panel de administración y reportes", "Backups automáticos y despliegue profesional"],
  },
};

export default function Services() {
  return (
    <section id="servicios" className="bg-ink">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.02em] text-white md:text-5xl">
          Elegí lo que tu negocio necesita hoy.
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {services.map((s, i) => {
            const d = detail[s.name] ?? { outcome: "", points: [] };
            return (
              <article
                key={s.name}
                className="flex flex-col rounded-xl border border-white/10 bg-white/[0.03] p-8"
              >
                <span className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-white/40">
                  S.{String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-xl font-bold tracking-tight text-white">
                  {s.name}
                </h3>
                <p className="mt-4 text-4xl font-extrabold tracking-tight text-white">
                  <span className="block font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-white/45">
                    Desde
                  </span>
                  {s.priceFrom}
                </p>
                <p className="mt-4 font-medium leading-snug text-white/85">
                  {d.outcome}
                </p>
                <ul className="mt-5 flex-1 divide-y divide-white/10 border-y border-white/10 text-sm text-white/65">
                  {d.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5 py-2.5">
                      <span className="font-bold text-gold">✓</span>
                      {pt}
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink(`Hola Nicolás, me interesa el servicio ${s.name} (desde ${s.priceFrom}). ¿Me pasás presupuesto?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shine mt-7 block rounded-lg bg-gold px-5 py-3.5 text-center text-sm font-bold text-ink transition hover:brightness-110"
                >
                  Consultar este servicio
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
