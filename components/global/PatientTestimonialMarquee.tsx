import { cn } from "@/lib/utils";
import { PatientTestimonialMarqueeProps } from "@/types";
import React from "react";
import Marquee from "react-fast-marquee";
import { VideoModal } from "./VideoModal";
import PatientSpeaksWrittenTestimonialCard from "./PatientSpeaksWrittenTestimonialCard";

const PatientTestimonialMarquee = (props: PatientTestimonialMarqueeProps) => {
  const { marqueeArray, className, ...rest } = props;

  return (
    <div className={cn("relative mt-6 overflow-hidden space-y-6", className)} {...rest}>
      <Marquee speed={60}  pauseOnHover className="pt-4 ">
        {marqueeArray.map((item, index) => (
          <div key={index} className="mx-4">
            {item.type === "written" && (
              <PatientSpeaksWrittenTestimonialCard testimonial={item} />
            )}
            {item.type === "video" && (
              <VideoModal
                image={item.image}
                videoUrl={item.videoUrl}
                className="w-full"
              />
            )}
          </div>
        ))}
      </Marquee>

      <Marquee speed={60}  pauseOnHover direction="right" className=" pb-4 ">
        {marqueeArray.map((item, index) => (
          <div key={index} className="mx-4">
            {item.type === "written" && (
              <PatientSpeaksWrittenTestimonialCard testimonial={item} />
            )}
            {item.type === "video" && (
              <VideoModal
                image={item.image}
                videoUrl={item.videoUrl}
                className="w-full"
              />
            )}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default PatientTestimonialMarquee;
