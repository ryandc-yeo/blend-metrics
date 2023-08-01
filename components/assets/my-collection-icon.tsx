import { cn } from "@/lib/utils";

export const MyCollectionIcon = ({
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
      <g id="Component 985">
        <path
          id="Icon"
          d="M15.375 5.45838L8.99998 9.00004M8.99998 9.00004L2.62498 5.45838M8.99998 9.00004L9 16.1251M15.75 12.044V5.95615C15.75 5.69917 15.75 5.57067 15.7121 5.45608C15.6786 5.35469 15.6239 5.26163 15.5515 5.18311C15.4697 5.09436 15.3574 5.03196 15.1328 4.90716L9.58277 1.82383C9.37007 1.70566 9.26372 1.64657 9.15109 1.62341C9.05141 1.60291 8.9486 1.60291 8.84891 1.62341C8.73629 1.64657 8.62993 1.70566 8.41723 1.82383L2.86723 4.90716C2.64259 5.03196 2.53026 5.09436 2.44847 5.18312C2.37612 5.26163 2.32136 5.35469 2.28786 5.45608C2.25 5.57068 2.25 5.69917 2.25 5.95615V12.044C2.25 12.301 2.25 12.4295 2.28786 12.5441C2.32136 12.6454 2.37612 12.7385 2.44847 12.817C2.53026 12.9058 2.64259 12.9682 2.86723 13.093L8.41723 16.1763C8.62993 16.2945 8.73629 16.3536 8.84891 16.3767C8.9486 16.3972 9.05141 16.3972 9.15109 16.3767C9.26372 16.3536 9.37007 16.2945 9.58277 16.1763L15.1328 13.093C15.3574 12.9682 15.4697 12.9058 15.5515 12.817C15.6239 12.7385 15.6786 12.6454 15.7121 12.5441C15.75 12.4295 15.75 12.301 15.75 12.044Z"
          stroke="#98A2B3"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Icon_2"
          d="M12.375 7.125L5.625 3.375"
          stroke="#98A2B3"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};
