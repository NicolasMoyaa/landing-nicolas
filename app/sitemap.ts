import type { MetadataRoute } from "next";
import { trabajos } from "../lib/trabajos";

const BASE = "https://landing-nicolas.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: new Date() },
    ...trabajos.map((t) => ({
      url: `${BASE}/trabajos/${t.slug}`,
      lastModified: new Date(),
    })),
  ];
}
