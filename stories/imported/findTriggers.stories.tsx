import type { Meta, StoryObj } from "@storybook/react";

import FindTriggers from "@/components/findTriggers";

const meta: Meta<typeof FindTriggers> = {
  component: FindTriggers,
  title: "FindTriggers",
  argTypes: {
    variant: {},
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};

export const Active: Story = {};

export const AutoComplete: Story = {};

export const Disabled: Story = {
  args: {
    variant: false,
  },
};
