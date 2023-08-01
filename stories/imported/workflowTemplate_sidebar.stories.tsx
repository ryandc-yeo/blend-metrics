import type { Meta, StoryObj } from "@storybook/react";

import WorkflowTemplate_Sidebar from "@/components/workflowTemplate_sidebar";

const meta: Meta<typeof WorkflowTemplate_Sidebar> = {
  component: WorkflowTemplate_Sidebar,
  title: "WorkflowTemplate_Sidebar",
  argTypes: {
    variant: {},
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};
