import type { Metadata } from "next";

import Navbar from "@/components/navbar";
import ParticlesCanvas from "@/components/ui/particles-canvas";
import GoogleAnalytics from "@/components/google-analytics";
import SchemaOrg from "@/components/schema-org";
import { QuizShell } from "@/components/quiz-shell";
import DrawerShell from "@/components/drawer-shell";
import CookieBanner from "@/components/cookie-banner";

export const metadata: Metadata = {
  title: "Advisia · Agence de croissance digitale",
  description:
    "Nous sommes une agence de croissance spécialisée en intelligence artificielle, création de sites web, product design, marketing digital et identité de marque.",
  alternates: {
    canonical: "/",
  },
};

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QuizShell>
      <SchemaOrg />
      <GoogleAnalytics />
      <ParticlesCanvas />
      <DrawerShell>
        <header>
          <Navbar />
        </header>
        {children}
      </DrawerShell>
      <CookieBanner />
    </QuizShell>
  );
}
