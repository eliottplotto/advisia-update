import type { Temoignage } from "@/types/sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/client";
import { RevealText } from "@/components/RevealText";

type ImageProps = {
  src: string;
  alt?: string;
};

interface TestimonialProps {
  dark?: boolean;
  bg?: string;
  testimonial: Temoignage;
}

export default function Testimonial1({
  dark,
  bg,
  testimonial,
}: TestimonialProps) {
  if (!testimonial) {
    return null;
  }

  return (
    <section
      className={`text-foreground py-0 md:py-24 lg:py-32 bg-ascii-2 ${dark ? "dark" : ""} ${bg ? `bg-${bg}` : "bg-secondary"}`}
    >
      <div className="main-layout">
        <div className="lg:col-start-2 grid grid-col-1 md:grid-cols-4 p-4 md:p-6 lg:p-0">
          <div className="col-span-1">
            {testimonial.photo && (
              <Image
                src={urlFor(testimonial.photo).width(500).height(500).url()}
                alt={`Photo de ${testimonial.prenom} ${testimonial.nom}`}
                width={500}
                height={500}
                className="w-full aspect-square object-cover"
              />
            )}
          </div>
          <div className="col-span-3 flex flex-col justify-between md:gap-32 p-4 md:p-6 lg:p-8 bg-background">
            <div>
              <RevealText
                as="blockquote"
                className="text-2xl md:text-4xl lg:text-5xl mb-4 md:mb-8"
              >
                &ldquo;{testimonial.citation}&rdquo;
              </RevealText>
              <p className="text-lg md:text-2xl lg:text-3xl">
                {testimonial.prenom} {testimonial.nom} &#183;{" "}
                {testimonial.poste} &#183; {testimonial.entreprise}
              </p>
            </div>
            {testimonial.logo && (
              <Image
                src={urlFor(testimonial.logo).width(100).height(100).url()}
                alt={`Logo de ${testimonial.entreprise}`}
                width={100}
                height={100}
                className="w-auto max-w-[128px]"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
