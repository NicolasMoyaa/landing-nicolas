"use client";

import { strings, useLang } from "../lib/i18n";

export default function Faq() {
  const { lang } = useLang();
  const t = strings[lang].faq;

  return (
    <section id="faq" className="border-y border-white/10 bg-ink-2">
      <div className="mx-auto max-w-3xl px-4 py-20 md:py-28">
        <h2 className="text-3xl font-semibold tracking-[-0.02em] text-white md:text-5xl">
          {t.title}
        </h2>
        <div className="mt-10 border-b border-white/10">
          {t.items.map((f) => (
            <details
              key={f.q}
              className="group border-t border-white/10 py-5"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-semibold tracking-tight text-white">
                {f.q}
                <span className="faq-plus font-mono text-xl font-medium text-gold">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl leading-relaxed text-white/60">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
