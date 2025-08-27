import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://pablohernandez.com.ar";

  const urls = [
    { path: "", changefreq: "weekly", priority: 1.0 },
    { path: "/projects", changefreq: "monthly", priority: 0.8 },
    { path: "/about", changefreq: "monthly", priority: 0.7 },
    { path: "/games", changefreq: "monthly", priority: 0.5 },
    { path: "/contact", changefreq: "yearly", priority: 0.5 },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (item) => `
  <url>
    <loc>${baseUrl}${item.path}</loc>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
  )
  .join("")}
</urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
