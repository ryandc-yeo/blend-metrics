import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";

import { Avatar, AvatarFallback, AvatarImage } from "./ui";

const userAvatarInfoVariants = cva("flex items-center", {
  variants: {
    size: {
      xs: "gap-x-2",
      sm: "gap-x-2.5",
      md: "gap-x-3",
      lg: "gap-x-3",
      xl: "gap-x-4",
    },
  },
  defaultVariants: {
    size: "xs",
  },
});

const nameVariants = cva("text-gray-700 font-semibold", {
  variants: {
    size: {
      xs: "text-xs leading-[15px]",
      sm: "text-sm",
      md: "text-sm",
      lg: "text-base",
      xl: "text-[18px] leading-7",
    },
  },
  defaultVariants: {
    size: "xs",
  },
});

const emailVariants = cva("text-gray-500", {
  variants: {
    size: {
      xs: "text-[9px] leading-[14px]",
      sm: "text-xs leading-[18px]",
      md: "text-sm",
      lg: "text-base",
      xl: "text-[18px] leading-6",
    },
  },
  defaultVariants: {
    size: "xs",
  },
});

interface UserAvatarInfoProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof userAvatarInfoVariants> {
  src?: string;
  alt?: string;
  fallback?: string;
  isOnline?: boolean;
  email: string;
  name: string;
}

function UserAvatarInfo({
  className,
  src,
  alt,
  fallback,
  size,
  email,
  name,
  isOnline,
  ...props
}: UserAvatarInfoProps) {
  return (
    <div className={userAvatarInfoVariants({ size, className })} {...props}>
      <Avatar size={size} isOnline={isOnline}>
        <AvatarImage src={src} alt={alt} />
        <AvatarFallback>{fallback}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <span className={nameVariants({ size })}>{name}</span>
        <span className={emailVariants({ size })}>{email}</span>
      </div>
    </div>
  );
}

export { UserAvatarInfo };
