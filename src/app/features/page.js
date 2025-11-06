import { getFeature } from "@/ApiCall/featuresApi";
import InnerPageBanner from "@/components/Common/InnerPageBanner";
import Subscriber from "@/components/Common/Subscriber";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function page() {

  const featureData = await getFeature();

  const DataFeature = featureData || []

  console.log("featureData", DataFeature)

  const content = DataFeature?.section1?.extra_data?.title;

    const words = content.split(" ");  
    const a = words.slice(0, 1).join(" ");
    const b = words.slice(1, 3).join(" ");
    const c = words.slice(3).join(" ");



  const bannerData = {
    pageName: `${DataFeature.section1?.heading}` || "Features",
    pageTitle: `${DataFeature.section1?.sub_heading}` || "Our Features That You Can Use In Your Business",
  };
  return (
    <>
      <InnerPageBanner data={bannerData} />

      <div id="main-wrapper" className="page-wrapper wow fadeInUp">
        <div className="service-section section-padding">
          <div className="container">
            <div className="row clearfix justify-content-center">
              <div className="col-lg-10">
                <div className="heading-wrapper text-center with-separator">
                  <h2 className="h1">
                    {a} <span> {b} </span> {c}
                  </h2>
                  <div className="lead-text">
                    <p>
                      {DataFeature?.section1?.extra_data?.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row clearfix no-gutters dc-features-group mt-lg-5">
              {DataFeature?.section1?.extra_data?.steps.map((item,index)=>(
              <div className="col-lg-4 col-md-6 dc-features-item" key={index}>
                <Link href={`features/${item?.slug}`}>
                  <div className="dc-features-item-front">
                    <div className="inner-box">
                      <div className="icon">
                        <Image
                          className="normal img-fluid"
                          src={`${process.env.NEXT_PUBLIC_MEDIA_PATH}/${item?.image}`}
                          alt={item?.alt_text} width={200} height={200}
                        />
                      </div>
                      <h3 className="dc-features-title">
                        {item?.title}
                      </h3>
                    </div>
                  </div>
                  <div className="dc-features-item-hover">
                    <div className="inner-box">
                      <h3 className="dc-features-title">
                        {item?.title}
                      </h3>
                      <p>
                        {item?.Description}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>

              ))}
            </div>
          </div>
        </div>
      </div>


    <div className="section-padding pb-0"> 

      <Subscriber/>
    </div>
    </>
  );
}
