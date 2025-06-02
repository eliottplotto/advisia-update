export default function Services() {
  return (
    <section className="relative grid grid-cols-2 border-t">
      <div className="dark bg-background text-foreground container py-16">
        <h2 className="sticky top-16 text-4xl md:text-6xl lg:text-8xl">
          Services
        </h2>
      </div>
      <ul className="dark bg-background">
        <li className="sticky top-16 bg-[#FF98F1] p-4 min-h-128">
          <h3 className="text-2xl md:text-4xl lg:text-5xl">
            IA & Automatisations
          </h3>
        </li>
        <li className="sticky top-16 bg-[#F9B40D] p-4 min-h-128">
          <h3 className="text-2xl md:text-4xl lg:text-5xl">
            Site vitrine & e-Commerce
          </h3>
        </li>
        <li className="sticky top-16 bg-[#FF5A02] p-4 min-h-128">
          <h3 className="text-2xl md:text-4xl lg:text-5xl">Product Design</h3>
        </li>
        <li className="sticky top-16 bg-[#F9B40D] p-4 min-h-128">
          <h3 className="text-2xl md:text-4xl lg:text-5xl">Branding</h3>
        </li>
        <li className="sticky top-16 bg-[#FF98F1] p-4 min-h-128">
          <h3 className="text-2xl md:text-4xl lg:text-5xl">
            Marketing Digital
          </h3>
        </li>
      </ul>
    </section>
  );
}
