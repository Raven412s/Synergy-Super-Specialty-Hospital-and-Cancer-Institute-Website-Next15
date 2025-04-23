"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ImageWithFallback } from "@/components/global/ImageWithFallback"
import FaqAccordion from "@/components/homepage/FaqAccordion"

export function DiagnosticImaging() {
    const services = [
        {
            id: "xray",
            title: "X-Ray",
            description: "High-resolution imaging for bones and chest examinations",
            icon: "/icons/xray.svg",
            details: "Our digital X-ray technology provides immediate high-quality images with significantly lower radiation exposure compared to traditional methods. Ideal for bone fractures, chest examinations, and dental imaging."
        },
        {
            id: "mri",
            title: "MRI Scan",
            description: "Detailed imaging of organs and tissues using magnetic fields",
            icon: "/icons/mri.svg",
            details: "Our 3T MRI scanners offer exceptional image quality for neurological, musculoskeletal, and abdominal imaging. The wide-bore design provides a more comfortable experience for patients with claustrophobia."
        },
        {
            id: "ctscan",
            title: "CT Scan",
            description: "Cross-sectional views of body structures with precision",
            icon: "/icons/ctscan.svg",
            details: "Advanced 128-slice CT technology enables rapid scanning with exceptional detail, reducing scan times and patient discomfort. Particularly effective for trauma cases, cancer detection, and vascular studies."
        },
        {
            id: "ultrasound",
            title: "Ultrasound",
            description: "Non-invasive imaging for abdominal and obstetric evaluation",
            icon: "/icons/ultrasound.svg",
            details: "Our ultrasound services include abdominal, pelvic, obstetric, vascular, and small parts examinations. Using the latest Doppler technology, we provide comprehensive evaluations without radiation exposure."
        },
        {
            id: "mammography",
            title: "Mammography",
            description: "Specialized imaging for breast tissue examination",
            icon: "/icons/mammogram.svg",
            details: "Digital mammography with tomosynthesis (3D mammography) provides clearer images with fewer callbacks. Our comfortable mammography suites are staffed by specialized female technologists for your convenience."
        },
        {
            id: "fluoroscopy",
            title: "Fluoroscopy",
            description: "Real-time moving images of internal structures",
            icon: "/icons/fluoroscopy.svg",
            details: "Used for procedures like barium studies, joint injections, and swallowing evaluations. Our pulsed fluoroscopy technique minimizes radiation dose while maintaining excellent image quality."
        }
    ]

    const faqs = [
        {
            question: "How long does an imaging test take?",
            answer: "Most standard X-rays take 15-30 minutes. MRI/CT scans typically take 30-60 minutes depending on the area being scanned."
        },
        {
            question: "Is imaging safe during pregnancy?",
            answer: "Ultrasound is safe during pregnancy. X-rays and CT scans are generally avoided unless absolutely necessary. Always inform your doctor if you're pregnant."
        }
    ]
    const preparationTips = [
        "Fasting may be required for certain scans (4-6 hours)",
        "Wear comfortable, metal-free clothing",
        "Inform staff about any implants or pregnancy",
        "Some procedures may require contrast injection",
        "Bring previous imaging reports if available"
    ]

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Hero Section */}
            <section className="relative rounded-xl overflow-hidden mb-16">
                <ImageWithFallback
                    fallbackSrc="/fallback-image.webp"
                    src="/diagnostic-imaging-hero.jpg"
                    alt="Diagnostic Imaging"
                    width={1200}
                    height={500}
                    className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent flex items-center px-8">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl font-bold text-white mb-4">Diagnostic Imaging Services</h1>
                        <p className="text-lg text-blue-100 mb-6">
                            Advanced imaging technology for accurate diagnosis and treatment planning
                        </p>
                        <Button className="bg-white text-blue-900 hover:bg-blue-100">
                            Schedule an Appointment
                        </Button>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="mb-16">
                <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Our Imaging Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <Card key={service.id} className="hover:shadow-lg transition-shadow">
                            <CardHeader className="flex flex-row items-center space-x-4">
                                <ImageWithFallback
                                    fallbackSrc="/fallback-image.webp"
                                    src={service.icon}
                                    alt={service.title}
                                    width={1280}
                                    height={1280}
                                    className="h-12 w-12"
                                />
                                <CardTitle className="text-xl">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">{service.description}</p>
                                <Button
                                    variant="link"
                                    className="px-0 mt-4 text-blue-600"
                                    onClick={() => scrollToSection(service.id)}
                                >
                                    Learn more →
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Service Details Sections */}
            <section className="mb-16">
                <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Service Details</h2>
                <div className="space-y-16">
                    {services.map((service) => (
                        <div key={service.id} id={service.id} className="scroll-mt-20">
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="md:w-1/3 shadow-md shadow-indigo-50">
                                    <ImageWithFallback
                                        fallbackSrc="/fallback-image.webp"
                                        src={service.icon}
                                        alt={service.title}
                                        width={1200}
                                        height={1200}
                                        className="w-full max-w-xs mx-auto object-cover"
                                    />
                                </div>
                                <div className="md:w-2/3">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                                    <p className="text-gray-700 mb-4">{service.details}</p>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <h4 className="font-semibold text-blue-800 mb-2">Common Uses:</h4>
                                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                            {service.title === "X-Ray" && (
                                                <>
                                                    <li>Fracture detection</li>
                                                    <li>Pneumonia diagnosis</li>
                                                    <li>Dental examinations</li>
                                                </>
                                            )}
                                            {service.title === "MRI Scan" && (
                                                <>
                                                    <li>Brain and spinal cord imaging</li>
                                                    <li>Joint and soft tissue evaluation</li>
                                                    <li>Tumor detection</li>
                                                </>
                                            )}
                                            {service.title === "CT Scan" && (
                                                <>
                                                    <li>Trauma assessment</li>
                                                    <li>Cancer staging</li>
                                                    <li>Pulmonary embolism detection</li>
                                                </>
                                            )}
                                            {service.title === "Ultrasound" && (
                                                <>
                                                    <li>Pregnancy monitoring</li>
                                                    <li>Gallbladder evaluation</li>
                                                    <li>Thyroid assessment</li>
                                                </>
                                            )}
                                            {service.title === "Mammography" && (
                                                <>
                                                    <li>Breast cancer screening</li>
                                                    <li>Lump evaluation</li>
                                                    <li>Implant assessment</li>
                                                </>
                                            )}
                                            {service.title === "Fluoroscopy" && (
                                                <>
                                                    <li>Barium swallow studies</li>
                                                    <li>Angiography</li>
                                                    <li>Spinal injections</li>
                                                </>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="bg-blue-50 rounded-xl p-8 mb-16">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">Why Choose Our Imaging Center?</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                        <h3 className="font-medium text-lg flex items-center">
                            <Badge className="mr-2">1</Badge> Cutting-Edge Technology
                        </h3>
                        <p className="text-gray-600">
                            Latest generation equipment for superior image quality with lower radiation exposure
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-medium text-lg flex items-center">
                            <Badge className="mr-2">2</Badge> Expert Radiologists
                        </h3>
                        <p className="text-gray-600">
                            Board-certified specialists with subspecialty training in various imaging modalities
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-medium text-lg flex items-center">
                            <Badge className="mr-2">3</Badge> Quick Results
                        </h3>
                        <p className="text-gray-600">
                            Digital reports available within 24-48 hours through our patient portal
                        </p>
                    </div>
                </div>
            </section>

            {/* Preparation & FAQ */}
            <section className="grid md:grid-cols-2 gap-12 mb-16">
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Preparation Guidelines</h2>
                    <ul className="space-y-3">
                        {preparationTips.map((tip, index) => (
                            <li key={index} className="flex items-start">
                                <span className="flex-shrink-0 mt-1 mr-2">•</span>
                                <span className="text-gray-700">{tip}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
                    {/* <div className="space-y-4">
                        <div>
                            <h3 className="font-medium text-lg">How long does an imaging test take?</h3>
                            <p className="text-gray-600 mt-1">
                                Most standard X-rays take 15-30 minutes. MRI/CT scans typically take 30-60 minutes depending on the area being scanned.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-medium text-lg">Is imaging safe during pregnancy?</h3>
                            <p className="text-gray-600 mt-1">
                                Ultrasound is safe during pregnancy. X-rays and CT scans are generally avoided unless absolutely necessary. Always inform your doctor if you're pregnant.
                            </p>
                        </div>
                    </div> */}
                    <FaqAccordion items={faqs} />
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-blue-700 text-white rounded-xl p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Need Diagnostic Imaging Services?</h2>
                <p className="mb-6 max-w-2xl mx-auto">
                    Our team is ready to assist you with advanced diagnostic solutions. Book your appointment today.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button className="bg-white text-blue-900 hover:bg-blue-100 px-8">
                        Call Now: (123) 456-7890
                    </Button>
                    <Button variant="outline" className="text-white bg-transparent border-white hover:bg-blue-600 px-8">
                        Request a Callback
                    </Button>
                </div>
            </section>
        </div>
    )
}
