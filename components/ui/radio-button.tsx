"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

const RadioGroupItem = RadioGroupPrimitive.RadioGroupItem;

const RadioGroupItemIndicator = RadioGroupPrimitive.Indicator;

const radioButtonVariants = cva(
  "peer shrink-0 rounded-full border-[1.5px] border-gray-300 hover:border-primary-400 hover:ring-2 hover:ring-primary-50 hover:ring-offset-2 hover:ring-offset-primary-50 focus:ring-2 focus:ring-primary-50 focus:ring-offset-2 focus:ring-offset-primary-50 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-200 hover:disabled:ring-0 hover:disabled:ring-offset-0 data-[state=checked]:border-primary-500 data-[state=checked]:text-primary-500 data-[state=checked]:disabled:border-gray-200 data-[state=checked]:disabled:bg-gray-50 data-[state=checked]:disabled:text-gray-200",
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

interface RadioButtonProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>,
    VariantProps<typeof radioButtonVariants> {}

const RadioButton = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioButtonProps
>(({ className, children, size, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(radioButtonVariants({ size, className }))}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className={iconVariants({ size })} />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioButton.displayName = "RadioButton";

export { RadioButton, RadioGroupItem, RadioGroupItemIndicator };
