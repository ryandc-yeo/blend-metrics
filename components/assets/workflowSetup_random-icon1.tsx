import { cn } from "@/lib/utils";

export const WS_RandomIcon1 = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-6 w-6", className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Component 1005">
        <g id="amd">
          <path
            d="M8.25 15.75V9L3 14.25V21H9.75L15 15.75H8.25Z"
            fill="#19A771"
          />
          <path d="M21 3H3L8.25 8.25H15.75V15.75L21 21V3Z" fill="#19A771" />
        </g>
      </g>
    </svg>
  );
};
