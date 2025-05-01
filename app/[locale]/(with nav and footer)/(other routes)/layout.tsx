import { PropsWithChildren } from 'react'

const SectionLayout = ({children}: PropsWithChildren) => {
  return (
    <main className='pt-20 lg:pt-20 relative min-h-screen w-full'>
        {children}
    </main>
  )}


export default SectionLayout
