"use client";

import { ImageWithFallback } from "@/components/global/ImageWithFallback";
import { useState } from "react";
import Masonry from "react-masonry-css";

type ContentItem = {
    type: "testimonial" | "video";
    name: string;
    title?: string;
    text?: string;
    image?: string;
    videoUrl?: string;
    thumbnail?: string;
    duration?: string;
};

export const VictoryStoriesData: ContentItem[] = [
    {
        type: "testimonial",
        name: "Amit Srivastava",
        title: "Recovered from Stage II Lung Cancer",
        image: "/avatars/amit.png",
        text: "The team at Synergy Hospital truly saved my life. Their dedication and care made a tough time easier to endure. Forever grateful.",
    },
    {
        type: "video",
        name: "Rekha's Recovery Journey",
        videoUrl: "https://www.youtube.com/embed/a1b2c3",
        thumbnail: "/thumbnails/rekha.jpg",
        duration: "4:10",
    },
    {
        type: "testimonial",
        name: "Manoj Yadav",
        title: "Post-Chemotherapy Recovery",
        image: "/avatars/manoj.png",
        text: "I received world-class treatment right here in Gorakhpur. The doctors were always supportive and explained every step clearly.",
    },
    {
        type: "video",
        name: "Kavita's Breast Cancer Survival Story",
        videoUrl: "https://www.youtube.com/embed/b3c4d5",
        thumbnail: "/thumbnails/kavita.jpg",
        duration: "3:35",
    },
    {
        type: "testimonial",
        name: "Ramesh Pandey",
        title: "Recovered from Prostate Cancer",
        image: "/avatars/ramesh.png",
        text: "Thanks to Synergy, I got timely diagnosis and care. The staff made sure I never felt alone during the process.",
    },
    {
        type: "testimonial",
        name: "Seema Tiwari",
        title: "Blood Cancer Survivor – From Deoria",
        image: "/avatars/seema.png",
        text: "Traveling to Gorakhpur was the best decision for my health. The hospital’s environment gave me strength and hope.",
    },
    {
        type: "video",
        name: "Ashok’s Bone Marrow Transplant Success",
        videoUrl: "https://www.youtube.com/embed/d6e7f8",
        thumbnail: "/thumbnails/ashok.jpg",
        duration: "5:22",
    },
    {
        type: "testimonial",
        name: "Poonam Verma",
        title: "Survivor – Ovarian Cancer, Basti",
        image: "/avatars/poonam.png",
        text: "I was terrified at first, but the compassionate approach and professional treatment helped me win the fight.",
    },
    {
        type: "testimonial",
        name: "Dinesh Sharma",
        title: "Recovered from Stage I Colon Cancer",
        image: "/avatars/dinesh.png",
        text: "The early detection and swift action from the Synergy team gave me a new life. Thank you for everything!",
    },
    {
        type: "video",
        name: "Jaya’s Journey Through Radiation Therapy",
        videoUrl: "https://www.youtube.com/embed/e9f0g1",
        thumbnail: "/thumbnails/jaya.jpg",
        duration: "3:48",
    },
    {
        type: "testimonial",
        name: "Rajeev Gupta",
        title: "Head & Neck Cancer Recovery – From Maharajganj",
        image: "/avatars/rajeev.png",
        text: "I couldn’t speak for weeks. With the support from Synergy’s doctors, I not only recovered, but I also regained my confidence.",
    },
    {
        type: "video",
        name: "Shalini’s Cervical Cancer Victory",
        videoUrl: "https://www.youtube.com/embed/f2g3h4",
        thumbnail: "/thumbnails/shalini.jpg",
        duration: "2:59",
    },
    {
        type: "testimonial",
        name: "Vikram Singh",
        title: "Recovered from Liver Cancer – From Kushinagar",
        image: "/avatars/vikram.png",
        text: "We were worried about affordability, but Synergy provided us affordable and world-class care.",
    },
    {
        type: "testimonial",
        name: "Anita Mishra",
        title: "Throat Cancer Survivor – From Siddharthnagar",
        image: "/avatars/anita.png",
        text: "Their personalized approach made me feel like family. I owe my second life to Synergy Hospital.",
    },
    {
        type: "video",
        name: "Ravi's Hopeful Recovery",
        videoUrl: "https://www.youtube.com/embed/h5i6j7",
        thumbnail: "/thumbnails/ravi.jpg",
        duration: "4:45",
    },
    {
        type: "testimonial",
        name: "Kiran Yadav",
        title: "Recovered from Skin Cancer – From Sant Kabir Nagar",
        image: "/avatars/kiran.png",
        text: "I never imagined recovery would be this smooth. The hospital truly cares for every patient.",
    },
    {
        type: "video",
        name: "Vandana's Chemotherapy Experience",
        videoUrl: "https://www.youtube.com/embed/i8j9k0",
        thumbnail: "/thumbnails/vandana.jpg",
        duration: "3:20",
    },
    {
        type: "testimonial",
        name: "Suresh Dubey",
        title: "Pancreatic Cancer Survivor – From Gorakhpur",
        image: "/avatars/suresh.png",
        text: "We didn’t have to go to Delhi or Mumbai. Everything we needed was available right here at Synergy.",
    },
    {
        type: "testimonial",
        name: "Nirmala Devi",
        title: "Breast Cancer Recovery – From Azamgarh",
        image: "/avatars/nirmala.png",
        text: "Their women’s oncology wing gave me specialized care with dignity and empathy.",
    },
    {
        type: "video",
        name: "Rajesh’s Journey to Remission",
        videoUrl: "https://www.youtube.com/embed/k1l2m3",
        thumbnail: "/thumbnails/rajesh.jpg",
        duration: "5:05",
    },
];


