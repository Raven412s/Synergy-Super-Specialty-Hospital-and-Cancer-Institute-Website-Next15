"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import { useInView, motion } from 'framer-motion'

export const OurVision = () => {
    const VisionRef = useRef(null);
    const isInView = useInView(VisionRef, { once: true, margin: "-100px" });
    return (
        <section ref={VisionRef} className='min-h-max w-full px-2 md:px-6 lg:px-24 py-4 my-12' id='Our-Vision'>
            <div className="lg:p-8 md:px-4 px-2 py-5 rounded-3xl bg-white flex flex-col lg:flex-row-reverse border-3 border-neutral-200 shadow-expanded">
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-2/6 mb-6 lg:mb-0 relative">
                    {/* Horizontal Image for small and medium screens */}
                    <div className="relative block lg:hidden w-full h-64">
                        <Image
                            src="/vision-horizontal.webp"
                            alt="Our Vision"
                            fill
                            priority
                            className="object-cover w-full h-full rounded-2xl bg-indigo-900"
                        />
                    </div>

                    {/* Vertical Image for large screens */}
                    <div className="relative hidden lg:block w-full h-full">
                        <Image
                            src="/vision-vertical.webp"
                            alt="Our Vision"
                            fill
                            priority
                            className="object-cover w-full h-auto rounded-2xl bg-indigo-900"
                        />
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-4/6 px-0 lg:px-8 space-y-10">
                    <h1 className='text-heading'>Synergy Super Specialty Hospital & Cancer Institute: A Beacon of Hope in the Fight Against Cancer</h1>
                    <div className="space-y-4 text-base sm:text-lg md:text-xl lg:text-xl">
                        <p>Synergy Super Specialty Hospital & Cancer Institute (SSSHCI) stands as a beacon of hope for cancer patients in the Eastern Uttar Pradesh region, aiming to become the <strong className='text-primary'>trusted choice</strong> for comprehensive cancer care. Their vision is clear: to <strong className='text-primary'>eliminate the fear of cancer</strong> and instill the understanding that it is indeed a <strong className='text-primary'>curable disease</strong>. This vision is driven by a passionate team dedicated to providing <strong className='text-primary'>cost-effective</strong> and <strong className='text-primary'>comprehensive cancer care</strong> to all.</p>

                        <p>The core values of SSSHCI are deeply ingrained in their approach to patient care. <strong className='text-primary'>Saviour</strong> embodies their commitment to saving precious lives, while <strong className='text-primary'>Youthfully</strong> reflects their unwavering energy and dedication. <strong className='text-primary'>Nirvana</strong> signifies their commitment to creating a peaceful and supportive environment for patients, while <strong className='text-primary'>Excellence</strong> drives them to surpass expectations in every aspect of their work. <strong className='text-primary'>Respect</strong> for the dignity and worth of each patient is paramount, and <strong className='text-primary'>Gutsy</strong> reflects their unwavering determination in the face of challenges. Finally, <strong className='text-primary'>Yours</strong> emphasizes their commitment to being there for their patients every step of the way.</p>

                        <p>Located in the vibrant city of Gorakhpur, SSSHCI serves a vast population, extending its reach to western Bihar and southern Nepal. The Institute&apos;s strategic location makes it a vital resource for thousands of cancer patients seeking hope and treatment.</p>

                        <p>SSSHCI offers a comprehensive approach to cancer care, encompassing a <strong className='text-primary'>complete team of oncology specialists</strong> and <strong className='text-primary'>diagnostic consultants</strong>. This ensures patients receive a holistic and personalized treatment plan. The Institute boasts <strong className='text-primary'>modern diagnostic and treatment facilities</strong> under one roof, providing a comprehensive and convenient experience.</p>

                        <p>Recognizing the emotional and practical needs of cancer patients, SSSHCI prioritizes building a strong support system. Their dedicated services, quality of treatment, empathy, compassion, and professionalism create a nurturing environment for patients and their families. The Institute offers a wide range of services, including <strong className='text-primary'>all types of cancer surgery, chemotherapy, immunotherapy, target therapy, hormonal therapy, day-care, palliative care, and pain clinics</strong>.</p>

                        <p>Synergy Super Specialty Hospital & Cancer Institute is more than just a medical facility; it is a symbol of hope, resilience, and unwavering commitment to conquering cancer. Their dedication to providing compassionate and comprehensive care makes them a trusted partner in the fight against this disease.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
