"use client"
import { useEffect, useState, useRef } from "react";
import { FloatingBarWrapper } from "../global/FloatingBarWrapper";

const HeroSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVideoLoaded(true);
          observer.disconnect(); // Stop observing after loading
        }
      },
      { threshold: 0.3 } // Load when 30% of the video is in view
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="banner" className="relative min-h-screen w-full">
      {!isVideoLoaded ? (
        // Placeholder Image (Replace with actual optimized image)
        <img
          src="/Banner-placeholder.jpg"
          alt="Synergy Hospital Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          aria-label="Promotional video showcasing Synergy Hospital"
        >
          <source src="/Banner.webm" type="video/webm" />
          <source src="/Banner.mp4" type="video/mp4" />
        </video>
      )}

      <FloatingBarWrapper />
      <div className="absolute bottom-5 w-full flex justify-center px-4">
        <a
          href="#specialties"
          className="text-white bg-black px-4 py-2 rounded-lg hover:bg-gray-800 transition text-sm sm:text-base"
        >
          Explore More
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
