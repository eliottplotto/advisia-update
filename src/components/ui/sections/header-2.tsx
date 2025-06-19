import { VariantProps } from "class-variance-authority";
import { Button, buttonVariants } from "@/components/ui/button";
import { RevealText } from "@/components/RevealText";

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
  number?: number;
};

export type Header2Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Header2 = (props: Header2Props) => {
  const {
    dark,
    bg,
    layout,
    heading,
    description,
    buttons,
    image,
    legend,
    number,
  } = {
    ...Header2Defaults,
    ...props,
  };

  return (
    <section
      className={`group bg-background text-foreground pb-16 md:pb-24 lg:pb-32 md:not-first:border-t ${dark ? "dark" : ""} ${bg ? `bg-${bg}` : ""}`}
    >
      <div className="main-layout">
        {number && (
          <p className="hidden lg:block group-nth-[3n+1]:bg-[#F2BD1D] group-nth-[3n+2]:bg-[#F280CA] group-nth-[3n+3]:bg-[#FF5A02] text-4xl md:text-6xl lg:text-8xl w-fit h-fit pl-2 pr-8">
            {number}:
          </p>
        )}

        <div className="lg:col-start-2 grid grid-cols-1 lg:grid-cols-2">
          <div
            className={`${layout === "imgLeft" ? "order-1" : "order-1 md:order-0"} global-padding`}
          >
            <RevealText as="h2" className="mb-5 text-4xl md:text-6xl md:mb-6">
              {heading}
            </RevealText>
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
          <div
            className={`${layout === "imgLeft" ? "order-0" : "order-0 md:order-1"} relative`}
          >
            <img
              src={image.src}
              className="w-full aspect-square object-cover"
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

export const Header2Defaults: Props = {
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
