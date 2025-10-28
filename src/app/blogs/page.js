import BlogCard from "@/components/Blogs/BlogCard";
import InnerPageBanner from "@/components/Common/InnerPageBanner";
import { getBlogs } from "@/ApiCall/blogApi";
import React from "react";

export const metadata = {
  title: "Blogs | Latest News & Articles",
  description: "Stay updated with our latest blogs, articles, and news.",
  keywords: "blogs, articles, travel, updates, enlivetrips",
};

export default async function Page({ searchParams }) {
  const page = searchParams?.page || 1;
  const blogPosts = await getBlogs(page, 10);

  const bannerData = {
    pageName: "Blogs",
    pageTitle: "Latest News & Articles",
  };

  return (
    <>
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
