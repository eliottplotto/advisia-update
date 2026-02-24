"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  RiArrowDownSLine,
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

export default function Navbar() {
  const pathname = usePathname();
  const isMinimalNavbar = ["/contact", "/prendre-rendez-vous"].includes(
    pathname
  );

  const servicesLinks = [
    { path: "/services/automatisations-ia", label: "Automatisations IA" },
    { path: "/services/agence-web", label: "Développement Web" },
    { path: "/services/product-design", label: "Product Design" },
    { path: "/services/marketing-digital", label: "Marketing Digital" },
  ];

  const mobileMainNavLinks = [
    { path: "/projets", label: "Réalisations" },
    { path: "/insights", label: "Insights" },
    { path: "/agence", label: "L'équipe" },
  ];

  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const servicesMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const servicesTl = useRef<gsap.core.Timeline | null>(null);
  const mobileTl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
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

  const openServicesMenu = () => {
    if (servicesTl.current && !isServicesMenuOpen) {
      servicesTl.current.play();
      setIsServicesMenuOpen(true);
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
        className={`w-full transition-all duration-400 ${isMinimalNavbar ? "static" : "fixed top-0 z-40"}`}
        style={{
          background: isMinimalNavbar
            ? "var(--bg-primary)"
            : isScrolled || isAnyMenuOpen
              ? "rgba(10,10,15,0.92)"
              : "rgba(10,10,15,0.6)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          borderBottom: "1px solid var(--border)",
          color: "var(--text-primary)",
        }}
      >
        <div
          className={`container-md grid grid-cols-2 ${isMinimalNavbar ? "lg:grid-cols-1" : "lg:grid-cols-[1fr_auto_1fr]"} transition-height duration-300 h-20 ${
            isScrolled ? "lg:h-[60px]" : "lg:h-20"
          }`}
        >
          {/* Left - Logo */}
          <div className="global-padding-x flex items-center">
            <Link
              href="/"
              className="flex items-center space-x-2"
              onClick={() => {
                closeServicesMenu();
                closeMobileMenu();
              }}
            >
              <span
                className="font-bold text-2xl tracking-wide gradient-text"
                style={{ fontFamily: "var(--font-display)", letterSpacing: "0.05em" }}
              >
                <Logo className="text-white" />
              </span>
            </Link>
          </div>

          {/* Center Navigation - Desktop */}
          {!isMinimalNavbar && (
            <div className="hidden lg:flex lg:justify-center lg:items-center">
              <div className="flex justify-center items-center gap-10">
                <button
                  onClick={toggleServicesMenu}
                  onMouseEnter={openServicesMenu}
                  className="font-mono text-[0.75rem] uppercase tracking-[0.15em] flex items-center gap-1 transition-colors duration-300 hover:text-white relative"
                  style={{ color: "var(--text-secondary)", background: "none", border: "none" }}
                >
                  Expertises
                  <RiArrowDownSLine
                    size={16}
                    className={`transition-transform duration-300 ${isServicesMenuOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <Link
                  href="/projets"
                  onClick={closeServicesMenu}
                  className="font-mono text-[0.75rem] uppercase tracking-[0.15em] relative transition-colors duration-300 hover:text-white group"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Réalisations
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] transition-all duration-400 group-hover:w-full" style={{ background: "var(--violet)" }} />
                </Link>
                <Link
                  href="/insights"
                  onClick={closeServicesMenu}
                  className="font-mono text-[0.75rem] uppercase tracking-[0.15em] relative transition-colors duration-300 hover:text-white group"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Insights
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] transition-all duration-400 group-hover:w-full" style={{ background: "var(--violet)" }} />
                </Link>
                <Link
                  href="/agence"
                  onClick={closeServicesMenu}
                  className="font-mono text-[0.75rem] uppercase tracking-[0.15em] relative transition-colors duration-300 hover:text-white group"
                  style={{ color: "var(--text-secondary)" }}
                >
                  L&apos;équipe
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] transition-all duration-400 group-hover:w-full" style={{ background: "var(--violet)" }} />
                </Link>
              </div>
            </div>
          )}

          {/* Right - CTA */}
          {!isMinimalNavbar && (
            <div className="global-padding-x flex justify-end items-center">
              <Link
                href="/contact"
                onClick={closeServicesMenu}
                className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 font-mono text-[0.75rem] font-semibold uppercase tracking-[0.1em] rounded-md transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_0_40px_var(--accent-glow)]"
                style={{
                  background: "var(--ad-1)",
                  color: "#000",
                  boxShadow: "0 0 20px var(--accent-dim)",
                }}
              >
                J&apos;estime mon projet →
              </Link>

              <button
                onClick={toggleMobileMenu}
                className="lg:hidden w-12 h-12 flex items-center justify-center"
                style={{ color: "var(--text-primary)", background: "none", border: "none" }}
              >
                {isMobileMenuOpen ? (
                  <RiCloseFill size={24} />
                ) : (
                  <RiMenuFill size={24} />
                )}
              </button>
            </div>
          )}
        </div>

        {/* Services Menu - Desktop */}
        <div
          ref={servicesMenuRef}
          className="hidden lg:block w-full overflow-hidden h-0"
          style={{
            background: "#0f0f18",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(124,58,237,0.2)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
          }}
          onMouseLeave={closeServicesMenu}
        >
          <ul className="container-md global-padding" style={{ background: "#0f0f18" }}>
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
                  <p
                    className="text-4xl relative w-max transition-colors duration-300 text-white group-hover:text-[var(--ad-1)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {link.label}
                    <span
                      className="absolute -bottom-2 left-0 w-0 h-[3px] transition-all duration-500 ease-out group-hover:w-full"
                      style={{ background: "var(--gradient-1)" }}
                    />
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
          style={{ background: "rgba(10,10,15,0.98)" }}
        >
          <div className="global-padding">
            <div>
              <div className="space-y-2">
                {servicesLinks.map((link, index) => (
                  <Link
                    key={`service-${index}`}
                    href={link.path}
                    onClick={closeMobileMenu}
                    className="mobile-nav-item block text-2xl transition-colors hover:text-[var(--ad-1)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div
                className="pt-4 mt-4 space-y-2"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                {mobileMainNavLinks.map((link, index) => (
                  <Link
                    key={`main-${index}`}
                    href={link.path}
                    onClick={closeMobileMenu}
                    className="mobile-nav-item block text-2xl transition-colors hover:text-[var(--ad-1)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="mobile-nav-item pt-8 flex flex-col gap-y-2">
                <Link
                  href="/prendre-rendez-vous"
                  onClick={closeMobileMenu}
                  className="block w-full text-center py-3 font-mono text-xs uppercase tracking-wider rounded-md transition-all backdrop-blur-md"
                  style={{
                    border: "1px solid rgba(124,58,237,0.3)",
                    color: "var(--text-primary)",
                  }}
                >
                  Réserver un appel
                </Link>
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="block w-full text-center py-3 font-mono text-xs uppercase tracking-wider rounded-md font-semibold"
                  style={{
                    background: "var(--ad-1)",
                    color: "#000",
                  }}
                >
                  J&apos;estime mon projet →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      {isAnyMenuOpen && (
        <div
          className="fixed z-[39] top-0 left-0 w-full h-full backdrop-blur"
          style={{ background: "rgba(10,10,15,0.5)" }}
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
