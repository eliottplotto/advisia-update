"use client";

import { createContext, useContext, useState } from "react";

interface DrawerContextType {
  isOpen: boolean;
  offerId: string | null;
  openDrawer: (id: string) => void;
  closeDrawer: () => void;
}

const DrawerContext = createContext<DrawerContextType | null>(null);

export function DrawerProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [offerId, setOfferId] = useState<string | null>(null);

  const openDrawer = (id: string) => {
    setOfferId(id);
    setIsOpen(true);
  };

  const closeDrawer = () => {
    setIsOpen(false);
    setTimeout(() => setOfferId(null), 400);
  };

  return (
    <DrawerContext.Provider value={{ isOpen, offerId, openDrawer, closeDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
}

export function useDrawer() {
  const ctx = useContext(DrawerContext);
  if (!ctx) throw new Error("useDrawer must be used within DrawerProvider");
  return ctx;
}
