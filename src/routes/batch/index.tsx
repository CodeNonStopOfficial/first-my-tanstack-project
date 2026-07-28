import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/batch/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/batch/"!</div>
}
