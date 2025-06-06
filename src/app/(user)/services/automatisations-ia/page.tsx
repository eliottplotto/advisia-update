import { Button } from "@/components/ui/button";

export default function AutomatisationsIA() {
  return (
    <main className="main-wrapper">
      <section className="bg-background">
        <div className="container-md pt-32 pb-16">
          <div className="max-w-lg md:max-w-2xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6">
              Solutions IA et Automatisations
            </h1>
            <p className="text-md md:text-xl lg:text-2xl">
              Nous créons des automatisations set des agents IA sur-mesure qui
              travaillent pour vous, 24/7.
            </p>
            <div className="mt-8">
              <Button size="lg">Estimer mon projet</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="container bg-black h-screen flex items-center"></section>
    </main>
  );
}
