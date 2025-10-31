import React from "react";
import ContactForm from "./ContactForm";
import Link from "next/link";

export default function ContactDetails({data}) {
const contactData = data.data[0] || [];

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
                      {contactData?.phone_content}
                    </p>
                    <p>
                      <Link className="btn link-btn" href={`tel:${contactData?.phone}`}>
                        {contactData?.phone}
                      </Link>
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
                      {contactData?.email_content}
                    </p>
                    <p>
                      <Link className="btn link-btn" href={`mailto:${contactData?.email}`}>
                        {contactData?.email}
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="heading-wrapper with-separator">
                <span className="sub-title">{contactData?.sub_heading}</span>
                <h2 className="h1">
                  <span>Connect</span> with us
                </h2>
              </div>
              <div className="text-wrapper" dangerouslySetInnerHTML={{ __html: contactData.content }} >
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
