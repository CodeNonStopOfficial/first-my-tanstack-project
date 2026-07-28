import { Button } from "#/components/ui/button.tsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "#/components/ui/card.tsx";
import { Checkbox } from "#/components/ui/checkbox.tsx";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "#/components/ui/field.tsx";
import { Input } from "#/components/ui/input.tsx";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "#/components/ui/tabs.tsx";
import { bluklUrlFu, bulkScrapeUrlsFn, scrapeUrlFn } from "#/data/items.ts";
import { blunkSchema, importSchema } from "#/schema/import.ts";
import { useForm } from "@tanstack/react-form";
import { createFileRoute } from "@tanstack/react-router";
import type { SearchResultWeb } from "firecrawl";
import { Globe, LinkIcon, Loader2 } from "lucide-react";
import { useState, useTransition } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/dashboard/import")({
  component: RouteComponent,
});

function RouteComponent() {
  const [isPending, startTransition] = useTransition();
  const [isImportPending, startBlukImportTransition] = useTransition();
  const [isBlukPending, startBlukTransition] = useTransition();
  const [discoveredLinks, setDiscoveredLinks] = useState<
    Array<SearchResultWeb>
  >([]);
  const [selectedUrls, setSelectedUrls] = useState<Set<string>>(new Set());

  function handleSelectAll() {
    if (selectedUrls.size === discoveredLinks.length) {
      setSelectedUrls(new Set());
    } else {
      setSelectedUrls(new Set(discoveredLinks.map((link) => link.url)));
    }
  }

  function handleToggleUrl(url: string) {
    const newSelected = new Set(selectedUrls);

    if (newSelected.has(url)) {
      newSelected.delete(url);
    } else {
      newSelected.add(url);
    }

    setSelectedUrls(newSelected);
  }

 function handleBulkImport() {
    startBlukImportTransition(async () => {
      if (selectedUrls.size === 0) {
        toast.error("Please Select Only One URL...");
        return;
      }
      await bulkScrapeUrlsFn({
        data: { url: Array.from(selectedUrls) },
      });

      toast.success(`Successfully Imported ${selectedUrls.size} URLs`);
    });
  }

  const form = useForm({
    defaultValues: {
      url: "",
    },
    validators: {
      onSubmit: importSchema,
    },
    onSubmit: ({ value }) => {
      startTransition(async () => {
        console.log(value);
        await scrapeUrlFn({ data: value });
      });
      toast.success("SuccessFully Generated");
    },
  });

  const bulkForm = useForm({
    defaultValues: {
      url: "",
      search: "",
    },
    validators: {
      onSubmit: blunkSchema,
    },
    onSubmit: ({ value }) => {
      startBlukTransition(async () => {
        const data = await bluklUrlFu({ data: value });
        setDiscoveredLinks(data);
      });
    },
  });

  return (
    <div className="flex flex-1 items-center justify-center py-6">
      <div className="w-full max-w-2xl space-y-6 px-4">
        <div className="items-center">
          <h1 className="text-3xl font-bold">Import Content</h1>
          <p className="text-muted-foreground pt-1">
            Save web pages to your libary for later reading
          </p>
        </div>

        <Tabs>
          <TabsList className="grid grid-cols-2 w-full">
            <TabsTrigger value="single" className="gap-2">
              <LinkIcon className="size-4" />
              Single URL
            </TabsTrigger>
            <TabsTrigger value="bulk" className="gap-2">
              <Globe className="size-4" />
              Bulk Import
            </TabsTrigger>
          </TabsList>
          <TabsContent value="single">
            <Card>
              <CardHeader>
                <CardTitle>Import Single URL</CardTitle>
                <CardDescription>
                  Scrape and save content from any web app! 👀
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    form.handleSubmit();
                  }}
                >
                  <FieldGroup>
                    <form.Field
                      name="url"
                      children={(field) => {
                        const isInvalid =
                          field.state.meta.isTouched &&
                          !field.state.meta.isValid;
                        return (
                          <Field data-invalid={isInvalid}>
                            <FieldLabel htmlFor={field.name}>URL</FieldLabel>
                            <Input
                              id={field.name}
                              name={field.name}
                              value={field.state.value}
                              onBlur={field.handleBlur}
                              onChange={(e) =>
                                field.handleChange(e.target.value)
                              }
                              aria-invalid={isInvalid}
                              placeholder="https://tanstack.com/start/latest"
                              autoComplete="off"
                            />
                            {isInvalid && (
                              <FieldError errors={field.state.meta.errors} />
                            )}
                          </Field>
                        );
                      }}
                    />

                    <Button type="submit" disabled={isPending}>
                      {isPending ? (
                        <>
                          <Loader2 className="size-4 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        "Import Url"
                      )}
                    </Button>
                  </FieldGroup>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="bulk">
            <Card>
              <CardHeader>
                <CardTitle>Bulk Import</CardTitle>
                <CardDescription>
                  Discover and import multiple URLs from a website at once 🚀
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    bulkForm.handleSubmit();
                  }}
                >
                  <FieldGroup>
                    <bulkForm.Field
                      name="url"
                      children={(field) => {
                        const isInvalid =
                          field.state.meta.isTouched &&
                          !field.state.meta.isValid;
                        return (
                          <Field data-invalid={isInvalid}>
                            <FieldLabel htmlFor={field.name}>URL</FieldLabel>
                            <Input
                              id={field.name}
                              name={field.name}
                              value={field.state.value}
                              onBlur={field.handleBlur}
                              onChange={(e) =>
                                field.handleChange(e.target.value)
                              }
                              aria-invalid={isInvalid}
                              placeholder="https://tanstack.com/start/latest"
                              autoComplete="off"
                            />
                            {isInvalid && (
                              <FieldError errors={field.state.meta.errors} />
                            )}
                          </Field>
                        );
                      }}
                    />
                    <bulkForm.Field
                      name="search"
                      children={(field) => {
                        const isInvalid =
                          field.state.meta.isTouched &&
                          !field.state.meta.isValid;
                        return (
                          <Field data-invalid={isInvalid}>
                            <FieldLabel htmlFor={field.name}>
                              Filter (optional)
                            </FieldLabel>
                            <Input
                              id={field.name}
                              name={field.name}
                              value={field.state.value}
                              onBlur={field.handleBlur}
                              onChange={(e) =>
                                field.handleChange(e.target.value)
                              }
                              aria-invalid={isInvalid}
                              placeholder="e.g. Blog, docs, tutorial"
                              autoComplete="off"
                            />
                            {isInvalid && (
                              <FieldError errors={field.state.meta.errors} />
                            )}
                          </Field>
                        );
                      }}
                    />

                    <Button type="submit" disabled={isBlukPending}>
                      {isBlukPending ? (
                        <>
                          <Loader2 className="size-4 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        "Import Urls"
                      )}
                    </Button>
                  </FieldGroup>
                </form>
                <div>
                  {discoveredLinks.length > 0 && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">
                          Found : {discoveredLinks.length} URLs
                        </p>
                        <Button
                          onClick={handleSelectAll}
                          variant="outline"
                          size="sm"
                        >
                          {selectedUrls.size === discoveredLinks.length
                            ? "Deselect All"
                            : "Select All"}
                        </Button>
                      </div>
                      <div className="max-h-80 space-y-2 overflow-y-auto rounded-md border p-4">
                        {discoveredLinks?.map((link) => (
                          <label
                            key={link?.url}
                            className="hover:bg-muted/50 cursor-pointer items-start gap-3 rounded-md p-2 flex justify-center"
                          >
                            <Checkbox
                              checked={selectedUrls.has(link.url)}
                              onCheckedChange={() => handleToggleUrl(link.url)}
                              className="mt-0.5"
                            />
                            <div className="min-w-0 flex-1">
                              <p className=" truncate text-sm font-medium">
                                {link?.title ?? "Titile Not Found"}
                              </p>
                              <p className="text-muted-foreground truncate text-sm">
                                {link?.description ?? "Discription Not Fond"}
                              </p>
                              <p className="text-muted-foreground truncate text-xs">
                                {link?.url}
                              </p>
                            </div>
                          </label>
                        ))}
                      </div>
                      <Button disabled={isImportPending} onClick={handleBulkImport} className="w-full" type="button">
                        {
                          isImportPending ? (
                              <>
                                <div className="flex gap-1">
                                  <Loader2 size={22} className="text-sm animate-spin"/>
                                   Loding...
                                </div>
                              </>   
                          ) : (
                            `Import ${selectedUrls.size} Urls`
                          )
                        }
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
