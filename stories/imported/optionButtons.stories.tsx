import type { Meta, StoryObj } from "@storybook/react";

import OptionButtons from "@/components/optionButtons";

const meta: Meta<typeof OptionButtons> = {
  component: OptionButtons,
  title: "OptionButtons",
  argTypes: {
    variant: {},
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};

export const Edit: Story = {
  args: {
    variant: "Edit",
  },
};

export const Duplicate: Story = {
  args: {
    variant: "Duplicate",
  },
};

export const RunTest: Story = {
  args: {
    variant: "Run Test",
  },
};

export const Delete: Story = {
  args: {
    variant: "Delete",
  },
};
