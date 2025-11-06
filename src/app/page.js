
// "use client";
import { getHome } from "@/ApiCall/homeApi";
// import { getFAQData } from "@/ApiCall/pagesApi";
import BlogHome from "@/components/Blogs/BlogHome";
import Faq from "@/components/Common/Faq";
import About from "@/components/Home/About";
import Features from "@/components/Home/Features";
import HeroBanner from "@/components/Home/HeroBanner";
import Pricing from "@/components/Home/Pricing";
import Screenshot from "@/components/Home/Screenshot";
import Testimonials from "@/components/Home/Testimonials";
import UserTypes from "@/components/Home/UserTypes";

export default async function Home() {

    const home_data = await getHome()
  const dataHome = home_data || []
  // console.log( "data home" , dataHome)

   
const bannerData = dataHome?.section1
const aboutData = dataHome?.section2
const screenshotData = dataHome?.section3
const UserTypeData = dataHome?.section4



  return (
    <> 
                <HeroBanner data={bannerData}/>
                <Features/>
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
