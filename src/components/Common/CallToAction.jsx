import { getCallToAction } from "@/ApiCall/callToActionApi";
import Link from "next/link";
import React from "react";

export default async function CallToAction() {

  const dataCallToACtion = await getCallToAction()
  const data = dataCallToACtion.main_content || [];


  return (
    <div className="cta-section section-padding style-dark">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="call-to-action-content i-text-center">
              <h2 className="h1">
                {data?.heading} {" "}
                <span className="special-fonts">{data?.sub_heading}</span>
              </h2>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="call-to-action-btn text-right i-text-center">
              <Link
                href="/contact"
                className="btn btn-primary btn-light btn-large"
              >
                Contact Us Now!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
