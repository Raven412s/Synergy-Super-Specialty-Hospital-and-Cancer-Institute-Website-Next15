import React, { PropsWithChildren } from 'react'

const SectionLayout = ({children}: PropsWithChildren) => {
  return (
    <main className='py-20 lg:py-24 '>
    {children}
    </main>
  )}


export default SectionLayout
