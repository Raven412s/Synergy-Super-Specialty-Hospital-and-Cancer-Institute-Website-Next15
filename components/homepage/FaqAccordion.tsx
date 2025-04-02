"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { MinusCircle, PlusCircle } from "lucide-react";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface FAQItem {
    question: string;
    answer: string;
}

interface FaqAccordionProps {
    items: FAQItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
    const [openItem, setOpenItem] = useState<string | null>(null);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 }); // Runs only once when 30% visible

    const handleToggle = (itemValue: string) => {
        setOpenItem((prev) => (prev === itemValue ? null : itemValue));
    };

    return (
        <Accordion type="single" collapsible className="w-full space-y-3" ref={ref}>
            {items.map((item, index) => {
                const value = `item-${index}`;
                const isOpen = openItem === value;

                return (
                    <motion.div
                        key={index}
                        initial={{ y: -50, opacity: 0 }} // Start stacked at the top
                        animate={isInView ? { y: 0, opacity: 1 } : {}} // Fall smoothly
                        transition={{
                            duration: 0.6,
                            delay: index * 0.1, // Staggered effect
                            ease: "easeOut",
                        }}
                    >
                        <AccordionItem
                            value={value}
                            className={cn(
                                "rounded-lg bg-muted/30 !border !border-indigo-200 focus-visible:!ring-0",
                                isOpen && "shadow-expanded"
                            )}
                        >
                            <AccordionTrigger
                                onClick={() => handleToggle(value)}
                                className={cn(
                                    "flex justify-between items-center px-4 py-3 text-left text-base lg:text-lg font-medium hover:no-underline",
                                    isOpen ? "text-primary" : "text-foreground"
                                )}
                            >
                                <span className="w-full text-sm md:text-base">
                                    {item.question}
                                </span>
                                <span className="w-max">
                                    {isOpen ? (
                                        <MinusCircle className="size-7 md:size-8 text-primary" />
                                    ) : (
                                        <PlusCircle className="size-7 md:size-8 text-primary" />
                                    )}
                                </span>
                            </AccordionTrigger>
                            <AccordionContent className="px-4 text-gray-800 text-base">
                                <p className="max-w-3/4">{item.answer}</p>
                            </AccordionContent>
                        </AccordionItem>
                    </motion.div>
                );
            })}
        </Accordion>
    );
}
