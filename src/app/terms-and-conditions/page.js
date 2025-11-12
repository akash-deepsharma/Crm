import { getMetas } from "@/ApiCall/getMetasApi";
import { getPagesData } from "@/ApiCall/pagesApi";
import InnerPageBanner from "@/components/Common/InnerPageBanner";
import React from "react";


export async function generateMetadata() {
  // Static slug for Become a seller page
  const slug = "terms-and-condition";
  const meta = await getMetas(slug);

  const page = await meta?.data?.[0];
  console.log( `${slug} page meta found then show`, page)

  if (!page) {
    return {
      title: "Terms & Conditions | My Website",
      description: "Read the Terms & Conditions of My Website to understand the rules, guidelines, and policies that govern the use of our platform and services.",
    };
  }


  return {
    title: page.meta_title || "Terms & Conditions | My Website",
    description:
      page.meta_description ||
      "Read the Terms & Conditions of My Website to understand the rules, guidelines, and policies that govern the use of our platform and services.",
    keywords:
      page.meta_keywords ||
      "terms and conditions, user agreement, policies, rules, website terms, My Website terms",
      robots:
      page.robotstatus === "true"
        ? "index, follow"
        : "noindex, nofollow",
    openGraph: {
      title: page.meta_title || "Terms & Conditions | My Website",
      description:
        page.meta_description ||
        "Learn about the rules, policies, and terms that govern your use of My Website and its services to ensure a safe and transparent experience.",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${slug}`,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_MEDIA_PATH}/${page.page_image}`,
          width: 1200,
          height: 630,
          alt: page.title || "Terms & Conditions | My Website",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.meta_title || "Terms & Conditions | My Website",
      description:
        page.meta_description ||
        "Understand the terms, guidelines, and policies for using My Website, ensuring a safe and reliable experience for all users.",
      images: [`${process.env.NEXT_PUBLIC_MEDIA_PATH}/${page.page_image}`],
    },
  };
}



export default async function Page() {

    const slug = "terms-and-condition";
      // const response = await getPagesData(slug);

      const [response, metaData] = await Promise.all([getPagesData(slug), getMetas(slug)]);
  
       const meta = metaData?.data?.[0];
  
    console.log( "data how terms-and-condition" , meta)

      const pageData = response?.data?.[0];

  const bannerData = {
    pageName:   `${pageData?.heading}` || "Terms and Conditions",
    pageTitle: `${pageData?.sub_heading}` || "Welcome to Our Terms and Conditions",
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

      <div className="terms-and-conditions section-padding">
        <div className="container">
          <div className="terms-content"  dangerouslySetInnerHTML={{
                __html: pageData ?.content || "<p>No content found.</p>",
              }}/>
            
        </div>
      </div>
    </>
  );
}
