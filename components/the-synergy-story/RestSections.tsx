"use client"
import React, { useRef } from 'react'
import { useInView, motion } from 'framer-motion';
import { awards, dailySchedule, milestones } from '@/data/rest-sections-data';

export const RestSections = () => {
    const awardsRef = useRef(null);
    const achievementsRef = useRef(null);
    const dayAtSynergyRef = useRef(null);
    const dailyVisionRef = useRef(null);

    const isAwardsInView = useInView(awardsRef, { once: true, margin: "-100px" });
    const isAchievementsInView = useInView(achievementsRef, { once: true, margin: "-100px" });
    const isDayAtSynergyInView = useInView(dayAtSynergyRef, { once: true, margin: "-100px" });
    const isDailyVisionInView = useInView(dailyVisionRef, { once: true, margin: "-100px" });

    return (
        <>
            {/* Awards and Accolades Section */}
            <section
                ref={awardsRef}
                id="Awards-and-Accolades"
                className="min-h-max w-full px-4 sm:px-6 lg:px-16 xl:px-24 py-8 md:py-12 my-8 md:my-16"
            >
                <div className='lg:p-10 md:p-8 p-6 rounded-3xl bg-white border-3 space-y-12 border-neutral-200 shadow-expanded'>
                    <div className="mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-8 md:py-12 space-y-8">
                        <motion.h1
                            initial={{ x: -100, opacity: 0 }}
                            animate={isAwardsInView ? { x: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-left leading-tight"
                        >
                            Awards and Accolades
                        </motion.h1>

                        <div className="space-y-10">
                            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed md:leading-loose max-w-5xl">
                                Over the years, Synergy Super Speciality Hospital and Cancer Institute (SSSHCI) has earned numerous accolades for our unwavering commitment to clinical excellence, compassionate care, and cutting-edge research. These honors reflect the dedication of our doctors, nurses, and staff who work tirelessly to deliver outstanding healthcare services.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                                {awards.map((award, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ y: 50, opacity: 0 }}
                                        animate={isAwardsInView ? { y: 0, opacity: 1 } : {}}
                                        transition={{ delay: index * 0.1, duration: 0.6 }}
                                        className="bg-blue-50/80 p-6 rounded-xl border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-600"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="bg-blue-100 text-blue-800 font-bold px-4 py-2 rounded-full text-sm sm:text-base min-w-[3.5rem] text-center">
                                                {award.year}
                                            </div>
                                            <div>
                                                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{award.title}</h3>
                                                <p className="text-gray-600 text-sm sm:text-base">{award.description}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="pt-4">
                                <p className="text-base sm:text-lg text-gray-700 italic max-w-3xl mx-auto text-center">
                                &quot;These recognitions motivate us to continually raise the bar in patient-centered care and medical innovation.&quot;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievements and Milestones Section */}
            <section
                ref={achievementsRef}
                id="Achievements-and-Milestones"
                className="min-h-max w-full px-4 sm:px-6 lg:px-16 xl:px-24 py-8 md:py-12 my-8 md:my-16"
            >
                <div className="lg:p-10 md:p-8 p-6 rounded-3xl bg-white border-3 space-y-12 border-neutral-200 shadow-expanded">
                    <div className="mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-8 md:py-12 space-y-8">
                        <motion.h1
                            initial={{ x: -100, opacity: 0 }}
                            animate={isAchievementsInView ? { x: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-left leading-tight"
                        >
                            Achievements and Milestones
                        </motion.h1>

                        <div className="space-y-10">
                            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed md:leading-loose max-w-5xl">
                                From pioneering treatments to expanding our facilities, Synergy has crossed significant milestones that mark our journey toward transforming healthcare delivery in the region.
                            </p>

                            <div className="relative">
                                <div className="hidden md:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600 transform -translate-x-1/2" />

                                <div className="space-y-2 md:space-y-2">
                                    {milestones.map((milestone, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                                            animate={isAchievementsInView ? { x: 0, opacity: 1 } : {}}
                                            transition={{ delay: index * 0.15, duration: 0.7 }}
                                            className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                        >
                                            <div className={`w-full md:w-1/2 p-4 ${index % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10 md:text-left'}`}>
                                                <div className="inline-block bg-white p-6 sm:p-8 rounded-xl shadow-md border border-gray-100 w-full hover:shadow-lg transition-shadow duration-300">
                                                    <div className="md:hidden flex items-center mb-4">
                                                        <div className="py-1 px-4 rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-700 flex items-center justify-center text-white font-bold text-xs sm:text-sm mr-3">
                                                            {milestone.year}
                                                        </div>
                                                    </div>
                                                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                                                    <p className="text-gray-600 text-sm sm:text-base mb-3">{milestone.description}</p>
                                                    <div className="hidden md:block">
                                                        <span className="text-sm font-medium text-blue-600">{milestone.year}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="hidden md:flex py-1 px-4 rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-700 items-center justify-center text-white font-bold shadow-lg mx-4 text-sm">
                                                {milestone.year}
                                            </div>

                                            <div className="hidden md:block md:w-1/2 p-4"></div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-yellow-50/80 border-l-4 border-yellow-400 p-6 sm:p-8 rounded-r-lg mt-8">
                                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">Looking Ahead</h3>
                                <p className="text-gray-700 text-sm sm:text-base">
                                    We&apos;re currently expanding our bone marrow transplant unit and establishing a Center for Precision Oncology to bring genomic medicine to our community.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* A Day at Synergy Section */}
            <section
                ref={dayAtSynergyRef}
                id="A-Day-at-Synergy"
                className="min-h-max w-full px-4 sm:px-6 lg:px-16 xl:px-24 py-8 md:py-12 mt-8 md:mt-16"
            >
                <div className="lg:p-10 md:p-8 p-6 rounded-3xl bg-white border-3 space-y-12 border-neutral-200 shadow-expanded">
                    <div className="mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-8 md:py-12 space-y-8">
                        <motion.h1
                            initial={{ x: -100, opacity: 0 }}
                            animate={isDayAtSynergyInView ? { x: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-left leading-tight"
                        >
                            A Day at Synergy
                        </motion.h1>

                        <div className="space-y-10">
                            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed md:leading-loose max-w-5xl">
                                At SSSHCI, each day begins with a shared commitment to healing. Our hospital operates like a well-coordinated symphony where expertise meets empathy, and technology meets compassionate care.
                            </p>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    { icon: "👨‍⚕️", color: "blue", title: "Clinical Excellence", description: "200+ specialists conducting 150+ procedures daily with precision and care" },
                                    { icon: "❤️", color: "green", title: "Patient Interactions", description: "500+ outpatients receive personalized care from our compassionate teams" },
                                    { icon: "🔬", color: "purple", title: "Innovation", description: "15+ ongoing clinical trials bringing tomorrow's treatments to patients today" }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ scale: 0.9, opacity: 0 }}
                                        animate={isDayAtSynergyInView ? { scale: 1, opacity: 1 } : {}}
                                        transition={{ delay: 0.2 * (index + 1), duration: 0.6 }}
                                        className={`bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:border-${item.color}-300`}
                                    >
                                        <div className={`text-${item.color}-600 text-4xl mb-4`}>{item.icon}</div>
                                        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                                        <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
                                    </motion.div>
                                ))}
                            </div>

                            <div ref={dailyVisionRef} className="mt-12 space-y-10">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Daily Rhythm</h2>

                                <div className="relative">
                                    <div className="hidden md:block absolute left-6 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-500" />

                                    <div className="space-y-8">
                                        {dailySchedule.map((item, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{
                                                    y: -100 * (index + 1), // Stacked vertically above
                                                    opacity: 0,
                                                    scale: 0.95
                                                }}
                                                animate={isDailyVisionInView ? {
                                                    y: 0,
                                                    opacity: 1,
                                                    scale: 1
                                                } : {}}
                                                transition={{
                                                    delay: index * 0.15,
                                                    type: "spring",
                                                    damping: 12,
                                                    stiffness: 100,
                                                    duration: 0.6
                                                }}
                                                className="relative flex flex-col md:flex-row items-start md:items-center pl-12 md:pl-0"
                                            >
                                                <div className="hidden md:flex absolute left-0 w-14 h-14 rounded-full bg-fuchsia-100 text-synergy-blue font-bold items-center justify-center mr-6 text-[12px]">
                                                    {item.time}
                                                </div>
                                                <div className="md:ml-24 bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex-1 w-full hover:shadow-md transition-shadow duration-300">
                                                    <div className="md:hidden text-sm font-medium text-blue-600 mb-2">{item.time}</div>
                                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.activity}</h3>
                                                    <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-6 text-center">
                                    <p className="text-lg sm:text-xl text-gray-700 italic max-w-3xl mx-auto">
                                    &quot;Every day at Synergy brings new challenges, new breakthroughs, and most importantly — new hope.&quot;
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
