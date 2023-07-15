import { Meta, StoryObj } from "@storybook/react";

import { HelperText, Label, CheckboxGroup, Checkbox } from "@/components/ui";

const meta: Meta = {
  component: CheckboxGroup,
};

export default meta;

type Story = StoryObj<typeof CheckboxGroup>;

export const SmLabel: Story = {
  render: (args) => {
    return (
      <CheckboxGroup {...args}>
        <div className="flex gap-x-3">
          <Checkbox value="Option 1" id="option-one" />
          <Label
            className="text-xs leading-[18px] text-gray-800"
            htmlFor="option-one"
          >
            Option 1
          </Label>
        </div>

        <div className="flex gap-x-3">
          <Checkbox value="Option 2" id="option-two" />
          <Label
            className="text-xs leading-[18px] text-gray-800"
            htmlFor="option-two"
          >
            Option 2
          </Label>
        </div>
      </CheckboxGroup>
    );
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=934-196255&mode=design&t=Dqio8O8PYU8ELDz0-4",
    },
  },
};

export const MdLabel: Story = {
  render: (args) => {
    return (
      <CheckboxGroup className="space-y-3" {...args}>
        <div className="flex gap-x-3.5">
          <Checkbox size="md" value="Option 1" id="option-one" />
          <Label className="text-gray-800" htmlFor="option-one">
            Option 1
          </Label>
        </div>

        <div className="flex gap-x-3.5">
          <Checkbox size="md" value="Option 2" id="option-two" />
          <Label className="text-gray-800" htmlFor="option-two">
            Option 2
          </Label>
        </div>
      </CheckboxGroup>
    );
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=934-196274&mode=design&t=Dqio8O8PYU8ELDz0-4",
    },
  },
};

export const LgLabel: Story = {
  render: (args) => {
    return (
      <CheckboxGroup className="space-y-3.5" {...args}>
        <div className="flex gap-x-4">
          <Checkbox size="lg" value="Option 1" id="option-one" />
          <Label className="text-gray-800" size="md" htmlFor="option-one">
            Option 1
          </Label>
        </div>

        <div className="flex gap-x-4">
          <Checkbox size="lg" value="Option 2" id="option-two" />
          <Label className="text-gray-800" size="md" htmlFor="option-two">
            Option 2
          </Label>
        </div>
      </CheckboxGroup>
    );
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=934-196293&mode=design&t=Dqio8O8PYU8ELDz0-4",
    },
  },
};

export const SmLabelHelperText: Story = {
  render: (args) => {
    return (
      <CheckboxGroup {...args}>
        <div className="flex gap-x-3">
          <Checkbox value="Option 1" id="option-one" />
          <Label
            className="flex flex-col text-xs leading-[18px] text-gray-800"
            htmlFor="option-one"
          >
            Option 1
            <HelperText className="text-xs leading-[18px]">
              Short description here
            </HelperText>
          </Label>
        </div>

        <div className="flex gap-x-3">
          <Checkbox value="Option 2" id="option-two" />
          <Label
            className="flex flex-col text-xs leading-[18px] text-gray-800"
            htmlFor="option-two"
          >
            Option 2
            <HelperText className="text-xs leading-[18px]">
              Short description here
            </HelperText>
          </Label>
        </div>
      </CheckboxGroup>
    );
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=934-196249&mode=design&t=Dqio8O8PYU8ELDz0-4",
    },
  },
};

export const MdLabelHelperText: Story = {
  render: (args) => {
    return (
      <CheckboxGroup className="space-y-3" {...args}>
        <div className="flex gap-x-3.5">
          <Checkbox size="md" value="Option 1" id="option-one" />
          <Label className="flex flex-col text-gray-800" htmlFor="option-one">
            Option 1 <HelperText>Short description here</HelperText>
          </Label>
        </div>

        <div className="flex gap-x-3.5">
          <Checkbox size="md" value="Option 2" id="option-two" />
          <Label className="flex flex-col text-gray-800" htmlFor="option-two">
            Option 2 <HelperText>Short description here</HelperText>
          </Label>
        </div>
      </CheckboxGroup>
    );
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=934-196268&mode=design&t=Dqio8O8PYU8ELDz0-4",
    },
  },
};

export const LgLabelHelperText: Story = {
  render: (args) => {
    return (
      <CheckboxGroup className="space-y-3.5" {...args}>
        <div className="flex gap-x-4">
          <Checkbox size="lg" value="Option 1" id="option-one" />
          <Label
            className="flex flex-col text-gray-800"
            size="md"
            htmlFor="option-one"
          >
            Option 1 <HelperText size="md">Short description here</HelperText>
          </Label>
        </div>

        <div className="flex gap-x-4">
          <Checkbox size="lg" value="Option 2" id="option-two" />
          <Label
            className="flex flex-col text-gray-800"
            size="md"
            htmlFor="option-two"
          >
            Option 2 <HelperText size="md">Short description here</HelperText>
          </Label>
        </div>
      </CheckboxGroup>
    );
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=934-196287&mode=design&t=Dqio8O8PYU8ELDz0-4",
    },
  },
};
