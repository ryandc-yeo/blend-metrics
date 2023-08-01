import type { Meta, StoryObj } from "@storybook/react";

import VideoCard from "@/components/videoCard";

const meta: Meta<typeof VideoCard> = {
  component: VideoCard,
  title: "VideoCard",
  argTypes: {
    title: {},
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};

export const Edit: Story = {
  args: {
    title: "Part 1",
    body: "Introduction to the video series",
    timestamp: "20:32",
  },
};
