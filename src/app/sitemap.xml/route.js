import { getAllBlogs } from "@/ApiCall/blogApi";
import { getFeature } from "@/ApiCall/featuresApi";
import { getSupport } from "@/ApiCall/supportApi";
import { headers } from "next/headers";

export async function GET() {
  // const baseUrl = "http://localhost:3000";

  const host = headers().get("host");
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
  const baseUrl = `${protocol}://${host}`;


  const features = await getFeature();  
  const blogsdata = await getAllBlogs();
   const Supportdata = await getSupport();


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

  const blogPages = blogsdata?.data?.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: post.created_at ? new Date(post.created_at).toISOString() : new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // Dynamic service URLs

  const servicePages = features?.section1?.extra_data?.steps.map((features) => ({
    url: `${baseUrl}/features/${features.slug}`,
    lastModified: features.updated_at ? new Date(features.updated_at).toISOString() : new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));


  const SupportPages = Supportdata?.section1?.extra_data?.steps.map((support) => ({
    url: `${baseUrl}/support/${support.slug}`,
    lastModified: support.updated_at ? new Date(support.updated_at).toISOString() : new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Combine all pages
  const allPages = [...staticPages, ...servicePages, ...blogPages,...SupportPages];

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
