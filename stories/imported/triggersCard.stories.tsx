import type { Meta, StoryObj } from "@storybook/react";
import TriggersCard from "@/components/triggersCard";

const meta: Meta<typeof TriggersCard> = {
  component: TriggersCard,
  title: "TriggersCard",
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};

export const Pressed: Story = {
  args: {},
};
