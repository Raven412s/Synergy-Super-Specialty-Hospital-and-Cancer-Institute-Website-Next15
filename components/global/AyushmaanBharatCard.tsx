'use client';

import React from 'react';
import { FaIdCardAlt, FaHospitalUser } from 'react-icons/fa';
import { ImageWithFallback } from './ImageWithFallback';

const AyushmaanBharatCard = () => {
  return (
    <section className="py-12 px-4  rounded-2xl  mx-2 md:mx-0 bg-gradient-to-tl from-0% from-synergy-blue/60  via-synergy-blue/50 to-indigo-200 to-80% shadow-lg">
      <div className="max-w-6xl w-full mx-auto space-y-10">

        {/* Header Section */}
        <div className="relative flex flex-col md:flex-row justify-between items-center gap-6">
          <ImageWithFallback
            fallbackSrc="/fallback-image.webp"
            src="/insurance-companies/PMJAY.png"
            width={200}
            height={200}
            alt="Pradhan Mantri Ayushmaan Bharat Yojana"
            className="object-cover object-center rounded-full size-32 md:size-40"
          />
          <p className="text-2xl md:text-4xl lg:text-5xl uppercase font-extrabold text-center">
            Pradhan Mantri Ayushmaan Bharat Yojana
          </p>
          <ImageWithFallback
            fallbackSrc="/fallback-image.webp"
            src="/MODI.png"
            width={200}
            height={200}
            alt="Pradhan Mantri Narendra Modi"
            className="object-cover object-center rounded-full size-32 md:size-40 border-2 border-synergy-blue"
          />
          <ImageWithFallback
            fallbackSrc="/fallback-image.webp"
            src="/Oggy.jpg"
            width={200}
            height={200}
            alt="Pradhan Mantri Narendra Modi"
            className="object-cover object-center rounded-full size-32 md:size-40 border-2 border-synergy-blue"
          />
        </div>

        {/* Description Section */}
        <div className="relative flex flex-col md:flex-row justify-start items-center gap-10 md:gap-20 ">
          <ImageWithFallback
            fallbackSrc="/fallback-image.webp"
            src="/Ayushman-Card.jpg"
            width={450}
            height={400}
            alt="Ayushmaan Bharat Card"
            className="object-cover object-center w-full md:w-1/2 rounded-xl shadow-xl shadow-black/40"
          />
          <p className="w-full md:w-1/2 font-medium text-sm md:text-base leading-relaxed">
            The Ayushmaan Bharat Card, launched under the Pradhan Mantri Jan Arogya Yojana (PM-JAY), is a revolutionary step toward providing universal health coverage in India. It offers cashless healthcare services up to ₹5 lakh per family per year for secondary and tertiary hospitalization across public and private empanelled hospitals. Targeting economically vulnerable families, the scheme ensures access to quality healthcare without financial hardship. Beneficiaries can avail treatments for a wide range of diseases, surgeries, and medical procedures. With minimal documentation, quick approvals, and a vast network of hospitals, Ayushmaan Bharat empowers millions to lead healthier, more secure lives with dignity.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Left Side */}
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 flex items-center gap-3">
              <FaIdCardAlt className="text-primary text-4xl md:text-5xl" />
              Ayushmaan Bharat Card Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2">What is Ayushmaan Bharat?</h3>
                <p className="text-stone-700 text-sm md:text-base">
                  A national health protection scheme providing coverage of ₹5 lakh per family annually for secondary and tertiary care hospitalization.
                </p>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2">Availing Benefits</h3>
                <p className="text-stone-700 text-sm md:text-base">
                  Present your valid Ayushmaan Bharat Card and ID proof at our insurance desk. We handle all authorization processes directly with the scheme administrators.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 flex justify-center">
            <div className="bg-gradient-to-tl from-fuchsia-800 to-fuchsia-900 text-white p-6 md:p-8 rounded-xl shadow-lg shadow-black/20 w-full max-w-sm text-center flex flex-col items-center gap-4">
              <FaHospitalUser className="text-5xl md:text-6xl" />
              <h3 className="text-xl md:text-2xl font-bold">Get Covered Today</h3>
              <p className="text-white/80 text-sm md:text-base">
                Visit our Insurance Desk for easy enrollment and cashless treatment assistance.
              </p>
              <button className="mt-4 bg-white hover:bg-white/80 hover:backdrop-blur-sm text-primary font-semibold py-2 px-6 rounded-full transition-colors text-sm md:text-base">
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
