import { firecrawl } from "#/lib/firecrawl.ts";
import { importSchema } from "#/schema/import.ts";
import { createServerFn } from "@tanstack/react-start";

export const scrapeUrlFn = createServerFn({ method: "POST" })
.validator(importSchema)
.handler(async({data}) => {
  const scrapeResult = await firecrawl.scrape(data.url, {
    formats: ["markdown", "html"],
    onlyMainContent : true
  });
  console.log(scrapeResult);
});
