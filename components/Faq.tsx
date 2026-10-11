const faqs = [
  {
    q: "¿Cuánto tarda mi página?",
    a: "Una landing en días, un sitio con catálogo en 1–2 semanas y una tienda completa en 3–6 semanas. Te doy fecha concreta en el presupuesto.",
  },
  {
    q: "¿Cómo se paga?",
    a: "50% al confirmar el trabajo y 50% al entregar. Precios en USD al equivalente del día, sin sorpresas.",
  },
  {
    q: "¿Qué necesitás de mi parte?",
    a: "Lo básico: nombre del negocio, fotos (o las armamos juntos), precios y tu WhatsApp. Del resto me encargo yo.",
  },
  {
    q: "¿Y si ya tengo una página vieja?",
    a: "La audito gratis: te digo qué sirve, qué frena ventas y cuánto sale arreglarla o hacerla de nuevo. Sin compromiso.",
  },
  {
    q: "¿Hay soporte después de entregar?",
    a: "Sí: 30 días de soporte incluidos para ajustes y dudas. Y mantenimiento mensual opcional si querés seguir mejorando.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <p className="text-xs font-bold uppercase tracking-widest text-emerald-700">
          Preguntas frecuentes
        </p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-neutral-900 md:text-4xl">
          Sacate las dudas
        </h2>
        <div className="mt-8 space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-4"
            >
              <summary className="cursor-pointer font-bold text-neutral-900">
                {f.q}
              </summary>
              <p className="mt-2 text-neutral-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
