"use client";

import Link from "next/link";
import Header from "./Header";
import FinalCta from "./FinalCta";
import { trabajoPorSlug, waTrabajo } from "../lib/trabajos";
import { strings, useLang } from "../lib/i18n";
import { notFound } from "next/navigation";

export default function TrabajoContent({ slug }: { slug: string }) {
  const { lang } = useLang();
  const t = strings[lang];
  const base = trabajoPorSlug(slug);
  if (!base) notFound();
  const d = t.trabajosData[slug];

  const nombre = base.nombre;
  const tagline = d?.tagline ?? base.tagline;
  const descripcion = d?.descripcion ?? base.descripcion;
  const puntos = d?.puntos ?? base.puntos;
  const etiqueta = d?.etiqueta ?? base.etiqueta;
  const capturas = (base.capturas ?? []).map((c, i) => ({
    src: c.src,
    alt: d?.capturas[i]?.alt ?? c.alt,
    titulo: d?.capturas[i]?.titulo ?? c.titulo,
  }));
  const wa = d?.ctaMsg ?? base.ctaMsg;

  return (
    <main className="bg-ink text-white">
      <Header />
      <section className="relative flex min-h-[70svh] flex-col justify-end overflow-hidden">
        {base.fondoVideo ? (
          <video
            aria-hidden
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={base.fondoPoster ?? base.fondo}
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={base.fondoVideo} type="video/mp4" />
          </video>
        ) : (
          <img
            src={base.fondo}
            alt={base.fondoAlt}
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20"
        />
        <div className="relative mx-auto w-full max-w-6xl px-4 pb-12 pt-40 md:px-6">
          <div className="flex flex-col items-start gap-4">
            <Link
              href="/#proyectos"
              className="text-sm font-semibold text-white/60 transition hover:text-gold"
            >
              {t.trabajo.back}
            </Link>
            <span
              className={`inline-block rounded-full border px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.18em] ${
                base.real
                  ? "border-gold/40 text-gold"
                  : "border-white/25 text-white/60"
              }`}
            >
              {etiqueta}
            </span>
          </div>
          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.03em] md:text-7xl">
            {nombre}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/70 md:text-xl">
            {tagline}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {base.urlDeploy && (
              <a
                href={base.urlDeploy}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-gold px-8 py-4 text-center text-base font-semibold text-ink transition hover:bg-white"
              >
                {t.trabajo.visit}
              </a>
            )}
            <a
              href={waTrabajo({ ...base, ctaMsg: wa })}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine btn-shine-fast rounded-lg border border-white/30 px-8 py-4 text-center text-base font-semibold text-white transition hover:border-gold hover:text-gold"
            >
              {t.trabajo.want}
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <p className="max-w-3xl text-xl leading-relaxed text-white/75 md:text-2xl">
            {descripcion}
          </p>
          {capturas.map((c) => (
            <figure key={c.src} className="mt-12">
              <div className="overflow-hidden rounded-xl border border-white/10">
                <img
                  src={c.src}
                  alt={c.alt}
                  loading="lazy"
                  className="w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 text-sm text-white/40">
                {c.titulo}
              </figcaption>
            </figure>
          ))}
          <ul className="mt-12 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
            {puntos.map((p) => (
              <li key={p} className="flex gap-3 bg-ink p-6 text-[15px] text-white/80">
                <span className="font-bold text-gold">✓</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCta />
    </main>
  );
}
