import { waLink } from "../lib/site";

const steps = [
  {
    paso: "Paso 1",
    title: "Charlamos de tu negocio",
    text: "Me contás qué vendés, cómo trabajás hoy y qué te frena. Te digo qué te conviene, cuánto sale y en cuánto tiempo lo tenés.",
    meta: "Sin compromiso",
  },
  {
    paso: "Paso 2",
    title: "Lo construyo a la vista",
    text: "Landing en días, tienda en semanas. Ves avances reales mientras lo armo, no renders ni promesas.",
    meta: "Avances visibles",
  },
  {
    paso: "Paso 3",
    title: "Medimos y te acompaño",
    text: "Miramos consultas y ventas recuperadas, ajustamos lo necesario y tenés 30 días de soporte incluidos.",
    meta: "Soporte 30 días",
  },
];

export default function Process() {
  return (
    <section className="border-y border-white/10 bg-ink-2">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.02em] text-white md:text-5xl">
          Cómo vamos a trabajar juntos.
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-white/60">
          Sin reuniones eternas ni tecnicismos: así avanza tu proyecto, de la
          primera charla a la entrega.
        </p>
        <ol className="mt-12 border-t border-white/10">
          {steps.map((s) => (
            <li
              key={s.paso}
              className="grid items-baseline gap-2 border-b border-white/10 py-8 md:grid-cols-[130px_1fr_1.3fr_auto] md:gap-6"
            >
              <span className="font-mono text-sm font-medium text-gold">
                {s.paso}
              </span>
              <h3 className="text-xl font-bold tracking-tight text-white md:text-2xl">
                {s.title}
              </h3>
              <p className="max-w-xl leading-relaxed text-white/60">
                {s.text}
              </p>
              <span className="w-fit rounded-full border border-gold/30 px-3.5 py-1.5 text-xs font-semibold text-gold">
                {s.meta}
              </span>
            </li>
          ))}
        </ol>
        <a
          href={waLink(
            "Hola Nicolás, quiero arrancar con el paso 1: charlar de mi negocio."
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shine btn-shine-fast mt-10 inline-block rounded-lg bg-white px-8 py-4 text-base font-semibold text-ink transition hover:bg-gold"
        >
          Empezar por el paso 1 →
        </a>
      </div>
    </section>
  );
}
