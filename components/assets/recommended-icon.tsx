import { cn } from "@/lib/utils";

export const RecommendedIcon = ({
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
      <g id="Component 985">
        <path
          id="Icon"
          d="M5.25 16.5V8.25M1.5 9.75V15C1.5 15.8284 2.17157 16.5 3 16.5H13.0697C14.1802 16.5 15.1247 15.6898 15.2935 14.5921L16.1012 9.34213C16.3109 7.97917 15.2564 6.75 13.8774 6.75H11.25C10.8358 6.75 10.5 6.41421 10.5 6V3.34938C10.5 2.328 9.67201 1.5 8.65062 1.5C8.407 1.5 8.18624 1.64347 8.08729 1.86609L5.44795 7.8046C5.32758 8.07545 5.05899 8.25 4.7626 8.25H3C2.17157 8.25 1.5 8.92157 1.5 9.75Z"
          stroke="#98A2B3"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};
