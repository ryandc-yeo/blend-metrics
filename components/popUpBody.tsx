"use client";

import { createContext } from "react";

import { useState } from "react";
import WorkflowSetup from "./workflowSetup";
import {
  BackBtn,
  MetricItemImage,
  VideoPlayerImage,
} from "@/components/assets";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import Image from "next/image";
import ProfileCard from "./profileCard";
import Triggers from "./triggers";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
import { ChevronDown } from "@/components/icons";

// https://upmostly.com/tutorials/calling-a-react-component-on-button-click

const PopUpBody = ({
  /*args*/
  args = [1, 2, 3],
}) => {
  const [overlay, setOverlay] = useState(true);

  return (
    <ScrollArea.Root className="h-[635px] w-fit overflow-hidden rounded-br-xl bg-gray-50 p-8">
      <ScrollArea.Viewport className="flex h-full w-full flex-col gap-10">
        {overlay ? (
          <div className="m-1 w-[972px]">
            <div className="flex justify-between pb-8 hover:cursor-pointer">
              <div
                className="flex gap-1 text-sm font-semibold leading-5 text-[#306CFE]"
                onClick={() => {
                  setOverlay(!overlay);
                }}
              >
                <BackBtn />
                {/* <Image src={BackBtn} alt="back button" /> */}
                <p>Back to Templates</p>
              </div>
            </div>
            <div className="h-[325px] overflow-hidden rounded-lg border border-gray-200 shadow-[0_1px_5px_0_rgba(16,24,40,0.02)]">
              <MetricItemImage cName={undefined} />
              {/* <Image
                src={MetricItemImage}
                alt="metric item"
                className="translate-y-[-20%] "
              /> */}
            </div>
            <section className="flex flex-col gap-8 self-stretch py-8">
              <div className="flex flex-col gap-3 self-stretch">
                <h2 className="text-2xl font-semibold text-gray-600">
                  Workflow Template Name
                </h2>
                <p className="text-sm leading-[22px] text-gray-800">
                  Lorem ipsum dolor sit amet, consec tetur adipiscing elit Lorem
                  ipsum dolor sit amet, consec tetur adipiscing elit Lorem ipsum
                  dolor sit amet, consec tetur adipiscing elit Lorem ipsum dolor
                  sit amet, consec tetur adipiscing elit Lorem ipsum dolor sit
                  amet, consec tetur adipiscing elit Lorem ipsum dolor sit amet,
                  consec tetur adipiscing elit
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consec tetur adipiscing elit Lorem
                  ipsum dolor sit amet, consec tetur adipiscing elit Lorem ipsum
                  dolor sit amet, consec tetur adipiscing elit Lorem ipsum dolor
                  sit amet, consec tetur adipiscing elit Lorem ipsum dolor sit
                  amet, consec tetur adipiscing elit Lorem ipsum dolor sit amet,
                  consec tetur adipiscing elit Lorem ipsum dolor sit amet,
                  consec tetur adipiscing elit Lorem ipsum dolor sit amet,
                  consec tetur adipiscing elit
                </p>
              </div>
              <ProfileCard />
              <div className="flex flex-col gap-4">
                <Tabs defaultValue="triggers" {...args}>
                  <TabsList className="border-none px-[-20px] pb-4">
                    <TabsTrigger
                      value="triggers"
                      className="border-transparent"
                    >
                      Triggers
                    </TabsTrigger>
                    <TabsTrigger value="actions" className="border-transparent">
                      Actions
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="triggers">
                    <Triggers count={7} />
                  </TabsContent>
                  <TabsContent value="actions">
                    <Triggers count={3} />
                  </TabsContent>
                </Tabs>
              </div>
            </section>
            <section className="flex flex-col gap-4">
              <div className="flex justify-between">
                <h2 className="text-[20px] font-semibold leading-8 text-gray-600">
                  Related Templates
                </h2>
                <button className="text-sm font-semibold capitalize leading-5 text-gray-500">
                  View More
                </button>
              </div>
              <div className="ml-0.5 flex h-fit w-full flex-wrap gap-5 overflow-visible border-none">
                {/* <VideoPlayerImage />
                <VideoPlayerImage />
                <VideoPlayerImage />
                <VideoPlayerImage />
                <VideoPlayerImage />
                <VideoPlayerImage /> */}
                <WorkflowSetup />
                <WorkflowSetup />
                <WorkflowSetup />
                <WorkflowSetup />
                <WorkflowSetup />
                <WorkflowSetup />
              </div>
            </section>
          </div>
        ) : (
          <div className="m-1">
            <section id="featured" className="flex flex-col gap-4 self-stretch">
              <div className="flex w-[972px] items-center justify-between">
                <div className="text-xl font-semibold leading-8 text-gray-600">
                  Featured
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-sm font-medium leading-5 text-gray-500">
                    Filter
                  </div>
                  {/* issue with dropdown column */}
                  <DropdownMenu {...args}>
                    <DropdownMenuTrigger className="flex h-9 w-[168px] items-center justify-between rounded-[5px] border border-gray-300 bg-white px-3.5 py-2.5 text-sm font-semibold capitalize text-gray-900 focus-visible:outline-none">
                      <p>All Templates</p>{" "}
                      <ChevronDown className="text-gray-500" />
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className="min-w-[202px]">
                      <DropdownMenuItem>Option 1</DropdownMenuItem>
                      <DropdownMenuItem>Option 1</DropdownMenuItem>
                      <DropdownMenuItem>Option 1</DropdownMenuItem>
                      <DropdownMenuItem>Option 1</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  {/* <DropdownMenu {...args}>
                <DropdownMenuTrigger className="inline-flex items-center gap-x-2 rounded-[5px] border border-gray-300 px-[14px] py-2 text-sm font-semibold text-gray-800 focus-visible:outline-none">
                  Select{" "}
                  <ChevronDown className="h-[15px] w-[15px] text-gray-500" />
                </DropdownMenuTrigger>

                <DropdownMenuContent className="min-w-[180px] py-1">
                  <DropdownMenuCheckboxItem>
                    <div className="flex items-center justify-between">
                      Select
                      <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
                    </div>
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    <div className="flex items-center justify-between">
                      Select
                      <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
                    </div>
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    <div className="flex items-center justify-between">
                      Select
                      <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
                    </div>
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    <div className="flex items-center justify-between">
                      Select
                      <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
                    </div>
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu> */}
                </div>
              </div>
              <div className="flex w-[972px] gap-5">
                <WorkflowSetup />
                <WorkflowSetup />
                <WorkflowSetup />
              </div>
            </section>
            <section
              id="all_category"
              className="flex flex-col gap-4 self-stretch pt-10"
            >
              <div className="text-xl font-semibold leading-8 text-gray-600">
                All Category
              </div>
              <div className="flex w-[972px] gap-5">
                <WorkflowSetup />
                <WorkflowSetup />
                <WorkflowSetup />
              </div>
            </section>
          </div>
        )}
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        className="duration-[160ms] absolute right-[10px] flex touch-none select-none bg-transparent px-1 py-[3px] transition-colors ease-out data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-[13px] data-[orientation=horizontal]:flex-col"
        orientation="vertical"
      >
        <ScrollArea.Thumb className="relative flex-1 rounded-[7px] bg-[#EAECF0] before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[7px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']" />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
};

export default PopUpBody;
