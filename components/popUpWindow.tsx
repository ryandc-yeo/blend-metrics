"use client";

import { createContext } from "react";
import WorkflowTemplate_Sidebar from "./workflowTemplate_sidebar";
import PopUpHeader from "./popUpHeader";
import PopUpBody from "./popUpBody";
import FindTriggers from "./findTriggers";
import * as React from "react";
// import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { CloseIcon } from "./assets";
import { Transition, Dialog } from "@headlessui/react";
import { useState, Fragment } from "react";

const PopUpWindow = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div>
      {/* You can open the modal using ID.showModal() method */}
      <button className="btn" onClick={openModal}>
        trigger
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-left">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-300"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[1260px] transform overflow-hidden rounded-xl bg-white transition-all">
                  <section
                    id="popup-header"
                    className="flex h-[70px] w-[1260px] shrink-0 items-center justify-between rounded-t-xl border-b border-[#EAECF0] bg-white py-[17px] pl-[23px] pr-[15px]"
                  >
                    <div className="text-xl font-semibold text-gray-600">
                      Select a Workflow Template
                    </div>
                    <div className="flex items-center gap-3 self-stretch">
                      <FindTriggers />
                      <button
                        className="btn btn-sm btn-circle btn-ghost flex h-9 w-9 items-center justify-center rounded-md duration-300 hover:cursor-pointer hover:bg-gray-100"
                        onClick={closeModal}
                      >
                        {/* ✕ */}
                        <CloseIcon />
                      </button>
                    </div>
                  </section>
                  <section id="popup-body" className="flex flex-col">
                    <div className="flex overflow-hidden">
                      <WorkflowTemplate_Sidebar />
                      <PopUpBody />
                    </div>
                  </section>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

PopUpWindow.displayName = "PopUpWindow";
export default PopUpWindow;
