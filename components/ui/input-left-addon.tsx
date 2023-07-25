import { cn } from "@/lib/utils";
import * as React from "react";

export const InputLeftAddon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    className={cn(
      "inline-flex h-11 items-center rounded-l-lg border-y border-l border-gray-300 py-2.5 pl-[14px] pr-3 text-sm text-gray-500",
      className
    )}
    ref={ref}
    {...props}
  />
));

InputLeftAddon.displayName = "InputLeftAddon";
