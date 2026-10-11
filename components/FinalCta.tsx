import { waLink } from "../lib/site";
import { WA_DISPLAY } from "./Header";

export default function FinalCta() {
  return (
    <>
      <section id="contacto" className="bg-ink text-white">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center md:py-32">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-white/50">
            07 — Contacto
          </p>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] md:text-6xl">
            ¿Listo para vender todos los días?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/60">
            Escribime ahora por WhatsApp. Te respondo yo personalmente, sin
            bots ni formularios eternos.
          </p>
          <a
            href={waLink(
              "Hola Nicolás, estoy listo para llevar mi negocio al siguiente nivel. ¿Hablamos?"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-block rounded-lg bg-white px-10 py-4 text-lg font-semibold text-ink transition hover:bg-mint"
          >
            Hablar por WhatsApp ahora
          </a>
          <p className="mt-5 text-sm text-white/45">
            Presupuesto sin compromiso — respuesta directa
          </p>
        </div>
      </section>
      <footer className="border-t border-white/10 bg-ink text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3 md:px-6">
          <div>
            <p className="text-base font-bold tracking-tight">Nicolás Moya</p>
            <p className="mt-2 text-sm leading-relaxed text-white/50">
              Sitios web que venden para negocios de Tucumán, Argentina.
            </p>
          </div>
          <nav className="flex flex-col gap-2.5 text-sm font-medium text-white/60">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
              Secciones
            </span>
            <a href="#servicios" className="w-fit transition hover:text-white">Servicios</a>
            <a href="#casos" className="w-fit transition hover:text-white">Trabajos</a>
            <a href="#precios" className="w-fit transition hover:text-white">Precios</a>
            <a href="#faq" className="w-fit transition hover:text-white">Preguntas</a>
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
            <p>Diseño y código: Next.js — sin plantillas genéricas</p>
          </div>
        </div>
      </footer>
    </>
  );
}
