import { getSingleFeature } from '@/ApiCall/featuresApi';
import AboutSection from '@/components/About/AboutSection';
import CallToAction from '@/components/Common/CallToAction';
import InnerPageBanner from '@/components/Common/InnerPageBanner'
import Subscriber from '@/components/Common/Subscriber';
import UserTypes from '@/components/Home/UserTypes';
import React from 'react'

export default async function page({ params }) {

  const slug = params.slug;
  const featureData = await getSingleFeature(slug);
  console.log("featur data show", featureData)
  
  const aboutData = featureData?.section1
const userTypeData = featureData?.featuresdetails

const Title = params.slug.replace(/\//g, ""); 
const pathParts = Title.split("-");
const formattedTitle = pathParts.map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
  
  const bannerData = {
    pageName: `${formattedTitle}` || "Features",  
    pageTitle: `${aboutData?.maintitle}` || "Our Features That You Can Use In Your Business",
  };


  return (
    <>

    <InnerPageBanner data={bannerData} />

    <AboutSection data={aboutData} />

    <UserTypes data={userTypeData}/>

    <CallToAction/>

    <div className='section-padding pb-0 '>
        <Subscriber/>
    </div>

    </>
  )
}
