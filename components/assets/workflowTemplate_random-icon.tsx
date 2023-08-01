import { cn } from "@/lib/utils";

export const WT_Random_Icon = ({
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
      <g id="Component 1005">
        <g id="autodesk">
          <path
            id="vector"
            d="M19.1119 24.4678L9.99004 3.40898C9.83289 3.05044 9.58097 2.58782 8.92897 2.58782C8.34632 2.58782 8.06879 2.86283 7.91211 3.15854C7.9931 2.94529 8.23833 2.53105 8.94919 2.53105H15.2449C15.8251 2.53105 16.1034 2.86424 16.2302 3.16929L25.4548 24.4678H19.1119Z"
            fill="url(#paint0_linear_842_12023)"
          />
          <path
            id="vector_2"
            d="M7.91236 3.15861L2.13328 16.6124C1.95729 17.0409 1.83008 17.2968 1.83008 17.6368C1.83008 18.2462 2.30482 18.8571 3.50257 18.8571H7.46812L12.0764 8.22501L9.99029 3.40904C9.83313 3.05051 9.58122 2.58789 8.92922 2.58789C8.34659 2.58789 8.06904 2.86291 7.91236 3.15861Z"
            fill="url(#paint1_linear_842_12023)"
          />
          <path
            id="vector_3"
            d="M3.5026 18.8575L16.6599 18.8575L9.02439 23.4701C8.65225 23.6848 7.23672 24.469 6.24358 24.469C5.60337 24.469 5.27076 24.2335 4.95137 23.6865L2.03428 18.4132C1.83332 18.0353 1.83008 17.9094 1.83008 17.6372C1.83008 18.2466 2.30485 18.8575 3.5026 18.8575Z"
            fill="url(#paint2_linear_842_12023)"
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_842_12023"
          x1="11.9964"
          y1="2.93958"
          x2="13.953"
          y2="7.71762"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#29A5E3" />
          <stop offset="0.515" stop-color="#356EB9" />
          <stop offset="1" stop-color="#394DA5" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_842_12023"
          x1="10.5937"
          y1="4.34222"
          x2="9.26221"
          y2="7.5488"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#236736" />
          <stop offset="0.493" stop-color="#6BA443" />
          <stop offset="1" stop-color="#86C146" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_842_12023"
          x1="3.66355"
          y1="21.1448"
          x2="6.4583"
          y2="20.5738"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#2B7A77" />
          <stop offset="0.51" stop-color="#4EBAA9" />
          <stop offset="1" stop-color="#5CC2B1" />
        </linearGradient>
      </defs>
    </svg>
  );
};
