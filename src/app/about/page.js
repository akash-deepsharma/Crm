import { getAbout } from "@/ApiCall/aboutApi";
import AboutSection from "@/components/About/AboutSection";
import MissionVision from "@/components/About/MissionVision";
import OurTeam from "@/components/About/OurTeam";
import TrustedCompany from "@/components/About/TrustedCompany";
import CallToAction from "@/components/Common/CallToAction";
import InnerPageBanner from "@/components/Common/InnerPageBanner";
import React from "react";

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
