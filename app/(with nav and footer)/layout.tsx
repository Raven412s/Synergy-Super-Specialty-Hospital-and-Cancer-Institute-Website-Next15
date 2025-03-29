import { Button } from '@/components/ui/button'
import { NavAndFooterWrapper } from '@/components/wrapper/NavAndFooterWrapper'
import Image from 'next/image'
import React, { PropsWithChildren } from 'react'

const WithNavLayout = ({children}:PropsWithChildren) => {
  return (
    <NavAndFooterWrapper>
        <main className='min-h-screen w-full relative'>
        {children}
            {/* WhatsApp Floating Button */}
            <Button
            variant="link"
            size="icon"
            className="rounded-full fixed right-5 bottom-5 z-50 shadow-lg size-14"
          >
            <Image
              src="/WhatsApp.svg"
              alt="whatsapp button"
              width={80}
              height={80}
              className="size-20"
            />
          </Button>
        </main>
    </NavAndFooterWrapper>
  )
}

export default WithNavLayout
