const steps = [
  {
    n: "01",
    title: "Auditoría y propuesta clara",
    text: "Me contás tu negocio, te digo qué te conviene, cuánto sale y en cuánto tiempo. Presupuesto sin compromiso.",
  },
  {
    n: "02",
    title: "Construcción rápida",
    text: "Landing en días, tienda en semanas. Ves avances reales, no promesas.",
  },
  {
    n: "03",
    title: "Medición y acompañamiento",
    text: "Medimos consultas y ventas recuperadas, mejoramos y te doy 30 días de soporte incluidos.",
  },
];

export default function Process() {
  return (
    <section className="border-y border-white/10 bg-ink-2">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.02em] text-white md:text-5xl">
          Cómo vamos a trabajar juntos.
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-px border border-white/10 bg-white/10 md:grid-cols-3">
          {steps.map((s) => (
            <article key={s.n} className="bg-ink-2 p-8">
              <span className="font-mono text-sm font-medium text-gold">
                {s.n}
              </span>
              <h3 className="mt-4 text-xl font-bold tracking-tight text-white">
                {s.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/60">
                {s.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
