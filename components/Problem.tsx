"use client";

import { strings, useLang } from "../lib/i18n";

export default function Problem() {
  const { lang } = useLang();
  const t = strings[lang].problem;

  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.02em] text-white md:text-5xl">
          {t.title}
        </h2>
        <div className="mt-12">
          {t.pains.map((p, i) => (
            <article
              key={p.title}
              className="grid gap-2 border-t border-white/10 py-7 last:border-b md:grid-cols-[72px_1fr_1.4fr] md:gap-6"
            >
              <span className="font-mono text-sm font-medium text-white/35">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-bold tracking-tight text-white">
                {p.title}
              </h3>
              <p className="leading-relaxed text-white/60">{p.text}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 text-lg font-semibold text-white">
          {t.closing}{" "}
          <a href="/#contacto" className="text-gold underline underline-offset-4 hover:brightness-110">
            {t.closingLink}
          </a>
        </p>
      </div>
    </section>
  );
}
