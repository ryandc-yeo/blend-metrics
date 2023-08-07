import Image from "next/image";
import { cn } from "@/lib/utils";

export const MetricItemImage = ({ cName, ...props }) => {
  return (
    <Image
      src="/metric-item.png"
      alt="me"
      width={300}
      height={400}
      className={cn("", cName)}
      {...props}
    />
  );
};
