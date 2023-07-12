"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

const radioGroupItemVariants = cva(
  "peer h-4 w-4 shrink-0 rounded-full border-[1.5px] border-gray-300 hover:border-primary-400 hover:ring-2 hover:ring-primary-50 hover:ring-offset-2 hover:ring-offset-primary-50 focus:ring-2 focus:ring-primary-50 focus:ring-offset-2 focus:ring-offset-primary-50 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-200 hover:disabled:ring-0 hover:disabled:ring-offset-0 data-checked:border-primary-500 data-checked:text-primary-500 data-checked:disabled:border-gray-200 data-checked:disabled:bg-gray-50 data-checked:disabled:text-gray-200",
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

const iconVariants = cva("fill-current text-current", {
  variants: {
    size: {
      sm: "h-1.5 w-1.5",
      md: "h-2 w-2",
      lg: "h-2.5 w-2.5",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

interface RadioGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>,
    VariantProps<typeof radioGroupItemVariants> {}

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(({ className, children, size, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(radioGroupItemVariants({ size, className }))}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className={iconVariants({ size })} />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroupItem };
