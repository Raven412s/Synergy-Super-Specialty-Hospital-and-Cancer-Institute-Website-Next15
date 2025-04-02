"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import { useInView, motion } from 'framer-motion'

export const OurMission = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    return (
        <section  ref={ref} className='min-h-max w-full px-2 md:px-6 lg:px-24 py-4 mb-12' id='Our-Mission'>
            <div className="lg:p-8 md:px-4 px-2 py-5 rounded-3xl bg-white flex flex-col lg:flex-row border-3 border-neutral-200 shadow-expanded">
                <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full lg:w-2/6 mb-6 lg:mb-0 relative">
                    {/* Horizontal Image for small and medium screens */}
                    <div className="relative block lg:hidden w-full h-64">
                        <Image
                            src="/mission-horizontal.webp"
                            alt="Doctors treating cancer patients at Synergy Super Specialty Hospital"
                            fill
                            priority
                            className="object-cover w-full h-full rounded-2xl bg-indigo-900"
                        />
                    </div>

                    {/* Vertical Image for large screens */}
                    <div className="relative hidden lg:block w-full h-full">
                        <Image
                            src="/mission-vertical.webp"
                            alt="Doctors treating cancer patients at Synergy Super Specialty Hospital"
                            fill
                            priority
                            className="object-cover w-full h-auto rounded-2xl bg-indigo-900"
                        />
                    </div>
                </motion.div>
                <div className="w-full lg:w-4/6 px-0 lg:px-8 space-y-10">
                    <motion.h1
                        initial={{ x: -100, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                         className='text-heading'>
                        Our Mission
                    </motion.h1>
                    <motion.div
                     initial={{ x: 120, opacity: 0 }}
                     animate={isInView ? { x: 0, opacity: 1 } : {}}
                     transition={{ duration: 1, ease: "easeOut" }}
                    className="space-y-4 text-base sm:text-lg md:text-xl lg:text-xl">
                        <p>Synergy Super Speciality Hospital and Cancer Institute (SSSHCI) is dedicated to becoming the <strong className='text-primary'>leading regional destination for cancer care</strong>, empowering patients and eliminating the fear surrounding this disease.  Their mission is to provide <strong className='text-primary'>comprehensive and cost-effective cancer treatment</strong> to all, driven by a passionate team committed to excellence.</p>

                        <p>SSSHCI&apos;s core values, embodied in the acronym <strong className='text-primary'>&quot;SYNERGY,&quot;</strong> guide their approach: <strong className='text-primary'>Saviour</strong> (saving lives), <strong className='text-primary'>Youthfully</strong> (working tirelessly), <strong className='text-primary'>Nirvana</strong> (creating a peaceful atmosphere), <strong className='text-primary'>Excellence</strong> (exceeding expectations), <strong className='text-primary'>Respect</strong> (valuing others), <strong className='text-primary'>Gutsy</strong> (facing challenges bravely), and <strong className='text-primary'>Yours</strong> (always dedicated to patient needs).</p>

                        <p>Located in the strategically important city of Gorakhpur, SSSHCI serves a vast region, including western Bihar and southern Nepal.  The institute offers <strong className='text-primary'>hope and a comprehensive approach to cancer care</strong>, with a team of oncology specialists and diagnostic consultants providing a full range of services.  These services include <strong className='text-primary'>all types of cancer surgery, chemotherapy, immunotherapy, targeted therapy, hormonal therapy, day-care, palliative care, and pain clinics</strong>, all under one roof.</p>

                        <p>SSSHCI&apos;s commitment to <strong className='text-primary'>quality treatment, empathy, compassion, and professionalism</strong> ensures that patients receive the best possible care and support throughout their journey.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
