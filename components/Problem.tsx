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
    <section className="bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-xs font-bold uppercase tracking-widest text-emerald-700">
          El problema
        </p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-neutral-900 md:text-4xl">
          ¿Te suena familiar?
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {pains.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-bold text-neutral-900">✕ {p.title}</h3>
              <p className="mt-2 text-neutral-600">{p.text}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-lg font-semibold text-neutral-800">
          Todo esto tiene solución — y más barata de lo que creés.
        </p>
      </div>
    </section>
  );
}
