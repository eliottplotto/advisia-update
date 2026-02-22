"use client";

import { useState, useEffect } from "react";
import React from "react";

import { VariantProps } from "class-variance-authority";
import { Button, buttonVariants } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { RevealText } from "@/components/reveal-text";
import Image from "next/image";

type ButtonItem = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    title?: string;
    asChild?: boolean;
    children?: React.ReactNode;
  };

type SectionProps = {
  image: string;
  heading: string;
  description: string;
};

type Props = {
  dark: boolean;
  heading: string;
  subheading?: string;
  sections: SectionProps[];
  buttons?: ButtonItem[];
};

export type LeaderSecteurProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const LeaderSecteur = (props: LeaderSecteurProps) => {
  const { dark, heading, subheading, sections, buttons } = {
    ...LeaderSecteurDefaults,
    ...props,
  };

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section
      className={`relative z-10 ${dark ? "dark" : ""} text-foreground bg-secondary py-8 lg:py-16`}
    >
      <div className="container-md global-padding-x">
        <div className="text-center mb-8 lg:mb-16">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl max-w-4xl mx-auto">
            <RevealText>{heading}</RevealText>
          </h2>
          {subheading && (
            <p className="max-w-2xl mx-auto mt-6 text-muted-foreground">
              {subheading}
            </p>
          )}
        </div>
        <div>
          {/* Desktop Content */}
          <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-3 items-stretch gap-2">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-background p-4 global-padding rounded-md border"
              >
                <Image
                  src={section.image}
                  alt={section.heading}
                  className="w-full object-center object-cover aspect-2/1 rounded-sm mb-4"
                  width={500}
                  height={250}
                  quality={60}
                />
                <h3 className="mb-4 text-xl lg:text-2xl">{section.heading}</h3>
                <p className="text-muted-foreground">{section.description}</p>
              </div>
            ))}
          </div>

          {/* Mobile Content (Slider) */}
          <div className="lg:hidden">
            <Carousel
              setApi={setApi}
              opts={{
                align: "center",
                loop: true,
              }}
            >
              <CarouselContent className="-ml-4">
                {sections.map((section, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-2 basis-[85%] sm:basis-[70%] md:basis-[60%]"
                  >
                    <div className="p-4 select-none bg-background rounded-md border">
                      <Image
                        src={section.image}
                        alt={section.heading}
                        className="w-full object-center object-cover aspect-2/1 rounded-sm mb-4"
                        width={400}
                        height={200}
                        quality={60}
                      />
                      <h3 className="mb-4 text-xl">{section.heading}</h3>
                      <p className="text-muted-foreground">
                        {section.description}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Navigation buttons below the carousel */}
              <div className="flex justify-center items-center gap-4 mt-4">
                <CarouselPrevious className="static translate-y-0" />

                {/* Dots indicators */}
                <div className="flex justify-center gap-2">
                  {Array.from({ length: count }).map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        index === current - 1 ? "bg-foreground" : "bg-stone-300"
                      }`}
                      onClick={() => api?.scrollTo(index)}
                      aria-label={`Aller à la slide ${index + 1}`}
                    />
                  ))}
                </div>

                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          </div>

          {/* Buttons */}
          {buttons && buttons.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-1 md:mt-8">
              {buttons.map((button, index) => {
                const { title, asChild, children, ...rest } = button;

                if (asChild && children) {
                  return (
                    <Button key={index} asChild {...rest}>
                      {children}
                    </Button>
                  );
                }

                return (
                  <Button key={index} {...rest}>
                    {title}
                  </Button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export const LeaderSecteurDefaults: Props = {
  dark: false,
  heading: "Long heading is what you see here in this feature section",
  sections: [
    {
      image: "/placeholder.jpg",
      heading: "Long heading is what you see here in this feature section",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    },
    {
      image: "/placeholder.jpg",
      heading: "Long heading is what you see here in this feature section",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    },
    {
      image: "/placeholder.jpg",
      heading: "Long heading is what you see here in this feature section",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    },
    {
      image: "/placeholder.jpg",
      heading: "Long heading is what you see here in this feature section",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    },
  ],
};
