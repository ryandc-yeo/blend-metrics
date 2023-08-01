import Image from "next/image";
import { useState } from "react";
import { TriggerIconImage } from "@/components/assets";

const TriggersCard = ({
  body = "Lorem ipsum dolor sit amet, consec tetur",
}) => {
  return (
    <div className="shadow-[0_1px_4px_0_rgba(0,0,0,0.03) flex w-[313px] items-center gap-3 rounded-lg border bg-white py-3 pl-3 pr-[18px] hover:rounded-lg hover:border-2 hover:border-gray-300 hover:p-[11px] hover:pr-[17px]">
      <div className="flex h-10 w-12 items-center justify-center rounded-lg border border-[#EAECF0]">
        <TriggerIconImage />
        {/* <Image src={TriggerIcon} alt="trigger icon" width={24} height={24} /> */}
      </div>
      <div className="text-sm font-medium leading-[22px] text-gray-600">
        {body}
      </div>
    </div>
  );
};

export default TriggersCard;
