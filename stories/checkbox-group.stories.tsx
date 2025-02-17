import { Meta, StoryObj } from "@storybook/react";

import { HelperText, Label, CheckboxGroup, Checkbox } from "@/components/ui";

const meta: Meta = {
  title: "Checkbox",
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
          <Label htmlFor="option-one">Option 1</Label>
        </div>

        <div className="flex gap-x-3">
          <Checkbox value="Option 2" id="option-two" />
          <Label htmlFor="option-two">Option 2</Label>
        </div>
      </CheckboxGroup>
    );
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=934-196255&mode=design&t=oI200WrSfiwzeWIG-4",
    },
  },
};

export const MdLabel: Story = {
  render: (args) => {
    return (
      <CheckboxGroup className="space-y-3" {...args}>
        <div className="flex gap-x-3.5">
          <Checkbox size="md" value="Option 1" id="option-one" />
          <Label size="sm" htmlFor="option-one">
            Option 1
          </Label>
        </div>

        <div className="flex gap-x-3.5">
          <Checkbox size="md" value="Option 2" id="option-two" />
          <Label size="sm" htmlFor="option-two">
            Option 2
          </Label>
        </div>
      </CheckboxGroup>
    );
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=934-196274&mode=design&t=oI200WrSfiwzeWIG-4",
    },
  },
};

export const LgLabel: Story = {
  render: (args) => {
    return (
      <CheckboxGroup className="space-y-3.5" {...args}>
        <div className="flex gap-x-4">
          <Checkbox size="lg" value="Option 1" id="option-one" />
          <Label size="md" htmlFor="option-one">
            Option 1
          </Label>
        </div>

        <div className="flex gap-x-4">
          <Checkbox size="lg" value="Option 2" id="option-two" />
          <Label size="md" htmlFor="option-two">
            Option 2
          </Label>
        </div>
      </CheckboxGroup>
    );
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=934-196293&mode=design&t=oI200WrSfiwzeWIG-4",
    },
  },
};

export const SmLabelHelperText: Story = {
  render: (args) => {
    return (
      <CheckboxGroup {...args}>
        <div className="flex gap-x-3">
          <Checkbox value="Option 1" id="option-one" />
          <Label className="flex flex-col" htmlFor="option-one">
            Option 1<HelperText>Short description here</HelperText>
          </Label>
        </div>

        <div className="flex gap-x-3">
          <Checkbox value="Option 2" id="option-two" />
          <Label className="flex flex-col" htmlFor="option-two">
            Option 2<HelperText>Short description here</HelperText>
          </Label>
        </div>
      </CheckboxGroup>
    );
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=934-196249&mode=design&t=oI200WrSfiwzeWIG-4",
    },
  },
};

export const MdLabelHelperText: Story = {
  render: (args) => {
    return (
      <CheckboxGroup className="space-y-3" {...args}>
        <div className="flex gap-x-3.5">
          <Checkbox size="md" value="Option 1" id="option-one" />
          <Label size="sm" className="flex flex-col" htmlFor="option-one">
            Option 1 <HelperText size="sm">Short description here</HelperText>
          </Label>
        </div>

        <div className="flex gap-x-3.5">
          <Checkbox size="md" value="Option 2" id="option-two" />
          <Label size="sm" className="flex flex-col" htmlFor="option-two">
            Option 2 <HelperText size="sm">Short description here</HelperText>
          </Label>
        </div>
      </CheckboxGroup>
    );
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=934-196268&mode=design&t=oI200WrSfiwzeWIG-4",
    },
  },
};

export const LgLabelHelperText: Story = {
  render: (args) => {
    return (
      <CheckboxGroup className="space-y-3.5" {...args}>
        <div className="flex gap-x-4">
          <Checkbox size="lg" value="Option 1" id="option-one" />
          <Label className="flex flex-col" size="md" htmlFor="option-one">
            Option 1 <HelperText size="md">Short description here</HelperText>
          </Label>
        </div>

        <div className="flex gap-x-4">
          <Checkbox size="lg" value="Option 2" id="option-two" />
          <Label className="flex flex-col" size="md" htmlFor="option-two">
            Option 2 <HelperText size="md">Short description here</HelperText>
          </Label>
        </div>
      </CheckboxGroup>
    );
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=934-196287&mode=design&t=oI200WrSfiwzeWIG-4",
    },
  },
};
