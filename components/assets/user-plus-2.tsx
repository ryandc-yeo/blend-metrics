import { cn } from "@/lib/utils";

export const UserPlus2 = ({
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
          d="M7.5 10.1875H4.6875C3.81527 10.1875 3.37916 10.1875 3.02429 10.2952C2.22528 10.5375 1.60003 11.1628 1.35765 11.9618C1.25 12.3167 1.25 12.7528 1.25 13.625M11.875 13.625V9.875M10 11.75H13.75M9.0625 5.1875C9.0625 6.7408 7.8033 8 6.25 8C4.6967 8 3.4375 6.7408 3.4375 5.1875C3.4375 3.6342 4.6967 2.375 6.25 2.375C7.8033 2.375 9.0625 3.6342 9.0625 5.1875Z"
          stroke="#667085"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};
