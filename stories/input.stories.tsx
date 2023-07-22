import { Meta, StoryObj } from "@storybook/react";

import { Email, MasterCard } from "@/components/icons";
import { HelperText, Label } from "@/components/ui";
import { Input } from "@/components/ui/input";

const meta: Meta = {
  title: "Input",
  component: Input,
  argTypes: {
    disabled: {
      control: "boolean",
    },
    isInvalid: {
      control: false,
    },
    leftIcon: {
      table: {
        disable: true,
      },
    },
    rightIcon: {
      table: {
        disable: true,
      },
    },
    leftIconRootClassName: {
      table: {
        disable: true,
      },
    },
    alertCircleClassName: {
      table: {
        disable: true,
      },
    },
    rightIconRootClassName: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    disabled: false,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=111-182232&mode=design&t=jbmMcUZb7UWd45mh-4",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Base: Story = {
  render: (args) => (
    <Input type="email" placeholder="olivia@untitledui.com" {...args} />
  ),
};

export const LabeledBase: Story = {
  render: (args) => (
    <div className="space-y-1.5">
      <Label size="sm" htmlFor="email">
        Email
      </Label>
      <Input
        id="email"
        type="email"
        placeholder="olivia@untitledui.com"
        {...args}
      />
    </div>
  ),
};

export const LabeledHelperTextBase: Story = {
  render: (args) => (
    <div className="space-y-1.5">
      <Label size="sm" htmlFor="email">
        Email
      </Label>
      <Input
        id="email"
        type="email"
        placeholder="olivia@untitledui.com"
        {...args}
      />
      <HelperText size="sm">This is a hint text to help user.</HelperText>
    </div>
  ),
};

export const HelperTextBase: Story = {
  render: (args) => (
    <div className="space-y-1.5">
      <Input
        id="email"
        type="email"
        placeholder="olivia@untitledui.com"
        {...args}
      />
      <HelperText size="sm">This is a hint text to help user.</HelperText>
    </div>
  ),
};

export const EmailIcon: Story = {
  render: (args) => (
    <Input
      type="email"
      leftIcon={<Email />}
      placeholder="olivia@untitledui.com"
      {...args}
    />
  ),
};

export const LabeledEmailIcon: Story = {
  render: (args) => (
    <div className="space-y-1.5">
      <Label size="sm" htmlFor="email">
        Email
      </Label>
      <Input
        id="email"
        type="email"
        leftIcon={<Email />}
        placeholder="olivia@untitledui.com"
        {...args}
      />
    </div>
  ),
};

export const LabeledHelperTextEmailIcon: Story = {
  render: (args) => (
    <div className="space-y-1.5">
      <Label size="sm" htmlFor="email">
        Email
      </Label>
      <Input
        id="email"
        type="email"
        leftIcon={<Email />}
        placeholder="olivia@untitledui.com"
        {...args}
      />
      <HelperText size="sm">This is a hint text to help user.</HelperText>
    </div>
  ),
};

export const HelperTextEmailIcon: Story = {
  render: (args) => (
    <div className="space-y-1.5">
      <Input
        id="email"
        type="email"
        leftIcon={<Email />}
        placeholder="olivia@untitledui.com"
        {...args}
      />
      <HelperText size="sm">This is a hint text to help user.</HelperText>
    </div>
  ),
};

export const MasterCardIcon: Story = {
  render: (args) => (
    <Input
      className="pl-[52px]"
      leftIconRootClassName="left-[14px]"
      type="email"
      leftIcon={<MasterCard />}
      placeholder="olivia@untitledui.com"
      {...args}
    />
  ),
};

export const LabeledMasterCardIcon: Story = {
  render: (args) => (
    <div className="space-y-1.5">
      <Label size="sm" htmlFor="email">
        Email
      </Label>
      <Input
        id="email"
        className="pl-[52px]"
        leftIconRootClassName="left-[14px]"
        type="email"
        leftIcon={<MasterCard />}
        placeholder="olivia@untitledui.com"
        {...args}
      />
    </div>
  ),
};

export const LabeledHelperTextMasterCardIcon: Story = {
  render: (args) => (
    <div className="space-y-1.5">
      <Label size="sm" htmlFor="email">
        Email
      </Label>
      <Input
        id="email"
        className="pl-[52px]"
        leftIconRootClassName="left-[14px]"
        type="email"
        leftIcon={<MasterCard />}
        placeholder="olivia@untitledui.com"
        {...args}
      />
      <HelperText size="sm">This is a hint text to help user.</HelperText>
    </div>
  ),
};

export const HelperTextMasterCardIcon: Story = {
  render: (args) => (
    <div className="space-y-1.5">
      <Input
        id="email"
        className="pl-[52px]"
        leftIconRootClassName="left-[14px]"
        type="email"
        leftIcon={<MasterCard />}
        placeholder="olivia@untitledui.com"
        {...args}
      />
      <HelperText size="sm">This is a hint text to help user.</HelperText>
    </div>
  ),
};
