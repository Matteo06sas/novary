import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://novary.dev"),
  title: {
    default: "Novary | Siti web moderni per far crescere il tuo business",
    template: "%s | Novary"
  },
  description:
    "Novary realizza siti web veloci, eleganti e ottimizzati per trasformare i visitatori in clienti.",
  applicationName: "Novary",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Novary | Siti web moderni per far crescere il tuo business",
    description:
      "Siti web veloci, eleganti e ottimizzati per aziende locali, professionisti e attività italiane.",
    url: "https://novary.dev",
    siteName: "Novary",
    images: [
      {
        url: "/novary-hero-interface.png",
        width: 1792,
        height: 1024,
        alt: "Interfaccia software premium in stile scuro con pannelli di controllo e dettagli blu elettrico"
      }
    ],
    locale: "it_IT",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Novary | Siti web moderni per far crescere il tuo business",
    description:
      "Novary realizza esperienze digitali moderne per aziende locali e professionisti.",
    images: ["/novary-hero-interface.png"]
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
  colorScheme: "dark"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="dark">
      <body>{children}</body>
    </html>
  );
}
