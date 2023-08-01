import { cn } from "@/lib/utils";

export const FindTriggersIcon = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-4 w-[17px]", className)}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Component 984">
        <path
          id="Icon"
          d="M14.5361 14L11.6361 11.1M13.2028 7.33333C13.2028 10.2789 10.815 12.6667 7.86947 12.6667C4.92395 12.6667 2.53613 10.2789 2.53613 7.33333C2.53613 4.38781 4.92395 2 7.86947 2C10.815 2 13.2028 4.38781 13.2028 7.33333Z"
          stroke="#98A2B3"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};
