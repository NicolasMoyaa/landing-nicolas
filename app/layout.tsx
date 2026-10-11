import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nicolas Moya — Sitios web que venden en Tucuman",
  description: "Diseño y desarrollo de sitios web, tiendas online y soluciones digitales para negocios de Tucuman, Argentina.",
  keywords: ["diseño web", "Tucuman", "sitios web", "e-commerce", "desarrollo web"],
  openGraph: {
    title: "Nicolas Moya — Sitios web que venden en Tucuman",
    description: "Sitios web y tiendas online para negocios de Tucuman, Argentina.",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
