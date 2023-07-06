"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Label } from "./label";
import { cva, VariantProps } from "class-variance-authority";

const checkboxVariants = cva(
  "peer shrink-0 rounded-[5px] border border-gray-300 hover:border-gray-400 focus:border-primary-300 focus:ring-2 focus:ring-[#EAF0FF] focus:ring-offset-2 focus:ring-offset-[#EAF0FF] focus-visible:outline-none disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-100 data-checked:border-primary-500 data-checked:bg-primary-50 data-checked:text-primary-500 data-checked:focus:border-primary-500 data-checked:focus:bg-primary-500 data-checked:focus:text-white data-checked:disabled:border-gray-200 data-checked:disabled:bg-gray-100 data-checked:disabled:text-gray-200",
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  }
);

const iconVariants = cva("stroke-[3px]", {
  variants: {
    size: {
      sm: "h-3 w-3",
      md: "h-3.5 w-3.5",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

const labelVariants = cva("text-gray-700", {
  variants: {
    text: {
      sm: "text-sm",
      md: "text-base",
    },
  },
  defaultVariants: {
    text: "sm",
  },
});

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants> {
  label?: string;
  desc?: string;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, label, desc, size, ...props }, ref) => {
  const id = React.useId();

  return (
    <div className="flex gap-x-2">
      <CheckboxPrimitive.Root
        className={cn(checkboxVariants({ size, className }))}
        id={id}
        {...props}
        ref={ref}
      >
        <CheckboxPrimitive.Indicator
          className={cn("flex items-center justify-center text-current")}
        >
          <Check className={iconVariants({ size })} />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      {label && (
        <Label className={labelVariants({ text: size })} htmlFor={id}>
          {label}
          {desc && (
            <span className="block font-normal text-gray-500">{desc}</span>
          )}
        </Label>
      )}
    </div>
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
