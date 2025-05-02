

import { ActionItem, LeaderCardProps, LeaderPageProps, MenuItemProps, PressRelease, TestimonialItem } from "@/types"

export const menuItems: MenuItemProps[] = [
    {
        label: "discover synergy",
        pages: [
            {
                name: "Synergy Story",
                links: [
                    { label: "Overview", href: "/the-synergy-story#Overview" },
                    { label: "Our Vision", href: "/the-synergy-story#Our-Vision" },
                    { label: "Our Mission", href: "/the-synergy-story#Our-Mission" },
                    { label: "Leadership", href: "/the-synergy-story#Leadership" },
                    { label: "See What Synergy Achieved", href: "/the-synergy-story#Awards-and-Accolades" },
                    { label: "Milestones", href: "/the-synergy-story#Achievements-and-Milestones" },
                    { label: "Awards", href: "/the-synergy-story#Awards-and-Accolades" },
                    { label: "Life at Synergy", href: "/the-synergy-story#A-Day-at-Synergy" },
                ],
            },
            {
                name: "Leadership",
                links: [
                    { label: "Dr. Alok Tiwari", href: "/leadership/Dr-Alok-Tiwari" },
                    { label: "Dr. Anjali Jain", href: "/leadership/Dr-Anjali-Jain" },
                    { label: "Dr. Saurabh Mishra", href: "/leadership/Dr-Saurabh-Mishra" },
                ],
            },
            {
                name: "Doctors",
                links: [
                    { label: "Dr. Alok Tiwari", href: "/doctors/Dr-Alok-Tiwari" },
                    { label: "Dr. Anjali Jain", href: "/doctors/Dr-Anjali-Jain" },
                    { label: "Dr. Saurabh Mishra", href: "/doctors/Dr-Saurabh-Mishra" },
                    { label: "View All", href: "/doctors/all" },
                ],
            },
            {
                name: "Media Center",
                links: [
                    { label: "In the News", href: "/media-center#synergy-in-the-news" },
                    { label: "Press Releases", href: "/media-center#press-releases" },
                    { label: "Events & Conferences", href: "/media-center#events" },
                    { label: "Media Gallery", href: "/media-center#media-gallery" },
                    { label: "Media Contact", href: "/media-center#media-contacts" },
                ],
            },
            {
                name: "Terms & Privacy",
                links: [
                    { label: "Your Privacy is Our Policy", href: "/privacy-policy" },
                    { label: "Our Terms and Conditions", href: "/term-and-conditions" },
                ],
            },
        ],
    },
    {
        label: "medical services",
        pages: [
            {
                name: "Our Specialties",
                links: [
                    { label: "Medical Oncology", href: "/services/medical-oncology" },
                    { label: "Surgical Oncology", href: "/services/surgical-oncology" },
                    { label: "Neurology", href: "/services/neurology" },
                    { label: "Neurosurgery", href: "/services/neurosurgery" },
                    { label: "Gastroenterology", href: "/services/gastroenterology" },
                    { label: "Nephrology", href: "/services/nephrology" },
                    { label: "Urology", href: "/services/urology" },
                    { label: "Orthopedics", href: "/services/orthopedics" },
                    { label: "Anesthesia", href: "/services/anesthesia" },
                    { label: "General Surgery", href: "/services/general-surgery" },
                    { label: "Pediatrics", href: "/services/pediatrics" },
                    { label: "Gynecology & Obstetrics", href: "/services/gynecology" },
                    { label: "Head & Neck", href: "/services/head-and-neck" },
                    { label: "Emergency & Critical Care", href: "/services/emergency-and-critical-care" },
                    { label: "Pain & Palliative Care", href: "/services/pain-and-palliative-care" },

                    { label: "View All", href: "/services/all" },

                    // { label: "Radiation Oncology", href: "/services/radiation-oncology" },
                    // { label: "Hemato-Oncology", href: "/services/hemato-oncology" },
                    // { label: "Pain & Palliative Care", href: "/services/palliative-care" },
                    // { label: "Cardiology", href: "/services/cardiology" },
                    // { label: "Neurosurgery", href: "/services/neurosurgery" },
                    // { label: "Hepatology", href: "/services/hepatology" },
                    // { label: "Rheumatology", href: "/services/rheumatology" },
                    // { label: "Endocrinology", href: "/services/endocrinology" },
                    // { label: "Pulmonology", href: "/services/pulmonology" },
                    // { label: "Dermatology", href: "/services/dermatology" },
                    // { label: "ENT (Otorhinolaryngology)", href: "/services/ent" },
                    // { label: "Ophthalmology", href: "/services/ophthalmology" },
                    // { label: "Internal Medicine", href: "/services/internal-medicine" },
                    // { label: "Psychiatry", href: "/services/psychiatry" },
                ]
            },
            {
                name: "Support Services",
                links: [
                    { label: "Pharmacy", href: "/services/pharmacy" },
                    { label: "Blood Bank", href: "/services/blood-bank" },
                    { label: "Dietary", href: "/services/dietary" },
                    { label: "Laundry", href: "/services/laundry" },
                    { label: "House Keeping", href: "/services/house-keeping" },
                    { label: "Security", href: "/services/Security" },
                    { label: "Ambulance Services", href: "/services/ambulance" },
                    { label: "View All", href: "/services/support-services" }
                ]
            },
            {
                name: "Diagnostic Services",
                links: [
                    { label: "Diagnostic Imaging", href: "/services/diagnostic-imaging" },
                    { label: "Dialysis Unit", href: "/services/dialysis" },
                    { label: "Radiology", href: "/services/radiology" },
                    { label: "Pathology", href: "/services/pathology" },
                    { label: "Microbiology", href: "/services/microbiology" },
                    { label: "Biochemistry", href: "/services/biochemistry" },
                    { label: "View All", href: "/services/diagnostic-services" }
                ]
            },
            {
                name: "Specialized Services",
                links: [
                    { label: "ICU (Intensive Care Unit)", href: "/services/specialized-services#icu" },
                    { label: "NICU (Neonatal Intensive Care Unit)", href: "/services/specialized-services#nicu" },
                    { label: "OT (Operation Theater)", href: "/services/specialized-services#ot" },
                    { label: "Endoscopy", href: "/services/specialized-services#endoscopy" },
                    { label: "Physiotherapy", href: "/services/specialized-services#physiotherapy" },
                    { label: "View All", href: "/services/specialized-services" }
                ]
            },
            {
                name: "Administrative Services",
                links: [
                    { label: "Admission & Discharge", href: "/services/admission-and-discharge" },
                    { label: "Billing & Insurance", href: "/services/billing-and-insurance" },
                    { label: "Medical Records", href: "/services/medical-records" },
                    { label: "Customer Service", href: "/services/customer-care" },
                    { label: "View All", href: "/services/administrative-services" }
                ]
            },
            {
                name: "Patient Care",
                links: [
                    { label: "Second Opinion", href: "/patient-care/second-opinion" },
                    { label: "24x7 Emergency", href: "/patient-care/emergency" },
                    { label: "In-Patient Facilities", href: "/patient-care/in-patient" },
                    { label: "Outpatient Clinics", href: "/patient-care/out-patient" },
                    { label: "Health Check Packages", href: "/patient-care/health-checks" },
                    { label: "Insurance & TPA Services", href: "/patient-care/insurance" }
                ]
            }
        ]
    },
    {
        label: "health library",
        pages: [
            {
                name: "Cancer Types",
                links: [
                    { label: "Adrenal Cancer", href: "/health-library/adrenal-cancer" },
                    { label: "Anal Cancer", href: "/health-library/anal-cancer" },
                    { label: "Bile Duct Cancer", href: "/health-library/bile-duct-cancer" },
                    { label: "Bladder Cancer", href: "/health-library/bladder-cancer" },
                    { label: "Blood Cancer", href: "/health-library/blood-cancer" },
                    { label: "Bone Cancer", href: "/health-library/bone-cancer" },
                    { label: "Brain Cancer", href: "/health-library/brain-cancer" },
                    { label: "Breast Cancer", href: "/health-library/breast-cancer" },
                    { label: "Breast Cancer in Men", href: "/health-library/breast-cancer-in-men" },
                    { label: "Cervical Cancer", href: "/health-library/cervical-cancer" },
                    { label: "Colon/Rectal Cancer", href: "/health-library/colon-rectal-cancer" },
                    { label: "Endometrial Cancer", href: "/health-library/endometrial-cancer" },
                    { label: "Esophageal Cancer", href: "/health-library/esophageal-cancer" },
                    { label: "Eye Cancer", href: "/health-library/eye-cancer" },
                    { label: "Gallbladder Cancer", href: "/health-library/gallbladder-cancer" },
                    { label: "Gastric Cancer", href: "/health-library/gastric-cancer" },
                    { label: "Head and Neck Cancer", href: "/health-library/head-and-neck-cancer" },
                    { label: "Kidney Cancer", href: "/health-library/kidney-cancer" },
                    { label: "Laryngeal Cancer", href: "/health-library/laryngeal-cancer" },
                    { label: "Liver Cancer", href: "/health-library/liver-cancer" },
                    { label: "Lung Cancer", href: "/health-library/lung-cancer" },
                    { label: "Multiple Myeloma", href: "/health-library/multiple-myeloma" },
                    { label: "Neuroendocrine Tumors", href: "/health-library/neuroendocrine-tumors" },
                    { label: "Non-Hodgkin Lymphoma", href: "/health-library/non-hodgkin-lymphoma" },
                    { label: "Oral Cancer", href: "/health-library/oral-cancer" },
                    { label: "Ovarian Cancer", href: "/health-library/ovarian-cancer" },
                    { label: "Pancreatic Cancer", href: "/health-library/pancreatic-cancer" },
                    { label: "Penile Cancer", href: "/health-library/penile-cancer" },
                    { label: "Pituitary Tumors", href: "/health-library/pituitary-tumors" },
                    { label: "Prostate Cancer", href: "/health-library/prostate-cancer" },
                    { label: "Salivary Gland Cancer", href: "/health-library/salivary-gland-cancer" },
                    { label: "Skin Cancer", href: "/health-library/skin-cancer" },
                    { label: "Stomach Cancer", href: "/health-library/stomach-cancer" },
                    { label: "Uterine Cancer", href: "/health-library/uterine-cancer" },
                ],
            },
            {
                name: "Patient Education",
                links: [
                    { label: "Cancer Prevention", href: "/health-library/prevention" },
                    { label: "Diagnosis & Staging", href: "/health-library/diagnosis" },
                    { label: "Treatment Options", href: "/health-library/treatments" },
                    { label: "Nutrition & Wellness", href: "/health-library/nutrition" },
                ],
            },
            {
                name: "FAQs",
                links: [
                    { label: "General Questions", href: "/health-library/faqs#general" },
                    { label: "Before Your Visit", href: "/health-library/faqs#before-visit" },
                    { label: "During Treatment", href: "/health-library/faqs#during-treatment" },
                    { label: "After Treatment", href: "/health-library/faqs#after-treatment" },
                ],
            },
        ],
    },
    {
        label: "cancer survivors",
        pages: [
            {
                name: "Stories of Hope",
                links: [
                    { label: "Patient Testimonials", href: "/survivors/testimonials" },
                    { label: "Victory Stories", href: "/survivors/victory-stories" },
                ],
            },
            {
                name: "Support Programs",
                links: [
                    { label: "Counseling & Mental Health", href: "/survivors/counseling" },
                    { label: "Rehabilitation Programs", href: "/survivors/rehab" },
                ],
            },
            {
                name: "Get Involved",
                links: [
                    { label: "Volunteer", href: "/survivors/volunteer" },
                    { label: "Awareness Campaigns", href: "/survivors/awareness" },
                    { label: "Donate", href: "/donate" },
                ],
            },
        ],
    },
]
export const quickLinks = [
    { label: "Emergency", value: "1066", bg: "bg-teal-50" },
    { label: "Global Helpline", value: "+91 4043441066", bg: "bg-violet-50" },
    { label: "Support", value: "1800-500-1066", bg: "bg-gray-50" },
]
export const testimonialsForMarquee: TestimonialItem[] = [
    {
        type: "written",
        name: "Rahul Patel",
        description:
            "The care I received at Synergy was exceptional. From the moment I walked in, the staff was attentive, kind, and professional. They made sure I was comfortable and informed throughout my treatment. The doctors were knowledgeable and took the time to answer all my questions. I'm genuinely grateful for the support and guidance I received during my recovery. Highly recommend Synergy for anyone seeking quality care.",
        image: "/patients/anita.jpeg",
    },
    {
        type: "video",
        image: "/patients/anita.jpeg",
        videoUrl: "https://www.youtube.com/embed/bMqi1ujAgUc",
    },
    {
        type: "written",
        name: "Priya Singh",
        description:
            "Synergy's team made my recovery journey smoother than I ever expected. Their expertise, professionalism, and genuine compassion gave me the confidence to keep pushing forward. The environment is welcoming, and the staff ensures that each patient receives personalized attention. I felt like I was in the right hands from day one. They truly go above and beyond to make sure you’re not just treated but also cared for.",
        image: "/patients/suresh.jpeg",
    },
    {
        type: "video",
        image: "/patients/anita.jpeg",
        videoUrl: "https://www.youtube.com/embed/bMqi1ujAgUc",
    },
    {
        type: "written",
        name: "Priya Singh",
        description:
            "Synergy's team made my recovery journey smoother than I ever expected. Their expertise, professionalism, and genuine compassion gave me the confidence to keep pushing forward. The environment is welcoming, and the staff ensures that each patient receives personalized attention. I felt like I was in the right hands from day one. They truly go above and beyond to make sure you’re not just treated but also cared for.",
        image: "/patients/suresh.jpeg",
    },
    {
        type: "written",
        name: "Priya Singh",
        description:
            "Synergy's team made my recovery journey smoother than I ever expected. Their expertise, professionalism, and genuine compassion gave me the confidence to keep pushing forward. The environment is welcoming, and the staff ensures that each patient receives personalized attention. I felt like I was in the right hands from day one. They truly go above and beyond to make sure you’re not just treated but also cared for.",
        image: "/patients/suresh.jpeg",
    },
    {
        type: "video",
        image: "/patients/anita.jpeg",
        videoUrl: "https://www.youtube.com/embed/bMqi1ujAgUc",
    },
    {
        type: "written",
        name: "Priya Singh",
        description:
            "Synergy's team made my recovery journey smoother than I ever expected. Their expertise, professionalism, and genuine compassion gave me the confidence to keep pushing forward. The environment is welcoming, and the staff ensures that each patient receives personalized attention. I felt like I was in the right hands from day one. They truly go above and beyond to make sure you’re not just treated but also cared for.",
        image: "/patients/suresh.jpeg",
    },
    {
        type: "video",
        image: "/patients/anita.jpeg",
        videoUrl: "https://www.youtube.com/embed/bMqi1ujAgUc",
    },
    {
        type: "written",
        name: "Priya Singh",
        description:
            "Synergy's team made my recovery journey smoother than I ever expected. Their expertise, professionalism, and genuine compassion gave me the confidence to keep pushing forward. The environment is welcoming, and the staff ensures that each patient receives personalized attention. I felt like I was in the right hands from day one. They truly go above and beyond to make sure you’re not just treated but also cared for.",
        image: "/patients/suresh.jpeg",
    },
    {
        type: "written",
        name: "Priya Singh",
        description:
            "Synergy's team made my recovery journey smoother than I ever expected. Their expertise, professionalism, and genuine compassion gave me the confidence to keep pushing forward. The environment is welcoming, and the staff ensures that each patient receives personalized attention. I felt like I was in the right hands from day one. They truly go above and beyond to make sure you’re not just treated but also cared for.",
        image: "/patients/suresh.jpeg",
    },
    {
        type: "video",
        image: "/patients/anita.jpeg",
        videoUrl: "https://www.youtube.com/embed/bMqi1ujAgUc",
    },
    {
        type: "video",
        image: "/patients/anita.jpeg",
        videoUrl: "https://www.youtube.com/embed/bMqi1ujAgUc",
    },
]
export const faqItems = [
    {
        question: "How can I book an appointment at Synergy Hospital?",
        answer:
            "You can book an appointment online through our website, by calling our helpline, or visiting the hospital in person. Walk-ins may also be available.",
    },
    {
        question: "Can I seek an appointment with a specialist even if I don’t have a referral?",
        answer:
            "Yes, you can directly book appointments with our specialists without needing a local referral.",
    },
    {
        question: "Does Synergy offer second opinions or online consultations?",
        answer:
            "Absolutely. We provide second opinions and online consultations through our digital health platform.",
    },
    {
        question: "What type of information do I need to provide before booking?",
        answer:
            "Basic personal information, medical history, and any prior reports or prescriptions will help us serve you better.",
    },
    {
        question: "Is Synergy Hospital open 24/7 for emergencies?",
        answer:
            "Yes, our Emergency Department operates 24/7 with trained medical staff and necessary infrastructure to handle critical situations.",
    },
    {
        question: "Does the hospital accept insurance or cashless claims?",
        answer:
            "Yes, we have tie-ups with most major insurance providers and offer cashless claim facilities. Please check with our billing desk for details.",
    },
    {
        question: "How do I access my lab test reports or medical records?",
        answer:
            "Patients can access lab reports and medical records via our patient portal or by contacting the hospital's medical records department.",
    },
    {
        question: "Are there accommodation facilities for family members of in-patients?",
        answer:
            "Yes, we have comfortable waiting areas and arrangements for attendant stays. Some patient rooms also allow one family member to stay overnight.",
    },
    {
        question: "Can I reschedule or cancel my appointment?",
        answer:
            "Yes, appointments can be rescheduled or cancelled through our website or by calling our helpdesk. We recommend informing us at least 24 hours in advance.",
    },
    {
        question: "Are there interpreters available for non-local or international patients?",
        answer:
            "Yes, we offer interpretation services for various languages to support both local and international patients.",
    },
    {
        question: "What safety protocols are in place for infection control?",
        answer:
            "We follow strict hygiene protocols, including regular sanitization, PPE usage, and isolated zones for infectious patients to ensure everyone's safety.",
    },
    {
        question: "What specialties and departments are available at Synergy Hospital?",
        answer:
            "We offer a wide range of specialties including Cardiology, Neurology, Orthopedics, Pediatrics, Oncology, Gynecology, and many more.",
    }
]

