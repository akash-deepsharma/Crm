"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/testimonials.css";

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

  // ✅ Dynamic Testimonials Data
  const testimonials = [
    {
      id: 1,
      name: "Smith Carle",
      role: "Manager",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi veniam cumque maxime doloribus doloremque recusandae dolorem  consequuntur modi, sit blanditiis!",
      rating: 5,
    },
    {
      id: 2,
      name: "Darla John",
      role: "IT Manager",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil reiciendis earum pariatur.",
      rating: 5,
    },
    {
      id: 3,
      name: "Ken Lord",
      role: "Team Manager",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi veniam cumque.",
      rating: 5,
    },
    {
      id: 4,
      name: "Charlas Kris",
      role: "CEO Consultant",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur modi, sit blanditiis!",
      rating: 5,
    },
  ];

  return (
    <div className="testimonial-section section-padding feedback-five">
      <div className="container py-lg-5">
        <div className="row wow fadeInUp">
          <div className="col-lg-4 pt-lg-5">
            <div className="heading-wrapper pt-lg-5">
              <h2 className="h1">
                What <span>Our Clients</span> Are Saying
              </h2>
              <div className="lead-text">
                <p>
                  Lorem ipsum dolor sit amet Aenean convallis a neque non
                  pellentesque.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="testimonial_sec">
              <div className="testimonial_inner">
                <Slider {...settings}>
                  {testimonials.map((item) => (
                    <div className="card-carousel " style={{margin:'12px'}} key={item.id}>
                      <div className="card-body">
                        <div className="rating">
                          {Array.from({ length: item.rating }).map((_, i) => (
                            <span key={i} className="fa fa-star checked"></span>
                          ))}
                        </div>
                        <p className="card-text pt-4">{item.message}</p>
                        <h5 className="mb-0">
                          <strong>{item.name}</strong>
                        </h5>
                        <span>{item.role}</span>
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
