import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
import {
  MoreHorizontal,
  Edit3,
  Copy,
  Zap,
  Trash2,
  ChevronDown,
  User,
  Settings,
  UserPlus,
  HelpCircle,
  LogOut,
} from "lucide-react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui";
import { Belling } from "@/components/icons";

const meta: Meta = {
  title: "DropdownMenu",
  component: DropdownMenu,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=580-201506&mode=design&t=7QvsBnlnNdzdPhOC-4",
    },
  },
};

export default meta;

type Story = StoryObj<typeof DropdownMenu>;

export const Base: Story = {
  render: (args) => {
    return (
      <DropdownMenu {...args}>
        <DropdownMenuTrigger className="flex items-center justify-center gap-x-1 text-sm font-medium text-gray-900 focus-visible:outline-none">
          Edit <ChevronDown className="text-gray-500" size={16} />
        </DropdownMenuTrigger>

        <DropdownMenuContent className="min-w-[202px]">
          <DropdownMenuItem>Option 1</DropdownMenuItem>
          <DropdownMenuItem>Option 1</DropdownMenuItem>
          <DropdownMenuItem>Option 1</DropdownMenuItem>
          <DropdownMenuItem>Option 1</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
};

export const IconVariant: Story = {
  render: (args) => {
    return (
      <DropdownMenu {...args}>
        <DropdownMenuTrigger className="rounded-[5px] px-1.5 py-1 text-gray-500 hover:bg-gray-100 focus-visible:outline-none">
          <MoreHorizontal size={15} />
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuItem className="flex items-center gap-x-2">
            <Edit3 size={16} />
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-x-2">
            <Copy size={16} />
            Duplicate
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-x-2">
            <Zap size={16} />
            Run test
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="flex items-center gap-x-2"
            variant="destructive"
          >
            <Trash2 size={16} />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
};

export const ChevronDownShortcutVariant: Story = {
  render: (args) => {
    return (
      <DropdownMenu {...args}>
        <DropdownMenuTrigger className="inline-flex items-center gap-x-2 rounded-[5px] border border-gray-300 px-[14px] py-2 text-sm font-semibold text-gray-800 focus-visible:outline-none">
          Select <ChevronDown className="h-[15px] w-[15px] text-gray-500" />
        </DropdownMenuTrigger>

        <DropdownMenuContent className="min-w-[180px] py-1">
          <DropdownMenuItem className="flex items-center gap-x-2">
            <Edit3 size={16} />
            <div className="flex flex-auto items-center justify-between">
              Edit
              <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-x-2">
            <Edit3 size={16} />
            <div className="flex flex-auto items-center justify-between">
              Edit
              <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-x-2">
            <Edit3 size={16} />
            <div className="flex flex-auto items-center justify-between">
              Edit
              <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex items-center gap-x-2">
            <Edit3 size={16} />
            <div className="flex flex-auto items-center justify-between">
              Edit
              <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-x-2">
            <Edit3 size={16} />
            <div className="flex flex-auto items-center justify-between">
              Edit
              <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="flex items-center gap-x-2"
            variant="destructive"
          >
            <Trash2 size={16} />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
};

export const MoreShortcutVariant: Story = {
  render: (args) => {
    return (
      <DropdownMenu {...args}>
        <DropdownMenuTrigger className="rounded-[5px] px-1.5 py-1 text-gray-500 hover:bg-gray-100 focus-visible:outline-none">
          <MoreHorizontal size={15} />
        </DropdownMenuTrigger>

        <DropdownMenuContent className="min-w-[180px] py-1">
          <DropdownMenuItem className="flex items-center gap-x-2">
            <Edit3 size={16} />
            <div className="flex flex-auto items-center justify-between">
              Edit
              <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-x-2">
            <Edit3 size={16} />
            <div className="flex flex-auto items-center justify-between">
              Edit
              <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-x-2">
            <Edit3 size={16} />
            <div className="flex flex-auto items-center justify-between">
              Edit
              <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex items-center gap-x-2">
            <Edit3 size={16} />
            <div className="flex flex-auto items-center justify-between">
              Edit
              <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-x-2">
            <Edit3 size={16} />
            <div className="flex flex-auto items-center justify-between">
              Edit
              <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="flex items-center gap-x-2"
            variant="destructive"
          >
            <Trash2 size={16} />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
};

export const CheckboxVariant: Story = {
  render: (args) => {
    return (
      <DropdownMenu {...args}>
        <DropdownMenuTrigger className="inline-flex items-center gap-x-2 rounded-[5px] border border-gray-300 px-[14px] py-2 text-sm font-semibold text-gray-800 focus-visible:outline-none">
          Select <ChevronDown className="h-[15px] w-[15px] text-gray-500" />
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
      </DropdownMenu>
    );
  },
};

export const IconAvatarVariant: Story = {
  render: (args) => {
    return (
      <DropdownMenu {...args}>
        <DropdownMenuTrigger className="focus-visible:outline-none">
          <Avatar size="sm">
            <AvatarImage src="/man.jpg" alt="Man" />
            <AvatarFallback>M</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="py-1">
          <DropdownMenuItem className="px-4 py-3">
            <div className="inline-flex items-center gap-x-3">
              <Avatar isOnline size="md">
                <AvatarImage alt="Man" src="/Man.jpg" />
                <AvatarFallback>M</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-gray-700">
                  Christopher Torres
                </span>
                <span className="text-sm text-gray-500">
                  chris@blendmetrics.com
                </span>
              </div>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-x-2">
            <User size={16} />
            View profile
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-x-2">
            <Settings size={16} />
            Settings
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-x-2">
            <UserPlus size={16} />
            Invite team member
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex items-center gap-x-2">
            <Belling />
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-x-2">
            <HelpCircle size={16} />
            Support
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem className="flex items-center gap-x-2">
            <LogOut size={16} />
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
};
