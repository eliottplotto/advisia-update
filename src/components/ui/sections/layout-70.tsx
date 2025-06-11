import { VariantProps } from "class-variance-authority";
import { Button, buttonVariants } from "@/components/ui/button";

type ButtonItem = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    title?: string;
    asChild?: boolean;
    children?: React.ReactNode;
  };

type ListItemProps = {
  icon: React.ReactNode;
  text: string;
};

type Props = {
  dark: boolean;
  bg?: string;
  heading: string;
  description?: string;
  buttons?: ButtonItem[];
  list?: ListItemProps[];
};

export type Layout70Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Layout70 = (props: Layout70Props) => {
  const { dark, bg, heading, description, buttons, list } = {
    ...Header1Defaults,
    ...props,
  };

  return (
    <section
      className={`bg-background text-foreground py-16 md:py-24 lg:py-32 ${dark ? "dark" : ""} ${bg ? `bg-${bg}` : ""}`}
    >
      <div className="container-md">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2">
          {/* Heading */}
          <div>
            <h1 className="mb-5 text-4xl md:text-6xl md:mb-6">{heading}</h1>
          </div>
          {/* Content */}
          <div className="flex flex-col gap-8">
            {description && <p>{description}</p>}

            {/* List */}
            {list && (
              <ul className="flex flex-col gap-3">
                {list?.map((listItem, index) => (
                  <li key={index} className="flex items-center gap-3">
                    {listItem.icon}
                    <p>{listItem.text}</p>
                  </li>
                ))}
              </ul>
            )}

            {/* Buttons */}
            <div className="flex flex-wrap gap-1">
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
        </div>
      </div>
    </section>
  );
};

export const Header1Defaults: Props = {
  dark: false,
  heading: "Medium length hero heading goes here",
};
