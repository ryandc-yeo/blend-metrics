import type { Meta, StoryObj } from "@storybook/react";

import RecentProjectColumns from "@/components/recentProjectColumns";

const meta: Meta<typeof RecentProjectColumns> = {
  component: RecentProjectColumns,
  title: "RecentProjectColumns",
  argTypes: {
    projects: {},
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};

export const Two: Story = {
  args: {
    projects: ["Project 1", "Project 2"],
  },
};

export const Three: Story = {
  args: {
    projects: ["Project 1", "Project 2", "Project 3"],
  },
};

export const Four: Story = {
  args: {
    projects: ["Project 1", "Project 2", "Project 3", "Project 4"],
  },
};
