import { NavAndFooterWrapper } from '@/components/wrapper/NavAndFooterWrapper'
import { PropsWithChildren } from 'react'

const WithNavLayout = ({children}:PropsWithChildren) => {
  return (
    <NavAndFooterWrapper>
        <main className='min-h-screen w-full relative'>
        {children}
        </main>
    </NavAndFooterWrapper>
  )
}

export default WithNavLayout
