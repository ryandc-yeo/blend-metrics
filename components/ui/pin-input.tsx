"use client";

import * as React from "react";
import * as pinInput from "@zag-js/pin-input";
import { useMachine, normalizeProps } from "@zag-js/react";

import { cn } from "@/lib/utils";

const FourDigitPinInput = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId();
  const [state, send] = useMachine(pinInput.machine({ id, placeholder: "0" }));

  const api = pinInput.connect(state, send, normalizeProps);

  return (
    <div
      className={cn("flex gap-x-2", className)}
      {...props}
      {...api.rootProps}
      ref={ref}
    >
      <input
        className="h-16 w-16 rounded-lg border border-gray-300 p-2 text-center text-5xl font-medium text-gray-300 shadow-xs placeholder:text-gray-300 focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50"
        {...api.getInputProps({ index: 0 })}
      />
      <input
        className="h-16 w-16 rounded-lg border border-gray-300 p-2 text-center text-5xl font-medium text-gray-300 shadow-xs placeholder:text-gray-300 focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50"
        {...api.getInputProps({ index: 1 })}
      />
      <input
        className="h-16 w-16 rounded-lg border border-gray-300 p-2 text-center text-5xl font-medium text-gray-300 shadow-xs placeholder:text-gray-300 focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50"
        {...api.getInputProps({ index: 2 })}
      />
      <input
        className="h-16 w-16 rounded-lg border border-gray-300 p-2 text-center text-5xl font-medium text-gray-300 shadow-xs placeholder:text-gray-300 focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50"
        {...api.getInputProps({ index: 3 })}
      />
    </div>
  );
});

FourDigitPinInput.displayName = "FourDigitPinInput";

const SixDigitPinInput = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId();
  const [state, send] = useMachine(pinInput.machine({ id, placeholder: "0" }));

  const api = pinInput.connect(state, send, normalizeProps);

  return (
    <div
      className={cn("flex gap-x-2", className)}
      {...props}
      {...api.rootProps}
      ref={ref}
    >
      <input
        className="h-16 w-16 rounded-lg border border-gray-300 p-2 text-center text-5xl font-medium text-gray-300 shadow-xs placeholder:text-gray-300 focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50"
        {...api.getInputProps({ index: 0 })}
      />
      <input
        className="h-16 w-16 rounded-lg border border-gray-300 p-2 text-center text-5xl font-medium text-gray-300 shadow-xs placeholder:text-gray-300 focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50"
        {...api.getInputProps({ index: 1 })}
      />
      <input
        className="h-16 w-16 rounded-lg border border-gray-300 p-2 text-center text-5xl font-medium text-gray-300 shadow-xs placeholder:text-gray-300 focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50"
        {...api.getInputProps({ index: 2 })}
      />
      <span className="text-6xl font-medium text-gray-300">-</span>
      <input
        className="h-16 w-16 rounded-lg border border-gray-300 p-2 text-center text-5xl font-medium text-gray-300 shadow-xs placeholder:text-gray-300 focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50"
        {...api.getInputProps({ index: 3 })}
      />
      <input
        className="h-16 w-16 rounded-lg border border-gray-300 p-2 text-center text-5xl font-medium text-gray-300 shadow-xs placeholder:text-gray-300 focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50"
        {...api.getInputProps({ index: 4 })}
      />
      <input
        className="h-16 w-16 rounded-lg border border-gray-300 p-2 text-center  text-5xl font-medium text-gray-300 shadow-xs placeholder:text-gray-300 focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50"
        {...api.getInputProps({ index: 5 })}
      />
    </div>
  );
});

SixDigitPinInput.displayName = "SixDigitPinInput";

export { FourDigitPinInput, SixDigitPinInput };
