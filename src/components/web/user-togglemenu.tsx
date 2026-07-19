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
import { Link } from "@tanstack/react-router";

type UserMenuToggleProps = {
  user: {
    user: {
      id: string;
      name: string;
      email: string;
    };
    session: {
      id: string;
    };
  };
};

export function UserMeneToggle({ user }: UserMenuToggleProps) {
  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
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
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-46 space-y-1">
        <DropdownMenuItem>
          <div className="flex flex-col">
            <span>Name: {user?.user.name}</span>
            <span className="text-muted-foreground">
              Email: {user?.user.email?.toUpperCase().split("@")[0]}
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
