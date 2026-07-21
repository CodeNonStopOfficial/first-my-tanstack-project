import { ChartAreaInteractive } from "#/components/chart-area-interactive.tsx";
import { SectionCards } from "#/components/section-cards.tsx";
import { createFileRoute} from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <SectionCards />
        <ChartAreaInteractive />
      </div>
    </div>
  );
}
