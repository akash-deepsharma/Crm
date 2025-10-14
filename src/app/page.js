
"use client";
import BlogHome from "@/components/Blogs/BlogHome";
// import Subscriber from "@/components/Common/Subscriber";
import About from "@/components/Home/About";
import Features from "@/components/Home/Features";
import HeroBanner from "@/components/Home/HeroBanner";
import Pricing from "@/components/Home/Pricing";
import Screenshot from "@/components/Home/Screenshot";
import Testimonials from "@/components/Home/Testimonials";
import { useEffect, useState } from "react";

export default function Home() {


    const [showHero, setShowHero] = useState(false);

        useEffect(() => {
          const timer = setTimeout(() => {
            setShowHero(true);
          }, 20000);

          return () => clearTimeout(timer);
        }, []);


  return (
    <> 
               {showHero && <HeroBanner/>}
                <Features/>
                <About/>
                <Screenshot/>
                <Pricing/>
                <Testimonials/>
                <BlogHome/>
    </>
  );
}
