import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#f4f1ea",
};

export const metadata: Metadata = {
  title: "Cédric APETOH — Code. Image. Signal.",
  description:
    "Portfolio de Cédric APETOH, à Lomé (Togo) : développement logiciel, production audiovisuelle en direct et création de contenu tech.",
  openGraph: {
    title: "Cédric APETOH — Code. Image. Signal.",
    description:
      "Développement logiciel · Production live · Contenu digital — Lomé, Togo.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1 pt-28 lg:pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
