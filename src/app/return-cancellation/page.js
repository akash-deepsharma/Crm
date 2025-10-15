import InnerPageBanner from '@/components/Common/InnerPageBanner';
import React from 'react'

export default function page() {
  const bannerData = {
    pageName: "Return & Cancellation",
    pageTitle: "Our Return & Cancellation Policy",
  };
  return (
      <div>
        <InnerPageBanner data={bannerData}/>
      </div>
  )
}
