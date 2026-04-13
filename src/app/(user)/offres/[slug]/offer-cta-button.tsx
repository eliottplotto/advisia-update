"use client";

import { useDrawer } from "@/lib/drawer-store";

interface Props {
  offerId: string;
  offerName: string;
}

export default function OfferCTAButton({ offerId, offerName }: Props) {
  const { openDrawer } = useDrawer();
  return (
    <button
      onClick={() => openDrawer(offerId)}
      className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,254,110,0.2)] hover:scale-[1.02]"
      style={{ background: "#c9fe6e", color: "#0a0a0f" }}
    >
      Demander {offerName} →
    </button>
  );
}
