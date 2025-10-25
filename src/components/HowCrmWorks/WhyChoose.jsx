import Image from "next/image";
import React from "react";

export default function WhyChoose() {
  return (
    <div className="light-bg section-padding">
      <div className="container">
        <div className="row clearfix justify-content-center">
          <div className="col-lg-10">
            <div className="heading-wrapper text-center with-separator">
              <h2 className="h1">
                Why Choose <span>Our CRM</span>
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
          <div className="col-lg-4">
            <div className="icon-box theme-two wow fadeInUp">
              <div className="icon">
                <Image src="/images/default-color/icon-9.svg" alt="" width={80} height={80}/>
              </div>
              <div className="text">
                <h4>Fast & Reliable</h4>
                <p>Lightning-fast CRM with 99.9% uptime and real-time sync.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="icon-box theme-two wow fadeInLeft">
              <div className="icon">
                <Image src="/images/default-color/icon-8.svg" alt="" width={80} height={80}/>
              </div>
              <div className="text">
                <h4>Team Collaboration</h4>
                <p>
                  Collaborate with your sales, support, and marketing teams
                  easily
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="icon-box theme-two wow fadeInRight">
              <div className="icon">
                <Image src="/images/default-color/icon-10.svg" alt="" width={80} height={80}/>
              </div>
              <div className="text">
                <h4>Secure & Scalable</h4>
                <p>
                  Enterprise-grade data security and scalability for your
                  business
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
