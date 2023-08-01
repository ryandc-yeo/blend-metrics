import type { Meta, StoryObj } from "@storybook/react";

import Options from "@/components/options";

const meta: Meta<typeof Options> = {
  component: Options,
  title: "Options",
  argTypes: {
    variant: {},
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};
