import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

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

  // ✅ Dynamic Testimonials Data
  const testimonials = [
    {
      id: 1,
      name: "Emily R.,",
      role: "Sales Manager",
      message:
        "Alpha Manpower  CRM has completely transformed how we manage leads and track progress. The automation tools save us hours every week, and our sales have grown by 40% since we started using them.!",
      rating: 5,
    },
    {
      id: 2,
      name: "Darla John",
      role: "IT Manager",
      message:
        "We switched to Alpha Manpower  after trying multiple CRMs, and the difference is incredible. The interface is so easy to use, and the analytics dashboard gives us clear insights into every customer interaction.",
      rating: 5,
    },
    {
      id: 3,
      name: "Ken Lord",
      role: "Team Manager",
      message:
        "What I love most about Alpha Manpower  CRM is how easily we could tailor it to our business needs. Their support team was responsive and guided us through every step of the setup process.",
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
    <div className="testimonial-section section-padding">
      <div className="container">
        <div className="row justify-content-center clearfix">
          <div className="col-lg-8">
            <div className="heading-wrapper text-center with-separator">
              <h2 className="h1">
                Happy Clients <span>Feedback</span>
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

        <div className="row clearfix">
          <div className="col-lg-12">
            <div className="client-testimonial theme-one">
              <div className="testimonial-slider">
                <Slider {...settings}>
                  {testimonials.map((item) => (
                    <div className="item" key={item.id}>
                      <div className="testimonial-text">
                        <blockquote>{item.message}</blockquote>
                      </div>
                      <div className="client-info-wrapper">
                        <div className="client-img">
                          <Image
                            src="/images/team-4-square.jpg"
                            alt="client"
                            className="img-fluid"
                            width={600} height={600}
                          />
                        </div>
                        <div className="client-info">
                          <h5>{item.name}</h5>
                          <p>{item.role}</p>
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
