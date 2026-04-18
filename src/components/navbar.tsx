"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Menu } from "lucide-react";
import { trackCTAClick, trackBookingClick } from "@/lib/analytics";
import { useRef, useState } from "react";
import { useQuiz } from "@/components/quiz-provider";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Logo } from "./Logo";
import { motion, AnimatePresence } from "motion/react";
import { Zap, Globe, Layers, TrendingUp, Search, ArrowLeftRight, HeartHandshake, ChevronDown } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const expertisesLeft = [
  {
    icon: Zap,
    label: "IA & Automatisation",
    description: "Automatisez vos processus métier",
    path: "/services/automatisations-ia",
  },
  {
    icon: Globe,
    label: "Dev Web",
    description: "Sites & applications performants",
    path: "/services/agence-web",
  },
  {
    icon: Layers,
    label: "Design d'Interface",
    description: "Interfaces centrées utilisateur",
    path: "/services/product-design",
  },
  {
    icon: TrendingUp,
    label: "Marketing Digital",
    description: "Acquisition, SEO et conversion",
    path: "/services/marketing-digital",
  },
];

const expertisesRight = [
  {
    icon: Search,
    label: "Diagnostics",
    description: "Audits & analyses actionnables",
    path: "/diagnostics",
  },
  {
    icon: ArrowLeftRight,
    label: "Cession & Reprise",
    description: "Valorisation digitale d'entreprise",
    path: "/cession-reprise",
  },
  {
    icon: HeartHandshake,
    label: "Accompagnement",
    description: "Formation & partenariat mensuel",
    path: "/accompagnement",
  },
];

