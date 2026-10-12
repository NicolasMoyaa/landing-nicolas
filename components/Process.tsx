"use client";

import Reveal from "./Reveal";
import { waLink } from "../lib/site";
import { strings, useLang } from "../lib/i18n";

export default function Process() {
  const { lang } = useLang();
  const t = strings[lang].process;

  return (
    <section className="border-y border-white/10 bg-ink-2">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.02em] text-white md:text-5xl">
          {t.title}
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-white/60">
          {t.sub}
        </p>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {t.steps.map((s, i) => (
            <Reveal key={s.paso} delay={i * 120}>
              <article className="group h-full rounded-2xl border border-white/10 bg-ink p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-[0_20px_50px_-20px_rgba(255,232,31,0.35)]">
                <span className="font-mono text-sm font-medium text-gold">
                  {s.paso}
                </span>
                <h3 className="mt-3 text-xl font-bold tracking-tight text-white md:text-2xl">
                  {s.title}
                </h3>
                <p className="mt-3 leading-relaxed text-white/60">
                  {s.text}
                </p>
                <span className="mt-5 inline-block rounded-full border border-gold/30 px-3.5 py-1.5 text-xs font-semibold text-gold transition group-hover:border-gold group-hover:bg-gold/10">
                  {s.meta}
                </span>
              </article>
            </Reveal>
          ))}
        </div>
        <a
          href={waLink(t.wa)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shine btn-shine-fast mt-10 inline-block rounded-lg bg-white px-8 py-4 text-base font-semibold text-ink transition hover:bg-gold"
        >
          {t.cta}
        </a>
      </div>
    </section>
  );
}
