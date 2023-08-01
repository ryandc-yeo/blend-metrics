import type { Meta, StoryObj } from "@storybook/react";
import {
  GoogleEditorIcon,
  WS_RandomIcon1,
  WS_RandomIcon2,
  GoogleCalendarIcon,
  GmailIcon,
} from "@/components/assets";
import ProfileCard from "@/components/profileCard";

const meta: Meta<typeof ProfileCard> = {
  component: ProfileCard,
  title: "ProfileCard",
  argTypes: {
    creatorName: {},
    bio: {},
    publishedOn: {},
    usedBy: {},
    savedBy: {},
    tag: {},
    icon: {},
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};

export const ExampleData: Story = {
  args: {
    creatorName: "Chris Example",
    publishedOn: "July 11, 2023",
    usedBy: 300,
    savedBy: 85,
    tag: ["Frontend", "UI/UX", "Marketeq"],
    icon: [
      GoogleEditorIcon,
      WS_RandomIcon1,
      WS_RandomIcon2,
      GoogleCalendarIcon,
      GmailIcon,
    ],
  },
};
