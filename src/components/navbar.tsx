"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  RiArrowDownSFill,
  RiArrowRightFill,
  RiCloseFill,
  RiMenuFill,
} from "@remixicon/react";

// GSAP
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Logo } from "./Logo";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const servicesLinks = [
  { path: "/services/automatisations-ia", label: "Automatisations IA" },
  { path: "/services/site-web", label: "Site Web" },
  { path: "/services/product-design", label: "Product Design" },
  { path: "/services/marketing-digital", label: "Marketing Digital" },
  { path: "/services/identite-de-marque", label: "Identité de marque" },
];

const mobileMainNavLinks = [
  { path: "/projets", label: "Cas clients" },
  { path: "/agence", label: "Agence" },
];

export default function Navbar() {
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const servicesMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const servicesTl = useRef<gsap.core.Timeline | null>(null);
  const mobileTl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    // Services menu timeline
    if (servicesMenuRef.current) {
      servicesTl.current = gsap
        .timeline({ paused: true })
        .to(servicesMenuRef.current, {
          height: "auto",
          duration: 0.5,
          ease: "power3.out",
        })
        .fromTo(
          servicesMenuRef.current.querySelectorAll("li"),
          { opacity: 0, x: 32 },
          {
            opacity: 1,
            x: 0,
            duration: 0.2,
            stagger: 0.04,
            ease: "power5.out",
          },
          "-=0.3"
        );
    }

    // Mobile menu timeline
    if (mobileMenuRef.current) {
      mobileTl.current = gsap
        .timeline({ paused: true })
        .to(mobileMenuRef.current, {
          height: "auto",
          duration: 0.4,
          ease: "power3.out",
        })
        .fromTo(
          mobileMenuRef.current.querySelectorAll(".mobile-nav-item"),
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.2,
            stagger: 0.04,
            ease: "power3.out",
          },
          "-=0.2"
        );
    }

    // ScrollTrigger pour changer l'apparence de la navbar
    ScrollTrigger.create({
      trigger: "body",
      start: "top -50px",
      end: "bottom bottom",
      onUpdate: (self) => {
        if (self.direction === 1 && self.progress > 0) {
          setIsScrolled(true);
        } else if (self.direction === -1 && self.progress === 0) {
          setIsScrolled(false);
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const toggleServicesMenu = () => {
    if (servicesTl.current) {
      if (isServicesMenuOpen) {
        servicesTl.current.reverse();
      } else {
        servicesTl.current.play();
      }
      setIsServicesMenuOpen(!isServicesMenuOpen);
    }
  };

  const closeServicesMenu = () => {
    if (servicesTl.current && isServicesMenuOpen) {
      servicesTl.current.reverse();
      setIsServicesMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    if (mobileTl.current) {
      if (isMobileMenuOpen) {
        mobileTl.current.reverse();
      } else {
        mobileTl.current.play();
      }
      setIsMobileMenuOpen(!isMobileMenuOpen);
    }
  };

  const closeMobileMenu = () => {
    if (mobileTl.current && isMobileMenuOpen) {
      mobileTl.current.reverse();
      setIsMobileMenuOpen(false);
    }
  };

  const isAnyMenuOpen = isServicesMenuOpen || isMobileMenuOpen;
  return (
    <>
      <nav
        className={`fixed top-0 z-40 w-full transition-colors duration-300 ${
          isScrolled || isAnyMenuOpen
            ? "bg-background"
            : "dark bg-transparent text-foreground"
        }`}
      >
        <div
          className={`container-md grid grid-cols-2 lg:grid-cols-[1fr_auto_1fr] transition-height duration-300 h-20 ${
            isScrolled ? "lg:h-14" : "lg:h-24"
          }`}
        >
          {/* Left */}
          <div className="global-padding-x flex items-center">
            <Link
              href="/"
              className="flex items-center space-x-2"
              onClick={() => {
                closeServicesMenu();
                closeMobileMenu();
              }}
            >
              <Logo />
            </Link>
          </div>

          {/* Center Navigation - Desktop */}
          <div className="hidden lg:flex lg:justify-center lg:items-center">
            <div className="flex justify-center items-center gap-8">
              <Button variant="link" onClick={toggleServicesMenu}>
                Expertises
                <RiArrowDownSFill
                  className={`transition-transform duration-300 ${isServicesMenuOpen ? "rotate-180" : ""}`}
                />
              </Button>
              <Button asChild variant="link" onClick={closeServicesMenu}>
                <Link href="/projets">Cas clients</Link>
              </Button>
              <Button asChild variant="link" onClick={closeServicesMenu}>
                <Link href="/agence">Agence</Link>
              </Button>
            </div>
          </div>

          {/* Right */}
          <div className="global-padding-x flex justify-end items-center">
            <Button
              onClick={closeServicesMenu}
              asChild
              className="hidden lg:flex"
              size={`${isScrolled ? "default" : "lg"}`}
            >
              <Link href="/contact">
                Demander une estimation
                <RiArrowRightFill />
              </Link>
            </Button>

            {/* Mobile Menu Button */}

            <Button
              onClick={toggleMobileMenu}
              className="lg:hidden w-12 h-12"
              variant="ghost"
            >
              {isMobileMenuOpen ? <RiCloseFill /> : <RiMenuFill />}
            </Button>
          </div>
        </div>

        {/* Services Menu - Desktop */}
        <div
          ref={servicesMenuRef}
          className="hidden lg:block w-full overflow-hidden h-0"
        >
          <ul className="container-md global-padding">
            {servicesLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  onClick={() => {
                    servicesTl.current?.reverse();
                    setIsServicesMenuOpen(false);
                  }}
                  className="relative block py-2 group"
                >
                  <p className="text-3xl relative w-max">
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-current transition-all duration-300 ease-out group-hover:w-full"></span>
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className="lg:hidden w-full overflow-hidden h-0"
        >
          <div className="global-padding">
            <div>
              {/* Services Links */}
              <div className="space-y-2">
                {servicesLinks.map((link, index) => (
                  <Link
                    key={`service-${index}`}
                    href={link.path}
                    onClick={closeMobileMenu}
                    className="block text-2xl"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Main Nav Links */}
              <div className="pt-4 mt-4 border-t space-y-2">
                {mobileMainNavLinks.map((link, index) => (
                  <Link
                    key={`main-${index}`}
                    href={link.path}
                    onClick={closeMobileMenu}
                    className="block text-2xl"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="mobile-nav-item pt-8 flex flex-col gap-y-2">
                <Button
                  asChild
                  size="lg"
                  className="w-full"
                  variant="secondary"
                >
                  <Link href="/prendre-rendez-vous" onClick={closeMobileMenu}>
                    Réserver un appel
                  </Link>
                </Button>
                <Button asChild size="lg" className="w-full">
                  <Link href="/contact" onClick={closeMobileMenu}>
                    Demander une estimation
                    <RiArrowRightFill />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      {isAnyMenuOpen && (
        <div
          className="fixed z-39 top-0 left-0 w-full h-full bg-primary/50 backdrop-blur supports-[backdrop-filter]:bg-primary/50"
          onClick={() => {
            if (isServicesMenuOpen) {
              servicesTl.current?.reverse();
              setIsServicesMenuOpen(false);
            }
            if (isMobileMenuOpen) {
              closeMobileMenu();
            }
          }}
        />
      )}
    </>
  );
}
