"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";
import { Label } from "./label";

import { cn } from "@/lib/utils";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-[11px]", className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

interface RadioGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  label: string;
  category?: string;
  desc?: string;
}

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(({ className, children, category, desc, label, ...props }, ref) => {
  const id = React.useId();

  return (
    <div className="flex gap-x-2">
      <RadioGroupPrimitive.Item
        ref={ref}
        className={cn(
          "peer h-4 w-4 shrink-0 rounded-full border border-gray-300 text-white hover:border-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EAF0FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#EAF0FF] disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary-500 data-[state=checked]:bg-[#EAF0FF] data-[state=checked]:text-primary-500 data-[state=checked]:hover:border-[#2B61E5] data-[state=checked]:hover:text-[#2B61E5]",
          className
        )}
        {...props}
        id={id}
      >
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
          <Circle className="h-1.5 w-1.5 fill-current text-current" />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
      <Label className="text-sm text-gray-700" htmlFor={id}>
        {category ? (
          <div className="flex items-center gap-x-1.5">
            <span>{label}</span>
            <span className="inline-block h-1 w-1 shrink-0 rounded-full bg-gray-700"></span>
            <span>{category}</span>
          </div>
        ) : (
          label
        )}
        {desc && (
          <span className="block text-sm font-normal text-gray-500">
            {desc}
          </span>
        )}
      </Label>
    </div>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
