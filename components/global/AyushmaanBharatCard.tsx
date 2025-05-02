'use client';

import React from 'react';
import { FaIdCardAlt, FaHospitalUser } from 'react-icons/fa';
import { ImageWithFallback } from './ImageWithFallback';

const AyushmaanBharatCard = () => {
  return (
    <section className="py-8 sm:py-12 px-2 sm:px-3 lg:px-8 rounded-xl md:rounded-2xl  md:mx-0 bg-gradient-to-tl from-synergy-blue/60 via-synergy-blue/50 to-indigo-200 shadow-md md:shadow-lg">
      <div className="max-w-6xl w-full mx-auto space-y-8 md:space-y-10">
        {/* Header Section */}
        <div className="relative flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 md:gap-6">
          <div className="flex items-center gap-2 sm:gap-4 order-2 sm:order-1">
            <ImageWithFallback
              fallbackSrc="/fallback-image.webp"
              src="/insurance-companies/PMJAY.png"
              width={200}
              height={200}
              alt="Pradhan Mantri Ayushmaan Bharat Yojana"
              className="object-cover object-center rounded-full size-16 sm:size-20 md:size-24 lg:size-32"
            />
            <ImageWithFallback
              fallbackSrc="/fallback-image.webp"
              src="/MODI.png"
              width={200}
              height={200}
              alt="Pradhan Mantri Narendra Modi"
              className="object-cover object-center rounded-full size-16 sm:size-20 md:size-24 lg:size-32 border-2 border-synergy-blue"
            />
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center order-1 sm:order-2 px-2">
            Pradhan Mantri Ayushmaan Bharat Yojana
          </h1>

          <div className="order-3 sm:ml-auto">
            <ImageWithFallback
              fallbackSrc="/fallback-image.webp"
              src="/Oggy.jpg"
              width={200}
              height={200}
              alt="Pradhan Mantri Narendra Modi"
              className="object-cover object-center rounded-full size-16 sm:size-20 md:size-24 lg:size-32 border-2 border-synergy-blue"
            />
          </div>
        </div>

        {/* Description Section */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 md:gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 flex justify-center">
            <ImageWithFallback
              fallbackSrc="/fallback-image.webp"
              src="/Ayushman-Card.jpg"
              width={450}
              height={400}
              alt="Ayushmaan Bharat Card"
              className="object-cover object-center w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg md:rounded-xl shadow-md md:shadow-lg shadow-black/30"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <p className="font-medium text-sm sm:text-base md:text-lg leading-relaxed text-justify">
              The Ayushmaan Bharat Card, launched under the Pradhan Mantri Jan Arogya Yojana (PM-JAY), is a revolutionary step toward providing universal health coverage in India. It offers cashless healthcare services up to ₹5 lakh per family per year for secondary and tertiary hospitalization across public and private empanelled hospitals. Targeting economically vulnerable families, the scheme ensures access to quality healthcare without financial hardship. Beneficiaries can avail treatments for a wide range of diseases, surgeries, and medical procedures. With minimal documentation, quick approvals, and a vast network of hospitals, Ayushmaan Bharat empowers millions to lead healthier, more secure lives with dignity.
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8">

          {/* Left Side */}
          <div className="w-full lg:w-1/2 space-y-4 md:space-y-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold flex items-center gap-2 md:gap-3">
              <FaIdCardAlt className="text-primary text-3xl md:text-4xl" />
              <span>Ayushmaan Bharat Card Benefits</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white/30 p-4 rounded-lg">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">What is Ayushmaan Bharat?</h3>
                <p className="text-stone-700 text-sm md:text-base">
                  A national health protection scheme providing coverage of ₹5 lakh per family annually for secondary and tertiary care hospitalization.
                </p>
              </div>
              <div className="bg-white/30 p-4 rounded-lg">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">Availing Benefits</h3>
                <p className="text-stone-700 text-sm md:text-base">
                  Present your valid Ayushmaan Bharat Card and ID proof at our insurance desk. We handle all authorization processes directly with the scheme administrators.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-1/2 flex justify-center mt-4 lg:mt-0">
            <div className="bg-gradient-to-tl from-fuchsia-800 to-fuchsia-900 text-white p-5 sm:p-6 md:p-8 rounded-lg md:rounded-xl shadow-md md:shadow-lg shadow-black/20 w-full max-w-xs sm:max-w-sm text-center flex flex-col items-center gap-3 md:gap-4">
              <FaHospitalUser className="text-4xl md:text-5xl" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Get Covered Today</h3>
              <p className="text-white/80 text-xs sm:text-sm md:text-base">
                Visit our Insurance Desk for easy enrollment and cashless treatment assistance.
              </p>
              <button className="mt-2 md:mt-4 bg-white hover:bg-white/90 text-primary font-semibold py-2 px-4 sm:px-6 rounded-full transition-colors text-xs sm:text-sm md:text-base">
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AyushmaanBharatCard;
