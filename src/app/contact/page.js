import InnerPageBanner from '@/components/Common/InnerPageBanner'
import ContactDetails from '@/components/Contact/ContactDetails';
import ContactIframe from '@/components/Contact/ContactIframe';
import React from 'react'


export default function page() {
  const bannerData = {
    pageName: "Contact Us",
    pageTitle: "Get in Touch with Us",
  };
  return (
      <>
        <InnerPageBanner data={bannerData}/>
        <ContactDetails/>
        <ContactIframe/>
  
      </>
  )
}
