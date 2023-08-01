import { cn } from "@/lib/utils";

export const GmailIcon = ({
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
      <g id="Component 2" filter="url(#filter0_d_842_13735)">
        <g id="gmail">
          <path
            id="Vector"
            d="M19.1767 7.19141L14.1251 11.1338L8.95801 7.19141V7.19247L8.96425 7.1978V12.7182L14.0669 16.7458L19.1767 12.8737V7.19141Z"
            fill="#EA4335"
          />
          <path
            id="Vector_2"
            d="M20.5034 6.23226L19.1768 7.19121V12.8735L23.3512 9.6685V7.73782C23.3512 7.73782 22.8445 4.9803 20.5034 6.23226Z"
            fill="#FBBC05"
          />
          <path
            id="Vector_3"
            d="M19.1768 12.8735V20.2436H22.3763C22.3763 20.2436 23.2867 20.1498 23.3523 19.112V9.66846L19.1768 12.8735Z"
            fill="#34A853"
          />
          <path
            id="Vector_4"
            d="M8.96449 20.2498V12.7177L8.95801 12.7124L8.96449 20.2498Z"
            fill="#C5221F"
          />
          <path
            id="Vector_5"
            d="M8.95828 7.19233L7.63892 6.23871C5.2978 4.98674 4.79004 7.74319 4.79004 7.74319V9.67388L8.95828 12.7127V7.19233Z"
            fill="#C5221F"
          />
          <path
            id="Vector_6"
            d="M8.95801 7.19238V12.7127L8.96449 12.7181V7.19771L8.95801 7.19238Z"
            fill="#C5221F"
          />
          <path
            id="Vector_7"
            d="M4.79004 9.6748V19.1183C4.85455 20.1572 5.76603 20.2499 5.76603 20.2499H8.96556L8.95828 12.7125L4.79004 9.6748Z"
            fill="#4285F4"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_842_13735"
          x="-0.324759"
          y="-0.448024"
          width="28.7921"
          height="28.7921"
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
          <feOffset dy="0.448024" />
          <feGaussianBlur stdDeviation="0.448024" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_842_13735"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_842_13735"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
