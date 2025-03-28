import FaqAccordion from '@/components/homepage/FaqAccordion';
import {
  generalQuestions,
  beforeVisitQuestions,
  duringTreatmentQuestions,
  afterTreatmentQuestions
} from '@/data';
import React from 'react';

export const Faqs = () => {
  return (
    <main className='bg-indigo-50 py-20 -mt-24'>
      {/* General FAQs */}
      <section
        id='general'
        className="min-h-screen w-full my-12   px-6 lg:px-24 py-4 "
      >
        <div className='p-8 rounded-3xl bg-white border-3 space-y-12 border-neutral-200 shadow-expanded'>
          <div className='container mx-auto'>
            <h2 className='text-heading'>General Questions</h2>
            <div className="space-y-4">
              <p className='text-base md:text-lg text-gray-700 leading-relaxed'>
                Find answers to common questions about our hospital, services, facilities, insurance, and more.
              </p>
              <p className='text-base sm:text-lg md:text-xl lg:text-xl text-left'>
                Synergy Super Speciality Hospital and Cancer Institute (SSSHCI) is committed to making cancer care accessible, affordable,
                and patient-centric. This section provides helpful information for understanding what we offer and how we operate.
              </p>
            </div>
          </div>
          <div className='flex items-center justify-start w-full'>
            <FaqAccordion items={generalQuestions} />
          </div>
        </div>
      </section>

      {/* Before You Visit */}
      <section
        className='min-h-screen w-full my-12 bg-indigo-50 px-6 lg:px-24 py-4'
        id='before-visit'
      >
        <div className='p-8 rounded-3xl bg-white border-3 space-y-12 border-neutral-200 shadow-expanded'>
          <div className='container mx-auto'>
            <h2 className='text-heading'>Before You Visit</h2>
            <div className="space-y-4">
              <p className='text-base md:text-lg text-gray-700 leading-relaxed'>
                Get ready for your visit to Synergy Cancer Hospital with these commonly asked questions.
              </p>
              <p className='text-base sm:text-lg md:text-xl lg:text-xl text-left'>
                From how to book an appointment to what documents you should carry, this section helps you prepare with confidence
                before stepping into our care.
              </p>
            </div>
          </div>
          <div className='flex items-center justify-start w-full'>
            <FaqAccordion items={beforeVisitQuestions} />
          </div>
        </div>
      </section>

      {/* During Treatment */}
      <section
        className='min-h-screen w-full my-12 bg-indigo-50 px-6 lg:px-24 py-4'
        id='during-treatment'
      >
        <div className='p-8 rounded-3xl bg-white border-3 space-y-12 border-neutral-200 shadow-expanded'>
          <div className='container mx-auto'>
            <h2 className='text-heading'>During Treatment</h2>
            <div className="space-y-4">
              <p className='text-base md:text-lg text-gray-700 leading-relaxed'>
                Understand what to expect while undergoing treatment at SSSHCI.
              </p>
              <p className='text-base sm:text-lg md:text-xl lg:text-xl text-left'>
                Learn about procedures, side effects, day-to-day care, and support services provided throughout your treatment journey.
              </p>
            </div>
          </div>
          <div className='flex items-center justify-start w-full'>
            <FaqAccordion items={duringTreatmentQuestions} />
          </div>
        </div>
      </section>

      {/* After Treatment */}
      <section
        className='min-h-screen w-full my-12 bg-indigo-50 px-6 lg:px-24 py-4'
        id='after-treatment'
      >
        <div className='p-8 rounded-3xl bg-white border-3 space-y-12 border-neutral-200 shadow-expanded'>
          <div className='container mx-auto'>
            <h2 className='text-heading'>After Treatment</h2>
            <div className="space-y-4">
              <p className='text-base md:text-lg text-gray-700 leading-relaxed'>
                Life after cancer treatment can bring new questions. This section helps you move forward with clarity.
              </p>
              <p className='text-base sm:text-lg md:text-xl lg:text-xl text-left'>
                Discover how we support your recovery, monitor your health, and help you regain a quality life beyond treatment.
              </p>
            </div>
          </div>
          <div className='flex items-center justify-start w-full'>
            <FaqAccordion items={afterTreatmentQuestions} />
          </div>
        </div>
      </section>
    </main>
  );
};
