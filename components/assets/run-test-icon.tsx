import { cn } from "@/lib/utils";

export const RunTestIcon = ({
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
      <g id="Icons - SM">
        <path
          id="Icon"
          d="M9.49963 1.33325L2.83301 9.3332H8.83297L8.16631 14.6665L14.8329 6.66655H8.83297L9.49963 1.33325Z"
          stroke="#667085"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};
