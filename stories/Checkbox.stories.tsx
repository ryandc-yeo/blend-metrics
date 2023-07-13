import { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "@/components/ui";

const meta: Meta = {
  component: Checkbox,
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    intent: {
      control: "select",
      options: ["rounded", "circle"],
    },
    disabled: {
      control: "boolean",
    },
  },
  args: {
    disabled: false,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=401-202989&mode=design&t=wiyW8aUOYnMLZNQc-4",
    },
  },
};

type Story = StoryObj<typeof Checkbox>;

export default meta;

export const Small: Story = {};

export const Medium: Story = {
  args: {
    size: "md",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};
