// components/StickyActionBar.tsx
"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ActionItem } from "@/types";

type Props = {
  items: ActionItem[];
};

export const FloatingActionBar = ({ items }: Props) => {
  const [isSticky, setIsSticky] = useState(false);


  useEffect(() => {
    const banner = document.getElementById('banner')
    const handleScroll = () => {
      if (!banner) return
      const bottom = banner.getBoundingClientRect().bottom
      setIsSticky(bottom <= 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <TooltipProvider>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.3 }}
          className={cn(
            `z-10 transition-all duration-300 ease-in-out`,
            isSticky
              ? 'fixed bottom-0 w-full flex justify-around bg-white/10 backdrop-blur-sm p-2 shadow-md md:flex-col md:top-1/2 md:-translate-y-1/2 md:left-0 md:w-auto md:rounded-r-xl'
              : 'absolute left-1/2 -translate-x-1/2 bottom-[90px] hidden md:flex flex-col lg:flex-row'
          )}
        >
          {items.map((item, idx) => (
            <Tooltip key={idx}>
              <TooltipTrigger asChild>
                <Button
                  onClick={item.onClick}
                  variant="default"
                  size={isSticky ? "icon" : "lg"}
                  className={cn(
                    "flex items-center justify-center gap-2",
                    isSticky ? "p-5 rounded-full flex-col shadow-2xl bg-indigo-800" :  item.className
                  )}
                >
                  {item.icon}
                  <span className={cn("text-xl", isSticky && "sr-only")}>{item.label}</span>
                </Button>
              </TooltipTrigger>
              {isSticky && <TooltipContent side="right">{item.label}</TooltipContent>}
            </Tooltip>
          ))}
        </motion.div>
      </AnimatePresence>
    </TooltipProvider>
  );
};
