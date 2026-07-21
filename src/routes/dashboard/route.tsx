
import { AppSidebar } from "#/components/app-sidebar.tsx";
import { SiteHeader } from "#/components/site-header.tsx";
import { SidebarInset, SidebarProvider } from "#/components/ui/sidebar.tsx";
import { getSessionFn } from "#/data/session.ts";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard")({
  component: RouteComponent,
  loader : async()=>{
     const session = await getSessionFn();
     return {
       user : session.user
     }
  }
});

function RouteComponent() {
  const {user} = Route.useLoaderData();
  return (
    <div>
      <SidebarProvider
        style={
          {
            "--sidebar-width": "calc(var(--spacing) * 72)",
            "--header-height": "calc(var(--spacing) * 12)",
          } as React.CSSProperties
        }
      >
        <AppSidebar user={user} />
        <SidebarInset>
          <SiteHeader />
          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">
              <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-2 lg:px-6">
                <Outlet />
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
