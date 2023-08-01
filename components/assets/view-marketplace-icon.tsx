import { cn } from "@/lib/utils";

export const ViewMarketplaceIcon = ({
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
          d="M13.125 6.12501L13.125 2.37501M13.125 2.37501H9.37499M13.125 2.37501L7.5 8M6.25 2.375H4.875C3.8249 2.375 3.29985 2.375 2.89877 2.57936C2.54596 2.75913 2.25913 3.04596 2.07936 3.39877C1.875 3.79985 1.875 4.3249 1.875 5.375V10.625C1.875 11.6751 1.875 12.2001 2.07936 12.6012C2.25913 12.954 2.54596 13.2409 2.89877 13.4206C3.29985 13.625 3.8249 13.625 4.875 13.625H10.125C11.1751 13.625 11.7001 13.625 12.1012 13.4206C12.454 13.2409 12.7409 12.954 12.9206 12.6012C13.125 12.2001 13.125 11.6751 13.125 10.625V9.25"
          stroke="#306CFE"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};
