import { MetricItemImage } from "@/components/assets";

const ProjectCard = ({ name = "Project Name" }) => {
  return (
    <div className="group relative flex h-[154px] w-[232px] flex-col justify-end overflow-hidden rounded-lg bg-white shadow-[0_1px_5px_0_rgba(16,24,40,0.02)] outline outline-1 outline-gray-200 duration-300 ease-in hover:cursor-pointer hover:outline-2 hover:outline-gray-300">
      <MetricItemImage cName="absolute top-0 h-[200px]" />
      {/* <Image
        src={projectCover}
        alt="project cover"
        className="absolute top-0 h-[150px]"
      /> */}
      <div className="absolute w-[232px] border-t border-[#EAECF0] bg-white px-[15px] py-[10px] duration-300 group-hover:opacity-0">
        <p className="text-xs font-medium leading-5 text-gray-600">{name}</p>
      </div>
      <div className="absolute w-[232px] border-t border-[#EAECF0] bg-white px-[15px] py-[10px] opacity-0 duration-300 group-hover:opacity-100">
        <p className="text-xs font-medium leading-5 text-gray-600">{name}</p>
        <div>
          <p className="text-[10px] font-medium leading-5 text-gray-600">
            Last Edit on Dec 25th, 2023
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
