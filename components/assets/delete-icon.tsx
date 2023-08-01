import { cn } from "@/lib/utils";

export const DeleteIcon = ({
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
      <g id="Icons - SM" clip-path="url(#clip0_309_21903)">
        <path
          id="Icon"
          d="M2.33301 4.02336H3.66634M3.66634 4.02336H14.333M3.66634 4.02336V13.3567C3.66634 13.7103 3.80682 14.0495 4.05687 14.2995C4.30691 14.5495 4.64605 14.69 4.99967 14.69H11.6663C12.02 14.69 12.3591 14.5495 12.6092 14.2995C12.8592 14.0495 12.9997 13.7103 12.9997 13.3567V4.02336H3.66634ZM5.66634 4.02336V2.69002C5.66634 2.3364 5.80682 1.99726 6.05687 1.74721C6.30691 1.49717 6.64605 1.35669 6.99967 1.35669H9.66634C10.02 1.35669 10.3591 1.49717 10.6092 1.74721C10.8592 1.99726 10.9997 2.3364 10.9997 2.69002V4.02336M6.99967 7.35669V11.3567M9.66634 7.35669V11.3567"
          stroke="#D92D20"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_309_21903">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0.333008 0.0234375)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
