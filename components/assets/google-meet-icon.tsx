import { cn } from "@/lib/utils";

export const GoogleMeetIcon = ({
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
      <g id="Component 1004" filter="url(#filter0_d_842_12012)">
        <g id="meet">
          <path
            id="Vector"
            d="M4.36133 19.8789C4.36133 20.5502 4.90975 21.0939 5.58545 21.0939H5.60304C4.917 21.0939 4.36133 20.5502 4.36133 19.8789Z"
            fill="#FBBC05"
          />
          <path
            id="Vector_2"
            d="M14.8812 10.4625V13.6346L19.1578 10.1851V7.12124C19.1578 6.44996 18.6094 5.90625 17.9337 5.90625H8.66844L8.66016 10.4625H14.8812Z"
            fill="#FBBC05"
          />
          <path
            id="Vector_3"
            d="M14.8812 16.8079H8.64982L8.64258 21.0938H17.9337C18.6104 21.0938 19.1578 20.5501 19.1578 19.8788V17.1126L14.8812 13.6357V16.8079V16.8079Z"
            fill="#34A853"
          />
          <path
            id="Vector_4"
            d="M8.66801 5.90625L4.36133 10.4625H8.66077L8.66801 5.90625Z"
            fill="#EA4335"
          />
          <path
            id="Vector_5"
            d="M4.36133 16.8076V19.8785C4.36133 20.5498 4.917 21.0935 5.60304 21.0935H8.64214L8.64939 16.8076H4.36133V16.8076Z"
            fill="#1967D2"
          />
          <path
            id="Vector_6"
            d="M8.66077 10.4624H4.36133V16.8077H8.64939L8.66077 10.4624Z"
            fill="#4285F4"
          />
          <path
            id="Vector_7"
            d="M22.9175 18.7986V8.36993C22.6764 6.98585 21.1584 8.57243 21.1584 8.57243L19.1582 10.1853V17.1118L22.0214 19.4395C23.0551 19.5752 22.9175 18.7986 22.9175 18.7986Z"
            fill="#34A853"
          />
          <path
            id="Vector_8"
            d="M14.8809 13.6346L19.1586 17.1125V10.186L14.8809 13.6346Z"
            fill="#188038"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_842_12012"
          x="-1.85742"
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
            result="effect1_dropShadow_842_12012"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_842_12012"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
