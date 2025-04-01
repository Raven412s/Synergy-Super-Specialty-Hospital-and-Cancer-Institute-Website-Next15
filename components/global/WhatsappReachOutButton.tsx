import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

export const WhatsappReachOutButton = () => {
    return (
        <Button
            variant="link"
            size="icon"
            className="rounded-full fixed bottom-0 md:left-1/2 md:-translate-x-1/2 right-0 z-50 shadow-lg size-12"
        >
            {/* WhatsApp Floating Button */}
            <Image
                src="/WhatsApp.svg"
                alt="whatsapp button"
                width={80}
                height={80}
                className="size-20"
            />
        </Button>
    )
}
