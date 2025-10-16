import BlogCard from "@/components/Blogs/BlogCard";
import InnerPageBanner from "@/components/Common/InnerPageBanner";
import React from "react";

export default function page() {
  const bannerData = {
    pageName: "Blogs",
    pageTitle: "Latest News & Articles",
  };

  const blogdata = [
    {
      id: 1,
      category: "Software",
      date: "August 11, 2020",
      title:
        "20 Questions You Should Always Ask About Security You Should Always Ask About Security Software Before Buying It.",
      image: "/images/large-thumb-3.jpg",
      slug: "20-Questions-You-Should-Always-Ask-About-Security-You-Should-Always-Ask-About-Security-Software-Before-Buying-It",
    },
    {
      id: 2,
      category: "Technology",
      date: "September 2, 2020",
      title:
        "How Artificial Intelligence Is Revolutionizing Modern Business Operations.",
      image: "/images/large-thumb-2.jpg",
      slug: "How-Artificial-Intelligence-Is-Revolutionizing-Modern-Business-Operations",
    },
    {
      id: 3,
      category: "Development",
      date: "October 10, 2020",
      title: "10 Best Practices for Writing Clean and Scalable React Code.",
      image: "/images/large-thumb-1.jpg",
      slug: "10-Best-Practices-for-Writing-Clean-and-Scalable-React-Code",
    },
    {
      id: 4,
      category: "Software",
      date: "August 11, 2020",
      title:
        "20 Questions You Should Always Ask About Security Software Before Buying It.",
      image: "/images/large-thumb-3.jpg",
      slug: "20-Questions-You-Should-Always-Ask-About-Security-You-Should-Always-Ask-About-Security-Software-Before-Buying-It",
    },
    {
      id: 5,
      category: "Technology",
      date: "September 2, 2020",
      title:
        "How Artificial Intelligence Is Revolutionizing Intelligence Is Revolutionizing Modern Business Operations.",
      image: "/images/large-thumb-2.jpg",
      slug: "How-Artificial-Intelligence-Is-Revolutionizing-Modern-Business-Operations",
    },
    {
      id: 6,
      category: "Development",
      date: "October 10, 2020",
      title: "10 Best Practices for Writing Clean and Scalable React Code.",
      image: "/images/large-thumb-1.jpg",
      slug: "10-Best-Practices-for-Writing-Clean-and-Scalable-React-Code",
    },
  ];
  return (
    <>
      <InnerPageBanner data={bannerData} />

      <div className="blog_home section-padding ">
        <div className="container">
          <div className="row clearfix">
            <div className="news-grid column-3">
              {blogdata.map((item) => (
                <BlogCard data={item} key={item.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
