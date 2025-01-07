export const prerender = false;
import type { APIRoute } from "astro";
import { promises as fs } from "fs";
import path from "path";

const pdfs = {
  es: path.resolve("src/assets/Resume-es.pdf"),
  en: path.resolve("src/assets/Resume-en.pdf"),
};

export const GET: APIRoute = async ({ params, request }) => {
  const lang = params.lang as "es" | "en";

  const filePath = pdfs[lang];

  try {
    const fileBuffer = await fs.readFile(filePath);

    return new Response(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="Resume-${lang}.pdf"`,
      },
    });
  } catch (error) {
    return new Response("File not found", { status: 404 });
  }
};
