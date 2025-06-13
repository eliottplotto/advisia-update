import type { Temoignage } from "@/types/sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/client";

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
      className={`text-foreground py-16 md:py-24 lg:py-32 ${dark ? "dark" : ""} ${bg ? `bg-${bg}` : "bg-background"}`}
    >
      <div className="container-md">
        {testimonial.logo && (
          <Image
            src={urlFor(testimonial.logo).width(100).height(100).url()}
            alt={`Logo de ${testimonial.entreprise}`}
            width={100}
            height={100}
            className="rounded-full object-cover"
          />
        )}
        <blockquote>{testimonial.citation}</blockquote>
        {testimonial.photo && (
          <Image
            src={urlFor(testimonial.photo).width(100).height(100).url()}
            alt={`Photo de ${testimonial.prenom} ${testimonial.nom}`}
            width={100}
            height={100}
            className="rounded-full object-cover"
          />
        )}
        <p>
          {testimonial.prenom} {testimonial.nom} &#183; {testimonial.poste}{" "}
          &#183; {testimonial.entreprise}
        </p>
      </div>
    </section>
  );
}
