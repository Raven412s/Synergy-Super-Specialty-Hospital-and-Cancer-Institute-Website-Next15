"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { ImageWithFallback } from "../global/ImageWithFallback";

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
    const [isHovered, setIsHovered] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const scroll = (direction: "left" | "right") => {
        if (carouselRef.current) {
            const containerWidth = carouselRef.current.offsetWidth;
            const scrollAmount = containerWidth / 3;
            const newScrollLeft = direction === "left"
                ? carouselRef.current.scrollLeft - scrollAmount
                : carouselRef.current.scrollLeft + scrollAmount;

            // Smooth scroll to position
            carouselRef.current.scrollTo({
                left: newScrollLeft,
                behavior: "smooth"
            });
        }
    };

    const scrollToItem = (index: number) => {
        if (carouselRef.current) {
            const containerWidth = carouselRef.current.offsetWidth;
            const itemWidth = containerWidth / 3; // Adjust based on your card width
            carouselRef.current.scrollTo({
                left: index * itemWidth,
                behavior: "smooth"
            });
        }
    };

    // Auto-scroll logic
    useEffect(() => {
        const startAutoScroll = () => {
            intervalRef.current = setInterval(() => {
                if (!isHovered && carouselRef.current) {
                    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
                    const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 10; // 10px buffer

                    if (isAtEnd) {
                        // If at end, instantly (but invisibly) scroll back to start
                        carouselRef.current.scrollTo({
                            left: 0,
                            behavior: 'auto'
                        });
                        // Then animate to first item
                        setTimeout(() => {
                            scrollToItem(1);
                        }, 50);
                    } else {
                        scroll("right");
                    }
                }
            }, 5000);
        };

        startAutoScroll();
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isHovered]);

    // Handle infinite scroll illusion
    const handleScroll = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 10; // 10px buffer

            if (isAtEnd) {
                // Instantly reset scroll position (user won't see this)
                carouselRef.current.scrollTo({
                    left: 0,
                    behavior: 'auto'
                });
            }
        }
    };

    return (
        <motion.div
            className="relative w-full px-6 py-10 hide-scrollbar"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            {/* Header Section */}
            <motion.div
                className="flex items-center justify-between flex-col sm:flex-row"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <h2 className="text-2xl lg:text-3xl font-semibold text-primary text-pretty lg:mb-6 md:mb-5 sm:mb-3 mb-1 font-display">
                    What's New At Synergy
                </h2>
                <Button variant="default" className="bg-indigo-800 text-fuchsia-50 px-6 py-2 rounded-full font-semibold">
                    EXPLORE MORE →
                </Button>
            </motion.div>

            {/* Carousel */}
            <div
                className="relative flex items-center"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
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
                    className="flex overflow-x-auto w-full py-3 space-x-4 scrollbar-hide snap-x snap-mandatory scroll-smooth hide-scrollbar max-h-max overflow-y-hidden"
                    onScroll={handleScroll}
                >
                    {[...newsData, newsData[0]].map((news, index) => (
                        <motion.div
                            key={`${index}-${news.title}`}
                            className="min-w-full sm:min-w-[45%] lg:min-w-[30%] min-h-72 rounded-xl overflow-hidden relative snap-start hide-scrollbar"
                            initial={{ y: 60, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            {/* Image */}
                            <ImageWithFallback
                                fallbackSrc='/fallback-image.webp'
                                src={news.image}
                                alt={news.title}
                                fill
                                className="w-full h-60 object-cover object-center hover:scale-110 transition-all duration-400 ease-in-out"
                            />
                            {/* Gradient + Text Overlay */}
                            <div className="absolute flex items-center justify-end flex-col inset-0 bg-gradient-to-t from-black/60 to-transparent p-4 pointer-events-none z-10">
                                <h3 className="text-base text-stone-50 font-medium text-center">
                                    {news.title}
                                </h3>
                            </div>
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
        </motion.div>
    );
}
