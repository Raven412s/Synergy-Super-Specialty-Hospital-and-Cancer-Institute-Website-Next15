import React from 'react'
import RequestCallBackForm from '../forms/RequestCallBackForm'
import Image from 'next/image'

export const FooterFormContainer = () => {
    return (
        <div className="relative border-2 rounded-2xl mb-10 min-h-[30rem] px-4 py-8 sm:px-6 lg:px-8 flex flex-col gap-8 overflow-hidden bg-fuchsia-200/60 ">
            {/* Decorative elements */}
            <div className="absolute min-w-96 min-h-96 rounded-full bg-indigo-400/70 blur-lg top-1/2 -left-38" />
            <div className="absolute w-36 h-24 rounded-full bg-purple-900/90 blur-lg -top-2 -left-10" />
            <div className="absolute min-w-96 min-h-96 rounded-full bg-pink-300/90 blur-lg bottom-46 right-8" />
            <div className="absolute w-24 h-32 rounded-full bg-rose-700/90 blur-lg bottom-2 -right-10" />
            <div className="absolute z-10 backdrop-blur-3xl size-full top-0 left-0 bg-white/10"/>
            {/* Content */}
            <div className="relative z-20 w-full">
                <h1 className="text-left text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Request A Callback
                </h1>
                <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
                    <div className="w-full lg:w-2/3">
                        <RequestCallBackForm />
                    </div>
                    <div className="w-full lg:w-1/3 flex justify-center">
                        <Image
                            width={300}
                            height={300}
                            src="/image.png"
                            alt="Customer support"
                            className="hidden lg:block w-full max-w-xs object-contain"
                        />
                        <Image
                            width={250}
                            height={250}
                            src="/nurse-down.webp"
                            alt="Customer support"
                            className="block lg:hidden w-full max-w-xs object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
