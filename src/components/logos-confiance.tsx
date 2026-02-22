import LogosSlider from "./logos-slider";

export default function LogosConfiance() {
  return (
    <section
      className="relative z-10 select-none"
      style={{
        background: "rgba(10,10,15,0.85)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="overflow-hidden max-w-[1400px] mx-auto">
        <div className="py-12">
          <LogosSlider />
        </div>
      </div>
    </section>
  );
}
