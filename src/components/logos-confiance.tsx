import LogosSlider from "./logos-slider";

export default function LogosConfiance() {
  return (
    <section className="select-none" style={{ background: "transparent" }}>
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
        <p
          className="text-center text-sm uppercase tracking-widest pt-6 pb-2"
          style={{
            color: "rgba(255,255,255,0.35)",
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          Ils nous ont fait confiance
        </p>
      </div>
      <div className="overflow-hidden max-w-[1400px] mx-auto">
        <div className="py-8">
          <LogosSlider />
        </div>
      </div>
    </section>
  );
}
