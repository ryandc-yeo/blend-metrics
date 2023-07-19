import { Meta, StoryObj } from "@storybook/react";
import { Dot, Figma, Plus } from "lucide-react";

import {
  Apple,
  Apple2,
  AppleGray,
  Dribbble,
  DribbbleCircle,
  DribbbleCircleGray,
  Facebook,
  Facebook2,
  FacebookGray,
  FigmaGray,
  Google,
  GoogleGray,
  Twitter,
  Twitter2,
  TwitterGray,
} from "@/components/icons";
import { Button } from "@/components/ui";

const meta: Meta = {
  title: "Button",
  component: Button,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    visual: {
      control: false,
    },
    disabled: {
      control: "boolean",
    },
    variant: {
      control: "select",
      options: ["solid", "secondary", "outlined", "ghost", "link"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl", "2xl"],
    },
    leftIcon: {
      control: false,
    },
    rightIcon: {
      control: false,
    },
  },
  args: {
    disabled: false,
    children: "Button",
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "secondary", "ghost", "link"],
    },
  },
};

export const Error: Story = {
  args: {
    visual: "error",
  },
  argTypes: {},
};

export const Gray: Story = {
  args: {
    variant: "outlined",
    visual: "gray",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["outlined", "ghost", "link"],
    },
  },
};

export const LeftIconPrimary: Story = {
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "secondary", "ghost", "link"],
    },
  },
  render: (args) => (
    <Button {...args} leftIcon={<Plus size={15} />}>
      Button
    </Button>
  ),
};

export const LeftIconError: Story = {
  args: {
    visual: "error",
  },
  argTypes: {},
  render: (args) => (
    <Button {...args} leftIcon={<Plus size={15} />}>
      Button
    </Button>
  ),
};

export const LeftIconGray: Story = {
  args: {
    variant: "outlined",
    visual: "gray",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["outlined", "ghost", "link"],
    },
  },
  render: (args) => (
    <Button {...args} leftIcon={<Plus size={15} />}>
      Button
    </Button>
  ),
};

export const RightIconPrimary: Story = {
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "secondary", "ghost", "link"],
    },
  },
  render: (args) => (
    <Button {...args} rightIcon={<Plus size={15} />}>
      Button
    </Button>
  ),
};

export const RightIconError: Story = {
  args: {
    visual: "error",
  },
  render: (args) => (
    <Button {...args} rightIcon={<Plus size={15} />}>
      Button
    </Button>
  ),
};

export const RightIconGray: Story = {
  args: {
    variant: "outlined",
    visual: "gray",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["outlined", "ghost", "link"],
    },
  },
  render: (args) => (
    <Button {...args} rightIcon={<Plus size={15} />}>
      Button
    </Button>
  ),
};

export const DotIconPrimary: Story = {
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "secondary", "ghost", "link"],
    },
  },
  render: (args) => (
    <Button {...args} leftIcon={<Dot className="stroke-[8px]" size={10} />}>
      Button
    </Button>
  ),
};

export const DotIconError: Story = {
  args: {
    visual: "error",
  },
  render: (args) => (
    <Button {...args} leftIcon={<Dot className="stroke-[8px]" size={10} />}>
      Button
    </Button>
  ),
};

export const DotIconGray: Story = {
  args: {
    variant: "outlined",
    visual: "gray",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["outlined", "ghost", "link"],
    },
  },
  render: (args) => (
    <Button {...args} leftIcon={<Dot className="stroke-[8px]" size={10} />}>
      Button
    </Button>
  ),
};

export const GoogleOutlined: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
  render: (args) => (
    <Button
      {...args}
      className="gap-x-3"
      visual="gray"
      variant="outlined"
      leftIcon={<Google />}
    >
      Sign in with Google
    </Button>
  ),
};

