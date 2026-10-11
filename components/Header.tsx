import { WHATSAPP_NUMBER, waLink } from "../lib/site";

export const WA_GENERAL = () =>
  waLink("Hola Nicolás, quiero un presupuesto sin compromiso para mi negocio.");

export const WA_DISPLAY =
  `+54 ${WHATSAPP_NUMBER.slice(2, 3)} ${WHATSAPP_NUMBER.slice(3, 6)} ` +
  `${WHATSAPP_NUMBER.slice(6, 9)}-${WHATSAPP_NUMBER.slice(9)}`;

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#casos", label: "Trabajos" },
  { href: "#precios", label: "Precios" },
  { href: "#faq", label: "Preguntas" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <a href="#inicio" className="flex items-baseline gap-2.5">
          <span className="text-[17px] font-bold tracking-tight text-ink">
            Nicolás Moya
          </span>
          <span className="hidden font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-ink/45 sm:inline">
            Webs que venden — Tucumán
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-ink/60 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={WA_GENERAL()}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-ink px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-deep"
        >
          Pedir presupuesto
        </a>
      </div>
    </header>
  );
}
