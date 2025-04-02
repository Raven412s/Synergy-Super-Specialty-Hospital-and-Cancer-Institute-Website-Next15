// app/page.tsx
import { FloatingBarWrapper } from "@/components/global/FloatingBarWrapper";
import FaqAccordion from "@/components/homepage/FaqAccordion";
import NewsSlider from "@/components/homepage/NewsSlider";
import { faqItems } from "@/data";
import { SpecialitiesSection } from "@/components/homepage/SpecialitiesSection";
import { LeaderCards } from "@/components/homepage/LeaderCards";
import { TestimonialCards } from "@/components/homepage/TestimonialCards";
import { PatientTestimonials } from "@/components/homepage/PatientTestimonials";


export const metadata = {
    title: "Synergy Super Speciality Hospital - Best Cancer Treatment in Gorakhpur",
    description:
        "Synergy Super Speciality Hospital is Gorakhpur's leading cancer hospital offering advanced, affordable cancer care with a compassionate touch.",
    keywords: [
        "Synergy Hospital Gorakhpur",
        "Cancer hospital Gorakhpur",
        "Best cancer treatment UP",
        "Affordable cancer care",
        "Oncology specialist Gorakhpur",
        "Synergy Super Speciality",
        "Top cancer doctors Gorakhpur",
    ],
    authors: [{ name: "Synergy Super Speciality Hospital" }],
    openGraph: {
        title: "Synergy Super Speciality Hospital - Best Cancer Hospital in Gorakhpur",
        description:
            "Get world-class cancer treatment at Synergy Hospital, Gorakhpur. Our expert oncologists and modern facilities offer hope and healing.",
        url: "https://synergy-website-alpha.vercel.app/",
        siteName: "Synergy Super Speciality Hospital",
        images: [
            {
                url: "/og-image-home.jpg", // Add this image in /public
                width: 1200,
                height: 630,
                alt: "Synergy Hospital Gorakhpur",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
    alternates: {
        canonical: "https://synergy-website-alpha.vercel.app/",
    },
    icons: {
        icon: "/favicon.ico",
    },
    twitter: {
        card: "summary_large_image",
        title: "Synergy Super Speciality Hospital - Best Cancer Hospital in Gorakhpur",
        description:
            "Get advanced cancer treatment from experienced oncologists at Synergy Hospital, Gorakhpur.",
        images: ["/og-image-home.jpg"],
        creator: "@synergy_hospital",
    },
};


export default function Home() {

    return (
        <main className="w-full">
            {/* Hero Section with Video */}
            <section id="banner" className="relative min-h-screen w-full">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    aria-label="Promotional video showcasing Synergy Hospital"
                >
                    <source src="https://res.cloudinary.com/dzynl3hzk/video/upload/v1743251914/baakragdxlbykwpi5ubu.webm" type="video/webm" />
                    <source src="https://res.cloudinary.com/dzynl3hzk/video/upload/v1743251922/wfi5yxe5wotlvfawbtpw.mp4" type="video/mp4" />
                </video>
                <FloatingBarWrapper />
                <div className="absolute bottom-5 w-full flex justify-center px-4">
                    <a
                        href="#specialties"
                        className="text-white bg-black px-4 py-2 rounded-lg hover:bg-gray-800 transition text-sm sm:text-base"
                    >
                        Explore More
                    </a>
                </div>
            </section>

            {/* Specialties Section */}
        <SpecialitiesSection/>
        {/*The Leader Card Grid*/}
        <LeaderCards/>


            {/* Testimonial Cards */}
        <TestimonialCards/>

            {/* News Section */}
            <section className="w-full bg-gradient-to-b from-indigo-50 to-indigo-100 px-4 sm:px-8 lg:px-20 py-10">
                <div className="max-w-7xl mx-auto">
                    <NewsSlider />
                </div>
            </section>

            {/* Patient Speaks */}
        <PatientTestimonials />

            {/* FAQs */}
            <section className="w-full bg-gradient-to-t from-white to-indigo-50 px-4 sm:px-8 lg:px-20 py-10">
                <div className="max-w-7xl mx-auto space-y-6">
                    <div className="space-y-4">
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

    );
}
