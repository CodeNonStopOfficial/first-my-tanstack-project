import { prisma } from "#/lib/db.ts";
import { firecrawl } from "#/lib/firecrawl.ts";
import { blunkSchema, extractSchema, importSchema } from "#/schema/import.ts";
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { authFnMiddleware } from "#/middleware/auth.ts";

export const scrapeUrlFn = createServerFn({ method: "POST" })
  .validator(importSchema)
  .middleware([authFnMiddleware])
  .handler(async ({ data, context }) => {
    const item = await prisma.saveItem.create({
      data: {
        url: data.url,
        userId: context.session?.user.id,
        status: "PROCCESSING",
      },
    });
    try {
      const result = await firecrawl.scrape(data.url, {
        formats: [
          "markdown",
          {
            type: "json",
            schema: z.toJSONSchema(extractSchema),
          },
        ],
        onlyMainContent: true,
      });
      const jsonData = result.json as z.infer<typeof extractSchema>;

      let publishedAtDate: Date | null = null;

      if (jsonData.publishedAt) {
        const parsed = new Date(jsonData.publishedAt);
        if (!Number.isNaN(parsed.getTime())) {
          publishedAtDate = parsed;
        }
      }

      const updatedItem = await prisma.saveItem.update({
        where: {
          id: item.id,
        },
        data: {
          title: result.metadata?.title || null,
          ogImage: result.metadata?.ogImage || null,
          content: result.markdown || null,
          author: jsonData.author || null,
          publishedAt: publishedAtDate || null,
          status: "COMPLETED",
        },
      });
      return updatedItem;
    } catch (error) {
      const failedItem = await prisma.saveItem.update({
        where: {
          id: item.id,
        },
        data: {
          status: "FAILED",
        },
      });
      console.log(error);
      return failedItem;
    }
  });

export const bluklUrlFu = createServerFn({ method: "POST" })
  .validator(blunkSchema)
  .middleware([authFnMiddleware])
  .handler(async ({ data }) => {
    const result = await firecrawl.map(data.url, {
      limit: 25,
      search: data.search,
      location: { country: "IN", languages: ["en"] },
    });
    return result.links;
  });

export const bulkScrapeUrlsFn = createServerFn({ method: "POST" })
  .validator(
    z.object({
      url: z.array(z.url()),
    }),
  )
  .middleware([authFnMiddleware])
  .handler(async ({ data, context }) => {
    for (let i = 0; i < data.url.length; i++) {
      const url = data.url[i];
      const item = await prisma.saveItem.create({
        data: {
          url: url,
          userId: context.session.user.id,
          status: "PENDING",
        },
      });

      try {
        const result = await firecrawl.scrape(url, {
          formats: [
            "markdown",
            {
              type: "json",
              schema: z.toJSONSchema(extractSchema),
            },
          ],
          location: { country: "IN", languages: ["en"] },
          onlyMainContent: true,
          proxy: "auto",
        });
        const jsonData = result.json as z.infer<typeof extractSchema>;

        let publishedAtDate: Date | null = null;

        if (jsonData.publishedAt) {
          const parsed = new Date(jsonData.publishedAt);
          if (!Number.isNaN(parsed.getTime())) {
            publishedAtDate = parsed;
          }
        }

        await prisma.saveItem.update({
          where: {
            id: item.id,
          },
          data: {
            title: result.metadata?.title,
            ogImage: result.metadata?.ogImage,
            content: result.markdown,
            author: jsonData.author,
            publishedAt: publishedAtDate,
            status: "COMPLETED",
          },
        });
      } catch (error) {
        await prisma.saveItem.update({
          where: {
            id: item.id,
          },
          data: {
            status: "FAILED",
          },
        });
        console.log(error);
      }
    }
  });


export const getItemFu = createServerFn({method:"GET"})
.middleware([authFnMiddleware])
.handler(async({context})=>{
  const data = await prisma.saveItem.findMany({
     where :{
       userId : context.session.user.id,
     },
     orderBy : {
       createdAt : "desc"
     }
  })
  return data
})