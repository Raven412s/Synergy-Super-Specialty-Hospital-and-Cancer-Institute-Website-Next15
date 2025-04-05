"use client"
import { VideoModalForJourney } from "@/components/global/VideoModalForJourney";
import { containerVariants, imageVariants, itemVariants } from "@/lib/utils";
import { LeaderPageProps } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";



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

    const [firstSectionRef, firstSectionInView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
      rootMargin: "-100px 0px"
    });

    const [secondSectionRef, secondSectionInView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
      rootMargin: "-100px 0px"
    });

    const [thirdSectionRef, thirdSectionInView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
      rootMargin: "-100px 0px"
    });

    const [fourthSectionRef, fourthSectionInView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
      rootMargin: "-100px 0px"
    });

    const [journeySectionRef, journeySectionInView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
      rootMargin: "-100px 0px"
    });

    return (
        <main className="bg-fuchsia-50 -mt-24 pt-24">
            {/* First Section */}
            <section
              ref={firstSectionRef}
              className="min-h-screen w-full px-2 md:px-8 lg:px-24 py-8 my-12"
            >
                <motion.div
                  initial="hidden"
                  animate={firstSectionInView ? "visible" : "hidden"}
                  variants={containerVariants}
                  className="lg:p-10 p-4 md:px-6 px-2 py-6 rounded-3xl bg-white border-3 space-y-12 border-neutral-200 shadow-expanded"
                >
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
                        <motion.div
                          variants={imageVariants}
                          className="relative rounded-3xl w-full lg:w-1/3 h-[24rem] sm:h-[28rem] md:h-[32rem] lg:h-[36rem] xl:h-[40rem] overflow-hidden"
                        >
                            <Image src={image} alt={name} fill className="object-cover" priority />
                        </motion.div>
                        <motion.div
                          variants={containerVariants}
                          className="w-full lg:w-2/3 space-y-6 md:space-y-8 max-w-4xl"
                        >
                            <motion.h1 variants={itemVariants} className="font-display text-heading text-center lg:text-left">
                                {customFirstHeading}
                            </motion.h1>
                            <motion.div variants={itemVariants} className="space-y-2 text-center lg:text-left">
                                <h2 className="text-heading text-synergy-pink font-bold">{name}</h2>
                                <h3 className="text-lg text-neutral-600 font-semibold">{role}</h3>
                                <p className="text-base leading-relaxed tracking-wide">{description}</p>
                            </motion.div>
                            <motion.div variants={itemVariants} className="space-y-4">
                                {theirStory?.map((story, index) => (
                                    <p
                                        key={index}
                                        className="text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed tracking-tight"
                                    >
                                        {story}
                                    </p>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Second Section */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={secondSectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-heading text-synergy-pink text-center px-2 md:px-8"
            >
              {customSecondHeading}
            </motion.h1>

            <section
              ref={secondSectionRef}
              className="w-full px-2 md:px-8 lg:px-24 py-8 my-12"
            >
                <motion.div
                  initial="hidden"
                  animate={secondSectionInView ? "visible" : "hidden"}
                  variants={containerVariants}
                  className="lg:p-10 p-4 px-2 py-6 rounded-3xl bg-white border-3 border-neutral-200 shadow-expanded space-y-12"
                >
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
                        <motion.div
                          variants={imageVariants}
                          className="relative rounded-3xl w-full lg:w-1/3 h-[20rem] sm:h-[24rem] md:h-[28rem] lg:h-[32rem] xl:h-[36rem] overflow-hidden"
                        >
                            <Image src={secondImage} alt={name} fill className="object-cover" priority />
                        </motion.div>
                        <motion.div
                          variants={containerVariants}
                          className="w-full lg:w-2/3 space-y-6 md:space-y-8 max-w-3xl text-center lg:text-left"
                        >
                            {secondSectionDescription.map((para, idx) => (
                                <motion.p
                                  key={idx}
                                  variants={itemVariants}
                                  className="text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed tracking-tight mb-4"
                                >
                                    {para}
                                </motion.p>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Third Section */}
            <section
              ref={thirdSectionRef}
              className="w-full px-2 md:px-8 lg:px-24 py-8 my-12"
            >
                <motion.div
                  initial="hidden"
                  animate={thirdSectionInView ? "visible" : "hidden"}
                  variants={containerVariants}
                  className="lg:p-10 p-4 rounded-3xl bg-white border-3 border-neutral-200 shadow-expanded space-y-12"
                >
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        <motion.div
                          variants={imageVariants}
                          className="relative rounded-3xl w-full lg:w-1/3 h-[20rem] sm:h-[24rem] md:h-[28rem] lg:h-[32rem] xl:h-[36rem] overflow-hidden"
                        >
                            <Image src={thirdImage} alt={name} fill className="object-cover" priority />
                        </motion.div>
                        <motion.div
                          variants={containerVariants}
                          className="w-full lg:w-2/3 space-y-6 md:space-y-8 max-w-3xl text-center lg:text-left"
                        >
                            {thirdSectionDescription.map((para, idx) => (
                                <motion.p
                                  key={idx}
                                  variants={itemVariants}
                                  className="text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed tracking-tight mb-4"
                                >
                                    {para}
                                </motion.p>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Fourth Section */}
            {fourthSectionDescription?.length > 0 && (
                <section
                  ref={fourthSectionRef}
                  className="w-full px-2 md:px-8 lg:px-24 py-8 my-12"
                >
                    <motion.div
                      initial="hidden"
                      animate={fourthSectionInView ? "visible" : "hidden"}
                      variants={containerVariants}
                      className="lg:p-10 p-4 rounded-3xl bg-white border-3 border-neutral-200 shadow-expanded space-y-6 md:space-y-8 mx-auto"
                    >
                        {fourthSectionDescription.map((para, idx) => (
                            <motion.p
                              key={idx}
                              variants={itemVariants}
                              className="text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed tracking-tight mb-4"
                            >
                                {para}
                            </motion.p>
                        ))}
                    </motion.div>
                </section>
            )}

            {/* Journey Section */}
            <section
              ref={journeySectionRef}
              className="w-full px-2 md:px-8 lg:px-24 py-8 my-12 space-y-6 md:space-y-8"
            >
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={journeySectionInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className="text-heading font-sans text-black text-center uppercase font-bold"
                >
                  Journey
                </motion.h1>
                <motion.div
                  initial="hidden"
                  animate={journeySectionInView ? "visible" : "hidden"}
                  variants={containerVariants}
                  className="lg:p-10 p-4 px-2 py-6 rounded-3xl bg-white border-3 space-y-6 border-neutral-200 shadow-expanded"
                >
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
                        <motion.div
                          variants={containerVariants}
                          className="w-full space-y-6 max-w-3xl"
                        >
                            <motion.p
                              variants={itemVariants}
                              className="text-sm sm:text-base md:text-lg leading-relaxed tracking-tight text-neutral-600 text-center lg:text-left"
                            >
                                {fifthSectionDescription}
                            </motion.p>
                            <motion.div
                              variants={imageVariants}
                              className="w-full relative h-[20rem] sm:h-[24rem] md:h-[28rem] lg:h-[32rem] overflow-hidden rounded-3xl"
                            >
                                <VideoModalForJourney image={videoModalForJourney.image} videoUrl={videoModalForJourney.videoUrl} />
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </section>
        </main>
    );
};

export default LeadershipPage;
