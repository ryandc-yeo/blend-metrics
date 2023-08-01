import Image from "next/image";
import { UnknownIcon } from "@/components/assets";

const PopularApps = (
  {
    /* var1 = UnknownIcon */
  }
) => {
  return (
    <div className="flex h-[86px] w-[83px] flex-col items-center justify-center rounded-lg border border-gray-200 shadow-[0_1px_5px_0_rgba(16,24,40,0.02)] hover:border-2 hover:border-gray-300">
      <div className="flex flex-row gap-2">
        <UnknownIcon />
        {/* <Image src={var1} alt="an app icon" /> */}
      </div>
    </div>
  );
};

export default PopularApps;
