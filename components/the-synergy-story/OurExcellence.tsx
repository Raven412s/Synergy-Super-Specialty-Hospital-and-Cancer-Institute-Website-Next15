"use client"
import React, { useRef } from 'react'
import FaqAccordion from '../homepage/FaqAccordion'
import { excellenceItems } from '@/data'
import { useInView, motion } from 'framer-motion';

export const OurExcellence = () => {
    const ExcellenceRef = useRef(null);
    const isInView = useInView(ExcellenceRef, { once: true, margin: "-100px" });

    return (
        <section
            ref={ExcellenceRef}
            className="min-h-max w-full  px-2 md:px-6 lg:px-24 py-4 my-12 "
        >
            <div className='lg:p-8 md:px-4 px-2 py-5 rounded-3xl bg-white border-3 space-y-12 border-neutral-200 shadow-expanded'>
                <div className='container mx-auto  overflow-hidden '>
                    <motion.h2
                        initial={{ x: -100, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className='text-heading '>Synergy Excellence</motion.h2>
                    <div className="space-y-4 ">
                        {/* sub-heading */}
                        <motion.p
                            initial={{ x: -100, opacity: 0 }}
                            animate={isInView ? { x: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className='text-base md:text-lg text-gray-700 leading-relaxed '>
                            A Journey of Compassion, Quality, and Comprehensive Cancer Care
                        </motion.p>
                        {/* description */}
                        <p className='text-base sm:text-lg md:text-xl lg:text-xl text-left'>
                            Synergy Super Speciality Hospital and Cancer Institute (SSSHCI) is committed to offering world-class, affordable,
                            and comprehensive cancer care. With a team of passionate oncology specialists and a focus on innovation and empathy,
                            we provide cutting-edge treatments tailored to each patient’s needs. At SSSHCI, clinical excellence is not just a goal —
                            it&apos;s our way of serving humanity with dignity and courage.
                        </p>
                    </div>
                </div>
                {/* Accordion Component  */}
                <div className=' flex items-center justify-start w-full'>
                    <FaqAccordion items={excellenceItems} />
                </div>
            </div>
        </section>
    )
}
