"use client";

import { useEffect, useRef, useState } from "react";

const metrics = [
  { value: 243, decimals: 0, suffix: "", label: "productos activos en tienda real" },
  { value: 201, decimals: 0, suffix: "", label: "seguidores gestionados con CRM y ventas" },
  { value: 3.88, decimals: 2, suffix: "%", label: "engagement real del negocio" },
];

function CountUp({
  value,
  decimals,
  suffix,
}: {
  value: number;
  decimals: number;
  suffix: string;
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
      ? n.toFixed(decimals).replace(".", ",") + suffix
      : Math.round(n).toString() + suffix;

  return <span ref={ref}>{text}</span>;
}

export default function MetricBand() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-ink">
      <video
        aria-hidden
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="/hero-oficina2-poster.jpg"
        className="absolute inset-0 hidden h-full w-full object-cover opacity-25 md:block"
      >
        <source src="/hero-oficina2.mp4" type="video/mp4" />
      </video>
      <div aria-hidden className="absolute inset-0 bg-ink/70" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.02em] text-white md:text-5xl">
          Lo que ya está funcionando.
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-10 border-t border-white/10 pt-10 sm:grid-cols-3">
          {metrics.map((m) => (
            <div key={m.label}>
              <p className="text-5xl font-extrabold tracking-tight text-gold md:text-6xl">
                <CountUp
                  value={m.value}
                  decimals={m.decimals}
                  suffix={m.suffix}
                />
              </p>
              <p className="mt-2 max-w-[220px] text-sm leading-snug text-white/55">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
