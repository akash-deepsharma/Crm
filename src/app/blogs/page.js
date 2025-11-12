import BlogCard from "@/components/Blogs/BlogCard";
import InnerPageBanner from "@/components/Common/InnerPageBanner";
import { getBlogs } from "@/ApiCall/blogApi";
import React from "react";
import { getMetas } from "@/ApiCall/getMetasApi";

export async function generateMetadata() {
  // Static slug for Become a seller page
  const slug = "blogs";
  const meta = await getMetas(slug);

  const page = await meta?.data?.[0];
  console.log( `${slug} page meta found then show`, page)

  if (!page) {
    return {
      title: "Become a seller | My Website",
      description: "Explore insightful blogs and articles on the latest trends, tips, and updates. Stay informed and inspired with My Website.",
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
      robots:
      page.robotstatus === "true"
        ? "index, follow"
        : "noindex, nofollow",
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
  const page = searchParams?.page || 1;
  // const blogPosts = await getBlogs(page, 10);
     
     const [blogPosts, metaData] = await Promise.all([getBlogs(page, 10), getMetas(slug)]);

     const meta = metaData?.data?.[0];

  console.log( "data how blogs" , meta)
   // console.log("cgent get data ", step_viewData)

  const bannerData = {
    pageName: "Blogs",
    pageTitle: "Latest News & Articles",
  };

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
          </div>
          
        </div>
      </div>
    </>
  );
}
