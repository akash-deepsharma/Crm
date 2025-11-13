// "use client";
import { getMetas } from "@/ApiCall/getMetasApi";
import { getHowCrmWorks } from "@/ApiCall/howCrmWorksApi";
import CallToAction from "@/components/Common/CallToAction";
import InnerPageBanner from "@/components/Common/InnerPageBanner";
import Subscriber from "@/components/Common/Subscriber";
import Testimonials_inner from "@/components/Home/Testimonials_inner";
import HowCrmWorks from "@/components/HowCrmWorks/HowCrmWorks";
import VisualWorkflow from "@/components/HowCrmWorks/VisualWorkflow";
import WhyChoose from "@/components/HowCrmWorks/WhyChoose";



export async function generateMetadata() {
  // Static slug for Become a seller page
  const slug = "how-crm-works";
  const meta = await getMetas(slug);
const baseUrl = process.env.NEXT_PUBLIC_baseUrl || "https://yourdomain.com";
   const canonicalUrl = `${baseUrl}/${slug}`;
  const page = await meta?.data?.[0];

  if (!page) {
    return {
      title: "How CRM Works | My Website",
      description: "Learn how Customer Relationship Management (CRM) helps streamline your business processes, manage customer interactions, and boost growth efficiently.",
    };
  }


  return {
    title: page.meta_title || "How CRM Works | My Website",
    description:
      page.meta_description ||
      "Learn how Customer Relationship Management (CRM) helps streamline your business processes, manage customer interactions, and boost growth efficiently.",
    keywords:
      page.meta_keywords ||
      "CRM, how CRM works, customer relationship management, CRM features, business tools, My Website CRM",
      alternates: {
      canonical: canonicalUrl,
    },
      robots:
      page.robotstatus === "true"
        ? "index, follow"
        : "noindex, nofollow",
    openGraph: {
      title: page.meta_title || "How CRM Works | My Website",
      description:
        page.meta_description ||
        "Discover the benefits of CRM systems and how they can help your business manage customer interactions, sales, and relationships effectively.",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${slug}`,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_MEDIA_PATH}/${page.page_image}`,
          width: 1200,
          height: 630,
          alt: page.title || "How CRM Works | My Website",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.meta_title || "How CRM Works | My Website",
      description:
        page.meta_description ||
        "Understand how CRM tools can streamline your business processes, manage leads, and improve customer relationships.",
      images: [`${process.env.NEXT_PUBLIC_MEDIA_PATH}/${page.page_image}`],
    },
  };
}


export default async function page() {
const slug = "how-crm-works";

// const howCrmWorksData = await getHowCrmWorks()
const [howCrmWorksData, metaData] = await Promise.all([getHowCrmWorks(), getMetas(slug)]);

     const meta = metaData?.data?.[0];

  // console.log( "data how how-crm-works" , meta)
  // console.log("howCrmWorksData", howCrmWorksData)
  
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
