"use client";

import { services, waLink } from "../lib/site";
import { strings, useLang } from "../lib/i18n";

export default function Services() {
  const { lang } = useLang();
  const t = strings[lang].services;

  return (
    <section id="servicios" className="bg-ink">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.02em] text-white md:text-5xl">
          {t.title}
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {services.map((s) => {
            const name = t.names[s.name] ?? s.name;
            const d = t.detail[s.name] ?? { outcome: "", points: [] };
            return (
              <article
                key={s.name}
                className="flex flex-col rounded-xl border border-white/10 bg-white/[0.03] p-8"
              >
                <h3 className="text-xl font-bold tracking-tight text-white">
                  {name}
                </h3>
                <p className="mt-4 text-4xl font-extrabold tracking-tight text-white">
                  <span className="block font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-white/45">
                    {t.from}
                  </span>
                  {s.priceFrom}
                </p>
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
                <a
                  href={waLink(t.waService(name, s.priceFrom))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shine mt-7 block rounded-lg bg-gold px-5 py-3.5 text-center text-sm font-bold text-ink transition hover:brightness-110"
                >
                  {t.cta}
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
