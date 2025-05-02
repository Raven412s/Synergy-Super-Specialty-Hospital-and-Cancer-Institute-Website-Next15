"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Newspaper, Video, Download, Share2, Calendar, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { pressReleases } from '@/data'
import { VideoModal } from '@/components/global/VideoModal'
import ShareButton from '../global/ShareButton'
import Link from 'next/link'

type FilterType = 'innovation' | 'partnership' | 'award' | 'research' | 'all';

export const PressReleasesSection = () => {
    const [activeFilter, setActiveFilter] = useState<FilterType>('all')
    const [filteredReleases, setFilteredReleases] = useState(pressReleases)

    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    }

    const handleFilter = (filterType: FilterType) => {
        setActiveFilter(filterType)
        if (filterType === 'all') {
            setFilteredReleases(pressReleases)
        } else {
            setFilteredReleases(pressReleases.filter(release =>
                release.type.toLowerCase() === filterType.toLowerCase()
            ))
        }
    }

    const filterButtons = [
        { label: 'All', value: 'all' as const },
        { label: 'Innovations', value: 'innovation' as const },
        { label: 'Partnership', value: 'partnership' as const },
        { label: 'Awards', value: 'award' as const },
        { label: 'Research', value: 'research' as const }
    ]

    return (
        <section className='w-full px-2 sm:px-4 lg:px-8 py-8 md:py-12' id='press-releases'>
            <div className="bg-white rounded-2xl md:rounded-3xl border border-neutral-200 shadow-sm md:shadow-expanded p-4 md:p-6 lg:p-8 flex flex-col lg:flex-row-reverse gap-6 lg:gap-8">
                {/* Interactive Timeline - Hidden on mobile, shown from md upwards */}
                <motion.div
                    className="hidden md:block w-full lg:w-1/3"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="sticky top-24">
                        <h2 className="text-2xl lg:text-3xl font-bold text-synergy-blue mb-4 lg:mb-6">Press Timeline</h2>
                        <div className="relative">
                            <div className="absolute left-3.5 h-full w-0.5 bg-gray-200 -z-10" />
                            {filteredReleases.map((release, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start mb-4 lg:mb-6"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="w-7 h-7 lg:w-8 lg:h-8 p-1.5 lg:p-2 bg-synergy-pink rounded-full flex items-center justify-center mr-3 lg:mr-4">
                                        <Calendar className="text-white w-3 h-3 lg:w-4 lg:h-4" />
                                    </div>
                                    <div>
                                        <p className="text-xs lg:text-sm text-gray-500">{formatDate(release.date)}</p>
                                        <h3 className="font-medium lg:font-semibold text-sm lg:text-base">{release.title}</h3>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Main Content */}
                <div className="w-full lg:w-2/3 space-y-6 md:space-y-8">
                    {/* Filter Buttons - Moved to top on mobile */}
                    <motion.div
                        className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-0"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                    >
                        {filterButtons.map((button) => (
                            <Button
                                key={button.value}
                                variant="outline"
                                size="sm"
                                className={`text-xs md:text-sm border-synergy-blue text-synergy-blue hover:text-synergy-blue hover:bg-synergy-blue/10 ${activeFilter === button.value ? 'bg-synergy-blue/10 font-medium' : ''
                                    }`}
                                onClick={() => handleFilter(button.value)}
                            >
                                {button.label}
                            </Button>
                        ))}
                    </motion.div>

                    {/* Featured Release */}
                    <motion.div
                        className="group relative overflow-hidden rounded-lg md:rounded-xl bg-gray-50"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <video
                            className="w-full h-48 sm:h-56 md:h-64 object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                            autoPlay muted loop playsInline
                        >
                            <source src="https://res.cloudinary.com/dzynl3hzk/video/upload/v1743251914/baakragdxlbykwpi5ubu.webm" type="video/webm" />
                            <source src="https://res.cloudinary.com/dzynl3hzk/video/upload/v1743251922/wfi5yxe5wotlvfawbtpw.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-4 md:p-6">
                            <div className="flex items-center gap-2 text-white mb-1 md:mb-2">
                                <Newspaper className="w-4 h-4 md:w-5 md:h-5" />
                                <span className="font-medium md:font-semibold text-sm md:text-base">Featured Release</span>
                            </div>
                            <h2 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-4">
                                Annual Medical Innovation Report 2024
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                <Button variant="secondary" size="sm" className="gap-1 md:gap-2 text-xs md:text-sm text-synergy-pink hover:text-synergy-pink">
                                    <Download className="w-3 h-3 md:w-4 md:h-4" />
                                    Full Report
                                </Button>
                                <Button variant="ghost" size="sm" className="text-xs md:text-sm text-white hover:bg-white/10">
                                    Read Summary
                                </Button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Press Releases Grid */}
                    <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                        {filteredReleases.map((release, index) => (
                            <motion.div
                                key={index}
                                className="border rounded-lg md:rounded-xl p-4 md:p-6 hover:shadow-md md:hover:shadow-lg transition-shadow"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="flex flex-wrap items-center gap-2 mb-3 md:mb-4">
                                    <span className={`px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm ${release.type === 'innovation'
                                        ? 'bg-synergy-pink/10 text-synergy-pink'
                                        : 'bg-synergy-blue/10 text-synergy-blue'
                                        }`}>
                                        {release.type}
                                    </span>
                                    <span className="text-xs md:text-sm text-gray-500">
                                        {formatDate(release.date)}
                                    </span>
                                </div>

                                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{release.title}</h3>
                                <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4 line-clamp-2">{release.summary}</p>

                                <div className="flex flex-wrap items-center justify-between gap-2">
                                    <div className="flex gap-1 md:gap-2">
                                        <ShareButton
                                            shareText={`${release.title}: ${release.summary}`}
                                            shareUrl={`https://synergy-website-alpha.vercel.app${release.link}` || window.location.href}
                                            className="gap-1 md:gap-2 hover:bg-synergy-pink/10 text-synergy-pink hover:text-synergy-pink text-xs md:text-sm"
                                            size="sm"
                                        >
                                            <Share2 className="w-3 h-3 md:w-4 md:h-4" />
                                            Share
                                        </ShareButton>
                                        {release.videoPreview && (
                                            <VideoModal
                                                videoUrl={release.videoPreview}
                                            >
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="gap-1 md:gap-2 hover:bg-synergy-pink/10 text-synergy-pink hover:text-synergy-pink text-xs md:text-sm"
                                                >
                                                    <Video className="w-3 h-3 md:w-4 md:h-4" />
                                                    Preview
                                                </Button>
                                            </VideoModal>
                                        )}
                                    </div>
                                    <Button
                                        variant="link"
                                        size="sm"
                                        className="gap-1 md:gap-2 text-xs md:text-sm text-synergy-blue"
                                        asChild
                                    >
                                        <Link href={release.link} title={release.summary}>
                                            Read More
                                            <span className='sr-only'>{release.summary}</span>
                                            <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
