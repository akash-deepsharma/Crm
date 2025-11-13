import { getAbout } from "@/ApiCall/aboutApi";
import { getMetas } from "@/ApiCall/getMetasApi";
import AboutSection from "@/components/About/AboutSection";
import MissionVision from "@/components/About/MissionVision";
import OurTeam from "@/components/About/OurTeam";
import TrustedCompany from "@/components/About/TrustedCompany";
import CallToAction from "@/components/Common/CallToAction";
import InnerPageBanner from "@/components/Common/InnerPageBanner";
import React from "react";



export async function generateMetadata() {
  // Static slug for About page
  const slug = "about";
  //  const { slug } = params;
  const meta = await getMetas(slug);
  const baseUrl = process.env.NEXT_PUBLIC_baseUrl || "https://yourdomain.com";
   const canonicalUrl = `${baseUrl}/${slug}`;

  const page = await meta?.data?.[0];
  console.log("about page meta data", page)

  if (!page) {
    return {
      title: "About Us | My Website",
      description: "Learn more about our company and our mission.",
    };
  }


  return {
    title: page.meta_title || "About Us",
    description: page.meta_description || "Learn more about our company and our mission.",
    keywords: page.meta_keywords || "about, company, team, mission",
    alternates: {
      canonical: canonicalUrl,
    },
    robots:
      page.robotstatus === "true"
        ? "index, follow"
        : "noindex, nofollow",
    openGraph: {
      title: page.meta_title || "About Us",
      description: page.meta_description || "",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_MEDIA_PATH}/${page.featured_image}`,
          width: 1200,
          height: 630,
          alt: page.title || "About Us",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.meta_title || "About Us",
      description: page.meta_description || "",
      images: [`${process.env.NEXT_PUBLIC_MEDIA_PATH}/${page.featured_image}`],
    },
  };
}


export default async function page() {

  const slug = "about";

// const data = await getAbout()
  const [data, metaData] = await Promise.all([getAbout(), getMetas(slug)]);

const aboutData = data?.section1
const teamData = data?.section2
const trustedCompany = data.section3

const meta = metaData?.data?.[0];

  // console.log( "data about" , meta)
// console.log( "about  data ", aboutData)

  const bannerData = {
    pageName: aboutData?.heading || "About Us",
    pageTitle: aboutData?.sub_heading || "Know More About Our Company",
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
      <AboutSection data={aboutData}/>
      <MissionVision data={aboutData?.extra_data?.steps} />
      <OurTeam data={teamData} />
      <CallToAction />
      <TrustedCompany data={trustedCompany}/>
    </>
  );
}
