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
            <section className="min-h-screen w-full px-2 md:px-8 lg:px-24 py-8 my-12">
                <div className="lg:p-10 p-4 md:px-6 px-2 py-6 rounded-3xl bg-white border-3 space-y-12 border-neutral-200 shadow-expanded">
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
                        <div className="relative rounded-3xl w-full lg:w-1/3 h-[24rem] sm:h-[28rem] md:h-[32rem] lg:h-[36rem] xl:h-[40rem] overflow-hidden">
                            <Image src={image} alt={name} fill className="object-cover" priority />
                        </div>
                        <div className="w-full lg:w-2/3 space-y-6 md:space-y-8 max-w-4xl">
                            <h1 className="font-display text-heading text-center lg:text-left">
                                {customFirstHeading}
                            </h1>
                            <div className="space-y-2 text-center lg:text-left">
                                <h2 className="text-heading text-synergy-pink font-bold">{name}</h2>
                                <h3 className="text-lg text-neutral-600 font-semibold">{role}</h3>
                                <p className="text-base leading-relaxed tracking-wide">{description}</p>
                            </div>
                            <div className="space-y-4">
                                {theirStory?.map((story, index) => (
                                    <p
                                        key={index}
                                        className="text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed tracking-tight"
                                    >
                                        {story}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Second Section */}
            <h1 className="text-heading text-synergy-pink text-center px-2 md:px-8">{customSecondHeading}</h1>
            <section className="w-full px-2 md:px-8 lg:px-24 py-8 my-12">
                <div className="lg:p-10 p-4 px-2 py-6 rounded-3xl bg-white border-3 border-neutral-200 shadow-expanded space-y-12">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
                        <div className="relative rounded-3xl w-full lg:w-1/3 h-[20rem] sm:h-[24rem] md:h-[28rem] lg:h-[32rem] xl:h-[36rem] overflow-hidden">
                            <Image src={secondImage} alt={name} fill className="object-cover" priority />
                        </div>
                        <div className="w-full lg:w-2/3 space-y-6 md:space-y-8 max-w-3xl text-center lg:text-left">
                            {secondSectionDescription.map((para, idx) => (
                                <p key={idx} className="text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed tracking-tight mb-4">
                                    {para}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Third Section */}
            <section className="w-full px-2 md:px-8 lg:px-24 py-8 my-12">
                <div className="lg:p-10 p-4 rounded-3xl bg-white border-3 border-neutral-200 shadow-expanded space-y-12">
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        <div className="relative rounded-3xl w-full lg:w-1/3 h-[20rem] sm:h-[24rem] md:h-[28rem] lg:h-[32rem] xl:h-[36rem] overflow-hidden">
                            <Image src={thirdImage} alt={name} fill className="object-cover" priority />
                        </div>
                        <div className="w-full lg:w-2/3 space-y-6 md:space-y-8 max-w-3xl text-center lg:text-left">
                            {thirdSectionDescription.map((para, idx) => (
                                <p key={idx} className="text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed tracking-tight mb-4">
                                    {para}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Fourth Section */}
            {fourthSectionDescription?.length > 0 && (
                <section className="w-full px-2 md:px-8 lg:px-24 py-8 my-12">
                    <div className="lg:p-10 p-4 rounded-3xl bg-white border-3 border-neutral-200 shadow-expanded space-y-6 md:space-y-8  mx-auto">
                        {fourthSectionDescription.map((para, idx) => (
                            <p key={idx} className="text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed tracking-tight mb-4">{para}</p>
                        ))}
                    </div>
                </section>
            )}

            {/* Journey Section */}
            <section className="w-full px-2 md:px-8 lg:px-24 py-8 my-12 space-y-6 md:space-y-8">
                <h1 className="text-heading font-sans text-black text-center uppercase font-bold">Journey</h1>
                <div className="lg:p-10 p-4 px-2 py-6 rounded-3xl bg-white border-3 space-y-6 border-neutral-200 shadow-expanded">
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
                        <div className="w-full space-y-6 max-w-3xl">
                            <p className="text-sm sm:text-base md:text-lg leading-relaxed tracking-tight text-neutral-600 text-center lg:text-left">
                                {fifthSectionDescription}
                            </p>
                            <div className="w-full relative h-[20rem] sm:h-[24rem] md:h-[28rem] lg:h-[32rem] overflow-hidden rounded-3xl">
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
