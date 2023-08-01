import type { Meta, StoryObj } from "@storybook/react";

import CategoryName from "@/components/categoryName";

const meta: Meta<typeof CategoryName> = {
  component: CategoryName,
  title: "CategoryName",
  argTypes: {
    variant: {},
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};

export const Active: Story = {
  args: {
    variant: true,
  },
};
