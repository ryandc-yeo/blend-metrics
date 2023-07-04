"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";
import { Label } from "./label";

interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
  label: string;
  desc: string;
}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ className, label, desc, ...props }, ref) => {
  const id = React.useId();

  return (
    <div className="flex gap-x-2">
      <SwitchPrimitives.Root
        className={cn(
          "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full p-0.5 transition-colors focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-500 data-[state=unchecked]:bg-gray-100 ",
          className
        )}
        {...props}
        ref={ref}
        id={id}
      >
        <SwitchPrimitives.Thumb
          className={cn(
            "pointer-events-none block h-4 w-4 rounded-full bg-white shadow-sm transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
          )}
        />
      </SwitchPrimitives.Root>
      <Label className="text-gray-700" htmlFor={id}>
        {label}
        <span className="block text-sm font-normal text-gray-500">{desc}</span>
      </Label>
    </div>
  );
});
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
