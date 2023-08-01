import type { Meta, StoryObj } from "@storybook/react";

import BlankProject from "@/components/blankProject";

const meta: Meta<typeof BlankProject> = {
  component: BlankProject,
  title: "BlankProject",
  argTypes: {
    variant: {},
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};
