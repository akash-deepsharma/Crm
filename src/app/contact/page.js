import { contactGetApi } from '@/ApiCall/contactApi';
import { getMetas } from '@/ApiCall/getMetasApi';
import InnerPageBanner from '@/components/Common/InnerPageBanner'
import ContactDetails from '@/components/Contact/ContactDetails';
import ContactIframe from '@/components/Contact/ContactIframe';
import React from 'react'

export async function generateMetadata() {
  // Static slug for Become a seller page
  const slug = "contact";
  const meta = await getMetas(slug);
  const baseUrl = process.env.NEXT_PUBLIC_baseUrl || "https://yourdomain.com";
   const canonicalUrl = `${baseUrl}/${slug}`;

  const page = await meta?.data?.[0];

  if (!page) {
    return {
      title: "contact | My Website",
      description: "Get in touch with us today. We're here to answer your questions, provide support, and help you connect with our team at My Website.",
    };
  }


  return {
    title: page.meta_title || "Contact Us | My Website",
    description:
      page.meta_description ||
      "Get in touch with us today. We're here to answer your questions, provide support, and help you connect with our team at My Website.",
    keywords:
      page.meta_keywords ||
      "contact us, customer support, help center, get in touch, inquiry, feedback, My Website contact",
      alternates: {
      canonical: canonicalUrl,
    },
      robots:
      page.robotstatus === "true"
        ? "index, follow"
        : "noindex, nofollow",
    openGraph: {
      title: page.meta_title || "Contact Us | My Website",
      description:
        page.meta_description ||
        "Have questions or need assistance? Contact our support team at My Website for quick and reliable help.",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${slug}`,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_MEDIA_PATH}/${page.page_image}`,
          width: 1200,
          height: 630,
          alt: page.title || "Contact Us | My Website",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.meta_title || "Contact Us | My Website",
      description:
        page.meta_description ||
        "We’re here to help! Get in touch with our team at My Website for inquiries, support, or feedback.",
      images: [`${process.env.NEXT_PUBLIC_MEDIA_PATH}/${page.page_image}`],
    },
  };
}

export default async function page() {
  const slug = "contact";
  // const ContactContent = await contactGetApi();
  const [ContactContent, metaData] = await Promise.all([contactGetApi(), getMetas(slug)]);
  
       const meta = metaData?.data?.[0];
  
    console.log( "data how contact" , meta)

  // console.log("contactGetApi",ContactContent)

  const bannerData = {
    pageName: "Contact Us",
    pageTitle: "Get in Touch with Us",
  };


  return (
      <>
      {meta?.schema_page && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: meta.schema_page }}
        />
      )}
        <InnerPageBanner data={bannerData}/>
        <ContactDetails data={ContactContent}/>
        <ContactIframe data={ContactContent}/>

      </>
  )
}
