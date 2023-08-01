import Image from "next/image";

import { BlankProjectSm, BlankProjectLg } from "@/components/assets";

const BlankProject = () => {
  return (
    <button className="group flex h-28 w-32 flex-col items-center justify-center rounded-lg border border-gray-200 bg-white shadow-[0_1px_5px_0_rgba(16,24,40,0.02)] hover:border-2 hover:border-gray-300">
      <div className="absolute group-hover:opacity-0">
        <BlankProjectSm />
        {/* <Image src={BlankProjectSm} alt="a small add icon" /> */}
      </div>
      <div className="absolute opacity-0 group-hover:opacity-100">
        <BlankProjectLg />
        {/* <Image src={BlankProjectLg} alt="a large add icon" /> */}
      </div>

      <p className="relative pr-6 pt-20 text-xs font-semibold text-gray-600">
        Blank Project
      </p>
    </button>
  );
};

export default BlankProject;
