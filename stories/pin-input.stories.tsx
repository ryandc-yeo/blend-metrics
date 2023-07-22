import { Meta, StoryObj } from "@storybook/react";

import { FourDigitPinInput, SixDigitPinInput } from "@/components/ui";

const meta: Meta = {
  title: "PinInput",
};

export default meta;

export const FourDigit: StoryObj = {
  render: (args) => <FourDigitPinInput {...args} />,
};

export const SixDigit: StoryObj = {
  render: (args) => <SixDigitPinInput {...args} />,
};
