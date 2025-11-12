import { MetadataRoute } from "next";

export default function robots() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const isProd = process.env.NODE_ENV === "production";






  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/uploads/",
        ],
        disallow: [
          "/_private/",
          "/admin/",
          "/search/",
          "/rss/",
          "/comments/",
          "/comments/feed",
          "/*/comments/",
          "/archives/",
          "/tag/",
          "/tag/*",
          "/login/",
          "/shopdetail/",
        ],
      },
      { userAgent: "GPTBot", allow: ["/"] },
      { userAgent: "ClaudeBot", allow: ["/"] },
      { userAgent: "Google-Extended", allow: ["/"] },
      { userAgent: "PerplexityBot", allow: ["/"] },
      { userAgent: "CCBot", allow: ["/"] },
      { userAgent: "Amazonbot", allow: ["/"] },
      { userAgent: "FacebookBot", allow: ["/"] },
      { userAgent: "YouBot", allow: ["/"] },
      { userAgent: "DuckAssistBot", allow: ["/"] },
    ],
    sitemap: `${baseUrl}/sitemap_index.xml`,
    host: baseUrl,
  };
}
