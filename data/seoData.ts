export const seoData: Record<
  string,
  Record<
    string,
    {
      title: string;
      description: string;
      keywords?: string[];
      ogImage: string;
    }
  >
> = {
  leadership: {
    "Dr-Alok-Tiwari": {
      title: "Dr. Alok Tiwari - Oncology Specialist",
      description: "Meet Dr. Alok Tiwari, a leading specialist in oncology with years of experience.",
      keywords: ["Dr. Alok Tiwari", "Oncologist", "Cancer Specialist"],
      ogImage: "/images/doctors/dr-alok-tiwari.jpg",
    },
    "Dr-Anjali-Jain": {
      title: "Dr. Anjali Jain - Senior Oncologist",
      description: "Know more about Dr. Anjali Jain’s contribution to cancer treatment and research.",
      keywords: ["Dr. Anjali Jain", "Cancer Expert", "Senior Doctor"],
      ogImage: "/images/doctors/dr-anjali-jain.jpg",
    },
    "Dr-Saurabh-Mishra": {
      title: "Dr. Saurabh Mishra - Radiation Oncology Expert",
      description: "Expert in radiation oncology, Dr. Saurabh Mishra brings hope to countless patients.",
      keywords: ["Dr. Saurabh Mishra", "Radiation Oncologist"],
      ogImage: "/images/doctors/dr-saurabh-mishra.jpg",
    },
  },

  services: {
    "medical-oncology": {
      title: "Medical Oncology Services",
      description: "Comprehensive cancer treatment with advanced medical oncology services.",
      keywords: ["Medical Oncology", "Cancer Medicine"],
      ogImage: "/images/services/medical-oncology.jpg",
    },
    "radiation-oncology": {
      title: "Radiation Oncology Services",
      description: "Advanced radiation therapy for effective cancer treatment.",
      keywords: ["Radiation Oncology", "Cancer Therapy"],
      ogImage: "/images/services/radiation-oncology.jpg",
    },
    "surgical-oncology": {
      title: "Surgical Oncology",
      description: "Expert surgical intervention for various cancer types.",
      keywords: ["Surgical Oncology", "Cancer Surgery"],
      ogImage: "/images/services/surgical-oncology.jpg",
    },
    // ... add other services similarly
  },

  "patient-care": {
    emergency: {
      title: "Emergency Cancer Care",
      description: "Immediate and expert care for cancer-related emergencies.",
      keywords: ["Cancer Emergency", "24x7 Emergency Oncology"],
      ogImage: "/images/patient-care/emergency.jpg",
    },
    "second-opinion": {
      title: "Second Opinion for Cancer Treatment",
      description: "Get expert second opinions from leading oncologists.",
      keywords: ["Cancer Second Opinion", "Consult Oncologist"],
      ogImage: "/images/patient-care/second-opinion.jpg",
    },
    // ...more
  },

  "health-library": {
    "breast-cancer": {
      title: "Understanding Breast Cancer",
      description: "Everything you need to know about symptoms, diagnosis, and treatment of breast cancer.",
      keywords: ["Breast Cancer", "Cancer Awareness"],
      ogImage: "/images/health-library/breast-cancer.jpg",
    },
    // ...rest of library pages
  },

  survivors: {
    testimonials: {
      title: "Cancer Survivor Testimonials",
      description: "Inspiring stories of courage and strength from our cancer survivors.",
      keywords: ["Cancer Survivor Stories", "Testimonials"],
      ogImage: "/images/survivors/testimonials.jpg",
    },
    // ...rest of survivor stories
  },
};
