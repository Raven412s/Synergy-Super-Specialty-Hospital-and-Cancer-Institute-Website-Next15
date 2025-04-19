"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
// Import your images (replace with actual paths)
import { ImageWithFallback } from "@/components/global/ImageWithFallback";


const SupportServicesPage = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            },
        },
        hover: {
            y: -10,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
        }
    };

    const imageVariants = {
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.3
            }
        }
    };

    // Support services data with images
    const services = [
        {
            id: 1,
            title: "Diagnostic Imaging",
            description: "State-of-the-art imaging technologies including MRI, CT scans, X-rays, and ultrasound for accurate diagnosis.",
            link: "/diagnostic-imaging",
            image: "/images/diagnostic-imaging.webp",

            icon: "🖼️"
        },
        {
            id: 2,
            title: "Laboratory Services",
            description: "Comprehensive lab tests with rapid turnaround times, supporting both inpatient and outpatient needs.",
            link: "/laboratory-services",
            image: "/images/laboratory-services.webp",

            icon: "🧪"
        },
        {
            id: 3,
            title: "Pharmacy",
            description: "24/7 pharmacy services providing all prescribed medications with expert pharmaceutical guidance.",
            link: "/pharmacy",
            image: "/images/pharmacy.webp",

            icon: "💊"
        },
        {
            id: 4,
            title: "Physiotherapy",
            description: "Rehabilitation services to help patients regain mobility and function after illness or injury.",
            link: "/physiotherapy",
            image: "/images/physiotherapy.webp",

            icon: "🦵"
        },
        {
            id: 5,
            title: "Blood Bank",
            description: "Fully equipped blood bank ensuring safe and timely availability of blood products.",
            link: "/blood-bank",
            image: "/images/blood-bank.webp",

            icon: "🩸"
        },
        {
            id: 6,
            title: "Dialysis Unit",
            description: "Advanced renal care with comfortable dialysis facilities staffed by nephrology specialists.",
            link: "/dialysis-unit",
            image: "/images/dialysis-unit.webp",

            icon: "💓"
        },
        {
            id: 7,
            title: "Ambulance Services",
            description: "24/7 emergency response with fully equipped ambulances and trained paramedical staff.",
            link: "/ambulance-services",
            image: "/images/ambulance-services.webp",

            icon: "🚑"
        },
    ];

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl font-extrabold text-primary font-display sm:text-5xl sm:tracking-tight lg:text-6xl">
                    DISCOVER SYNERGY
                </h1>
                <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600 sm:mt-4">
                    MEDICAL SERVICES
                </p>
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="mt-8 h-1 bg-gradient-to-r from-blue-400 to-teal-400 w-24 mx-auto"
                />
            </motion.div>

            {/* About Synergy Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden mb-16 p-8 relative"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-teal-100 opacity-20 rounded-xl" />
                <div className="relative z-10">
                    <h2 className="text-2xl font-bold text-primary font-display mb-4">About Synergy Super-Specialty Hospital and Cancer Institute</h2>
                    <p className="text-gray-600 text-lg mb-4">
                        Synergy Super-Specialty Hospital and Cancer Institute is a premier healthcare facility dedicated to providing comprehensive medical care with a focus on cancer treatment and survivorship. Our state-of-the-art infrastructure and team of highly skilled professionals ensure world-class healthcare services.
                    </p>
                    <p className="text-gray-600 text-lg">
                        With patient-centered care at our core, we integrate advanced technology with compassionate service across all our support departments to deliver holistic treatment and rehabilitation.
                    </p>
                </div>
            </motion.div>

            {/* Support Services Grid */}
            <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={containerVariants}
                className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
                {services.map((service) => (
                    <motion.div
                        key={service.id}
                        variants={cardVariants}
                        whileHover="hover"
                        className="group relative overflow-hidden rounded-xl shadow-lg bg-white"
                    >
                        <div className="relative h-48 overflow-hidden">
                            <motion.div
                                variants={imageVariants}
                                className="relative size-full"
                            >
                                <ImageWithFallback
                                    fallbackSrc="/fallback-image.webp"
                                    src={service.image}
                                    fill
                                    alt={service.title}
                                    className="size-full object-cover"
                                />
                            </motion.div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                            <div className="absolute top-4 right-4 text-4xl bg-white/20 backdrop-blur-sm rounded-full w-14 h-14 flex items-center justify-center p-4">
                                {service.icon}
                            </div>
                            <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-fuchsia-50 font-display">
                                {service.title}
                            </h3>
                        </div>

                        <div className="p-6">
                            <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
                            <Link
                                href={service.link}
                                className="inline-flex items-center px-5 py-2.5 rounded-lg font-medium text-white bg-gradient-to-r from-blue-500 to-teal-400 group-hover:from-blue-600 group-hover:to-teal-500 transition-all duration-300 shadow-md group-hover:shadow-lg"
                            >
                                View All
                                <svg className="ml-2 -mr-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

        </div>
    );
};

export default SupportServicesPage;
