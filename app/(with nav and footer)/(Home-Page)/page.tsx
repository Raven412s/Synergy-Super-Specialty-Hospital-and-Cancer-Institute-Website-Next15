// app/page.tsx
import { FloatingBarWrapper } from "@/components/global/FloatingBarWrapper";
import PatientTestimonialMarquee from "@/components/global/PatientTestimonialMarquee";
import FaqAccordion from "@/components/homepage/FaqAccordion";
import NewsSlider from "@/components/homepage/NewsSlider";
import SliderWithTriggers from "@/components/homepage/SliderWithTriggers";
import TestimonialCard from "@/components/homepage/TestimonialCard";
import { faqItems, testimonialsForMarquee } from "@/data";
import { hospitalHighlights } from "./_data";


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
      <source src="/Banner.webm" type="video/webm" />
      <source src="/Banner.mp4" type="video/mp4" />
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
  <section
    id="specialties"
    className="min-h-screen w-full bg-gradient-to-b from-transparent via-[#dceaff30] to-fuchsia-100 px-4 sm:px-8 lg:px-20 py-10 flex items-center justify-center"
  >
    <div className="max-w-7xl w-full space-y-6">
      <div className="space-y-4">
        <h1 className="text-heading text-2xl sm:text-3xl lg:text-4xl">
          Discover Our Centres of Clinical Excellence
        </h1>
        <p className="font-sans text-sm sm:text-base lg:text-lg text-slate-700">
          At Synergy Superspecialty Hospital and Cancer Institute, we are committed to delivering world-class healthcare...
        </p>
      </div>

      <div className="mt-6">
        <SliderWithTriggers />
      </div>
    </div>
  </section>

  {/* Testimonial Cards */}
  <section
    className="min-h-screen w-full bg-gradient-to-b from-transparent via-[#dceaff30] to-indigo-100 px-4 sm:px-8 lg:px-20 py-10 flex items-center justify-center"
  >
    <div className="max-w-7xl w-full space-y-10">
      <div className="space-y-4">
        <h1 className="text-heading text-2xl sm:text-3xl lg:text-4xl">
          Transforming Lives Through Healthcare Excellence
        </h1>
        <p className="font-sans text-sm sm:text-base lg:text-lg text-slate-700">
          Synergy Super-specialty Hospital and Cancer Institute, established in 2021, is committed to delivering exceptional healthcare...
        </p>
      </div>

      <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
        {hospitalHighlights.map((cardDetails, index) => (
          <TestimonialCard {...cardDetails} key={index} />
        ))}
      </div>
    </div>
  </section>

  {/* News Section */}
  <section className="w-full bg-gradient-to-b from-indigo-100 to-indigo-200 px-4 sm:px-8 lg:px-20 py-10">
    <div className="max-w-7xl mx-auto">
      <NewsSlider />
    </div>
  </section>

  {/* Patient Speaks */}
  <section className="w-full bg-gradient-to-b from-fuchsia-100 to-indigo-200 px-4 sm:px-8 lg:px-20 py-10">
    <div className="max-w-7xl mx-auto space-y-6">
      <h1 className="text-heading text-2xl sm:text-3xl lg:text-4xl">
        See What Our Patients Say
      </h1>
      <PatientTestimonialMarquee marqueeArray={testimonialsForMarquee} />
    </div>
  </section>

  {/* FAQs */}
  <section className="w-full bg-gradient-to-t from-white to-indigo-200 px-4 sm:px-8 lg:px-20 py-10">
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="space-y-4">
        <h1 className="text-heading text-2xl sm:text-3xl lg:text-4xl">
          Frequently Asked Questions
        </h1>
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
