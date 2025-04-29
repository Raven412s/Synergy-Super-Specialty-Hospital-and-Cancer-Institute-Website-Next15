import AyushmaanBharatCard from "@/components/global/AyushmaanBharatCard";
import { FloatingBarWrapper } from "@/components/global/FloatingBarWrapper";
import FaqAccordion from "@/components/homepage/FaqAccordion";
import { LeaderCards } from "@/components/homepage/LeaderCards";
import NewsSlider from "@/components/homepage/NewsSlider";
import { PatientTestimonials } from "@/components/homepage/PatientTestimonials";
import { SpecialitiesSection } from "@/components/homepage/SpecialitiesSection";
import { TestimonialCards } from "@/components/homepage/TestimonialCards";
import { faqItems } from "@/data";
import { useTranslations } from "next-intl";

export const Homepage = () => {
    const t = useTranslations('homepage');
    return (
        <main className="w-full flex flex-col items-center justify-center">
            {/* Hero Section with Video */}
            <section id="banner" className="relative min-h-screen w-full ">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    aria-label="Promotional video showcasing Synergy Hospital"
                >
                    <source src="https://res.cloudinary.com/dzynl3hzk/video/upload/v1745917399/s1c21opqc4tub6p20hr5.webm" type="video/webm" />
                </video>
                <FloatingBarWrapper />
                <div className="absolute bottom-5 w-full flex justify-center px-4">
                    <a
                        href="#specialties"
                        className="text-white bg-black px-4 py-2 rounded-lg hover:bg-gray-800 transition text-sm sm:text-base"
                    >
                        {t('exploreMore')}
                    </a>
                </div>
            </section>

            <div className="w-screen text-black p-5 ">
                {/* Ayushmaan Bharat */}
                <AyushmaanBharatCard />
            </div>
            {/* Specialties Section */}
            <SpecialitiesSection />
            {/*The Leader Card Grid*/}
            <LeaderCards />


            {/* Testimonial Cards */}
            <TestimonialCards />

            {/* News Section */}
            <section className="w-full bg-gradient-to-b from-indigo-50 to-indigo-100 px-4 sm:px-8 lg:px-20 py-10">
                <div className="max-w-7xl mx-auto">
                    <NewsSlider />
                </div>
            </section>

            {/* Patient Speaks */}
            <PatientTestimonials />

            {/* FAQs */}
            <section className="w-full bg-gradient-to-t from-white to-slate-100 px-4 sm:px-8 lg:px-20 py-10">
                <div className="max-w-7xl mx-auto space-y-6">
                    <div className="space-y-4 text-center">
                        <h2 className="text-heading text-2xl sm:text-3xl lg:text-4xl">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base lg:text-lg">
                            Find answers to common questions about our services, treatments, appointments...
                        </p>
                    </div>
                    <FaqAccordion items={faqItems} />
                </div>
            </section>
        </main>
    )
}
