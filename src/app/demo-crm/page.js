import InnerPageBanner from '@/components/Common/InnerPageBanner'
import React from 'react'

export default function page() {
    const bannerData = { 
    pageName: "Demo CRM",
    pageTitle: "Try Our Demo CRM for Free",
    }
  return (
    <>
      <InnerPageBanner data={bannerData}/>
    </>
  )
}
