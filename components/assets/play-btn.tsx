import { cn } from "@/lib/utils";

export const PlayBtn = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-[38px] w-[39px]", className)}
      viewBox="0 0 39 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="_Play button" filter="url(#filter0_b_1_66451)">
        <path
          id="Button"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19.7497 37.91C30.1933 37.91 38.6595 29.4438 38.6595 19.0002C38.6595 8.55655 30.1933 0.090332 19.7497 0.090332C9.30606 0.090332 0.839844 8.55655 0.839844 19.0002C0.839844 29.4438 9.30606 37.91 19.7497 37.91ZM16.795 25.9364L27.4318 19.9911C28.2197 19.5507 28.2197 18.4497 27.4318 18.0093L16.795 12.064C16.0071 11.6236 15.0222 12.1741 15.0222 13.0549L15.0222 24.9455C15.0222 25.8263 16.0071 26.3767 16.795 25.9364Z"
          fill="white"
          fill-opacity="0.3"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_1_66451"
          x="-9.96578"
          y="-10.7153"
          width="59.4311"
          height="59.4308"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="5.40281" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1_66451"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1_66451"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
