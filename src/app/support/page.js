
import { getMetas } from "@/ApiCall/getMetasApi";
import React from "react";
import SupportPageClient from "./SupportPageClient";



export async function generateMetadata() {
  // Static slug for Become a seller page
  const slug = "support";
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


export default function Page() {

  return (
    <>
      <SupportPageClient/>
    </>
  );
}
