import InnerPageBanner from "@/components/Common/InnerPageBanner";
import Subscriber from "@/components/Common/Subscriber";
import Image from "next/image";
import React from "react";

export default function page() {
  const bannerData = {
    pageName: "Features",
    pageTitle: "Our Features That You Can Use In Your Business",
  };
  return (
    <>
      <InnerPageBanner data={bannerData} />

      <div id="main-wrapper" className="page-wrapper wow fadeInUp">
        <div className="service-section section-padding">
          <div className="container">
            <div className="row clearfix justify-content-center">
              <div className="col-lg-10">
                <div className="heading-wrapper text-center with-separator">
                  <h2 className="h1">
                    The <span>Key Features </span> of Our CRM
                  </h2>
                  <div className="lead-text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis finibus mi id elit gravida, quis tincidunt purus
                      fringilla. Aenean convallis a neque non pellentesque.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row clearfix no-gutters dc-features-group mt-lg-5">
              <div className="col-lg-4 col-md-6 dc-features-item">
                <a href="/features/slug-any">
                  <div className="dc-features-item-front">
                    <div className="inner-box">
                      <div className="icon">
                        <Image
                          className="normal img-fluid"
                          src="/images/default-color/Data-Management-Services.png"
                          alt="" width={200} height={200}
                        />
                      </div>
                      <h3 className="dc-features-title">
                        Data Management Services
                      </h3>
                    </div>
                  </div>
                  <div className="dc-features-item-hover">
                    <div className="inner-box">
                      <h3 className="dc-features-title">
                        Data Management Services
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam ut turpis in nunc faucibus cursus id at mauris. Ut
                        sed mi neque. Donec aliquet, urna id accumsan hendrerit.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 dc-features-item">
                <a href="/features/slug-any">
                  <div className="dc-features-item-front">
                    <div className="inner-box">
                      <div className="icon">
                        <Image
                          className="normal img-fluid"
                          src="/images/default-color/Data-Warehouse-Services.png"
                          alt=""  width={200} height={200}
                        />
                      </div>
                      <h3 className="dc-features-title">
                        Data Warehouse Services
                      </h3>
                    </div>
                  </div>
                  <div className="dc-features-item-hover">
                    <div className="inner-box">
                      <h3 className="dc-features-title">
                        Data Warehouse Services
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam ut turpis in nunc faucibus cursus id at mauris. Ut
                        sed mi neque. Donec aliquet, urna id accumsan hendrerit.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 dc-features-item">
                <a href="/features/slug-any">
                  <div className="dc-features-item-front">
                    <div className="inner-box">
                      <div className="icon">
                        <Image
                          className="normal img-fluid"
                          src="/images/default-color/Data-Quality-Assurance.png"
                          alt=""  width={200} height={200}
                        />
                      </div>
                      <h3 className="dc-features-title">
                        Data Quality Assurance
                      </h3>
                    </div>
                  </div>
                  <div className="dc-features-item-hover">
                    <div className="inner-box">
                      <h3 className="dc-features-title">
                        Data Quality Assurance
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam ut turpis in nunc faucibus cursus id at mauris. Ut
                        sed mi neque. Donec aliquet, urna id accumsan hendrerit.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 dc-features-item">
                <a href="/features/slug-any">
                  <div className="dc-features-item-front">
                    <div className="inner-box">
                      <div className="icon">
                        <Image
                          className="normal img-fluid"
                          src="/images/default-color/Data-Security.png"
                          alt=""  width={200} height={200}
                        />
                      </div>
                      <h3 className="dc-features-title">Data Security</h3>
                    </div>
                  </div>
                  <div className="dc-features-item-hover">
                    <div className="inner-box">
                      <h3 className="dc-features-title">Data Security</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam ut turpis in nunc faucibus cursus id at mauris. Ut
                        sed mi neque. Donec aliquet, urna id accumsan hendrerit.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 dc-features-item">
                <a href="#">
                  <div className="dc-features-item-front">
                    <div className="inner-box">
                      <div className="icon">
                        <Image
                          className="normal img-fluid"
                          src="/images/default-color/Training-and-Onboarding.png"
                          alt=""  width={200} height={200}
                        />
                      </div>
                      <h3 className="dc-features-title">
                        Training and Onboarding
                      </h3>
                    </div>
                  </div>
                  <div className="dc-features-item-hover">
                    <div className="inner-box">
                      <h3 className="dc-features-title">
                        Training and Onboarding
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam ut turpis in nunc faucibus cursus id at mauris. Ut
                        sed mi neque. Donec aliquet, urna id accumsan hendrerit.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 dc-features-item">
                <a href="#">
                  <div className="dc-features-item-front">
                    <div className="inner-box">
                      <div className="icon">
                        <Image
                          className="normal img-fluid"
                          src="/images/default-color/technology.png"
                          alt=""  width={200} height={200}
                        />
                      </div>
                      <h3 className="dc-features-title">
                        Technology and Tools
                      </h3>
                    </div>
                  </div>
                  <div className="dc-features-item-hover">
                    <div className="inner-box">
                      <h3 className="dc-features-title">
                        Technology and Tools
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam ut turpis in nunc faucibus cursus id at mauris. Ut
                        sed mi neque. Donec aliquet, urna id accumsan hendrerit.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


    <div className="section-padding pb-0"> 

      <Subscriber/>
    </div>
    </>
  );
}
