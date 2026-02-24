import LogosToolsSlider from "./logos-tools-slider";
export default function NosOutils() {
  return (
    <section
      className="select-none"
      style={{
        background: "rgba(10,10,15,0.85)",
        borderTop: "1px solid var(--border)",
        color: "var(--text-primary)",
      }}
    >
      <div className="overflow-hidden max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="py-12">
          <h2
            className="font-mono text-xs text-center uppercase tracking-[0.15em] mb-12"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Les outils qu&apos;on utilise au quotidien
          </h2>
          <LogosToolsSlider />
        </div>
      </div>
    </section>
  );
}
