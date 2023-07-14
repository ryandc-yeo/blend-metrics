"use client";

import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const helperTextVariants = cva("inline-block font-normal text-gray-500", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-[18px] leading-7",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

interface HelperTextProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof helperTextVariants> {}

const HelperText = ({ className, size, ...props }: HelperTextProps) => (
  <span className={cn(helperTextVariants({ size, className }))} {...props} />
);

export { HelperText };
