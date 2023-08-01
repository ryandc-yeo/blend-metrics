import Image from "next/image";
import { GmailIcon } from "@/components/assets";

const WorkflowTemplate = ({
  // var1 = GmailIcon,
  // var2 = GmailIcon,
  // var3 = GmailIcon,
  header = "Send Google files to OneDrive",
  body = "Lorem ipsum dolor sit amet, consec tetur adipiscing.",
}) => {
  return (
    // build popup window, add 300ms transition
    <div className="group flex h-[150px] w-[192px] flex-col gap-[6px] rounded-lg bg-white p-3 shadow-[0_1px_5px_0_rgba(16,24,40,0.02)] outline outline-1 outline-gray-200 duration-300 hover:outline-2 hover:outline-gray-300">
      <div className="flex flex-row gap-2">
        <GmailIcon />
        <GmailIcon />
        <GmailIcon />
        {/* <Image src={var1} alt="a gmail icon" />
        <Image src={var2} alt="a gmail icon" />
        <Image src={var3} alt="a gmail icon" /> */}
      </div>
      <div className="relative flex flex-col gap-[5px]">
        <h4 className="min-h-[14px] text-xs font-semibold leading-[14px] text-gray-600 duration-300 group-hover:w-[88%] group-hover:truncate">
          {header}
        </h4>
        <textarea
          rows={4}
          className="bottom- h-8 resize-none self-stretch overflow-hidden border-none bg-transparent text-xs font-normal text-gray-500 shadow-none outline-none group-hover:h-full"
        >
          {body}
        </textarea>
      </div>
    </div>
  );
};

export default WorkflowTemplate;
