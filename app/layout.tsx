import type { Metadata, Viewport } from "next";
import "./globals.css";

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
        url: "/novary-logo-lockup.png",
        width: 1200,
        height: 766,
        alt: "Logo Novary Digital Solutions"
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
    images: ["/novary-logo-lockup.png"]
  },
  icons: {
    icon: "/novary-mark.png",
    apple: "/novary-mark.png"
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