export const actions: ActionItem[] = [
    {
        icon: "/icons/online-appointment.png",
        label: "Book Appointment",
        onClick: () => { },
        className: "lg:rounded-l-xl lg:rounded-r-none rounded-none border-r-none bg-black/10 backdrop-blur-sm hover:bg-white/40 hover:text-slate-700 border-1 font-bold"
    },
    {
        icon: "/icons/hospital.png",
        label: "Hospitals",
        onClick: () => { },
        className: "rounded-none border-x-none bg-black/10 backdrop-blur-sm hover:bg-white/40 hover:text-slate-700 border-1 font-bold"
    },
    {
        icon: "/icons/phone.png",
        label: "Call Us",
        onClick: () => { },
        className: "rounded-none border-x-none bg-black/10 backdrop-blur-sm hover:bg-white/40 hover:text-slate-700 border-1 font-bold"
    },
    {
        icon: "/icons/search-interface-symbol.png",
        label: "Search",
        onClick: () => { },
        className: "lg:rounded-r-xl lg:rounded-l-none rounded-none border-l-none bg-black/10 backdrop-blur-sm hover:bg-white/40 hover:text-slate-700 border-1 font-bold"
    },
]

export const excellenceItems = [
    {
        question: "01. Quality and Patient Centricity",
        answer: "At SSSHCI, we place patients at the heart of everything we do. Our team works with compassion and professionalism to ensure each patient receives personalized, evidence-based cancer care with dignity and respect."
    },
    {
        question: "02. Multidisciplinary Centres of Excellence",
        answer: "Our hospital houses advanced facilities for surgery, chemotherapy, immunotherapy, palliative care, and diagnostics—all under one roof. A unified approach ensures seamless coordination and holistic treatment planning."
    },
    {
        question: "03. Affordable and Accessible Care",
        answer: "We believe that quality cancer treatment should be accessible to all. Located in Gorakhpur, we serve patients from Eastern Uttar Pradesh, Western Bihar, and Southern Nepal with cost-effective yet advanced medical care."
    },
    {
        question: "04. Compassionate Team and Environment",
        answer: "Driven by our SYNERGY values, our dedicated medical professionals create a peaceful, respectful, and healing environment that supports patients and their families through every step of their journey."
    },
    {
        question: "05. Innovation and Advanced Therapies",
        answer: "SSSHCI integrates the latest in oncology—like targeted therapy, hormonal therapy, and day-care procedures—ensuring our patients benefit from globally recognized treatment protocols and research-backed practices."
    }
]

