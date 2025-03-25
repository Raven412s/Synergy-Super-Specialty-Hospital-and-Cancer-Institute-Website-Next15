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
      description: "Personalized cancer treatment using advanced chemotherapy and immunotherapy approaches.",
      keywords: ["Medical Oncology", "Chemotherapy", "Immunotherapy", "Cancer Treatment"],
      ogImage: "/images/services/medical-oncology.jpg",
    },
    "radiation-oncology": {
      title: "Radiation Oncology Services",
      description: "Cutting-edge radiation therapies for precise targeting of cancer cells.",
      keywords: ["Radiation Oncology", "Radiation Therapy", "Cancer Radiation Treatment"],
      ogImage: "/images/services/radiation-oncology.jpg",
    },
    "surgical-oncology": {
      title: "Surgical Oncology",
      description: "Expert surgical procedures for diagnosing and removing tumors safely.",
      keywords: ["Surgical Oncology", "Cancer Surgery", "Tumor Removal"],
      ogImage: "/images/services/surgical-oncology.jpg",
    },
    "hemato-oncology": {
      title: "Hemato Oncology",
      description: "Specialized care for blood-related cancers like leukemia and lymphoma.",
      keywords: ["Hemato Oncology", "Blood Cancer", "Leukemia", "Lymphoma"],
      ogImage: "/images/services/hemato-oncology.jpg",
    },
    "palliative-care": {
      title: "Pain & Palliative Care",
      description: "Supportive care focused on relieving pain and improving quality of life for cancer patients.",
      keywords: ["Palliative Care", "Cancer Pain Relief", "Supportive Oncology"],
      ogImage: "/images/services/palliative-care.jpg",
    },
    "diagnostic-imaging": {
      title: "Diagnostic Imaging",
      description: "Accurate and advanced imaging for early cancer detection and treatment planning.",
      keywords: ["Diagnostic Imaging", "CT Scan", "MRI", "Cancer Detection"],
      ogImage: "/images/services/diagnostic-imaging.jpg",
    },
    "laboratory": {
      title: "Laboratory Services",
      description: "Comprehensive lab testing for accurate cancer diagnosis and monitoring.",
      keywords: ["Cancer Lab Tests", "Pathology", "Blood Tests", "Biopsy Analysis"],
      ogImage: "/images/services/laboratory.jpg",
    },
    "pharmacy": {
      title: "Oncology Pharmacy",
      description: "Dedicated pharmacy offering cancer-specific medications and expert guidance.",
      keywords: ["Oncology Pharmacy", "Cancer Medicines", "Chemotherapy Drugs"],
      ogImage: "/images/services/pharmacy.jpg",
    },
    "physiotherapy": {
      title: "Cancer Physiotherapy",
      description: "Rehabilitation therapies to regain strength and mobility during or after cancer treatment.",
      keywords: ["Cancer Physiotherapy", "Rehabilitation", "Post-Treatment Recovery"],
      ogImage: "/images/services/physiotherapy.jpg",
    },
  },

  "patient-care": {
    emergency: {
      title: "24x7 Emergency Medical Services",
      description: "Round-the-clock emergency care with advanced life-saving facilities and expert doctors.",
      keywords: ["Emergency Care", "24x7 Hospital Emergency", "Urgent Medical Help"],
      ogImage: "/images/patient-care/emergency.jpg",
    },
    "second-opinion": {
      title: "Second Medical Opinion",
      description: "Consult senior specialists for a second opinion on your diagnosis or treatment plan.",
      keywords: ["Second Medical Opinion", "Specialist Consultation", "Medical Advice"],
      ogImage: "/images/patient-care/second-opinion.jpg",
    },
    "in-patient": {
      title: "In-Patient Care Services",
      description: "Well-equipped in-patient wards with compassionate care, advanced monitoring, and 24x7 support.",
      keywords: ["In-Patient Care", "Hospital Stay", "Admitted Patient Services"],
      ogImage: "/images/patient-care/in-patient.jpg",
    },
    "out-patient": {
      title: "Out-Patient Department (OPD) Services",
      description: "Quick and efficient consultations, follow-ups, and diagnostics for out-patient needs.",
      keywords: ["OPD Services", "Doctor Consultation", "Out-Patient Department"],
      ogImage: "/images/patient-care/out-patient.jpg",
    },
  },

  "health-library": {
    "breast-cancer": {
      title: "Understanding Breast Cancer",
      description: "Learn about the symptoms, risk factors, diagnosis, and treatment options for breast cancer.",
      keywords: ["Breast Cancer", "Breast Tumor", "Breast Cancer Awareness"],
      ogImage: "/images/health-library/breast-cancer.jpg",
    },
    "prostate-cancer": {
      title: "Prostate Cancer Overview",
      description: "Comprehensive information on prostate cancer including early signs, screening, and therapies.",
      keywords: ["Prostate Cancer", "Men's Health", "Cancer Screening"],
      ogImage: "/images/health-library/prostate-cancer.jpg",
    },
    "lung-cancer": {
      title: "Lung Cancer Guide",
      description: "Know the causes, symptoms, diagnosis, and latest treatment options for lung cancer.",
      keywords: ["Lung Cancer", "Smoking and Cancer", "Lung Health"],
      ogImage: "/images/health-library/lung-cancer.jpg",
    },
    "cervical-cancer": {
      title: "Cervical Cancer Awareness",
      description: "Understand the symptoms, preventive measures, HPV vaccine, and treatment options.",
      keywords: ["Cervical Cancer", "HPV", "Women's Health"],
      ogImage: "/images/health-library/cervical-cancer.jpg",
    },
    "blood-cancer": {
      title: "Blood Cancer Types and Treatments",
      description: "Explore different types of blood cancers such as leukemia, lymphoma, and myeloma.",
      keywords: ["Blood Cancer", "Leukemia", "Lymphoma", "Myeloma"],
      ogImage: "/images/health-library/blood-cancer.jpg",
    },
    prevention: {
      title: "Cancer Prevention Tips",
      description: "Practical tips and lifestyle changes that can help reduce the risk of developing cancer.",
      keywords: ["Cancer Prevention", "Healthy Lifestyle", "Preventive Care"],
      ogImage: "/images/health-library/prevention.jpg",
    },
    diagnosis: {
      title: "Cancer Diagnosis and Staging",
      description: "Understand how cancer is diagnosed, staged, and what tests are involved in the process.",
      keywords: ["Cancer Diagnosis", "Cancer Staging", "Biopsy", "Imaging Tests"],
      ogImage: "/images/health-library/diagnosis.jpg",
    },
    treatments: {
      title: "Cancer Treatment Options",
      description: "Learn about different cancer treatments including surgery, chemotherapy, radiation, and targeted therapy.",
      keywords: ["Cancer Treatment", "Chemotherapy", "Radiation", "Surgery"],
      ogImage: "/images/health-library/treatments.jpg",
    },
    nutrition: {
      title: "Nutrition and Wellness During Cancer",
      description: "Nutritional guidance, wellness tips, and dietary support for cancer patients and survivors.",
      keywords: ["Cancer Nutrition", "Wellness Tips", "Diet for Cancer Patients"],
      ogImage: "/images/health-library/nutrition.jpg",
    },
    faqs: {
      title: "Frequently Asked Questions About Cancer",
      description: "Answers to the most common queries regarding cancer, treatment, and lifestyle.",
      keywords: ["Cancer FAQs", "Cancer Help", "Patient Questions"],
      ogImage: "/images/health-library/faqs.jpg",
    },
  },

  survivors: {
    testimonials: {
      title: "Cancer Survivor Testimonials",
      description: "Inspiring stories of courage and strength from patients who overcame cancer.",
      keywords: ["Cancer Survivor Stories", "Patient Testimonials", "Inspiration"],
      ogImage: "/images/survivors/testimonials.jpg",
    },
    "victory-stories": {
      title: "Victory Stories of Hope and Healing",
      description: "Real-life journeys of patients who fought cancer and emerged victorious.",
      keywords: ["Cancer Victory", "Healing Journeys", "Success Stories"],
      ogImage: "/images/survivors/victory-stories.jpg",
    },
    videos: {
      title: "Video Messages from Cancer Survivors",
      description: "Watch heartfelt video messages from survivors sharing their personal journeys.",
      keywords: ["Cancer Survivor Videos", "Inspiring Stories", "Video Testimonials"],
      ogImage: "/images/survivors/videos.jpg",
    },
    counseling: {
      title: "Counseling & Mental Health Support",
      description: "Emotional and psychological support services for patients, survivors, and families.",
      keywords: ["Cancer Counseling", "Mental Health", "Emotional Support"],
      ogImage: "/images/survivors/counseling.jpg",
    },
    rehab: {
      title: "Rehabilitation Programs for Cancer Survivors",
      description: "Comprehensive rehab services to help survivors regain strength and quality of life.",
      keywords: ["Cancer Rehab", "Survivor Care", "Post-Treatment Recovery"],
      ogImage: "/images/survivors/rehab.jpg",
    },
    clinics: {
      title: "Survivorship Clinics and Long-Term Care",
      description: "Dedicated clinics focusing on long-term health, monitoring, and survivorship needs.",
      keywords: ["Survivorship Clinic", "Follow-up Care", "Long-term Health"],
      ogImage: "/images/survivors/clinics.jpg",
    },
    volunteer: {
      title: "Become a Volunteer for Cancer Support",
      description: "Join our volunteer program and make a meaningful impact in cancer care and recovery.",
      keywords: ["Cancer Volunteer", "Support Programs", "Join Us"],
      ogImage: "/images/survivors/volunteer.jpg",
    },
    awareness: {
      title: "Cancer Awareness Campaigns",
      description: "Engaging campaigns to spread awareness, encourage screening, and educate communities.",
      keywords: ["Cancer Awareness", "Health Campaigns", "Community Engagement"],
      ogImage: "/images/survivors/awareness.jpg",
    },
}
};
