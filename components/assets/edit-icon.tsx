import { cn } from "@/lib/utils";

export const EditIcon = ({
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
      <g id="Icons - SM">
        <path
          id="Icon"
          d="M8.33301 13.3568H14.333M11.333 2.35684C11.5982 2.09162 11.9579 1.94263 12.333 1.94263C12.5187 1.94263 12.7026 1.97921 12.8742 2.05028C13.0458 2.12135 13.2017 2.22552 13.333 2.35684C13.4643 2.48816 13.5685 2.64406 13.6396 2.81564C13.7106 2.98722 13.7472 3.17112 13.7472 3.35684C13.7472 3.54256 13.7106 3.72646 13.6396 3.89804C13.5685 4.06962 13.4643 4.22552 13.333 4.35684L4.99967 12.6902L2.33301 13.3568L2.99967 10.6902L11.333 2.35684Z"
          stroke="#667085"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};
