import React from "react";
import ContactForm from "./ContactForm";

export default function ContactDetails() {
  return (
    <>
      <div className="about-section section-padding">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4">
              <div
                className="contact-info-box wow fadeInLeft"
                data-wow-delay="0.8s"
              >
                <div className="contact-wrapper">
                  <div className="icon">
                        <i className="fa-solid fa-phone-volume text-primary"></i> 
                 </div>
                  <div className="content">
                    <h4>Phone</h4>
                    <p>
                      Our Sales Team available from Mon-Fri, 10:00 am to 6:00 pm
                    </p>
                    <p>
                      <a className="btn link-btn" href="tel:1234567890">
                        (123) 456 7890
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="contact-info-box wow fadeInLeft" data-wow-delay="1s">
                <div className="contact-wrapper">
                  <div className="icon">
                    <i className="fa-solid fa-envelope-open text-primary"></i>
                  </div>
                  <div className="content">
                    <h4>Email</h4>
                    <p>
                      Our Sales team will get back to in 48-h during standard business hours.
                    </p>
                    <p>
                      <a className="btn link-btn" href="mailto:example@gmail.com">
                        example@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="heading-wrapper with-separator">
                <span className="sub-title">Get in touch</span>
                <h2 className="h1">
                  <span>Connect</span> with us
                </h2>
              </div>
              <div className="text-wrapper">
                <p>
                  Please contact us using the details below. For more
                  information about our services, please visit the corresponding
                  page on our web.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
