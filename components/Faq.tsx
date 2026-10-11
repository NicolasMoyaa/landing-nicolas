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
    <section id="faq" className="border-y border-white/10 bg-ink-2">
      <div className="mx-auto max-w-3xl px-4 py-20 md:py-28">
        <h2 className="text-3xl font-semibold tracking-[-0.02em] text-white md:text-5xl">
          Sacate las dudas.
        </h2>
        <div className="mt-10 border-b border-white/10">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group border-t border-white/10 py-5"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-semibold tracking-tight text-white">
                {f.q}
                <span className="faq-plus font-mono text-xl font-medium text-gold">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl leading-relaxed text-white/60">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
