import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../../components/Header";
import FinalCta from "../../../components/FinalCta";
import { trabajoPorSlug, trabajos, waTrabajo } from "../../../lib/trabajos";

export function generateStaticParams() {
  return trabajos.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const t = trabajoPorSlug(slug);
  if (!t) return {};
  return {
    title: `${t.nombre} — Proyecto de Nicolás Moya`,
    description: t.tagline,
  };
}

export default async function TrabajoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = trabajoPorSlug(slug);
  if (!t) notFound();

  return (
    <main className="bg-ink text-white">
      <Header />
      <section className="relative flex min-h-[70svh] flex-col justify-end overflow-hidden">
        {t.fondoVideo ? (
          <video
            aria-hidden
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={t.fondoPoster ?? t.fondo}
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={t.fondoVideo} type="video/mp4" />
          </video>
        ) : (
          <img
            src={t.fondo}
            alt={t.fondoAlt}
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20"
        />
        <div className="relative mx-auto w-full max-w-6xl px-4 pb-12 pt-40 md:px-6">
          <Link
            href="/#proyectos"
            className="text-sm font-semibold text-white/60 transition hover:text-gold"
          >
            ← Proyectos
          </Link>
          <span
            className={`mt-6 inline-block rounded-full border px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.18em] ${
              t.real
                ? "border-gold/40 text-gold"
                : "border-white/25 text-white/60"
            }`}
          >
            {t.etiqueta}
          </span>
          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.03em] md:text-7xl">
            {t.nombre}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/70 md:text-xl">
            {t.tagline}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {t.urlDeploy && (
              <a
                href={t.urlDeploy}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-white px-8 py-4 text-center text-base font-semibold text-ink transition hover:bg-gold"
              >
                Entrar al sitio →
              </a>
            )}
            <a
              href={waTrabajo(t)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine btn-shine-fast rounded-lg border border-white/30 px-8 py-4 text-center text-base font-semibold text-white transition hover:border-gold hover:text-gold"
            >
              Quiero algo así
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <p className="max-w-3xl text-xl leading-relaxed text-white/75 md:text-2xl">
            {t.descripcion}
          </p>
          {t.capturas?.map((c) => (
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
            {t.puntos.map((p) => (
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
