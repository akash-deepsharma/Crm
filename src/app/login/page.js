import React from "react";
import { getMetas } from "@/ApiCall/getMetasApi";
import LoginRegisterPage from "./LoginRegisterPage";


export async function generateMetadata() {
  const slug = "login";
  const meta = await getMetas(slug);
  const baseUrl = process.env.NEXT_PUBLIC_baseUrl || "https://yourdomain.com";
   const canonicalUrl = `${baseUrl}/${slug}`;

  const page = await meta?.data?.[0];

  if (!page) {
    return {
      title: "Login   | My Website",
      description: "Access your account on My Website. Log in to manage your profile, track orders, and enjoy personalized services..",
    };
  }


  return {
    title: page.meta_title || "Login   | My Website",
    description:
      page.meta_description ||
      "Access your account on My Website. Log in to manage your profile, track orders, and enjoy personalized services..",
    keywords:
      page.meta_keywords ||
      "login, sign in, account, user access, My Website, profile, dashboard",
      alternates: {
      canonical: canonicalUrl,
    },
      robots:
      page.robotstatus === "true"
        ? "index, follow"
        : "noindex, nofollow",
    openGraph: {
      title: page.meta_title || "Login   | My Website",
      description:
        page.meta_description ||
        "Access your account on My Website. Log in to manage your profile, track orders, and enjoy personalized services..",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${slug}`,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_MEDIA_PATH}/${page.page_image}`,
          width: 1200,
          height: 630,
          alt: page.title || "Login   | My Website",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.meta_title || "Login  | My Website",
      description:
        page.meta_description ||
        "Access your account on My Website. Log in to manage your profile, track orders, and enjoy personalized services..",
      images: [`${process.env.NEXT_PUBLIC_MEDIA_PATH}/${page.page_image}`],
    },
  };
}




export default async function Page() {
  const slug = "login";
  const metaData = await  getMetas(slug);

     const meta = metaData?.data?.[0];

  console.log( "data how login" , meta)

  return (
    <>
     {meta?.schema_page && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: meta.schema_page }}
        />
      )}
    <LoginRegisterPage/>
    </>
  );
}
