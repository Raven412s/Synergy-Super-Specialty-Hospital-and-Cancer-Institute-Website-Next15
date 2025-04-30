"use client";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { departmentData } from "@/data/departmentData";
import { cn } from "@/lib/utils";
import { DepartmentData } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import {
    ChevronLeft,
    ChevronRight,
    MinusIcon,
    PlusIcon,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ImageWithFallback } from "../global/ImageWithFallback";
import { Badge } from "../ui/badge";

export default function SliderWithTriggers() {
    // Filter to only get featured departments
    const featuredDepartments = departmentData.filter(dept => dept.isFeatured);
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredDepartments.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? featuredDepartments.length - 1 : prevIndex - 1
        );
    };

    // Auto-rotation with hover pause
    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (!isHovered) { // Only auto-rotate if not hovered
            interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredDepartments.length);
            }, 5000);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isHovered, featuredDepartments.length]); // ✅ Only depend on isHovered and data length

    return (
        <div className="w-full  flex flex-col gap-5 relative items-center justify-center ">
            {/* Trigger Buttons - Only show featured departments */}
            <div className="flex items-center justify-normal">
                <div className="flex  overflow-x-auto gap-2 items-center  justify-start md:w-full md:max-w-5xl w-screen px-4 md:px-0 hide-scrollbar overflow-hidden ">
                    {featuredDepartments.map((slide, index) => (
                        <Button
                            key={slide.id}
                            className={cn(
                                "px-4 py-2 rounded-full border-2 min-w-max cursor-pointer",
                                currentIndex === index
                                    ? "bg-primary text-white border-primary"
                                    : "bg-transparent text-fuchsia-700 border-fuchsia-700 hover:bg-primary/50 hover:backdrop-blur-sm hover:text-white hover:border-primary/50 hover:shadow-blob"
                            )}
                            onClick={() => setCurrentIndex(index)}
                        >
                            {slide.name}
                        </Button>
                    ))}
                </div>
                <span>
                    <ChevronRight className="size-6" />
                </span>
            </div>



            {/* Slider - Only show featured departments */}
            <div className="relative flex items-center justify-center w-full overflow-hidden">
                <div className="w-full flex justify-center items-center overflow-hidden rounded-2xl">
                    <AnimatePresence mode="wait">
                        {featuredDepartments.map((department, index) =>
                            index === currentIndex ? (
                                <motion.div
                                    key={department.id}
                                    className="w-full p-3 mx-auto flex justify-center items-center"
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 0.5 }}
                                    onMouseEnter={() => setIsHovered(true)}  // Pause on hover
                                    onMouseLeave={() => setIsHovered(false)} // Resume on leave
                                >
                                    <SliderCard {...department} />
                                </motion.div>
                            ) : null
                        )}
                    </AnimatePresence>
                </div>
            </div>


            {/* View All Specialties */}
            <div className="flex justify-center gap-6 items-center mt-6">
                <Button
                    size="icon"
                    className=" hidden md:flex md:items-center md:justify-center opacity-90 hover:opacity-100 lg:block p-3 bg-indigo-800 text-white rounded-full shadow-lg hover:bg-indigo-700 z-20 size-12"
                    onClick={prevSlide}
                    title="move to the previous speciality slide"
                >
                    <ChevronLeft className="size-6" />
                </Button>
                <Link href="/services/all">
                    <Button variant={"default"} size={"xl"} className="px-6 py-3 opacity-90 hover:opacity-100 rounded-full bg-indigo-800 text-white hover:bg-indigo-900">
                        View All Specialties
                    </Button>
                </Link>
                <Button
                    size="icon"
                    className=" hidden md:flex md:items-center md:justify-center opacity-90 hover:opacity-100  lg:block p-3 bg-indigo-800 text-white rounded-full shadow-lg hover:bg-indigo-700 z-20 size-12"
                    onClick={nextSlide}
                    title="move to the next speciality slide"
                >
                    <ChevronRight className="size-6" />
                </Button>
            </div>
        </div>
    );
}

// SliderCard component remains exactly the same
const SliderCard = (props: DepartmentData) => {
    const [showAll, setShowAll] = useState(false);
    const [cardHovered, setCardHovered] = useState(false);

    return (
        <Card
            className={cn(
                "w-full max-w-3xl flex flex-col rounded-xl p-4 bg-white border border-neutral-200 hover:border-neutral-300 shadow-sm hover:shadow-md transition-all duration-300",
                props.index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            )}
            onMouseEnter={() => setCardHovered(true)}
            onMouseLeave={() => setCardHovered(false)}
        >
            {/* Image Section */}
            <div className="w-full md:w-2/5 flex justify-center items-start aspect-square">
                <div className="w-full h-full overflow-hidden rounded-lg shadow-sm relative">
                    {props.heroImage && (
                        <ImageWithFallback
                            fallbackSrc="/fallback-image.webp"
                            src={props.heroImage}
                            className={cn(
                                "object-cover object-center w-full h-full transition-all duration-300",
                                cardHovered && "md:scale-105"
                            )}
                            fill
                            alt={props.name}
                            priority={props.index === 1}
                        />
                    )}
                </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col w-full md:w-3/5 justify-between px-0 md:px-4 pt-4 md:pt-0">
                <CardHeader className="w-full px-0">
                    <CardTitle className="font-semibold text-left text-xl sm:text-2xl mb-1">
                        {props.name}
                    </CardTitle>
                    <CardDescription className="text-neutral-600 text-sm leading-normal mb-2 line-clamp-3">
                        {props.heroTitle + " " + props.heroSubtitle} ...
                        <Link href={`/services/${props.slug}`} className="ml-2 underline hover:text-primary">
                            Read More
                        </Link>
                    </CardDescription>
                </CardHeader>

                <CardContent className="w-full !p-0">
                    <p className="font-medium text-sm mb-2">Top Specialities & Procedures</p>
                    <div className="flex flex-wrap gap-2 py-1">
                        {props.treatments.items
                            .slice(0, showAll ? props.treatments.items.length : 3)
                            .map((item, index) => (
                                <Badge
                                    key={index}
                                    variant="outline"
                                    className="text-xs text-primary border-primary/50"
                                >
                                    {item.title}
                                </Badge>
                            ))}

                        {props.treatments.items.length > 3 && (
                            <Badge
                                variant="outline"
                                className="text-xs cursor-pointer text-primary border-primary/50"
                                onClick={() => setShowAll(!showAll)}
                            >
                                {showAll ? (
                                    <MinusIcon className="size-3 mr-1" />
                                ) : (
                                    <PlusIcon className="size-3 mr-1" />
                                )}
                                {showAll ? "Less" : `${props.treatments.items.length - 3} more`}
                            </Badge>
                        )}
                    </div>
                </CardContent>

                <CardFooter className="flex flex-col gap-2 !px-0 !pb-0 mt-4">
                    <div className="flex flex-col sm:flex-row gap-2 w-full">
                        <Link href={"#"} className="w-full">
                            <Button
                                variant={"outline"}
                                className="w-full rounded-lg border-gray-300 py-1 px-3 text-sm hover:bg-synergy-pink/10 hover:border-synergy-pink/50"
                            >
                                Find Doctor
                            </Button>
                        </Link>
                        <Link href={`/services/${props.slug}` || "#"} className="w-full">
                            <Button
                                variant={"default"}
                                className="w-full rounded-lg bg-synergy-blue hover:bg-synergy-blue/90 text-white py-1 px-3 text-sm"
                            >
                                Explore More
                            </Button>
                        </Link>
                    </div>
                </CardFooter>
            </div>
        </Card>
    );
};
