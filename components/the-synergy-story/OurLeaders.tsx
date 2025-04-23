"use client"
import { Leaders } from '@/data';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { LeaderCard } from '../global/LeaderCard';

export const OurLeaders = () => {
    const LeaderRef = useRef(null);
    const isInView = useInView(LeaderRef, { once: true, margin: "-100px" });

    return (
        <section
            ref={LeaderRef}
            id="Leadership"
            className="min-h-max  w-full max-w-screen  px-2 md:px-6 lg:px-24 py-4 my-12"
        >
            <div className='lg:p-8 md:px-4 px-2 py-5 rounded-3xl bg-white border-3 space-y-12 border-neutral-200 shadow-expanded flex flex-col items-center justify-center  w-full'>
                {/* Heading + Subheading */}
                <div className="container mx-auto px-4 md:px-6 lg:px-8 py-10 space-y-4">
                    {/* Heading */}
                    <motion.h1
                        initial={{ x: -100, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-heading text-left">Meet Our Leadership</motion.h1>

                    {/* Subheading + Description */}
                    <div className="space-y-4">
                        <motion.p
                            initial={{ x: -100, opacity: 0 }}
                            animate={isInView ? { x: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-base md:text-lg text-gray-500 leading-relaxed">
                            Guided by a team of experienced professionals dedicated to driving innovation, compassion, and excellence in healthcare.
                        </motion.p>

                        <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                            Synergy Super Speciality Hospital and Cancer Institute (SSSHCI) is committed to offering world-class, affordable,
                            and comprehensive cancer care. With a team of passionate oncology specialists and a focus on innovation and empathy,
                            we provide cutting-edge treatments tailored to each patient&apos;s needs. At SSSHCI, clinical excellence is not just a goal —
                            it&apos;s our way of serving humanity with dignity and courage.
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl w-full  ">
                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  w-full">
                    {Leaders.map((leader, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: -70, opacity: 0 }}
                            animate={isInView ? { y: 0, opacity: 1 } : {}}
                            transition={{
                                duration: 0.8,
                                ease: "easeOut",
                                delay: index * 0.1, // Stagger effect for each card
                            }}
                            className='w-full hover:shadow-sm hover:shadow-indigo-100'
                        >
                            <LeaderCard
                                image={leader.image || "/fallback-image.webp"}
                                name={leader.name || "Leader Name"}
                                role={leader.role || "Senior Doctor"}
                                description={leader.description || "No description provided"}
                                onReadMore={leader.onReadMore}
                                onDownload={leader.onDownload}
                            />
                        </motion.div>
                    ))}
                </div>
                </div>

            </div>
        </section>
    )
}
