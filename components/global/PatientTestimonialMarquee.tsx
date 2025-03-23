import { cn } from "@/lib/utils";
import { PatientTestimonialMarqueeProps } from "@/types";
import React, { ComponentPropsWithoutRef } from "react";
import Marquee from "react-fast-marquee";
import { VideoModal } from "./VideoModal";
import PatientSpeaksWrittenTestimonialCard from "./PatientSpeaksWrittenTestimonialCard";



const PatientTestimonialMarquee = (props: PatientTestimonialMarqueeProps) => {
  const { marqueeArray, className, ...rest } = props;

  return (
    <div className={cn("relative mt-6 overflow-hidden", className)} {...rest}>
      {/* Vignette Effect */}
      <div className="absolute inset-1 bg-gradient-to-r max-w-full pointer-events-none z-10 " />

      <Marquee speed={50} gradient={false} pauseOnHover className="my-4">
  {marqueeArray.map((item, index) => {
    if (item.type === "written") {
      return (
            <PatientSpeaksWrittenTestimonialCard key={index} testimonial={item}/>
      );
    }

    if (item.type === "video") {
      return (
          <VideoModal key={index} image={item.image} videoUrl={item.videoUrl} className="mx-5 lg:mx-12 " />
      );
    }

    return null;
  })}
      </Marquee>

      <Marquee speed={50} gradient={false} pauseOnHover direction="right">
  {marqueeArray.map((item, index) => {
    if (item.type === "written") {
      return (
            <PatientSpeaksWrittenTestimonialCard key={index} testimonial={item}/>
      );
    }

    if (item.type === "video") {
      return (
          <VideoModal key={index} image={item.image} videoUrl={item.videoUrl} className="mx-5 lg:mx-12 " />
      );
    }

    return null;
  })}
      </Marquee>

    </div>
  );
};

export default PatientTestimonialMarquee;
