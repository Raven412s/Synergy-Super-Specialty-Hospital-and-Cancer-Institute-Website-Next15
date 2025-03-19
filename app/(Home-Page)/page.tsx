import NewsSlider from "@/components/homepage/NewsSlider";
import SliderWithTriggers from "@/components/homepage/SliderWithTriggers";
import { Button } from "@/components/ui/button";
import { MoveRightIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full">
      {/* Hero Section with Video */}
      <section className="relative min-h-screen w-full">
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
          {/* Fallback content for accessibility */}
          Your browser does not support the video tag. Please visit our website for more information.
        </video>
        {/* Scroll-to-next-section Button */}
        <div className="absolute bottom-5 w-full flex justify-center">
          <a href="#about" className="text-white bg-black px-4 py-2 rounded-lg hover:bg-gray-800 transition">
            Explore More
          </a>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen w-full bg-gradient-to-b from-transparent via-[#dceaff30] to-fuchsia-100 px-5 lg:px-28 py-10 relative"
      >
        {/* First Texts */}
        <div className="space-y-4">
          <h1 className="text-2xl lg:text-3xl font-display font-semibold">
            Discover Our Centres of Clinical Excellence
          </h1>
          <p className="font-sans text-lg">
            At Synergy Superspecialty Hospital and Cancer Institute, we are committed to delivering world-class healthcare
            through our specialized centers of medical excellence. Our state-of-the-art facilities offer unparalleled
            expertise in various medical disciplines, setting new benchmarks in clinical outcomes globally.
          </p>
        </div>

        {/* Slider */}
        <div className="flex flex-col gap-5 items-center w-full h-auto mt-8">
          <SliderWithTriggers />
        </div>
      </section>

      {/* Additional Section Placeholder */}
      <section
        className="bg-gradient-to-b from-[#dceaff] to-indigo-200 min-h-screen px-5 lg:px-28 py-10"
      >
        <NewsSlider/>
        {/* Add more content or features here */}
        <div className="text-center">
          <h2 className="text-2xl lg:text-4xl font-display font-semibold">
            Unmatched Expertise, Compassionate Care
          </h2>
          <p className="font-sans text-lg mt-4">
            Discover how Synergy Superspecialty Hospital is redefining healthcare with groundbreaking treatments and
            patient-centered care.
          </p>
          <Button className="mt-6" size="lg">
            Learn More <MoveRightIcon className="ml-2" />
          </Button>
        </div>
      </section>
    </main>
  );
}
