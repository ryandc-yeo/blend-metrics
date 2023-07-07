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
};

type Story = StoryObj<typeof Switch>;

export default meta;

export const Default: Story = {
  args: {
    size: "sm",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=334-201335&mode=design&t=VxRt1wafjT7dFLnZ-4",
    },
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
      url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=334-201336&mode=design&t=VxRt1wafjT7dFLnZ-4",
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
      url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=334-201337&mode=design&t=VxRt1wafjT7dFLnZ-4",
    },
  },
};
