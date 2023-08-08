import { cn } from "@/lib/utils";

export const ExpandIcon = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-4 w-[15px]", className)}
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Component 985">
        <path
          id="Icon"
          d="M10 5.49988L13.125 2.37488M13.125 2.37488H10M13.125 2.37488V5.49988M5 5.49988L1.875 2.37488M1.875 2.37488L1.875 5.49988M1.875 2.37488L5 2.37488M5 10.4999L1.875 13.6249M1.875 13.6249H5M1.875 13.6249L1.875 10.4999M10 10.4999L13.125 13.6249M13.125 13.6249V10.4999M13.125 13.6249H10"
          stroke="#667085"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};
