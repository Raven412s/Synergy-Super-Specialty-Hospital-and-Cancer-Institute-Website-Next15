"use client";
import { AnimatePresence, motion } from "framer-motion";
import { } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MinusIcon, MoveRightIcon, PlusIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { slides } from "@/app/(Home-Page)/_data";

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
      <div className="w-full flex flex-col gap-5  ">
        {/* Triggers */}
        <div className="flex overflow-x-auto gap-2 items-center justify-start w-full px-4 md:px-0">
          <div className="flex  justify-start gap-2 my-4 w-full md:w-auto">
            {slides.map((slide, index) => (
              <Button
                key={slide.id}
                className={cn(
                  "px-4 py-2 rounded-full border-2 min-w-max cursor-pointer hover:bg-fuchsia-400 hover:text-fuchsia-50 text-sm uppercase tracking-wider font-display font-medium",
                  currentIndex === index
                    ? "bg-fuchsia-500 text-fuchsia-50 border-fuchsia-500"
                    : "bg-transparent text-fuchsia-400 border-fuchsia-400"
                )}
                onClick={() => setCurrentIndex(index)}
              >
                {`${slide.triggerLabel}`}
              </Button>
            ))}
          </div>

          {/* Button Link (Hidden on Small Screens) */}
          <Link href={"/centers-of-excellence"} className="hidden md:block">
            <Button
              variant={"default"}
              size={"icon"}
              className="rounded-full cursor-pointer border-2 hover:bg-fuchsia-400 hover:text-fuchsia-50 p-2 size-10 bg-transparent text-fuchsia-400 border-fuchsia-400"
            >
              <PlusIcon className="size-4" />
            </Button>
          </Link>
        </div>

        {/* Slider with Navigation Buttons */}
        <div className="flex items-center justify-between w-full">
          {/* Left Button (Hidden on Small Screens) */}
          <Button
            variant={"default"}
            size={"icon"}
            className="hidden md:flex z-10 p-6 mx-3 bg-fuchsia-500 text-white items-center justify-center  shadow-lg hover:bg-fuchsia-600 transition rounded-full"
            onClick={prevSlide}
          >
            <ChevronLeft className="size-6" />
          </Button>

          <div className="relative w-full px-4 md:px-0 ">
            <div className="relative w-full">
              <AnimatePresence>
                <motion.div
                  key={slides[currentIndex].id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                //   transition={{ duration: 0.5 }}
                  className="flex items-start  justify-center h-max  text-xl font-bold w-full md:max-w-full max-w-lg mx-auto rounded-2xl "
                >
                  <SliderCard
                    id={slides[currentIndex].id}
                    specialties={slides[currentIndex].specialties}
                    label={slides[currentIndex].triggerLabel}
                    readMoreLink={slides[currentIndex].readMoreLink}
                    findDoctorLink={slides[currentIndex].findDoctorLink}
                    description={slides[currentIndex].description}
                    imgSrc={slides[currentIndex].imgSrc}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Button (Hidden on Small Screens) */}
          <Button
            variant={"default"}
            size={"icon"}
            className="hidden md:flex z-10 p-6 mx-3 bg-fuchsia-500 text-white items-center justify-center  shadow-lg hover:bg-fuchsia-600 transition rounded-full"
            onClick={nextSlide}
          >
            <ChevronRight className="size-6" />
          </Button>
        </div>
      </div>
    );
  }


const SliderCard = ({id, specialties, label, readMoreLink, findDoctorLink,description, imgSrc}:{id: number, specialties : string[], label: string, readMoreLink: string, findDoctorLink: string, description: string, imgSrc: string}) => {
    const [showAll, setShowAll] = useState(false);
    const [cardHovered, setCardHovered] = useState(false);

    return (
        <Card
            className={cn(
                "flex flex-col md:flex-row rounded-2xl overflow-hidden p-6 shadow-lg bg-white min-h-[300px]  md:mt-0 w-full border border-white hover:border-blue-950 relative size-full  ",
                (id % 2) === 0 ? "md:flex-row" : "md:flex-row-reverse"
            )}
            onMouseEnter={() => setCardHovered(true)}
            onMouseLeave={() => setCardHovered(false)}
        >
                       {/* Right Section (Image) */}
                       <div className="md:w-2/5 w-full flex justify-center items-center">
                <div className="w-full md:w-[90%] overflow-hidden rounded-4xl">
                    {imgSrc && (
                        <Image
                            src={imgSrc}
                            className={cn("object-cover size-full transition-all duration-300", cardHovered && "scale-110")}
                            width={400}
                            height={250}
                            alt={label}
                            layout="responsive"
                            placeholder="blur"
                            loading={id !== 1 ? "lazy" : "eager"}
                            blurDataURL={imgSrc}
                            priority={id === 1} // Load first slide image faster
                        />
                    )}
                </div>
            </div>

            {/* Left Section */}
            <div className="flex flex-col md:w-3/5 w-full justify-between">
                <CardHeader className="w-full">
                    <CardTitle className="font-display font-semibold text-left text-primary">
                        {label}
                    </CardTitle>
                    <CardDescription className="text-base font-sans font-medium leading-7 tracking-wide text-neutral-600 hidden md:block">
                        {description.substring(0, 250) + "..."}
                        {description && <Link href={readMoreLink} className="underline-offset-2 underline"> Read More</Link>}
                    </CardDescription>
                </CardHeader>

                <CardContent className="w-full">
                    <p className="font-medium text-base">Top Specialities & Procedures</p>
                    <div className="flex flex-wrap gap-2">
                        {(showAll ? specialties : specialties.slice(0, 2)).map((specialty, index) => (
                            <Badge key={index} className="bg-transparent border border-fuchsia-100 text-fuchsia-400 text-sm">
                                {specialty}
                            </Badge>
                        ))}
                        {specialties.length > 2 && (
                            <Button
                                variant="outline"
                                size="default"
                                className="rounded-md flex items-center border-fuchsia-100 text-fuchsia-400 hover:bg-transparent text-sm"
                                onClick={() => setShowAll(!showAll)}
                            >
                                {showAll ? <MinusIcon className="size-3" /> : <><PlusIcon className="size-3 mr-1" />{specialties.length - 2} </>}
                                {showAll ? "Less" : "More"}
                            </Button>
                        )}
                    </div>
                </CardContent>

                <CardFooter className="flex flex-col w-full">
                    <Separator className="bg-neutral-200 my-6 w-full" />
                    <div className="flex flex-col md:flex-row gap-4">
                    <Link href={findDoctorLink || "#"} aria-disabled={!findDoctorLink} >
                            <Button variant="outline" size="lg" className="hover:bg-fuchsia-500 rounded-full !py-5 !px-6 text-lg w-full md:w-auto">
                                Find Doctor <MoveRightIcon />
                            </Button>
                        </Link>
                        <Link href={readMoreLink || "#"} aria-disabled={!readMoreLink}>
                            <Button variant="outline" size="lg" className="hover:bg-indigo-800 rounded-full !py-5 !px-6 text-lg w-full md:w-auto">
                                Explore More <MoveRightIcon />
                            </Button>
                        </Link>
                    </div>
                </CardFooter>
            </div>


        </Card>
    );
};
