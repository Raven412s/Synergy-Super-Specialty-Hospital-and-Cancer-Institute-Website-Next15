import React, { PropsWithChildren } from 'react'
import { Navbar } from '../global/Navbar'
import { Footer } from '../global/Footer'

export const NavAndFooterWrapper = ({children}:PropsWithChildren) => {
  return (
    <div className='w-full'>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}
