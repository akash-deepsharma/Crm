
"use client";
import BlogHome from "@/components/Blogs/BlogHome";
import Faq from "@/components/Common/Faq";
import About from "@/components/Home/About";
import Features from "@/components/Home/Features";
import HeroBanner from "@/components/Home/HeroBanner";
import Pricing from "@/components/Home/Pricing";
import Screenshot from "@/components/Home/Screenshot";
import Testimonials from "@/components/Home/Testimonials";
import UserTypes from "@/components/Home/UserTypes";

export default function Home() {


  return (
    <> 
                <HeroBanner/>
                <Features/>
                <About/>
                <Screenshot/>
                <Pricing/>
                <Testimonials/>
                <UserTypes/>
                <BlogHome/>
                <Faq/>
    </>
  );
}
