import { Meta, StoryObj } from "@storybook/react";

import { Email, HelpCircle, MasterCard } from "@/components/icons";
import {
  Input,
  ErrorMessage,
  HelperText,
  Label,
  InputLeftAddon,
} from "@/components/ui";

const meta: Meta = {
  title: "Input",
  component: Input,
  argTypes: {
    disabled: {
      control: "boolean",
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
    isInvalid: false,
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
  render: ({ isInvalid, ...args }) => (
    <div className="space-y-1.5">
      <Label size="sm" htmlFor="email">
        Email
      </Label>
      <Input
        id="email"
        type="email"
        placeholder="olivia@untitledui.com"
        isInvalid={isInvalid}
        {...args}
      />
      {isInvalid ? (
        <ErrorMessage>This is an error message.</ErrorMessage>
      ) : (
        <HelperText size="sm">This is a hint text to help user.</HelperText>
      )}
    </div>
  ),
};

export const HelperTextBase: Story = {
  render: ({ isInvalid, ...args }) => (
    <div className="space-y-1.5">
      <Input
        type="email"
        placeholder="olivia@untitledui.com"
        isInvalid={isInvalid}
        {...args}
      />
      {isInvalid ? (
        <ErrorMessage>This is an error message.</ErrorMessage>
      ) : (
        <HelperText size="sm">This is a hint text to help user.</HelperText>
      )}
    </div>
  ),
};

export const HelpCircleBase: Story = {
  render: (args) => (
    <Input
      type="email"
      rightIcon={<HelpCircle />}
      placeholder="olivia@untitledui.com"
      {...args}
    />
  ),
};

export const LabeledHelpCircleBase: Story = {
  render: ({ ...args }) => (
    <div className="space-y-1.5">
      <Label size="sm" htmlFor="email">
        Email
      </Label>
      <Input
        id="email"
        type="email"
        placeholder="olivia@untitledui.com"
        rightIcon={<HelpCircle />}
        {...args}
      />
    </div>
  ),
};

export const LabeledHelperTextHelpCircleBase: Story = {
  render: ({ isInvalid, ...args }) => (
    <div className="space-y-1.5">
      <Label size="sm" htmlFor="email">
        Email
      </Label>
      <Input
        id="email"
        type="email"
        placeholder="olivia@untitledui.com"
        rightIcon={<HelpCircle />}
        isInvalid={isInvalid}
        {...args}
      />
      {isInvalid ? (
        <ErrorMessage>This is an error message.</ErrorMessage>
      ) : (
        <HelperText size="sm">This is a hint text to help user.</HelperText>
      )}
    </div>
  ),
};

export const HelperTextHelpCircleBase: Story = {
  render: ({ isInvalid, ...args }) => (
    <div className="space-y-1.5">
      <Input
        type="email"
        placeholder="olivia@untitledui.com"
        rightIcon={<HelpCircle />}
        isInvalid={isInvalid}
        {...args}
      />
      {isInvalid ? (
        <ErrorMessage>This is an error message.</ErrorMessage>
      ) : (
        <HelperText size="sm">This is a hint text to help user.</HelperText>
      )}
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

export const LabeledEmail: Story = {
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

export const LabeledHelperTextEmail: Story = {
  render: ({ isInvalid, ...args }) => (
    <div className="space-y-1.5">
      <Label size="sm" htmlFor="email">
        Email
      </Label>
      <Input
        id="email"
        type="email"
        leftIcon={<Email />}
        placeholder="olivia@untitledui.com"
        isInvalid={isInvalid}
        {...args}
      />
      {isInvalid ? (
        <ErrorMessage>This is an error message.</ErrorMessage>
      ) : (
        <HelperText size="sm">This is a hint text to help user.</HelperText>
      )}
    </div>
  ),
};

export const HelperTextEmail: Story = {
  render: ({ isInvalid, ...args }) => (
    <div className="space-y-1.5">
      <Input
        type="email"
        leftIcon={<Email />}
        placeholder="olivia@untitledui.com"
        isInvalid={isInvalid}
        {...args}
      />
      {isInvalid ? (
        <ErrorMessage>This is an error message.</ErrorMessage>
      ) : (
        <HelperText size="sm">This is a hint text to help user.</HelperText>
      )}
    </div>
  ),
};

export const EmailHelpCircle: Story = {
  render: (args) => (
    <Input
      type="email"
      leftIcon={<Email />}
      rightIcon={<HelpCircle />}
      placeholder="olivia@untitledui.com"
      {...args}
    />
  ),
};

export const LabeledEmailHelpCircle: Story = {
  render: (args) => (
    <div className="space-y-1.5">
      <Label size="sm" htmlFor="email">
        Email
      </Label>
      <Input
        id="email"
        type="email"
        leftIcon={<Email />}
        rightIcon={<HelpCircle />}
        placeholder="olivia@untitledui.com"
        {...args}
      />
    </div>
  ),
};

export const LabeledHelperTextEmailHelpCircle: Story = {
  render: ({ isInvalid, ...args }) => (
    <div className="space-y-1.5">
      <Label size="sm" htmlFor="email">
        Email
      </Label>
      <Input
        id="email"
        type="email"
        leftIcon={<Email />}
        rightIcon={<HelpCircle />}
        placeholder="olivia@untitledui.com"
        isInvalid={isInvalid}
        {...args}
      />
      {isInvalid ? (
        <ErrorMessage>This is an error message.</ErrorMessage>
      ) : (
        <HelperText size="sm">This is a hint text to help user.</HelperText>
      )}
    </div>
  ),
};

export const HelperTextEmailHelpCircle: Story = {
  render: ({ isInvalid, ...args }) => (
    <div className="space-y-1.5">
      <Input
        type="email"
        leftIcon={<Email />}
        rightIcon={<HelpCircle />}
        placeholder="olivia@untitledui.com"
        isInvalid={isInvalid}
        {...args}
      />
      {isInvalid ? (
        <ErrorMessage>This is an error message.</ErrorMessage>
      ) : (
        <HelperText size="sm">This is a hint text to help user.</HelperText>
      )}
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

export const LabeledMasterCard: Story = {
  render: (args) => (
    <div className="space-y-1.5">
      <Label size="sm" htmlFor="email">
        Email
      </Label>
      <Input
        className="pl-[52px]"
        id="email"
        leftIconRootClassName="left-[14px]"
        type="email"
        leftIcon={<MasterCard />}
        placeholder="olivia@untitledui.com"
        {...args}
      />
    </div>
  ),
};

export const LabeledHelperTextMasterCard: Story = {
  render: ({ isInvalid, ...args }) => (
    <div className="space-y-1.5">
      <Label size="sm" htmlFor="email">
        Email
      </Label>
      <Input
        className="pl-[52px]"
        id="email"
        leftIconRootClassName="left-[14px]"
        type="email"
        leftIcon={<MasterCard />}
        placeholder="olivia@untitledui.com"
        isInvalid={isInvalid}
        {...args}
      />
      {isInvalid ? (
        <ErrorMessage size="sm">This is an error message.</ErrorMessage>
      ) : (
        <HelperText size="sm">This is a hint text to help user.</HelperText>
      )}
    </div>
  ),
};

export const HelperTextMasterCard: Story = {
  render: ({ isInvalid, ...args }) => (
    <div className="space-y-1.5">
      <Input
        className="pl-[52px]"
        leftIconRootClassName="left-[14px]"
        type="email"
        leftIcon={<MasterCard />}
        placeholder="olivia@untitledui.com"
        isInvalid={isInvalid}
        {...args}
      />
      {isInvalid ? (
        <ErrorMessage size="sm">This is an error message.</ErrorMessage>
      ) : (
        <HelperText size="sm">This is a hint text to help user.</HelperText>
      )}
    </div>
  ),
};

export const MasterCardHelpCircle: Story = {
  render: (args) => (
    <Input
      className="pl-[52px]"
      leftIconRootClassName="left-[14px]"
      type="email"
      leftIcon={<MasterCard />}
      rightIcon={<HelpCircle className="text-gray-400" />}
      placeholder="olivia@untitledui.com"
      {...args}
    />
  ),
};

export const LabeledMasterCardHelpCircle: Story = {
  render: (args) => (
    <div className="space-y-1.5">
      <Label size="sm" htmlFor="email">
        Email
      </Label>
      <Input
        className="pl-[52px]"
        id="email"
        leftIconRootClassName="left-[14px]"
        type="email"
        leftIcon={<MasterCard />}
        rightIcon={<HelpCircle className="text-gray-400" />}
        placeholder="olivia@untitledui.com"
        {...args}
      />
    </div>
  ),
};

export const LabeledHelperTextMasterCardHelpCircle: Story = {
  render: ({ isInvalid, ...args }) => (
    <div className="space-y-1.5">
      <Label size="sm" htmlFor="email">
        Email
      </Label>
      <Input
        className="pl-[52px]"
        leftIconRootClassName="left-[14px]"
        id="email"
        type="email"
        leftIcon={<MasterCard />}
        rightIcon={<HelpCircle className="text-gray-400" />}
        placeholder="olivia@untitledui.com"
        isInvalid={isInvalid}
        {...args}
      />
      {isInvalid ? (
        <ErrorMessage size="sm">This is an error message.</ErrorMessage>
      ) : (
        <HelperText size="sm">This is a hint text to help user.</HelperText>
      )}
    </div>
  ),
};

export const HelperTextMasterCardHelpCircle: Story = {
  render: ({ isInvalid, ...args }) => (
    <div className="space-y-1.5">
      <Input
        className="pl-[52px]"
        leftIconRootClassName="left-[14px]"
        type="email"
        leftIcon={<MasterCard />}
        rightIcon={<HelpCircle className="text-gray-400" />}
        placeholder="olivia@untitledui.com"
        isInvalid={isInvalid}
        {...args}
      />
      {isInvalid ? (
        <ErrorMessage size="sm">This is an error message.</ErrorMessage>
      ) : (
        <HelperText size="sm">This is a hint text to help user.</HelperText>
      )}
    </div>
  ),
};

export const LeftAddon: Story = {
  render: (args) => (
    <div className="flex items-center">
      <InputLeftAddon>https://</InputLeftAddon>
      <Input
        className="rounded-l-none"
        type="email"
        placeholder="olivia@untitledui.com"
        {...args}
      />
    </div>
  ),
};

export const LabeledLeftAddon: Story = {
  render: (args) => (
    <div className="space-y-1.5">
      <Label size="sm" htmlFor="email">
        Email
      </Label>
      <div className="flex items-center">
        <InputLeftAddon>https://</InputLeftAddon>
        <Input
          className="rounded-l-none"
          id="email"
          type="email"
          placeholder="olivia@untitledui.com"
          {...args}
        />
      </div>
    </div>
  ),
};

export const LabeledHelperTextLeftAddon: Story = {
  render: ({ isInvalid, ...args }) => (
    <div className="space-y-1.5">
      <Label size="sm" htmlFor="email">
        Email
      </Label>
      <div className="flex items-center">
        <InputLeftAddon>https://</InputLeftAddon>
        <Input
          className="rounded-l-none"
          id="email"
          type="email"
          placeholder="olivia@untitledui.com"
          isInvalid={isInvalid}
          {...args}
        />
      </div>
      {isInvalid ? (
        <ErrorMessage>This is an error message.</ErrorMessage>
      ) : (
        <HelperText size="sm">This is a hint text to help user.</HelperText>
      )}
    </div>
  ),
};

export const HelperTextLeftAddon: Story = {
  render: ({ isInvalid, ...args }) => (
    <div className="space-y-1.5">
      <div className="flex items-center">
        <InputLeftAddon>https://</InputLeftAddon>
        <Input
          className="rounded-l-none"
          type="email"
          placeholder="olivia@untitledui.com"
          isInvalid={isInvalid}
          {...args}
        />
      </div>
      {isInvalid ? (
        <ErrorMessage>This is an error message.</ErrorMessage>
      ) : (
        <HelperText size="sm">This is a hint text to help user.</HelperText>
      )}
    </div>
  ),
};

export const HelpCircleLeftAddon: Story = {
  render: (args) => (
    <div className="flex items-center">
      <InputLeftAddon>https://</InputLeftAddon>
      <Input
        className="rounded-l-none"
        type="email"
        rightIcon={<HelpCircle />}
        placeholder="olivia@untitledui.com"
        {...args}
      />
    </div>
  ),
};

export const LabeledHelpCircleLeftAddon: Story = {
  render: ({ ...args }) => (
    <div className="space-y-1.5">
      <Label size="sm" htmlFor="email">
        Email
      </Label>
      <div className="flex items-center">
        <InputLeftAddon>https://</InputLeftAddon>
        <Input
          className="rounded-l-none"
          id="email"
          type="email"
          placeholder="olivia@untitledui.com"
          rightIcon={<HelpCircle />}
          {...args}
        />
      </div>
    </div>
  ),
};

export const LabeledHelperTextHelpCircleLeftAddon: Story = {
  render: ({ isInvalid, ...args }) => (
    <div className="space-y-1.5">
      <Label size="sm" htmlFor="email">
        Email
      </Label>
      <div className="flex items-center">
        <InputLeftAddon>https://</InputLeftAddon>
        <Input
          className="rounded-l-none"
          id="email"
          type="email"
          placeholder="olivia@untitledui.com"
          rightIcon={<HelpCircle />}
          isInvalid={isInvalid}
          {...args}
        />
      </div>
      {isInvalid ? (
        <ErrorMessage>This is an error message.</ErrorMessage>
      ) : (
        <HelperText size="sm">This is a hint text to help user.</HelperText>
      )}
    </div>
  ),
};

export const HelperTextHelpCircleLeftAddon: Story = {
  render: ({ isInvalid, ...args }) => (
    <div className="space-y-1.5">
      <div className="flex items-center">
        <InputLeftAddon>https://</InputLeftAddon>
        <Input
          className="rounded-l-none"
          type="email"
          placeholder="olivia@untitledui.com"
          rightIcon={<HelpCircle />}
          isInvalid={isInvalid}
          {...args}
        />
      </div>
      {isInvalid ? (
        <ErrorMessage>This is an error message.</ErrorMessage>
      ) : (
        <HelperText size="sm">This is a hint text to help user.</HelperText>
      )}
    </div>
  ),
};
