"use client";

import Link from "next/link";
import { trabajos } from "../lib/trabajos";
import { strings, useLang } from "../lib/i18n";

export default function Cases() {
  const { lang } = useLang();
  const t = strings[lang];
  const data = t.trabajosData;

  return (
    <section id="proyectos" className="border-y border-white/10 bg-ink-2">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.02em] text-white md:text-5xl">
          {t.cases.title}
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {trabajos.map((job) => (
            <Link
              key={job.slug}
              href={`/trabajos/${job.slug}`}
              className="group relative flex min-h-[320px] flex-col justify-end overflow-hidden rounded-xl border border-white/10"
            >
              {job.fondoVideo ? (
                <video
                  aria-hidden
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={job.fondoPoster ?? job.fondo}
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                >
                  <source src={job.fondoVideo} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={job.fondo}
                  alt=""
                  aria-hidden
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              )}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent"
              />
              <div className="relative p-7">
                <h3 className="text-2xl font-bold tracking-tight text-white">
                  {job.nombre}
                </h3>
                <p className="mt-1.5 text-sm leading-snug text-white/65">
                  {data[job.slug]?.tagline ?? job.tagline}
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-gold">
                  {t.cases.see}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
