import { cn } from "@/lib/utils";

export const DuplicateIcon = ({
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
      <g id="Icons - SM" clip-path="url(#clip0_639_17215)">
        <path
          id="Icon"
          d="M4.166 9.99986H3.49934C3.14572 9.99986 2.80658 9.85938 2.55654 9.60934C2.30649 9.35929 2.16602 9.02016 2.16602 8.66654V2.66658C2.16602 2.31296 2.30649 1.97382 2.55654 1.72377C2.80658 1.47373 3.14572 1.33325 3.49934 1.33325H9.4993C9.85292 1.33325 10.1921 1.47373 10.4421 1.72377C10.6921 1.97382 10.8326 2.31296 10.8326 2.66658V3.33324M8.16598 5.99989H14.1659C14.9023 5.99989 15.4993 6.59684 15.4993 7.33321V13.3332C15.4993 14.0695 14.9023 14.6665 14.1659 14.6665H8.16598C7.4296 14.6665 6.83265 14.0695 6.83265 13.3332V7.33321C6.83265 6.59684 7.4296 5.99989 8.16598 5.99989Z"
          stroke="#667085"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_639_17215">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0.833008)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
