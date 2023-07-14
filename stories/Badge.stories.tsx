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

export const Base: Story = {
  render: (args) => {
    return <Badge {...args}>Label</Badge>;
  },
};

export const DotIcon: Story = {
  render: (args) => {
    return (
      <Badge {...args}>
        <Dot size={12} className="stroke-[6px]" />
        Label
      </Badge>
    );
  },
};

export const ArrowRightIcon: Story = {
  render: (args) => {
    return (
      <Badge {...args}>
        Label
        <ArrowRight size={12} />
      </Badge>
    );
  },
};

export const ArrowUpIcon: Story = {
  render: (args) => {
    return (
      <Badge {...args}>
        <ArrowUp size={12} />
        Label
      </Badge>
    );
  },
};

export const XIcon: Story = {
  render: (args) => {
    return (
      <Badge {...args}>
        Label
        <X size={12} />
      </Badge>
    );
  },
};

export const PlusIcon: Story = {
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

export const AvatarIcon: Story = {
  render: (args) => {
    return (
      <Badge {...args}>
        <Avatar className="h-4 w-4 hover:ring-0">
          <AvatarImage src="/woman.jpg" alt="Woman" />
          <AvatarFallback>W</AvatarFallback>
        </Avatar>
        Label
      </Badge>
    );
  },
};