export const generalQuestions = [
    {
        question: "What services does Synergy Super Speciality Hospital and Cancer Institute provide?",
        answer: "We offer a complete range of oncology services including Surgical, Medical, and Radiation Oncology, along with diagnostics, rehabilitation, pain management, and supportive care."
    },
    {
        question: "Is Synergy Cancer Hospital open 24/7?",
        answer: "Yes, our hospital is operational 24 hours a day, 7 days a week to ensure timely care for patients."
    },
    {
        question: "Do you treat all types of cancers?",
        answer: "Yes, we specialize in treating various forms of cancer including breast, lung, prostate, cervical, colorectal, blood cancers, and more."
    },
    {
        question: "Are walk-in consultations available?",
        answer: "While walk-ins are accepted, we recommend booking an appointment in advance to avoid waiting."
    },
    {
        question: "How do I reach the hospital from the Gorakhpur railway station?",
        answer: "We are located a short drive from Gorakhpur Junction. You can use cab services, autos, or contact us for location assistance."
    },
    {
        question: "Are the doctors certified and experienced in oncology?",
        answer: "Yes, all our oncologists are highly qualified and have advanced training in surgical, medical, and radiation oncology."
    },
    {
        question: "What are the available payment options?",
        answer: "We accept cash, credit/debit cards, UPI payments, and most major health insurance plans."
    },
    {
        question: "Is insurance accepted at your hospital?",
        answer: "Yes, we work with multiple insurance providers. Please bring your insurance documents for smooth processing."
    }
]

