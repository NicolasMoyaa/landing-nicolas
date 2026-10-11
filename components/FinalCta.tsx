import { services, waLink } from "../lib/site";
import { WA_DISPLAY } from "./Header";

export default function FinalCta() {
  return (
    <>
      <section id="contacto" className="bg-ink text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-20 md:px-6 md:py-28 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-white/50">
              07 — Contacto
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] md:text-6xl">
              ¿Listo para vender todos los días?
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/60">
              Escribime ahora por WhatsApp. Te respondo yo personalmente, sin
              bots ni formularios eternos.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <a
              href={waLink(
                "Hola Nicolás, estoy listo para llevar mi negocio al siguiente nivel. ¿Hablamos?"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-8 py-4 text-center text-base font-semibold text-ink transition hover:bg-mint"
            >
              Hablar por WhatsApp →
            </a>
            <a
              href="#casos"
              className="rounded-lg border border-white/30 px-8 py-4 text-center text-base font-semibold text-white transition hover:border-white hover:bg-white hover:text-ink"
            >
              Ver trabajos
            </a>
          </div>
        </div>
        <p className="mx-auto max-w-6xl px-4 pb-10 text-sm text-white/45 md:px-6">
          Presupuesto sin compromiso — respuesta directa
        </p>
      </section>
      <footer className="border-t border-white/10 bg-ink text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 md:px-6 lg:grid-cols-4">
          <div>
            <p className="text-base font-bold tracking-tight">Nicolás Moya</p>
            <p className="mt-2 text-sm leading-relaxed text-white/50">
              Sitios web que venden para negocios de Tucumán, Argentina.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 font-mono text-[11px] text-white/60">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-mint" />
              Web en producción
            </p>
          </div>
          <nav className="flex flex-col gap-2.5 text-sm text-white/60">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
              Secciones
            </span>
            <a href="#servicios" className="w-fit transition hover:text-white">Servicios</a>
            <a href="#casos" className="w-fit transition hover:text-white">Trabajos</a>
            <a href="#precios" className="w-fit transition hover:text-white">Precios</a>
            <a href="#faq" className="w-fit transition hover:text-white">Preguntas</a>
          </nav>
          <nav className="flex flex-col gap-2.5 text-sm text-white/60">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
              Servicios
            </span>
            {services.map((s) => (
              <a
                key={s.name}
                href={waLink(`Hola Nicolás, me interesa el servicio ${s.name} (desde ${s.priceFrom}). ¿Me pasás presupuesto?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit transition hover:text-white"
              >
                {s.name} — desde {s.priceFrom}
              </a>
            ))}
          </nav>
          <div className="text-sm">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
              Contacto directo
            </span>
            <p className="mt-2.5 font-semibold text-white">{WA_DISPLAY}</p>
            <a
              href={waLink("Hola Nicolás, quiero un presupuesto sin compromiso para mi negocio.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block font-semibold text-mint hover:underline hover:underline-offset-4"
            >
              Escribime por WhatsApp →
            </a>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-5 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between md:px-6">
            <p>© 2026 Nicolás Moya — San Miguel de Tucumán, Argentina</p>
            <p>Diseño y código: Next.js — Foto: Pexels</p>
          </div>
        </div>
      </footer>
    </>
  );
}
