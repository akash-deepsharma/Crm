import Image from "next/image";
import React from "react";

export default function HowCrmWorks({data}) {
    const howCrmWorkData = data || [];



    
 const content = howCrmWorkData?.extra_data?.title;
    const words = content.split(" ");  
    const a = words.slice(0, 2).join(" ");
    const b = words.slice(2, 3).join(" ");
    const c = words.slice(3).join(" ");

  return (
    <div className="section-padding light-bg">
      <div className="container">
        <div className="row clearfix justify-content-center mb-lg-4">
          <div className="col-lg-8">
            <div className="heading-wrapper text-center">
              <h2 className="h1">
                {a} <span>{b}</span>{c}
              </h2>
              <div className="lead-text">
                <p>
                  {howCrmWorkData?.extra_data?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flexbox">
          {howCrmWorkData?.extra_data?.steps.map((item,index)=>(
            <div className="flexcard flexcardBlue text-center my-4" key={index}>
              <div className="flexcardNumber flexcardNumberBlue">0{index}</div>
              <h4 className=" flex-five flexcardTitle">{item.title}</h4>
              <div className="five-card-img">
                <Image
                  src={`${process.env.NEXT_PUBLIC_MEDIA_PATH}/${item.image}`}
                  alt={item.alt_text}
                  className="img-fluid" width={80} height={80}
                /> 
              </div>
              <p className="flex-five flexcardText">
                {item.Description}
              </p>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
}
