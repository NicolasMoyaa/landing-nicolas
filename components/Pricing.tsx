import { services, waLink } from "../lib/site";

const times: Record<string, string> = {
  "Landing Page": "Entrega en días",
  "Sitio con gestion y catalogo": "Entrega en 1–2 semanas",
  "E-commerce Premium": "Entrega en 3–6 semanas",
};

export default function Pricing() {
  return (
    <section id="precios" className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-xs font-bold uppercase tracking-widest text-emerald-400">
          Precios
        </p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">
          Claros desde el primer mensaje
        </h2>
        <p className="mt-3 max-w-2xl text-neutral-300">
          El precio final depende del alcance y se define en el presupuesto sin
          compromiso. Sin sorpresas, sin letra chica.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.name}
              className="rounded-2xl border border-neutral-700 bg-neutral-900 p-6"
            >
              <h3 className="text-lg font-extrabold">{s.name}</h3>
              <p className="mt-2 text-3xl font-black text-emerald-400">
                Desde {s.priceFrom}
              </p>
              <p className="mt-2 text-sm text-neutral-400">
                {times[s.name] ?? ""}
              </p>
              <a
                href={waLink(`Hola Nicolás, quiero presupuesto del servicio ${s.name} (desde ${s.priceFrom}).`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block rounded-full bg-emerald-500 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-emerald-400"
              >
                Pedir presupuesto
              </a>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-neutral-400">
          Forma de pago: 50% al confirmar y 50% al entregar. Soporte de 30 días
          incluido en todos los planes.
        </p>
      </div>
    </section>
  );
}
