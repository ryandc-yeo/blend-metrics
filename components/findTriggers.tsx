import * as Label from "@radix-ui/react-label";
import Image from "next/image";
import { FindTriggersIcon } from "@/components/assets";

export type Props = {
  variant?: true | false;
};

const FindTriggers = ({ variant = true }) => {
  // <div className="px-5">
  //   <Label.Root className="absolute p" htmlFor="findTriggers">
  //     </Label.Root>
  //   <input
  //     className="bg-blackA5 shadow-blackA9 inline-flex h-[35px] w-[200px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
  //     type="text"
  //     id="findTriggers"
  //     defaultValue="Pedro Duarte"
  //   />
  // </div>

  // return (
  //   <input
  //     className="border shadow-[0_0_0_4px_#E1EAFF]"
  //     placeholder="hello"
  //     type="text"
  //   />
  // );

  if (variant) {
    return (
      <div className="flex items-center">
        <i className="absolute pl-3">
          <FindTriggersIcon />
          {/* <Image src={findTriggersIcon} alt="a search icon" /> */}
        </i>
        <input
          className="h-9 w-56 rounded-[5px] border border-gray-300 bg-white pl-8 pr-[10px] text-sm leading-6 outline-none hover:border-[#A4BEFF] hover:shadow-[0_0_0_4px_#E1EAFF] focus:border-[#306CFE] focus:shadow-[0_0_0_4px_#E1EAFF]"
          placeholder="Find triggers"
        />
      </div>
    );
  } else {
    return (
      <div className="flex items-center">
        <i className="absolute pl-3">
          <FindTriggersIcon />
          {/* <Image src={findTriggersIcon} alt="a search icon" /> */}
        </i>
        <input
          className="shadow-[0_1px_2px_0_rgba(16, 24, 40, 0.05)] h-9 w-56 rounded-[5px] border border-gray-300 bg-white pl-8 text-sm leading-6"
          placeholder="Find triggers"
          disabled
        />
      </div>
    );
  }
};

export default FindTriggers;
