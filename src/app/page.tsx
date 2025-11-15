import { HeroSection } from "@/components/mine/landing-page/herosection";
import Navbar from "@/components/mine/landing-page/navbar";
import { Sec1 } from "@/components/mine/landing-page/sec1";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Sec1 />
    </div>
  );
};

export default page;
