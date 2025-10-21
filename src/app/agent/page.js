import React from "react";
import'./agent.css'
import InnerPageBanner from "@/components/Common/InnerPageBanner";
import Agent_Steps from "@/components/Agent/Agent_Steps";
import Steps_View from "@/components/Agent/Steps_View";
import Subscriber from "@/components/Common/Subscriber";
import Agent_Banner from "@/components/Agent/Agent_Banner";
import Agent_Modal from "@/components/Common/Agent_Modal";

export default function page() {
  const bannerData = {
    pageName: "Partner with Us",
    pageTitle: "Become a Guidde Partner",
  };
  return (
    <>
      <InnerPageBanner data={bannerData}/>

      <Agent_Banner/>

      <Agent_Steps/>

      <Steps_View/>
      <div className="section-padding pb-0">
        <Subscriber/>
      </div>

      

    </>
  );
}
