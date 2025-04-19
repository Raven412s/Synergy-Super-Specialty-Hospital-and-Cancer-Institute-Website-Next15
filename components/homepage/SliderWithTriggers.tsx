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
import { useState } from "react";
import { ImageWithFallback } from "../global/ImageWithFallback";
import { Badge } from "../ui/badge";

export default function SliderWithTriggers() {
    // Filter to only get featured departments
    const featuredDepartments = departmentData.filter(dept => dept.isFeatured);
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredDepartments.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? featuredDepartments.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="w-fit  flex flex-col gap-5 relative items-center justify-center">
            {/* Trigger Buttons - Only show featured departments */}
            <div className="flex  overflow-x-auto gap-2 items-center justify-start w-full px-4 md:px-0 hide-scrollbar ">
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

            <Button
                size="icon"
                className="absolute hidden left-1 bottom-4 lg:block p-3 bg-indigo-800 text-white rounded-full shadow-lg hover:bg-indigo-700 z-20 size-10"
                onClick={prevSlide}
                title="move to the previous speciality slide"
            >
                <ChevronLeft className="size-4" />
            </Button>

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
                                >
                                    <SliderCard {...department} />
                                </motion.div>
                            ) : null
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <Button
                size="icon"
                className="absolute hidden right-1 bottom-4 lg:block p-3 bg-indigo-800 text-white rounded-full shadow-lg hover:bg-indigo-700 z-20 size-10"
                onClick={nextSlide}
                title="move to the next speciality slide"
            >
                <ChevronRight className="size-4" />
            </Button>

            {/* View All Specialties */}
            <div className="flex justify-center mt-6">
                <Link href="/services/all">
                    <Button variant={"default"} size={"xl"} className="px-6 py-3 rounded-full bg-indigo-800 text-white hover:bg-indigo-900">
                        View All Specialties
                    </Button>
                </Link>
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
                "max-w-5xl flex flex-col md:flex-row rounded-4xl p-2 sm:p-3 md:p-4 lg:p-6 bg-gradient-to-tl from-indigo-100 to-fuchsia-50 min-h-[350px] w-full shadow-md shadow-black/20 transition-shadow duration-300 border-2 border-neutral-300 hover:border-neutral-400",
                props.index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            )}
            onMouseEnter={() => setCardHovered(true)}
            onMouseLeave={() => setCardHovered(false)}
        >
                        <div className="md:w-3/8 w-full flex justify-center items-start py-5  aspect-square">
                <div className="w-full md:w-full overflow-hidden xl:rounded-4xl lg:rounded-3xl md:rounded-2xl sm:rounded-xl rounded-lg shadow-sm aspect-video">
                    {props.heroImage && (
                        <ImageWithFallback
                            fallbackSrc="/fallback-image.webp"
                            src={props.heroImage}
                            className={cn("object-cover w-full h-full transition-all duration-300", cardHovered && "scale-110")}
                            width={400}
                            height={350}
                            alt={props.name}
                            layout="responsive"
                            placeholder="blur"
                            blurDataURL={props.heroImage}
                            priority={props.index === 1}
                        />
                    )}
                </div>
            </div>

            <div className="flex flex-col md:w-6/8 w-full justify-between">
                <CardHeader className="w-7/8 px-0 mx-2">
                    <CardTitle className="font-display font-semibold text-left text-2xl">{props.name}</CardTitle>
                    <CardDescription className="hidden md:block text-neutral-700 text-base sm:text-lg md:text-lg leading-normal tracking-normal">
                        {props.heroTitle + "  " + props.heroSubtitle} ...
                        <br />
                        <Link href={`/services/${props.slug}`} className="underline"> Read More</Link>
                    </CardDescription>
                </CardHeader>
                <CardContent className="w-7/8">
                    <p className="font-medium text-base">Top Specialities & Procedures</p>
                    <div className="flex flex-wrap gap-2 py-4">
                        {props.treatments.items
                            .slice(0, showAll ? props.treatments.items.length : 2)
                            .map((item, index) => (
                                <Badge
                                    key={index}
                                    className="bg-transparent border border-fuchsia-400 text-fuchsia-600 text-xs"
                                >
                                    {item.title}
                                </Badge>
                            ))}

                        {props.treatments.items.length > 2 && (
                            <Badge
                                className="bg-transparent border border-fuchsia-400 text-fuchsia-600 text-xs cursor-pointer"
                                onClick={() => setShowAll(!showAll)}
                            >
                                {showAll ? (
                                    <MinusIcon className="size-3" />
                                ) : (
                                    <>
                                        <PlusIcon className="!size-2 -mr-1" />
                                        {props.treatments.items.length - 2}
                                    </>
                                )}
                                {showAll ? " Less" : " More"}
                            </Badge>
                        )}
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                    <div className="flex flex-row gap-4">
                        <Link href={"#"}>
                            <Button variant={"outline"} className="rounded-full border-gray-600/40 py-2 px-4 lg:px-8 lg:py-4 lg:text-lg hover:bg-synergy-pink">Find Doctor</Button>
                        </Link>
                        <Link href={`/services/${props.slug}` || "#"}>
                            <Button variant={"outline"} className="rounded-full border-gray-600/40 py-2 px-4 lg:px-8 lg:py-4 lg:text-lg hover:bg-synergy-blue">Explore More</Button>
                        </Link>
                    </div>
                </CardFooter>
            </div>
        </Card>
    );
};
