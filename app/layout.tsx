import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../lib/i18n";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const jbmono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jbmono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nicolas Moya — Sitios web que venden",
  description: "Diseño y desarrollo de sitios web, tiendas online y soluciones digitales para tiendas, servicios y alojamientos.",
  keywords: ["diseño web", "sitios web", "e-commerce", "desarrollo web", "tiendas online"],
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Nicolas Moya — Sitios web que venden",
    description: "Sitios web y tiendas online para tiendas, servicios y alojamientos.",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} ${jbmono.variable}`}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
