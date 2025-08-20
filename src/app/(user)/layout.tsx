import type { Metadata } from "next";
import "./../globals.css";

import Navbar from "@/components/navbar";

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
      <body className="antialiased 2xl:text-lg min-h-screen">
        <header>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
