"use client";

import { WHATSAPP_NUMBER, waLink } from "../lib/site";
import { LanguageToggle, strings, useLang } from "../lib/i18n";

export const WA_GENERAL = () =>
  waLink("Hola Nicolás, quiero un presupuesto sin compromiso para mi negocio.");

export const WA_DISPLAY =
  `+54 ${WHATSAPP_NUMBER.slice(2, 3)} ${WHATSAPP_NUMBER.slice(3, 6)} ` +
  `${WHATSAPP_NUMBER.slice(6, 9)}-${WHATSAPP_NUMBER.slice(9)}`;

export default function Header() {
  const { lang } = useLang();
  const t = strings[lang];
  const links = t.nav.links.map((label, i) => ({
    href: t.nav.hrefs[i],
    label,
  }));

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 md:top-5 md:px-6">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-ink/80 px-4 shadow-2xl backdrop-blur-md md:h-16 md:px-5">
        <a href="/" className="flex flex-col leading-none">
          <span className="whitespace-nowrap text-[17px] font-bold leading-tight tracking-tight text-white">
            Nicolás Moya<span className="text-gold">.</span>
          </span>
          <span className="hidden bg-gradient-to-t from-gold/55 via-gold to-white bg-clip-text text-center font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-transparent sm:inline">
            {t.nav.tag}
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-white/65 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-gold">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2.5">
          <LanguageToggle />
          <a
            href={waLink(t.waGeneral)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-white px-3 py-2.5 text-sm font-semibold text-ink transition hover:bg-gold sm:px-4"
          >
            <span className="sm:hidden">{t.nav.quoteShort}</span>
            <span className="hidden sm:inline">{t.nav.quote}</span>
          </a>
          <details className="relative lg:hidden">
            <summary className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-white/20 text-white">
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden>
                <path d="M1 1h16M1 7h16M1 13h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </summary>
            <nav className="absolute right-0 mt-2 flex w-48 flex-col rounded-xl border border-white/10 bg-ink-2 p-2 shadow-2xl">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-gold"
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
