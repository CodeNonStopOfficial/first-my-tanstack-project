import { Link } from "@tanstack/react-router";
import { buttonVariants } from "../ui/button";
import { ThemeToggle } from "./theme-toggle";
import { authClient } from "@/lib/auth-client";
import { UserMeneToggle } from "./user-togglemenu";
import { useEffect } from "react";

export function Navbar() {
  const { data: session, isPending, refetch } = authClient.useSession();

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 ">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <img
            src="https://cdn.brandfetch.io/idchmboHEZ/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1727706673120"
            alt="TanStack Start Logo"
            className="size-8"
          />
          <h1 className="text-lg font-semibold">CodeNonstop.Ai</h1>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          {isPending ? null : session ? (
            <>
              <UserMeneToggle user={session} />
            </>
          ) : (
            <>
              <Link
                to="/login"
                className={buttonVariants({
                  variant: "secondary",
                  className: "md:px-6 md:py-4.5",
                })}
              >
                Login
              </Link>
              <div className="hidden md:block">
                <Link
                  to="/signup"
                  className={buttonVariants({
                    className: "px-4 py-4.5",
                  })}
                >
                  Get Started
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
