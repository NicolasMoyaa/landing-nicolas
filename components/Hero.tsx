import { waLink } from "../lib/site";

export default function Hero() {
  return (
    <section id="inicio" className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <p className="mb-4 inline-block rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-emerald-300">
          Diseño web comercial — Tucumán, Argentina
        </p>
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
          Tu negocio vendiendo todos los días,{" "}
          <span className="text-emerald-400">incluso cuando vos descansás.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-neutral-300">
          Sitios rápidos, catálogos digitales y pedidos por WhatsApp para
          comercios y servicios de Tucumán. Sin vueltas: el cliente entra,
          entiende y te escribe.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={waLink(
              "Hola Nicolás, quiero un presupuesto sin compromiso para mi negocio."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-emerald-500 px-8 py-4 text-center text-base font-bold text-white shadow-lg transition hover:bg-emerald-400"
          >
            Pedir presupuesto por WhatsApp
          </a>
          <a
            href="#casos"
            className="rounded-full border border-neutral-600 px-8 py-4 text-center text-base font-bold text-neutral-200 transition hover:border-neutral-400 hover:text-white"
          >
            Ver trabajos reales
          </a>
        </div>
        <p className="mt-6 text-sm text-neutral-400">
          ● E-commerce real en producción &nbsp;● CRM real con ventas
          &nbsp;● Te respondo yo, sin bots
        </p>
      </div>
    </section>
  );
}
