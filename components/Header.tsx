import { WHATSAPP_NUMBER, waLink } from "../lib/site";

export const WA_GENERAL = () =>
  waLink("Hola Nicolás, quiero un presupuesto sin compromiso para mi negocio.");

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#inicio" className="flex flex-col leading-tight">
          <span className="text-lg font-extrabold tracking-tight text-neutral-900">
            Nicolás Moya
          </span>
          <span className="text-xs font-medium text-emerald-700">
            Webs que venden en Tucumán
          </span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-neutral-600 md:flex">
          <a href="#servicios" className="hover:text-neutral-900">Servicios</a>
          <a href="#casos" className="hover:text-neutral-900">Trabajos</a>
          <a href="#precios" className="hover:text-neutral-900">Precios</a>
          <a href="#faq" className="hover:text-neutral-900">Preguntas</a>
        </nav>
        <a
          href={WA_GENERAL()}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-bold text-white shadow-md transition hover:bg-emerald-600"
        >
          Pedir presupuesto
        </a>
      </div>
      <span className="hidden">{WHATSAPP_NUMBER}</span>
    </header>
  );
}
