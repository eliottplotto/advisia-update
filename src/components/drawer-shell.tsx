"use client";

import { DrawerProvider, useDrawer } from "@/lib/drawer-store";
import OfferDrawer from "@/components/offer-drawer";

function DrawerRenderer() {
  const { isOpen, offerId, closeDrawer } = useDrawer();
  return <OfferDrawer isOpen={isOpen} offerId={offerId} onClose={closeDrawer} />;
}

export default function DrawerShell({ children }: { children: React.ReactNode }) {
  return (
    <DrawerProvider>
      {children}
      <DrawerRenderer />
    </DrawerProvider>
  );
}
