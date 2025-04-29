'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaBaby, FaClinicMedical, FaLungs, FaProcedures, FaRunning } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const services = {
    ICU: {
        title: "Intensive Care Unit (ICU)",
        description: "Our state-of-the-art ICU is equipped with advanced monitoring systems and staffed by highly trained intensivists and critical care nurses. We provide 24/7 care for patients with life-threatening conditions.",
        features: [
            "24/7 specialist supervision",
            "Advanced hemodynamic monitoring",
            "Ventilator support",
            "Isolation rooms available",
            "Post-operative care"
        ],
        image: "/example/1.jpeg"
    },
    NICU: {
        title: "Neonatal Intensive Care Unit (NICU)",
        description: "Our Level III NICU provides specialized care for premature and critically ill newborns. With a team of neonatologists and specialized nurses, we offer the highest level of neonatal care.",
        features: [
            "Level III care facility",
            "Thermoregulated incubators",
            "Advanced respiratory support",
            "Kangaroo mother care",
            "Developmental care approach"
        ],
        image: "/example/2.jpeg"
    },
    OT: {
        title: "Operation Theater (OT)",
        description: "Our modular operation theaters are equipped with cutting-edge technology for all surgical specialties. We maintain strict aseptic protocols to ensure patient safety.",
        features: [
            "Laminar airflow systems",
            "Advanced anesthesia workstations",
            "Intraoperative imaging",
            "Minimally invasive surgery setups",
            "24/7 emergency OT availability"
        ],
        image: "/example/3.jpeg"
    },
    Endoscopy: {
        title: "Endoscopy Unit",
        description: "Our endoscopy unit performs diagnostic and therapeutic procedures with the latest HD scopes and imaging systems. We specialize in both upper and lower GI endoscopies.",
        features: [
            "High-definition scopes",
            "ERCP capabilities",
            "Capsule endoscopy",
            "Sedation anesthesia",
            "Same-day procedures"
        ],
        image: "/example/4.jpeg"
    },
    Physiotherapy: {
        title: "Physiotherapy Department",
        description: "Our physiotherapy department offers comprehensive rehabilitation services with evidence-based protocols. We cater to orthopedic, neurological, and cardiopulmonary conditions.",
        features: [
            "Electrotherapy modalities",
            "Manual therapy techniques",
            "Sports rehabilitation",
            "Post-surgical rehab",
            "Pediatric physiotherapy"
        ],
        image: "/example/5.jpeg"
    }
} as const;

type ServiceKey = keyof typeof services;

const SpecializedServices = () => {
    const [activeTab, setActiveTab] = useState<ServiceKey>('ICU');
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const serviceKeys = Object.keys(services) as ServiceKey[];

    const stackedImages = serviceKeys.map(key => services[key].image);

    const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: contentRef, inView: contentInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: emergencyRef, inView: emergencyInView } = useInView({ triggerOnce: true, threshold: 0.1 });

    // Image cycling effect
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveImageIndex(prev => (prev + 1) % stackedImages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Icon mapping with type safety
    const getIcon = (service: ServiceKey) => {
        const iconConfig = {
            ICU: { icon: FaLungs, color: 'text-blue-600' },
            NICU: { icon: FaBaby, color: 'text-pink-500' },
            OT: { icon: FaProcedures, color: 'text-green-600' },
            Endoscopy: { icon: FaClinicMedical, color: 'text-purple-600' },
            Physiotherapy: { icon: FaRunning, color: 'text-orange-500' }
        };
        const IconComponent = iconConfig[service].icon;
        return <IconComponent className={`text-3xl ${iconConfig[service].color}`} />;
    };

    // Animation configurations
    const fadeInVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const slideInVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <motion.div
                    ref={headerRef}
                    initial="hidden"
                    animate={headerInView ? "visible" : "hidden"}
                    variants={fadeInVariants}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                        Specialized Services
                    </h1>
                    <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
                        Advanced medical care with cutting-edge technology and expert specialists
                    </p>
                </motion.div>

                            {/* Stacked Images Section - Improved */}

                            <div className="relative h-64 my-5 rounded-xl outline-4 overflow-hidden w-72 ">
                    {stackedImages.map((image, index) => (
                        <motion.div
                            key={image}
                            className="absolute inset-0"
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: activeImageIndex === index ? 1 : 0,
                                zIndex: activeImageIndex === index ? 10 : index
                            }}
                            transition={{ duration: 1, ease: 'easeInOut' }}
                            aria-hidden={activeImageIndex !== index}
                        >
                            <Image
                                src={image}
                                alt={services[serviceKeys[index]].title}
                                fill
                                className="object-cover"
                                priority={index === 0}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Service Tabs */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={slideInVariants}
                    className="flex flex-wrap justify-center mb-8 gap-2"
                >
                    {serviceKeys.map((service) => (
                        <motion.button
                            key={service}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveTab(service)}
                            className={`flex items-center px-6 py-3 rounded-lg transition-all ${activeTab === service
                                    ? 'bg-gradient-to-b from-pink-300 to-synergy-pink text-white shadow-md'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                                }`}
                            aria-label={`Show ${service} details`}
                        >
                            {getIcon(service)}
                            <span className="ml-2 font-medium">{service}</span>
                        </motion.button>
                    ))}
                </motion.div>

                {/* Content Section */}
                <motion.div
                    ref={contentRef}
                    initial="hidden"
                    animate={contentInView ? "visible" : "hidden"}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                    }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                    <div className="md:flex">
                        <div className="md:flex-1 p-8 md:p-12">
                            <motion.h2 variants={fadeInVariants} className="text-3xl font-bold text-gray-900 mb-4">
                                {services[activeTab].title}
                            </motion.h2>

                            <motion.p variants={fadeInVariants} className="text-lg text-gray-600 mb-6">
                                {services[activeTab].description}
                            </motion.p>

                            <div className="flex">
                                <div className="flex-1">
                                    <motion.h3 variants={fadeInVariants} className="text-xl font-semibold text-gray-800 mb-3">
                                        Key Features:
                                    </motion.h3>

                                    <motion.ul variants={fadeInVariants} className="space-y-2 mb-8">
                                        {services[activeTab].features.map((feature, index) => (
                                            <li key={index} className="flex items-start">
                                                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </motion.ul>
                                </div>

                                <div className="relative flex-1">
                                    <Image
                                        src={services[activeTab].image}
                                        alt={services[activeTab].title}
                                        fill
                                        className="object-cover rounded-xl outline-4"
                                    />
                                </div>
                            </div>

                            <motion.div variants={fadeInVariants} className="mt-6">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md"
                                >
                                    Book an Appointment
                                </motion.button>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>



                {/* Emergency Banner */}
                <motion.div
                    ref={emergencyRef}
                    initial={{ opacity: 0, y: 20 }}
                    animate={emergencyInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="mt-12 bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg"
                >
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <h3 className="text-sm font-medium text-red-800">Emergency Services Available 24/7</h3>
                            <div className="mt-2 text-sm text-red-700">
                                <p>For emergency cases in any of these specialized units, please call our emergency hotline at <strong>+1 (555) 123-4567</strong> or proceed directly to our emergency department.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SpecializedServices;
