"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SliderWithTriggers from "./SliderWithTriggers";


export const SpecialitiesSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="specialties"
            ref={ref}
            className="min-h-screen w-full bg-gradient-to-b from-transparent via-[#dceaff30] to-fuchsia-100 px-1 sm:px-8 lg:px-20 py-10 flex items-center justify-center flex-col"
        >
            <div className="w-full space-y-4 md:px-10 ">
                <div className="space-y-4 overflow-hidden w-full">
                    <motion.h1
                        initial={{ x: -100, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-heading text-2xl sm:text-3xl lg:text-4xl text-center leading-20 "
                    >
                        Discover Our Centres of Clinical Excellence
                    </motion.h1>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="font-sans text-sm sm:text-base lg:text-lg text-neutral-700 text-center leading-8"
                    >
                       At Synergy Superspecialty Hospital and Cancer Institute, we are committed to delivering world-class healthcare...
                    </motion.p>
                </div>

                <div className="max-w-7xl">
                    <SliderWithTriggers />
                </div>
            </div>
        </section>
    );
};
