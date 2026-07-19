import {
  BookmarkIcon,
  Compass,
  Heading2Icon,
  Import,
  ShowerHead,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "../ui/sidebar";
import { NavUser } from "./nav-user";
import { Link, linkOptions } from "@tanstack/react-router";
import { NavDashboard } from "./nav-dashbaord";
import type { NavPrimalyProps } from "#/lib/types.ts";

const navItems: NavPrimalyProps["item"] = linkOptions([
  {
    title: "Items",
    to: "/dashboard/items",
    icon: BookmarkIcon,
    activeOptions: { exact: false },
  },
  {
    title: "Import",
    to: "/dashboard/import",
    icon: Import,
    activeOptions: { exact: false },
  },
  {
    title: "Discover",
    to: "/dashboard/discover",
    icon: Compass,
    activeOptions: { exact: false },
  },
]);

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarHeader>
          <SidebarMenu >
            <SidebarMenuItem >
              <SidebarMenuButton size="lg">
                <Link to="/dashboard" className="flex items-center gap-3">
                  <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                    <BookmarkIcon className="size-4" />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="font-medium">CodeNonStop</span>
                    <span className="text-xs">Your AI Knowledge Base</span>
                  </div>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
      </SidebarHeader>
      <SidebarContent>
        <NavDashboard item={navItems} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
