import InnerPageBanner from "@/components/Common/InnerPageBanner";
import React from "react";

export default function Page() {
  const bannerData = {
    pageName: "Terms and Conditions",
    pageTitle: "Welcome to Our Terms and Conditions",
  };

  return (
    <>
      <InnerPageBanner data={bannerData} />

      <div className="terms-and-conditions section-padding">
        <div className="container">
          <div className="terms-content">
            <h2>Terms and Conditions</h2>

            <h3>Introduction</h3>
            <p>
              Welcome to our website. By continuing to browse and use this
              website, you agree to comply with and be bound by the following
              terms and conditions of use, which together with our privacy
              policy govern <strong>Your Company Name</strong>’s relationship
              with you in relation to this website. If you disagree with any
              part of these terms and conditions, please do not use our website.
            </p>

            <h3>Use of the Website</h3>
            <p>
              The content of the pages of this website is for your general
              information and use only. It is subject to change without notice.
            </p>

            <h3>Intellectual Property</h3>
            <p>
              This website contains material that is owned by or licensed to us.
              This material includes, but is not limited to, the design, layout,
              look, appearance, and graphics. Reproduction is prohibited other
              than in accordance with the copyright notice, which forms part of
              these terms and conditions.
            </p>

            <h3>Limitation of Liability</h3>
            <p>
              We will not be liable for any damages arising out of or in
              connection with the use of this website. This includes, without
              limitation, direct loss, loss of business or profits, or indirect
              or consequential loss.
            </p>

            <h3>Governing Law</h3>
            <p>
              Your use of this website and any dispute arising out of such use
              of the website is subject to the laws of <strong>[Your Country or State]</strong>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
