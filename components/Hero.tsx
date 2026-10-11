import { waLink } from "../lib/site";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-ink text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(74,222,128,0.10),transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(70%_60%_at_50%_20%,black,transparent)]"
      />
      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-20 md:px-6 md:pb-24 md:pt-28">
        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-white/55">
          <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-mint align-middle" />
          E-commerce real en producción — Tucumán, Argentina
        </p>
        <h1 className="mt-6 max-w-4xl text-[42px] font-semibold leading-[1.04] tracking-[-0.03em] md:text-7xl">
          Tu negocio vendiendo todos los días,{" "}
          <span className="text-mint">incluso cuando vos descansás.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65 md:text-xl">
          Sitios rápidos, catálogos digitales y pedidos por WhatsApp para
          comercios y servicios de Tucumán. Sin vueltas: el cliente entra,
          entiende y te escribe.
        </p>
        <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href={waLink(
              "Hola Nicolás, quiero un presupuesto sin compromiso para mi negocio."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-white px-8 py-4 text-center text-base font-semibold text-ink transition hover:bg-mint"
          >
            Pedir presupuesto por WhatsApp
          </a>
          <a
            href="#casos"
            className="px-2 py-4 text-center text-base font-semibold text-white/80 transition hover:text-white sm:text-left"
          >
            Ver trabajos reales →
          </a>
        </div>
        <p className="mt-5 text-sm text-white/45">
          Respuesta directa — sin bots ni formularios eternos.
        </p>
      </div>
    </section>
  );
}
