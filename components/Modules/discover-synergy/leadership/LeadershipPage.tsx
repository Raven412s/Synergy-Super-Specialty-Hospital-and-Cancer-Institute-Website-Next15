// components/LeadershipPage.tsx
import Image from "next/image";
import React from "react";
import { LeaderPageProps } from "@/types";
import { VideoModalForJourney } from "@/components/global/VideoModalForJourney";

const LeadershipPage = (props: LeaderPageProps) => {
    const {
        name,
        role,
        description,
        image,
        customFirstHeading,
        theirStory,
        customSecondHeading,
        secondImage,
        secondSectionDescription,
        thirdImage,
        thirdSectionDescription,
        fourthSectionDescription,
        fifthSectionDescription,
        videoModalForJourney,
    } = props;

    return (
        <main className="bg-fuchsia-50 -mt-24 pt-24">
            {/* First Section */}
            <section className="min-h-screen w-full px-2 md:px-6 lg:px-24 py-4 my-12">
                <div className="lg:p-8 md:px-4 px-2 py-5 rounded-3xl bg-white border-3 space-y-12 border-neutral-200 shadow-expanded">
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
                        <div className="relative rounded-3xl w-1/3 h-[40rem] overflow-hidden">
                            <Image src={image} alt={name} fill className="object-cover" priority />
                        </div>
                        <div className="w-2/3 space-y-8">
                            <h1 className="font-display text-heading">
                                {customFirstHeading}
                            </h1>
                            <div className="space-y-2">
                                <h2 className="text-heading !text-synergy-pink !font-bold">{name}</h2>
                                <h3 className="text-lg text-neutral-600 font-semibold">{role}</h3>
                                <p className="text-base tracking-wide">{description}</p>
                            </div>
                            {theirStory?.map((story, index) => (
                                <p
                                    key={index}
                                    className="text-sm sm:text-base md:text-lg text-neutral-600 leading-snug tracking-tight"
                                >
                                    {story}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Second Section */}
            <h1 className="text-heading !text-synergy-pink !text-center">{customSecondHeading}</h1>
            <section className="w-full px-2 md:px-6 lg:px-24 py-4 my-12">
                <div className="lg:p-8 rounded-3xl bg-white border-3 border-neutral-200 shadow-expanded space-y-12">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
                        <div className="relative rounded-3xl w-1/3 h-[30rem] overflow-hidden">
                            <Image src={secondImage} alt={name} width={900} height={1100} className="object-cover w-[90%]" priority />
                        </div>
                        <div className="w-2/3 space-y-8">
                            {secondSectionDescription.map((para, idx) => (
                                <p key={idx} className="text-neutral-600 text-base leading-snug tracking-tight">{para}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Third Section */}
            <section className="w-full px-2 md:px-6 lg:px-24 py-4 my-12">
                <div className="lg:p-8 rounded-3xl bg-white border-3 border-neutral-200 shadow-expanded space-y-12">
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        <div className="relative rounded-3xl w-1/3 h-[30rem] overflow-hidden">
                            <Image src={thirdImage} alt={name} width={900} height={1100} className="object-cover w-[90%]" priority />
                        </div>
                        <div className="w-2/3 space-y-8">
                            {thirdSectionDescription.map((para, idx) => (
                                <p key={idx} className="text-neutral-600 text-base leading-snug tracking-tight">{para}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Fourth Section */}
            {fourthSectionDescription?.length > 0 && (
                <section className="w-full px-2 md:px-6 lg:px-24 py-4 my-12">
                    <div className="lg:p-8 rounded-3xl bg-white border-3 border-neutral-200 shadow-expanded space-y-12">
                        {fourthSectionDescription.map((para, idx) => (
                            <p key={idx} className="text-neutral-600 text-base leading-snug tracking-tight">{para}</p>
                        ))}
                    </div>
                </section>
            )}



<section
                className=" w-full  px-2 md:px-6 lg:px-24 py-4 my-12 space-y-2 h-[70vh]"
            >
                <h1 className='text-heading !font-sans !text-black !text-center uppercase !font-bold'>Journey</h1>
                <div className='lg:p-8 md:px-4 px-2 py-5 rounded-3xl bg-white border-3 space-y-12 border-neutral-200 shadow-expanded h-full'>
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 h-full">
                        {/* Leader's Name and Other Details*/}
                        <div className=" h-full relative space-y-8">
                            {/* Section Description*/}
                            <p className='text-sm sm:text-base md:text-lg lg:text-lg text-left leading-snug tracking-tight text-neutral-600'>{fifthSectionDescription}</p>
                            <div className="w-full h-[80%] relative">
                            <VideoModalForJourney image={videoModalForJourney.image} videoUrl={videoModalForJourney.videoUrl} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default LeadershipPage;
