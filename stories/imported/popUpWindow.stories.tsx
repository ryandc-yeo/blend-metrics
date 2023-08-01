import type { Meta, StoryObj } from "@storybook/react";

import PopUpWindow from "@/components/popUpWindow";

const meta: Meta<typeof PopUpWindow> = {
  component: PopUpWindow,
  title: "PopUpWindow",
  argTypes: {
    variant: {},
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};
