import Image from "next/image";
import { useState } from "react";
import { MetricItemImage } from "@/components/assets";
import { useSpring, animated } from "@react-spring/web";

const ProjectCard = ({ name = "Project Name" }) => {
  const [hover, setHover] = useState(false);

  const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 300,
  });

  return (
    <div
      className="group relative flex h-[154px] w-[232px] flex-col justify-end overflow-hidden rounded-lg bg-white shadow-[0_1px_5px_0_rgba(16,24,40,0.02)] outline outline-1 outline-gray-200 duration-300 ease-in hover:outline-2 hover:outline-gray-300"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <MetricItemImage />
      {/* <Image
        src={projectCover}
        alt="project cover"
        className="absolute top-0 h-[150px]"
      /> */}
      <div className="absolute w-[232px] border-t border-[#EAECF0] bg-white px-[15px] py-[10px] group-hover:px-[14px] group-hover:py-[9px]">
        <p className="text-xs font-medium leading-5 text-gray-600">{name}</p>
        {hover && (
          <animated.div style={props}>
            <p className="text-[10px] font-medium leading-5 text-gray-600 opacity-0 duration-300 group-hover:opacity-100">
              Last Edit on Dec 25th, 2023
            </p>
          </animated.div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
