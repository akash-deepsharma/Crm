import { getAllBlogs, getAllServices } from "@/lib/api";

export async function GET() {
  const baseUrl = "http://localhost:3000";
  const blogs = await getAllBlogs();
  const services = await getAllServices();  

  // Static routes based on actual app directory
  const staticPages = [
    "", // Home
    "about",
    "agent",
    "blogs",
    "contact",
    "demo-crm",
    "how-crm-works",
    "login",
    "pricing",
    "privacy-policy",
    "return-cancellation",
    "features",
    "subscription",
    "support",
    "terms-and-conditions"
  ].map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: page === "" ? 1.0 : 0.8,
  }));

  // Dynamic blog URLs
  const blogPages = blogs.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug || post.id}`,
    lastModified: post.updatedAt ? new Date(post.updatedAt).toISOString() : new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // Dynamic service URLs
  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug || service.id}`,
    lastModified: service.updatedAt ? new Date(service.updatedAt).toISOString() : new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Combine all pages
  const allPages = [...staticPages, ...blogPages, ...servicePages];

  // Generate XML
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
    .map(
      (page) => `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastModified}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join("")}
</urlset>`;

  return new Response(sitemapXml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
