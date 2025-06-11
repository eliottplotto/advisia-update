import { VariantProps } from "class-variance-authority";
import { Button, buttonVariants } from "@/components/ui/button";

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
  const { dark, bg, layout, heading, description, buttons, image, legend } = {
    ...Header1Defaults,
    ...props,
  };

  return (
    <section
      className={`bg-background text-foreground py-16 md:py-24 lg:py-32 ${dark ? "dark" : ""} ${bg ? `bg-${bg}` : ""}`}
    >
      <div className="container-md">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div className={`${layout === "imgLeft" ? "order-1" : ""}`}>
            <h2 className="mb-5 text-4xl md:text-6xl lg:text-7xl md:mb-6">
              {heading}
            </h2>
            <p className="md:text-md">{description}</p>
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
          </div>
          <div className={`${layout === "imgLeft" ? "order-0" : ""} relative`}>
            <img
              src={image.src}
              className="w-full object-cover"
              alt={image.alt}
            />
            {legend && (
              <div className="dark bg-background text-foreground absolute bottom-4 left-4 p-3">
                <p className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-blue-600"></span>
                  {legend.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {legend.subtitle}
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
