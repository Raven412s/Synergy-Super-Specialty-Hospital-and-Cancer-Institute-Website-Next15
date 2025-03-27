import { NavAndFooterWrapper } from '@/components/wrapper/NavAndFooterWrapper'
import React, { PropsWithChildren } from 'react'

const WithNavLayout = ({children}:PropsWithChildren) => {
  return (
    <NavAndFooterWrapper>
        {children}
    </NavAndFooterWrapper>
  )
}

export default WithNavLayout
