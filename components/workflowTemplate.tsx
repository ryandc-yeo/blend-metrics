import { GmailIcon } from "@/components/assets";

const WorkflowTemplate = ({
  header = "Send Google files to OneDrive",
  body = "Lorem ipsum dolor sit amet, consec tetur adipiscing. Lorem ipsum dolor sit amet, consec tetur adipiscing.",
}) => {
  return (
    // build popup window, add 300ms transition
    <div className="group flex h-[150px] w-full flex-col gap-[6px] overflow-hidden rounded-lg bg-white p-3 shadow-[0_1px_5px_0_rgba(16,24,40,0.02)] outline outline-1 outline-gray-200 transition-all duration-300 hover:outline-2 hover:outline-gray-300">
      <div className="flex flex-row gap-2">
        <GmailIcon />
        <GmailIcon />
        <GmailIcon />
      </div>
      <div className="relative flex min-w-0 flex-col gap-[5px]">
        <h4 className="min-h-[14px] w-[88%] overflow-hidden text-xs font-semibold leading-[14px] text-gray-600 transition-all duration-300 ease-out group-hover:overflow-ellipsis group-hover:whitespace-nowrap">
          {header}
        </h4>

        <textarea
          rows={4}
          className="h-8 resize-none overflow-hidden border-none bg-transparent p-0 text-xs font-normal text-gray-500 shadow-none outline-none transition-all duration-300 ease-out group-hover:h-full"
          disabled
        >
          {body}
        </textarea>
      </div>
    </div>
  );
};

export default WorkflowTemplate;
