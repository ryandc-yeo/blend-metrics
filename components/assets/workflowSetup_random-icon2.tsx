import { cn } from "@/lib/utils";

export const WS_RandomIcon2 = ({
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
      <g id="Component 1006">
        <path
          id="bg"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 17.799 6.20101 22.5 12 22.5Z"
          fill="white"
        />
        <g id="framer">
          <path
            id="vector"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.75 15.25H12V20.25L6.75 15.25Z"
            fill="#0055FF"
          />
          <path
            id="vector_2"
            d="M12 10.25H6.75V15.25H17.25L12 10.25Z"
            fill="#00AAFF"
          />
          <path
            id="vector_3"
            d="M6.75 5.25L12 10.25H17.25V5.25H6.75Z"
            fill="#88DDFF"
          />
        </g>
      </g>
    </svg>
  );
};
