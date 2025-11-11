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

  const page = await meta?.data?.[0];
  console.log( `${slug} page meta found then show`, page)

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


const data = await getAbout()
const aboutData = data?.section1
const teamData = data?.section2
const trustedCompany = data.section3


// console.log( "about  data ", aboutData)

  const bannerData = {
    pageName: aboutData?.heading || "About Us",
    pageTitle: aboutData?.sub_heading || "Know More About Our Company",
  };
  return (
    <>
      <InnerPageBanner data={bannerData} />
      <AboutSection data={aboutData}/>
      <MissionVision data={aboutData?.extra_data?.steps} />
      <OurTeam data={teamData} />
      <CallToAction />
      <TrustedCompany data={trustedCompany}/>
    </>
  );
}
