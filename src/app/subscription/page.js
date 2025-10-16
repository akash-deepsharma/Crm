import React from 'react'
import Layout from '@/app/layout'
import InnerPageBanner from '@/components/Common/InnerPageBanner';

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