const breakpointColumnsObj = {
    default: 3,
    1024: 3,
    768: 2,
    0: 1
};

export const VictoryStories = () => {
    const [playingIndex, setPlayingIndex] = useState<number | null>(null);

    return (
        <div className="max-w-7xl mx-auto px-4 py-20">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Proven track of satisfied clients
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                    We cherish relations to blossom and last
                </p>
            </div>

            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex gap-6"
                columnClassName="space-y-6"
            >
                {VictoryStoriesData.map((item, idx) => (
                    <div key={idx} className="break-inside-avoid">
                        {item.type === "testimonial" ? (
                            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md border border-gray-200 w-full max-w-md mx-auto">
                                <p className="text-gray-800 font-medium mb-4 text-sm sm:text-base">&quot;{item.text}&quot;</p>
                                <div className="flex items-center mt-6 gap-4">
                                    <div className="relative w-12 h-12 shrink-0">
                                        <ImageWithFallback
                                            fallbackSrc="/fallback-image.webp"
                                            src={item.image!}
                                            fill
                                            alt={item.name}
                                            className="object-cover rounded-full"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm sm:text-base font-semibold text-gray-900">
                                            {item.name} <span className="text-blue-500">✔</span>
                                        </p>
                                        <p className="text-sm text-gray-500">{item.title}</p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="group relative bg-black rounded-2xl overflow-hidden shadow-lg">
                                <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                                    {playingIndex === idx ? (
                                        <iframe
                                            className="w-full h-full rounded-2xl"
                                            src={`${item.videoUrl}?autoplay=1&modestbranding=1&rel=0`}
                                            title={item.name}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    ) : (
                                        <>
                                            <ImageWithFallback
                                                fallbackSrc="/fallback-image.webp"
                                                src={item.thumbnail || ""}
                                                alt={item.name}
                                                fill
                                                className="object-cover opacity-90 group-hover:opacity-75 transition-opacity"
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <button
                                                    onClick={() => setPlayingIndex(idx)}
                                                    className="p-4 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-all"
                                                >
                                                    <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                    </svg>
                                                </button>
                                            </div>
                                            {item.duration && (
                                                <span className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded-md text-sm">
                                                    {item.duration}
                                                </span>
                                            )}
                                        </>
                                    )}
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </Masonry>
        </div>
    );
};
