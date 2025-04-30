"use client"
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ImageWithFallback } from '../global/ImageWithFallback'

export const OurVision = () => {
    const VisionRef = useRef(null);
    const isInView = useInView(VisionRef, { once: true, margin: "-100px" });
    return (
        <section ref={VisionRef} className='w-full  md:px-8 py-8 md:py-12' id='Our-Vision'>
            <div className="max-w-6xl mx-auto py-6 md:py-8  flex flex-col lg:flex-row-reverse ">
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-5/12 mb-6 lg:mb-0 lg:ml-8 space-y-8 ">
                    {/* Responsive Image */}
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden ">
                        <ImageWithFallback
                            fallbackSrc='/fallback-image.webp'
                            src="/vision-horizontal.webp"
                            alt="Our Vision"
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg aspect-video outline outline-blue-200">
                            <p className="font-medium mb-2">Our core values:</p>
                            <ul className="grid grid-cols-2 gap-2">
                                {['Saviour', 'Youthfully', 'Nirvana', 'Excellence', 'Respect', 'Gutsy', 'Yours'].map((value) => (
                                    <li key={value} className="flex items-center">
                                        <span className="text-primary font-medium">{value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                </motion.div>

                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-7/12 space-y-6">
                    <h1 className='text-2xl md:text-3xl font-bold text-synergy-blue leading-tight'>
                        Synergy Super Specialty Hospital & Cancer Institute: A Beacon of Hope in the Fight Against Cancer
                    </h1>

                    <div className="space-y-4 text-sm md:text-base text-gray-700">
                        <p>Synergy Super Specialty Hospital & Cancer Institute (SSSHCI) stands as a beacon of hope for cancer patients in Eastern Uttar Pradesh, aiming to become the <strong className='text-primary'>trusted choice</strong> for comprehensive cancer care.</p>

                        <p>Our vision is to <strong className='text-primary'>eliminate the fear of cancer</strong> and demonstrate that it is a <strong className='text-primary'>curable disease</strong> through <strong className='text-primary'>cost-effective, comprehensive care</strong>.</p>



                        <p>Located in Gorakhpur, we serve patients from eastern UP, western Bihar, and southern Nepal with:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Complete team of oncology specialists</li>
                            <li>Modern diagnostic and treatment facilities</li>
                            <li>Comprehensive services including surgery, chemotherapy, immunotherapy, and palliative care</li>
                        </ul>

                        <p>SSSHCI is more than a medical facility - we&apos;re a symbol of hope and resilience in the fight against cancer.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
