"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="p-4 flex h-16 items-center justify-between">
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
          <div className="flex items-center space-x-6">
            <Link
              href="/services"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Services
            </Link>
            <Link
              href="/projets"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Projets
            </Link>
            <Link
              href="/agence"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Agence
            </Link>
          </div>
        </div>

        {/* Button on the right */}
        <div className="hidden md:flex">
          <Link href="/contact">
            <Button>Réserver un appel</Button>
          </Link>
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
            <div className="grid gap-6 pt-6">
              <Link
                href="/services"
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/projets"
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Projets
              </Link>
              <Link
                href="/agence"
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Agence
              </Link>
              <Link href="/contact">
                <Button className="mt-4">Réserver un appel</Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
