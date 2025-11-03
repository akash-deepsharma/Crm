import AboutSection from '@/components/About/AboutSection';
import CallToAction from '@/components/Common/CallToAction';
import InnerPageBanner from '@/components/Common/InnerPageBanner'
import Subscriber from '@/components/Common/Subscriber';
import UserTypes from '@/components/Home/UserTypes';
import React from 'react'

export default function page() {

  const bannerData = {
    pageName: "Features any",
    pageTitle: "Our Features That You Can Use In Your Business",
  };

  return (
    <>

    <InnerPageBanner data={bannerData} />

    <AboutSection />

    <UserTypes/>

    <CallToAction/>

    <div className='section-padding pb-0 '>
        <Subscriber/>
    </div>

    </>
  )
}
