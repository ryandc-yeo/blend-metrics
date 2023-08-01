import { cn } from "@/lib/utils";

export const BackBtn = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-[17px] w-[17px]", className)}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Component 1002">
        <path
          id="Icon"
          d="M12.9998 8.50016H3.6665M3.6665 8.50016L8.33317 13.1668M3.6665 8.50016L8.33317 3.8335"
          stroke="#306CFE"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};
