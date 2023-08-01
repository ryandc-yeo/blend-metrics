import type { Meta, StoryObj } from "@storybook/react";
import WorkflowSetup from "@/components/workflowSetup";
import {
  GoogleEditorIcon,
  GmailIcon,
  WS_RandomIcon1,
  WS_RandomIcon2,
  GoogleCalendarIcon,
} from "@/components/assets";
import Image from "@/components/assets/assets/workflowSetup_metricItem.png";

const meta: Meta<typeof WorkflowSetup> = {
  component: WorkflowSetup,
  title: "WorkflowSetup",
  argTypes: {
    // image: {},
    // icon1: {},
    // icon2: {},
    // icon3: {},
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    // image: Image,
    // icon1: GoogleEditorIcon,
    // icon2: WS_RandomIcon1,
    // icon3: WS_RandomIcon2,
    // icon4: GoogleCalendarIcon,
    // icon5: GmailIcon,
  },
};

export const Pressed: Story = {
  args: {
    isHeart: true,
  },
};
