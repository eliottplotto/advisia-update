import type { Metadata } from "next";
import "./../globals.css";

import Navbar from "@/components/navbar";
import ParticlesCanvas from "@/components/ui/particles-canvas";

export const metadata: Metadata = {
  title: "Advisia · Agence de croissance digitale",
  description:
    "Nous sommes une agence de croissance spécialisée en intelligence artificielle, création de sites web, product design, marketing digital et identité de marque.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta name="apple-mobile-web-app-title" content="Advisia" />
      </head>
      <body className="antialiased 2xl:text-lg min-h-screen">
        <ParticlesCanvas />
        <header>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
