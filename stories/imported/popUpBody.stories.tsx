import type { Meta, StoryObj } from "@storybook/react";

import PopUpBody from "@/components/popUpBody";

const meta: Meta<typeof PopUpBody> = {
  component: PopUpBody,
  title: "PopUpBody",
  argTypes: {
    variant: {},
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};
