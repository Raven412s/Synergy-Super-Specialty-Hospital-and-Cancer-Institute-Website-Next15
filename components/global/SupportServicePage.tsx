"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ImageWithFallback } from "@/components/global/ImageWithFallback"
import FaqAccordion from "../homepage/FaqAccordion"
import { SupportServiceProps } from "@/types"



export const SupportServicePage = ({
    heroImage,
    title,
    description,
    services,
    preparationTips,
    whyChoose,
    faqs,
    cta
}: SupportServiceProps) => {
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
                    src={heroImage}
                    alt={title}
                    width={1200}
                    height={500}
                    className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent flex items-center px-8">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
                        <p className="text-lg text-blue-100 mb-6">{description}</p>
                        <Button className="bg-white text-blue-900 hover:bg-blue-100">
                            Get Started
                        </Button>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="mb-16">
                <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
                    Our Services
                </h2>
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
                                <div className="md:w-1/3">
                                    <ImageWithFallback
                                        fallbackSrc="/fallback-image.webp"
                                        src={service.icon}
                                        alt={service.title}
                                        width={2560}
                                        height={2560}
                                        className="w-full max-w-xs mx-auto shadow-md shadow-indigo-100"
                                    />
                                </div>
                                <div className="md:w-2/3">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                                    <p className="text-gray-700 mb-4">{service.details}</p>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <h4 className="font-semibold text-blue-800 mb-2">Common Uses:</h4>
                                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                         {service.commonUses && service.commonUses.map((li,index)=>
                                        <li key={index}>{li}</li>
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
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                    {whyChoose.title}
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {whyChoose.items.map((item, index) => (
                        <div key={index} className="space-y-2">
                            <h3 className="font-medium text-lg flex items-center">
                                <Badge className="mr-2">{item.badge}</Badge>
                                {item.title}
                            </h3>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Preparation & FAQ */}
            <section className="grid md:grid-cols-2 gap-12 mb-16">
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Preparation Guidelines
                    </h2>
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
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">FAQs</h2>
                    <div className="space-y-4">
                        <FaqAccordion items={faqs} />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-blue-700 text-white rounded-xl p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">{cta.title}</h2>
                <p className="mb-6 max-w-2xl mx-auto">{cta.description}</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    {cta.buttons.map((button, index) => (
                        <Button
                            key={index}
                            variant={button.variant}
                            className={button.variant === "outline"
                                ? "text-white border-white bg-transparent hover:bg-blue-600 px-8"
                                : "bg-white text-blue-900 hover:bg-blue-100 px-8"
                            }
                            onClick={button.onClick}
                        >
                            {button.text}
                        </Button>
                    ))}
                </div>
            </section>
        </div>
    )
}
