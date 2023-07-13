import { Meta, StoryObj } from "@storybook/react";

import { Label, RadioGroup, RadioGroupItem } from "@/components/ui";

const meta: Meta = {
  component: RadioGroup,
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const SmallWithLabel: Story = {
  render: (args) => {
    return (
      <RadioGroup {...args}>
        <div className="flex gap-x-3">
          <RadioGroupItem value="Option 1" id="option-one" />
          <Label
            className="flex flex-col text-xs leading-[18px] text-gray-800 peer-disabled:opacity-50"
            htmlFor="option-one"
          >
            Option 1
          </Label>
        </div>

        <div className="flex gap-x-3">
          <RadioGroupItem value="Option 2" id="option-two" />
          <Label
            className="flex flex-col text-xs leading-[18px] text-gray-800 peer-disabled:opacity-50"
            htmlFor="option-two"
          >
            Option 2
          </Label>
        </div>
      </RadioGroup>
    );
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=515-202143&mode=design&t=rlIa0Hm4A6BZWLwF-4",
    },
  },
};

export const MediumWithLabel: Story = {
  render: (args) => {
    return (
      <RadioGroup className="space-y-3" {...args}>
        <div className="flex gap-x-3.5">
          <RadioGroupItem size="md" value="Option 1" id="option-one" />
          <Label
            className="flex flex-col text-gray-800 peer-disabled:opacity-50"
            htmlFor="option-one"
          >
            Option 1
          </Label>
        </div>

        <div className="flex gap-x-3.5">
          <RadioGroupItem size="md" value="Option 2" id="option-two" />
          <Label
            className="flex flex-col text-gray-800 peer-disabled:opacity-50"
            htmlFor="option-two"
          >
            Option 2
          </Label>
        </div>
      </RadioGroup>
    );
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=515-202225&mode=design&t=rlIa0Hm4A6BZWLwF-4",
    },
  },
};

export const LargeWithLabel: Story = {
  render: (args) => {
    return (
      <RadioGroup className="space-y-3.5" {...args}>
        <div className="flex gap-x-4">
          <RadioGroupItem size="lg" value="Option 1" id="option-one" />
          <Label
            className="flex flex-col text-base leading-6 text-gray-800 peer-disabled:opacity-50"
            htmlFor="option-one"
          >
            Option 1
          </Label>
        </div>

        <div className="flex gap-x-4">
          <RadioGroupItem size="lg" value="Option 2" id="option-two" />
          <Label
            className="flex flex-col text-base leading-6 text-gray-800 peer-disabled:opacity-50"
            htmlFor="option-two"
          >
            Option 2
          </Label>
        </div>
      </RadioGroup>
    );
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=515-202303&mode=design&t=rlIa0Hm4A6BZWLwF-4",
    },
  },
};

export const SmallWithDesc: Story = {
  render: (args) => {
    return (
      <RadioGroup {...args}>
        <div className="flex gap-x-3">
          <RadioGroupItem value="Option 1" id="option-one" />
          <Label
            className="flex flex-col text-xs leading-[18px] text-gray-800 peer-disabled:opacity-50"
            htmlFor="option-one"
          >
            <span>Option 1</span>
            <span className="font-normal text-gray-500">
              Short description here
            </span>
          </Label>
        </div>

        <div className="flex gap-x-3">
          <RadioGroupItem value="Option 2" id="option-two" />
          <Label
            className="flex flex-col text-xs leading-[18px] text-gray-800 peer-disabled:opacity-50"
            htmlFor="option-two"
          >
            <span>Option 2</span>
            <span className="font-normal text-gray-500">
              Short description here
            </span>
          </Label>
        </div>
      </RadioGroup>
    );
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=515-202158&mode=design&t=rlIa0Hm4A6BZWLwF-4",
    },
  },
};

export const MediumWithDesc: Story = {
  render: (args) => {
    return (
      <RadioGroup className="space-y-3" {...args}>
        <div className="flex gap-x-3.5">
          <RadioGroupItem size="md" value="Option 1" id="option-one" />
          <Label
            className="flex flex-col text-gray-800 peer-disabled:opacity-50"
            htmlFor="option-one"
          >
            <span>Option 1</span>
            <span className="font-normal text-gray-500">
              Short description here
            </span>
          </Label>
        </div>

        <div className="flex gap-x-3.5">
          <RadioGroupItem size="md" value="Option 2" id="option-two" />
          <Label
            className="flex flex-col text-gray-800 peer-disabled:opacity-50"
            htmlFor="option-two"
          >
            <span>Option 2</span>
            <span className="font-normal text-gray-500">
              Short description here
            </span>
          </Label>
        </div>
      </RadioGroup>
    );
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=515-202219&mode=design&t=rlIa0Hm4A6BZWLwF-4",
    },
  },
};

export const LargeWithDesc: Story = {
  render: (args) => {
    return (
      <RadioGroup className="space-y-3.5" {...args}>
        <div className="flex gap-x-4">
          <RadioGroupItem size="lg" value="Option 1" id="option-one" />
          <Label
            className="flex flex-col text-base leading-6 text-gray-800 peer-disabled:opacity-50"
            htmlFor="option-one"
          >
            <span>Option 1</span>
            <span className="font-normal text-gray-500">
              Short description here
            </span>
          </Label>
        </div>

        <div className="flex gap-x-4">
          <RadioGroupItem size="lg" value="Option 2" id="option-two" />
          <Label
            className="flex flex-col text-base leading-6 text-gray-800 peer-disabled:opacity-50"
            htmlFor="option-two"
          >
            <span>Option 2</span>
            <span className="font-normal text-gray-500">
              Short description here
            </span>
          </Label>
        </div>
      </RadioGroup>
    );
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=515-202297&mode=design&t=rlIa0Hm4A6BZWLwF-4",
    },
  },
};
