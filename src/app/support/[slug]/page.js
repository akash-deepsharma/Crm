"use client";
import InnerPageBanner from "@/components/Common/InnerPageBanner";
import Link from "next/link";
import React, { use, useEffect } from "react";

export default function SupportDetailPage({ params }) {
  const { slug } = use(params);

  // Define FAQ data by slug
  const faqData = {
    "setting-options": {
      title: "Setting Options",
      faqs: [
        {
          q: "How do I enable or disable payment gateway?",
          a: "You can enable or disable payment gateways in your admin settings under Payments > Gateway Options.",
        },
        {
          q: "Can I reset all settings to default?",
          a: "Yes, go to Settings → Reset → Restore Defaults. Make sure to backup data before resetting.",
        },
      ],
    },
    "social-share": {
      title: "Social Share",
      faqs: [
        {
          q: "How to connect my social media accounts?",
          a: "Navigate to Profile > Social Links and connect your accounts by following the prompts.",
        },
        {
          q: "Can users share posts automatically?",
          a: "Yes, enable auto-sharing from Settings → Social → Auto Share.",
        },
      ],
    },
    "user-login": {
      title: "User Login",
      faqs: [
        {
          q: "How do I reset my password?",
          a: "Click on 'Forgot Password' on the login page and follow the instructions.",
        },
        {
          q: "Can I log in using Google or Facebook?",
          a: "Yes, we support social logins via Google and Facebook under Sign-In Options.",
        },
      ],
    },
  };

  const supportItem = faqData[slug];

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
    if (supportItem) {
      document.title = `${supportItem.title} | Support`;
    }
  }, [slug]);

  if (!supportItem) {
    return <div className="text-center py-5">Support topic not found.</div>;
  }

  const bannerData = {
    pageName: "Support",
    pageTitle: supportItem.title,
  };

  return (
    <div>
      <InnerPageBanner data={bannerData} />

      <div className="faq-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading-wrapper with-separator">
                <h2 className="h1">
                  {supportItem.title} <span>FAQs</span>
                </h2>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="panel-group" id="accordion" role="tablist">
                {supportItem.faqs.map((faq, i) => (
                  <div className="panel panel-default" key={i}>
                    <div className="panel-heading" role="tab" id={`heading${i}`}>
                      <h3 className="panel-title">{faq.q}</h3>
                    </div>
                    <div
                      id={`collapse${i}`}
                      className={`panel-collapse show`}
                      role="tabpanel"
                      aria-labelledby={`heading${i}`}
                    >
                      <div className="panel-body">
                        <p>{faq.a}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <Link href="/support" className="btn btn-primary">
                  ← Back to Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
