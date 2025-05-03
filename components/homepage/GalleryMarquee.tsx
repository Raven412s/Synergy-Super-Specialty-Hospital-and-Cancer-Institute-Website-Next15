"use client"

import { MdArrowOutward } from "react-icons/md";
import Marquee from 'react-fast-marquee'
import { FaPlay } from 'react-icons/fa6'
import { ImageWithFallback } from '../global/ImageWithFallback'
import { Button } from '../ui/button'
import Link from "next/link";

// Sample media data
const galleryItems = [
    {
        id: 1,
        type: 'image',
        title: 'Hospital Inauguration',
        date: '15 Jan 2023',
        category: 'Events',
        image: '/media/inauguration.jpg'
    },
    {
        id: 2,
        type: 'video',
        title: 'Cardiology Department Tour',
        date: '22 Mar 2023',
        category: 'Facilities',
        image: '/media/cardiology-tour.jpg'
    },
    {
        id: 3,
        type: 'image',
        title: 'Annual Health Camp',
        date: '5 Apr 2023',
        category: 'Community',
        image: '/media/health-camp.jpg'
    },
    {
        id: 4,
        type: 'image',
        title: 'New Robotic Surgery System',
        date: '18 May 2023',
        category: 'Technology',
        image: '/media/robotic-surgery.jpg'
    },
    {
        id: 5,
        type: 'video',
        title: 'Patient Success Stories',
        date: '30 Jun 2023',
        category: 'Testimonials',
        image: '/media/patient-story.jpg'
    },
    {
        id: 6,
        type: 'image',
        title: 'Research Symposium',
        date: '12 Jul 2023',
        category: 'Education',
        image: '/media/symposium.jpg'
    }
]

export const GalleryMarquee = () => {

    return (
        <div className="py-10 overflow-hidden w-full " >

            <div className="p-3 flex flex-col items-center justify-start">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-left text-heading mb-4">
                    Media Gallery
                </h2>
                <p className="text-lg md:text-lg text-gray-700 mb-8 max-w-4xl">
                    Explore our collection of photos and videos showcasing hospital facilities, medical advancements, community events, and patient stories.
                </p>
            </div>

            <Marquee
                direction="left"
                speed={50}
                className="w-full py-8"
                gradient={false}
                pauseOnHover={true}
            >
                {galleryItems.map((item) => (
                    <div
                        key={item.id}
                        className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 mx-4"
                        style={{ width: '300px' }}
                    >
                        <div className="aspect-[4/3] relative">
                            <ImageWithFallback
                                fallbackSrc='/fallback-image.webp'
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {item.type === 'video' && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                    <div className="w-12 h-12 flex items-center justify-center bg-white/90 rounded-full text-blue-600 transition-transform duration-300 group-hover:scale-110">
                                        <FaPlay className="text-lg ml-1" />
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <div>
                                <span className="text-xs font-medium text-white bg-blue-600 px-2 py-1 rounded-full">
                                    {item.category}
                                </span>
                                <h3 className="text-white font-semibold text-lg mt-2">{item.title}</h3>
                                <p className="text-white/80 text-sm">{item.date}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Marquee>

            <div className="w-full flex items-center justify-center">
                <Link href={"/media-center#media-gallery"}>
                <Button
                    className='capitalize flex items-center justify-between'
                    variant={"default"}
                    size={"lg"}
                >
                    <span>view more</span>
                    <MdArrowOutward size={24} />
                </Button>
                </Link>
            </div>
        </div>
    )
}
