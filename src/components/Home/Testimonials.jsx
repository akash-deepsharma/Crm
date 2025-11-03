"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/testimonials.css";
import { getTestimonial } from "@/ApiCall/testimonialApi";

export default function Testimonials() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
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
      const data = await getTestimonial();
      console.log("✅ Testimonial API data:", data);

      if (data?.status === true) {
        setTestimonialData(data?.data);
      }
    }
    fetchData();
  }, []);

  console.log("✅ Testimonials data:", testimonialData);

  const headingContent = testimonialData?.testimonial_content?.heading;
  const words = headingContent?.split(" ");
  const a = words?.slice(0, 1).join(" ");
  const b = words?.slice(1, 3).join(" ");
  const c = words?.slice(3).join(" ");

  console.log("tilesa", headingContent);

  return (
    <div className="testimonial-section section-padding feedback-five">
      <div className="container py-lg-5">
        <div className="row wow fadeInUp">
          <div className="col-lg-4 pt-lg-5">
            <div className="heading-wrapper pt-lg-5">
              <h2 className="h1">
                {a} <span> {b}</span> {c}
              </h2>
              <div
                className="lead-text"
                dangerouslySetInnerHTML={{
                  __html: testimonialData?.testimonial_content?.content,
                }}
              ></div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="testimonial_sec">
              <div className="testimonial_inner">
                <Slider {...settings}>
                  {testimonialData?.testimonials?.map((item, index) => (
                    <div
                      className="card-carousel "
                      style={{ margin: "12px" }}
                      key={index}
                    >
                      <div className="card-body">
                        <div className="rating">
                          {[...Array(5)].map((_, i) => {
                            const ratingValue = i + 1;
                            const isFull =
                              ratingValue <= Math.floor(item.rating);
                            const isHalf =
                              item.rating % 1 !== 0 &&
                              ratingValue === Math.ceil(item.rating);

                            return (
                              <span
                                key={i}
                                className={`fa ${
                                  isFull
                                    ? "fa-star checked"
                                    : isHalf
                                    ? "fa-star-half-o checked"
                                    : "fa-star-o"
                                }`}
                              ></span>
                            );
                          })}
                        </div>
                        <p
                          className="card-text pt-4"
                          dangerouslySetInnerHTML={{ __html: item?.message }}
                        ></p>
                        <h5 className="mb-0">
                          <strong>{item.name}</strong>
                        </h5>
                        <span>{item.designation}</span>
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
