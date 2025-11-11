import React from "react";
import'./agent.css'
import InnerPageBanner from "@/components/Common/InnerPageBanner";
import Agent_Steps from "@/components/Agent/Agent_Steps";
import Steps_View from "@/components/Agent/Steps_View";
import Subscriber from "@/components/Common/Subscriber";
import Agent_Banner from "@/components/Agent/Agent_Banner";
import Agent_Modal from "@/components/Common/Agent_Modal";
import { agentGetApi } from "@/ApiCall/agentApi";
import { getMetas } from "@/ApiCall/getMetasApi";




export async function generateMetadata() {
  // Static slug for Become a seller page
  const slug = "become-a-seller";
  const meta = await getMetas(slug);

  const page = await meta?.data?.[0];
  console.log( `${slug} page meta found then show`, page)

  if (!page) {
    return {
      title: "Become a seller | My Website",
      description: "Join our platform as a trusted seller. Expand your reach, connect with customers, and grow your business with My Website",
    };
  }


  return {
    title: page.meta_title || "Become a Seller | My Website",
    description:
      page.meta_description ||
      "Join our platform as a trusted seller. Expand your reach, connect with customers, and grow your business with My Website.",
    keywords:
      page.meta_keywords ||
      "become a seller, start selling online, vendor registration, marketplace sellers, grow business, ecommerce partner",
    openGraph: {
      title: page.meta_title || "Become a Seller | My Website",
      description:
        page.meta_description ||
        "Partner with us to sell your products online and reach thousands of new customers every day.",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${slug}`,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_MEDIA_PATH}/${page.featured_image}`,
          width: 1200,
          height: 630,
          alt: page.title || "Become a Seller | My Website",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.meta_title || "Become a Seller | My Website",
      description:
        page.meta_description ||
        "Start your online selling journey today. Partner with My Website and grow your business faster.",
      images: [`${process.env.NEXT_PUBLIC_MEDIA_PATH}/${page.featured_image}`],
    },
  };
}





export default async function page() {
  const bannerData = {
    pageName: "Partner with Us",
    pageTitle: "Become a Guidde Partner",
  };

  const agent_data = await agentGetApi()

  const banner_stepData = agent_data?.section1
  const step_viewData = agent_data?.section2
  // console.log("cgent get data ", step_viewData)
 
  return (
    <>
      <InnerPageBanner data={bannerData}/>

      <Agent_Banner data={banner_stepData}/>

      <Agent_Steps  data={banner_stepData}/>

      <Steps_View  data={step_viewData}/>
      <div className="section-padding pb-0">
        <Subscriber/>
      </div>

      

    </>
  );
}
