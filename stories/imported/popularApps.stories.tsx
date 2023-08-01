import type { Meta, StoryObj } from "@storybook/react";
import PopularApps from "@/components/popularApps";
import {
  ChromeIcon,
  DellIcon,
  DropboxIcon,
  EvernoteIcon,
  FigmaIcon,
  GithubIcon,
  ShopifyIcon,
  StripeIcon,
  TikTokIcon,
  TwitchIcon,
} from "@/components/assets";

const meta: Meta<typeof PopularApps> = {
  component: PopularApps,
  title: "PopularApps",
  tags: ["autodocs"],
  argTypes: {
    var1: {},
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};

export const Chrome: Story = {
  args: {
    var1: ChromeIcon,
  },
};

export const Dell: Story = {
  args: {
    var1: DellIcon,
  },
};
export const Dropbox: Story = {
  args: {
    var1: DropboxIcon,
  },
};
export const Evernote: Story = {
  args: {
    var1: EvernoteIcon,
  },
};
export const Figma: Story = {
  args: {
    var1: FigmaIcon,
  },
};
export const Github: Story = {
  args: {
    var1: GithubIcon,
  },
};
export const Shopify: Story = {
  args: {
    var1: ShopifyIcon,
  },
};
export const Stripe: Story = {
  args: {
    var1: StripeIcon,
  },
};
export const TikTok: Story = {
  args: {
    var1: TikTokIcon,
  },
};
export const Twitch: Story = {
  args: {
    var1: TwitchIcon,
  },
};
