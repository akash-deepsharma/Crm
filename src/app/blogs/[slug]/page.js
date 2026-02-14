import InnerPageBanner from "@/components/Common/InnerPageBanner";
import BlogSidebar from "@/components/Blogs/BlogSidebar";
import Image from "next/image";
import { getSingleBlog, getBlogs } from "@/ApiCall/blogApi";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;

const baseUrl = process.env.NEXT_PUBLIC_baseUrl || "https://yourdomain.com";
   const canonicalUrl = `${baseUrl}/blogs/${slug}`;

  const blog = await getSingleBlog(slug);

  if (!blog || !blog.data) {
    return {
      title: "Blog Not Found | My Website",
      description: "The requested blog post could not be found.",
    };
  }

  const blogItem = blog.data;

  return {
    title: blogItem.meta_title || blogItem.title,
    description: blogItem.meta_description || blogItem.excerpt || blogItem.title,
    keywords: blogItem.meta_keywords || "blog, articles, news",
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: blogItem.meta_title || blogItem.title,
      description: blogItem.meta_description || blogItem.excerpt || "",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/blogs/${slug}`,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_MEDIA_PATH}/${blogItem.featured_image}`,
          width: 1200,
          height: 630,
          alt: blogItem.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blogItem.meta_title || blogItem.title,
      description: blogItem.meta_description || blogItem.excerpt || "",
      images: [`${process.env.NEXT_PUBLIC_MEDIA_PATH}/${blogItem.featured_image}`],
    },
  };
}

export default async function Page({ params }) {
   const { slug } = await params;
  const blog = await getSingleBlog(slug);


  
  if (!blog || !blog.data) return notFound();
  
  const blogItem = blog.data;
  const blogs = await getBlogs(); // For sidebar
  
  // console.log( "blogss datail data ", blogItem)
  const bannerData = {
    pageName: blogItem.title || "Blog Detail",
    pageTitle: "Latest News & Articles",
  };

  return (
    <>
      {blogItem?.schema_page && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: blogItem.schema_page }}
        />
      )}


      <InnerPageBanner data={bannerData} />

      <div className="section-padding">
        <div className="container">
          <div className="row clearfix">
            {/* Blog Detail Section */}
            <div className="col-lg-8">
              <article className="post news-grid">
                {blogItem.featured_image && (
                  <div className="post-thumbnail">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_MEDIA_PATH}/${blogItem.featured_image}`}
                      alt={blogItem.title || "Blog Image"}
                      width={1200}
                      height={700}
                      className="img-fluid rounded"
                    />
                  </div>
                )}

                <div className="post-meta mt-3">
                  <span className="entry-meta entry-category">
                    <a href="#">
                      {blogItem.category?.name || "Uncategorized"}
                    </a>
                  </span>
                  <span className="entry-meta entry-date">
                    <a href="#">
                      {new Date(blogItem.created_at).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </a>
                  </span>
                </div>

                <div
                  className="blog-detail-body"
                  dangerouslySetInnerHTML={{ __html: blogItem.content }}
                />
              </article>
            </div>

            {/* Sidebar Section */}
            <div className="col-lg-4">
              <BlogSidebar blogdata={blogs?.data || []} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
