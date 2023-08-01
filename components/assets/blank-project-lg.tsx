import { cn } from "@/lib/utils";

export const BlankProjectLg = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-[31px] w-8", className)}
      viewBox="0 0 32 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Component 984">
        <path
          id="Icon"
          d="M15.9167 6.4585V24.5418M6.875 15.5002H24.9583"
          stroke="#306CFE"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};