export const beforeVisitQuestions = [
    {
        question: "How can I schedule my first appointment?",
        answer: "You can call us directly or use the appointment booking form on our official website."
    },
    {
        question: "What documents should I carry for the first consultation?",
        answer: "Please bring a valid ID proof, referral letter (if any), past medical records, test results, and insurance documents."
    },
    {
        question: "Can I get a second opinion before starting treatment?",
        answer: "Yes, we encourage second opinions to ensure you’re comfortable and confident with your treatment plan."
    },
    {
        question: "How do I prepare for my first consultation?",
        answer: "Be ready with your medical history, a list of current medications, and any specific questions you have for the doctor."
    },
    {
        question: "Is there any cost for the first consultation?",
        answer: "Yes, consultation fees apply but may vary based on the specialist. You can call our helpdesk for the exact pricing."
    },
    {
        question: "Do I need to fast or follow any dietary restrictions before my visit?",
        answer: "Only if you're scheduled for blood tests or scans that require fasting. Our team will inform you in advance."
    },
    {
        question: "Can a family member accompany me to my consultation?",
        answer: "Absolutely. We encourage a family member to join for support and to help remember important details."
    },
    {
        question: "Is parking available on-site?",
        answer: "Yes, we provide ample parking for patients and visitors free of charge."
    }
]

