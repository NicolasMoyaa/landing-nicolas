import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TrabajoContent from "../../../components/TrabajoContent";
import { trabajoPorSlug, trabajos } from "../../../lib/trabajos";

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
  if (!trabajoPorSlug(slug)) notFound();
  return <TrabajoContent slug={slug} />;
}
