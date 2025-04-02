import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const WhatsappReachOutButton = () => {
    return (
        <Link
            href={"#"}
            className="rounded-full fixed bottom-2  md:bottom-0 md:left-1/2 md:-translate-x-1/2 right-2W z-50 shadow-lg size-12"
        >
            {/* WhatsApp Floating Button */}
            <Image
                src="/WhatsApp.svg"
                alt="whatsapp button"
                width={80}
                height={80}
                className="size-full"
            />
        </Link>
    )
}
