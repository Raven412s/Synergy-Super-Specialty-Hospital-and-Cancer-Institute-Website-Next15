"use client"
import { ImageWithFallback } from '@/components/global/ImageWithFallback';
import { departmentData } from '@/data/departmentData';
import { DepartmentData } from '@/types';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Animation variants (unchanged)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

export default function ServicesPage() {
  return (
    <motion.main
      className="min-h-screen bg-gray-50"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Enhanced Hospital Introduction Section */}
      <motion.section
        className="py-16 px-4 bg-white"
        variants={fadeIn}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                className="text-4xl font-display font-light text-gray-900 mb-6 leading-tight"
                variants={itemVariants}
              >
                Exceptional Care at <span className="font-medium">Synergy Hospital</span>
              </motion.h1>

              <motion.p
                className="text-lg text-gray-600 mb-6 font-sans font-light leading-relaxed"
                variants={itemVariants}
              >
                Where compassionate healthcare meets cutting-edge medical innovation.
              </motion.p>

              <motion.div
                className="space-y-4 mb-8"
                variants={containerVariants}
              >
                {[
                  "Board-certified specialists in every field",
                  "State-of-the-art diagnostic technology",
                  "Patient-centered treatment plans",
                  "Multidisciplinary approach to complex cases"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    variants={itemVariants}
                  >
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 font-sans font-light">{item}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={itemVariants}>
                <button className="bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-sans font-normal transition-colors">
                  Schedule a Consultation
                </button>
              </motion.div>
            </div>

            <motion.div
              className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg"
              variants={itemVariants}
            >
              <ImageWithFallback
                fallbackSrc='/fallback-image.webp'
                fill
                src="/images/hospital-hero.jpg"
                alt="Synergy Hospital Facility"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Departments Grid Section - UNCHANGED */}
      <motion.section
        className="py-12 px-4"
        variants={fadeIn}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-semibold text-gray-900 mb-8"
            variants={itemVariants}
          >
            Our Medical Departments
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {departmentData.map((department) => (
              <DepartmentCard key={department.id} {...department} />
            ))}
          </motion.div>
        </div>
      </motion.section>
    </motion.main>
  );
}

// DepartmentCard component remains EXACTLY THE SAME
function DepartmentCard(department: DepartmentData) {
  return (
    <motion.div variants={itemVariants}>
      <Link
        href={`/services/${department.slug}`}
        className="group block rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
      >
        {/* Image or Icon */}
        {department.heroImage && (
          <motion.div
            className="mb-4 w-full h-12 relative"
            whileHover={{ scale: 1.02 }}
          >
            <ImageWithFallback
              fallbackSrc='/fallback-image.webp'
              fill
              src={department.heroImage}
              alt={department.name}
              className="object-cover rounded"
            />
          </motion.div>
        )}

        {/* Header with name and featured tag */}
        <motion.div
          className="mb-2 flex items-center justify-between"
          whileHover={{ x: 2 }}
        >
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary">
            {department.name}
          </h3>
          {department.isFeatured && (
            <motion.span
              className="text-xs font-semibold text-white bg-pink-400 px-2 py-0.5 rounded"
              whileHover={{ scale: 1.1 }}
            >
              Featured
            </motion.span>
          )}
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-gray-600 text-sm leading-relaxed line-clamp-3"
          whileHover={{ x: 2 }}
        >
          {department.overview.description}
        </motion.p>

        {/* Tags */}
        {department.treatments.items?.length > 0 && (
          <motion.div
            className="flex flex-wrap gap-1 mt-3"
            variants={containerVariants}
          >
            {department.treatments.items.map((item, index) =>
              <motion.span
                className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded"
                key={index}
                variants={itemVariants}
                whileHover={{ y: -2 }}
              >
                {item.title}
              </motion.span>
            )}
          </motion.div>
        )}

        {/* Services count and rating */}
        <motion.div
          className="mt-3 flex items-center justify-between text-xs text-gray-500"
          whileHover={{ x: 2 }}
        >
          {department.facilities.features && (
            <span>{department.facilities.features} services</span>
          )}
        </motion.div>

        {/* Learn More link */}
        <motion.div
          className="mt-4 flex items-center text-blue-700 group-hover:text-primary"
          whileHover={{ x: 4 }}
        >
          <span className="text-sm font-medium">Learn More</span>
          <motion.svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            whileHover={{ x: 2 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </motion.svg>
        </motion.div>
      </Link>
    </motion.div>
  );
}
