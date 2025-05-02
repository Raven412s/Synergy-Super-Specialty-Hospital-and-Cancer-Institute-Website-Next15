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
import Link from "next/link";

export const Homepage = () => {
    const t = useTranslations('homepage');
    return (
        <main className="w-full flex flex-col items-center justify-center ">
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
                    <source src="https://res.cloudinary.com/dzynl3hzk/video/upload/f_auto:video,q_auto:best/s1c21opqc4tub6p20hr5" type="video/webm" />
                </video>
                <div className="absolute lg:bottom-5 bottom-20 w-full flex justify-center px-4">
                    <Link
                        href="#specialties"
                        className="text-white bg-black px-4 py-2 rounded-lg hover:bg-gray-800 transition text-sm sm:text-base"
                    >
                        {t('exploreMore')}
                    </Link>
                </div>
                <FloatingBarWrapper isOnHomePage={true} />
            </section>

            <div className="max-w-screen w-full text-black lg:p-5 p-2 ">
                {/* Ayushmaan Bharat */}
                <AyushmaanBharatCard />
            </div>
            {/* Specialties Section */}
            <SpecialitiesSection />
            {/*The Leader Card Grid*/}
            <div className="bg-gradient-to-b from-fuchsia-100 to-white w-full flex items-center justify-center">
            <LeaderCards />
            </div>


            {/* Testimonial Cards */}
            <TestimonialCards />

            {/* News Section */}
            <section className="w-full bg-white px-4 sm:px-8 lg:px-20 py-10">
                <div className="max-w-6xl mx-auto">
                    <NewsSlider />
                </div>
            </section>

            {/* Patient Speaks */}
            <PatientTestimonials />

            {/* FAQs */}
            <section className="w-full bg-gradient-to-t from-white to-slate-100 px-4 sm:px-8 lg:px-20 py-10">
                <div className="max-w-6xl mx-auto space-y-6">
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
