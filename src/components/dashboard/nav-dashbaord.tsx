import { Link } from "@tanstack/react-router";
import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import type { NavPrimalyProps } from "#/lib/types.ts";



export function NavDashboard({item} : NavPrimalyProps){
  // const { isMobile } = useSidebar()

  return (
    <SidebarGroup >
       <SidebarGroupContent>
          <SidebarMenu>
             {item?.map((item, index)=>{
                return (
                    <SidebarMenuItem key={index}>
                      <SidebarMenuButton className="text-md font-normal">
                        <Link activeProps={{
                          'data-active' : true
                        }} to={item.to} activeOptions={item.activeOptions} className="flex gap-2 items-center justify-center">
                          <item.icon/>
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                )
             })}
          </SidebarMenu>
       </SidebarGroupContent>
    </SidebarGroup>
  )
}
