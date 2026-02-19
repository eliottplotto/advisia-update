import type { Review } from "@/sanity/lib/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/client";
import { RevealText } from "@/components/reveal-text";

interface TestimonialProps {
  dark?: boolean;
  bg?: string;
  testimonial: Review;
}

export default function Testimonial1({
  testimonial,
}: TestimonialProps) {
  if (!testimonial) {
    return null;
  }

  return (
    <section
      className="py-0 md:py-24 lg:py-32"
      style={{
        background: "var(--bg-secondary)",
        color: "var(--text-primary)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 p-4 md:p-6 lg:p-0">
          <div className="col-span-1">
            {testimonial.photo && (
              <Image
                src={
                  urlFor(testimonial.photo).width(500).height(500).url() ||
                  "/placeholder.svg"
                }
                alt={`Photo de ${testimonial.prenom} ${testimonial.nom}`}
                width={500}
                height={500}
                className="w-full aspect-square object-cover rounded-lg"
              />
            )}
          </div>
          <div
            className="col-span-3 flex flex-col justify-between md:gap-32 p-4 md:p-6 lg:p-8 rounded-lg"
            style={{ background: "var(--bg-card)" }}
          >
            <div>
              <blockquote
                className="text-2xl md:text-4xl mb-4 md:mb-8 font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <RevealText>&ldquo;{testimonial.citation}&rdquo;</RevealText>
              </blockquote>
              <p
                className="text-lg md:text-2xl lg:text-3xl"
                style={{ color: "var(--text-secondary)" }}
              >
                {testimonial.prenom} {testimonial.nom} &#183;{" "}
                {testimonial.poste} &#183; {testimonial.entreprise}
              </p>
            </div>
            {testimonial.logo && (
              <Image
                src={
                  urlFor(testimonial.logo).width(100).height(100).url() ||
                  "/placeholder.svg"
                }
                alt={`Logo de ${testimonial.entreprise}`}
                width={100}
                height={100}
                className="w-auto max-w-[128px] invert"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
