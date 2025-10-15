import InnerPageBanner from '@/components/Common/InnerPageBanner'
import React from 'react'

export default function  page() {
  const bannerData = {
    pageName: "How CRM Works",
    pageTitle: "Understanding How CRM Works",
  };
  return (
      <>
      <InnerPageBanner data={bannerData} />
      </>
  )
}
