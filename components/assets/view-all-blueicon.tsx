import { cn } from "@/lib/utils";

export const ViewAllBlueIcon = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-[18px] w-[18px]", className)}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Component 984">
        <g id="Icon">
          <path
            d="M7.5 2.25H2.25V7.5H7.5V2.25Z"
            stroke="#306CFE"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.75 2.25H10.5V7.5H15.75V2.25Z"
            stroke="#306CFE"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.75 10.5H10.5V15.75H15.75V10.5Z"
            stroke="#306CFE"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.5 10.5H2.25V15.75H7.5V10.5Z"
            stroke="#306CFE"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
    </svg>
  );
};
