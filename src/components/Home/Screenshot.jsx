"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Screenshot() {
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
              <h2 className="h1">Software Screen Shots</h2>
              <div className="lead-text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  finibus mi id elit gravida, quis tincidunt purus fringilla.
                  Aenean convallis a neque non pellentesque.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row clearfix">
          <div className="col-lg-12">
            <div className="ss-wrapper text-center relative">
              <img
                className="laptop-img-bg mx-auto"
                src="images/laptop-screen.png"
                alt="Laptop Background"
              />

              <div className="screenshot-slider mt-5">
                <Slider {...settings}>
                  <div className="item">
                    <Image
                      src="/images/ss-1.jpg"
                      alt="Screenshot 1"
                      width={800}
                      height={500}
                    />
                  </div>
                  <div className="item">
                    <Image
                      src="/images/ss-2.jpg"
                      alt="Screenshot 2"
                      width={800}
                      height={500}
                    />
                  </div>
                  <div className="item">
                    <Image
                      src="/images/ss-3.jpg"
                      alt="Screenshot 3"
                      width={800}
                      height={500}
                    />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
