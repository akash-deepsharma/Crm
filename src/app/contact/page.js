import { contactGetApi } from '@/ApiCall/contactApi';
import InnerPageBanner from '@/components/Common/InnerPageBanner'
import ContactDetails from '@/components/Contact/ContactDetails';
import ContactIframe from '@/components/Contact/ContactIframe';
import React from 'react'


export default async function page() {

  const ContactContent = await contactGetApi();
  // console.log("contactGetApi",ContactContent)



  const bannerData = {
    pageName: "Contact Us",
    pageTitle: "Get in Touch with Us",
  };


  return (
      <>
        <InnerPageBanner data={bannerData}/>
        <ContactDetails data={ContactContent}/>
        <ContactIframe data={ContactContent}/>

      </>
  )
}
