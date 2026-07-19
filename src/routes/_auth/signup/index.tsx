import { SignupForm } from '#/components/web/signup-form.tsx';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute("/_auth/signup/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
     <SignupForm/>
  )
}
