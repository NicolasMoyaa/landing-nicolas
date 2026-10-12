"use client";

import { useEffect, useRef, useState } from "react";
import { strings, useLang } from "../lib/i18n";

const values = [
  { value: 300, decimals: 0, suffix: "", prefix: "+" },
  { value: 201, decimals: 0, suffix: "", prefix: "" },
  { value: 3.88, decimals: 2, suffix: "%", prefix: "" },
];

function CountUp({
  value,
  decimals,
  suffix,
  sep,
  prefix,
}: {
  value: number;
  decimals: number;
  suffix: string;
  sep: string;
  prefix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) {
      setN(value);
      return;
    }
    let raf = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const dur = 1400;
        const tick = (t: number) => {
          const p = Math.min((t - t0) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(value * eased);
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  const text =
    decimals > 0
      ? n.toFixed(decimals).replace(".", sep) + suffix
      : Math.round(n).toString() + suffix;

  return <span ref={ref}>{prefix}{text}</span>;
}

export default function MetricBand() {
  const { lang } = useLang();
  const t = strings[lang].metrics;

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-ink">
      <video
        aria-hidden
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="/hero-noche-poster.jpg"
        className="absolute inset-0 hidden h-full w-full object-cover opacity-25 md:block"
      >
        <source src="/hero-noche.mp4" type="video/mp4" />
      </video>
      <div aria-hidden className="absolute inset-0 bg-ink/70" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.02em] text-white md:text-5xl">
          {t.title}
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-10 border-t border-white/10 pt-10 sm:grid-cols-3">
          {values.map((m, i) => (
            <div key={t.items[i]}>
              <p className="text-5xl font-extrabold tracking-tight text-gold md:text-6xl">
                <CountUp
                  value={m.value}
                  decimals={m.decimals}
                  suffix={m.suffix}
                  sep={t.decimalSep}
                  prefix={m.prefix}
                />
              </p>
              <p className="mt-2 max-w-[220px] text-sm leading-snug text-white/55">
                {t.items[i]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
