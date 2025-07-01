"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-mono uppercase disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive not-disabled:cursor-pointer",
  {
    variants: {
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-12 px-6 has-[>svg]:px-4",
        huge: "h-12 px-6 has-[>svg]:px-4 md:text-2xl md:px-16 md:py-12",
        icon: "size-9",
      },
      variant: {
        default: "bg-blue-600 text-white hover:bg-blue-700",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border border-foreground bg-transparent hover:bg-primary hover:text-primary-foreground dark:bg-transparent dark:border-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-neutral-200 dark:hover:bg-neutral-700",
        contrast:
          "bg-foreground text-background hover:bg-neutral-700 dark:hover:bg-neutral-200",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline px-0 has-[>svg]:px-0 py-0 h-auto",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

// Type guard to check if a value is a React element
const isReactElement = (
  child: React.ReactNode
): child is React.ReactElement => {
  return React.isValidElement(child);
};

// Type guard to check if props has children property
const hasChildrenProp = (
  props: any
): props is { children: React.ReactNode } => {
  return (
    props && typeof props === "object" && props !== null && "children" in props
  );
};

// Helper function to extract text content from React children
const extractTextFromChildren = (children: React.ReactNode): string => {
  if (typeof children === "string") {
    return children;
  }

  if (typeof children === "number") {
    return children.toString();
  }

  if (isReactElement(children)) {
    // Check if it has children prop with proper type checking
    if (hasChildrenProp(children.props)) {
      return extractTextFromChildren(children.props.children);
    }
    return "";
  }

  if (Array.isArray(children)) {
    return children
      .map((child) => extractTextFromChildren(child))
      .filter((text) => text.length > 0)
      .join(" ");
  }

  return "";
};

// Helper function to check if children contain only icons (SVG elements)
const hasOnlyIcons = (children: React.ReactNode): boolean => {
  if (isReactElement(children)) {
    return (
      children.type === "svg" ||
      (hasChildrenProp(children.props) &&
        isReactElement(children.props.children) &&
        children.props.children.type === "svg")
    );
  }

  if (Array.isArray(children)) {
    return children.every(
      (child) =>
        isReactElement(child) &&
        (child.type === "svg" || extractTextFromChildren(child).trim() === "")
    );
  }

  return false;
};

// Component for the roll text animation
const RollText: React.FC<{ children: string }> = ({ children }) => {
  const containerRef = React.useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const textElements = containerRef.current.querySelectorAll(".text-element");
    if (textElements.length !== 2) return;

    const [originalText, duplicateText] = textElements;

    // Set initial positions
    gsap.set(originalText, { y: 0 });
    gsap.set(duplicateText, { y: "100%" });

    const container = containerRef.current;
    const button = container.closest("button, a");

    if (!button) return;

    const handleMouseEnter = () => {
      gsap.to(originalText, {
        y: "-100%",
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(duplicateText, {
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(originalText, {
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(duplicateText, {
        y: "100%",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [children]);

  return (
    <span ref={containerRef} className="relative inline-block overflow-hidden">
      <span className="text-element block">{children}</span>
      <span className="text-element block absolute inset-0">{children}</span>
    </span>
  );
};

function Button({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: ButtonProps) {
  const textContent = React.useMemo(
    () => extractTextFromChildren(children),
    [children]
  );
  const hasText = React.useMemo(
    () => textContent.length > 0 && !hasOnlyIcons(children),
    [textContent, children]
  );

  // Process children to add roll text animation
  const processChildren = React.useCallback(
    (child: React.ReactNode): React.ReactNode => {
      if (typeof child === "string" && hasText) {
        return <RollText>{child}</RollText>;
      }

      if (isReactElement(child)) {
        // If it's an SVG or icon, return as is
        if (child.type === "svg") {
          return child;
        }

        // If it has children, process them recursively
        if (hasChildrenProp(child.props)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            ...child.props,
            children: React.Children.map(child.props.children, processChildren),
          });
        }
      }

      return child;
    },
    [hasText]
  );

  const enhancedChildren = React.useMemo(() => {
    if (!hasText) {
      return children;
    }

    if (Array.isArray(children)) {
      let textProcessed = false;
      return React.Children.map(children, (child) => {
        if (typeof child === "string" && !textProcessed) {
          textProcessed = true;
          return <RollText>{child}</RollText>;
        }
        return processChildren(child);
      });
    }

    return processChildren(children);
  }, [children, hasText, processChildren]);

  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {enhancedChildren}
    </Comp>
  );
}

export { Button, buttonVariants };
