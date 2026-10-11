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
    <section id="servicios" className="bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-xs font-bold uppercase tracking-widest text-emerald-700">
          Servicios
        </p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-neutral-900 md:text-4xl">
          Tres soluciones, un objetivo: vender más
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {services.map((s) => {
            const d = detail[s.name] ?? { outcome: "", points: [] };
            return (
              <article
                key={s.name}
                className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-extrabold text-neutral-900">{s.name}</h3>
                <p className="mt-1 text-sm font-semibold text-emerald-700">
                  Desde {s.priceFrom}
                </p>
                <p className="mt-3 font-medium text-neutral-800">{d.outcome}</p>
                <ul className="mt-4 flex-1 space-y-2 text-sm text-neutral-600">
                  {d.points.map((pt) => (
                    <li key={pt}>✓ {pt}</li>
                  ))}
                </ul>
                <a
                  href={waLink(`Hola Nicolás, me interesa el servicio ${s.name} (desde ${s.priceFrom}). ¿Me pasás presupuesto?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 rounded-full bg-neutral-950 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-emerald-600"
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
