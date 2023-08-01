import { cn } from "@/lib/utils";

export const CategoryNameBlueIcon = ({
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
        <path
          id="Icon"
          d="M3 5.99745C2.87699 5.99427 2.78767 5.98715 2.70736 5.97118C2.11233 5.85282 1.64718 5.38767 1.52882 4.79264C1.5 4.64774 1.5 4.47349 1.5 4.125C1.5 3.77651 1.5 3.60226 1.52882 3.45736C1.64718 2.86233 2.11233 2.39718 2.70736 2.27882C2.85226 2.25 3.02651 2.25 3.375 2.25H14.625C14.9735 2.25 15.1477 2.25 15.2926 2.27882C15.8877 2.39718 16.3528 2.86233 16.4712 3.45736C16.5 3.60226 16.5 3.77651 16.5 4.125C16.5 4.47349 16.5 4.64774 16.4712 4.79264C16.3528 5.38767 15.8877 5.85282 15.2926 5.97118C15.2123 5.98715 15.123 5.99427 15 5.99745M7.5 9.75H10.5M3 6H15V12.15C15 13.4101 15 14.0402 14.7548 14.5215C14.5391 14.9448 14.1948 15.2891 13.7715 15.5048C13.2902 15.75 12.6601 15.75 11.4 15.75H6.6C5.33988 15.75 4.70982 15.75 4.22852 15.5048C3.80516 15.2891 3.46095 14.9448 3.24524 14.5215C3 14.0402 3 13.4101 3 12.15V6Z"
          stroke="#306CFE"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};
