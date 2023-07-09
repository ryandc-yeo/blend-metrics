"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const checkboxVariants = cva(
  "peer rounded-[5px] shrink-0 border-[1.5px] border-gray-300 hover:border-primary-400 hover:ring-2 hover:ring-offset-2 hover:ring-primary-50 hover:ring-offset-primary-50 disabled:hover:ring-0 disabled:hover:ring-offset-0 disabled:bg-gray-50 disabled:text-gray-200 disabled:border-gray-200 disabled:cursor-not-allowed data-checked:bg-primary-500 data-checked:border-primary-500 data-checked:text-white data-checked:disabled:border-gray-200 data-checked:disabled:text-gray-200 data-checked:disabled:bg-gray-50",
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  }
);

const iconVariants = cva("stroke-[2.5px]", {
  variants: {
    size: {
      sm: "h-3 w-3",
      md: "h-3.5 w-3.5",
      lg: "h-4 w-4",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants> {
  rounded?: boolean;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, size, rounded, ...props }, ref) => {
  return (
    <CheckboxPrimitive.Root
      className={cn(checkboxVariants({ size, className }), {
        "rounded-full": rounded,
      })}
      {...props}
      ref={ref}
    >
      <CheckboxPrimitive.Indicator
        className={cn("flex items-center justify-center text-current")}
      >
        <Check className={iconVariants({ size })} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
