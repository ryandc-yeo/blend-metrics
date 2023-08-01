import { cn } from "@/lib/utils";

export const BlankProjectSm = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-[25px] w-[26px]", className)}
      viewBox="0 0 26 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Component 984">
        <path
          id="Icon"
          d="M12.9167 5.2085V19.7918M5.625 12.5002H20.2083"
          stroke="#306CFE"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};
