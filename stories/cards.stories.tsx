import { Meta, StoryObj } from "@storybook/react";
import {
  ArrowDownToLine,
  Copy,
  Edit3,
  Link,
  MoreHorizontal,
  Star,
  UserPlus,
  Zap,
  Trash2,
  User,
} from "lucide-react";

import {
  FolderClosed2,
  GoogleSheet,
  History2,
  Copy2,
} from "@/components/icons";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
  Badge,
  Card,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Label,
  Switch,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui";

const meta: Meta = {
  title: "Card",
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

export const GoogleSheetIconVariant: Story = {
  render: (args) => (
    <Card className="p-3" {...args}>
      <div className="inline-flex gap-x-3">
        <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border-2 border-gray-200">
          <GoogleSheet />
        </div>
        <div className="space-y-1">
          <h3 className="text-sm font-medium text-gray-800">Google Sheets</h3>
          <p className="text-sm text-gray-600">9 Granted Permissions</p>
        </div>
      </div>

      <div className="flex gap-x-3">
        <Switch size="md" />
        <Label>Enable All Permissions</Label>
      </div>
    </Card>
  ),
};

export const AvatarGroupDefaultVariant: Story = {
  render: (args) => (
    <Card className="px-6 py-[17px]" {...args}>
      <div className="space-y-1">
        <div className="inline-flex items-center gap-x-2">
          <h3 className="text-sm font-medium text-gray-800">Administrator</h3>
          <Badge>Default</Badge>
        </div>
        <p className="text-sm text-gray-500">
          Can manage the content they have created
        </p>
      </div>

      <div className="inline-flex items-center gap-x-8">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <AvatarGroup size="sm">
                <Avatar
                  className="border-2 border-white hover:ring-0"
                  size="sm"
                >
                  <AvatarImage src="/woman.jpg" alt="Woman" />
                  <AvatarFallback>W</AvatarFallback>
                </Avatar>
                <Avatar
                  className="border-2 border-white hover:ring-0"
                  size="sm"
                >
                  <AvatarImage src="/woman.jpg" alt="Woman" />
                  <AvatarFallback>W</AvatarFallback>
                </Avatar>
                <Avatar
                  className="border-2 border-white hover:ring-0"
                  size="sm"
                >
                  <AvatarImage src="/woman.jpg" alt="Woman" />
                  <AvatarFallback>W</AvatarFallback>
                </Avatar>
                <Avatar
                  className="border-2 border-white hover:ring-0"
                  size="sm"
                >
                  <AvatarImage src="/woman.jpg" alt="Woman" />
                  <AvatarFallback>W</AvatarFallback>
                </Avatar>
                <Avatar
                  className="border-2 border-white hover:ring-0"
                  size="sm"
                >
                  <AvatarImage src="/woman.jpg" alt="Woman" />
                  <AvatarFallback>W</AvatarFallback>
                </Avatar>
                <Avatar
                  className="border-2 border-white hover:ring-0"
                  size="sm"
                >
                  <AvatarImage src="/woman.jpg" alt="Woman" />
                  <AvatarFallback>W</AvatarFallback>
                </Avatar>
              </AvatarGroup>
            </TooltipTrigger>

            <TooltipContent
              className="max-h-[192px] space-y-3 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-thumb-rounded-lg"
              size="md"
            >
              <div className="flex items-center gap-x-2">
                <Avatar>
                  <AvatarImage src="/woman.jpg" alt="Woman" />
                  <AvatarFallback>W</AvatarFallback>
                </Avatar>
                <span className="text-xs font-medium leading-5">Woman</span>
              </div>
              <div className="flex items-center gap-x-2">
                <Avatar>
                  <AvatarImage src="/woman.jpg" alt="Woman" />
                  <AvatarFallback>W</AvatarFallback>
                </Avatar>
                <span className="text-xs font-medium leading-5">Woman</span>
              </div>
              <div className="flex items-center gap-x-2">
                <Avatar>
                  <AvatarImage src="/woman.jpg" alt="Woman" />
                  <AvatarFallback>W</AvatarFallback>
                </Avatar>
                <span className="text-xs font-medium leading-5">Woman</span>
              </div>
              <div className="flex items-center gap-x-2">
                <Avatar>
                  <AvatarImage src="/woman.jpg" alt="Woman" />
                  <AvatarFallback>W</AvatarFallback>
                </Avatar>
                <span className="text-xs font-medium leading-5">Woman</span>
              </div>
              <div className="flex items-center gap-x-2">
                <Avatar>
                  <AvatarImage src="/woman.jpg" alt="Woman" />
                  <AvatarFallback>W</AvatarFallback>
                </Avatar>
                <span className="text-xs font-medium leading-5">Woman</span>
              </div>
              <div className="flex items-center gap-x-2">
                <Avatar>
                  <AvatarImage src="/woman.jpg" alt="Woman" />
                  <AvatarFallback>W</AvatarFallback>
                </Avatar>
                <span className="text-xs font-medium leading-5">Woman</span>
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <DropdownMenu>
          <DropdownMenuTrigger className="rounded-[5px] px-1.5 py-1 text-gray-500 hover:bg-gray-100 focus-visible:outline-none">
            <MoreHorizontal size={15} />
          </DropdownMenuTrigger>

          <DropdownMenuContent className="min-w-[182px]">
            <DropdownMenuItem className="flex items-center gap-x-2">
              <Edit3 size={16} />
              Option 1
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <Copy size={16} />
              Option 2
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <Link size={16} />
              Option 3
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <UserPlus size={16} />
              Option 3
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <Zap size={16} />
              Option 4
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <Copy2 />
              Option 5
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <Star size={16} />
              Option 6
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <FolderClosed2 />
              Option 6
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <History2 />
              Option 7
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <ArrowDownToLine size={16} />
              Option 8
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem
              className="flex items-center gap-x-2"
              variant="destructive"
            >
              <Trash2 size={16} />
              Delete item
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Card>
  ),
};

export const NoAssignedUsersDefaultVariant: Story = {
  render: (args) => (
    <Card className="px-6 py-5" {...args}>
      <div className="space-y-1">
        <div className="inline-flex items-center gap-x-2">
          <h3 className="text-sm font-medium text-gray-800">Administrator</h3>
          <Badge>Default</Badge>
        </div>
        <p className="text-sm text-gray-500">
          Can manage the content they have created
        </p>
      </div>

      <div className="inline-flex items-center gap-x-[25px]">
        <p className="text-sm text-gray-500">No assigned users</p>

        <DropdownMenu>
          <DropdownMenuTrigger className="rounded-[5px] px-1.5 py-1 text-gray-500 hover:bg-gray-100 focus-visible:outline-none">
            <MoreHorizontal size={15} />
          </DropdownMenuTrigger>

          <DropdownMenuContent className="min-w-[182px]">
            <DropdownMenuItem className="flex items-center gap-x-2">
              <Edit3 size={16} />
              Option 1
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <Copy size={16} />
              Option 2
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <Link size={16} />
              Option 3
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <UserPlus size={16} />
              Option 3
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <Zap size={16} />
              Option 4
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <Copy2 />
              Option 5
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <Star size={16} />
              Option 6
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <FolderClosed2 />
              Option 6
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <History2 />
              Option 7
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <ArrowDownToLine size={16} />
              Option 8
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem
              className="flex items-center gap-x-2"
              variant="destructive"
            >
              <Trash2 size={16} />
              Delete item
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Card>
  ),
};

export const AvatarIndividualVariant: Story = {
  render: (args) => (
    <Card className="px-6 py-[17px]" {...args}>
      <div className="space-y-1">
        <div className="inline-flex items-center gap-x-2">
          <h3 className="text-sm font-medium text-gray-800">Analyst</h3>
          <Badge visual="primary">Individual</Badge>
        </div>
        <p className="text-sm text-gray-500">
          Can create, update and delete content
        </p>
      </div>

      <div className="inline-flex items-center gap-x-[116px]">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <AvatarGroup size="sm">
                <Avatar
                  className="border-2 border-white hover:ring-0"
                  size="sm"
                >
                  <AvatarImage src="/woman.jpg" alt="Woman" />
                  <AvatarFallback>W</AvatarFallback>
                </Avatar>
              </AvatarGroup>
            </TooltipTrigger>

            <TooltipContent
              className="max-h-[192px] space-y-3 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-thumb-rounded-lg"
              size="md"
            >
              <div className="flex items-center gap-x-2">
                <Avatar>
                  <AvatarImage src="/woman.jpg" alt="Woman" />
                  <AvatarFallback>W</AvatarFallback>
                </Avatar>
                <span className="text-xs font-medium leading-5">Woman</span>
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <DropdownMenu>
          <DropdownMenuTrigger className="rounded-[5px] px-1.5 py-1 text-gray-500 hover:bg-gray-100 focus-visible:outline-none">
            <MoreHorizontal size={15} />
          </DropdownMenuTrigger>

          <DropdownMenuContent className="min-w-[182px]">
            <DropdownMenuItem className="flex items-center gap-x-2">
              <Edit3 size={16} />
              Option 1
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <Copy size={16} />
              Option 2
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <Link size={16} />
              Option 3
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <UserPlus size={16} />
              Option 3
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <Zap size={16} />
              Option 4
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <Copy2 />
              Option 5
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <Star size={16} />
              Option 6
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <FolderClosed2 />
              Option 6
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <History2 />
              Option 7
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <ArrowDownToLine size={16} />
              Option 8
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem
              className="flex items-center gap-x-2"
              variant="destructive"
            >
              <Trash2 size={16} />
              Delete item
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Card>
  ),
};

export const NoAssignedUsersIndividualVariant: Story = {
  render: (args) => (
    <Card className="px-6 py-5" {...args}>
      <div className="space-y-1">
        <div className="inline-flex items-center gap-x-2">
          <h3 className="text-sm font-medium text-gray-800">Editor</h3>
          <Badge visual="primary">Default</Badge>
        </div>
        <p className="text-sm text-gray-500">
          Can create, update and delete content
        </p>
      </div>

      <div className="inline-flex items-center gap-x-[25px]">
        <p className="text-sm text-gray-500">No assigned users</p>

        <DropdownMenu>
          <DropdownMenuTrigger className="rounded-[5px] px-1.5 py-1 text-gray-500 hover:bg-gray-100 focus-visible:outline-none">
            <MoreHorizontal size={15} />
          </DropdownMenuTrigger>

          <DropdownMenuContent className="min-w-[182px]">
            <DropdownMenuItem className="flex items-center gap-x-2">
              <Edit3 size={16} />
              Option 1
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <Copy size={16} />
              Option 2
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <Link size={16} />
              Option 3
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <UserPlus size={16} />
              Option 3
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <Zap size={16} />
              Option 4
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <Copy2 />
              Option 5
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <Star size={16} />
              Option 6
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <FolderClosed2 />
              Option 6
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <History2 />
              Option 7
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <ArrowDownToLine size={16} />
              Option 8
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem
              className="flex items-center gap-x-2"
              variant="destructive"
            >
              <Trash2 size={16} />
              Delete item
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Card>
  ),
};

export const AvatarGroupCustomVariant: Story = {
  render: (args) => (
    <Card className="px-6 py-[17px]" {...args}>
      <div className="space-y-1">
        <div className="inline-flex items-center gap-x-2">
          <h3 className="text-sm font-medium text-gray-800">Editor</h3>
          <Badge visual="primary">Custom</Badge>
        </div>
        <p className="text-sm text-gray-500">
          Can manage the content they have created
        </p>
      </div>

      <div className="inline-flex items-center gap-x-8">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <AvatarGroup size="sm">
                <Avatar
                  className="border-2 border-white hover:ring-0"
                  size="sm"
                >
                  <AvatarImage src="/woman.jpg" alt="Woman" />
                  <AvatarFallback>W</AvatarFallback>
                </Avatar>
                <Avatar
                  className="border-2 border-white hover:ring-0"
                  size="sm"
                >
                  <AvatarImage src="/woman.jpg" alt="Woman" />
                  <AvatarFallback>W</AvatarFallback>
                </Avatar>
                <Avatar
                  className="border-2 border-white hover:ring-0"
                  size="sm"
                >
                  <AvatarImage src="/woman.jpg" alt="Woman" />
                  <AvatarFallback>W</AvatarFallback>
                </Avatar>
                <Avatar
                  className="border-2 border-white hover:ring-0"
                  size="sm"
                >
                  <AvatarImage src="/woman.jpg" alt="Woman" />
                  <AvatarFallback>W</AvatarFallback>
                </Avatar>
                <Avatar
                  className="border-2 border-white hover:ring-0"
                  size="sm"
                >
                  <AvatarImage src="/woman.jpg" alt="Woman" />
                  <AvatarFallback>W</AvatarFallback>
                </Avatar>
                <Avatar
                  className="border-2 border-white hover:ring-0"
                  size="sm"
                >
                  <AvatarImage src="/woman.jpg" alt="Woman" />
                  <AvatarFallback>W</AvatarFallback>
                </Avatar>
              </AvatarGroup>
            </TooltipTrigger>

            <TooltipContent
              className="max-h-[192px] space-y-3 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-thumb-rounded-lg"
              size="md"
            >
              <div className="flex items-center gap-x-2">
                <Avatar>
                  <AvatarImage src="/woman.jpg" alt="Woman" />
                  <AvatarFallback>W</AvatarFallback>
                </Avatar>
                <span className="text-xs font-medium leading-5">Woman</span>
              </div>
              <div className="flex items-center gap-x-2">
                <Avatar>
                  <AvatarImage src="/woman.jpg" alt="Woman" />
                  <AvatarFallback>W</AvatarFallback>
                </Avatar>
                <span className="text-xs font-medium leading-5">Woman</span>
              </div>
              <div className="flex items-center gap-x-2">
                <Avatar>
                  <AvatarImage src="/woman.jpg" alt="Woman" />
                  <AvatarFallback>W</AvatarFallback>
                </Avatar>
                <span className="text-xs font-medium leading-5">Woman</span>
              </div>
              <div className="flex items-center gap-x-2">
                <Avatar>
                  <AvatarImage src="/woman.jpg" alt="Woman" />
                  <AvatarFallback>W</AvatarFallback>
                </Avatar>
                <span className="text-xs font-medium leading-5">Woman</span>
              </div>
              <div className="flex items-center gap-x-2">
                <Avatar>
                  <AvatarImage src="/woman.jpg" alt="Woman" />
                  <AvatarFallback>W</AvatarFallback>
                </Avatar>
                <span className="text-xs font-medium leading-5">Woman</span>
              </div>
              <div className="flex items-center gap-x-2">
                <Avatar>
                  <AvatarImage src="/woman.jpg" alt="Woman" />
                  <AvatarFallback>W</AvatarFallback>
                </Avatar>
                <span className="text-xs font-medium leading-5">Woman</span>
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <DropdownMenu>
          <DropdownMenuTrigger className="rounded-[5px] px-1.5 py-1 text-gray-500 hover:bg-gray-100 focus-visible:outline-none">
            <MoreHorizontal size={15} />
          </DropdownMenuTrigger>

          <DropdownMenuContent className="min-w-[182px]">
            <DropdownMenuItem className="flex items-center gap-x-2">
              <Edit3 size={16} />
              Option 1
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <Copy size={16} />
              Option 2
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <Link size={16} />
              Option 3
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <UserPlus size={16} />
              Option 3
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <Zap size={16} />
              Option 4
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <Copy2 />
              Option 5
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <Star size={16} />
              Option 6
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <FolderClosed2 />
              Option 6
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <History2 />
              Option 7
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <ArrowDownToLine size={16} />
              Option 8
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem
              className="flex items-center gap-x-2"
              variant="destructive"
            >
              <Trash2 size={16} />
              Delete item
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Card>
  ),
};

export const NoAssignedUsersCustomVariant: Story = {
  render: (args) => (
    <Card className="px-6 py-5" {...args}>
      <div className="space-y-1">
        <div className="inline-flex items-center gap-x-2">
          <h3 className="text-sm font-medium text-gray-800">Administrator</h3>
          <Badge visual="primary">Custom</Badge>
        </div>
        <p className="text-sm text-gray-500">
          Can manage the content they have created
        </p>
      </div>

      <div className="inline-flex items-center gap-x-[25px]">
        <p className="text-sm text-gray-500">No assigned users</p>

        <DropdownMenu>
          <DropdownMenuTrigger className="rounded-[5px] px-1.5 py-1 text-gray-500 hover:bg-gray-100 focus-visible:outline-none">
            <MoreHorizontal size={15} />
          </DropdownMenuTrigger>

          <DropdownMenuContent className="min-w-[182px]">
            <DropdownMenuItem className="flex items-center gap-x-2">
              <Edit3 size={16} />
              Option 1
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <Copy size={16} />
              Option 2
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <Link size={16} />
              Option 3
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <UserPlus size={16} />
              Option 3
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <Zap size={16} />
              Option 4
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <Copy2 />
              Option 5
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <Star size={16} />
              Option 6
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <FolderClosed2 />
              Option 6
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <History2 />
              Option 7
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <ArrowDownToLine size={16} />
              Option 8
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem
              className="flex items-center gap-x-2"
              variant="destructive"
            >
              <Trash2 size={16} />
              Delete item
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Card>
  ),
};

export const AvatarDetailedDefaultVariant: Story = {
  render: (args) => (
    <Card className="px-6 py-[18px]" {...args}>
      <div className="inline-flex items-center gap-x-3">
        <Avatar size="md">
          <AvatarImage src="/man.jpg" alt="Man" />
          <AvatarFallback>M</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-gray-700">Test Name</span>
          <span className="text-sm text-gray-500">test@gmail.com</span>
        </div>
      </div>

      <h3 className="text-sm font-medium text-gray-900">Administrator</h3>

      <Badge>Default</Badge>

      <div className="space-y-1">
        <h3 className="text-sm font-medium text-gray-900">
          Accepted Team Invite
        </h3>
        <p className="text-sm text-gray-500">3 days ago</p>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger className="rounded-[5px] px-1.5 py-1 text-gray-500 hover:bg-gray-100 focus-visible:outline-none">
          <MoreHorizontal size={15} />
        </DropdownMenuTrigger>

        <DropdownMenuContent className="min-w-[182px]">
          <DropdownMenuItem className="flex items-center gap-x-2">
            <Edit3 size={16} />
            Option 1
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-x-2">
            <Copy size={16} />
            Option 2
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-x-2">
            <Link size={16} />
            Option 3
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-x-2">
            <UserPlus size={16} />
            Option 3
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-x-2">
            <Zap size={16} />
            Option 4
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-x-2">
            <Copy2 />
            Option 5
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-x-2">
            <Star size={16} />
            Option 6
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-x-2">
            <FolderClosed2 />
            Option 6
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-x-2">
            <History2 />
            Option 7
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-x-2">
            <ArrowDownToLine size={16} />
            Option 8
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem
            className="flex items-center gap-x-2"
            variant="destructive"
          >
            <Trash2 size={16} />
            Delete item
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Card>
  ),
};

export const AvatarFallbackDefaultVariant: Story = {
  render: () => (
    <Card className="px-6 py-[18px]">
      <div className="inline-flex gap-x-3">
        <Avatar size="md">
          <AvatarImage src="/boy.jpg" alt="Boy" />
          <AvatarFallback>
            <User size={20} />
          </AvatarFallback>
        </Avatar>

        <div className="space-y-1">
          <h3 className="text-sm font-medium text-gray-900">Test Name</h3>
          <p className="text-sm text-gray-500">test@gmail.com</p>
        </div>
      </div>

      <h3 className="text-sm font-medium text-gray-900">Administrator</h3>

      <Badge>Default</Badge>

      <span className="text-sm text-gray-500">Pending Invitation</span>

      <DropdownMenu>
        <DropdownMenuTrigger className="rounded-[5px] px-1.5 py-1 text-gray-500 hover:bg-gray-100 focus-visible:outline-none">
          <MoreHorizontal size={15} />
        </DropdownMenuTrigger>

        <DropdownMenuContent className="min-w-[182px]">
          <DropdownMenuItem className="flex items-center gap-x-2">
            <Edit3 size={16} />
            Option 1
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-x-2">
            <Copy size={16} />
            Option 2
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-x-2">
            <Link size={16} />
            Option 3
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-x-2">
            <UserPlus size={16} />
            Option 3
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-x-2">
            <Zap size={16} />
            Option 4
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-x-2">
            <Copy2 />
            Option 5
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-x-2">
            <Star size={16} />
            Option 6
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-x-2">
            <FolderClosed2 />
            Option 6
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-x-2">
            <History2 />
            Option 7
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-x-2">
            <ArrowDownToLine size={16} />
            Option 8
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem
            className="flex items-center gap-x-2"
            variant="destructive"
          >
            <Trash2 size={16} />
            Delete item
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Card>
  ),
};
