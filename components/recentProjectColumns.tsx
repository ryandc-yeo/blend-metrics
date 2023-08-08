import Image from "next/image";
import ProjectCard from "./projectCard";

const RecentProjectColumns = ({ projects = ["Project 1"] }) => {
  return (
    <div className="relative flex w-full gap-[34px] rounded-xl border bg-gray-100 p-[50px]">
      {projects.map((value, index: number) => (
        <ProjectCard key={index} name={value} />
      ))}
      {projects.length == 5 ? (
        ""
      ) : (
        <button className="absolute bottom-[30px] right-[30px] flex items-center justify-center px-[14px] py-2 text-sm font-semibold leading-5 text-[#306CFE]">
          + New Project
        </button>
      )}
    </div>
  );
};

export default RecentProjectColumns;
