import Eyebrow from "./Eyebrow";

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
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <Eyebrow index="02">Cómo trabajo</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.02em] text-ink md:text-5xl">
          Simple, en 3 pasos
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-px border border-ink/10 bg-ink/10 md:grid-cols-3">
          {steps.map((s) => (
            <article key={s.n} className="bg-white p-8">
              <span className="font-mono text-sm font-medium text-brand">
                {s.n}
              </span>
              <h3 className="mt-4 text-xl font-bold tracking-tight text-ink">
                {s.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/60">
                {s.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
