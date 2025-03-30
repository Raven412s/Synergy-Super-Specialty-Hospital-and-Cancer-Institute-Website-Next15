"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ChevronRightCircleIcon } from "lucide-react";

const newsData = [
    {
        title: "Synergy & University of Leicester launch Digital Health Centre in India",
        image: "/news1.webp",
    },
    {
        title: "Synergy Neuro Conclave 2024",
        image: "/news2.webp",
    },
    {
        title: "Synergy Hospitals completes 500 robotic cardiac procedures.",
        image: "/news3.webp",
    },
    {
        title: "Synergy Expands AI-based Health Analytics",
        image: "/news4.webp",
    },
];

export default function NewsSlider() {
    const carouselRef = useRef<HTMLDivElement>(null);
    
    const scroll = (direction: "left" | "right") => {
        if (carouselRef.current) {
            const containerWidth = carouselRef.current.offsetWidth;
            const scrollAmount = containerWidth / 3; // Scroll one full card width
            carouselRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <div className="relative w-full px-6 py-10 hide-scrollbar">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl lg:text-3xl font-semibold text-primary text-pretty lg:mb-6 md:mb-5 sm:mb-3 mb-1 font-display">What’s New At Synergy</h2>
                <Button variant="default" className="bg-indigo-800 text-fuchsia-50 px-6 py-2 rounded-full font-semibold">
                    EXPLORE MORE →
                </Button>
            </div>
            {/* Carousel */}
            <div className="relative flex items-center">
                {/* Left Scroll Button */}
                <Button
                    onClick={() => scroll("left")}
                    variant="outline"
                    size="xl"
                    title="Slide left by one card."
                    className="absolute size-12 !p-5 left-0 z-10 hidden md:flex rounded-full bg-fuchsia-300 shadow-md hover:bg-fuchsia-100 hover:text-primary text-primary"
                >
                    <ChevronLeft className="size-6" />
                </Button>

                {/* Scrollable Container */}
                <div
                    ref={carouselRef}
                    className="flex overflow-x-auto w-full py-3 space-x-4 scrollbar-hide snap-x snap-mandatory scroll-smooth hide-scrollbar"
                >
                    {newsData.map((news, index) => (
                        <motion.div
                            key={index}
                            className="min-w-full sm:min-w-[45%] lg:min-w-[30%] min-h-72 rounded-xl overflow-hidden relative snap-start hide-scrollbar  duration-400 transition-all"
                            whileHover="hover"
                            initial="initial"
                        >
                            {/* Image */}
                            <Image
                                src={news.image}
                                alt={news.title}
                                fill
                                className="w-full h-60 object-cover object-center hover:scale-110  duration-400 transition-all ease-in-out"
                            />
                            {/* Gradient + Text Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-primary/90 from-20% via-transparent to-transparent p-4 pointer-events-none z-10">
                                <p className="text-white font-sans font-bold">Latest Update</p>
                                <h3 className="text-lg text-white font-sans font-semibold">
                                    {news.title}
                                </h3>
                            </div>

                            {/* Red Animated Button */}
                            <motion.div
                                variants={{
                                    initial: { x: '-100%' },
                                    hover: { x: 10 },
                                }}
                                transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                                className="absolute bottom-4 text-white z-40 rounded-full  p-0 m-0"
                            >
                                <ChevronRightCircleIcon className="size-12 stroke-1 m-0 p-0 fill-synergy-pink/90"/>
                            </motion.div>

                        </motion.div>
                    ))}
                </div>

                {/* Right Scroll Button */}
                <Button
                    onClick={() => scroll("right")}
                    variant="outline"
                    size="xl"
                    title="Slide Right by one card."
                    className="absolute size-12 !p-5 right-0 z-10 hidden md:flex rounded-full bg-fuchsia-300 shadow-md hover:bg-fuchsia-100 hover:text-primary text-primary"
                >
                    <ChevronRight className="size-6" />
                </Button>
            </div>
        </div>
    );
}
