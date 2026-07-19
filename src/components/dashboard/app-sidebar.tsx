import { BookmarkIcon, Compass, Import } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from "../ui/sidebar";
import { UserNavToggle } from "./nav-user";
import { linkOptions } from "@tanstack/react-router";
import { NavDashboard } from "./nav-dashbaord";
import type { NavPrimalyProps } from "#/lib/types.ts";
import { NavDashboardToggle } from "./nav-dashboard";

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
      <NavDashboardToggle/>
      <SidebarContent>
        <NavDashboard item={navItems} />
      </SidebarContent>
      <SidebarFooter>
        <UserNavToggle />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
