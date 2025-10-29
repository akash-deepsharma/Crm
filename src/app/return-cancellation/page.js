import { getPagesData } from '@/ApiCall/pagesApi';
import InnerPageBanner from '@/components/Common/InnerPageBanner';
import React from 'react'

export default async function page() {
    const slug = "return-cancellation";
    const response = await getPagesData(slug);
    const pageData = response?.data?.[0];

    
    const bannerData = {
    pageName: ` ${pageData?.heading}` || "Return & Cancellation" ,
    pageTitle: `${pageData?.sub_heading}` || "Our Return & Cancellation Policy",
  };

  return (
      <div>
        <InnerPageBanner data={bannerData}/>
        <div className="terms-and-conditions section-padding">
        <div className="container">
          <div className="terms-content"  dangerouslySetInnerHTML={{
                __html: pageData ?.content || "<p>No content found.</p>",
              }}/>
            
        </div>
      </div>
      </div>
  )
}
