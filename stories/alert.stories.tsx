import { Meta, StoryObj } from "@storybook/react";
import Link from "next/link";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui";
import {
  AlertCircle,
  AlertTriangle,
  ArrowRight2,
  CheckCircle,
  X2,
} from "@/components/icons";

const meta: Meta = {
  title: "Alert",
  component: Alert,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "primary", "success", "error", "warning"],
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=111-196223&mode=design&t=NLYVvxi9cxhKF9hN-4",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const FullWidthAlertSuccessPrimary: Story = {
  args: {
    variant: "success",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["success", "primary"],
    },
  },
  render: (args) => (
    <Alert className="w-full" {...args}>
      <CheckCircle className="h-5 w-5 flex-none" />
      <div className="flex-auto">
        <AlertTitle>Successfully updated profile</AlertTitle>
        <AlertDescription className="mt-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          pariatur, ipsum similique veniam.
        </AlertDescription>
        <div className="mt-3 flex items-center gap-x-3">
          <Link className="text-sm font-semibold" href="#">
            Learn more
          </Link>
          <Link
            className="inline-flex items-center gap-x-2 text-sm font-semibold"
            href="#"
          >
            View changes
            <ArrowRight2 />
          </Link>
        </div>
      </div>
      <button className="flex-none focus:outline-none">
        <X2 />
      </button>
    </Alert>
  ),
};

export const FullWidthAlertDefaultError: Story = {
  args: {
    variant: "default",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "error"],
    },
  },
  render: (args) => (
    <Alert className="w-full" {...args}>
      <AlertCircle className="h-5 w-5 flex-none" />
      <div className="flex-auto">
        <AlertTitle>Successfully updated profile</AlertTitle>
        <AlertDescription className="mt-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          pariatur, ipsum similique veniam.
        </AlertDescription>
        <div className="mt-3 flex items-center gap-x-3">
          <Link className="text-sm font-semibold" href="#">
            Learn more
          </Link>
          <Link
            className="inline-flex items-center gap-x-2 text-sm font-semibold"
            href="#"
          >
            View changes
            <ArrowRight2 />
          </Link>
        </div>
      </div>
      <button className="flex-none focus:outline-none">
        <X2 />
      </button>
    </Alert>
  ),
};

export const FullWidthAlertWarning: Story = {
  args: {
    variant: "warning",
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
  render: (args) => (
    <Alert className="w-full" {...args}>
      <AlertTriangle className="h-5 w-5 flex-none" />
      <div className="flex-auto">
        <AlertTitle>Successfully updated profile</AlertTitle>
        <AlertDescription className="mt-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          pariatur, ipsum similique veniam.
        </AlertDescription>
        <div className="mt-3 flex items-center gap-x-3">
          <Link className="text-sm font-semibold" href="#">
            Learn more
          </Link>
          <Link
            className="inline-flex items-center gap-x-2 text-sm font-semibold"
            href="#"
          >
            View changes
            <ArrowRight2 />
          </Link>
        </div>
      </div>
      <button className="flex-none focus:outline-none">
        <X2 />
      </button>
    </Alert>
  ),
};

export const DesktopWindowAlertSuccessPrimary: Story = {
  args: {
    variant: "success",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["success", "primary"],
    },
  },
  render: (args) => (
    <Alert {...args}>
      <CheckCircle className="h-5 w-5 flex-none" />
      <AlertTitle>We’ve just released a new feature</AlertTitle>
    </Alert>
  ),
};

export const DesktopWindowAlertDefaultError: Story = {
  args: {
    variant: "default",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "error"],
    },
  },
  render: (args) => (
    <Alert {...args}>
      <CheckCircle className="h-5 w-5 flex-none" />
      <AlertTitle>We’ve just released a new feature</AlertTitle>
    </Alert>
  ),
};

export const DesktopWindowAlertWarning: Story = {
  args: {
    variant: "warning",
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
  render: (args) => (
    <Alert {...args}>
      <CheckCircle className="h-5 w-5 flex-none" />
      <AlertTitle>We’ve just released a new feature</AlertTitle>
    </Alert>
  ),
};
