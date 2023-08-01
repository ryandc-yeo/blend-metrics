import WorkflowTemplate_Sidebar from "./workflowTemplate_sidebar";
import PopUpHeader from "./popUpHeader";
import PopUpBody from "./popUpBody";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

const PopUpWindow = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <p className="hover:cursor-pointer">trigger</p>
        {/* <button className="text-violet11 shadow-blackA7 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
          Edit profile
        </button> */}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed w-fit focus:outline-none">
          <div className="flex flex-col">
            <PopUpHeader />
            <div className="flex overflow-hidden">
              <WorkflowTemplate_Sidebar />
              <PopUpBody />
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default PopUpWindow;
