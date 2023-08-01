import type { Meta, StoryObj } from "@storybook/react";
import Triggers from "@/components/triggers";

const meta: Meta<typeof Triggers> = {
  component: Triggers,
  title: "Triggers",
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};

export const Two: Story = {
  args: {
    count: 2,
  },
};

export const Three: Story = {
  args: {
    count: 3,
  },
};

export const Four: Story = {
  args: {
    count: 4,
  },
};

export const Five: Story = {
  args: {
    count: 5,
  },
};

export const Seven: Story = {
  args: {
    count: 7,
  },
};
