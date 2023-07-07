import { RoleRow } from "@/components/role-row";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  component: RoleRow,
  argTypes: {
    title: {
      control: "text",
    },
    subtitle: {
      control: "text",
    },
    variant: {
      control: "select",
      options: ["outlined", "base"],
    },
    checked: {
      table: {
        disable: true,
      },
    },
    onCheckedChange: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof RoleRow>;

export const Base: Story = {
  args: {
    title: "Google Sheets",
    subtitle: "9 Granted Permissions",
    variant: "base",
  },
};

export const Outlined: Story = {
  args: {
    title: "Google Sheets",
    subtitle: "9 Granted Permissions",
    variant: "outlined",
  },
};
