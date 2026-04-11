import Link from "next/link";
import Footer from "@/components/footer";

export default function NotFound() {
  return (
    <>
      <main
        className="min-h-screen flex flex-col items-center justify-center px-4 text-center"
        style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}
      >
        <p
          className="font-bold leading-none select-none pointer-events-none"
          style={{
            fontSize: "clamp(8rem, 20vw, 14rem)",
            color: "rgba(255,255,255,0.05)",
            fontFamily: "var(--font-display)",
            lineHeight: 1,
          }}
          aria-hidden="true"
        >
          404
        </p>
        <div className="-mt-12 relative z-10">
          <h1
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Cette page n&apos;existe pas ou a été déplacée.
          </h1>
          <p className="text-base mb-10 max-w-sm mx-auto" style={{ color: "var(--text-secondary)" }}>
            Vous avez peut-être suivi un lien obsolète. Pas de panique — voici par où commencer.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,254,110,0.2)] hover:scale-[1.02]"
              style={{ background: "#c9fe6e", color: "#0a0a0f" }}
            >
              Retour à l&apos;accueil
            </Link>
            <Link
              href="/?quiz=open"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm transition-all duration-300 hover:bg-[rgba(124,58,237,0.1)]"
              style={{ border: "1px solid rgba(124,58,237,0.3)", color: "var(--text-primary)" }}
            >
              Par où commencer ?
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
