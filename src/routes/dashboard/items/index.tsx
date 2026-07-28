import { Badge } from "#/components/ui/badge.tsx";
import { Button } from "#/components/ui/button.tsx";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "#/components/ui/card.tsx";
import { getItemFu } from "#/data/items.ts";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Copy } from "lucide-react";

export const Route = createFileRoute("/dashboard/items/")({
  component: RouteComponent,
  loader: () => getItemFu(),
});

function RouteComponent() {
  const data = Route.useLoaderData();
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {data.map((item) => (
        <Card
          key={item.id}
          className="group overflow-hidden transition-all hover:shadow-lg pt-0"
        >
          <Link to="/dashboard" className="block">
            {item?.ogImage && (
              <div className=" aspect-video w-full overflow-hidden bg-muted">
                <img
                  src={item.ogImage}
                  alt={item?.title ?? "Article Thumbnail"}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
            )}
            <CardHeader className="space-y-2 pt-4">
              <div className="flex items-center justify-between gap-2">
                <Badge variant={item.status === "COMPLETED" ? 'default' : 'secondary'}>{item.status.toUpperCase()}</Badge>
                <Button variant="outline" size="icon">
                  <Copy size={4} />
                </Button>
              </div>
              <CardTitle className="line-clamp-2 leading-snug group-hover:text-primary transition-colors">
                {item?.title}
              </CardTitle>
              <CardDescription className=" line-clamp-3">
                {item?.content}
              </CardDescription>
              <div className="flex items-center justify-between">
                {item?.author && (
                  <>
                    <p className="text-[14px] font-medium text-muted-foreground">
                      Author : {item.author}
                    </p>
                  </>
                )}
                {
                  item?.publishedAt && (
                     <>
                       <span>{item.publishedAt.toLocaleDateString("in")}</span>
                     </>
                  )
                }
              </div>
            </CardHeader>
          </Link>
        </Card>
      ))}
    </div>
  );
}
