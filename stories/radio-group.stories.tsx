import { Meta, StoryObj } from "@storybook/react";

import {
  HelperText,
  Label,
  RadioGroup,
  RadioButton,
  RadioGroupItem,
  RadioGroupItemIndicator,
} from "@/components/ui";
import { Circle } from "lucide-react";

const meta: Meta = {
  title: "RadioGroup",
  component: RadioGroup,
  argTypes: {
    disabled: {
      control: "boolean",
    },
  },
  args: {
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const SmLabel: Story = {
  render: (args) => {
    return (
      <RadioGroup {...args}>
        <div className="flex gap-x-3">
          <RadioButton value="Option 1" id="option-one" />
          <Label
            className="text-xs leading-[18px] text-gray-800"
            htmlFor="option-one"
          >
            Option 1
          </Label>
        </div>

        <div className="flex gap-x-3">
          <RadioButton value="Option 2" id="option-two" />
          <Label
            className="text-xs leading-[18px] text-gray-800"
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

export const MdLabel: Story = {
  render: (args) => {
    return (
      <RadioGroup className="space-y-3" {...args}>
        <div className="flex gap-x-3.5">
          <RadioButton size="md" value="Option 1" id="option-one" />
          <Label className="text-gray-800" htmlFor="option-one">
            Option 1
          </Label>
        </div>

        <div className="flex gap-x-3.5">
          <RadioButton size="md" value="Option 2" id="option-two" />
          <Label className="text-gray-800" htmlFor="option-two">
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

export const LgLabel: Story = {
  render: (args) => {
    return (
      <RadioGroup className="space-y-3.5" {...args}>
        <div className="flex gap-x-4">
          <RadioButton size="lg" value="Option 1" id="option-one" />
          <Label className="text-gray-800" size="md" htmlFor="option-one">
            Option 1
          </Label>
        </div>

        <div className="flex gap-x-4">
          <RadioButton size="lg" value="Option 2" id="option-two" />
          <Label className="text-gray-800" size="md" htmlFor="option-two">
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

export const SmLabelHelperText: Story = {
  render: (args) => {
    return (
      <RadioGroup {...args}>
        <div className="flex gap-x-3">
          <RadioButton value="Option 1" id="option-one" />
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
          <RadioButton value="Option 2" id="option-two" />
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

export const MdLabelHelperText: Story = {
  render: (args) => {
    return (
      <RadioGroup className="space-y-3" {...args}>
        <div className="flex gap-x-3.5">
          <RadioButton size="md" value="Option 1" id="option-one" />
          <Label className="flex flex-col text-gray-800" htmlFor="option-one">
            Option 1 <HelperText>Short description here</HelperText>
          </Label>
        </div>

        <div className="flex gap-x-3.5">
          <RadioButton size="md" value="Option 2" id="option-two" />
          <Label className="flex flex-col text-gray-800" htmlFor="option-two">
            Option 2 <HelperText>Short description here</HelperText>
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

export const LgLabelHelperText: Story = {
  render: (args) => {
    return (
      <RadioGroup className="space-y-3.5" {...args}>
        <div className="flex gap-x-4">
          <RadioButton size="lg" value="Option 1" id="option-one" />
          <Label
            className="flex flex-col text-gray-800"
            size="md"
            htmlFor="option-one"
          >
            Option 1 <HelperText size="md">Short description here</HelperText>
          </Label>
        </div>

        <div className="flex gap-x-4">
          <RadioButton size="lg" value="Option 2" id="option-two" />
          <Label
            className="flex flex-col text-gray-800"
            size="md"
            htmlFor="option-two"
          >
            Option 2 <HelperText size="md">Short description here</HelperText>
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

export const SmSelector: Story = {
  render: (args) => {
    return (
      <RadioGroup className="space-y-5" {...args}>
        <Label className="block" size="xs">
          <RadioGroupItem
            className="group flex w-full items-center gap-x-5 rounded-[7px] border-2 px-5 py-2 text-left data-[state=checked]:border-primary-400 hover:border-gray-300 data-[state=checked]:hover:border-primary-400 focus:border-primary-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-gray-200 disabled:hover:border-gray-200"
            value="Option 1"
          >
            <div className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-[1.5px] border-gray-300 group-focus:ring-2 group-focus:ring-primary-50 group-focus:ring-offset-2 group-focus:ring-offset-primary-50 group-focus-visible:outline-none group-disabled:border-gray-200 group-disabled:bg-gray-50 group-disabled:text-gray-200 group-data-[state=checked]:border-primary-500 group-data-[state=checked]:text-primary-500 group-data-[state=checked]:group-disabled:border-gray-200 group-data-[state=checked]:group-disabled:text-gray-200 hover:border-primary-400 hover:ring-2 hover:ring-primary-50 hover:ring-offset-2 hover:ring-offset-primary-50 hover:group-disabled:ring-0 hover:group-disabled:ring-offset-0">
              <RadioGroupItemIndicator>
                <Circle className="h-1.5 w-1.5 fill-current text-current" />
              </RadioGroupItemIndicator>
            </div>

            <div className="flex flex-col group-disabled:opacity-50">
              <span>Option 1</span>
              <HelperText size="xs">Short description here</HelperText>
            </div>
          </RadioGroupItem>
        </Label>
        <Label className="block" size="xs">
          <RadioGroupItem
            className="group flex w-full items-center gap-x-5 rounded-[7px] border-2 px-5 py-2 text-left data-[state=checked]:border-primary-500 hover:border-gray-300 data-[state=checked]:hover:border-primary-400 focus:border-primary-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-gray-200 disabled:hover:border-gray-200"
            value="Option 2"
          >
            <div className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-[1.5px] border-gray-300 group-focus:ring-2 group-focus:ring-primary-50 group-focus:ring-offset-2 group-focus:ring-offset-primary-50 group-focus-visible:outline-none group-disabled:border-gray-200 group-disabled:bg-gray-50 group-disabled:text-gray-200 group-data-[state=checked]:border-primary-500 group-data-[state=checked]:text-primary-500 group-data-[state=checked]:group-disabled:border-gray-200 group-data-[state=checked]:group-disabled:text-gray-200 hover:border-primary-400 hover:ring-2 hover:ring-primary-50 hover:ring-offset-2 hover:ring-offset-primary-50 hover:group-disabled:ring-0 hover:group-disabled:ring-offset-0">
              <RadioGroupItemIndicator>
                <Circle className="h-1.5 w-1.5 fill-current text-current" />
              </RadioGroupItemIndicator>
            </div>

            <div className="flex flex-col group-disabled:opacity-50">
              <span>Option 2</span>
              <HelperText size="xs">Short description here</HelperText>
            </div>
          </RadioGroupItem>
        </Label>
      </RadioGroup>
    );
  },
};

export const MdSelector: Story = {
  render: (args) => {
    return (
      <RadioGroup className="space-y-5" {...args}>
        <Label className="block" size="sm">
          <RadioGroupItem
            className="group flex w-full items-center gap-x-5 rounded-[7px] border-2 px-5 py-2 text-left data-[state=checked]:border-primary-400 hover:border-gray-300 data-[state=checked]:hover:border-primary-400 focus:border-primary-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-gray-200 disabled:hover:border-gray-200"
            value="Option 1"
          >
            <div className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-[1.5px] border-gray-300 group-focus:ring-2 group-focus:ring-primary-50 group-focus:ring-offset-2 group-focus:ring-offset-primary-50 group-focus-visible:outline-none group-disabled:border-gray-200 group-disabled:bg-gray-50 group-disabled:text-gray-200 group-data-[state=checked]:border-primary-500 group-data-[state=checked]:text-primary-500 group-data-[state=checked]:group-disabled:border-gray-200 group-data-[state=checked]:group-disabled:text-gray-200 hover:border-primary-400 hover:ring-2 hover:ring-primary-50 hover:ring-offset-2 hover:ring-offset-primary-50 hover:group-disabled:ring-0 hover:group-disabled:ring-offset-0">
              <RadioGroupItemIndicator>
                <Circle className="h-2 w-2 fill-current text-current" />
              </RadioGroupItemIndicator>
            </div>

            <div className="flex flex-col group-disabled:opacity-50">
              <span>Option 1</span>
              <HelperText size="sm">Short description here</HelperText>
            </div>
          </RadioGroupItem>
        </Label>

        <Label className="block" size="sm">
          <RadioGroupItem
            className="group flex w-full items-center gap-x-5 rounded-[7px] border-2 px-5 py-2 text-left data-[state=checked]:border-primary-500 hover:border-gray-300 data-[state=checked]:hover:border-primary-400 focus:border-primary-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-gray-200 disabled:hover:border-gray-200"
            value="Option 2"
          >
            <div className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-[1.5px] border-gray-300 group-focus:ring-2 group-focus:ring-primary-50 group-focus:ring-offset-2 group-focus:ring-offset-primary-50 group-focus-visible:outline-none group-disabled:border-gray-200 group-disabled:bg-gray-50 group-disabled:text-gray-200 group-data-[state=checked]:border-primary-500 group-data-[state=checked]:text-primary-500 group-data-[state=checked]:group-disabled:border-gray-200 group-data-[state=checked]:group-disabled:text-gray-200 hover:border-primary-400 hover:ring-2 hover:ring-primary-50 hover:ring-offset-2 hover:ring-offset-primary-50 hover:group-disabled:ring-0 hover:group-disabled:ring-offset-0">
              <RadioGroupItemIndicator>
                <Circle className="h-2 w-2 fill-current text-current" />
              </RadioGroupItemIndicator>
            </div>

            <div className="flex flex-col group-disabled:opacity-50">
              <span>Option 2</span>
              <HelperText size="sm">Short description here</HelperText>
            </div>
          </RadioGroupItem>
        </Label>
      </RadioGroup>
    );
  },
};

export const LgSelector: Story = {
  render: (args) => {
    return (
      <RadioGroup className="space-y-5" {...args}>
        <Label className="block" size="md">
          <RadioGroupItem
            className="group flex w-full items-center gap-x-5 rounded-[7px] border-2 px-5 py-2 text-left data-[state=checked]:border-primary-400 hover:border-gray-300 data-[state=checked]:hover:border-primary-400 focus:border-primary-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-gray-200 disabled:hover:border-gray-200"
            value="Option 1"
          >
            <div className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-[1.5px] border-gray-300 group-focus:ring-2 group-focus:ring-primary-50 group-focus:ring-offset-2 group-focus:ring-offset-primary-50 group-focus-visible:outline-none group-disabled:border-gray-200 group-disabled:bg-gray-50 group-disabled:text-gray-200 group-data-[state=checked]:border-primary-500 group-data-[state=checked]:text-primary-500 group-data-[state=checked]:group-disabled:border-gray-200 group-data-[state=checked]:group-disabled:text-gray-200 hover:border-primary-400 hover:ring-2 hover:ring-primary-50 hover:ring-offset-2 hover:ring-offset-primary-50 hover:group-disabled:ring-0 hover:group-disabled:ring-offset-0">
              <RadioGroupItemIndicator>
                <Circle className="h-2.5 w-2.5 fill-current text-current" />
              </RadioGroupItemIndicator>
            </div>

            <div className="flex flex-col group-disabled:opacity-50">
              <span>Option 1</span>
              <HelperText size="md">Short description here</HelperText>
            </div>
          </RadioGroupItem>
        </Label>

        <Label className="block" size="md">
          <RadioGroupItem
            className="group flex w-full items-center gap-x-5 rounded-[7px] border-2 px-5 py-2 text-left data-[state=checked]:border-primary-500 hover:border-gray-300 data-[state=checked]:hover:border-primary-400 focus:border-primary-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-gray-200 disabled:hover:border-gray-200"
            value="Option 2"
          >
            <div className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-[1.5px] border-gray-300 group-focus:ring-2 group-focus:ring-primary-50 group-focus:ring-offset-2 group-focus:ring-offset-primary-50 group-focus-visible:outline-none group-disabled:border-gray-200 group-disabled:bg-gray-50 group-disabled:text-gray-200 group-data-[state=checked]:border-primary-500 group-data-[state=checked]:text-primary-500 group-data-[state=checked]:group-disabled:border-gray-200 group-data-[state=checked]:group-disabled:text-gray-200 hover:border-primary-400 hover:ring-2 hover:ring-primary-50 hover:ring-offset-2 hover:ring-offset-primary-50 hover:group-disabled:ring-0 hover:group-disabled:ring-offset-0">
              <RadioGroupItemIndicator>
                <Circle className="h-2.5 w-2.5 fill-current text-current" />
              </RadioGroupItemIndicator>
            </div>

            <div className="flex flex-col group-disabled:opacity-50">
              <span>Option 2</span>
              <HelperText size="md">Short description here</HelperText>
            </div>
          </RadioGroupItem>
        </Label>
      </RadioGroup>
    );
  },
};
