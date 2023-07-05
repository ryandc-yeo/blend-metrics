import { Switch } from "@/components/ui/switch";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  component: Switch,
  argTypes: {
    label: {
      control: "text",
    },
    desc: {
      control: "text",
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/wTW5aoJfEb9KtPeU8KkbG3/BM---Integration-Partner---Development?type=design&node-id=3-99525&mode=design&t=t0Dj8nna877HiUD1-4",
    },
  },
};

type Story = StoryObj<typeof Switch>;

export default meta;

export const Default: Story = {
  args: {
    label: "Remember me",
    desc: "Save my login details for next time.",
  },
};
