import { Button } from "@/components/ui";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Button",
  component: Button,
  argTypes: {
    children: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
    variant: {
      control: "select",
      options: ["solid", "secondary", "outlined", "ghost", "link"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl", "2xl"],
    },
    visual: {
      control: "select",
      options: ["primary", "error", "gray"],
    },
  },
  args: {
    disabled: false,
    children: "Button",
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {},
};

export const Error: Story = {
  args: {
    visual: "error",
  },
};

export const Gray: Story = {
  args: {
    variant: "outlined",
    visual: "gray",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["outlined", "ghost", "link"],
    },
  },
};
