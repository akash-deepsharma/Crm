import Image from "next/image";
import React from "react";

export default function WhyChoose({data}) {
  const howCrmWorkData = data || [];

   const content = howCrmWorkData?.extra_data?.title;
    const words = content.split(" ");  
    const a = words.slice(0, 2).join(" ");
    const b = words.slice(2, 4).join(" ");
    const c = words.slice(4).join(" ");


  return (
    <div className="light-bg section-padding">
      <div className="container">
        <div className="row clearfix justify-content-center">
          <div className="col-lg-10">
            <div className="heading-wrapper text-center with-separator">
              <h2 className="h1">
                {a} <span> {b} </span> {c}
              </h2>
              <div className="lead-text">
                <p>
                  {howCrmWorkData?.extra_data?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row clearfix">
          {howCrmWorkData?.extra_data?.steps.map((item,index)=>(
            <div className="col-lg-4" key={index}>
              <div className="icon-box theme-two wow fadeInUp">
                <div className="icon">
                  <Image src={`${process.env.NEXT_PUBLIC_MEDIA_PATH}/${item.image}`} alt={item.alt_text} width={80} height={80}/>
                </div>
                <div className="text">
                  <h4>{item.title}</h4>
                  <p>{item.Description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
