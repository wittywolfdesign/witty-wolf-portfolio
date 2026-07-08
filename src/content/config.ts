import { defineCollection, z } from "astro:content";

const work = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),          // short internal title / card heading
    client: z.string(),         // brand name
    tagline: z.string(),        // the punchy one-liner from the card
    summary: z.string(),        // supporting line
    year: z.string(),
    role: z.string(),
    discipline: z.array(z.string()),
    thumb: z.string(),          // /thumbs/xyz.svg
    accent: z.string(),         // card background colour
    ink: z.string().default("#ffffff"), // card text colour
    order: z.number(),
    featured: z.boolean().default(true),
    status: z.enum(["published", "draft"]).default("published"),
    liveUrl: z.string().url().optional(), // staging/production URL for the "See it live" CTA
    // optional structured case-study data
    context: z.string().optional(),
    problem: z.string().optional(),
    outcome: z.string().optional(),
    metrics: z
      .array(z.object({ value: z.string(), label: z.string() }))
      .optional(),
  }),
});

export const collections = { work };
