import { cn } from "@/lib/utils";
import { GoogleSheet } from "./icons/google-sheet";
import { Switch } from "./ui/switch";

interface RoleRowProps {
  title: string;
  subtitle: string;
  checked?: boolean;
  variant?: "outlined" | "base";
  onCheckedChange?: () => void;
}

export const RoleRow = ({
  title,
  subtitle,
  checked,
  variant = "base",
  onCheckedChange,
}: RoleRowProps) => {
  return (
    <div
      className={cn(
        "py-3 pl-3 pr-[27px] flex drop-shadow-sm items-center justify-between border rounded-lg",
        {
          "border-gray-300": variant === "outlined",
          "border-gray-200": variant === "base",
        }
      )}
    >
      <div className="inline-flex gap-x-3 items-center">
        <div className="border rounded-lg px-[11px] py-[7.4px] shrink-0 border-gray-200">
          <GoogleSheet />
        </div>
        <div className="space-y-1">
          <div className="text-sm font-medium text-gray-800">{title}</div>
          <div className="text-gray-600 text-sm">{subtitle}</div>
        </div>
      </div>

      <Switch
        className="gap-x-3"
        checked={checked}
        onCheckedChange={onCheckedChange}
        label="Enable All Permissions"
      />
    </div>
  );
};
