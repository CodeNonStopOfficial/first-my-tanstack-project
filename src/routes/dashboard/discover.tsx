import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/discover')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
     <div>
         <h1>Discove Page</h1>
     </div>
  )
}
