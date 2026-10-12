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
  title: "Nicolas Moya — Sitios web que venden en Tucuman",
  description: "Diseño y desarrollo de sitios web, tiendas online y soluciones digitales para negocios de Tucuman, Argentina.",
  keywords: ["diseño web", "Tucuman", "sitios web", "e-commerce", "desarrollo web"],
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Nicolas Moya — Sitios web que venden en Tucuman",
    description: "Sitios web y tiendas online para negocios de Tucuman, Argentina.",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} ${jbmono.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var l=localStorage.getItem('lang');if(l==='en'||l==='es'){document.documentElement.lang=l;}}catch(e){}`,
          }}
        />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
