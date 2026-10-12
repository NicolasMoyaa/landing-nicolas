"use client";

import { waLink } from "../lib/site";
import { strings, useLang } from "../lib/i18n";

export default function Hero() {
  const { lang } = useLang();
  const t = strings[lang].hero;

  return (
    <section id="inicio" className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ink text-white">
      <img
        src="/hero-oficina2-poster.jpg"
        alt=""
        aria-hidden
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover md:hidden"
      />
      <video
        aria-hidden
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero-oficina2-poster.jpg"
        className="absolute inset-0 hidden h-full w-full object-cover md:block"
      >
        <source src="/hero-oficina2.mp4" type="video/mp4" />
      </video>
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/15"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent"
      />
      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 pb-12 pt-32 md:px-6 md:pt-36">
        <h1 className="mt-6 max-w-4xl text-[42px] font-semibold leading-[1.04] tracking-[-0.03em] md:text-7xl">
          {t.h1a} <span className="text-gold">{t.h1b}</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
          {t.sub}
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
          <a
            href={waLink(t.wa)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine btn-shine-fast rounded-lg bg-gold px-8 py-4 text-center text-base font-semibold text-ink transition hover:bg-white"
          >
            {t.cta}
          </a>
        </div>
      </div>
      <div className="relative border-t border-white/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-6 md:flex-row md:items-center md:justify-between md:px-6">
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-white/55">
            {t.strip}
          </p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-4">
            {t.trust.map((x) => (
              <div key={x.metric}>
                <p className="text-sm font-bold">{x.metric}</p>
                <p className="text-xs text-white/50">{x.label}</p>
              </div>
            ))}
          </div>
          <a
            href="/#proyectos"
            className="rounded-lg border border-white/30 px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:border-gold hover:text-gold"
          >
            {t.seeWork}
          </a>
        </div>
      </div>
    </section>
  );
}
