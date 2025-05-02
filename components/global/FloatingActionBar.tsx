"use client";

import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { ActionItem } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

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
                    <div className="w-full flex justify-center mb-8 md:mb-10 ">
                        <div className="flex flex-wrap justify-center items-center bg-white/10 backdrop-blur-sm p-3 rounded-xl shadow-md w-fit">
                            {items.map((item, idx) => {
                                const Icon = item?.icon; // Icon is now treated as a React component
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
                                                {Icon && <Icon className="size-5" />} {/* Icon rendered here, conditionally */}
                                                <span className="text-sm">{item.label}</span>
                                            </Button>
                                        </TooltipTrigger>
                                    </Tooltip>
                                );
                            })}
                        </div>
                    </div>
                )}

                {!isOnFooter && isSticky && !isTouchingFooter && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 30 }}
                        transition={{ duration: 0.3 }}
                        className={cn(
                            "z-10 fixed p-2 transition-all duration-300 ease-in-out ",
                            "flex justify-evenly items-center   w-full", // ← changed this
                            "md:flex-col md:w-auto md:rounded-r-xl items-start  md:justify-center gap-5",
                            "bottom-0  md:h-full bg-teal-50 "
                        )}
                    >
                        {items.map((item, idx) => {
                            const Icon = item?.icon;
                            return (
                                <Tooltip key={idx}>
                                    <>
                                        <TooltipTrigger asChild>
                                            {item.label === "WhatsApp" ? (
                                                <div className={cn("-mt-20")}> {/* Apply negative margin top */}
                                                    {item.component}
                                                </div>
                                            ) : (
                                                <Button
                                                    onClick={item.onClick}
                                                    variant="default"
                                                    size="default"
                                                    aria-label={item.label}
                                                    className={cn(
                                                        "group flex items-center bg-indigo-800 text-white rounded-full shadow-2xl overflow-hidden min-w-10 min-h-10",
                                                        "transition-all duration-300 ease-in-out",
                                                        "hover:rounded-lg px-5 py-4 hover:px-6 transition-all duration-300 ease-in-out",
                                                        item.label === "WhatsApp" && item.className
                                                    )}
                                                >
                                                    {Icon && <Icon className="size-5" />}
                                                    <span
                                                        className={cn(
                                                            "text-sm opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-[200px] hidden group-hover:block",
                                                            "transition-all duration-300 ease-in-out whitespace-nowrap overflow-hidden"
                                                        )}
                                                    >
                                                        {item.label}
                                                    </span>
                                                </Button>
                                            )}
                                        </TooltipTrigger>
                                        <TooltipContent side="right" className="hidden md:block">{item.label}</TooltipContent>
                                    </>
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
                            const Icon = item?.icon; // ⬅️ treat as component
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
                                            {Icon && <Icon className="size-5" />} {/* Icon rendered here, conditionally */}
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
