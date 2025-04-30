"use client"
import React, { useRef } from 'react'
import FaqAccordion from '../homepage/FaqAccordion'
import { excellenceItems } from '@/data'
import { useInView, motion } from 'framer-motion';

export const OurExcellence = () => {
    const ExcellenceRef = useRef(null);
    const isInView = useInView(ExcellenceRef, { once: true, margin: "-50px" });

    return (
        <section
            ref={ExcellenceRef}
            className="w-full px-4 sm:px-6 md:p-8 py-8 md:py-12"
        >
            <div className='max-w-6xl mx-auto py-6 sm:py-8 '>
                <div className='overflow-hidden space-y-4'>
                    <motion.h2
                        initial={{ x: -50, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className='text-2xl sm:text-3xl font-semibold text-gray-900'
                    >
                        Synergy Excellence
                    </motion.h2>

                    <motion.p
                        initial={{ x: -50, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        className='text-sm sm:text-base text-gray-600'
                    >
                        A Journey of Compassion, Quality, and Comprehensive Cancer Care
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='text-sm sm:text-base text-gray-600'
                    >
                        Synergy Super Speciality Hospital and Cancer Institute (SSSHCI) is committed to offering world-class, affordable,
                        and comprehensive cancer care. With a team of passionate oncology specialists and a focus on innovation and empathy,
                        we provide cutting-edge treatments tailored to each patient&apos;s needs.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className='mt-6 w-full'
                >
                    <FaqAccordion items={excellenceItems} />
                </motion.div>
            </div>
        </section>
    )
}
