const metrics = [
  { value: "243", label: "productos activos en tienda real" },
  { value: "201", label: "seguidores gestionados con CRM y ventas" },
  { value: "3,88%", label: "engagement real del negocio" },
];

export default function MetricBand() {
  return (
    <section className="border-y border-white/10 bg-ink-2">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.02em] text-white md:text-5xl">
          Lo que ya está funcionando.
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-10 border-t border-white/10 pt-10 sm:grid-cols-3">
          {metrics.map((m) => (
            <div key={m.label}>
              <p className="text-5xl font-extrabold tracking-tight text-gold md:text-6xl">
                {m.value}
              </p>
              <p className="mt-2 max-w-[220px] text-sm leading-snug text-white/55">
                {m.label}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-xs text-white/35">
          Métricas de producción 2026 — ImportExpress + Brinines.
        </p>
      </div>
    </section>
  );
}