export const FacebookOutlined: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    variant: {
      control: true,
    },
  },
  render: (args) => (
    <Button
      {...args}
      className="gap-x-3"
      visual="gray"
      variant="outlined"
      leftIcon={<Facebook2 />}
    >
      Sign in with Facebook
    </Button>
  ),
};

export const AppleOutlined: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
  render: (args) => (
    <Button
      {...args}
      className="gap-x-3"
      visual="gray"
      variant="outlined"
      leftIcon={<Apple2 />}
    >
      Sign in with Twitter
    </Button>
  ),
};

export const TwitterOutlined: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
  render: (args) => (
    <Button
      {...args}
      className="gap-x-3"
      visual="gray"
      variant="outlined"
      leftIcon={<Twitter2 />}
    >
      Sign in with Twitter
    </Button>
  ),
};

export const DribbbleOutlined: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
  render: (args) => (
    <Button
      {...args}
      className="gap-x-3"
      visual="gray"
      variant="outlined"
      leftIcon={<DribbbleCircle />}
    >
      Sign in with Dribbble
    </Button>
  ),
};

export const FacebookSolid: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
  render: (args) => (
    <Button
      {...args}
      className="bg-[#1877F2] hover:bg-[#0C63D4] focus:ring-gray-100"
      leftIcon={<Facebook />}
    >
      Sign in with Facebook
    </Button>
  ),
};

export const AppleSolid: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
  render: (args) => (
    <Button
      {...args}
      className="bg-[#000000] hover:bg-[#000000] focus:ring-gray-100"
      leftIcon={<Apple />}
    >
      Sign in with Twitter
    </Button>
  ),
};

export const TwitterSolid: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
  render: (args) => (
    <Button
      {...args}
      className="bg-[#1DA1F2] hover:bg-[#0C8BD9] focus:ring-gray-100"
      leftIcon={<Twitter />}
    >
      Sign in with Twitter
    </Button>
  ),
};

export const DribbbleSolid: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
  render: (args) => (
    <Button
      {...args}
      className="bg-[#EA4C89] hover:bg-[#E62872] focus:ring-gray-100"
      leftIcon={<Dribbble />}
    >
      Sign in with Dribbble
    </Button>
  ),
};

export const GoogleGrayOutlined: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
  render: (args) => (
    <Button
      {...args}
      className="gap-x-3 text-gray-700"
      visual="gray"
      variant="outlined"
      leftIcon={<GoogleGray />}
    >
      Sign in with Google
    </Button>
  ),
};

export const FacebookGrayOutlined: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    variant: {
      control: true,
    },
  },
  render: (args) => (
    <Button
      {...args}
      className="gap-x-3 text-gray-700"
      visual="gray"
      variant="outlined"
      leftIcon={<FacebookGray />}
    >
      Sign in with Facebook
    </Button>
  ),
};

export const AppleGrayOutlined: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
  render: (args) => (
    <Button
      {...args}
      className="gap-x-3 text-gray-700"
      visual="gray"
      variant="outlined"
      leftIcon={<AppleGray />}
    >
      Sign in with Apple
    </Button>
  ),
};

export const TwitterGrayOutlined: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
  render: (args) => (
    <Button
      {...args}
      className="gap-x-3 text-gray-700"
      visual="gray"
      variant="outlined"
      leftIcon={<TwitterGray />}
    >
      Sign in with Twitter
    </Button>
  ),
};

export const FigmaGrayOutlined: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
  render: (args) => (
    <Button
      {...args}
      className="gap-x-3 text-gray-700"
      visual="gray"
      variant="outlined"
      leftIcon={<FigmaGray />}
    >
      Sign in with Figma
    </Button>
  ),
};

export const DribbbleCircleGrayOutlined: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
  render: (args) => (
    <Button
      {...args}
      className="gap-x-3 text-gray-700"
      visual="gray"
      variant="outlined"
      leftIcon={<DribbbleCircleGray />}
    >
      Sign in with Dribbble
    </Button>
  ),
};
