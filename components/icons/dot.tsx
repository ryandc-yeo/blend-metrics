import { cn } from "@/lib/utils";
import * as React from "react";

export const Dot = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-2 w-2 shrink-0", className)}
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="4" cy="4" r="3" fill="currentColor" />
    </svg>
  );
};
