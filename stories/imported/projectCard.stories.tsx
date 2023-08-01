import type { Meta, StoryObj } from "@storybook/react";

import ProjectCard from "@/components/projectCard";

const meta: Meta<typeof ProjectCard> = {
  component: ProjectCard,
  title: "ProjectCard",
  argTypes: {
    name: {},
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};
