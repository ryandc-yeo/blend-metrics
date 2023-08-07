import { FindTriggersIcon } from "@/components/assets";

export type Props = {
  variant?: true | false;
};

const FindTriggers = ({ variant = true }) => {
  if (variant) {
    return (
      <div className="flex items-center">
        <i className="absolute pl-3">
          <FindTriggersIcon />
        </i>
        <input
          className="h-9 w-56 rounded-[5px] border border-gray-300 bg-white pl-8 pr-[10px] text-sm leading-6 outline-none hover:border-[#A4BEFF] hover:shadow-[0_0_0_4px_#E1EAFF] focus:border-[#306CFE] focus:shadow-[0_0_0_4px_#E1EAFF]"
          placeholder="Find triggers"
          tabIndex={-1} // should we keep for accessibility
        />
      </div>
    );
  } else {
    return (
      <div className="flex items-center">
        <i className="absolute pl-3">
          <FindTriggersIcon />
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
