import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://novary.dev"),
  title: {
    default: "Novary | Prodotti digitali premium",
    template: "%s | Novary"
  },
  description:
    "Novary progetta e sviluppa prodotti digitali premium per aziende, brand e professionisti ambiziosi.",
  applicationName: "Novary",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Novary | Prodotti digitali premium",
    description:
      "Esperienze digitali eleganti, veloci e curate per aziende, brand e professionisti ambiziosi.",
    url: "https://novary.dev",
    siteName: "Novary",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Novary — Digital Solutions"
      }
    ],
    locale: "it_IT",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Novary | Prodotti digitali premium",
    description:
      "Novary realizza prodotti digitali premium per aziende, brand e professionisti.",
    images: ["/og-image.png"]
  },
  icons: {
    icon: "/novary-icon.svg",
    apple: "/novary-icon.svg"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0B",
  colorScheme: "dark"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`dark ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
