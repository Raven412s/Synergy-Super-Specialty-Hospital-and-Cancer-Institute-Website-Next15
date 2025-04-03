"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Newspaper, Video, Download, Share2, Calendar, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { pressReleases } from '@/data'
import { VideoModal } from '@/components/global/VideoModal'
import ShareButton from '../global/ShareButton'
import Link from 'next/link'

export const PressReleasesSection = () => {
    const [activeFilter, setActiveFilter] = useState<string>('all')
    const [filteredReleases, setFilteredReleases] = useState(pressReleases)

    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    }

    const handleFilter = (filterType: 'innovation' | 'partnership' | 'award' | 'research' | "all") => {
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
        { label: 'All', value: 'all' },
        { label: 'Innovations', value: 'innovation' },
        { label: 'Partnership', value: 'partnership' },
        { label: 'Awards', value: 'award' },
        { label: 'Research', value: 'research' }
    ]

    return (
        <section className='w-full px-2 md:px-6 lg:px-24 py-4' id='press-releases'>
            <div className="lg:p-8 md:px-4 px-2 py-5 rounded-3xl bg-white flex flex-col lg:flex-row-reverse border-3 border-neutral-200 shadow-expanded">
                {/* Interactive Timeline */}
                <motion.div
                    className="w-full lg:w-1/3 mb-8 lg:mb-0 lg:pl-8"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="sticky top-24">
                        <h2 className="text-3xl font-bold text-synergy-blue mb-6">Press Timeline</h2>
                        <div className="relative">
                            <div className="absolute left-3.5 h-full w-0.5 bg-gray-200 -z-10" />
                            {filteredReleases.map((release, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start mb-6"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="w-8 h-8 p-2 bg-synergy-pink rounded-full flex items-center justify-center mr-4">
                                        <Calendar className="text-white w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">{formatDate(release.date)}</p>
                                        <h3 className="font-semibold">{release.title}</h3>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Main Content */}
                <div className="w-full lg:w-2/3 space-y-8">
                    {/* Featured Release */}
                    <motion.div
                        className="group relative overflow-hidden rounded-xl bg-gray-50"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <video
                            className="w-full h-64 object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                            autoPlay muted loop
                        >
                            <source src="https://res.cloudinary.com/dzynl3hzk/video/upload/v1743251914/baakragdxlbykwpi5ubu.webm" type="video/webm" />
                            <source src="https://res.cloudinary.com/dzynl3hzk/video/upload/v1743251922/wfi5yxe5wotlvfawbtpw.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-6">
                            <div className="flex items-center gap-2 text-white mb-2">
                                <Newspaper className="w-5 h-5" />
                                <span className="font-semibold">Featured Release</span>
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-4">
                                Annual Medical Innovation Report 2024
                            </h2>
                            <div className="flex gap-3">
                                <Button variant="secondary" className="gap-2 text-synergy-pink hover:text-synergy-pink">
                                    <Download className="w-4 h-4" />
                                    Full Report
                                </Button>
                                <Button variant="ghost" className="text-white hover:bg-white/10">
                                    Read Summary
                                </Button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Press Releases Grid */}
                    <div className="grid gap-6 md:grid-cols-2">
                        {filteredReleases.map((release, index) => (
                            <motion.div
                                key={index}
                                className="border rounded-xl p-6 hover:shadow-lg transition-shadow"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="flex items-center gap-2 mb-4">
                                    <span className={`px-3 py-1 rounded-full text-sm ${release.type === 'innovation'
                                            ? 'bg-synergy-pink/10 text-synergy-pink'
                                            : 'bg-synergy-blue/10 text-synergy-blue'
                                        }`}>
                                        {release.type}
                                    </span>
                                    <span className="text-sm text-gray-500">
                                        {formatDate(release.date)}
                                    </span>
                                </div>

                                <h3 className="text-xl font-semibold mb-3">{release.title}</h3>
                                <p className="text-gray-600 mb-4">{release.summary}</p>

                                <div className="flex items-center justify-between">
                                    <div className="flex gap-2">
                                        <ShareButton
                                            shareText={`${release.title}: ${release.summary}`}
                                            shareUrl={`https://synergy-website-alpha.vercel.app${release.link}` || window.location.href}
                                            className="gap-2 hover:bg-synergy-pink/10 text-synergy-pink hover:text-synergy-pink"
                                        >
                                            <Share2 className="w-4 h-4" />
                                            Share
                                        </ShareButton>
                                        {release.videoPreview && (
                                            <VideoModal
                                                videoUrl={release.videoPreview}
                                            >
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="gap-2 hover:bg-synergy-pink/10 text-synergy-pink hover:text-synergy-pink"
                                                >
                                                    <Video className="w-4 h-4" />
                                                    Preview
                                                </Button>
                                            </VideoModal>
                                        )}
                                    </div>
                                    <Button
                                        variant="link"
                                        className="gap-2 text-synergy-blue"
                                        asChild
                                    >
                                        <Link href={release.link} title={release.summary}>
                                            Read More
                                            <span className='sr-only'>{release.summary}</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Interactive Filter */}
                    <motion.div
                        className="flex flex-wrap gap-3"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                    >
                        {filterButtons.map((button) => (
                            <Button
                                key={button.value}
                                variant="outline"
                                className={`border-synergy-blue text-synergy-blue hover:text-synergy-blue hover:bg-synergy-blue/10 ${activeFilter === button.value ? 'bg-synergy-blue/10 font-medium' : ''
                                    }`}
                                onClick={() => handleFilter(button.value as 'innovation' | 'partnership' | 'award' | 'research')}
                            >
                                {button.label}
                            </Button>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