export const duringTreatmentQuestions = [
    {
        question: "What should I expect during chemotherapy?",
        answer: "Our staff will guide you through every step. Sessions may take a few hours and you might experience fatigue, nausea, or hair loss."
    },
    {
        question: "Are side effects from treatment common?",
        answer: "Side effects are common but manageable. Our doctors will provide medications and support to reduce discomfort."
    },
    {
        question: "Can I continue working during my treatment?",
        answer: "Depending on the treatment and your physical condition, many patients continue to work part-time. Discuss with your doctor for personalized advice."
    },
    {
        question: "Will I need to be admitted for treatment?",
        answer: "Some treatments are day-care procedures, while others may require admission. It varies based on your treatment plan."
    },
    {
        question: "Are meals provided during hospital stays?",
        answer: "Yes, we offer dietician-approved meals tailored for patients undergoing cancer treatment."
    },
    {
        question: "What support services are available during treatment?",
        answer: "We offer psychological counseling, nutritional support, pain management, and support groups."
    },
    {
        question: "Can my family visit me during treatment?",
        answer: "Yes, family visits are allowed with some restrictions depending on your condition and COVID-19 protocols."
    },
    {
        question: "Will I have access to a dedicated care coordinator?",
        answer: "Yes, we assign case managers or coordinators to help guide patients through each stage of care."
    }
]

export const afterTreatmentQuestions = [
    {
        question: "How often do I need to follow up after treatment?",
        answer: "Follow-ups typically occur every 3 to 6 months initially and gradually decrease depending on your recovery and condition."
    },
    {
        question: "Are rehabilitation services provided post-treatment?",
        answer: "Yes, we offer physical therapy, occupational therapy, and psychological support to aid in recovery."
    },
    {
        question: "Will I experience long-term side effects?",
        answer: "Some patients may experience fatigue, cognitive changes, or hormonal imbalances. Our team helps monitor and manage them."
    },
    {
        question: "Is lifestyle counseling offered post-treatment?",
        answer: "Yes, we provide dietary advice, exercise routines, and mental wellness support to help you resume a healthy life."
    },
    {
        question: "Can cancer come back after treatment?",
        answer: "There is always a chance of recurrence. That’s why regular follow-ups and scans are crucial to detect any changes early."
    },
    {
        question: "How can I monitor my health after treatment?",
        answer: "Stick to your follow-up schedule, report new symptoms promptly, and maintain a healthy lifestyle."
    },
    {
        question: "Will I need to take medication long-term?",
        answer: "Depending on the cancer type and treatment, you may be prescribed long-term maintenance medications."
    },
    {
        question: "How do I deal with emotional challenges post-treatment?",
        answer: "We offer support groups and one-on-one counseling with psychologists to help patients transition emotionally post-treatment."
    }
]


