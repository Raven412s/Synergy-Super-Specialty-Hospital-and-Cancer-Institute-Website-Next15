import FaqAccordion from '@/components/homepage/FaqAccordion'
import { excellenceItems } from '@/data'
import Image from 'next/image'
import React from 'react'

// app/the-synergy-story/page.tsx

export const metadata = {
    title: "Synergy Super Speciality Hospital | Our Mission & Vision",
    description:
      "Discover Synergy's mission to offer affordable, compassionate, and comprehensive cancer care in Gorakhpur and beyond.",
    keywords: [
      "Cancer hospital in Gorakhpur",
      "Synergy Super Speciality Hospital",
      "Oncology",
      "Cancer treatment",
      "Comprehensive care",
      "Cancer surgery",
      "chemotherapy",
      "immunotherapy",
    ],
    authors: [{ name: "Synergy Super Speciality Hospital and Cancer Institute" }],
    openGraph: {
      title: "Synergy Super Speciality Hospital | Our Mission & Vision",
      description:
        "Learn about Synergy's journey to becoming a beacon of hope in cancer treatment through dedication, innovation, and compassion.",
      url: "https://yourdomain.com/the-synergy-story",
      siteName: "Synergy Super Speciality Hospital",
      images: [
        {
          url: "/og-image.jpg", // place the image inside /public folder
          width: 1200,
          height: 630,
          alt: "Synergy Super Speciality Hospital",
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
      canonical: "https://yourdomain.com/the-synergy-story",
    },
  };


const TheSynergyStory = () => {
  return (
    <main id='Overview'>
<section className='min-h-screen w-full bg-gradient-to-b from-transparent via-[#dceaff30] to-fuchsia-100 px-6 lg:px-24 py-4' id='Our-Mission'>
  <div className="p-8 rounded-3xl bg-white flex flex-col lg:flex-row border-3 border-neutral-200 shadow-expanded">
  <div className="w-full lg:w-2/6 mb-6 lg:mb-0 relative">
        {/* Horizontal Image for small and medium screens */}
        <div className="relative block lg:hidden w-full h-64">
            <Image
            src="/mission-horizontal.webp"
            alt="Doctors treating cancer patients at Synergy Super Specialty Hospital"
            fill
            className="object-cover w-full h-full rounded-2xl bg-indigo-900"
            />
        </div>

        {/* Vertical Image for large screens */}
        <div className="relative hidden lg:block w-full h-full">
            <Image
            src="/mission-vertical.webp"
            alt="Doctors treating cancer patients at Synergy Super Specialty Hospital"
            fill
            className="object-cover w-full h-auto rounded-2xl bg-indigo-900"
            />
        </div>
        </div>
    <div className="w-full lg:w-4/6 px-0 lg:px-8 space-y-10">
      <h1 className='text-heading'>Our Mission</h1>
      <div className="space-y-4 text-base sm:text-lg md:text-xl lg:text-xl">
                <p>Synergy Super Speciality Hospital and Cancer Institute (SSSHCI) is dedicated to becoming the <strong className='text-primary'>leading regional destination for cancer care</strong>, empowering patients and eliminating the fear surrounding this disease.  Their mission is to provide <strong className='text-primary'>comprehensive and cost-effective cancer treatment</strong> to all, driven by a passionate team committed to excellence.</p>

                <p>SSSHCI&apos;s core values, embodied in the acronym <strong className='text-primary'>&quot;SYNERGY,&quot;</strong> guide their approach: <strong className='text-primary'>Saviour</strong> (saving lives), <strong className='text-primary'>Youthfully</strong> (working tirelessly), <strong className='text-primary'>Nirvana</strong> (creating a peaceful atmosphere), <strong className='text-primary'>Excellence</strong> (exceeding expectations), <strong className='text-primary'>Respect</strong> (valuing others), <strong className='text-primary'>Gutsy</strong> (facing challenges bravely), and <strong className='text-primary'>Yours</strong> (always dedicated to patient needs).</p>

                <p>Located in the strategically important city of Gorakhpur, SSSHCI serves a vast region, including western Bihar and southern Nepal.  The institute offers <strong className='text-primary'>hope and a comprehensive approach to cancer care</strong>, with a team of oncology specialists and diagnostic consultants providing a full range of services.  These services include <strong className='text-primary'>all types of cancer surgery, chemotherapy, immunotherapy, targeted therapy, hormonal therapy, day-care, palliative care, and pain clinics</strong>, all under one roof.</p>

                <p>SSSHCI&apos;s commitment to <strong className='text-primary'>quality treatment, empathy, compassion, and professionalism</strong> ensures that patients receive the best possible care and support throughout their journey.</p>
              </div>
            </div>
        </div>
      </section>
      <section className='min-h-screen w-full bg-gradient-to-t from-transparent via-[#dceaff30] to-fuchsia-100 px-6 lg:px-24 py-4' id='Our-Vision'>
        <div className="p-8 rounded-3xl bg-white flex flex-col lg:flex-row-reverse border-3 border-neutral-200 shadow-expanded">
    <div className="w-full lg:w-2/6 mb-6 lg:mb-0 relative">
        {/* Horizontal Image for small and medium screens */}
        <div className="relative block lg:hidden w-full h-64">
            <Image
            src="/vision-horizontal.webp"
            alt="Our Vision"
            fill
            className="object-cover w-full h-full rounded-2xl bg-indigo-900"
            />
        </div>

        {/* Vertical Image for large screens */}
        <div className="relative hidden lg:block w-full h-full">
            <Image
            src="/vision-vertical.webp"
            alt="Our Vision"
            fill
            className="object-cover w-full h-auto rounded-2xl bg-indigo-900"
            />
        </div>
        </div>
          <div className="w-full lg:w-4/6 px-0 lg:px-8 space-y-10">
            <h2 className='text-heading'>Synergy Super Specialty Hospital & Cancer Institute: A Beacon of Hope in the Fight Against Cancer</h2>
            <div className="space-y-4 text-base sm:text-lg md:text-xl lg:text-xl">
              <p>Synergy Super Specialty Hospital & Cancer Institute (SSSHCI) stands as a beacon of hope for cancer patients in the Eastern Uttar Pradesh region, aiming to become the <strong className='text-primary'>trusted choice</strong> for comprehensive cancer care. Their vision is clear: to <strong className='text-primary'>eliminate the fear of cancer</strong> and instill the understanding that it is indeed a <strong className='text-primary'>curable disease</strong>. This vision is driven by a passionate team dedicated to providing <strong className='text-primary'>cost-effective</strong> and <strong className='text-primary'>comprehensive cancer care</strong> to all.</p>

              <p>The core values of SSSHCI are deeply ingrained in their approach to patient care. <strong className='text-primary'>Saviour</strong> embodies their commitment to saving precious lives, while <strong className='text-primary'>Youthfully</strong> reflects their unwavering energy and dedication. <strong className='text-primary'>Nirvana</strong> signifies their commitment to creating a peaceful and supportive environment for patients, while <strong className='text-primary'>Excellence</strong> drives them to surpass expectations in every aspect of their work. <strong className='text-primary'>Respect</strong> for the dignity and worth of each patient is paramount, and <strong className='text-primary'>Gutsy</strong> reflects their unwavering determination in the face of challenges. Finally, <strong className='text-primary'>Yours</strong> emphasizes their commitment to being there for their patients every step of the way.</p>

              <p>Located in the vibrant city of Gorakhpur, SSSHCI serves a vast population, extending its reach to western Bihar and southern Nepal. The Institute&apos;s strategic location makes it a vital resource for thousands of cancer patients seeking hope and treatment.</p>

              <p>SSSHCI offers a comprehensive approach to cancer care, encompassing a <strong className='text-primary'>complete team of oncology specialists</strong> and <strong className='text-primary'>diagnostic consultants</strong>. This ensures patients receive a holistic and personalized treatment plan. The Institute boasts <strong className='text-primary'>modern diagnostic and treatment facilities</strong> under one roof, providing a comprehensive and convenient experience.</p>

              <p>Recognizing the emotional and practical needs of cancer patients, SSSHCI prioritizes building a strong support system. Their dedicated services, quality of treatment, empathy, compassion, and professionalism create a nurturing environment for patients and their families. The Institute offers a wide range of services, including <strong className='text-primary'>all types of cancer surgery, chemotherapy, immunotherapy, target therapy, hormonal therapy, day-care, palliative care, and pain clinics</strong>.</p>

              <p>Synergy Super Specialty Hospital & Cancer Institute is more than just a medical facility; it is a symbol of hope, resilience, and unwavering commitment to conquering cancer. Their dedication to providing compassionate and comprehensive care makes them a trusted partner in the fight against this disease.</p>
            </div>
          </div>
        </div>
      </section>
      <section
  className='min-h-screen w-full bg-gradient-to-b from-transparent via-[#dceaff30] to-indigo-100 px-6 lg:px-24 py-4'
>
  <div className='max-w-4xl mx-auto text-center py-12'>
    <h2 className='text-heading'>Synergy Excellence</h2>
<div className="space-y-4">
    {/* sub-heading */}
<p className='text-base md:text-lg text-gray-700 leading-relaxed '>
      A Journey of Compassion, Quality, and Comprehensive Cancer Care
    </p>
    {/* description */}
    <p className='text-base sm:text-lg md:text-xl lg:text-xl text-left'>
      Synergy Super Speciality Hospital and Cancer Institute (SSSHCI) is committed to offering world-class, affordable,
      and comprehensive cancer care. With a team of passionate oncology specialists and a focus on innovation and empathy,
      we provide cutting-edge treatments tailored to each patient’s needs. At SSSHCI, clinical excellence is not just a goal —
      it’s our way of serving humanity with dignity and courage.
    </p>
</div>
  </div>

  {/* Accordion Component  */}
  <div className='max-w-4xl mx-auto'>
    <FaqAccordion items={excellenceItems} />
  </div>
</section>

      <section className='min-h-screen w-full   bg-gradient-to-b from-transparent via-[#dceaff30] to-indigo-100 px-6 lg:px-24 py-4 ' id='Leadership'>Leadership</section>
      <section className='min-h-screen w-full  bg-gradient-to-t from-transparent via-[#dceaff30] to-indigo-100 px-6 lg:px-24 py-4 ' id='Awards-and-Accolades'>Awards-and-Accolades</section>
      <section className='min-h-screen w-full  bg-gradient-to-b from-transparent via-[#dceaff30] to-indigo-100 px-6 lg:px-24 py-4 ' id='Achievements-and-Milestones'>Achievements-and-Milestones</section>
      <section className='min-h-screen w-full  bg-gradient-to-b from-transparent via-[#dceaff30] to-fuchsia-100 px-6 lg:px-24 py-4 ' id='A-Day-at-Synergy'>A-Day-at-Synergy</section>
    </main>
  )
}

export default TheSynergyStory
