import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

export const WhatsappReachOutButton = () => {
  return (
      <Button
      variant="link"
      size="icon"
      className="rounded-full fixed right-5 bottom-5 z-50 shadow-lg size-14"
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
