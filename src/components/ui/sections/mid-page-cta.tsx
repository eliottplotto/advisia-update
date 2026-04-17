import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface MidPageCTAProps {
  title: string;
  subtitle: string;
  buttonText: string;
  href?: string;
  showFaqLink?: boolean;
}

export default function MidPageCTA({
  title,
  subtitle,
  buttonText,
  href = "/contact",
  showFaqLink = false,
}: MidPageCTAProps) {
  return (
    <section
      className="py-16 md:py-20 px-4 md:px-8 lg:px-12"
      style={{
        background: "transparent",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="max-w-[700px] mx-auto text-center space-y-5">
        <h3
          className="text-2xl md:text-3xl font-bold"
          style={{ fontFamily: "var(--font-display)", color: "#fff" }}
        >
          {title}
        </h3>
        <p
          className="text-base md:text-lg"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          {subtitle}
        </p>
        <div>
          <Link
            href={href}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,254,110,0.2)] hover:scale-[1.02]"
            style={{ background: "#c9fe6e", color: "#0a0a0f" }}
          >
            {buttonText}
            <ArrowUpRight size={16} />
          </Link>
          {showFaqLink && (
            <a
              href="#faq"
              className="block text-center mt-3 text-xs font-mono transition-colors hover:text-[#c9fe6e]"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Ou consultez notre FAQ ↓
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
