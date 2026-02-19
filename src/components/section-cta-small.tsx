import Link from "next/link";
import { RiArrowRightFill } from "@remixicon/react";
import { RevealText } from "./reveal-text";

export default function SectionCTASmall() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "rgba(10,10,15,0.85)",
        borderTop: "1px solid var(--border)",
        color: "var(--text-primary)",
      }}
    >
      {/* Subtle glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full opacity-20 blur-[100px] pointer-events-none"
        style={{ background: "var(--violet)" }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 py-16 lg:py-24 flex flex-col justify-center items-center text-center">
        <div className="section-label mb-6">● Vous avez un projet ?</div>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-2xl mb-8"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <RevealText>
            Contactez-nous et cr&eacute;ons ensemble quelque chose{" "}
            <span className="gradient-text">d&#39;unique</span>
          </RevealText>
        </h2>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[0.1em] rounded-lg transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_0_40px_var(--accent-glow)]"
            style={{
              background: "var(--ad-1)",
              color: "#000",
              boxShadow: "0 0 20px var(--accent-dim)",
            }}
          >
            J&apos;estime mon projet <RiArrowRightFill size={16} />
          </Link>
          <Link
            href="/prendre-rendez-vous"
            className="inline-flex items-center gap-2 px-6 py-3 font-mono text-xs uppercase tracking-[0.1em] rounded-lg transition-all duration-300 hover:bg-[rgba(124,58,237,0.15)]"
            style={{
              border: "1px solid rgba(124,58,237,0.3)",
              color: "var(--text-primary)",
            }}
          >
            R&eacute;server un appel
          </Link>
        </div>
      </div>
    </section>
  );
}
