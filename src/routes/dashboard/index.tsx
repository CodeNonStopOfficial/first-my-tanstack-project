import { ChartAreaInteractive } from "#/components/chart-area-interactive.tsx";
import { SectionCards } from "#/components/section-cards.tsx";
import { getSessionFn } from "#/data/session.ts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/")({
  component: RouteComponent,
   loader : ()=>getSessionFn()
});

function RouteComponent() {
  const {user} = Route.useLoaderData();

  return (
    <div>
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <h1>{user.name}</h1>
        <SectionCards />
        <ChartAreaInteractive />
      </div>
    </div>
  );
}
