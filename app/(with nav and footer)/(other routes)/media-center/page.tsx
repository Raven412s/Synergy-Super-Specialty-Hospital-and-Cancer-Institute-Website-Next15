// app/media-center/page.tsx
import React from 'react'

export const metadata = {
    title: "Media Center - Synergy Super Speciality Hospital, Gorakhpur",
    description:
      "Stay updated with the latest news, press releases, and media coverage from Synergy Super Speciality Hospital, Gorakhpur.",
    keywords: [
      "Synergy Hospital media",
      "Synergy news",
      "hospital press release Gorakhpur",
      "Synergy hospital updates",
      "medical events Gorakhpur",
      "Synergy Super Speciality news",
    ],
    authors: [{ name: "Synergy Super Speciality Hospital" }],
    openGraph: {
      title: "Media Center - Synergy Super Speciality Hospital",
      description:
        "Catch all the latest updates and media buzz from Synergy Super Speciality Hospital, Gorakhpur.",
      url: "https://synergy-website-alpha.vercel.app/media-center",
      siteName: "Synergy Super Speciality Hospital",
      images: [
        {
          url: "/og-image-media.jpg", // Add this image in /public
          width: 1200,
          height: 630,
          alt: "Media updates from Synergy Hospital",
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
      canonical: "https://yourdomain.com/media-center",
    },
    icons: {
      icon: "/favicon.ico",
    },
    themeColor: "#007f5f",
    twitter: {
      card: "summary_large_image",
      title: "Media Center - Synergy Super Speciality Hospital",
      description:
        "Explore the latest hospital media coverage, health stories, and announcements from Synergy, Gorakhpur.",
      images: ["/og-image-media.jpg"],
      creator: "@synergy_hospital",
    },
  };


 const MediaCenter = () => {
  return (
    <main id='Overview' style={{backgroundImage: `url("/bg-section-opacity-80.png")`}}>
    <section className='min-h-screen w-full px-2 md:px-6 lg:px-24 py-4' id='Our-Mission'>
        <div className="lg:p-8 md:px-4 px-2 py-5 rounded-3xl bg-white flex flex-col lg:flex-row border-3 border-neutral-200 shadow-expanded">

        </div>
    </section>
    <section className='min-h-screen w-full px-2 md:px-6 lg:px-24 py-4' id='Our-Vision'>
        <div className="lg:p-8 md:px-4 px-2 py-5 rounded-3xl bg-white flex flex-col lg:flex-row-reverse border-3 border-neutral-200 shadow-expanded">

        </div>
    </section>
    <section
        className="min-h-screen w-full  px-2 md:px-6 lg:px-24 py-4 my-12"
    >
        <div className='lg:p-8 md:px-4 px-2 py-5 rounded-3xl bg-white border-3 space-y-12 border-neutral-200 shadow-expanded'>

        </div>
    </section>
    <section
        id="Leadership"
        className="min-h-screen w-full  px-2 md:px-6 lg:px-24 py-10"
    >
        <div className='lg:p-8 md:px-4 px-2 py-5 rounded-3xl bg-white border-3 space-y-12 border-neutral-200 shadow-expanded'>
        </div>
    </section>
    <section
        id="Awards-and-Accolades"
        className="min-h-screen w-full  px-2 md:px-6 lg:px-24 py-10"
    >
        <div className='lg:p-8 md:px-4 px-2 py-5 rounded-3xl bg-white border-3 space-y-12 border-neutral-200 shadow-expanded'>

        </div>
    </section>

    <section
        id="Achievements-and-Milestones"
        className="min-h-screen w-full  px-2 md:px-6 lg:px-24 py-10"
    >
        <div className="lg:p-8 md:px-4 px-2 py-5 rounded-3xl bg-white border-3 space-y-12 border-neutral-200 shadow-expanded">

        </div>
    </section>

    <section
        id="A-Day-at-Synergy"
        className="min-h-screen w-full  px-2 md:px-6 lg:px-24 py-10"
    >
        <div className="lg:p-8 md:px-4 px-2 py-5 rounded-3xl bg-white border-3 space-y-12 border-neutral-200 shadow-expanded">

        </div>
    </section>

</main>
  )
}

export default MediaCenter
