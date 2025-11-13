import { getSingleFeature } from '@/ApiCall/featuresApi';
import AboutSection from '@/components/About/AboutSection';
import CallToAction from '@/components/Common/CallToAction';
import InnerPageBanner from '@/components/Common/InnerPageBanner'
import Subscriber from '@/components/Common/Subscriber';
import UserTypes from '@/components/Home/UserTypes';
import React from 'react'


export async function generateMetadata({ params }) {
  const slug = await params.slug;


  const featureData = await getSingleFeature(slug);
  const baseUrl = process.env.NEXT_PUBLIC_baseUrl || "https://yourdomain.com";
   const canonicalUrl = `${baseUrl}/features/${slug}`;

  if (!featureData || !featureData.meta) {
    return {
      title: "Feature Not Found | My Website",
      description: "The requested blog post could not be found.",
    };
  }

  const featureItem = featureData.meta;

  return {
    title: featureItem.meta_title || featureItem.title,
    description: featureItem.meta_description || featureItem.excerpt || featureItem.title,
    keywords: featureItem.meta_keywords || "feature, articles, news",
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: featureItem.meta_title || featureItem.title,
      description: featureItem.meta_description || featureItem.excerpt || "",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/features/${slug}`,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_MEDIA_PATH}/${featureItem.featured_image}`,
          width: 1200,
          height: 630,
          alt: featureItem.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: featureItem.meta_title || featureItem.title,
      description: featureItem.meta_description || featureItem.excerpt || "",
      images: [`${process.env.NEXT_PUBLIC_MEDIA_PATH}/${featureItem.featured_image}`],
    },
  };
}




export default async function page({ params }) {

  const slug = params.slug;
  const featureData = await getSingleFeature(slug);
  
  const aboutData = featureData?.section1
  const metas = featureData?.meta
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
    {metas?.schema_page && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: metas.schema_page }}
        />
      )}

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
