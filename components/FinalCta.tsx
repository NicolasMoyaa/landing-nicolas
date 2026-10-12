"use client";

import { services, waLink } from "../lib/site";
import { strings, useLang } from "../lib/i18n";
import { WA_DISPLAY } from "./Header";

export default function FinalCta() {
  const { lang } = useLang();
  const t = strings[lang];
  const names = t.services.names;
  const navHrefs = ["/#servicios", "/#proyectos", "/#precios", "/#faq"];

  return (
    <>
      <section id="contacto" className="bg-ink text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 md:px-6 md:py-28 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h2 className="text-4xl font-semibold tracking-[-0.03em] md:text-6xl">
              {t.contact.title}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/60">
              {t.contact.text}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink(t.contact.wa)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine btn-shine-fast rounded-lg bg-white px-8 py-4 text-center text-base font-semibold text-ink transition hover:bg-gold"
              >
                {t.contact.ctaWa}
              </a>
            <a
              href="/#proyectos"
                className="rounded-lg border border-white/30 px-8 py-4 text-center text-base font-semibold text-white transition hover:border-gold hover:text-gold"
              >
                {t.contact.ctaWork}
              </a>
            </div>
            <p className="mt-5 text-sm text-white/45">
              {t.contact.note}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/contacto-reunion.jpg"
              alt={t.contact.alt1}
              loading="lazy"
              className="mt-8 rounded-xl border border-white/10 object-cover"
            />
            <img
              src="/contacto-2.jpg"
              alt={t.contact.alt2}
              loading="lazy"
              className="rounded-xl border border-white/10 object-cover"
            />
          </div>
        </div>
      </section>
      <footer className="border-t border-white/10 bg-ink text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 md:px-6 lg:grid-cols-4">
          <div>
            <p className="text-base font-bold tracking-tight">Nicolás Moya</p>
            <p className="mt-2 text-sm leading-relaxed text-white/50">
              {t.footer.tagline}
            </p>
          </div>
          <nav className="flex flex-col gap-2.5 text-sm text-white/60">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
              {t.footer.sections}
            </span>
            {t.footer.links.map((label, i) => (
              <a key={navHrefs[i]} href={navHrefs[i]} className="w-fit transition hover:text-gold">{label}</a>
            ))}
          </nav>
          <nav className="flex flex-col gap-2.5 text-sm text-white/60">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
              {t.footer.services}
            </span>
            {services.map((s) => {
              const name = names[s.name] ?? s.name;
              return (
                <a
                  key={s.name}
                  href={waLink(t.services.waService(name, s.priceFrom))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit transition hover:text-gold"
                >
                  {name} — {t.services.from} {s.priceFrom}
                </a>
              );
            })}
          </nav>
          <div className="text-sm">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
              {t.footer.direct}
            </span>
            <p className="mt-2.5 font-semibold text-white">{WA_DISPLAY}</p>
            <a
              href={waLink(t.footer.waMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block font-semibold text-gold hover:underline hover:underline-offset-4"
            >
              {t.footer.waCta}
            </a>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-5 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between md:px-6">
            <p>© 2026 Nicolás Moya — San Miguel de Tucumán, Argentina</p>
            <p>{t.footer.bottom2}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
