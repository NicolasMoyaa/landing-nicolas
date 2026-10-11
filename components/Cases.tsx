import Link from "next/link";
import { trabajos } from "../lib/trabajos";

export default function Cases() {
  return (
    <section id="proyectos" className="border-y border-white/10 bg-ink-2">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.02em] text-white md:text-5xl">
          En qué estoy trabajando.
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {trabajos.map((t) => (
            <Link
              key={t.slug}
              href={`/trabajos/${t.slug}`}
              className="group relative flex min-h-[320px] flex-col justify-end overflow-hidden rounded-xl border border-white/10"
            >
              <img
                src={t.fondo}
                alt=""
                aria-hidden
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent"
              />
              <div className="relative p-7">
                <h3 className="text-2xl font-bold tracking-tight text-white">
                  {t.nombre}
                </h3>
                <p className="mt-1.5 text-sm leading-snug text-white/65">
                  {t.tagline}
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-gold">
                  Ver proyecto →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
