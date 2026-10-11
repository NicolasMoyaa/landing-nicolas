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
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:h-20 md:px-6">
        <a href="#inicio" className="flex items-baseline gap-2.5">
          <span className="text-[17px] font-bold tracking-tight text-white">
            Nicolás Moya
          </span>
          <span className="hidden font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-white/60 sm:inline">
            Webs que venden — Tucumán
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-white/70 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2.5">
          <a
            href={WA_GENERAL()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-ink transition hover:bg-mint"
          >
            Pedir presupuesto
          </a>
          <details className="relative md:hidden">
            <summary className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-white/25 text-white">
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden>
                <path d="M1 1h16M1 7h16M1 13h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </summary>
            <nav className="absolute right-0 mt-2 flex w-48 flex-col rounded-xl border border-white/10 bg-ink-2 p-2 shadow-2xl">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
