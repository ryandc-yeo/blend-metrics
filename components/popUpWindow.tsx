"use client";

import { createContext } from "react";
import WorkflowTemplate_Sidebar from "./workflowTemplate_sidebar";
import PopUpHeader from "./popUpHeader";
import PopUpBody from "./popUpBody";
import FindTriggers from "./findTriggers";
import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { CloseIcon } from "./assets";

const PopUpWindow = ({ id }) => {
  return (
    <div>
      {/* You can open the modal using ID.showModal() method */}
      <button className="btn" onClick={() => window.modal.showModal()}>
        trigger
      </button>
      <dialog id="modal" className="modal rounded-xl p-0">
        <form method="dialog" className="modal-box">
          <section
            id="popup-header"
            className="flex h-[70px] w-[1260px] shrink-0 items-center justify-between rounded-t-xl border-b border-[#EAECF0] bg-white py-[17px] pl-[23px] pr-[15px]"
          >
            <div className="text-xl font-semibold text-gray-600">
              Select a Workflow Template
            </div>
            <div className="flex items-center gap-3 self-stretch">
              <FindTriggers />
              <button className="btn btn-sm btn-circle btn-ghost flex h-9 w-9 items-center justify-center rounded-md duration-300 hover:cursor-pointer hover:bg-gray-100">
                {/* ✕ */}
                <CloseIcon />
              </button>
            </div>
          </section>
          <div className="flex flex-col">
            <div className="flex overflow-hidden">
              <WorkflowTemplate_Sidebar />
              <PopUpBody />
            </div>
          </div>
        </form>
      </dialog>
    </div>
    // <Dialog.Root>
    //   <Dialog.Trigger asChild>
    //     <p className="hover:cursor-pointer">trigger</p>
    //     {/* <button className="text-violet11 shadow-blackA7 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
    //       Edit profile
    //     </button> */}
    //   </Dialog.Trigger>
    //   <Dialog.Portal container={id}>
    //     <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0 left-[10%] right-[10%] z-10" />
    //     <Dialog.Content className="data-[state=open]:animate-contentShow absolute left-[10%] right-[10%] z-10 w-fit focus:outline-none">
    //       <div className="flex flex-col">
    //         <PopUpHeader />
    //         <div className="flex overflow-hidden">
    //           <WorkflowTemplate_Sidebar />
    //           <PopUpBody />
    //         </div>
    //       </div>
    //     </Dialog.Content>
    //   </Dialog.Portal>
    // </Dialog.Root>
  );
};

// const PopUpWindow = React.forwardRef<
//   React.ElementRef<typeof Dialog.Trigger>,
//   React.ComponentPropsWithoutRef<typeof Dialog.Trigger>
// >((props, forwardedRef) => (
//   <Dialog.Root>
//     <Dialog.Trigger asChild>
//       <p className="hover:cursor-pointer">trigger</p>
//       {/* <button className="text-violet11 shadow-blackA7 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
//           Edit profile
//         </button> */}
//     </Dialog.Trigger>
//     <Dialog.Portal container={document.getElementById("popup-target")}>
//       <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0 left-0" />
//       <Dialog.Content className="data-[state=open]:animate-contentShow fixed w-fit focus:outline-none">
//         <div className="flex flex-col">
//           <PopUpHeader />
//           <div className="flex overflow-hidden">
//             <WorkflowTemplate_Sidebar />
//             <PopUpBody />
//           </div>
//         </div>
//       </Dialog.Content>
//     </Dialog.Portal>
//   </Dialog.Root>
// ));

PopUpWindow.displayName = "PopUpWindow";
export default PopUpWindow;
