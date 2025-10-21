"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TrustedCompany() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  const logos = [
    "images/company-logo-1.png",
    "images/company-logo-2.png",
    "images/company-logo-3.png",
    "images/company-logo-4.png",
    "images/company-logo-5.png",
  ];

  return (
    <div className="companies-section section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="heading-wrapper text-center with-separator">
              <h2 className="h1">
                Trusted by many <span>companies</span>
              </h2>
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

        {/* Company Logos Slider */}
        <div className="row">
          <div className="col-lg-12">
            <Slider {...settings} className="companies-logo">
              {logos.map((logo, index) => (
                <div key={index} className="item text-center">
                  <div className="logo-wrapper p-3">
                    <img
                      src={logo}
                      alt={`Company ${index + 1}`}
                      className="img-fluid"
                      style={{ maxHeight: "80px", margin: "0 auto" }}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
