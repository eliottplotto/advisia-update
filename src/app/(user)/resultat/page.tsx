import { Suspense } from "react";
import type { Metadata } from "next";
import ResultatClient from "./resultat-client";

export const metadata: Metadata = {
  title: "Votre recommandation | Advisia",
  description:
    "Découvrez votre recommandation personnalisée Advisia — solution, prix et délai adaptés à votre besoin.",
  alternates: {
    canonical: "https://advisia.agency/resultat",
  },
};

export default function ResultatPage() {
  return (
    <Suspense fallback={null}>
      <ResultatClient />
    </Suspense>
  );
}
