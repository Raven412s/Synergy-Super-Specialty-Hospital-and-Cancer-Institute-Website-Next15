"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ActionItem } from "@/types";

type Props = {
    items: ActionItem[];
    isOnFooter?: boolean; // 🌟 New optional prop
};

export const FloatingActionBar = ({ items, isOnFooter = false }: Props) => {
    const [isSticky, setIsSticky] = useState(false);
    const [isTouchingFooter, setIsTouchingFooter] = useState(false);
    const normalizedIsOnFooter = !!isOnFooter;
    useEffect(() => {
        if (normalizedIsOnFooter) return;

        const banner = document.getElementById("banner");
        const footer = document.getElementById("footer");

        const handleScroll = () => {
            if (!banner) return;
            const bottom = banner.getBoundingClientRect().bottom;
            setIsSticky(bottom <= 0);
        };

        window.addEventListener("scroll", handleScroll);

        let observer: IntersectionObserver;

        if (footer) {
            observer = new IntersectionObserver(
                ([entry]) => {
                    setIsTouchingFooter(entry.isIntersecting);
                },
                { root: null, threshold: 0.01 }
            );
            observer.observe(footer);
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (observer && footer) observer.unobserve(footer);
        };
    }, [normalizedIsOnFooter]);

    return (
        <TooltipProvider>
            <AnimatePresence>
                {/* 🔘 New: Footer Mode */}
                {isOnFooter && (
                    <div className="w-full flex justify-center mb-8 md:mb-10">
                        <div className="flex flex-wrap justify-center items-center bg-white/10 backdrop-blur-sm p-3 rounded-xl shadow-md w-fit">
                            {items.map((item, idx) => {
                                const Icon = item.icon; // Icon is now treated as a React component
                                return (
                                    <Tooltip key={idx}>
                                        <TooltipTrigger asChild>
                                            <Button
                                                onClick={item.onClick}
                                                variant="default"
                                                size="lg"
                                                aria-label={item.label}
                                                className={cn("flex items-center justify-between", item.className)}
                                            >
                                                <Icon className="size-2" /> {/* Icon rendered here */}
                                                <span className="text-sm">{item.label}</span>
                                            </Button>
                                        </TooltipTrigger>
                                    </Tooltip>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Sticky Mode + Footer Not Touching → Show */}
                {!isOnFooter && isSticky && !isTouchingFooter && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 30 }}
                        transition={{ duration: 0.3 }}
                        className={cn(
                            "z-10 fixed transition-all duration-300 ease-in-out w-full flex justify-around bg-white/10 backdrop-blur-sm p-2 shadow-md md:flex-col md:w-auto md:rounded-r-xl",
                            "bottom-0 md:top-1/2 md:-translate-y-1/2"
                        )}
                    >
                        {items.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <Tooltip key={idx}>
                                    <TooltipTrigger asChild>
                                        <Button
                                            onClick={item.onClick}
                                            variant="default"
                                            size="icon"
                                            aria-label={item.label}
                                            className={cn(
                                                "flex items-center justify-center gap-2 p-5 rounded-full flex-col shadow-2xl bg-indigo-800"
                                            )}
                                        >
                                            <Icon className="size-4 text-white" /> {/* ← fixed usage */}
                                            <span className="sr-only">{item.label}</span>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent side="right">{item.label}</TooltipContent>
                                </Tooltip>
                            );
                        })}
                    </motion.div>
                )}

                {/* Non-sticky Mode (when banner visible) — Center Floating Bar */}
                {!isOnFooter && !isSticky && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 30 }}
                        transition={{ duration: 0.3 }}
                        className="z-10 absolute left-1/2 -translate-x-1/2 bottom-[90px] hidden md:flex flex-col lg:flex-row"
                    >
                        {items.map((item, idx) => {
                            const Icon = item.icon; // ⬅️ treat as component
                            return (
                                <Tooltip key={idx}>
                                    <TooltipTrigger asChild>
                                        <Button
                                            onClick={item.onClick}
                                            variant="default"
                                            size="lg"
                                            aria-label={item.label}
                                            className={cn("flex items-center justify-between gap-2 min-w-40", item.className)}
                                        >
                                            <Icon className="size-5" /> {/* ⬅️ correctly rendered icon */}
                                            <span className="text-sm">{item.label}</span>
                                        </Button>
                                    </TooltipTrigger>
                                </Tooltip>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </TooltipProvider>
    );
};
