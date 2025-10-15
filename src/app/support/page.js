import InnerPageBanner from '@/components/Common/InnerPageBanner';
import React from 'react'

export default function page() {
  const bannerData = {
    pageName: "Support",
    pageTitle: "Customer Support Services",
  };
  return (
      <div>
        <InnerPageBanner data={bannerData}/>
      </div>
  )
}
