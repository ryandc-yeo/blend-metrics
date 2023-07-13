import { Meta, StoryObj } from "@storybook/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui";

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
