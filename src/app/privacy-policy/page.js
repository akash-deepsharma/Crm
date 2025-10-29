import InnerPageBanner from '@/components/Common/InnerPageBanner';
import React from 'react';
import { getPagesData } from '@/ApiCall/pagesApi';

// ✅ Must mark the component as async
export default async function Page() {

  const slug = "privacy-policy";
  
  const response = await getPagesData(slug);
  const pageData = response?.data?.[0];

  const bannerData = {
    pageName: ` ${pageData?.heading}` || "Privacy Policy" ,
    pageTitle: `${pageData?.sub_heading}` || "Our Commitment to Your Privacy",
  };

  return (
    <div>
      <InnerPageBanner data={bannerData} />
      <div className="terms-and-conditions section-padding">
        <div className="container">
          <div className="terms-content clearfix" dangerouslySetInnerHTML={{
                __html: pageData ?.content || "<p>No content found.</p>",
              }}/>
            
        </div>
      </div>
    </div>
  );
}
