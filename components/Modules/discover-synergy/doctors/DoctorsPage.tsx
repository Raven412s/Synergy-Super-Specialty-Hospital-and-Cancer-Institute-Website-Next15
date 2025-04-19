"use client"
import React, { useState, useRef } from 'react'
import { useInView, motion, AnimatePresence } from 'framer-motion'
import { FaSearch, FaUserMd, FaFilter, FaCalendarAlt, FaClock, FaHospital, FaArrowRight } from 'react-icons/fa'

export const DoctorsPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Sample doctor data
  const doctors = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      specialty: "Cardiology",
      department: "Heart Institute",
      experience: "15 years",
      image: "/doctors/dr-priya.jpg",
      availability: [
        { day: "Mon", time: "9:00 AM - 5:00 PM" },
        { day: "Wed", time: "9:00 AM - 5:00 PM" },
        { day: "Fri", time: "9:00 AM - 5:00 PM" }
      ],
      isSenior: true
    },
    {
      id: 2,
      name: "Dr. Rajesh Patel",
      specialty: "Neurology",
      department: "Neurosciences",
      experience: "12 years",
      image: "/doctors/dr-rajesh.jpg",
      availability: [
        { day: "Tue", time: "10:00 AM - 6:00 PM" },
        { day: "Thu", time: "10:00 AM - 6:00 PM" },
        { day: "Sat", time: "9:00 AM - 2:00 PM" }
      ],
      isSenior: false
    },
    {
      id: 3,
      name: "Dr. Ananya Reddy",
      specialty: "Pediatrics",
      department: "Child Care",
      experience: "8 years",
      image: "/doctors/dr-ananya.jpg",
      availability: [
        { day: "Mon", time: "8:00 AM - 4:00 PM" },
        { day: "Tue", time: "8:00 AM - 4:00 PM" },
        { day: "Wed", time: "8:00 AM - 4:00 PM" },
        { day: "Fri", time: "8:00 AM - 4:00 PM" }
      ],
      isSenior: false
    },
    {
      id: 4,
      name: "Dr. Amit Kumar",
      specialty: "Orthopedics",
      department: "Bone & Joint",
      experience: "20 years",
      image: "/doctors/dr-amit.jpg",
      availability: [
        { day: "Mon", time: "11:00 AM - 7:00 PM" },
        { day: "Wed", time: "11:00 AM - 7:00 PM" },
        { day: "Fri", time: "11:00 AM - 7:00 PM" }
      ],
      isSenior: true
    },
    {
      id: 5,
      name: "Dr. Neha Gupta",
      specialty: "Dermatology",
      department: "Skin Care",
      experience: "10 years",
      image: "/doctors/dr-neha.jpg",
      availability: [
        { day: "Tue", time: "9:00 AM - 5:00 PM" },
        { day: "Thu", time: "9:00 AM - 5:00 PM" },
        { day: "Sat", time: "10:00 AM - 3:00 PM" }
      ],
      isSenior: false
    },
    {
      id: 6,
      name: "Dr. Vikram Singh",
      specialty: "Oncology",
      department: "Cancer Center",
      experience: "18 years",
      image: "/doctors/dr-vikram.jpg",
      availability: [
        { day: "Mon", time: "8:00 AM - 4:00 PM" },
        { day: "Tue", time: "8:00 AM - 4:00 PM" },
        { day: "Thu", time: "8:00 AM - 4:00 PM" }
      ],
      isSenior: true
    }
  ]

  // Unique departments and specialties
  const departments = [...new Set(doctors.map(doctor => doctor.department))]
  const specialties = [...new Set(doctors.map(doctor => doctor.specialty))]
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  // State for filters
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("")
  const [selectedSpecialty, setSelectedSpecialty] = useState("")
  const [selectedDay, setSelectedDay] = useState("")
  const [timeRange, setTimeRange] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  // Filter doctors
  const filteredDoctors = doctors.filter(doctor => {
    return (
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedDepartment === "" || doctor.department === selectedDepartment) &&
      (selectedSpecialty === "" || doctor.specialty === selectedSpecialty) &&
      (selectedDay === "" || doctor.availability.some(avail => avail.day === selectedDay)) &&
      (timeRange === "" ||
        doctor.availability.some(avail => {
          if (timeRange === "morning") {
            return avail.time.includes("AM") && !avail.time.includes("12:00 PM")
          } else if (timeRange === "afternoon") {
            return avail.time.includes("PM") && !avail.time.includes("AM")
          }
          return true
        })
    )
  )})

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section
      ref={ref}
      className="min-h-screen w-full px-4 sm:px-6 lg:px-16 xl:px-24 py-12 md:py-20 bg-gray-50"
    >
      <div className='lg:p-10 md:p-8 p-6 rounded-3xl bg-white border-3 border-neutral-200 shadow-expanded'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading mb-2">
            Find Your Doctor
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-4xl">
            Connect with our team of expert physicians dedicated to your health and wellbeing.
          </p>

          {/* Search and Filter Bar */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search doctors by name..."
                  className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <FaFilter className="mr-2" />
                Filters
              </button>
            </div>

            {/* Expanded Filters */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-blue-50 rounded-lg mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                      <select
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        value={selectedDepartment}
                        onChange={(e) => setSelectedDepartment(e.target.value)}
                      >
                        <option value="">All Departments</option>
                        {departments.map(dept => (
                          <option key={dept} value={dept}>{dept}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Specialty</label>
                      <select
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        value={selectedSpecialty}
                        onChange={(e) => setSelectedSpecialty(e.target.value)}
                      >
                        <option value="">All Specialties</option>
                        {specialties.map(spec => (
                          <option key={spec} value={spec}>{spec}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Day Available</label>
                      <select
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        value={selectedDay}
                        onChange={(e) => setSelectedDay(e.target.value)}
                      >
                        <option value="">Any Day</option>
                        {days.map(day => (
                          <option key={day} value={day}>{day}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Time Range</label>
                      <select
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        value={timeRange}
                        onChange={(e) => setTimeRange(e.target.value)}
                      >
                        <option value="">Any Time</option>
                        <option value="morning">Morning (AM)</option>
                        <option value="afternoon">Afternoon (PM)</option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Doctors Grid */}
          {filteredDoctors.length > 0 ? (
            <motion.div
              variants={container}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredDoctors.map(doctor => (
                <motion.div
                  key={doctor.id}
                  variants={item}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden"
                >
                  <div className="relative h-60 bg-gradient-to-r from-blue-500 to-blue-700">
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                      <FaUserMd className="text-6xl opacity-20" />
                    </div>
                    {doctor.isSenior && (
                      <div className="absolute top-4 right-4 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Senior Doctor
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{doctor.name}</h3>
                    <p className="text-blue-600 font-medium mb-2">{doctor.specialty}</p>
                    <div className="flex items-center text-gray-600 mb-4">
                      <FaHospital className="mr-2 text-gray-400" />
                      <span>{doctor.department}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                      <FaUserMd className="mr-2 text-gray-400" />
                      <span>{doctor.experience} experience</span>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                        <FaCalendarAlt className="mr-2 text-blue-500" />
                        Availability
                      </h4>
                      <ul className="space-y-2">
                        {doctor.availability.map((avail, i) => (
                          <li key={i} className="flex items-center text-sm text-gray-600">
                            <FaClock className="mr-2 text-gray-400" />
                            <span className="font-medium">{avail.day}:</span>
                            <span className="ml-1">{avail.time}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button className="mt-6 w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Book Appointment
                      <FaArrowRight className="ml-2" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 text-6xl mb-4">
                <FaUserMd />
              </div>
              <h3 className="text-xl font-medium text-gray-700 mb-2">No doctors found</h3>
              <p className="text-gray-500">Try adjusting your search filters</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
