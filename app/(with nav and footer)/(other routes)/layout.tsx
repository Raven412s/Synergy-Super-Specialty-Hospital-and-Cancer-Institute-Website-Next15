import { PropsWithChildren } from 'react'

const SectionLayout = ({children}: PropsWithChildren) => {
  return (
    <main className='py-20 lg:py-24 relative min-h-screen w-full'>
        {children}
    </main>
  )}


export default SectionLayout
