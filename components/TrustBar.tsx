const items = [
  { metric: "En producción", label: "Tienda online real, con clientes reales" },
  { metric: "CI + backups", label: "Despliegue profesional y datos a salvo" },
  { metric: "WhatsApp directo", label: "Del clic al mensaje, sin fricción" },
];

export default function TrustBar() {
  return (
    <section className="border-b border-neutral-200 bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 py-8 sm:grid-cols-3">
        {items.map((it) => (
          <div key={it.metric} className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-lg font-black text-emerald-700">
              ✓
            </span>
            <div>
              <p className="font-extrabold text-neutral-900">{it.metric}</p>
              <p className="text-sm text-neutral-500">{it.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
