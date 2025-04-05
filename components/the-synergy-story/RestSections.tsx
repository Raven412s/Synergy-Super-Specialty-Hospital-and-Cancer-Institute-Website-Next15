"use client"
import React, { useRef } from 'react'
import { useInView, motion } from 'framer-motion';

export const RestSections = () => {
    // Separate refs for each section
    const awardsRef = useRef(null);
    const achievementsRef = useRef(null);
    const dayAtSynergyRef = useRef(null);

    // Use `useInView` separately for each section
    const isAwardsInView = useInView(awardsRef, { once: true, margin: "-100px" });
    const isAchievementsInView = useInView(achievementsRef, { once: true, margin: "-100px" });
    const isDayAtSynergyInView = useInView(dayAtSynergyRef, { once: true, margin: "-100px" });

    return (
        <>
            {/* Awards and Accolades Section */}
            <section
                ref={awardsRef}
                id="Awards-and-Accolades"
                className="min-h-max w-full px-2 md:px-6 lg:px-24 py-4 my-12"
            >
                <div className='lg:p-8 md:px-4 px-2 py-5 rounded-3xl bg-white border-3 space-y-12 border-neutral-200 shadow-expanded'>
                    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-10 space-y-6">
                        <motion.h1
                            initial={{ x: -100, opacity: 0 }}
                            animate={isAwardsInView ? { x: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-heading text-left"
                        >
                            Awards and Accolades
                        </motion.h1>

                        <div className="space-y-4">
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                Over the years, Synergy Super Speciality Hospital and Cancer Institute (SSSHCI) has earned numerous accolades for our unwavering commitment to clinical excellence, compassionate care, and cutting-edge research. These honors reflect the dedication of our doctors, nurses, and staff who work tirelessly to deliver outstanding healthcare services. We are proud to be acknowledged for setting new standards in oncology and multi-specialty care, both regionally and nationally.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievements and Milestones Section */}
            <section
                ref={achievementsRef}
                id="Achievements-and-Milestones"
                className="min-h-max w-full px-2 md:px-6 lg:px-24 py-4 my-12"
            >
                <div className="lg:p-8 md:px-4 px-2 py-5 rounded-3xl bg-white border-3 space-y-12 border-neutral-200 shadow-expanded">
                    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-10 space-y-6">
                        <motion.h1
                            initial={{ x: -100, opacity: 0 }}
                            animate={isAchievementsInView ? { x: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-heading text-left"
                        >
                            Achievements and Milestones
                        </motion.h1>

                        <div className="space-y-4">
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                From pioneering treatments to expanding our facilities, Synergy Super Speciality Hospital and Cancer Institute (SSSHCI) has crossed significant milestones over the years. We have introduced advanced medical technologies, opened new departments, and reached more communities with our healing mission. Every achievement reflects our resolve to redefine healthcare excellence and make a difference in countless lives.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* A Day at Synergy Section */}
            <section
                ref={dayAtSynergyRef}
                id="A-Day-at-Synergy"
                className="min-h-max w-full px-2 md:px-6 lg:px-24 py-4 mt-12"
            >
                <div className="lg:p-8 md:px-4 px-2 py-5 rounded-3xl bg-white border-3 space-y-12 border-neutral-200 shadow-expanded">
                    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-10 space-y-6">
                        <motion.h1
                            initial={{ x: -100, opacity: 0 }}
                            animate={isDayAtSynergyInView ? { x: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-heading text-left"
                        >
                            A Day at Synergy
                        </motion.h1>

                        <div className="space-y-4">
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                At SSSHCI, each day begins with a shared commitment to healing. From morning rounds and multidisciplinary team huddles to life-saving surgeries and comforting patient interactions, our hospital operates like a well-coordinated symphony. It&apos;s a place where expertise meets empathy, technology meets touch, and every action is rooted in our core purpose—serving humanity with dignity.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
