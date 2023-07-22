import * as React from "react";
import { AlertCircle } from "lucide-react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isInvalid?: boolean;
  alertCircleClassName?: string;
  leftIcon?: React.ReactNode;
  leftIconRootClassName?: string;
  rightIcon?: React.ReactNode;
  rightIconRootClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      isInvalid,
      leftIcon,
      rightIcon,
      alertCircleClassName,
      leftIconRootClassName,
      rightIconRootClassName,
      ...props
    },
    ref
  ) => {
    const isNotInvalid = !isInvalid;

    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            "peer flex h-11 w-full rounded-[5px] border border-gray-300 px-[14px] py-2.5 text-base text-gray-black shadow-xs placeholder:text-gray-500  invalid:pr-11 focus:border-primary-500 focus:ring-2 focus:ring-primary-50 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            {
              "border-error-300 bg-white pr-11 focus:border-error-300 focus:ring-error-100":
                isInvalid,
              "pl-[42px]": leftIcon,
              "pr-11": rightIcon,
            },
            className
          )}
          ref={ref}
          {...props}
        />
        {leftIcon && (
          <span
            className={cn(
              "absolute inset-y-0 left-[14px] my-auto inline-flex items-center justify-center text-gray-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
              leftIconRootClassName
            )}
          >
            {leftIcon}
          </span>
        )}
        {isInvalid && (
          <AlertCircle
            className={cn(
              "absolute inset-y-0 right-[14px] my-auto text-error-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
              alertCircleClassName
            )}
            size={16}
          />
        )}
        {isNotInvalid && rightIcon && (
          <span
            className={cn(
              "absolute inset-y-0 right-[14px] my-auto inline-flex items-center justify-center text-gray-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
              rightIconRootClassName
            )}
          >
            {rightIcon}
          </span>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
