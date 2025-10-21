import Image from "next/image";
import React from "react";

export default function MissionVision() {
  return (
    <div className="section-padding light-gradient-bg pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="features-block theme-one wow fadeInLeft">
              <div className="inner-box">
                <div className="icon">
                  <Image
                    className="normal"
                    src="images/default-color/icon-5.svg"
                    alt=""
                    width={50}
                    height={50}
                  />
                  <Image
                    className="hover"
                    src="images/default-color/icon-5-light.svg"
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>
                <div className="text">
                  <h4>Our Responsibility</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exer citation
                    ullamco laboris.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="features-block theme-one wow fadeInUp">
              <div className="inner-box">
                <div className="icon">
                  <Image
                    className="normal"
                    src="images/default-color/icon-5.svg"
                    alt=""
                    width={50}
                    height={50}
                  />
                  <Image
                    className="hover"
                    src="images/default-color/icon-5-light.svg"
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>
                <div className="text">
                  <h4>Our Approach</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exer citation
                    ullamco laboris.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="features-block theme-one wow fadeInRight">
              <div className="inner-box">
                <div className="icon">
                  <Image
                    className="normal"
                    src="images/default-color/icon-5.svg"
                    alt=""
                    width={50}
                    height={50}
                  />
                  <Image
                    className="hover"
                    src="images/default-color/icon-5-light.svg"
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>
                <div className="text">
                  <h4>Our Mission, Vission</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exer citation
                    ullamco laboris.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
