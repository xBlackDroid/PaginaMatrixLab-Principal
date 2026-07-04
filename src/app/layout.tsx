import type { Metadata, Viewport } from "next";
import { Syne, Manrope } from "next/font/google";
import { SOCIAL_LINKS } from "@/lib/constants";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MatrixLab Intelligence — Desde uno hasta miles",
  description:
    "El laboratorio creativo donde tus ideas pasan de concepto a producto. Stickers, experiencias, soluciones para empresas y tienda online. Desde personas hasta empresas.",
  metadataBase: new URL("https://matrixlabintelligence.com"),
  alternates: { canonical: "/" },
  keywords: ["stickers personalizados", "talleres creativos", "merchandising empresarial", "impresión personalizada", "México"],
  openGraph: {
    title: "MatrixLab Intelligence",
    description: "Desde uno hasta miles. Desde personas hasta empresas.",
    type: "website",
    locale: "es_MX",
    url: "https://matrixlabintelligence.com",
    siteName: "MatrixLab Intelligence",
    images: [
      {
        url: "/images/matrixlab-stickers-logo.png",
        width: 1024,
        height: 1024,
        alt: "MatrixLab Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "MatrixLab Intelligence",
    description: "Desde uno hasta miles. Desde personas hasta empresas.",
    images: ["/images/matrixlab-stickers-logo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a12",
};

/** Datos estructurados para buscadores (Organization). */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MatrixLab Intelligence",
  url: "https://matrixlabintelligence.com",
  logo: "https://matrixlabintelligence.com/images/matrixlab-stickers-logo.png",
  description:
    "Laboratorio creativo de personalización: stickers, textil, grabado láser, impresión 3D, talleres y soluciones para empresas.",
  sameAs: [SOCIAL_LINKS.instagram, SOCIAL_LINKS.facebook, SOCIAL_LINKS.tiktok],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    url: SOCIAL_LINKS.whatsapp,
    availableLanguage: "es",
  },
} as const;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-MX"
      className={`${syne.variable} ${manrope.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-brand-purple focus:text-white focus:rounded-lg"
        >
          Saltar al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}
