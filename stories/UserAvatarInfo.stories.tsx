import { Meta, StoryObj } from "@storybook/react";

import { UserAvatarInfo } from "@/components/user-avatar-info";

const meta: Meta = {
  component: UserAvatarInfo,
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    name: {
      control: "text",
    },
    email: {
      control: "text",
    },
    isOnline: {
      control: "boolean",
    },
    alt: {
      table: {
        disable: true,
      },
    },
    src: {
      table: {
        disable: true,
      },
    },
    fallback: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    isOnline: false,
  },
};

export default meta;

type Story = StoryObj<typeof UserAvatarInfo>;

export const Xs: Story = {
  args: {
    name: "Christopher Torres",
    email: "chris@blendmetrics.com",
  },
  render: (args) => (
    <UserAvatarInfo src="/man.jpg" alt="Man" fallback="M" {...args} />
  ),
};

export const Sm: Story = {
  args: {
    ...Xs.args,
    size: "sm",
  },
  render: (args) => (
    <UserAvatarInfo src="/woman.jpg" alt="Woman" fallback="W" {...args} />
  ),
};

export const Md: Story = {
  args: {
    ...Xs.args,
    size: "md",
  },
  render: (args) => (
    <UserAvatarInfo src="/man.jpg" alt="Man" fallback="M" {...args} />
  ),
};

export const Lg: Story = {
  args: {
    ...Xs.args,
    size: "lg",
  },
  render: (args) => (
    <UserAvatarInfo src="/woman.jpg" alt="Woman" fallback="W" {...args} />
  ),
};

export const Xl: Story = {
  args: {
    ...Xs.args,
    size: "xl",
  },
  render: (args) => (
    <UserAvatarInfo src="/man.jpg" alt="Man" fallback="M" {...args} />
  ),
};