const navLinks = [
  { path: "/projets", label: "R\u00e9alisations" },
  { path: "/insights", label: "Insights" },
  { path: "/agence", label: "L\u2019équipe" },
  { path: "/tarifs", label: "Tarifs" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isMinimalNavbar = ["/contact", "/prendre-rendez-vous"].includes(pathname);

  const { setIsQuizOpen } = useQuiz();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileExpertisesOpen, setIsMobileExpertisesOpen] = useState(false);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileTl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
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

  const toggleMobileMenu = () => {
    if (mobileTl.current) {
      if (isMobileMenuOpen) {
        mobileTl.current.reverse();
        setIsMobileExpertisesOpen(false);
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
      setIsMobileExpertisesOpen(false);
    }
  };

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => setIsDropdownOpen(false), 100);
  };

  const isExpertisesActive = [...expertisesLeft, ...expertisesRight].some(
    (e) => pathname === e.path
  );

  return (
    <>
      <nav
        className={`w-full transition-all duration-400 ${isMinimalNavbar ? "static" : "fixed top-0 z-40"}`}
        style={{
          background: isMinimalNavbar
            ? "var(--bg-primary)"
            : isScrolled || isMobileMenuOpen
              ? "rgba(10,10,15,0.92)"
              : "rgba(10,10,15,0.6)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          borderBottom: "1px solid var(--border)",
          color: "var(--text-primary)",
        }}
      >
        <div
          className={`container-md grid grid-cols-2 ${isMinimalNavbar ? "lg:grid-cols-1" : "lg:grid-cols-[auto_1fr_auto]"} transition-height duration-300 h-20 ${
            isScrolled ? "lg:h-[60px]" : "lg:h-20"
          }`}
        >
          {/* Left - Logo */}
          <div className="global-padding-x flex items-center">
            <Link
              href="/"
              className="flex items-center space-x-2"
              onClick={closeMobileMenu}
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
            <div className="hidden lg:flex lg:justify-center lg:items-center overflow-visible">
              <div className="flex justify-center items-center gap-5 px-4">
                {/* Dropdown Nos expertises */}
                <div
                  className="relative"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <button
                    className="font-mono text-[0.7rem] uppercase tracking-[0.1em] relative transition-colors duration-300 hover:text-white group whitespace-nowrap flex items-center gap-1"
                    style={{
                      color: isExpertisesActive ? "var(--text-primary)" : "var(--text-secondary)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Nos expertises
                    <ChevronDown
                      size={12}
                      className="transition-transform duration-200"
                      style={{ transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                    />
                    <span
                      className="absolute -bottom-1 left-0 h-[2px] transition-all duration-400 group-hover:w-full"
                      style={{
                        background: "var(--violet)",
                        width: isExpertisesActive ? "100%" : "0%",
                      }}
                    />
                  </button>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 rounded-xl overflow-hidden"
                        style={{
                          minWidth: "600px",
                          background: "rgba(12,12,18,0.98)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          backdropFilter: "blur(24px)",
                          boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                          zIndex: 9999,
                        }}
                        onMouseEnter={handleDropdownMouseEnter}
                        onMouseLeave={handleDropdownMouseLeave}
                      >
                        <div className="grid grid-cols-2">
                          {/* Left column */}
                          <div className="p-4" style={{ borderRight: "1px solid rgba(255,255,255,0.07)" }}>
                            <p
                              className="font-mono text-[0.6rem] uppercase tracking-[0.15em] mb-3 px-2"
                              style={{ color: "rgba(255,255,255,0.55)" }}
                            >
                              Construire &amp; Automatiser
                            </p>
                            {expertisesLeft.map((item) => (
                              <Link
                                key={item.path}
                                href={item.path}
                                onClick={() => setIsDropdownOpen(false)}
                                className="flex items-start gap-3 px-2 py-2.5 rounded-lg transition-colors duration-150"
                                style={{
                                  background: pathname === item.path ? "rgba(255,255,255,0.06)" : "transparent",
                                }}
                                onMouseEnter={(e) => {
                                  if (pathname !== item.path)
                                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.05)";
                                }}
                                onMouseLeave={(e) => {
                                  if (pathname !== item.path)
                                    (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                                }}
                              >
                                <item.icon size={16} style={{ color: "#c9fe6e", flexShrink: 0, marginTop: 2 }} />
                                <div>
                                  <p className="text-sm font-medium text-white leading-snug">{item.label}</p>
                                  <p className="text-xs leading-snug" style={{ color: "rgba(255,255,255,0.45)" }}>{item.description}</p>
                                </div>
                              </Link>
                            ))}
                          </div>

                          {/* Right column */}
                          <div className="p-4">
                            <p
                              className="font-mono text-[0.6rem] uppercase tracking-[0.15em] mb-3 px-2"
                              style={{ color: "rgba(255,255,255,0.55)" }}
                            >
                              Analyser &amp; Accompagner
                            </p>
                            {expertisesRight.map((item) => (
                              <Link
                                key={item.path}
                                href={item.path}
                                onClick={() => setIsDropdownOpen(false)}
                                className="flex items-start gap-3 px-2 py-2.5 rounded-lg transition-colors duration-150"
                                style={{
                                  background: pathname === item.path ? "rgba(255,255,255,0.06)" : "transparent",
                                }}
                                onMouseEnter={(e) => {
                                  if (pathname !== item.path)
                                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.05)";
                                }}
                                onMouseLeave={(e) => {
                                  if (pathname !== item.path)
                                    (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                                }}
                              >
                                <item.icon size={16} style={{ color: "#c9fe6e", flexShrink: 0, marginTop: 2 }} />
                                <div>
                                  <p className="text-sm font-medium text-white leading-snug">{item.label}</p>
                                  <p className="text-xs leading-snug" style={{ color: "rgba(255,255,255,0.45)" }}>{item.description}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* CTA bar */}
                        <div
                          className="flex items-center justify-between px-6 py-3"
                          style={{ borderTop: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}
                        >
                          <span className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                            Pas sûr par où commencer ?
                          </span>
                          <button
                            onClick={() => { setIsDropdownOpen(false); setIsQuizOpen(true); }}
                            className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                            style={{ background: "#c9fe6e", color: "#000", border: "none", cursor: "pointer" }}
                          >
                            Faites le quiz
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Other nav links */}
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className="font-mono text-[0.7rem] uppercase tracking-[0.1em] relative transition-colors duration-300 hover:text-white group whitespace-nowrap"
                    style={{
                      color: pathname === link.path
                        ? "var(--text-primary)"
                        : "var(--text-secondary)",
                    }}
                  >
                    {link.label}
                    <span
                      className="absolute -bottom-1 left-0 h-[2px] transition-all duration-400 group-hover:w-full"
                      style={{
                        background: "var(--violet)",
                        width: pathname === link.path ? "100%" : "0%",
                      }}
                    />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Right - CTA */}
          {!isMinimalNavbar && (
            <div className="global-padding-x flex justify-end items-center">
              <Link
                href="/contact"
                onClick={() => { trackCTAClick("estime_projet", "navbar"); }}
                className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 font-mono text-[0.75rem] font-semibold uppercase tracking-[0.1em] rounded-md transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_0_40px_var(--accent-glow)]"
                style={{
                  background: "var(--ad-1)",
                  color: "#000",
                  boxShadow: "0 0 20px var(--accent-dim)",
                }}
              >
                Estimer mon projet →
              </Link>

              <button
                onClick={toggleMobileMenu}
                className="lg:hidden w-12 h-12 flex items-center justify-center"
                style={{ color: "var(--text-primary)", background: "none", border: "none" }}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className="lg:hidden w-full overflow-hidden h-0"
          style={{ background: "rgba(10,10,15,0.98)" }}
        >
          <div className="global-padding">
            <div>
              <div className="space-y-1">
                {/* Nos expertises accordion */}
                <div className="mobile-nav-item">
                  <button
                    className="flex items-center justify-between w-full text-2xl py-1 transition-colors hover:text-[var(--ad-1)]"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--text-primary)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                    onClick={() => setIsMobileExpertisesOpen(!isMobileExpertisesOpen)}
                  >
                    Nos expertises
                    <ChevronDown
                      size={20}
                      className="transition-transform duration-200"
                      style={{ transform: isMobileExpertisesOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                    />
                  </button>

                  <AnimatePresence>
                    {isMobileExpertisesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="py-2 pl-4 space-y-0.5" style={{ borderLeft: "2px solid rgba(201,254,110,0.3)" }}>
                          {[...expertisesLeft, ...expertisesRight].map((item) => (
                            <Link
                              key={item.path}
                              href={item.path}
                              onClick={closeMobileMenu}
                              className="flex items-center gap-3 py-2 text-base transition-colors hover:text-[var(--ad-1)]"
                              style={{ color: "var(--text-secondary)" }}
                            >
                              <item.icon size={14} style={{ color: "#c9fe6e" }} />
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {navLinks.map((link, index) => (
                  <Link
                    key={`nav-${index}`}
                    href={link.path}
                    onClick={closeMobileMenu}
                    className="mobile-nav-item block text-2xl py-1 transition-colors hover:text-[var(--ad-1)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="mobile-nav-item pt-8 flex flex-col gap-y-2">
                <Link
                  href="/prendre-rendez-vous"
                  onClick={() => { closeMobileMenu(); trackCTAClick("reserver_appel", "navbar_mobile"); trackBookingClick(); }}
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
                  onClick={() => { closeMobileMenu(); trackCTAClick("estime_projet", "navbar_mobile"); }}
                  className="block w-full text-center py-3 font-mono text-xs uppercase tracking-wider rounded-md font-semibold"
                  style={{
                    background: "var(--ad-1)",
                    color: "#000",
                  }}
                >
                  Estimer mon projet →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed z-[39] top-0 left-0 w-full h-full backdrop-blur"
          style={{ background: "rgba(10,10,15,0.5)" }}
          onClick={closeMobileMenu}
        />
      )}
    </>
  );
}
