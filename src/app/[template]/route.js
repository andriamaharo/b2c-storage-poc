import { readTemplate, templateNames } from "@/lib/templates.mjs";

export const dynamic = "force-static";
export const dynamicParams = false;
export const runtime = "nodejs";

export function generateStaticParams() {
  return templateNames.map((template) => ({ template }));
}

export async function GET(_request, { params }) {
  const { template } = await params;
  const html = await readTemplate(template);

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
