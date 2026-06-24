import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://markzais.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mark Zais, PhD — Enterprise Analytics Executive & AI Strategist",
    template: "%s · Mark Zais, PhD",
  },
  description:
    "Mark Zais, PhD, CAP-X — Enterprise analytics executive with 20+ years leading data strategy, AI innovation, and advanced analytics across defense, government, and industry. Trusted advisor to C-suite and senior government leaders.",
  keywords: [
    "Mark Zais",
    "Enterprise Analytics Executive",
    "AI Strategy",
    "Data Science",
    "Operations Research",
    "Decision Science",
    "Machine Learning",
    "Zais Analytics",
  ],
  authors: [{ name: "Mark Zais" }],
  creator: "Mark Zais",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Mark Zais, PhD — Enterprise Analytics Executive & AI Strategist",
    description:
      "20+ years leading data strategy, AI innovation, and advanced analytics across defense, government, and industry.",
    siteName: "Mark Zais",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mark Zais, PhD — Enterprise Analytics Executive & AI Strategist",
    description:
      "20+ years leading data strategy, AI innovation, and advanced analytics across defense, government, and industry.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
