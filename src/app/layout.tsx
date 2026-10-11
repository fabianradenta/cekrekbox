import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

const poppins = localFont({
  src: [
    { path: "./fonts/poppins-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/poppins-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/poppins-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/poppins-700.woff2", weight: "700", style: "normal" },
    { path: "./fonts/poppins-800.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-poppins",
  display: "swap",
});

// Archivo variable: wdth 62-125, wght 100-900.
const archivo = localFont({
  src: "./fonts/archivo-wdth-italic.woff2",
  weight: "100 900",
  style: "italic",
  declarations: [{ prop: "font-stretch", value: "62% 125%" }],
  variable: "--font-archivo",
  display: "swap",
});

const kalam = localFont({
  src: "./fonts/kalam-700.woff2",
  weight: "700",
  variable: "--font-kalam",
  display: "swap",
});

const description =
  "Sewa photobooth otomatis dengan cetak instan dan softcopy via QR untuk wedding, wisuda, corporate, dan event di Medan. Gratis desain frame custom.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CekrekBox | Sewa Photobooth Cetak Instan di Medan",
    template: "%s | CekrekBox Photobooth Medan",
  },
  description,
  applicationName: "CekrekBox",
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "CekrekBox",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#121CD4",
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" data-scroll-behavior="smooth" className={`${poppins.variable} ${archivo.variable} ${kalam.variable}`}>
      <body>
        <a className="skip-link" href="#konten">
          Langsung ke konten
        </a>
        <div className="page">
          <Navbar />
          <main id="konten">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
