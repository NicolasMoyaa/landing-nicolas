import Eyebrow from "./Eyebrow";

const pains = [
  {
    title: "No existís en internet",
    text: "Si el cliente te busca y no te encuentra, le compra a la competencia. Así de simple.",
  },
  {
    title: "Perdés horas en WhatsApp",
    text: "Responder “hola, qué tal” todo el día te cuesta tiempo que podrías usar en vender y producir.",
  },
  {
    title: "Tu catálogo es un PDF viejo",
    text: "Fotos sueltas, precios desactualizados y cero forma de pedir. El cliente se cansa y se va.",
  },
  {
    title: "Dependés del boca en boca",
    text: "Funciona… hasta que no funciona. Un activo digital vende por vos las 24 horas.",
  },
];

export default function Problem() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <Eyebrow index="01">El problema</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.02em] text-ink md:text-5xl">
          ¿Te suena familiar?
        </h2>
        <div className="mt-12">
          {pains.map((p, i) => (
            <article
              key={p.title}
              className="grid gap-2 border-t border-ink/10 py-7 last:border-b md:grid-cols-[72px_1fr_1.4fr] md:gap-6"
            >
              <span className="font-mono text-sm font-medium text-ink/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-bold tracking-tight text-ink">
                {p.title}
              </h3>
              <p className="leading-relaxed text-ink/60">{p.text}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 text-lg font-semibold text-ink">
          Todo esto tiene solución — y más barata de lo que creés.{" "}
          <a href="#contacto" className="underline underline-offset-4 hover:text-brand-deep">
            Pedila acá →
          </a>
        </p>
      </div>
    </section>
  );
}
