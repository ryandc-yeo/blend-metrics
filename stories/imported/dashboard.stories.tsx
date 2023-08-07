import type { Meta, StoryObj } from "@storybook/react";

import Dashboard from "@/components/dashboard";

const meta: Meta<typeof Dashboard> = {
  component: Dashboard,
  title: "Dashboard",
  argTypes: {
    variant: {},
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};
