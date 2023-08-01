import { cn } from "@/lib/utils";

export const DropboxIcon = ({
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
        <circle id="bg" cx="27.2274" cy="26.9999" r="23.0311" fill="#0F287F" />
        <g id="dropbox">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.0018 13.8394L10.7764 18.7746L19.0018 23.7098L10.7764 28.6451L19.0018 33.5803L27.2272 28.6451L35.4526 33.5803L43.678 28.6451L35.4526 23.7098L43.678 18.7746L35.4526 13.8394L27.2272 18.7746L19.0018 13.8394ZM27.2272 18.7746L35.4526 23.7098L27.2272 28.6451L19.0018 23.7098L27.2272 18.7746Z"
            fill="#DAF8FE"
          />
          <path
            d="M19.0018 36.8705L27.2272 31.9352L35.4526 36.8705L27.2272 41.8057L19.0018 36.8705Z"
            fill="#DAF8FE"
          />
        </g>
      </g>
    </svg>
  );
};
