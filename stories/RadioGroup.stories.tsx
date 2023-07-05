import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  component: RadioGroup,
};

type Story = StoryObj<typeof RadioGroup>;

export default meta;

export const WithLabel: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <RadioGroupItem value="Option 1" label="Option 1" />
      <RadioGroupItem value="Option 2" label="Option 2" />
      <RadioGroupItem value="Option 3" label="Option 3" />
      <RadioGroupItem value="Option 4" label="Option 4" />
    </RadioGroup>
  ),
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/wTW5aoJfEb9KtPeU8KkbG3/BM---Integration-Partner---Development?type=design&node-id=3-99384&mode=design&t=7tHwWIvqQP0an7tx-4",
    },
  },
};

export const WithCategory: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <RadioGroupItem
        value="Option 1"
        label="ALB WAF Service"
        category="Personal"
      />
      <RadioGroupItem
        value="Option 2"
        label="ALB WAF Service"
        category="Personal"
      />
      <RadioGroupItem
        value="Option 3"
        label="ALB WAF Service"
        category="Personal"
      />
      <RadioGroupItem
        value="Option 4"
        label="ALB WAF Service"
        category="Personal"
      />
    </RadioGroup>
  ),
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/wTW5aoJfEb9KtPeU8KkbG3/BM---Integration-Partner---Development?type=design&node-id=3-99424&mode=design&t=7tHwWIvqQP0an7tx-4",
    },
  },
};

export const WithDesc: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <RadioGroupItem
        value="Option 1"
        label="ALB WAF Service"
        category="Personal"
        desc="Video streaming service"
      />
      <RadioGroupItem
        value="Option 2"
        label="ALB WAF Service"
        category="Personal"
        desc="Video streaming service"
      />
      <RadioGroupItem
        value="Option 3"
        label="ALB WAF Service"
        category="Personal"
        desc="Video streaming service"
      />
      <RadioGroupItem
        value="Option 4"
        label="ALB WAF Service"
        category="Personal"
        desc="Video streaming service"
      />
    </RadioGroup>
  ),
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/wTW5aoJfEb9KtPeU8KkbG3/BM---Integration-Partner---Development?type=design&node-id=3-99488&mode=design&t=7tHwWIvqQP0an7tx-4",
    },
  },
};
