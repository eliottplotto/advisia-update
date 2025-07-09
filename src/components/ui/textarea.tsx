import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border placeholder:text-muted-foreground rounded-sm focus-visible:border-ring focus-visible:ring-ring aria-invalid:ring-destructive dark:aria-invalid:ring-destructive aria-invalid:border-destructive flex field-sizing-content min-h-16 w-full bg-primary-foreground px-3 py-2 text-base outline-none focus-visible:ring-[1px] disabled:cursor-not-allowed disabled:opacity-50 text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
