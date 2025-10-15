import InnerPageBanner from '@/components/Common/InnerPageBanner'
import React from 'react'

export default function page() {
  const bannerData = {
    pageName: "Services",
    pageTitle: "See What We Can Do For You",
  };
  return (
      <>
      <InnerPageBanner data={bannerData} />
      </>
  )
}