export const Leaders: LeaderCardProps[] = [
    {
        name: "Dr. Alok Tiwari",
        role: "Surgical Oncologist",
        description:
            "MBBS (Gold Medalist), MS (Gen Surgery), KGMU Lucknow, DNB Superspeciality (Surgical Oncology), ESSO (Breast Oncoplasty), FMAS, FALS (Colorectal), Dip MAS, daVinciXi Certified Robotic Onco Surgeon",
        image: "/leaders/doc-alok-tiwari.webp",
        onDownload: "/leaders/doc-alok-tiwari.webp",
        onReadMore: "/leadership/Dr-Alok-Tiwari"
    },
    {
        name: "Dr. Anjali Jain",
        role: "Director & Head – Gynae Oncology",
        description:
            "Specialist in gynaecologic oncology and minimal invasive gynaecologic surgeries, offering advanced and compassionate care in women's cancer treatment.",
        image: "/leaders/doc-anjali-jain.webp",
        onDownload: '/leaders/doc-anjali-jain.webp',
        onReadMore: '/leadership/Dr-Anjali-Jain'
    },
    {
        name: "Dr. Saurabh Mishra",
        role: "Medical Oncologist & Haemat Oncologist",
        description:
            "Director – Synergy Superspeciality Hospital and Cancer Institute. M.B.B.S. (KGMU), M.D. (Internal Medicine), ECMO, D.N.B. Superspeciality (Medical Oncology).",
        image: "/leaders/doc-saurabh-mishra.webp",
        onDownload: "/leaders/doc-saurabh-mishra.webp",
        onReadMore: "/leadership/Dr-Saurabh-Mishra",
    },
]

export const leaderAlokTiwari: LeaderPageProps = {
    name: "Dr. Alok Tiwari",
    role: "Surgical Oncologist",
    description:
        "Dr. Alok Tiwari is a highly esteemed Surgical Oncologist with a distinguished academic and professional background. He graduated with an MBBS, securing a Gold Medal for his exceptional performance. He further pursued MS in General Surgery from King George's Medical University (KGMU), Lucknow, followed by DNB Superspeciality in Surgical Oncology. Dr. Alok Tiwari has undergone specialized training in Breast Oncoplasty from ESSO and holds certifications in FMAS, FALS (Colorectal), and Dip MAS. Additionally, he is a daVinciXi Certified Robotic Onco Surgeon, reflecting his commitment to embracing advanced surgical technologies. His extensive training and experience have positioned him as a leading authority in the field of oncology, particularly in breast cancer treatments.",
    image: "/leaders/doc-alok-tiwari.webp",
    customFirstHeading: "Introducing Dr. Alok Tiwari: A Leader in Surgical Oncology",
    theirStory: [
        "Dr. Alok Tiwari's journey into the realm of surgical oncology is marked by unwavering dedication and a pursuit of excellence. From his early academic achievements, including a Gold Medal in MBBS, to his comprehensive training at prestigious institutions like KGMU Lucknow, his commitment to mastering the intricacies of surgery is evident. His pursuit of specialized skills in breast oncoplasty and robotic surgery showcases his forward-thinking approach, ensuring patients receive state-of-the-art care. Beyond the operating room, Dr. Alok Tiwari's mentorship and research contributions reflect his holistic commitment to advancing oncology.",
    ],
    customSecondHeading: "Dr. Alok Tiwari's Approach: Merging Technology with Compassion",
    secondImage: "/leaders/doc-alok-tiwari-3.jpg",
    secondSectionDescription: [
        "Dr. Alok Tiwari believes in a patient-centric approach, where each treatment plan is tailored to the individual's specific needs, ensuring the most effective and compassionate care.",
        "His expertise in robotic-assisted surgeries allows for minimally invasive procedures, leading to faster recovery times and improved patient outcomes, all while maintaining a compassionate bedside manner.",
         "His philosophy centers on integrating advanced technology with compassionate care, ensuring each patient receives personalized treatment plans tailored to their unique needs. Dr. Alok Tiwari's vision extends beyond individual patient care, he actively engages in community outreach programs, aiming to raise awareness about early cancer detection and prevention. His leadership in organizing workshops and seminars has educated countless individuals, emphasizing the importance of regular screenings and a proactive approach to health. Through these endeavors, Dr. Alok Tiwari continues to inspire and lead in the fight against cancer."
    ],
    thirdImage: "/leaders/doc-alok-tiwari-2.webp",
    thirdSectionDescription: [
        "Dr. Alok Tiwari has actively participated in numerous research projects, focusing on improving surgical techniques and patient care protocols. His work has been published in several reputable medical journals, contributing to the global body of oncology knowledge.",
        "He regularly attends international oncology conferences, both as a participant and a speaker, sharing his insights and learning about the latest advancements in cancer treatment. This continuous engagement ensures that his patients benefit from the most current and effective therapies available.",
        "His commitment to education extends to mentoring young surgeons, providing guidance and training to the next generation of oncologists, ensuring that the standards of care continue to evolve and improve."
    ],
    fourthSectionDescription: [
        "Dr. Alok Tiwari's leadership extends beyond clinical practice, he has been instrumental in establishing cancer awareness programs, aiming to educate the public about preventive measures and early detection.",
        "His collaborative efforts with multidisciplinary teams ensure that patients receive comprehensive care, addressing not just the physical aspects of cancer treatment but also the emotional and psychological support needed during such challenging times.",
        "Looking ahead, Dr. Alok Tiwari envisions a future where technological advancements in surgery are seamlessly integrated with holistic patient care, setting new benchmarks in the fight against cancer."
    ],
    fifthSectionDescription:
        "Dr. Alok Tiwari, a distinguished Surgical Oncologist, is widely recognized for his exceptional skills and experience in breast cancer treatments. His expertise and compassionate care have positively impacted numerous lives, earning him a reputation as a leading authority in oncology.",
    videoModalForJourney: {
        image: "/mission-horizontal.webp",
        videoUrl: "https://www.youtube.com/embed/4eLwOZi5aH8?si=jN68v1Z9wEIu05B6",
    },
}

