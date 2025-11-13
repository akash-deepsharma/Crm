"use client";
import Image from "next/image";
import React from "react";

export default function MissionVision({ data }) {
  console.log("Mission Data:", data);

  
  const steps = data || [];

  return (
    <div className="section-padding light-gradient-bg pb-0">
      <div className="container">
        <div className="row">
          {steps.map((item, index) => (
            <div className="col-lg-4" key={index}>
              <div className="features-block theme-one wow fadeInLeft">
                <div className="inner-box">
                  <div className="icon">
                    <Image
                      className="normal"
                      src={`${process.env.NEXT_PUBLIC_MEDIA_PATH}/${item.image}`}
                      alt={item.title}
                      width={50}
                      height={50}
                    />
                    <Image
                      className="hover"
                      src={`${process.env.NEXT_PUBLIC_MEDIA_PATH}/${item.image}`}
                      alt={item.title}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="text">
                    <h4>{item.title}</h4>
                    <p>{item.Description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
