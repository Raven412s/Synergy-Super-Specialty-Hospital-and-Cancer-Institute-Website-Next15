import React, { PropsWithChildren } from 'react'
import { Navbar } from '../global/Navbar'
import { Footer } from '../global/Footer'

export const NavAndFooterWrapper = ({children}:PropsWithChildren) => {
  return (
    <div>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}
