import { Meta, StoryObj } from "@storybook/react";
import { ArrowRight, ArrowUp, Dot, Plus, X } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage, Badge } from "@/components/ui";

const meta: Meta = {
  component: Badge,
  argTypes: {
    colorScheme: {
      control: "select",
      options: [
        "gray",
        "purple",
        "error",
        "warning",
        "success",
        "sky",
        "primary",
        "indigo",
        "pink",
        "rose",
        "orange",
      ],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    shape: {
      control: "select",
      options: ["square", "circle"],
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=2-25063&mode=design&t=r9TEGYqxlEOfyK72-4",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  render: (args) => {
    return <Badge {...args}>Label</Badge>;
  },
};

export const WithDotIcon: Story = {
  render: (args) => {
    return (
      <Badge {...args}>
        <Dot size={12} className="stroke-[6px]" />
        Label
      </Badge>
    );
  },
};

export const WithArrowRightIcon: Story = {
  render: (args) => {
    return (
      <Badge {...args}>
        Label
        <ArrowRight size={12} />
      </Badge>
    );
  },
};

export const WithArrowUpIcon: Story = {
  render: (args) => {
    return (
      <Badge {...args}>
        <ArrowUp size={12} />
        Label
      </Badge>
    );
  },
};

export const WithXIcon: Story = {
  render: (args) => {
    return (
      <Badge {...args}>
        Label
        <X size={12} />
      </Badge>
    );
  },
};

export const WithPlusIcon: Story = {
  args: {
    shape: "circle",
  },
  render: (args) => {
    return (
      <Badge {...args}>
        <Plus size={12} />
      </Badge>
    );
  },
};

export const WithAvatar: Story = {
  render: (args) => {
    return (
      <Badge {...args}>
        <Avatar className="h-4 w-4">
          <AvatarImage src="/woman.jpg" alt="Woman" />
          <AvatarFallback>W</AvatarFallback>
        </Avatar>
        Label
      </Badge>
    );
  },
};
