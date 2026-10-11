const steps = [
  {
    n: "1",
    title: "Auditoría y propuesta clara",
    text: "Me contás tu negocio, te digo qué te conviene, cuánto sale y en cuánto tiempo. Presupuesto sin compromiso.",
  },
  {
    n: "2",
    title: "Construcción rápida",
    text: "Landing en días, tienda en semanas. Ves avances reales, no promesas.",
  },
  {
    n: "3",
    title: "Medición y acompañamiento",
    text: "Medimos consultas y ventas recuperadas, mejoramos y te doy 30 días de soporte incluidos.",
  },
];

export default function Process() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-xs font-bold uppercase tracking-widest text-emerald-700">
          Cómo trabajo
        </p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-neutral-900 md:text-4xl">
          Simple, en 3 pasos
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {steps.map((s) => (
            <article
              key={s.n}
              className="rounded-2xl bg-neutral-950 p-6 text-white"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-lg font-black">
                {s.n}
              </span>
              <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-neutral-300">{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
