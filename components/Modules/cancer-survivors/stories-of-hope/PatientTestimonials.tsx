'use client'

import { ImageWithFallback } from '@/components/global/ImageWithFallback'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Star } from 'lucide-react'
import { useEffect, useState } from 'react'

const testimonials = [
    {
        id: 1,
        name: 'Ramesh Kumar',
        text: `My experience at Synergy Super Speciality Hospital & Cancer Institute was exceptional. The cardiology department saved my life with their timely intervention and expert care.`,
        avatar: '/doctors/dr-vishal-mishra.png',
        stars: 5,
        role: 'Heart Patient'
    },
    {
        id: 2,
        name: 'Sunita Devi',
        text: `Synergy Super Speciality Hospital & Cancer Institute provided excellent care during my cancer treatment. The doctors were compassionate and the facilities world-class.`,
        avatar: '/doctors/dr-vishal-mishra.png',
        stars: 5,
        role: 'Cancer Survivor'
    },
    {
        id: 3,
        name: 'Vikram Singh',
        text: `The orthopedic team at Synergy Super Speciality Hospital & Cancer Institute helped me recover from my joint replacement surgery faster than I expected. Highly recommended!`,
        avatar: '/doctors/dr-vishal-mishra.png',
        stars: 5,
        role: 'Orthopedic Patient'
    },
    {
        id: 4,
        name: 'Priya Sharma',
        text: `As a new mother, I was nervous about delivery, but the maternity ward at Synergy Super Speciality Hospital & Cancer Institute made it a beautiful experience.`,
        avatar: '/doctors/dr-vishal-mishra.png',
        stars: 5,
        role: 'New Mother'
    },
    {
        id: 5,
        name: 'Amit Patel',
        text: `Synergy Super Speciality Hospital & Cancer Institute's neurology department accurately diagnosed my condition when others couldn't. Grateful for their expertise.`,
        avatar: '/doctors/dr-vishal-mishra.png',
        stars: 5,
        role: 'Neurology Patient'
    },
    {
        id: 6,
        name: 'Neha Gupta',
        text: `The cancer care at Synergy Super Speciality Hospital & Cancer Institute gave me hope when I needed it most. The staff treated me like family.`,
        avatar: '/doctors/dr-vishal-mishra.png',
        stars: 5,
        role: 'Cancer Patient'
    },
    {
        id: 7,
        name: 'Rajesh Yadav',
        text: `After my accident, the trauma center at Synergy Super Speciality Hospital & Cancer Institute provided immediate and effective treatment. Thank you for saving my life.`,
        avatar: '/doctors/dr-vishal-mishra.png',
        stars: 5,
        role: 'Trauma Patient'
    },
    {
        id: 8,
        name: 'Pooja Mishra',
        text: `Synergy Super Speciality Hospital & Cancer Institute's pediatric department is amazing with children. My son actually looks forward to his check-ups now!`,
        avatar: '/doctors/dr-vishal-mishra.png',
        stars: 5,
        role: 'Parent'
    },
    {
        id: 9,
        name: 'Alok Verma',
        text: `The urology team at Synergy Super Speciality Hospital & Cancer Institute solved my chronic problem that other hospitals couldn't. Life-changing treatment.`,
        avatar: '/doctors/dr-vishal-mishra.png',
        stars: 5,
        role: 'Urology Patient'
    },
    {
        id: 10,
        name: 'Anjali Tiwari',
        text: `Synergy Super Speciality Hospital & Cancer Institute's eye care center restored my vision with cataract surgery. The procedure was painless and recovery quick.`,
        avatar: '/doctors/dr-vishal-mishra.png',
        stars: 5,
        role: 'Ophthalmology Patient'
    },
    {
        id: 11,
        name: 'Sanjay Dubey',
        text: `The gastroenterology department at Synergy Super Speciality Hospital & Cancer Institute diagnosed and treated my condition with minimal discomfort. Excellent care.`,
        avatar: '/doctors/dr-vishal-mishra.png',
        stars: 5,
        role: 'Gastro Patient'
    },
    {
        id: 12,
        name: 'Kavita Singh',
        text: `Synergy Super Speciality Hospital & Cancer Institute's maternity ward made my delivery experience comfortable and safe. The nurses were angels.`,
        avatar: '/doctors/dr-vishal-mishra.png',
        stars: 5,
        role: 'New Mother'
    },
    {
        id: 13,
        name: 'Manoj Pandey',
        text: `After suffering for years, the ENT specialists at Synergy Super Speciality Hospital & Cancer Institute finally cured my sinus problem. Life is so much better now.`,
        avatar: '/doctors/dr-vishal-mishra.png',
        stars: 5,
        role: 'ENT Patient'
    },
    {
        id: 14,
        name: 'Suman Chaurasia',
        text: `The cancer treatment at Synergy Super Speciality Hospital & Cancer Institute was comprehensive and compassionate. They supported me through every step.`,
        avatar: '/doctors/dr-vishal-mishra.png',
        stars: 5,
        role: 'Cancer Survivor'
    },
    {
        id: 15,
        name: 'Vishal Tripathi',
        text: `Synergy Super Speciality Hospital & Cancer Institute's cardiology department gave me a second chance at life after my heart attack. Forever grateful.`,
        avatar: '/doctors/dr-vishal-mishra.png',
        stars: 5,
        role: 'Heart Patient'
    },
    {
        id: 16,
        name: 'Meena Shukla',
        text: `The gynecology team at Synergy Super Speciality Hospital & Cancer Institute provided discreet and effective treatment. I felt respected and cared for.`,
        avatar: '/doctors/dr-vishal-mishra.png',
        stars: 5,
        role: 'Gynecology Patient'
    },
    {
        id: 17,
        name: 'Rahul Bajpai',
        text: `Synergy Super Speciality Hospital & Cancer Institute's orthopedic surgeons fixed my sports injury when others said it couldn't be done. Back to playing cricket!`,
        avatar: '/doctors/dr-vishal-mishra.png',
        stars: 5,
        role: 'Sports Injury'
    },
    {
        id: 18,
        name: 'Shivani Pathak',
        text: `The pediatric oncology team at Synergy Super Speciality Hospital & Cancer Institute treated my daughter with such love and care during her leukemia treatment.`,
        avatar: '/doctors/dr-vishal-mishra.png',
        stars: 5,
        role: 'Parent'
    },
    {
        id: 19,
        name: 'Arvind Maurya',
        text: `Synergy Super Speciality Hospital & Cancer Institute's neurology department accurately diagnosed my rare condition. Their expertise is unmatched in Eastern UP.`,
        avatar: '/doctors/dr-vishal-mishra.png',
        stars: 5,
        role: 'Neurology Patient'
    },
    {
        id: 20,
        name: 'Preeti Chauhan',
        text: `The maternity care at Synergy Super Speciality Hospital & Cancer Institute was exceptional. From pregnancy to delivery, I felt safe and well-cared for.`,
        avatar: '/doctors/dr-vishal-mishra.png',
        stars: 5,
        role: 'New Mother'
    },
    {
        id: 21,
        name: 'Dinesh Kumar',
        text: `Synergy Super Speciality Hospital & Cancer Institute's urology department solved my kidney stone problem with advanced laser treatment. No pain, quick recovery.`,
        avatar: '/doctors/dr-vishal-mishra.png',
        stars: 5,
        role: 'Urology Patient'
    },
    {
        id: 22,
        name: 'Anita Vishwakarma',
        text: `The breast cancer care at Synergy Super Speciality Hospital & Cancer Institute gave me hope and healing. The support groups were especially helpful.`,
        avatar: '/doctors/dr-vishal-mishra.png',
        stars: 5,
        role: 'Cancer Survivor'
    },
    {
        id: 23,
        name: 'Vinod Shah',
        text: `Synergy Super Speciality Hospital & Cancer Institute's gastroenterology department diagnosed my condition accurately and treated it effectively. No more stomach pain!`,
        avatar: '/doctors/dr-vishal-mishra.png',
        stars: 5,
        role: 'Gastro Patient'
    },
    {
        id: 24,
        name: 'Rekha Agrawal',
        text: `The eye care center at Synergy Super Speciality Hospital & Cancer Institute restored my vision with cataract surgery. The staff was kind and professional.`,
        avatar: '/doctors/dr-vishal-mishra.png',
        stars: 5,
        role: 'Ophthalmology Patient'
    },
    {
        id: 25,
        name: 'Abhishek Ojha',
        text: `Synergy Super Speciality Hospital & Cancer Institute's ENT department cured my chronic sinusitis that had troubled me for years. Breathing freely at last!`,
        avatar: '/doctors/dr-vishal-mishra.png',
        stars: 5,
        role: 'ENT Patient'
    },
    {
        id: 26,
        name: 'Poonam Dixit',
        text: `The gynecological care at Synergy Super Speciality Hospital & Cancer Institute was compassionate and effective. I felt heard and respected throughout.`,
        avatar: '/doctors/dr-vishal-mishra.png',
        stars: 5,
        role: 'Gynecology Patient'
    },
    {
        id: 27,
        name: 'Ankit Pandey',
        text: `Synergy Super Speciality Hospital & Cancer Institute's sports medicine team helped me recover from my football injury better than before. Back on the field!`,
        avatar: '/doctors/dr-vishal-mishra.png',
        stars: 5,
        role: 'Sports Injury'
    },
    {
        id: 28,
        name: 'Sneha Trivedi',
        text: `The pediatric care at Synergy Super Speciality Hospital & Cancer Institute is outstanding. My child actually enjoys visiting the doctor now!`,
        avatar: '/doctors/dr-vishal-mishra.png',
        stars: 5,
        role: 'Parent'
    },
    {
        id: 29,
        name: 'Rakesh Tiwari',
        text: `Synergy Super Speciality Hospital & Cancer Institute's cardiology department provided life-saving treatment during my heart emergency. Forever grateful.`,
        avatar: '/doctors/dr-vishal-mishra.png',
        stars: 5,
        role: 'Heart Patient'
    },
    {
        id: 30,
        name: 'Shalini Kapoor',
        text: `The comprehensive cancer care at Synergy Super Speciality Hospital & Cancer Institute gave me hope and healing during my breast cancer journey.`,
        avatar: '/doctors/dr-vishal-mishra.png',
        stars: 5,
        role: 'Cancer Survivor'
    }
];

