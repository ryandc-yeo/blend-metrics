import { cn } from "@/lib/utils";

export const Dot = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-2 w-2", className)}
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="4.00002" cy="4" r="3" fill="currentColor" />
    </svg>
  );
};
