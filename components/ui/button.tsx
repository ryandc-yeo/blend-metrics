import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-x-2 rounded-md text-sm font-semibold transition-colors focus:ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      visual: {
        primary: "",
        error: "",
        gray: "",
      },
      variant: {
        solid: "",
        outlined: "border",
        ghost: "",
        link: "hover:underline",
        secondary: "",
      },
      size: {
        sm: "py-2 px-[14px] h-9",
        md: "py-2.5 px-4 h-10",
        lg: "py-2.5 px-[18px] h-11",
        xl: "py-3 px-5 h-12",
        "2xl": "px-7 py-4 h-[60px]",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        visual: "error",
        className:
          "text-white bg-error-500 hover:bg-error-600 focus:ring-error-100",
      },
      {
        variant: "outlined",
        visual: "error",
        className:
          "border-error-300 text-error-500 hover:bg-red-100 focus:ring-error-50",
      },
      {
        variant: "ghost",
        visual: "error",
        className:
          "text-error-500 hover:bg-error-100 focus:text-error-700 focus:bg-error-200 focus:ring-0",
      },
      {
        variant: "link",
        visual: "error",
        className: "text-error-500 focus:text-error-600 focus:ring-0",
      },
      {
        variant: "secondary",
        visual: "error",
        className:
          "text-error-500 bg-error-100 hover:bg-error-200 focus:ring-error-50",
      },
      {
        variant: "solid",
        visual: "primary",
        className:
          "text-white bg-primary-500 hover:bg-primary-600 focus:ring-primary-100",
      },
      {
        variant: "secondary",
        visual: "primary",
        className:
          "text-primary-500 bg-primary-100 hover:bg-primary-200 focus:ring-primary-25",
      },
      {
        variant: "link",
        visual: "primary",
        className: "text-primary-500 focus:text-primary-600 focus:ring-0",
      },
      {
        variant: "ghost",
        visual: "primary",
        className:
          "text-primary-500 hover:bg-primary-100 focus:bg-primary-200 focus:text-primary-600 focus:ring-0",
      },
      {
        variant: "outlined",
        visual: "gray",
        className: "border-gray-300 hover:bg-gray-50 focus:ring-gray-100",
      },
      {
        variant: "ghost",
        visual: "gray",
        className:
          "text-gray-800 hover:bg-gray-100 focus:bg-gray-200 focus:ring-0",
      },
      {
        variant: "link",
        visual: "gray",
        className: "text-gray-500 focus:text-gray-600 focus:ring-0",
      },
      {
        size: "2xl",
        className: "gap-x-3",
      },
    ],
    defaultVariants: {
      variant: "solid",
      size: "sm",
      visual: "primary",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      visual,
      leftIcon,
      rightIcon,
      children,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ size, variant, visual, className }))}
        ref={ref}
        {...props}
      >
        {leftIcon}
        {children}
        {rightIcon}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
