

import { getMetas } from "@/ApiCall/getMetasApi";
import { getHome } from "@/ApiCall/homeApi";
import { getRedirection } from "@/ApiCall/redirectionApi";
import BlogHome from "@/components/Blogs/BlogHome";
import Faq from "@/components/Common/Faq";
import About from "@/components/Home/About";
import Features from "@/components/Home/Features";
import HeroBanner from "@/components/Home/HeroBanner";
import Pricing from "@/components/Home/Pricing";
import Screenshot from "@/components/Home/Screenshot";
import Testimonials from "@/components/Home/Testimonials";
import UserTypes from "@/components/Home/UserTypes";
import { permanentRedirect } from "next/navigation";


export async function generateMetadata() {
  // Static slug for Become a seller page
  const slug = "home";
  const meta = await getMetas(slug);
  const baseUrl = process.env.NEXT_PUBLIC_baseUrl || "https://yourdomain.com";
   const canonicalUrl = `${baseUrl}/${slug}`;

  const page = await meta?.data?.[0];

  if (!page) {
    return {
      title: "Home  | My Website",
      description: "Welcome to My Website! Discover our services, latest updates, and explore how we can help you achieve your goals.",
    };
  }


  return {
    title: page.meta_title || "Home  | My Website",
    description:
      page.meta_description ||
      "Welcome to My Website! Discover our services, latest updates, and explore how we can help you achieve your goals.",
    keywords:
      page.meta_keywords ||
      "home, services, updates, My Website, explore, goals",
       alternates: {
      canonical: canonicalUrl,
    },
      robots:
      page.robotstatus === "true"
        ? "index, follow"
        : "noindex, nofollow",
    openGraph: {
      title: page.meta_title || "Home  | My Website",
      description:
        page.meta_description ||
        "Welcome to My Website! Discover our services, latest updates, and explore how we can help you achieve your goals.",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${slug}`,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_MEDIA_PATH}/${page.page_image}`,
          width: 1200,
          height: 630,
          alt: page.title || "Home  | My Website",
        },
      ],
      locale: "en_US",
    type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.meta_title || "Home  | My Website",
      description:
        page.meta_description ||
        "Welcome to My Website! Discover our services, latest updates, and explore how we can help you achieve your goals.",
      images: [`${process.env.NEXT_PUBLIC_MEDIA_PATH}/${page.page_image}`],
    },
  };
}

export default async function Home() {

// // const pathname = "/home";
//  const pathname = '/' + (params.slug || []).join('/');
//   console.log("Pathname:", pathname);


//   const redirectResp = await getRedirection({ path: pathname });

//   if (redirectResp && redirectResp.status === "redirect" && redirectResp.to) {
//     permanentRedirect(`/${redirectResp.to}`);
//   }




 const slug = "home";
    // const home_data = await getHome()
    const [home_data, metaData] = await Promise.all([getHome(), getMetas(slug)]);
  const dataHome = home_data || []
  const meta = metaData?.data?.[0];
  // console.log( "data home" , meta)

   
const bannerData = dataHome?.section1
const aboutData = dataHome?.section2
const screenshotData = dataHome?.section3
const UserTypeData = dataHome?.section4
const featuresData= dataHome?.section5



  return (
    <> 

     
       {meta?.schema_page && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: meta.schema_page }}
        />
      )}    

      <HeroBanner data={bannerData}/>
      <Features data={featuresData}/>
      <About data={aboutData}/>
      <Screenshot data={screenshotData}/>
      <Pricing/>
      <Testimonials/>
      <UserTypes data={UserTypeData}/>
      <BlogHome/>
      <Faq/>
    </>
  );
}
