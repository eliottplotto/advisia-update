import type { ElementType, ComponentPropsWithRef } from "react";

type BulletHeadlineProps<T extends ElementType> = {
  as?: T;
  children: string;
  className?: string;
};

export const BulletHeadline = <T extends ElementType = "h2">({
  as: Tag = "h2",
  children,
  className,
  ...rest
}: BulletHeadlineProps<T> & ComponentPropsWithRef<T>) => {
  return (
    <div
      className={`${className ?? ""} flex items-center no-wrap gap-2`}
      {...rest}
    >
      <div className="w-3 h-3 bg-foreground rounded-full"></div>
      <Tag className="font-mono text-sm uppercase">{children}</Tag>
    </div>
  );
};
