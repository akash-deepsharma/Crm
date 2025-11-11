"use client"
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getFaq } from "@/ApiCall/faqApi";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Faq() {
   const slug = "home";
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  // Fetch FAQ data
  useEffect(() => {
    async function fetchData() {
      const data = await getFaq(slug);
      // console.log("✅ First Faq data:", data);
      if (data?.status === "success") {
        setFaqData(data.faq || []);
      }
    }
    fetchData();
  }, []);
  // console.log("faq data " , faqData)


  return (
    <div className="faq-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="heading-wrapper with-separator">
              <h2 className="h1">
                Frequently Asked <span>Questions</span>
              </h2>
            </div>
          </div>

          <div className="col-lg-12">
            <div
              className="panel-group"
              id="accordion"
              role="tablist"
              aria-multiselectable="true"
            >
              {/* Panel 1 */}

              {faqData.map((item,index) => (
                <div className="panel panel-default" key={index}>
                  <div className="panel-heading" role="tab" id={`heading${index}`}>
                    <h3 className="panel-title">
                      <a
                        className="collapsed"
                        role="button"
                        title=""
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${index}`}
                        aria-expanded="false"
                        aria-controls={`collapse${index}`}
                      >
                        {item.question}
                      </a>
                    </h3>
                  </div>
                  <div
                    id={`collapse${index}`}
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby={`heading${index}`}
                    data-bs-parent="#accordion"
                  >
                    <div className="panel-body list-style-one" dangerouslySetInnerHTML={{ __html: item.answer }}>
                    </div>
                  </div>
                </div>                
              ))}

              {/* Panel 2 */}
              {/* <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="heading1">
                  <h3 className="panel-title">
                    <a
                      className="collapsed"
                      role="button"
                      title=""
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse1"
                      aria-expanded="false"
                      aria-controls="collapse1"
                    >
                      How can I uninstall Dummy Content?
                    </a>
                  </h3>
                </div>
                <div
                  id="collapse1"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  aria-labelledby="heading1"
                  data-bs-parent="#accordion"
                >
                  <div className="panel-body">
                    <p>
                      Nullam a nisl vitae sapien aliquet pellentesque. Mauris
                      dui felis, sagittis non turpis quis, molestie facilisis
                      quam. Ut ut augue tempor, tristique odio vitae, auctor
                      erat. Sed finibus, magna a condimentum ultricies, lectus
                      nisl euismod lectus, id aliquet mi velit in metus.
                    </p>
                  </div>
                </div>
              </div> */}

              {/* Panel 3 */}
              {/* <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="heading2">
                  <h3 className="panel-title">
                    <a
                      className="collapsed"
                      role="button"
                      title=""
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse2"
                      aria-expanded="false"
                      aria-controls="collapse2"
                    >
                      What are the minimum requirements?
                    </a>
                  </h3>
                </div>
                <div
                  id="collapse2"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  aria-labelledby="heading2"
                  data-bs-parent="#accordion"
                >
                  <div className="panel-body">
                    <p>
                      Suspendisse condimentum efficitur leo, vitae porttitor
                      risus ornare nec. Maecenas eget lorem vestibulum,
                      vestibulum nulla et, posuere nibh.
                    </p>
                  </div>
                </div>
              </div> */}

              {/* Panel 4 */}
              {/* <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="heading3">
                  <h3 className="panel-title">
                    <a
                      className="collapsed"
                      role="button"
                      title=""
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse3"
                      aria-expanded="false"
                      aria-controls="collapse3"
                    >
                      Where can I download earlier versions?
                    </a>
                  </h3>
                </div>
                <div
                  id="collapse3"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  aria-labelledby="heading3"
                  data-bs-parent="#accordion"
                >
                  <div className="panel-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pellentesque metus mauris, ullamcorper quis fringilla
                      pretium, faucibus quis enim. Proin at lorem nunc.
                      Curabitur at scelerisque felis.
                    </p>
                    <p>
                      Cras ornare libero sem, et efficitur elit hendrerit id.
                      Nam molestie felis ipsum, non ullamcorper nunc viverra sit
                      amet.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
