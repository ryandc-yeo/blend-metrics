import { cn } from "@/lib/utils";

export const TwitchIcon = ({
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
        <g id="twitch">
          <path
            d="M36.8248 17.1295H33.5346V27H36.8248V17.1295Z"
            fill="#6445A2"
          />
          <path
            d="M25.3092 17.1295H28.5994V27H25.3092V17.1295Z"
            fill="#6445A2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.8584 13.8394L11.4379 7.25903H46.6953V31.9352L36.8248 41.8057H28.5994L23.4766 46.741H17.0838V41.8057H8.8584V13.8394ZM36.8248 35.2254L43.4051 28.6451V10.5492H15.4387V35.2254H22.019V40.1606L26.9543 35.2254H36.8248Z"
            fill="#6445A2"
          />
        </g>
      </g>
    </svg>
  );
};
