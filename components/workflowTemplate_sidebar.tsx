"use client";

import {
  CategoryName,
  ViewAll,
  Recommended,
  RecentlyViewed,
  MyCollection,
} from "./categoryName";
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
import { RadioGroup } from "@headlessui/react";

const WorkflowTemplate_Sidebar = () => {
  const [option, setOption] = useState(1);

  return (
    <div className="relative h-[635px] w-56 overflow-hidden rounded-bl-xl bg-white pb-[5px] pl-[15px]">
      <ScrollArea.Root className="h-[91%] w-full overflow-hidden bg-white pt-[15px]">
        <ScrollArea.Viewport className="h-full w-full">
          <RadioGroup value={option} onChange={setOption} defaultValue={1}>
            <div className="flex w-[87%] flex-col gap-6">
              <div className="flex w-full flex-col gap-2 self-stretch">
                <h3 className="text-xs font-medium uppercase leading-5 tracking-[0.24px] text-gray-500">
                  for you
                </h3>
                <div className="flex flex-col gap-1">
                  <RadioGroup.Option value={1}>
                    {({ checked }) => <ViewAll variant={checked} />}
                  </RadioGroup.Option>
                  <RadioGroup.Option value={2}>
                    {({ checked }) => <Recommended variant={checked} />}
                  </RadioGroup.Option>
                  <RadioGroup.Option value={3}>
                    {({ checked }) => <RecentlyViewed variant={checked} />}
                  </RadioGroup.Option>
                  <RadioGroup.Option value={4}>
                    {({ checked }) => <MyCollection variant={checked} />}
                  </RadioGroup.Option>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xs font-medium uppercase leading-5 tracking-[0.24px] text-gray-500">
                  browse by category
                </h3>
                <div className="flex flex-col gap-1">
                  <RadioGroup.Option value={5}>
                    {({ checked }) => (
                      <CategoryName variant={checked} title="Category 1" />
                    )}
                  </RadioGroup.Option>
                  <RadioGroup.Option value={6}>
                    {({ checked }) => (
                      <CategoryName variant={checked} title="Category 2" />
                    )}
                  </RadioGroup.Option>
                  <RadioGroup.Option value={7}>
                    {({ checked }) => <CategoryName variant={checked} />}
                  </RadioGroup.Option>
                  <RadioGroup.Option value={8}>
                    {({ checked }) => <CategoryName variant={checked} />}
                  </RadioGroup.Option>
                  <RadioGroup.Option value={9}>
                    {({ checked }) => <CategoryName variant={checked} />}
                  </RadioGroup.Option>
                  <RadioGroup.Option value={10}>
                    {({ checked }) => <CategoryName variant={checked} />}
                  </RadioGroup.Option>
                  <RadioGroup.Option value={11}>
                    {({ checked }) => <CategoryName variant={checked} />}
                  </RadioGroup.Option>
                  <RadioGroup.Option value={12}>
                    {({ checked }) => <CategoryName variant={checked} />}
                  </RadioGroup.Option>
                  <RadioGroup.Option value={13}>
                    {({ checked }) => <CategoryName variant={checked} />}
                  </RadioGroup.Option>
                  <RadioGroup.Option value={14}>
                    {({ checked }) => <CategoryName variant={checked} />}
                  </RadioGroup.Option>
                  <RadioGroup.Option value={15}>
                    {({ checked }) => <CategoryName variant={checked} />}
                  </RadioGroup.Option>
                  <RadioGroup.Option value={16}>
                    {({ checked }) => <CategoryName variant={checked} />}
                  </RadioGroup.Option>
                </div>
              </div>
            </div>
          </RadioGroup>
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
          <p className="text-center text-sm font-semibold capitalize leading-5 hover:underline">
            View Marketplace
          </p>
          <ViewMarketplaceIcon />
        </a>
      </div>
    </div>
  );
};

export default WorkflowTemplate_Sidebar;
