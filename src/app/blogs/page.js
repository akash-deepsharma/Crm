import InnerPageBanner from '@/components/Common/InnerPageBanner'
import React from 'react'

export default function page() {
  const bannerData = {
    pageName: "Blogs",
    pageTitle: "Latest News & Articles",
  };
  return (
      <>
      <InnerPageBanner data={bannerData}/>

      </>
  )
}
