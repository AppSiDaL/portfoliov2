import { defineCollection, z } from "astro:content";

const projects = z.object({
  title: z.string(),
  where: z.string(),
  stack: z.array(z.string()),
  url: z.string(),
});

export const collections = { projects };
