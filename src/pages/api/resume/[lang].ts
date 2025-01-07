export const prerender = true;
import type { APIRoute } from "astro";
import { promises as fs } from "fs";

const pdfs = {
  es: "src/assets/Resume-es.pdf",
  en: "src/assets/Resume-en.pdf",
};

export const GET: APIRoute = async ({ params, request }) => {
  const lang = params.lang as "es" | "en";

  const filePath = pdfs[lang];

  const fileBuffer = await fs.readFile(filePath);

  return new Response(fileBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="your-pdf-file.pdf"',
    },
  });
};

export function getStaticPaths() {
  return [{ params: { lang: "es" } }, { params: { lang: "en" } }];
}
