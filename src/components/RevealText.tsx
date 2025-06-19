// app/components/RevealText.tsx
"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ElementType, ComponentPropsWithRef } from "react";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

type RevealTextProps<T extends ElementType> = {
  as?: T;
  children: string;
  className?: string;
};

export const RevealText = <T extends ElementType = "h2">({
  as: Tag = "h2",
  children,
  className,
  ...rest
}: RevealTextProps<T> & ComponentPropsWithRef<T>) => {
  const textRef = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    if (!textRef.current || !children) {
      return;
    }

    let ctx = gsap.context(() => {
      const split = new SplitText(textRef.current!, {
        type: "lines",
        linesClass: "line-reveal",
        autoSplit: true,
        mask: "lines",
      });

      gsap.set(split.lines, { yPercent: 100 });

      gsap.to(split.lines, {
        yPercent: 0,
        duration: 1,
        delay: 0.1,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });

      return () => {
        if (split) {
          split.revert();
        }
        ctx.revert();
      };
    }, textRef);
  }, [children]);

  return (
    <Tag
      ref={textRef}
      className={`${className ?? ""} overflow-hidden relative`}
      {...rest}
    >
      {children}
    </Tag>
  );
};
