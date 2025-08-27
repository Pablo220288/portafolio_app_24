import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://pablohernandez.com.ar";

  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/sitemap-es</loc>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap-en</loc>
  </sitemap>
</sitemapindex>`;

  return new NextResponse(sitemapIndex, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
