"use client"
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ImageWithFallback } from '@/components/global/ImageWithFallback'

export const OurMission = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <section
            ref={ref}
            className="w-full px-4 sm:px-6  py-12 "
            id="Our-Mission"
        >
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 ">
                {/* Left content */}
                <div className="w-full lg:w-1/2 space-y-6">
                    <motion.h2
                        initial={{ x: -80, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                        className="text-3xl sm:text-4xl font-bold text-synergy-blue leading-tight"
                    >
                        Our Mission
                    </motion.h2>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        className="space-y-5 text-gray-700 text-base leading-relaxed"
                    >
                        <p>
                            <strong className="text-primary">Synergy Super Speciality Hospital and Cancer Institute (SSSHCI)</strong> is dedicated to becoming the <strong className="text-primary">leading regional destination for cancer care</strong>, empowering patients and eliminating fear surrounding this disease.
                        </p>

                        <p>
                            Our core values, embodied in <strong className="text-primary">&quot;SYNERGY&quot;</strong>, guide our approach:
                            <span className="block mt-1">
                                <strong className="text-primary">Saviour</strong>, <strong className="text-primary">Youthfully</strong>, <strong className="text-primary">Nirvana</strong>,
                                <strong className="text-primary"> Excellence</strong>, <strong className="text-primary">Respect</strong>, <strong className="text-primary">Gutsy</strong>, and <strong className="text-primary">Yours</strong>.
                            </span>
                        </p>

                        <p>
                            Based in <strong className="text-primary">Gorakhpur</strong>, we serve <strong className="text-primary">western Bihar</strong> and <strong className="text-primary">southern Nepal</strong> with a complete range of <strong className="text-primary">cancer care</strong> services including surgery, chemotherapy, immunotherapy, targeted therapy, and palliative care.
                        </p>

                        <p>
                            We are committed to <strong className="text-primary">quality treatment</strong>, <strong className="text-primary">empathy</strong>, and <strong className="text-primary">professionalism</strong> at every stage of the patient journey.
                        </p>
                    </motion.div>
                </div>

                {/* Right image */}
                <motion.div
                    initial={{ x: 80, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                    className="w-full lg:w-1/2 rounded-2xl shadow-lg overflow-hidden"
                >
                    <div className="relative w-full aspect-video">
                        <ImageWithFallback
                            fallbackSrc="/fallback-image.webp"
                            src="/mission-horizontal.webp"
                            alt="Doctors treating cancer patients at Synergy Super Specialty Hospital"
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
