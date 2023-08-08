import FindTriggers from "./findTriggers";
import { Button } from "@/components/ui";
import { Plus } from "@/components/icons";
import { UserPlus2 } from "./assets";

const DashboardHeader = () => {
  return (
    <div className="flex h-[71px] w-full items-center justify-between border-b border-[#EAECF0] bg-white py-[15px] pl-[26px] pr-[15px]">
      <h3 className="text-sm font-semibold text-[#101828]">
        Welcome to Blend Metrics!
      </h3>
      <div className="flex gap-3">
        <FindTriggers />
        <Button
          leftIcon={<UserPlus2 />}
          className="bg-white shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] outline outline-1 outline-[#D0D5DD] hover:bg-gray-100"
        >
          <p className="text-sm font-semibold leading-5 text-gray-800">
            Invite Users
          </p>
        </Button>
        <Button leftIcon={<Plus />}>New Project</Button>
      </div>
    </div>
  );
};

export default DashboardHeader;
