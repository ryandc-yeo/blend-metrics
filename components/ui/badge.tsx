import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center gap-x-1.5 font-medium rounded-full",
  {
    variants: {
      colorScheme: {
        gray: "bg-gray-100 text-gray-700",
        purple: "bg-purple-100 text-purple-700",
        error: "bg-error-100 text-error-700",
        warning: "bg-warning-100 text-warning-700",
        success: "bg-success-100 text-success-700",
        sky: "bg-sky-100 text-sky-700",
        primary: "bg-primary-100 text-primary-700",
        indigo: "bg-indigo-100 text-indigo-700",
        pink: "bg-pink-100 text-pink-700",
        rose: "bg-rose-100 text-rose-700",
        orange: "bg-orange-100 text-orange-700",
      },
      size: {
        sm: "h-[22px] text-xs leading-[18px]",
        md: "h-6 text-sm leading-5",
        lg: "h-7 text-sm leading-5",
      },
      shape: {
        square: "py-0.5 px-2",
        circle: "p-1",
      },
    },
    compoundVariants: [
      {
        shape: "square",
        size: "md",
        className: "py-0.5 px-2.5",
      },
      {
        shape: "square",
        size: "lg",
        className: "py-1 px-3 ",
      },
      {
        shape: "circle",
        size: "md",
        className: "p-1.5",
      },
      {
        shape: "circle",
        size: "lg",
        className: "p-2",
      },
    ],
    defaultVariants: {
      colorScheme: "gray",
      size: "sm",
      shape: "square",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, colorScheme, size, shape, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ colorScheme, size, shape, className }))}
      {...props}
    />
  );
}

export { Badge };
