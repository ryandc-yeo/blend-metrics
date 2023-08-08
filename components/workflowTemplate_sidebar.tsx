"use client";

import CategoryName from "./categoryName";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import {
  ViewMarketplaceIcon,
  ViewAllIcon,
  ViewAllBlueIcon,
  RecommendedIcon,
  RecommendedBlueIcon,
  RecentlyViewedIcon,
  RecentlyViewedBlueIcon,
  MyCollectionIcon,
  MyCollectionBlueIcon,
} from "@/components/assets";
import { useState } from "react";

const TAGS = Array.from({ length: 10 }).map(
  (_, i, a) => `Category Name ${a.length - i}`
);

const WorkflowTemplate_Sidebar = () => {
  return (
    <div className="relative h-[635px] w-56 overflow-hidden rounded-bl-xl bg-white pb-[5px] pl-[15px]">
      <ScrollArea.Root className="h-[91%] w-full overflow-hidden bg-white pt-[15px]">
        <ScrollArea.Viewport className="h-full w-full">
          <div className="flex w-[87%] flex-col gap-6">
            <div className="flex w-full flex-col gap-2 self-stretch">
              <h3 className="text-xs font-medium uppercase leading-5 tracking-[0.24px] text-gray-500">
                for you
              </h3>
              <div className="flex flex-col gap-1">
                <CategoryName
                  title="view all"
                  icon={ViewAllIcon}
                  iconBlue={ViewAllBlueIcon}
                  variant={true}
                />
                <CategoryName
                  title="recommended"
                  icon={RecommendedIcon}
                  iconBlue={RecommendedBlueIcon}
                />
                <CategoryName
                  title="recently viewed"
                  icon={RecentlyViewedIcon}
                  iconBlue={RecentlyViewedBlueIcon}
                />
                <CategoryName
                  title="my collection"
                  icon={MyCollectionIcon}
                  iconBlue={MyCollectionBlueIcon}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xs font-medium uppercase leading-5 tracking-[0.24px] text-gray-500">
                browse by category
              </h3>
              {TAGS.map((tag) => (
                <div className="flex flex-col gap-1" key={tag}>
                  <CategoryName title={tag} />
                </div>
              ))}
            </div>
          </div>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          className="duration-[160ms] absolute right-[10px] flex touch-none select-none bg-white px-1 py-[3px] transition-colors ease-out data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-[13px] data-[orientation=horizontal]:flex-col"
          orientation="vertical"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-[7px] bg-[#EAECF0] before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[7px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
      <div className="absolute bottom-[15px] h-fit w-fit hover:cursor-pointer">
        <a className="flex gap-2 text-[#306CFE]">
          <p className="text-center text-sm font-semibold capitalize leading-5">
            View Marketplace
          </p>
          <ViewMarketplaceIcon />
          {/* <Image src={ViewMarketplaceIcon} alt="share icon" /> */}
        </a>
      </div>
    </div>
  );
};

export default WorkflowTemplate_Sidebar;
