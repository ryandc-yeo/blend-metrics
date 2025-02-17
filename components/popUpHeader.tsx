"use client";

import { createContext } from "react";
import FindTriggers from "./findTriggers";
import { CloseIcon } from "@/components/assets";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";

const PopUpHeader = () => {
  return (
    <div className="flex h-[70px] w-[1260px] shrink-0 items-center justify-between rounded-t-xl border-b border-[#EAECF0] bg-white py-[17px] pl-[23px] pr-[15px]">
      <div className="text-xl font-semibold text-gray-600">
        Select a Workflow Template
      </div>
      <div className="flex items-center gap-3 self-stretch">
        <FindTriggers />
      </div>
    </div>
  );
};

export default PopUpHeader;
