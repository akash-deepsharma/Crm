import React from "react";
import'./agent.css'
import InnerPageBanner from "@/components/Common/InnerPageBanner";
import Agent_Steps from "@/components/Agent/Agent_Steps";
import Steps_View from "@/components/Agent/Steps_View";
import Subscriber from "@/components/Common/Subscriber";
import Agent_Banner from "@/components/Agent/Agent_Banner";
import Agent_Modal from "@/components/Common/Agent_Modal";
import { agentGetApi } from "@/ApiCall/agentApi";

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
