import { Sidebar } from "lucide-react";
import { SidebarGroup, SidebarGroupContent, SidebarMenu } from "../ui/sidebar";

export function NavDashboardToggle() {
  return (
    <SidebarGroup className=" relative">
      <SidebarGroupContent className=" items-center justify-center align-middle">
        <SidebarMenu>
            <Sidebar/>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
