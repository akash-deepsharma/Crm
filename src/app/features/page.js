import InnerPageBanner from '@/components/Common/InnerPageBanner'
import React from 'react'

export default function page() {
  const bannerData = {
    pageName: "Features",
    pageTitle: "Our Features That You Can Use In Your Business",
  };
  return (
      <>
      <InnerPageBanner data={bannerData} />
      </>
  )
}
