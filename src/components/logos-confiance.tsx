import LogosSlider from "./logos-slider";

export default function LogosConfiance() {
  return (
    <section className="dark bg-blue-600">
      <div className="container-md">
        <div className="lg:border-x overflow-hidden">
          {/*<h2 className="text-sm font-mono uppercase text-muted-foreground text-center mt-8 md:mt-20">
          Ils font confiance à Advisia
        </h2>
         
        <div className="flex no-wrap items-center justify-evenly py-16">
          <img src="/advisia-logo-black-h32.svg" alt="Logo" className="w-36" />
          <img src="/advisia-logo-black-h32.svg" alt="Logo" className="w-36" />
          <img src="/advisia-logo-black-h32.svg" alt="Logo" className="w-36" />
          <img src="/advisia-logo-black-h32.svg" alt="Logo" className="w-36" />
          <img src="/advisia-logo-black-h32.svg" alt="Logo" className="w-36" />
        </div> */}
          <div className="py-12">
            <LogosSlider />
          </div>
        </div>
      </div>
    </section>
  );
}
