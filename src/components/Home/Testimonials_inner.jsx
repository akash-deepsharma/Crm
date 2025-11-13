"use client"
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { getTestimonial } from "@/ApiCall/testimonialApi";

export default function Testimonials_inner() {


  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    centerMode: true,
    centerPadding: "10px",
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 1 },
      },
    ],
  };

      const [testimonialData, setTestimonialData] = useState([]);
    
       useEffect(() => {
        async function fetchData() {
          const cached = sessionStorage.getItem("testimonialData");
          if (cached) {
            setTestimonialData(JSON.parse(cached));
            return;
          }
      
          const data = await getTestimonial();
          if (data?.status === true) {
            setTestimonialData(data?.data);
            sessionStorage.setItem("testimonialData", JSON.stringify(data?.data));
          }
        }
      
        fetchData();
      }, []);

//  console.log("✅ Testimonials data:", testimonialData);


   const headingContent = testimonialData?.testimonial_content?.heading;
  const words = headingContent?.split(" ");
  const a = words?.slice(0, 2).join(" ");
  const b = words?.slice(2, 4).join(" ");
  const c = words?.slice(4).join(" ");


const testimonials = testimonialData?.testimonials
  

  return (
    <div className="testimonial-section section-padding">
      <div className="container">
        <div className="row justify-content-center clearfix">
          <div className="col-lg-8">
            <div className="heading-wrapper text-center with-separator">
              <h2 className="h1">
                {a} <span>{b}</span> {c}
              </h2>
              <div className="lead-text" dangerouslySetInnerHTML={{
                  __html: testimonialData?.testimonial_content?.content,
                }}>
               
              </div>
            </div>
          </div>
        </div>

        <div className="row clearfix">
          <div className="col-lg-12">
            <div className="client-testimonial theme-one">
              <div className="testimonial-slider">
                <Slider {...settings}>
                  {testimonials?.map((item) => (
                    <div className="item" key={item.id}>
                      <div className="testimonial-text">
                        <blockquote  dangerouslySetInnerHTML={{ __html: item?.message }}></blockquote>
                      </div>
                      <div className="client-info-wrapper">
                        <div className="client-img">
                          <Image
                            src={`${process.env.NEXT_PUBLIC_MEDIA_PATH}/${item.image}`}
                            alt={item.name}
                            className="img-fluid"
                            width={600} height={600}
                          />
                        </div>
                        <div className="client-info">
                          <h5>{item.name}</h5>
                          <p>{item.designation}</p>
                        </div>
                      </div>
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
