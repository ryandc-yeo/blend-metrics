import { BlankProjectSm, BlankProjectLg } from "@/components/assets";

const BlankProject = () => {
  return (
    <button className="group relative flex h-[150px] w-full flex-col gap-[6px] rounded-lg bg-white p-3 shadow-[0_1px_5px_0_rgba(16,24,40,0.02)] outline outline-1 outline-gray-200 duration-300 hover:outline-2 hover:outline-gray-300">
      <div className="absolute left-[42.5%] top-[42.5%] duration-300 group-hover:opacity-0">
        <BlankProjectSm />
      </div>
      <div className="absolute left-[41%] top-[41%] opacity-0 duration-300 group-hover:opacity-100">
        <BlankProjectLg />
      </div>

      <p className="absolute bottom-[8%] left-[8%] text-xs font-semibold text-gray-600">
        Blank Project
      </p>
    </button>
  );
};

export default BlankProject;
