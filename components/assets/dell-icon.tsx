import { cn } from "@/lib/utils";

export const DellIcon = ({
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
        <g id="dell">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25.2377 21.3412C25.0733 21.2333 24.9088 21.1255 24.7452 21.0168C24.055 21.4602 23.3668 21.9056 22.6787 22.3511C21.3841 23.1891 20.0895 24.0271 18.7812 24.8514C18.3092 23.421 17.2919 22.2724 15.8569 21.8253C14.8445 21.5099 13.5888 21.551 12.2905 21.5936C11.5076 21.6193 10.7091 21.6455 9.9391 21.5943V31.227C10.7274 31.1903 11.5106 31.2126 12.2696 31.2342C13.087 31.2574 13.8763 31.2799 14.6134 31.227C16.8928 31.0631 18.2704 29.6756 18.8504 27.8313C19.8271 28.4703 20.7873 29.1259 21.7475 29.7815C22.7557 30.4699 23.764 31.1583 24.7913 31.8275C25.4514 31.405 26.1158 30.9723 26.7811 30.539C28.0567 29.7082 29.3356 28.8753 30.5939 28.1084V31.227H37.1106V28.1546C36.7251 28.1488 36.3307 28.1519 35.9362 28.1549C35.294 28.16 34.6518 28.165 34.0479 28.1317V21.5943H30.5939V24.8746C30.1665 25.1479 29.7402 25.4224 29.314 25.6969C28.1742 26.4308 27.0343 27.1647 25.8735 27.8775C25.7826 27.818 25.6878 27.7624 25.593 27.7068C25.4263 27.609 25.2595 27.5112 25.1138 27.3923C25.7668 26.9689 26.413 26.5387 27.0592 26.1084C27.94 25.5219 28.8209 24.9354 29.7191 24.3663C29.0758 23.8796 28.3897 23.4361 27.6927 23.0033C26.2587 23.9239 24.8192 24.8387 23.3797 25.7535C23.2592 25.8301 23.1387 25.9067 23.0182 25.9832C22.9008 25.8931 22.7752 25.8111 22.6497 25.729C22.5242 25.6471 22.3988 25.5651 22.2814 25.4751C22.9246 25.0639 23.5641 24.649 24.2035 24.234C25.1021 23.6509 26.0007 23.0678 26.9097 22.4952C26.3754 22.0874 25.8066 21.7143 25.2377 21.3412ZM13.2318 28.1547V24.6897C13.2298 24.6569 13.2281 24.6243 13.2547 24.6204C14.2519 24.5563 14.9706 24.6596 15.3962 25.1517C16.034 25.8891 15.8885 27.2731 15.166 27.8314C14.728 28.1698 14.176 28.1641 13.4683 28.1567C13.3913 28.1559 13.3125 28.1551 13.2318 28.1547Z"
            fill="#0083CA"
          />
          <path
            d="M41.4624 21.5943H38.0084C37.9816 21.5981 37.9834 21.6306 37.9852 21.6632L37.9852 31.2271H44.5019V28.1547H41.4624V21.5943Z"
            fill="#0083CA"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M27.5772 3.96875H26.1496C19.2513 4.34974 14.2489 7.01394 10.5837 10.691C6.93541 14.3511 4.20715 19.2914 3.85995 26.2607C3.86382 26.2876 3.85498 26.3019 3.83691 26.3069V27.6929C4.1995 34.6889 6.91297 39.5784 10.5836 43.2856C14.2543 46.9931 19.2064 49.6373 26.1496 50.0309H27.5542C34.6356 49.6814 39.3269 46.9344 43.1432 43.3088C46.776 39.4919 49.5373 34.8008 49.8899 27.6929V26.3069C49.5273 19.3109 46.8139 14.4214 43.1432 10.7141C39.4725 7.00687 34.5213 4.36159 27.5772 3.96875ZM17.9292 8.6581C19.0413 8.1064 20.2682 7.63965 21.6364 7.27212C23.0149 6.90179 24.5255 6.70178 26.1269 6.62529C29.3842 6.46971 32.4256 7.19492 34.7619 8.17303C37.1698 9.18113 39.213 10.5759 40.9099 12.2156C44.3393 15.5294 46.9379 19.8749 47.2421 26.2837C47.4029 29.6669 46.6594 32.4597 45.6763 34.8772C43.7324 39.6563 40.2252 43.1199 35.7748 45.3648C33.504 46.5101 30.7633 47.2234 27.6003 47.3745C24.3029 47.532 21.3747 46.829 19.0115 45.8268C14.2326 43.8001 10.7794 40.4654 8.51126 35.9397C7.36273 33.6476 6.63567 30.9587 6.48505 27.7621C6.24617 22.6918 7.89569 18.8251 9.80078 15.8192C11.7526 12.7398 14.5441 10.3373 17.9292 8.6581Z"
            fill="#0083CA"
          />
        </g>
      </g>
    </svg>
  );
};
