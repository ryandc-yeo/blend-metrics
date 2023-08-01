import { cn } from "@/lib/utils";

export const RecentlyViewedBlueIcon = ({
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
      <g id="Component 985" clip-path="url(#clip0_952_9778)">
        <path
          id="Icon"
          d="M9 4.49976V8.99976L12 10.4998M16.5 8.99976C16.5 13.1419 13.1421 16.4998 9 16.4998C4.85786 16.4998 1.5 13.1419 1.5 8.99976C1.5 4.85762 4.85786 1.49976 9 1.49976C13.1421 1.49976 16.5 4.85762 16.5 8.99976Z"
          stroke="#306CFE"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_952_9778">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
