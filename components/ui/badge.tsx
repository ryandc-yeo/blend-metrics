import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { X, ArrowRight, Dot, Plus, ArrowLeft } from "@/components/icons";

const badgeVariants = cva(
  "inline-flex items-center gap-x-1.5 font-medium rounded-full pl-1.5 pr-2 py-0.5",
  {
    variants: {
      colorScheme: {
        gray: "text-gray-700 bg-gray-100",
        red: "text-error-700 bg-error-50",
        green: "text-success-700 bg-success-50",
        yellow: "text-warning-700 bg-warning-50",
        blue: "text-primary-700 bg-primary-50",
        purple: "text-purple-700 bg-purple-50",
        indigo: "text-indigo-700 bg-indigo-50",
        sky: "text-sky-700 bg-sky-50",
        rose: "text-rose-700 bg-rose-50",
        orange: "text-orange-700 bg-orange-50",
        violet: "text-violet-700 bg-violet-50",
      },
      size: {
        sm: "py-0.5 px-2 text-xs",
        md: "py-0.5 px-2.5 text-sm",
        lg: "py-1 px-3 text-sm",
      },
    },
    defaultVariants: {
      colorScheme: "gray",
      size: "sm",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  label?: string;
  avatar?: string;
  icon?: "dot" | "x" | "arrow-right" | "plus" | "arrow-left" | "avatar";
  children?: React.ReactNode;
}

function Badge({
  className,
  label,
  colorScheme,
  size,
  icon,
  avatar,
  children,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ colorScheme, size, className }), {
        "flex-row-reverse": icon === "x" || icon === "arrow-right",
        "p-1": icon === "plus" && size === "sm",
        "p-1.5": icon === "plus" && size === "md",
        "p-2": icon === "plus" && size === "lg",
      })}
      {...props}
    >
      {icon === "dot" && <Dot />}
      {icon === "x" && <X />}
      {icon === "arrow-right" && <ArrowRight />}
      {icon === "arrow-left" && <ArrowLeft />}
      {icon === "plus" && <Plus />}

      {icon === "avatar" && avatar && (
        <div className="relative h-4 w-4 rounded-full overflow-hidden">
          <Image className="object-cover" src={avatar} alt="avatar" fill />
        </div>
      )}

      {icon !== "plus" && (label || children)}
    </div>
  );
}

export { Badge };
