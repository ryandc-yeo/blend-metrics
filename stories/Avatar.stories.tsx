import { Meta, StoryObj } from "@storybook/react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  TooltipProvider,
  Tooltip,
  TooltipContent,
} from "@/components/ui";
import { User } from "lucide-react";
import { TooltipTrigger } from "@radix-ui/react-tooltip";

const meta: Meta = {
  component: Avatar,
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "2xl"],
    },
    isOnline: {
      control: "boolean",
    },
  },
  args: {
    isOnline: true,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=397-201204&mode=design&t=0pofMbZEfin42GC7-4",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Xs: Story = {
  render: (args) => {
    return (
      <Avatar {...args}>
        <AvatarImage src="/man.jpg" alt="Man" />
        <AvatarFallback>M</AvatarFallback>
      </Avatar>
    );
  },
};

export const Sm: Story = {
  args: {
    size: "sm",
  },
  render: (args) => {
    return (
      <Avatar {...args}>
        <AvatarImage src="/man.jpg" alt="Man" />
        <AvatarFallback>M</AvatarFallback>
      </Avatar>
    );
  },
};

export const Md: Story = {
  args: {
    size: "md",
  },
  render: (args) => {
    return (
      <Avatar {...args}>
        <AvatarImage src="/man.jpg" alt="Man" />
        <AvatarFallback>M</AvatarFallback>
      </Avatar>
    );
  },
};

export const Lg: Story = {
  args: {
    size: "lg",
  },
  render: (args) => {
    return (
      <Avatar {...args}>
        <AvatarImage src="/man.jpg" alt="Man" />
        <AvatarFallback>M</AvatarFallback>
      </Avatar>
    );
  },
};

export const Xl: Story = {
  args: {
    size: "xl",
  },
  render: (args) => {
    return (
      <Avatar {...args}>
        <AvatarImage src="/man.jpg" alt="Man" />
        <AvatarFallback>M</AvatarFallback>
      </Avatar>
    );
  },
};

export const DoubleXl: Story = {
  args: {
    size: "2xl",
  },
  render: (args) => {
    return (
      <Avatar {...args}>
        <AvatarImage src="/man.jpg" alt="Man" />
        <AvatarFallback>M</AvatarFallback>
      </Avatar>
    );
  },
};

export const Fallback: Story = {
  argTypes: {
    size: {
      table: {
        disable: true,
      },
    },
  },
  render: (args) => {
    return (
      <Avatar {...args}>
        <AvatarImage src="/boy.jpg" alt="Boy" />
        <AvatarFallback>
          <User size={20} />
        </AvatarFallback>
      </Avatar>
    );
  },
};

export const TooltipVariant: Story = {
  render: (args) => {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Avatar {...args}>
              <AvatarImage src="/man.jpg" alt="Man" />
              <AvatarFallback>M</AvatarFallback>
            </Avatar>
          </TooltipTrigger>
          <TooltipContent>This is a tooltip</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  },
};
