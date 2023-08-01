import type { Meta, StoryObj } from "@storybook/react";
import {
  GoogleMeetIcon,
  GoogleEditorIcon,
  WT_Random_Icon,
} from "@/components/assets";
import WorkflowTemplate from "@/components/workflowTemplate";

const meta: Meta<typeof WorkflowTemplate> = {
  component: WorkflowTemplate,
  title: "WorkflowTemplate",
  argTypes: {
    // var1: {},
    // var2: {},
    // var3: {},
    header: {},
    body: {},
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};

export const Edit: Story = {
  args: {
    // var1: GoogleMeetIcon,
    // var2: GoogleEditorIcon,
    // var3: WT_Random_Icon,
    header: "Send Test files to Gmail",
    body: "This is a test body",
  },
};
