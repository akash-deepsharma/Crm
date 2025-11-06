// "use client";
import { getHowCrmWorks } from "@/ApiCall/howCrmWorksApi";
import CallToAction from "@/components/Common/CallToAction";
import InnerPageBanner from "@/components/Common/InnerPageBanner";
import Subscriber from "@/components/Common/Subscriber";
import Testimonials_inner from "@/components/Home/Testimonials_inner";
import HowCrmWorks from "@/components/HowCrmWorks/HowCrmWorks";
import VisualWorkflow from "@/components/HowCrmWorks/VisualWorkflow";
import WhyChoose from "@/components/HowCrmWorks/WhyChoose";

export default async function page() {

  
  const howCrmWorksData = await getHowCrmWorks()
  console.log("howCrmWorksData", howCrmWorksData)
  
  const dataBanner = howCrmWorksData.section1[0] || [];
  const dataVisualWprkflow = howCrmWorksData.section2[0] || [];
  const dataHowCrmWorks = howCrmWorksData.section3 || [];
  const dataWhyChooseCRM = howCrmWorksData.section4 || [];

  const bannerData = {
    pageName: `${dataBanner?.heading}` || "How CRM Works",
    pageTitle:
      "Streamlining your CRM workflow to manage leads, sales, and customer relationships with ease.",
  };


  return (
    <>
      <InnerPageBanner data={bannerData} />
      <VisualWorkflow data={dataVisualWprkflow} />
      <HowCrmWorks data={dataHowCrmWorks} />
      <WhyChoose data={dataWhyChooseCRM}/>
      <Testimonials_inner />
      <CallToAction />
      <div className="section-padding pb-0">
        <Subscriber />
      </div>
    </>
  );
}
