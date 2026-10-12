"use client";

import { services, waLink } from "../lib/site";
import { strings, useLang } from "../lib/i18n";

export default function Pricing() {
  const { lang } = useLang();
  const t = strings[lang].pricing;
  const svc = strings[lang].services;

  return (
    <section id="precios" className="bg-ink">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.02em] text-white md:text-5xl">
          {t.title}
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-white/60">
          {t.sub}
        </p>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {services.map((s) => {
            const name = svc.names[s.name] ?? s.name;
            const d = svc.detail[s.name] ?? { outcome: "", points: [] };
            return (
              <article
                key={s.name}
                className="flex flex-col rounded-xl border border-white/10 bg-white/[0.03] p-8"
              >
                <h3 className="text-lg font-bold tracking-tight text-white">
                  {name}
                </h3>
                <p className="mt-4 font-medium leading-snug text-white/85">
                  {d.outcome}
                </p>
                <ul className="mt-5 flex-1 divide-y divide-white/10 border-y border-white/10 text-sm text-white/65">
                  {d.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5 py-2.5">
                      <span className="font-bold text-gold">✓</span>
                      {pt}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-sm font-medium text-white/50">
                  {t.times[s.name] ?? ""}
                </p>
                <a
                  href={waLink(t.waService(name))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shine btn-shine-fast mt-7 block rounded-lg bg-brand px-5 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-brand-deep"
                >
                  {t.cta}
                </a>
              </article>
            );
          })}
        </div>
        <p className="mt-8 border-t border-white/10 pt-6 text-sm leading-relaxed text-white/50">
          {t.note}
        </p>
      </div>
    </section>
  );
}
