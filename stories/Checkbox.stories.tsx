import { Checkbox } from "@/components/ui/checkbox";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  component: Checkbox,
  argTypes: {
    label: {
      control: "text",
    },
    desc: {
      control: "text",
    },
    size: {
      control: "select",
      options: ["sm", "md"],
    },
    disabled: {
      control: "boolean",
    },
  },
  args: {
    disabled: false,
  },
  parameters: {
    design: [
      {
        type: "figma",
        url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=167-175850&mode=design&t=Oc4szCQ8jKnSmE0q-4",
      },
      {
        type: "figma",
        url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=164-175145&mode=design&t=Oc4szCQ8jKnSmE0q-4",
      },
    ],
  },
};

type Story = StoryObj<typeof Checkbox>;

export default meta;

export const Default: Story = {
  args: {
    size: "sm",
  },
};

export const WithLabel: Story = {
  args: {
    ...Default.args,
    label: "Remember me",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/wTW5aoJfEb9KtPeU8KkbG3/BM---Integration-Partner---Development?type=design&node-id=3-99369&mode=design&t=t0Dj8nna877HiUD1-4",
    },
  },
};

export const WithDesc: Story = {
  args: {
    ...WithLabel.args,
    desc: "Save my login details for next time.",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/wTW5aoJfEb9KtPeU8KkbG3/BM---Integration-Partner---Development?type=design&node-id=3-99449&mode=design&t=t0Dj8nna877HiUD1-4",
    },
  },
};
