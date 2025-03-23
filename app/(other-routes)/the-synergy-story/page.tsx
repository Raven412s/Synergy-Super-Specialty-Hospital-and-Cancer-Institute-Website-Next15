import Image from 'next/image'
import React from 'react'

const DiscoverPage = () => {
  return (
    <main id='Overview'>
        <section className='min-h-screen w-full mb-2 bg-fuchsia-100 px-6 lg:px-24 py-4' id='Our-Mission'>
            <div className="p-8 rounded-3xl bg-white min-w-3xl flex  ">
                <div className="w-2/6">
                    <Image src={"/chairman.png"} alt='chair man jpg' width={120} height={1000} className='object-cover size-full' />
                </div>
                <div className="w-4/6">

                </div>
            </div>
        </section>
        <section className='min-h-screen w-full mb-2 bg-indigo-100 px-6 lg:px-24 py-4' id='Our-Vision'>Our-Vission</section>
        <section className='min-h-screen w-full mb-2 bg-violet-100 px-6 lg:px-24 py-4' id='Leadership'>Leadership</section>
        <section className='min-h-screen w-full mb-2 bg-purple-100 px-6 lg:px-24 py-4' id='Awards-and-Accolades'>Awards-and-Accolades</section>
        <section className='min-h-screen w-full mb-2 bg-neutral-100 px-6 lg:px-24 py-4' id='Achievements-and-Milestones'>Achievements-and-Milestones</section>
        <section className='min-h-screen w-full mb-2 bg-slate-100 px-6 lg:px-24 py-4' id='A-Day-at-Synergy'>A-Day-at-Synergy</section>
    </main>
  )
}

export default DiscoverPage
