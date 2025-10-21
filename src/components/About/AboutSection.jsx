import Link from "next/link";
import React from "react";

export default function AboutSection() {
  return (
    <div className="about-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 wow fadeInLeft">
            <div className="image-wrapper">
              <img src="images/default-color/user-interface-img.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="heading-wrapper with-separator">
              <span className="sub-title">About CRM</span>
              <h2 className="h1">
                Why the best choose to <span>work with us</span>
              </h2>
            </div>
            <div className="text-wrapper">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                sodales dictum viverra. Nam gravida dignissim eros. Vivamus
                congue erat ante, volutpat dictum neque dignissim eget.
              </p>
              <ul className="list-style-one">
                <li>Nullam placerat nunc id ornare convallis.</li>
                <li>
                  Mauris id dui aliquam, dapibus felis vel, iaculis risus.
                </li>
                <li>Integer dapibus lorem in nisl hendrerit dictum.</li>
              </ul>
            </div>
            <div className="btn-wrapper">
              <Link className="btn btn-primary" href="/pricing">
                Purchase Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
