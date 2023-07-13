import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui";

const meta: Meta = {
  component: DropdownMenu,
};

export default meta;

type Story = StoryObj<typeof DropdownMenu>;

export const SortBy: Story = {
  render: (args) => {
    return (
      <DropdownMenu {...args}>
        <DropdownMenuTrigger className="inline-flex items-center gap-x-1 text-sm font-medium focus:outline-none">
          Sort by
          <ChevronDown size={16} className="text-gray-500" />
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuRadioGroup className="space-y-1">
            <DropdownMenuRadioItem value="option 1">
              Option 1
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="option 2">
              Option 2
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="option 3">
              Option 3
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=580-203054&mode=design&t=r9TEGYqxlEOfyK72-4",
    },
  },
};

export const SelectRole: Story = {
  render: (args) => {
    return (
      <DropdownMenu {...args}>
        <DropdownMenuTrigger className="inline-flex items-center gap-x-1 text-sm font-medium focus:outline-none">
          Administrator
          <ChevronDown size={16} className="text-gray-500" />
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuRadioGroup className="space-y-1">
            <DropdownMenuRadioItem value="option 1">
              Option 1
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="option 2">
              Option 2
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="option 3">
              Option 3
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=580-203055&mode=design&t=r9TEGYqxlEOfyK72-4",
    },
  },
};
