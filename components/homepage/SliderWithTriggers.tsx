"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  MinusIcon,
  MoveRightIcon,
  PlusIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { slides } from "@/app/(Home-Page)/_data";
import { SliderCardProps } from "@/types";

export default function SliderWithTriggers() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full flex flex-col gap-5">
      {/* Trigger Buttons */}
      <div className="flex overflow-x-auto gap-2 items-center justify-start w-full px-4 md:px-0 hide-scrollbar">
        {slides.map((slide, index) => (
          <Button
            key={slide.id}
            className={cn(
              "px-4 py-2 rounded-full border-2 min-w-max cursor-pointer",
              currentIndex === index
                ? "bg-fuchsia-500 text-white border-fuchsia-500"
                : "bg-transparent text-fuchsia-400 border-fuchsia-400 hover:bg-fuchsia-400 hover:text-white"
            )}
            onClick={() => setCurrentIndex(index)}
          >
            {slide.label}
          </Button>
        ))}
      </div>

        <Button
          size="icon"
          className="absolute hidden left-6 top-1/2 lg:block -translate-y-1/12 p-3 bg-indigo-800 text-white rounded-full shadow-lg hover:bg-indigo-700 z-20 size-14"
          onClick={prevSlide}
        >
          <ChevronLeft  className="size-8"/>
        </Button>

      {/* Slider */}
      <div className="relative flex items-center justify-center w-full overflow-hidden">

        <div className="w-full flex justify-center items-center overflow-hidden rounded-2xl">
          <AnimatePresence mode="wait">
            {slides.map((slide, index) =>
              index === currentIndex ? (
                <motion.div
                  key={slide.id}
                  className="w-full shrink-0"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                >
                  <SliderCard {...slide} />
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </div>

      </div>

        <Button
          size="icon"
          className="absolute hidden right-6 top-1/2 lg:block -translate-y-1/12 p-3 bg-indigo-800 text-white rounded-full shadow-lg hover:bg-indigo-700 z-20 size-14"
          onClick={nextSlide}
        >
          <ChevronRight className="size-8"/>
        </Button>

      {/* View All Specialties */}
      <div className="flex justify-center mt-6">
        <Link href="/all-specialties">
          <Button variant={"default"} size={"xl"} className="px-6 py-3 rounded-full bg-indigo-800 text-white hover:bg-indigo-900">
            View All Specialties
          </Button>
        </Link>
      </div>
    </div>
  );
}

const SliderCard = ({
  id,
  specialties,
  label,
  readMoreLink,
  findDoctorLink,
  description,
  imgSrc,
}: SliderCardProps) => {
  const [showAll, setShowAll] = useState(false);
  const [cardHovered, setCardHovered] = useState(false);

  return (
    <Card
      className={cn(
        "flex flex-col md:flex-row rounded-2xl overflow-hidden p-2 sm:p-3 md:p-4 lg:p-6 shadow-lg bg-white min-h-[350px] w-full border border-white hover:border-blue-950 relative",
        id % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      )}
      onMouseEnter={() => setCardHovered(true)}
      onMouseLeave={() => setCardHovered(false)}
    >
      <div className="md:w-2/5 w-full flex justify-center items-center ">
        <div className="w-full md:w-[90%] overflow-hidden xl:rounded-4xl lg:rounded-3xl md:rounded-2xl sm:rounded-xl rounded-lg">
          {imgSrc && (
            <Image
              src={imgSrc}
              className={cn("object-cover w-full transition-all duration-300", cardHovered && "scale-110")}
              width={400}
              height={250}
              alt={label}
              layout="responsive"
              placeholder="blur"
              blurDataURL={imgSrc}
              priority={id === 1}
            />
          )}
        </div>
      </div>

      <div className="flex flex-col md:w-3/5 w-full justify-between">
        <CardHeader className="w-full px-0 mx-2">
          <CardTitle className="font-display font-semibold text-left text-xl">{label}</CardTitle>
          <CardDescription className="hidden md:block text-neutral-600">
            {description.substring(0, 250)}...
            <Link href={readMoreLink} className="underline"> Read More</Link>
          </CardDescription>
        </CardHeader>
        <CardContent className="w-full">
                    <p className="font-medium text-base">Top Specialities & Procedures</p>
                    <div className="flex flex-wrap gap-2 py-4">
                        {(showAll ? specialties : specialties.slice(0, 2)).map((specialty, index) => (
                            <Badge key={index} className="bg-transparent border border-fuchsia-100 text-fuchsia-400 text-xs">
                                {specialty}
                            </Badge>
                        ))}
                        {specialties.length > 2 && (
                            <Badge
                                className="bg-transparent border border-fuchsia-100 text-fuchsia-400 text-xs cursor-pointer"
                                onClick={() => setShowAll(!showAll)}
                            >
                                {showAll ? <MinusIcon className="size-3" /> : <><PlusIcon className="size-3 mr-1" />{specialties.length - 2} </>}
                                {showAll ? "Less" : "More"}
                            </Badge>
                        )}
                    </div>
                </CardContent>
        <CardFooter className="flex flex-col gap-4">
            <Separator className="bg-neutral-300 "/>
      <div className="flex flex-row gap-4">
      <Link href={findDoctorLink || "#"}>
            <Button variant={"outline"} className="rounded-full py-2 px-4 lg:px-8 lg:py-4 lg:text-lg hover:bg-fuchsia-500">Find Doctor</Button>
          </Link>
          <Link href={readMoreLink || "#"}>
            <Button variant={"outline"}  className="rounded-full py-2 px-4 lg:px-8 lg:py-4 lg:text-lg hover:bg-indigo-800">Explore More</Button>
          </Link>
      </div>
        </CardFooter>
      </div>
    </Card>
  );
};
