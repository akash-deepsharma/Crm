"use client";
import CallToAction from "@/components/Common/CallToAction";
import InnerPageBanner from "@/components/Common/InnerPageBanner";
import Subscriber from "@/components/Common/Subscriber";
import CTASection from "@/components/Home/CTASection";
import Testimonials_inner from "@/components/Home/Testimonials_inner";
import HowCrmWorks from "@/components/HowCrmWorks/HowCrmWorks";
import VisualWorkflow from "@/components/HowCrmWorks/VisualWorkflow";
import WhyChoose from "@/components/HowCrmWorks/WhyChoose";
import React, { useEffect } from "react";

export default function page() {
  const bannerData = {
    pageName: "How CRM Works",
    pageTitle:
      "Streamlining your CRM workflow to manage leads, sales, and customer relationships with ease.",
  };

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <InnerPageBanner data={bannerData} />
      <VisualWorkflow />
      <HowCrmWorks />
      <WhyChoose />

      <Testimonials_inner />

      <CallToAction />
      <div className="section-padding pb-0">
        <Subscriber />
      </div>
    </>
  );
}
