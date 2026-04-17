import Image from "next/image";
import ContactForm from "./contact-form";
import { Check, Phone } from "lucide-react";
import TrackedLink from "./ui/tracked-link";
import type { ElementType, ReactNode } from "react";
import { Suspense } from "react";
import { RevealText } from "./reveal-text";

interface SectionContactFormProps {
  as?: ElementType;
  title?: ReactNode;
}

export default function SectionContactForm({
  as = "h2",
  title,
  ...props
}: SectionContactFormProps) {
  const Tag = as;

  const defaultTitle = (
    <>
      Racontez-nous votre{" "}
      <span className="text-nowrap">problème.</span>
    </>
  );

  const profils = [
    {
      alt: "Eliott P.",
      src: "/eliott-plotto.jpeg",
    },
    {
      alt: "Julien C.",
      src: "/julien.jpeg",
    },

    {
      alt: "Enzo F.",
      src: "/pp1.jpg",
    },
  ];

  return (
    <section
      style={{
        background: "rgba(10,10,15,0.85)",
        color: "var(--text-primary)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="px-4 md:px-8 lg:px-12 py-12 md:py-16 grid lg:grid-cols-2 gap-x-16 gap-y-8">
          <div className="space-y-6">
            <div
              className="py-1.5 px-3 mb-0 flex items-center gap-2 w-fit rounded-full"
              style={{
                background: "rgba(124,58,237,0.08)",
                border: "1px solid rgba(124,58,237,0.15)",
              }}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: "var(--ad-1)" }}
              />
              <p
                className="text-xs font-mono uppercase tracking-[0.15em]"
                style={{ color: "var(--text-secondary)" }}
              >
                Réponse sous 48h
              </p>
            </div>
            <div className="mt-8">
              <div className="flex items-center">
                {profils.map((profil, index) => (
                  <Image
                    key={index}
                    src={profil.src}
                    alt={profil.alt}
                    width={48}
                    height={48}
                    className="inline-block not-first:-ml-2 w-12 h-12 rounded-full object-cover"
                    style={{ border: "2px solid var(--violet-dim)" }}
                  />
                ))}
              </div>
              <p
                className="mt-3 text-xs font-mono uppercase tracking-[0.15em]"
                style={{ color: "var(--text-secondary)" }}
              >
                Eliott · Julien · Enzo — fondateurs Advisia
              </p>
            </div>

            <Tag
              className="text-4xl lg:text-5xl xl:text-6xl font-bold"
              style={{ fontFamily: "var(--font-display)" }}
              {...props}
            >
              <RevealText>{title || defaultTitle}</RevealText>
            </Tag>

            <p
              className="max-w-xl text-base"
              style={{ color: "var(--text-secondary)" }}
            >
              Décrivez votre besoin en quelques lignes. On vous répond sous
              48h avec une première analyse — gratuit, sans engagement.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div
                  className="p-1.5 rounded-lg"
                  style={{
                    background: "rgba(124,58,237,0.1)",
                    border: "1px solid rgba(124,58,237,0.15)",
                  }}
                >
                  <Check style={{ color: "var(--ad-1)" }} size={18} />
                </div>
                <span style={{ color: "var(--text-secondary)" }}>
                  Réponse sous 48h
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div
                  className="p-1.5 rounded-lg"
                  style={{
                    background: "rgba(124,58,237,0.1)",
                    border: "1px solid rgba(124,58,237,0.15)",
                  }}
                >
                  <Check style={{ color: "var(--ad-1)" }} size={18} />
                </div>
                <span style={{ color: "var(--text-secondary)" }}>
                  Estimation chiffrée offerte
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div
                  className="p-1.5 rounded-lg"
                  style={{
                    background: "rgba(124,58,237,0.1)",
                    border: "1px solid rgba(124,58,237,0.15)",
                  }}
                >
                  <Check style={{ color: "var(--ad-1)" }} size={18} />
                </div>
                <span style={{ color: "var(--text-secondary)" }}>
                  Zéro engagement, zéro jargon
                </span>
              </li>
            </ul>
            <div className="lg:hidden space-y-6">
              <TrackedLink
                href="/prendre-rendez-vous"
                trackingLabel="reserver_appel"
                trackingPage="section-cta-form-mobile"
                isBooking
                className="block w-full text-center py-3 font-mono text-xs uppercase tracking-wider rounded-lg transition-all duration-300"
                style={{
                  background: "rgba(124,58,237,0.1)",
                  border: "1px solid rgba(124,58,237,0.3)",
                  color: "var(--text-primary)",
                }}
              >
                R&eacute;server un appel{" "}
                <Phone className="inline ml-1" size={14} />
              </TrackedLink>
              <p
                className="font-mono text-xs uppercase text-center tracking-wider"
                style={{ color: "var(--text-muted)" }}
              >
                ou compl&eacute;tez le formulaire ci-dessous
              </p>
            </div>
            <div className="hidden lg:flex items-center gap-4 flex-wrap">
              <p style={{ color: "var(--text-secondary)" }}>
                Vous pr&eacute;f&eacute;rez planifier un rendez-vous ?
              </p>
              <TrackedLink
                href="/prendre-rendez-vous"
                trackingLabel="reserver_appel"
                trackingPage="section-cta-form-desktop"
                isBooking
                className="inline-flex items-center gap-2 px-4 py-2 font-mono text-xs uppercase tracking-wider rounded-lg transition-all duration-300 hover:bg-[rgba(124,58,237,0.15)]"
                style={{
                  background: "rgba(124,58,237,0.08)",
                  border: "1px solid rgba(124,58,237,0.2)",
                  color: "var(--text-primary)",
                }}
              >
                R&eacute;server un appel <Phone size={14} />
              </TrackedLink>
            </div>
          </div>

          <Suspense>
            <ContactForm />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
