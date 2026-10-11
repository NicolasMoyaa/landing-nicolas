import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://nicolasmoya.com", lastModified: new Date() }];
}
