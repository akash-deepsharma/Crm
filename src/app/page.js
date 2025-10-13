
"use client";
import About from "@/components/Home/About";
import Features from "@/components/Home/Features";
import HeroBanner from "@/components/Home/HeroBanner";
import Pricing from "@/components/Home/Pricing";
import Screenshot from "@/components/Home/Screenshot";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  return (
    <> 
               <HeroBanner/>
                <Features/>
                <About/>
                <Screenshot/>
                <Pricing/>

    </>
  );
}
