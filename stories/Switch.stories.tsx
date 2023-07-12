import { Switch } from "@/components/ui/switch";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  component: Switch,
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    colorScheme: {
      control: "select",
      options: ["blue", "gray"],
    },
    disabled: {
      control: "boolean",
    },
  },
  args: {
    disabled: false,
    colorScheme: "blue",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=515-201831&mode=design&t=rlIa0Hm4A6BZWLwF-4",
    },
  },
};

type Story = StoryObj<typeof Switch>;

export default meta;

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
  },
};

export const Large: Story = {
  args: {
    size: "md",
  },
};
