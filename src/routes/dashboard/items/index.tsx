import { Badge } from "#/components/ui/badge.tsx";
import { Button } from "#/components/ui/button.tsx";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "#/components/ui/card.tsx";
import { Input } from "#/components/ui/input.tsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "#/components/ui/select.tsx";
import { getItemFu } from "#/data/items.ts";
import { ItemStatus } from "#/generated/prisma/enums.ts";
import { clipBoardFn } from "#/lib/clipboard.ts";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Copy } from "lucide-react";

export const Route = createFileRoute("/dashboard/items/")({
  component: RouteComponent,
  loader: () => getItemFu(),
});

function RouteComponent() {
  const data = Route.useLoaderData();
  return (
    <div className="flex flex-1 flex-col gap-6">
      <div>
          <h1 className="text-2xl font-bold">Save Items</h1>
          <p className="text-muted-foreground">Your Saved Articles and Content</p>
      </div>
      <div className="flex gap-4">
         <Input placeholder="Search by Title or tags" className="w-full"/>
         <Select>
          <SelectTrigger className="w-40">
             <SelectValue placeholder="Filter by Status"/>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="status">Select Status</SelectItem>
            {Object.values(ItemStatus).map((status)=>(
               <SelectItem key={status} value={status}>
                {status.charAt(0) + status.slice(1).toLowerCase()}
               </SelectItem>
            ))}
          </SelectContent>
         </Select>
      </div>
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
                  <Badge
                    variant={
                      item.status === "COMPLETED" ? "default" : "secondary"
                    }
                  >
                    {item.status.toUpperCase()}
                  </Badge>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      clipBoardFn(item?.url);
                    }}
                    variant="outline"
                    size="icon"
                  >
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
                  {item?.publishedAt && (
                    <>
                      <span>{item.publishedAt.toLocaleDateString("in")}</span>
                    </>
                  )}
                </div>
              </CardHeader>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
