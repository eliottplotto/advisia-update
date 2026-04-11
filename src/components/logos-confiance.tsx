import LogosSlider from "./logos-slider";

export default function LogosConfiance() {
  return (
    <section
      className="select-none"
      style={{
        background: "transparent",
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
