import { Meta, StoryObj } from "@storybook/react";

import { HelpCircle } from "@/components/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui";

const meta: Meta = {
  title: "Tooltip",
  component: TooltipContent,
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md"],
    },
  },
  parameters: {
    type: "figma",
    url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=329-201105&mode=design&t=0pofMbZEfin42GC7-4",
  },
};

export default meta;

type Story = StoryObj<typeof TooltipContent>;

export const Sm: Story = {
  render: (args) => {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="text-gray-500">
            <HelpCircle />
          </TooltipTrigger>
          <TooltipContent
            className="text-xs leading-[18px] text-white"
            {...args}
          >
            This is a tooltip
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  },
};

export const Md: Story = {
  args: {
    size: "md",
  },
  render: (args) => {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="text-gray-500">
            <HelpCircle />
          </TooltipTrigger>
          <TooltipContent
            className="text-xs leading-[18px] text-white"
            {...args}
          >
            <span className="font-semibold">This is a tooltip</span>
            <div className="mt-1">
              <span>
                Tooltips are used to describe or identify an element. In most
                scenarios, tooltips help the user understand the meaning,
                function or alt-text of an element.
              </span>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  },
};
