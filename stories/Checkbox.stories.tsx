import { Checkbox } from "@/components/ui/checkbox";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  component: Checkbox,
  argTypes: {
    label: {
      control: "text",
    },
    category: {
      control: "text",
    },
    desc: {
      control: "text",
    },
  },
};

type Story = StoryObj<typeof Checkbox>;

export default meta;

export const WithLabel: Story = {
  args: {
    label: "Option 1",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/wTW5aoJfEb9KtPeU8KkbG3/BM---Integration-Partner---Development?type=design&node-id=3-99369&mode=design&t=t0Dj8nna877HiUD1-4",
    },
  },
};

export const WithCategory: Story = {
  args: {
    ...WithLabel.args,
    category: "Personal",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/wTW5aoJfEb9KtPeU8KkbG3/BM---Integration-Partner---Development?type=design&node-id=3-99397&mode=design&t=t0Dj8nna877HiUD1-4",
    },
  },
};

export const WithDesc: Story = {
  args: {
    ...WithCategory.args,
    desc: "Video streaming service",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/wTW5aoJfEb9KtPeU8KkbG3/BM---Integration-Partner---Development?type=design&node-id=3-99449&mode=design&t=t0Dj8nna877HiUD1-4",
    },
  },
};
