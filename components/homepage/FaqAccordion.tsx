// components/homepage/FaqAccordion.tsx
"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { MinusCircle, PlusCircle } from "lucide-react";
import { useState } from "react";

interface FAQItem {
    question: string;
    answer: string;
}

interface FaqAccordionProps {
    items: FAQItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
    const [openItem, setOpenItem] = useState<string | null>(null);

    const handleToggle = (itemValue: string) => {
        setOpenItem((prev) => (prev === itemValue ? null : itemValue));
    };

    return (
        <Accordion type="single" collapsible className="w-full space-y-3">
            {items.map((item, index) => {
                const value = `item-${index}`;
                const isOpen = openItem === value;

                return (
                    <AccordionItem
                        value={value}
                        key={index}
                        className={cn(
                            "rounded-lg bg-muted/30 !border !border-indigo-200 focus-visible:!ring-0",
                            isOpen && "shadow-expanded"
                        )}
                    >
                        <AccordionTrigger
                            onClick={() => handleToggle(value)}
                            className={cn("flex  justify-between items-center px-4 py-3 text-left text-base lg:text-lg font-medium hover:no-underline", isOpen ? "text-primary" : "text-foreground")}
                        >
                            <span className="w-full text-sm md:text-base  ">
                                {item.question}
                            </span>
                            <span className="w-max">
                                {isOpen ? <MinusCircle className="size-7 md:size-8 text-primary" /> : <PlusCircle className="size-7 md:size-8 text-primary" />}
                            </span>
                        </AccordionTrigger>
                        <AccordionContent className="px-4  text-gray-800 text-base">
                            <p className="max-w-3/4">
                                {item.answer}
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                );
            })}
        </Accordion>
    );
}
