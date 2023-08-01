import { cn } from "@/lib/utils";

export const FigmaIcon = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-[54px] w-[54px]", className)}
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Component 2">
        <g id="figma">
          <path
            id="vector"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M27.1357 27C27.1357 22.9115 30.4501 19.5972 34.5386 19.5972C38.6271 19.5972 41.9415 22.9115 41.9415 27C41.9415 31.0885 38.6271 34.4029 34.5386 34.4029C30.4501 34.4029 27.1357 31.0885 27.1357 27Z"
            fill="#1ABCFE"
          />
          <path
            id="vector_2"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.3301 41.8057C12.3301 37.7172 15.6445 34.4028 19.7329 34.4028H27.1358V41.8057C27.1358 45.8942 23.8214 49.2086 19.7329 49.2086C15.6445 49.2086 12.3301 45.8942 12.3301 41.8057Z"
            fill="#0ACF83"
          />
          <path
            id="vector_3"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M27.1357 4.7915V19.5972H34.5386C38.6271 19.5972 41.9415 16.2829 41.9415 12.1944C41.9415 8.10588 38.6271 4.7915 34.5386 4.7915H27.1357Z"
            fill="#FF7262"
          />
          <path
            id="vector_4"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.3301 12.1944C12.3301 16.2829 15.6445 19.5972 19.7329 19.5972H27.1358V4.7915H19.7329C15.6445 4.7915 12.3301 8.10588 12.3301 12.1944Z"
            fill="#F24E1E"
          />
          <path
            id="vector_5"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.3301 27C12.3301 31.0885 15.6445 34.4029 19.7329 34.4029H27.1358V19.5972H19.7329C15.6445 19.5972 12.3301 22.9115 12.3301 27Z"
            fill="#A259FF"
          />
        </g>
      </g>
    </svg>
  );
};
