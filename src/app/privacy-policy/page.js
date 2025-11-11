import InnerPageBanner from '@/components/Common/InnerPageBanner';
import React from 'react';
import { getPagesData } from '@/ApiCall/pagesApi';
import { getMetas } from '@/ApiCall/getMetasApi';



export async function generateMetadata() {
  // Static slug for Become a seller page
  const slug = "privacy-policy";
  const meta = await getMetas(slug);

  const page = await meta?.data?.[0];
  console.log( `${slug} page meta found then show`, page)

  if (!page) {
    return {
      title: "Privacy Policy | My Website",
      description: "Read our Privacy Policy to understand how we collect, use, and protect your personal information when you use My Website.",
    };
  }


  return {
    title: page.meta_title || "Privacy Policy | My Website",
    description:
      page.meta_description ||
      "Read our Privacy Policy to understand how we collect, use, and protect your personal information when you use My Website.",
    keywords:
      page.meta_keywords ||
      "privacy policy, data protection, user information, security, My Website privacy",
    openGraph: {
      title: page.meta_title || "Privacy Policy | My Website",
      description:
        page.meta_description ||
        "Learn about our commitment to protecting your personal data and ensuring your privacy when using My Website.",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${slug}`,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_MEDIA_PATH}/${page.page_image}`,
          width: 1200,
          height: 630,
          alt: page.title || "Privacy Policy | My Website",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.meta_title || "Privacy Policy | My Website",
      description:
        page.meta_description ||
        "Understand how My Website handles your personal information and ensures privacy and security.",
      images: [`${process.env.NEXT_PUBLIC_MEDIA_PATH}/${page.page_image}`],
    },
  };
}





export default async function Page() {

  const slug = "privacy-policy";
  
  const response = await getPagesData(slug);
  const pageData = response?.data?.[0];

  const bannerData = {
    pageName: ` ${pageData?.heading}` || "Privacy Policy" ,
    pageTitle: `${pageData?.sub_heading}` || "Our Commitment to Your Privacy",
  };

  return (
    <div>
      <InnerPageBanner data={bannerData} />
      <div className="terms-and-conditions section-padding">
        <div className="container">
          <div className="terms-content clearfix" dangerouslySetInnerHTML={{
                __html: pageData ?.content || "<p>No content found.</p>",
              }}/>
            
        </div>
      </div>
    </div>
  );
}
