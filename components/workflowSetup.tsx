import Image from "next/image";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { GmailIcon, MetricItemImage } from "@/components/assets";
import { useState } from "react";

const WorkflowSetup = ({
  // image = MetricItem,
  // icon1 = GmailIcon,
  // icon2 = GmailIcon,
  // icon3 = GmailIcon,
  // icon4 = GmailIcon,
  // icon5 = GmailIcon,
  isHeart = false,
  templateName = "Template Name",
  body = "Lorem ipsum dolor sit amet, consec tetur adipiscing elit Lorem ipsum dolor sit amet, consec tetur adipiscing elit",
}) => {
  const [heart, setHeart] = useState(isHeart);

  const handleHeart = () => {
    setHeart(!heart);
  };

  return (
    <div className="group flex max-w-[308px] flex-col justify-center gap-5 rounded-lg bg-white p-5 shadow-[0_1px_4px_0_rgba(0,0,0,0.03)] outline outline-1 outline-gray-200 duration-300 ease-out hover:outline-2 hover:outline-gray-300">
      <div>
        <div className="mb-3 rounded-lg border border-gray-200">
          <MetricItemImage cName={undefined} />
          {/* <Image src={image} alt="metric item" /> */}
        </div>
        <div className="mb-3 flex flex-row items-center gap-2">
          <GmailIcon />
          <GmailIcon />
          <GmailIcon />
          <GmailIcon />
          <GmailIcon />
          {/* <Image src={icon1} alt="a gmail icon" />
          <Image src={icon2} alt="a gmail icon" />
          <Image src={icon3} alt="a gmail icon" />
          <Image src={icon4} alt="a gmail icon" />
          <Image src={icon5} alt="a gmail icon" /> */}
          <p className="text-xs leading-5 text-gray-500">+2 More</p>
        </div>
        <div>
          <div className="flex flex-row items-center justify-between">
            <h4 className="text-sm font-medium leading-6 text-gray-600">
              {templateName}
            </h4>
            {heart ? (
              <AiFillHeart
                onClick={handleHeart}
                style={{ color: "#F04438" }}
                className="hover:cursor-pointer"
              />
            ) : (
              <AiOutlineHeart
                onClick={handleHeart}
                style={{ color: "#667085" }}
                className="opacity-0 group-hover:opacity-100 hover:cursor-pointer"
              />
            )}
          </div>
          <p className="text-xs font-normal text-gray-500">{body}</p>
        </div>
      </div>
      <div className="flex flex-row gap-3">
        <button className="w-[128px] rounded-[5px] bg-[#306CFE] bg-opacity-[15%] px-[14px] py-2 text-[13px] font-semibold leading-5 text-[#306CFE]">
          Details
        </button>
        <button className="shadow-[0_1px_2px_0_rgba(16,24,40,0.05) w-[128px] rounded-[5px] bg-[#306CFE] px-[14px] py-2 text-[13px] font-semibold leading-5 text-white">
          Try Template
        </button>
      </div>
    </div>
  );
};

export default WorkflowSetup;