export const leaderAnjaliJain: LeaderPageProps = {
    name: "Dr. Anjali Jain",
    role: "Gynecologic Oncologist",
    description:
        "Dr. Anjali Jain is a renowned Gynecologic Oncologist with a profound dedication to women's health. She completed her MBBS with a Gold Medal and pursued MS in General Surgery from KGMU Lucknow. Furthering her expertise, she obtained DNB Superspeciality in Surgical Oncology and specialized training in Breast Oncoplasty from ESSO. Dr. Anjali Jain holds certifications in FMAS, FALS (Colorectal), and Dip MAS, and is a daVinciXi Certified Robotic Onco Surgeon. Her comprehensive training equips her to address complex gynecologic cancers with precision and empathy, ensuring optimal outcomes for her patients.",
    image: "/leaders/doc-anjali-jain.webp",
    customFirstHeading: "Meet Dr. Anjali Jain: Expert in Gynecologic Oncology",
    theirStory: [
        "Dr. Anjali Jain's commitment to women's health led her to specialize in gynecologic oncology, where she combines her surgical expertise with a compassionate approach. Her academic excellence, highlighted by a Gold Medal in MBBS, laid the foundation for her pursuit of advanced training in surgical oncology. Dr. Anjali Jain's dedication to continuous learning is evident in her certifications and specialized training, which she applies to offer personalized care to each patient. Her approach emphasizes not just treatment but also education, empowering women to take charge of their health."
    ],
    customSecondHeading: "Dr. Anjali Jain's Philosophy: Personalized and Compassionate Care",
    secondImage: "/leaders/doc-anjali-jain-2.jpg",
    secondSectionDescription: [
        "Dr. Anjali Jain emphasizes the importance of personalized treatment plans, considering each patient's unique medical history and personal circumstances to ensure the most effective care.",
        "Her compassionate approach involves active listening and emotional support, creating a safe environment where patients feel valued and understood throughout their treatment journey.",
        "Beyond her clinical practice, Dr. Anjali Jain actively engages in research aimed at improving treatment modalities for gynecologic cancers. She collaborates with multidisciplinary teams to enhance patient care protocols and participates in community outreach programs to raise awareness about women's health issues. Her holistic approach addresses both the physical and emotional aspects of cancer care, ensuring that patients receive comprehensive support throughout their journey."
    ],
    thirdImage: "/leaders/doc-anjali-jain-3.webp",
    thirdSectionDescription: [
        "Dr. Anjali Jain's research focuses on developing less invasive surgical techniques and improving postoperative care, aiming to enhance recovery and quality of life for her patients.",
        "She collaborates with international oncology experts and institutions, contributing to global advancements in gynecologic oncology while ensuring her own patients benefit from the latest scientific breakthroughs.",
        "Her training and mentorship programs for young doctors are designed to foster a new generation of compassionate, well-informed, and skilled gynecologic oncologists."
    ],
    fourthSectionDescription: [
        "Dr. Anjali Jain is deeply involved in cancer awareness campaigns focused on early detection and preventive care for women. She frequently organizes workshops and seminars in both urban and rural areas, aiming to bridge the information gap on gynecologic health.",
        "Her collaborative style ensures that each case benefits from multidisciplinary expertise, integrating surgery, chemotherapy, counseling, and rehabilitation for truly holistic care.",
        "She continues to advocate for greater awareness and access to cancer screenings, envisioning a future where every woman receives timely, effective, and empathetic oncology care."
    ],
    fifthSectionDescription:
        "Dr. Anjali Jain stands out as a compassionate Gynecologic Oncologist committed to empowering women through early detection, advanced treatment options, and holistic support. Her expertise and empathetic approach ensure that her patients feel cared for at every step of their cancer journey.",
    videoModalForJourney: {
        image: "/mission-horizontal.webp",
        videoUrl: "https://www.youtube.com/embed/4eLwOZi5aH8?si=jN68v1Z9wEIu05B6",
    },
}

