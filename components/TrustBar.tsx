const items = [
  { metric: "En producción", label: "Tienda online real, con clientes reales" },
  { metric: "CI + backups", label: "Despliegue profesional y datos a salvo" },
  { metric: "243 productos", label: "Catálogo real activo hoy" },
  { metric: "Trato directo", label: "Hablás conmigo, sin intermediarios" },
];

export default function TrustBar() {
  return (
    <section className="border-y border-white/10 bg-ink text-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid grid-cols-2 gap-px bg-white/10 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.metric} className="bg-ink px-6 py-7">
              <p className="text-lg font-bold tracking-tight">{it.metric}</p>
              <p className="mt-1 text-sm leading-snug text-white/50">{it.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
