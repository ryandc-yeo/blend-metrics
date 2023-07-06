"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";
import { Label } from "./label";
import { VariantProps, cva } from "class-variance-authority";

const switchVariants = cva(
  "peer inline-flex shrink-0 cursor-pointer items-center rounded-full bg-gray-100 p-0.5 transition-colors hover:bg-gray-200 focus:ring-2 focus:ring-gray-25 focus:ring-offset-2 focus:ring-offset-gray-25 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-gray-100 data-checked:bg-primary-500 data-checked:hover:bg-primary-600 data-checked:focus:ring-primary-50 data-checked:focus:ring-offset-primary-50 data-checked:disabled:bg-gray-100",
  {
    variants: {
      size: {
        sm: "h-5 w-9",
        md: "h-6 w-11",
      },
    },
  }
);

const iconVariants = cva(
  "pointer-events-none block rounded-full bg-white shadow-sm transition-transform data-unchecked:translate-x-0",
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
      },
    },
    compoundVariants: [
      {
        size: "sm",
        className: "data-checked:translate-x-4",
      },
      {
        size: "md",
        className: "data-checked:translate-x-5",
      },
    ],
  }
);

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

interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>,
    VariantProps<typeof switchVariants> {
  label?: string;
  desc?: string;
}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ className, label, desc, size, ...props }, ref) => {
  const id = React.useId();

  return (
    <div className="flex gap-x-2">
      <SwitchPrimitives.Root
        className={cn(switchVariants({ size, className }))}
        {...props}
        ref={ref}
        id={id}
      >
        <SwitchPrimitives.Thumb className={iconVariants({ size })} />
      </SwitchPrimitives.Root>
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
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
