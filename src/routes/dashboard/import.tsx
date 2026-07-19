import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/import')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
     <div>
         <h1>Import Page</h1>
     </div>
  )
}
