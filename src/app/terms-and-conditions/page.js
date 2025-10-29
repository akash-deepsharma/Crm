import { getPagesData } from "@/ApiCall/pagesApi";
import InnerPageBanner from "@/components/Common/InnerPageBanner";
import React from "react";

export default async function Page() {

    const slug = "terms-and-condition";
      const response = await getPagesData(slug);
      const pageData = response?.data?.[0];

  const bannerData = {
    pageName:   `${pageData?.heading}` || "Terms and Conditions",
    pageTitle: `${pageData?.sub_heading}` || "Welcome to Our Terms and Conditions",
  };

  return (
    <>
      <InnerPageBanner data={bannerData} />

      <div className="terms-and-conditions section-padding">
        <div className="container">
          <div className="terms-content"  dangerouslySetInnerHTML={{
                __html: pageData ?.content || "<p>No content found.</p>",
              }}/>
            
        </div>
      </div>
    </>
  );
}
