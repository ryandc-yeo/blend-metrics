import { cn } from "@/lib/utils";

export const HoverPlayBtn = ({
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
      <g id="_Play button" filter="url(#filter0_b_4_14511)">
        <path
          id="Button"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19.7497 37.9334C30.1933 37.9334 38.6595 29.4672 38.6595 19.0236C38.6595 8.57999 30.1933 0.11377 19.7497 0.11377C9.30606 0.11377 0.839844 8.57999 0.839844 19.0236C0.839844 29.4672 9.30606 37.9334 19.7497 37.9334ZM16.795 25.9598L27.4318 20.0145C28.2197 19.5741 28.2197 18.4731 27.4318 18.0327L16.795 12.0874C16.0071 11.647 15.0222 12.1975 15.0222 13.0783L15.0222 24.9689C15.0222 25.8497 16.0071 26.4002 16.795 25.9598Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_4_14511"
          x="-9.96578"
          y="-10.6918"
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
            result="effect1_backgroundBlur_4_14511"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_4_14511"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
