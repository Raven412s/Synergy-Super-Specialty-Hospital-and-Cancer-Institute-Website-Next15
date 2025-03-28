import FaqAccordion from '@/components/homepage/FaqAccordion'
import { LeaderCard } from '@/components/the-synergy-story/LeaderCard';
import { excellenceItems, Leaders } from '@/data'
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
        url: "https://synergy-website-alpha.vercel.app/the-synergy-story",
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
        canonical: "https://synergy-website-alpha.vercel.app/the-synergy-story",
    },
};


const TheSynergyStory = () => {
    return (
        <main id='Overview' style={{backgroundImage: `url("/bg-section-opacity-80.png")`}}>
            <section className='min-h-screen w-full px-2 md:px-6 lg:px-24 py-4' id='Our-Mission'>
                <div className="lg:p-8 md:px-4 px-2 py-5 rounded-3xl bg-white flex flex-col lg:flex-row border-3 border-neutral-200 shadow-expanded">
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
            <section className='min-h-screen w-full px-2 md:px-6 lg:px-24 py-4' id='Our-Vision'>
                <div className="lg:p-8 md:px-4 px-2 py-5 rounded-3xl bg-white flex flex-col lg:flex-row-reverse border-3 border-neutral-200 shadow-expanded">
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
                className="min-h-screen w-full  px-2 md:px-6 lg:px-24 py-4 my-12"
            >
                <div className='lg:p-8 md:px-4 px-2 py-5 rounded-3xl bg-white border-3 space-y-12 border-neutral-200 shadow-expanded'>
                    <div className='container mx-auto   '>
                        <h2 className='text-heading '>Synergy Excellence</h2>
                        <div className="space-y-4 ">
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
                    <div className=' flex items-center justify-start w-full'>
                        <FaqAccordion items={excellenceItems} />
                    </div>
                </div>

            </section>
            <section
                id="Leadership"
                className="min-h-screen w-full  px-2 md:px-6 lg:px-24 py-10"
            >
                <div className='lg:p-8 md:px-4 px-2 py-5 rounded-3xl bg-white border-3 space-y-12 border-neutral-200 shadow-expanded'>
                    {/* Heading + Subheading */}
                    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-10 space-y-6">
                        {/* Heading */}
                        <h2 className="text-heading text-left">Meet Our Leadership</h2>

                        {/* Subheading + Description */}
                        <div className="space-y-4">
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                Guided by a team of experienced professionals dedicated to driving innovation, compassion, and excellence in healthcare.
                            </p>

                            <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                                Synergy Super Speciality Hospital and Cancer Institute (SSSHCI) is committed to offering world-class, affordable,
                                and comprehensive cancer care. With a team of passionate oncology specialists and a focus on innovation and empathy,
                                we provide cutting-edge treatments tailored to each patient’s needs. At SSSHCI, clinical excellence is not just a goal —
                                it’s our way of serving humanity with dignity and courage.
                            </p>
                        </div>
                    </div>



                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Leaders.map((leader, i) => (
                            <LeaderCard
                                key={i}
                                image={leader.image || "/Dummy.png"}
                                name={leader.name || "Leader Name"}
                                role={leader.role || "Senior Doctor"}
                                description={leader.description || "No description provided"}
                                onReadMore={leader.onReadMore}
                                onDownload={leader.onDownload}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <section
                id="Awards-and-Accolades"
                className="min-h-screen w-full  px-2 md:px-6 lg:px-24 py-10"
            >
                <div className='lg:p-8 md:px-4 px-2 py-5 rounded-3xl bg-white border-3 space-y-12 border-neutral-200 shadow-expanded'>
                    {/* Heading + Subheading */}
                    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-10 space-y-6">
                        {/* Heading */}
                        <h2 className="text-heading text-left">Awards and Accolades</h2>

                        {/* Subheading + Description */}
                        <div className="space-y-4">
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                Recognized for excellence in healthcare, patient care, and medical innovation.
                            </p>

                            <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                                Over the years, Synergy Super Speciality Hospital and Cancer Institute (SSSHCI) has earned numerous accolades for our unwavering commitment to clinical excellence, compassionate care, and cutting-edge research. These honors reflect the dedication of our doctors, nurses, and staff who work tirelessly to deliver outstanding healthcare services. We are proud to be acknowledged for setting new standards in oncology and multi-specialty care, both regionally and nationally.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="Achievements-and-Milestones"
                className="min-h-screen w-full  px-2 md:px-6 lg:px-24 py-10"
            >
                <div className="lg:p-8 md:px-4 px-2 py-5 rounded-3xl bg-white border-3 space-y-12 border-neutral-200 shadow-expanded">
                    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-10 space-y-6">
                        {/* Heading */}
                        <h2 className="text-heading text-left">Achievements and Milestones</h2>

                        {/* Subheading + Description */}
                        <div className="space-y-4">
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                Celebrating our journey of growth, innovation, and impact in healthcare.
                            </p>

                            <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                                From pioneering treatments to expanding our facilities, Synergy Super Speciality Hospital and Cancer Institute (SSSHCI) has crossed significant milestones over the years. We have introduced advanced medical technologies, opened new departments, and reached more communities with our healing mission. Every achievement reflects our resolve to redefine healthcare excellence and make a difference in countless lives.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="A-Day-at-Synergy"
                className="min-h-screen w-full  px-2 md:px-6 lg:px-24 py-10"
            >
                <div className="lg:p-8 md:px-4 px-2 py-5 rounded-3xl bg-white border-3 space-y-12 border-neutral-200 shadow-expanded">
                    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-10 space-y-6">
                        {/* Heading */}
                        <h2 className="text-heading text-left">A Day at Synergy</h2>

                        {/* Subheading + Description */}
                        <div className="space-y-4">
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                Experience the rhythm of compassion, care, and clinical precision—every single day.
                            </p>

                            <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                                At SSSHCI, each day begins with a shared commitment to healing. From morning rounds and multidisciplinary team huddles to life-saving surgeries and comforting patient interactions, our hospital operates like a well-coordinated symphony. It's a place where expertise meets empathy, technology meets touch, and every action is rooted in our core purpose—serving humanity with dignity.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default TheSynergyStory
