import Image from "next/image";
import { PlayBtn, HoverPlayBtn } from "@/components/assets";

const VideoCard = ({
  title = "Video Title",
  body = "Luctus tincidunt faucibus Nullam ultrices est.",
  timestamp = "01:20",
}) => {
  return (
    <div className="relative flex w-[153px] flex-col gap-[10px] hover:cursor-pointer">
      <div className="group flex h-[92px] items-center justify-center rounded bg-black">
        {/* video thumbnail in the bg of div */}
        <PlayBtn className="absolute duration-300 group-hover:opacity-0" />
        <HoverPlayBtn className="absolute opacity-0 duration-300 group-hover:opacity-100" />
        {/* <Image
          className="absolute group-hover:opacity-0"
          src={PlayBtn}
          alt="unhovered play button"
        /> */}
        {/* <Image
          className="absolute opacity-0 group-hover:opacity-100"
          src={HoverPlayBtn}
          alt="hovered play button"
        /> */}
        <div className="ml-28 mt-16 w-7 rounded-[3px] bg-[#727A86] p-[3px] text-center text-[8px] text-white">
          {timestamp}
        </div>
      </div>
      <div className="">
        <h4 className=" text-sm font-semibold leading-9 text-[#35393F]">
          {title}
        </h4>
        <p className="text-xs font-normal leading-[18px] text-[#35393F]">
          {body}
        </p>
      </div>
    </div>
  );
};
//absolute relative

export default VideoCard;
