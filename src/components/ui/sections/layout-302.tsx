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

import { RiBox2Fill } from "@remixicon/react";

type ButtonItem = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    title?: string;
    asChild?: boolean;
    children?: React.ReactNode;
  };

type SectionProps = {
  icon: React.ReactNode;
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

export type Layout302Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Layout302 = (props: Layout302Props) => {
  const { dark, heading, subheading, sections, buttons } = {
    ...Layout302Defaults,
    ...props,
  };

  // CarouselApi
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section
      className={`${dark ? "dark" : ""} text-foreground bg-background py-16 md:py-24 lg:py-28`}
    >
      {/* Heading */}
      <div className="container-md rb-8 mb-8 w-full md:mb-16 lg:mb-24 text-center">
        <h3 className="text-4xl md:text-6xl lg:text-7xl">{heading}</h3>
        {subheading && (
          <p className="text-lg md:text-xl mt-4 md:mt-6 max-w-3xl mx-auto">
            {subheading}
          </p>
        )}
      </div>

      {/* Content */}
      <div className="lg:border-y">
        {/* Desktop Content */}
        <div className="hidden container-md lg:grid lg:grid-cols-4 items-strech">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`p-4 md:p-6 lg:p-8 nth-[4n]:border-r nth-[4n+1]:border-l
              ${index % 4 !== 3 ? "border-r" : ""}
              ${index < 4 ? "border-b" : ""}`}
            >
              <div className="mb-5 md:mb-6 p-4 w-fit bg-secondary">
                {section.icon}
              </div>
              <h3 className="mb-5 text-xl md:mb-6 md:text-2xl">
                {section.heading}
              </h3>
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
            <CarouselContent className="-ml-2">
              {sections.map((section, index) => (
                <CarouselItem key={index} className="pl-2 basis-4/5">
                  <div className="p-4 select-none bg-secondary">
                    <div className="mb-5 md:mb-6 p-4 w-fit bg-background">
                      {section.icon}
                    </div>
                    <h3 className="mb-4 text-2xl">{section.heading}</h3>
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
                      index === current - 1 ? "bg-blue-600" : "bg-neutral-400"
                    }`}
                    onClick={() => api?.scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex flex-wrap gap-1 md:mt-8">
        {buttons?.map((button, index) => {
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
    </section>
  );
};

export const Layout302Defaults: Props = {
  dark: false,
  heading: "Long heading is what you see here in this feature section",
  sections: [
    {
      icon: <RiBox2Fill size={32} />,
      heading: "Long heading is what you see here in this feature section",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    },
    {
      icon: <RiBox2Fill size={32} />,
      heading: "Long heading is what you see here in this feature section",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    },
    {
      icon: <RiBox2Fill size={32} />,
      heading: "Long heading is what you see here in this feature section",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    },
    {
      icon: <RiBox2Fill size={32} />,
      heading: "Long heading is what you see here in this feature section",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    },
  ],
};
