import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    where: z.string(),
    stack: z.array(z.string()),
    start: z.string(),
    end: z.string(),
    img: z.string(),
    video: z.string(),
    abstract: z.string(),
    url: z.string(),
  }),
});

const experiences = defineCollection({
  schema: z.object({
    title: z.string(),
    where: z.string(),
    stack: z.array(z.string()),
    start: z.string(),
    end: z.string(),
    abstract: z.string(),
  }),
});

export const collections = { experiences, projects };
