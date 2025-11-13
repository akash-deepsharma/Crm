"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Screenshot({data}) {

    const screenshotData = data || [];
    // console.log( "screenshotData data set", screenshotData)





  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: "linear",
  };

  return (
    <div className="screenshot-section section-padding">
      <div className="container">
        <div className="row justify-content-center clearfix style-dark">
          <div className="col-lg-8">
            <div className="heading-wrapper text-center">
              <h2 className="h1">{screenshotData?.heading}</h2>
              <div className="lead-text" dangerouslySetInnerHTML={{ __html: screenshotData?.content }}>
                
              </div>
            </div>
          </div>
        </div>

        <div className="row clearfix">
          <div className="col-lg-12">
            <div className="ss-wrapper text-center relative">
              <Image
                className="laptop-img-bg mx-auto"
                src={`${process.env.NEXT_PUBLIC_MEDIA_PATH}/${screenshotData?.image}`}
                alt={screenshotData.image_all_text}
                width={1600} height={855}
              />

              <div className="screenshot-slider mt-5">
                <Slider {...settings}>
                  {screenshotData?.images.map((item, index)=>(
                  <div className="item" key={index}>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_MEDIA_PATH}/${item.image_path}`}
                      alt={item.alt_text}
                      width={800}
                      height={700}
                    />
                  </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
