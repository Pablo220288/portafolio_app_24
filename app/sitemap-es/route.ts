import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://pablohernandez.com.ar";

  // Páginas estáticas
  const staticUrls = [
    { path: "/es", changefreq: "weekly", priority: 1.0 },
    { path: "/es/projects", changefreq: "monthly", priority: 0.8 },
    { path: "/es/about", changefreq: "monthly", priority: 0.7 },
    { path: "/es/games", changefreq: "monthly", priority: 0.5 },
    { path: "/es/pricing", changefreq: "monthly", priority: 0.6 },
    { path: "/es/contact", changefreq: "yearly", priority: 0.5 },
  ];

  // Páginas dinámicas de proyectos
  const projectIds = [
    "lamberti",
    "vlack",
    "eeva",
    "eeva_abm",
    "garantear",
    "starbene",
    "mahalo",
    "nike",
    "bouquet",
  ];

  const projectUrls = projectIds.map((id) => ({
    path: `/es/projects/${id}`,
    changefreq: "monthly",
    priority: 0.7,
  }));

  const allUrls = [...staticUrls, ...projectUrls];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
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
