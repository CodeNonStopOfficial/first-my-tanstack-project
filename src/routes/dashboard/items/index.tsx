import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/items/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
       <div>
         <h1>Content Item</h1>
       </div>
    </div>
  )
}
