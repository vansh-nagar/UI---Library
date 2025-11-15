import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";

export const HeroSection = () => {
  return (
    <div className="  grid-cols-2 grid pt-[75px] h-screen w-full">
      <div className="  flex  flex-col items-start justify-center px-10 ">
        {" "}
        <span className=" text-8xl font-bold   text-shadow-2xs">
          Build Stunning Websites in Minutes
        </span>
        <span className=" text-xl mt-4  text-muted-foreground font-pixelify">
          {" "}
          Build beautiful, responsive interfaces in minutes. A pixel-perfect
          React component library for modern web apps.
        </span>
        <div className=" flex gap-3 mt-10">
          <Button className="font-pixelify">Browse Components</Button>
          <Button className="font-pixelify">Want Custom Components?</Button>
        </div>
      </div>
      <div className=" border relative m-4 mr-10 font-pixelify p-2">
        components preview
        <div className=" absolute  top-0 left-0 -translate-y-1/2 -translate-x-1/2">
          <Plus size={15} className=" text-muted-foreground" />
        </div>
        <div className="  absolute  top-0 right-0 -translate-y-1/2 translate-x-1/2">
          <Plus size={15} className=" text-muted-foreground" />
        </div>
        <div className="  absolute  bottom-0 left-0 translate-y-1/2 -translate-x-1/2">
          <Plus size={15} className=" text-muted-foreground" />
        </div>
        <div className=" absolute  bottom-0 right-0 translate-y-1/2 translate-x-1/2">
          <Plus size={15} className=" text-muted-foreground" />
        </div>
      </div>
    </div>
  );
};
