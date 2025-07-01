"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { RiArrowDownSFill, RiArrowRightUpFill } from "@remixicon/react";
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

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const servicesMenuRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const logoRef = useRef<SVGSVGElement | null>(null);

  useGSAP(() => {
    if (servicesMenuRef.current) {
      tl.current = gsap
        .timeline({ paused: true })
        .to(servicesMenuRef.current, {
          height: "auto",
          duration: 0.5,
          ease: "power3.out",
        })
        .fromTo(
          servicesMenuRef.current.querySelectorAll("li"),
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.2,
            stagger: 0.05,
            ease: "power5.out",
          },
          "-=0.3"
        );
    }
  }, []);

  //Transition Couleur Logo
  useGSAP(() => {
    const sections = document.querySelectorAll("section[data-theme]");

    sections.forEach((section) => {
      const theme = section.getAttribute("data-theme");

      ScrollTrigger.create({
        trigger: section,
        start: "top 5%",
        end: "bottom 5%",
        onEnter: () => {
          if (theme === "light") {
            logoRef.current?.classList.remove("text-white");
            logoRef.current?.classList.add("text-black");
          } else {
            logoRef.current?.classList.remove("text-black");
            logoRef.current?.classList.add("text-white");
          }
        },
        onEnterBack: () => {
          if (theme === "light") {
            logoRef.current?.classList.remove("text-white");
            logoRef.current?.classList.add("text-black");
          } else {
            logoRef.current?.classList.remove("text-black");
            logoRef.current?.classList.add("text-white");
          }
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const toggleServicesMenu = () => {
    if (tl.current) {
      if (isMenuOpen) {
        tl.current.reverse();
      } else {
        tl.current.play();
      }
      setIsMenuOpen(!isMenuOpen);
    }
  };

  const closeServicesMenu = () => {
    if (tl.current) {
      if (isMenuOpen) {
        tl.current.reverse();
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <>
      <nav className="fixed top-0 z-40 w-full">
        <div className="main-layout">
          {/* Left */}
          <div className="global-padding flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Logo ref={logoRef} className="text-white" />
            </Link>
          </div>

          {/* Center Navigation */}
          <div className="hidden md:flex md:justify-center md:items-center">
            <div className="flex justify-center items-center gap-1">
              <Button variant="secondary" onClick={toggleServicesMenu}>
                Expertises
                <RiArrowDownSFill
                  className={`transition-transform duration-300 ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </Button>
              <Button asChild variant="secondary" onClick={closeServicesMenu}>
                <Link href="/projets">Projets</Link>
              </Button>
              <Button asChild variant="secondary" onClick={closeServicesMenu}>
                <Link href="/agence">Agence</Link>
              </Button>
            </div>
          </div>

          {/* Right */}
          <div className="hidden global-padding md:flex md:justify-end md:items-center">
            <Button onClick={closeServicesMenu} asChild>
              <Link href="/contact">
                Demander un devis
                <RiArrowRightUpFill />
              </Link>
            </Button>
          </div>
        </div>

        {/* Services Menu */}
        <div ref={servicesMenuRef} className="w-full overflow-hidden h-0">
          <ul className="container-md mx-auto grid grid-cols-5 gap-1 py-4">
            {servicesLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  onClick={() => {
                    tl.current?.reverse();
                    setIsMenuOpen(false);
                  }}
                >
                  <div className="group flex flex-col justify-between bg-secondary min-h-32 p-2 hover:bg-neutral-200">
                    <Image
                      src="/sample.svg"
                      alt="image"
                      width={40}
                      height={40}
                      className="group-hover:rotate-360 transition-transform ease-in-out duration-400"
                    />
                    <p className="text-xl">{link.label}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {isMenuOpen && (
        <div
          className="fixed z-39 top-0 left-0 w-full h-full bg-primary/50 backdrop-blur supports-[backdrop-filter]:bg-primary/50"
          onClick={() => {
            tl.current?.reverse();
            setIsMenuOpen(false);
          }}
        ></div>
      )}
    </>
  );
}
