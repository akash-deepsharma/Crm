import { MetadataRoute } from "next";

export default function robots() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const isProd = process.env.NODE_ENV === "production";






  return {
    rules: [
      {
        userAgent: "*",
        allow: isProd ? "/" : "",
        disallow: !isProd
          ? ["/admin", "/search", "/rss", "/comments", "/comments/feed"]
          : ["/"],
      },
    ],
    sitemap: isProd ? `${baseUrl}/sitemap.xml` : undefined,
    host: isProd ? baseUrl : undefined,
  };
}
