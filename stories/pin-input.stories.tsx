import { Meta, StoryObj } from "@storybook/react";

import { FourDigitPinInput, SixDigitPinInput } from "@/components/ui";

const meta: Meta = {
  title: "PinInput",
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=111-182959&mode=design&t=jbmMcUZb7UWd45mh-4",
    },
  },
};

export default meta;

export const FourDigit: StoryObj = {
  render: (args) => <FourDigitPinInput {...args} />,
};

export const SixDigit: StoryObj = {
  render: (args) => <SixDigitPinInput {...args} />,
};
