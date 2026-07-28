import {
  LayoutDashboard,
  LogOutIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { authClient } from "#/lib/auth-client.ts";
import { toast } from "sonner";
import { Separator } from "../ui/separator";
import { Link, useNavigate } from "@tanstack/react-router";
import type { NavUserProps } from "#/lib/types.ts";


export function UserMeneToggle({ user }: NavUserProps) {
  const navigate = useNavigate();
  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          navigate({
             to :"/login"
          })
          toast.success("Signed out successfully");
        },
        onError: ({ error }) => {
          toast.error(error.message);
        },
      },
    });
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user?.image ?? "https://github.com/shadcn.png"} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-46 space-y-1">
        <DropdownMenuItem>
          <div className="flex flex-col overflow-hidden">
            <span>Name: {user?.name}</span>
            <span className="text-sm w-fit">
              {user?.email.charAt(0).toUpperCase() + user.email.slice(1).toLowerCase()}
            </span>
          </div>
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem>
          <UserIcon />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <SettingsIcon />
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem >
          <Link to="/dashboard" className="flex items-center gap-1">
            <LayoutDashboard />
             <span>Dashboard</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut} variant="destructive">
          <LogOutIcon />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
