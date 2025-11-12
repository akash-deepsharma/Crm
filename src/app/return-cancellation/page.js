import { getMetas } from '@/ApiCall/getMetasApi';
import { getPagesData } from '@/ApiCall/pagesApi';
import InnerPageBanner from '@/components/Common/InnerPageBanner';
import React from 'react'


export async function generateMetadata() {
  // Static slug for Become a seller page
  const slug = "return-cancellation";
  const meta = await getMetas(slug);

  const page = await meta?.data?.[0];
  console.log( `${slug} page meta found then show`, page)

  if (!page) {
    return {
      title: "Return & Cancellation Policy | My Website",
      description: "Read our Return & Cancellation Policy to understand how you can return products, request cancellations, and get support for your orders on My Website.",
    };
  }


  return {
    title: page.meta_title || "Return & Cancellation Policy | My Website",
    description:
      page.meta_description ||
      "Read our Return & Cancellation Policy to understand how you can return products, request cancellations, and get support for your orders on My Website.",
    keywords:
      page.meta_keywords ||
      "return policy, cancellation policy, refunds, order returns, My Website support, product return",
      robots:
      page.robotstatus === "true"
        ? "index, follow"
        : "noindex, nofollow",
    openGraph: {
      title: page.meta_title || "Return & Cancellation Policy | My Website",
      description:
        page.meta_description ||
        "Learn about our easy return and cancellation process, ensuring a smooth and reliable experience for all My Website customers.",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${slug}`,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_MEDIA_PATH}/${page.page_image}`,
          width: 1200,
          height: 630,
          alt: page.title || "Return & Cancellation Policy | My Website",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.meta_title || "Return & Cancellation Policy | My Website",
      description:
        page.meta_description ||
        "Understand our return and cancellation policies to make shopping with My Website safe, simple, and worry-free.",
      images: [`${process.env.NEXT_PUBLIC_MEDIA_PATH}/${page.page_image}`],
    },
  };
}


export default async function page() {
    const slug = "return-cancellation";
    // const response = await getPagesData(slug);
    const [response, metaData] = await Promise.all([getPagesData(slug), getMetas(slug)]);
      
           const meta = metaData?.data?.[0];
      
        console.log( "data how return-cancellation" , meta)
    const pageData = response?.data?.[0];

    
    const bannerData = {
    pageName: ` ${pageData?.heading}` || "Return & Cancellation" ,
    pageTitle: `${pageData?.sub_heading}` || "Our Return & Cancellation Policy",
  };

  return (
      <div>
        {meta?.schema_page && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: meta.schema_page }}
        />
      )}
        <InnerPageBanner data={bannerData}/>
        <div className="terms-and-conditions section-padding">
        <div className="container">
          <div className="terms-content"  dangerouslySetInnerHTML={{
                __html: pageData ?.content || "<p>No content found.</p>",
              }}/>
            
        </div>
      </div>
      </div>
  )
}
