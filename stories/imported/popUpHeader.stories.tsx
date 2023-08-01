import type { Meta, StoryObj } from "@storybook/react";

import PopUpHeader from "@/components/popUpHeader";

const meta: Meta<typeof PopUpHeader> = {
  component: PopUpHeader,
  title: "PopUpHeader",
  argTypes: {
    variant: {},
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};
