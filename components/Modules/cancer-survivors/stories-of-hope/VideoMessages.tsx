"use client";

import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import { ImageWithFallback } from "@/components/global/ImageWithFallback";
import { VictoryStoriesData } from "./VictoryStories";

const breakpointColumnsObj = {
  default: 3,
  1024: 2,
  640: 1,
};

export const VideoMessages = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [randomPaddings, setRandomPaddings] = useState<number[]>([]);

  const videoStories = VictoryStoriesData.filter((item) => item.type === "video");

  useEffect(() => {
    // Generate consistent random paddings on client only after hydration
    const paddings = videoStories.map(() => Math.floor(Math.random() * 60));
    setRandomPaddings(paddings);
  }, [videoStories.length]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Client Video Messages
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Hear directly from the people we&apos;ve helped.
        </p>
      </div>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-6"
        columnClassName="space-y-6"
      >
        {videoStories.map((item, idx) => (
          <div
            key={idx}
            className="break-inside-avoid group relative bg-black rounded-2xl overflow-hidden shadow-lg"
            style={{ paddingBottom: `${randomPaddings[idx] || 0}px` }}
          >
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
                      <svg
                        className="w-12 h-12 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
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
        ))}
      </Masonry>
    </div>
  );
};
