import { cn } from "@/lib/utils";

export const GoogleEditorIcon = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-[27px] w-7", className)}
      viewBox="0 0 28 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Component 1004" filter="url(#filter0_d_842_13745)">
        <g id="docs">
          <g id="Group">
            <path
              id="Vector"
              d="M7.32129 18.165V21.5348C7.32129 22.2218 7.88401 22.7786 8.57706 22.7786H11.9244V18.165H7.32129Z"
              fill="#188038"
            />
            <path
              id="Vector_2"
              d="M16.2217 22.7796H19.5659C20.259 22.7796 20.8217 22.2228 20.8217 21.5358V18.165H16.2217V22.7796Z"
              fill="#1967D2"
            />
            <path
              id="Vector_3"
              d="M16.2207 18.165H11.9248V22.7796H16.2207V18.165Z"
              fill="#34A853"
            />
          </g>
          <g id="Group_2">
            <path
              id="Vector_4"
              d="M8.57706 4.21875C7.88401 4.21875 7.32129 4.77556 7.32129 5.46253V18.1648H11.9244V8.86743H16.2203V4.21875H8.57706Z"
              fill="#FBBC05"
            />
            <path
              id="Vector_5"
              d="M20.8217 8.86768H16.2217V18.165H20.8217V8.86768Z"
              fill="#4285F4"
            />
            <path
              id="Vector_6"
              d="M16.2217 8.86742H20.8206L16.2217 4.21875V8.86742Z"
              fill="#EA4335"
            />
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_842_13745"
          x="-1.42871"
          y="-1"
          width="31"
          height="31"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_842_13745"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_842_13745"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
