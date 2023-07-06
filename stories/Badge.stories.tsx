import { Badge } from "@/components/ui/badge";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  component: Badge,
  argTypes: {
    icon: {
      control: "select",
      options: ["dot", "x", "arrow-right", "plus", "arrow-left", "avatar"],
    },
    label: {
      control: "text",
      if: {
        arg: "icon",
        neq: "plus",
      },
    },
    colorScheme: {
      control: "select",
      options: [
        "gray",
        "red",
        "green",
        "yellow",
        "blue",
        "purple",
        "indigo",
        "sky",
        "rose",
        "orange",
        "violet",
      ],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    avatar: {
      control: "select",
      options: ["/avatar.jpg"],
      if: {
        arg: "icon",
        eq: "avatar",
      },
    },
  },
  args: {
    colorScheme: "gray",
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Dot: Story = {
  args: {
    label: "Label",
    icon: "dot",
    size: "sm",
  },
};

export const ArrowLeft: Story = {
  args: {
    ...Dot.args,
    icon: "arrow-left",
  },
};

export const ArrowRight: Story = {
  args: {
    ...Dot.args,
    icon: "arrow-right",
  },
};

export const Plus: Story = {
  args: {
    icon: "plus",
    size: "sm",
  },
};

export const Avatar: Story = {
  args: {
    icon: "avatar",
    size: "sm",
    avatar: "/avatar.jpg",
    label: "Label",
  },
};
