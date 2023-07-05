"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Label } from "./label";

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  label: string;
  category?: string;
  desc?: string;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, label, desc, category, ...props }, ref) => {
  const id = React.useId();

  return (
    <div className="flex gap-x-2">
      <CheckboxPrimitive.Root
        ref={ref}
        className={cn(
          "peer h-4 w-4 shrink-0 rounded-[5px] border border-gray-300 hover:border-gray-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary-500 data-[state=checked]:bg-primary-500 data-[state=checked]:text-white data-[state=checked]:hover:border-[#2B61E5] data-[state=checked]:hover:bg-[#2B61E5]",
          className
        )}
        {...props}
        id={id}
      >
        <CheckboxPrimitive.Indicator
          className={cn("flex items-center justify-center text-current")}
        >
          <Check className="h-3 w-3" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
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
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
