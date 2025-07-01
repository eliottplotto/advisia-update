type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  dark: boolean;
  bg?: string;
  heading: string;
  description: string;
  image: ImageProps;
};

export type Testimonial1Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Testimonial1 = (props: Testimonial1Props) => {
  const { dark, bg, heading, description, image } = {
    ...Testimonial1Defaults,
    ...props,
  };

  return (
    <section
      className={`bg-background text-foreground py-16 md:py-24 lg:py-32 ${dark ? "dark" : ""} ${bg ? `bg-${bg}` : ""}`}
    >
      <p>{heading}</p>
      <p>{description}</p>
      <img src={image.src} />
    </section>
  );
};

export const Testimonial1Defaults: Props = {
  dark: false,
  heading: "Medium length hero heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Placeholder image",
  },
};