export const leaderSaurabhMishra: LeaderPageProps = {
    name: "Dr. Saurabh Mishra",
    role: "Head & Neck Surgical Oncologist",
    description:
        "Dr. Saurabh Mishra is a highly respected Head & Neck Surgical Oncologist known for his exceptional surgical skills and deep commitment to patient welfare. He earned his MBBS and MS in General Surgery from KGMU, Lucknow, followed by a DNB in Surgical Oncology. His professional credentials also include FMAS, FALS (Colorectal), Dip MAS, and advanced training in Head & Neck surgeries. Dr. Saurabh Mishra’s expertise lies in treating complex cancers involving the oral cavity, thyroid, larynx, and other structures of the head and neck region. His precise surgical techniques and compassionate patient care have earned him widespread recognition in the field of oncology.",
    image: "/leaders/doc-saurabh-mishra.webp",
    customFirstHeading: "Introducing Dr. Saurabh Mishra: Excellence in Head & Neck Oncology",
    theirStory: [
        "Dr. Saurabh Mishra’s journey into the world of head and neck oncology was driven by a personal mission to make a meaningful impact in the lives of cancer patients. After completing his medical education from KGMU Lucknow, his fascination with complex anatomy and reconstructive surgery led him to specialize in head and neck surgical oncology. Over the years, he has developed a deep understanding of the intricate challenges these cancers pose, especially those affecting speech, swallowing, and facial function. His meticulous approach and deep empathy have earned him immense respect from both colleagues and patients alike.",
    ],
    customSecondHeading: "Dr. Saurabh Mishra’s Vision: Precision Surgery with Compassionate Healing",
    secondImage: "/leaders/doc-saurabh-mishra-2.jpg",
    secondSectionDescription: [
        "What truly sets Dr. Saurabh Mishra apart is his relentless pursuit of surgical precision combined with an innate ability to emotionally connect with his patients. He believes that cancer care is not just about treating the disease—it’s about walking hand-in-hand with patients through their most vulnerable moments. His collaborative work with speech therapists and nutritionists ensures that patients recover not only physically but also emotionally and socially. Dr. Saurabh Mishra is a strong advocate for early detection, routinely conducting screening drives and educating communities about head and neck cancer symptoms and risk factors.",
        "Dr. Saurabh Mishra integrates advanced surgical planning with functional and cosmetic preservation, ensuring optimal outcomes in complex head and neck cases.",
        "He prioritizes a patient-first approach, collaborating with multidisciplinary teams to provide comprehensive care that supports not just recovery but complete rehabilitation."
    ],
    thirdImage: "/leaders/doc-saurabh-mishra-3.jpg",
    thirdSectionDescription: [
        "His research interests include minimally invasive approaches for oral and laryngeal cancers, and he has published extensively on surgical techniques and case studies in peer-reviewed journals.",
        "Dr. Saurabh Mishra is also a passionate educator, regularly training young surgeons and conducting skill-development workshops to promote excellence in oncologic surgery.",
        "He remains committed to global knowledge-sharing and often represents India in international oncology summits and surgical forums."
    ],
    fourthSectionDescription: [
        "Dr. Saurabh Mishra’s community engagement includes organizing free camps for early detection of oral and throat cancers, particularly targeting high-risk groups such as tobacco users.",
        "He champions the integration of post-surgical counseling and voice therapy into standard treatment protocols for better long-term outcomes.",
        "His goal is to develop a model of care that not only treats cancer effectively but also helps patients regain their identity, dignity, and quality of life after treatment."
    ],
    fifthSectionDescription:
        "Dr. Saurabh Mishra is a distinguished Head & Neck Surgical Oncologist whose surgical precision, patient empathy, and commitment to long-term wellness make him a trusted name in cancer care. His vision is to restore both function and confidence to every life he touches.",
    videoModalForJourney: {
        image: "/mission-horizontal.webp",
        videoUrl: "https://www.youtube.com/embed/4eLwOZi5aH8?si=jN68v1Z9wEIu05B6",
    },
}

export const pressReleases: PressRelease[] = [
    {
        id: 'ai-diagnostic-center', // Add unique ID for routing
        date: '2024-03-15',
        title: 'Synergy Hospital Launches AI-Driven Diagnostic Center',
        type: 'innovation',
        summary: 'Groundbreaking AI integration revolutionizes patient diagnostics with 95% accuracy',
        link: '/press-releases/ai-diagnostic-center', // Dynamic route
        videoPreview: 'https://www.youtube.com/embed/OgIKy2FK2i0?si=Ij2vY30t01XugGTc',
        downloads: [
            { name: 'Press Kit', url: '/downloads/ai-diagnostic-press-kit.pdf' },
            { name: 'High-Res Images', url: '/downloads/ai-diagnostic-images.zip' }
        ],
        content: `Full article content with HTML formatting...` // Add full content
    },
    {
        id: 'top-cancer-care',
        date: '2024-03-12',
        title: 'Synergy Recognized as Top Hospital for Cancer Care',
        type: 'award',
        summary: 'National healthcare award for excellence in oncology treatment',
        link: '/press-releases/top-cancer-care',
        images: ['/img/award-ceremony.jpg'],
        content: `Full content...`
    }
]

// Support services data with images
export const supportServices = [
    {
        id: 1,
        title: "Pharmacy",
        description: "24/7 pharmacy services providing all prescribed medications with expert pharmaceutical guidance and medication counseling.",
        link: "/pharmacy",
        image: "/images/pharmacy.webp",
    },
    {
        id: 2,
        title: "Blood Bank",
        description: "Fully equipped blood bank with component separation facility ensuring safe blood transfusion services and donor programs.",
        link: "/blood-bank",
        image: "/images/blood-bank.webp",
    },
    {
        id: 3,
        title: "Dietary Services",
        description: "Therapeutic meal planning and nutritional support tailored to patient needs by certified dietitians and nutrition specialists.",
        link: "/dietary-services",
        image: "/images/dietary-services.webp",
    },
    {
        id: 4,
        title: "Laundry Services",
        description: "Hospital-grade linen and personal laundry services with hygienic processing and sterilization standards.",
        link: "/laundry-services",
        image: "/images/laundry-services.webp",
    },
    {
        id: 5,
        title: "Housekeeping",
        description: "Professional cleaning and sanitation services maintaining highest standards of hospital hygiene and infection control.",
        link: "/housekeeping",
        image: "/images/housekeeping.webp",
    },
    {
        id: 6,
        title: "Security Services",
        description: "24/7 campus security with surveillance systems, access control, and emergency response teams for patient safety.",
        link: "/security-services",
        image: "/images/security-services.webp",
    },
    {
        id: 7,
        title: "Ambulance Services",
        description: "Advanced life support ambulances with trained EMT staff for emergency transport and inter-facility transfers.",
        link: "/ambulance-services",
        image: "/images/ambulance-services.webp",
    }
];
