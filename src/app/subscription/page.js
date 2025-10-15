import React from 'react'
import Layout from '@/app/layout'

export default function page() {
  const bannerData = {
    pageName: "Subscription",
    pageTitle: "Our Subscription Plans",
  };
  return (
      <>
        <InnerPageBanner data={bannerData}/>
      </>
  )
}