export const PatientTestimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [autoRotate, setAutoRotate] = useState(true)
    const current = testimonials[currentIndex]

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
        setAutoRotate(false)
    }

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        setAutoRotate(false)
    }

    // Auto-rotation effect
    useEffect(() => {
        if (!autoRotate) return

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [autoRotate])

    // Compute visible window of testimonials (max 5, centered on currentIndex)
    const totalTestimonials = testimonials.length;
    const maxVisible = 5;
    let startIndex = currentIndex - 2;
    let endIndex = currentIndex + 2;
    if (startIndex < 0) {
        startIndex = 0;
        endIndex = Math.min(totalTestimonials - 1, maxVisible - 1);
    }
    if (endIndex > totalTestimonials - 1) {
        endIndex = totalTestimonials - 1;
        startIndex = Math.max(0, totalTestimonials - maxVisible);
    }
    return (
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12 gap-6">
                    <div className="text-center md:text-left">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900"
                        >
                            What Our Patients Say
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-gray-600 mt-2 text-lg"
                        >
                            Real stories of healing and exceptional care
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex items-center gap-3"
                    >
                        <Button
                            size="icon"
                            variant="outline"
                            onClick={handlePrev}
                            className="rounded-full w-12 h-12 hover:bg-primary/10"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </Button>
                        <Button
                            size="icon"
                            onClick={handleNext}
                            className="rounded-full w-12 h-12 bg-primary hover:bg-primary/90"
                        >
                            <ArrowRight className="w-5 h-5 text-white" />
                        </Button>
                    </motion.div>
                </div>

                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center">
                    {/* Avatars column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex lg:flex-col items-center gap-4 order-2 lg:order-1"
                    >
                        <span className="text-sm font-medium text-primary hidden lg:block">
                            {currentIndex + 1}/<span className="text-gray-600">{testimonials.length}</span>
                        </span>
                        <div className="flex lg:flex-col gap-3">
                            {testimonials.slice(startIndex, endIndex + 1).map((t, idx) => {
                                const actualIndex = startIndex + idx;
                                return (
                                    <button key={t.id} onClick={() => setCurrentIndex(actualIndex)} className={cn('size-14 rounded-full  relative overflow-hidden border-2', actualIndex === currentIndex ? "border-primary" : "border-transparent")}>
                                        <ImageWithFallback fallbackSrc='/fallback-image.webp' fill className={` object-cover object-center `} src={t.avatar} alt={t.name} />
                                    </button>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Main testimonial */}
                    <motion.div
                        className="flex-1 w-full order-1 lg:order-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current.id}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white rounded-xl shadow-lg p-6 sm:p-8 flex flex-col md:flex-row items-start gap-6 md:gap-8 h-full"
                            >
                                <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-xl overflow-hidden shrink-0 border-4 border-white shadow-md">
                                    <ImageWithFallback
                                        fallbackSrc="/fallback-image.webp"
                                        src={current.avatar}
                                        alt={current.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="space-y-4 flex-1">
                                    <div className="flex items-center gap-1 text-yellow-500">
                                        {Array.from({ length: current.stars }).map((_, i) => (
                                            <Star key={i} size={20} fill="currentColor" />
                                        ))}
                                    </div>
                                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                        &quot;{current.text}&quot;
                                    </p>
                                    <div>
                                        <p className="font-semibold text-gray-900 text-lg">- {current.name}</p>
                                        <p className="text-gray-500 text-sm">{current.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </div>

                {/* Mobile indicators */}
                <div className="flex justify-center gap-2 mt-8 lg:hidden">

                    {testimonials.slice(startIndex, endIndex + 1).map((_, idx) => {
                        const actualIndex = startIndex + idx;
                        return (
                            <button
                                key={actualIndex}
                                onClick={() => setCurrentIndex(actualIndex)}
                                className={`w-2 h-2 rounded-full ${actualIndex === currentIndex ? "bg-primary" : "bg-gray-300"}`}
                            ></button>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}
