"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-40 w-full ">
      <div className="p-4 md:px-6 lg:px-8 flex h-16 items-center justify-between">
        {/* Logo  */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/advisia-logo.png"
              alt="Logo"
              width={157}
              height={40}
              className="h-8 w-auto"
            />
          </Link>
        </div>

        {/* Navigation links */}
        <div className="hidden md:flex md:flex-1 md:justify-center">
          <div className="flex items-center">
            <Button asChild variant={"secondary"}>
              <Link href="/services">Services</Link>
            </Button>
            <Button asChild variant={"secondary"}>
              <Link href="/projets">Projets</Link>
            </Button>
            <Button asChild variant={"secondary"}>
              <Link href="/agence">Agence</Link>
            </Button>
          </div>
        </div>

        {/* Button on the right */}
        <div className="hidden md:flex">
          <Button asChild>
            <Link href="/contact">Réserver un appel</Link>
          </Button>
        </div>

        {/* Mobile menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Ouvrir le menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="grid gap-6 pt-6">
              <Button asChild variant={"secondary"}>
                <Link href="/services" onClick={() => setIsOpen(false)}>
                  Services
                </Link>
              </Button>

              <Button asChild variant={"secondary"}>
                <Link href="/projets" onClick={() => setIsOpen(false)}>
                  Projets
                </Link>
              </Button>

              <Button asChild variant={"secondary"}>
                <Link href="/agence" onClick={() => setIsOpen(false)}>
                  Agence
                </Link>
              </Button>
              <Button asChild>
                <Link href="/contact">Réserver un appel</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
