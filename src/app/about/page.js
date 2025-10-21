import AboutSection from "@/components/About/AboutSection";
import MissionVision from "@/components/About/MissionVision";
import OurTeam from "@/components/About/OurTeam";
import TrustedCompany from "@/components/About/TrustedCompany";
import CallToAction from "@/components/Common/CallToAction";
import InnerPageBanner from "@/components/Common/InnerPageBanner";
import React from "react";

export default function page() {
  const bannerData = {
    pageName: "About Us",
    pageTitle: "Know More About Our Company",
  };
  return (
    <>
      <InnerPageBanner data={bannerData} />
      <AboutSection />
      <MissionVision />
      <OurTeam />
      <CallToAction />


      <TrustedCompany/>
      </>
  );
}
