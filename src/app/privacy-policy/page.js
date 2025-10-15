import InnerPageBanner from '@/components/Common/InnerPageBanner'
import React from 'react'

export default function page() {
    const bannerData = {
    pageName: "Privacy Policy",
    pageTitle: "Our Commitment to Your Privacy",
    }
  return (
      <div>
        <InnerPageBanner data={bannerData}/>
      </div>
  )
}
