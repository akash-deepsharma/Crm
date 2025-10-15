import React from 'react'
import Layout from '@/app/layout'
import InnerPageBanner from '@/components/Common/InnerPageBanner'

export default function page() {
  const bannerData = {
    pageName: "Pricing",
    pageTitle: "Our Pricing Plans",
  };
  return (
      <div>
        <InnerPageBanner data={bannerData}/>
        
      </div>
  )
}
