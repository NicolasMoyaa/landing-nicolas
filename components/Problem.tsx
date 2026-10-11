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
    <section className="bg-ink">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.02em] text-white md:text-5xl">
          Esto le pasa a casi todos los negocios.
        </h2>
        <div className="mt-12">
          {pains.map((p, i) => (
            <article
              key={p.title}
              className="grid gap-2 border-t border-white/10 py-7 last:border-b md:grid-cols-[72px_1fr_1.4fr] md:gap-6"
            >
              <span className="font-mono text-sm font-medium text-white/35">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-bold tracking-tight text-white">
                {p.title}
              </h3>
              <p className="leading-relaxed text-white/60">{p.text}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 text-lg font-semibold text-white">
          Todo esto tiene solución — y más barata de lo que creés.{" "}
          <a href="#contacto" className="text-gold underline underline-offset-4 hover:brightness-110">
            Pedila acá →
          </a>
        </p>
      </div>
    </section>
  );
}
