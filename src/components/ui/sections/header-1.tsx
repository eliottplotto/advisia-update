import { VariantProps } from "class-variance-authority";
import { Button, buttonVariants } from "@/components/ui/button";
import { RevealText } from "@/components/reveal-text";

type ImageProps = {
  src: string;
  alt?: string;
};

type LegendProps = {
  title: string;
  subtitle: string;
};

type ButtonItem = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    title?: string;
    asChild?: boolean;
    children?: React.ReactNode;
  };

type Props = {
  dark: boolean;
  bg?: string;
  layout: "imgRight" | "imgLeft";
  heading: string;
  description: string;
  image: ImageProps;
  buttons?: ButtonItem[];
  legend?: LegendProps;
};

export type Header1Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Header1 = (props: Header1Props) => {
  const { layout, heading, description, buttons, image, legend } = {
    ...Header1Defaults,
    ...props,
  };

  return (
    <section
      className="pt-4 pb-8 lg:py-16"
      style={{
        background: "rgba(10,10,15,0.85)",
        color: "var(--text-primary)",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-8 lg:gap-16">
          <div
            className={`space-y-6 order-1 ${layout === "imgLeft" ? "" : "lg:order-0"}`}
          >
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <RevealText>{heading}</RevealText>
            </h2>
            <p className="md:text-md" style={{ color: "var(--text-secondary)" }}>
              {description}
            </p>
            <div className="flex flex-wrap gap-1">
              {buttons?.map((button, index) => {
                const { title, asChild, children, ...rest } = button;

                if (asChild && children) {
                  return (
                    <Button key={index} asChild {...rest} size={"lg"}>
                      {children}
                    </Button>
                  );
                }

                return (
                  <Button key={index} {...rest} size={"lg"}>
                    {title}
                  </Button>
                );
              })}
            </div>
          </div>
          <div
            className={`order-0 ${layout === "imgLeft" ? "lg:pr-8" : "lg:order-1 lg:pl-8"} relative`}
          >
            <img
              src={image.src}
              className="w-full object-cover rounded-2xl overflow-hidden"
              alt={image.alt}
              style={{ border: "1px solid var(--border)" }}
            />
            {legend && (
              <div
                className="absolute bottom-4 left-4 p-3 rounded-lg backdrop-blur-md"
                style={{
                  background: "rgba(10,10,15,0.8)",
                  border: "1px solid var(--border)",
                  color: "var(--text-primary)",
                }}
              >
                <p className="flex items-center gap-3">
                  <span
                    className="inline-block w-3 h-3"
                    style={{ background: "var(--ad-1)" }}
                  />
                  <span>
                    <span className="block">{legend.title}</span>
                    <span
                      className="block text-sm"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {legend.subtitle}
                    </span>
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Header1Defaults: Props = {
  dark: false,
  layout: "imgRight",
  heading: "Medium length hero heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Placeholder image",
  },
};
