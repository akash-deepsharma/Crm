import BlogCard from "@/components/Blogs/BlogCard";
import InnerPageBanner from "@/components/Common/InnerPageBanner";
import { getBlogs } from "@/ApiCall/blogApi";
import { getMetas } from "@/ApiCall/getMetasApi";
import Link from "next/link";
import React from "react";






export async function generateMetadata() {
  // Static slug for Become a seller page
  const slug = "blogs";
  const meta = await getMetas(slug);
  const baseUrl = process.env.NEXT_PUBLIC_baseUrl || "https://yourdomain.com";
  const canonicalUrl = `${baseUrl}/${slug}`;

  const page = await meta?.data?.[0];

  if (!page) {
    return {
      title: "Become a seller | My Website",
      description:
        "Explore insightful blogs and articles on the latest trends, tips, and updates. Stay informed and inspired with My Website.",
    };
  }

  return {
    title: page.meta_title || "Blogs | My Website",
    description:
      page.meta_description ||
      "Explore insightful blogs and articles on the latest trends, tips, and updates. Stay informed and inspired with My Website.",
    keywords:
      page.meta_keywords ||
      "blogs, articles, insights, news, updates, tips, guides, trends, My Website blogs",
    alternates: {
      canonical: canonicalUrl,
    },
    robots: page.robotstatus === "true" ? "index, follow" : "noindex, nofollow",
    openGraph: {
      title: page.meta_title || "Blogs | My Website",
      description:
        page.meta_description ||
        "Discover articles and stories covering industry insights, guides, and trends — curated by experts at My Website.",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${slug}`,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_MEDIA_PATH}/${page.page_image}`,
          width: 1200,
          height: 630,
          alt: page.title || "Blogs | My Website",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.meta_title || "Blogs | My Website",
      description:
        page.meta_description ||
        "Read the latest blogs and industry insights on My Website. Stay up to date with expert articles and updates.",
      images: [`${process.env.NEXT_PUBLIC_MEDIA_PATH}/${page.page_image}`],
    },
  };
}

export default async function Page({ searchParams }) {
  const slug = "blogs";
  let page = parseInt(searchParams?.page || 1, 10); // current page

  const [blogPosts, metaData] = await Promise.all([
    getBlogs(page, 10),
    getMetas(slug),
  ]);

  const meta = metaData?.data?.[0];
  const totalPages = blogPosts?.data?.last_page || 1;

  // Clamp page between 1 and totalPages
  page = Math.max(1, Math.min(page, totalPages));
  console.log("totle pages", page);

  const bannerData = {
    pageName: "Blogs",
    pageTitle: "Latest News & Articles",
  };

  // Sliding pagination: show current ±2 pages, clamped
  const startPage = Math.max(page - 2, 1);
  const endPage = Math.min(page + 2, totalPages);

  const paginationNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    paginationNumbers.push(i);
  }

  return (
    <>
      {meta?.schema_page && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: meta.schema_page }}
        />
      )}

      <InnerPageBanner data={bannerData} />

      <div className="blog_home section-padding">
        <div className="container">
          <div className="row clearfix">
            <div className="news-grid column-3">
              {blogPosts?.data?.data?.length > 0 ? (
                blogPosts.data.data.map((item) => (
                  <BlogCard key={item.id} data={item} />
                ))
              ) : (
                <p className="text-center w-full">No blogs found.</p>
              )}
            </div>

            <div className="pagination-wrapper text-center">
              <ul className="pagination">
                {/* Previous Page */}
                <li className={`page-prev ${page <= 1 ? "d-none" : ""}`}>
                  <Link
                    href={`?page=${Math.max(page - 1, 1)}`}
                    aria-disabled={page <= 1}
                  >
                    <i className="fa fa-chevron-left"></i>
                  </Link>
                </li>

                {/* First page & leading dots */}
                {startPage > 1 && (
                  <>
                    <li>
                      <Link className="page-numbers" href={`?page=1`}>
                        1
                      </Link>
                    </li>
                    {startPage > 2 && (
                      <li>
                        <span className="dots">...</span>
                      </li>
                    )}
                  </>
                )}

                {/* Sliding page numbers */}
                {paginationNumbers.map((num) => (
                  <li key={num}>
                    {num === page ? (
                      <span
                        aria-current="page"
                        className="page-numbers current"
                      >
                        {num}
                      </span>
                    ) : (
                      <Link className="page-numbers" href={`?page=${num}`}>
                        {num}
                      </Link>
                    )}
                  </li>
                ))}

                {/* Trailing dots & last page */}
                {endPage < totalPages && (
                  <>
                    {endPage < totalPages - 1 && (
                      <li>
                        <span className="dots">...</span>
                      </li>
                    )}
                    <li>
                      <Link
                        className="page-numbers"
                        href={`?page=${totalPages}`}
                      >
                        {totalPages}
                      </Link>
                    </li>
                  </>
                )}

                {/* Next Page */}
                <li
                  className={`page-next ${
                    page >= totalPages ? "d-none" : ""
                  }`}
                >
                  <Link
                    href={`?page=${Math.min(page + 1, totalPages)}`}
                    aria-disabled={page >= totalPages}
                  >
                    <i className="fa fa-chevron-right"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
