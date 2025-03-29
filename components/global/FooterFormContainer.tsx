import React from 'react'
import RequestCallBackForm from '../forms/RequestCallBackForm'
import Image from 'next/image'

export const FooterFormContainer = () => {
  return (
    <div className="border-2 rounded-2xl mb-10 min-h-[30rem] px-4 py-8 sm:px-6 lg:px-12 flex flex-col gap-16">
      <h1 className="text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase font-black text-primary mb-6">
        Request A Callback
      </h1>
      <div className="flex flex-col-reverse lg:flex-row ">
        <RequestCallBackForm />
        <Image width={180} height={180} src={"/image.png"} alt='foooter form image' className='hidden lg:block w-1/4' />
        <Image width={180} height={180} src={"/nurse-down.webp"} alt='foooter form image' className='block lg:hidden w-full' />
      </div>
    </div>
  )
}
