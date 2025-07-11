import type { Metadata } from "next";
import "./../globals.css";
import { ReactLenis } from "lenis/react";

import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Advisia",
  description: "Advisia, agence de croissance digitale.",
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
