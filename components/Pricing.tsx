import { services, waLink } from "../lib/site";

const times: Record<string, string> = {
  "Landing Page": "Entrega en días",
  "Sitio con gestion y catalogo": "Entrega en 1–2 semanas",
  "E-commerce Premium": "Entrega en 3–6 semanas",
};

export default function Pricing() {
  return (
    <section id="precios" className="bg-ink">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.02em] text-white md:text-5xl">
          Precios de frente, sin letra chica.
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-white/60">
          El precio final depende del alcance y se define en el presupuesto sin
          compromiso. Sin sorpresas, sin letra chica.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.name}
              className="flex flex-col rounded-xl border border-white/10 bg-white/[0.03] p-8"
            >
              <h3 className="text-lg font-bold tracking-tight text-white">
                {s.name}
              </h3>
              <p className="mt-4 text-4xl font-extrabold tracking-tight text-white">
                <span className="block font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-white/45">
                  Desde
                </span>
                {s.priceFrom}
              </p>
              <p className="mt-3 text-sm font-medium text-white/50">
                {times[s.name] ?? ""}
              </p>
              <a
                href={waLink(`Hola Nicolás, quiero presupuesto del servicio ${s.name} (desde ${s.priceFrom}).`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine btn-shine-fast mt-7 block rounded-lg bg-brand px-5 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-brand-deep"
              >
                Pedir presupuesto
              </a>
            </article>
          ))}
        </div>
        <p className="mt-8 border-t border-white/10 pt-6 text-sm leading-relaxed text-white/50">
          Forma de pago: 50% al confirmar y 50% al entregar. Soporte de 30 días
          incluido en todos los planes.
        </p>
      </div>
    </section>
  );
}
