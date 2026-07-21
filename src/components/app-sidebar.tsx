import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  LayoutDashboardIcon,
  ChartBarIcon,
  FolderIcon,
  UsersIcon,
  CommandIcon,
  ContainerIcon,
} from "lucide-react";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import { Link } from "@tanstack/react-router";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: <LayoutDashboardIcon />,
    },
    {
      title: "Content Item",
      url: "/dashboard/items",
      icon: <ContainerIcon />,
    },
    {
      title: "Discover",
      url: "/dashboard/discover",
      icon: <ChartBarIcon />,
    },
    {
      title: "Import",
      url: "/dashboard/import",
      icon: <FolderIcon />,
    },
    {
      title: "Team",
      url: "#",
      icon: <UsersIcon />,
    },
  ],
};
export function AppSidebar() {
  return (
    <Sidebar collapsible="offcanvas">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="data-[slot=sidebar-menu-button]:p-1.5!"
              render={
                <Link to="/" className="flex items-center gap-3">
                  <CommandIcon className="size-5!" />
                  <span className="text-base font-semibold">
                    CodeNonstop.Ai
                  </span>
                </Link>
              }
            ></SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
