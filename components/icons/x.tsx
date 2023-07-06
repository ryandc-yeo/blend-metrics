import { cn } from "@/lib/utils";
import * as React from "react";

export const X = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-3 w-3 shrink-0", className)}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 3L3 9M3 3L9 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
