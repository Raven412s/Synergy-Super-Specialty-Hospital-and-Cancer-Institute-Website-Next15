import { AwarenessCampaigns } from "@/components/Modules/cancer-survivors/get-involved/AwarenessCampaigns";
import { Volunteer } from "@/components/Modules/cancer-survivors/get-involved/Volunteer";
import { PatientTestimonials } from "@/components/Modules/cancer-survivors/stories-of-hope/PatientTestimonials";
import { VictoryStories } from "@/components/Modules/cancer-survivors/stories-of-hope/VictoryStories";
import { VideoMessages } from "@/components/Modules/cancer-survivors/stories-of-hope/VideoMessages";
import { CounselingAndMentalHealth } from "@/components/Modules/cancer-survivors/support-programs/CounselingAndMentalHealth";
import { RehabilationPrograms } from "@/components/Modules/cancer-survivors/support-programs/RehabilationPrograms";
import { SurvivorshipClinics } from "@/components/Modules/cancer-survivors/support-programs/SurvivorshipClinics";
import { Faqs } from "@/components/Modules/health-library/faqs/Faqs";
import { CancerPrevention } from "@/components/Modules/health-library/patient-education/CancerPrevention";
import { DiagnosisAndStaging } from "@/components/Modules/health-library/patient-education/DiagnosisAndStaging";
import { NutritionAndWellness } from "@/components/Modules/health-library/patient-education/NutritionAndWellness";
import { TreatmentOptions } from "@/components/Modules/health-library/patient-education/TreatmentOptions";
import { BloodCancer } from "@/components/Modules/health-library/types-of-cancer/BloodCancer";
import { BreastCancer } from "@/components/Modules/health-library/types-of-cancer/BreastCancer";
import { CervicalCancer } from "@/components/Modules/health-library/types-of-cancer/CervicalCancer";
import { LungCancer } from "@/components/Modules/health-library/types-of-cancer/LungCancer";
import { ProstateCancer } from "@/components/Modules/health-library/types-of-cancer/ProstateCancer";
import {DrAlokTiwari} from "@/components/Modules/discover-synergy/leadership/DrAlokTiwari";
import { DrAnjaliJain } from "@/components/Modules/discover-synergy/leadership/DrAnjaliJain";
import { DrSaurabhMishra } from "@/components/Modules/discover-synergy/leadership/DrSaurabhMishra";
import { EmergencyCare } from "@/components/Modules/patient-care/EmergencyCare";
import { InPatientFacilities } from "@/components/Modules/patient-care/InPatientFacilities";
import { OutPatientClinic } from "@/components/Modules/patient-care/OutPatientClinic";
import { SecondOpinion } from "@/components/Modules/patient-care/SecondOpinion";
import { HematoOncology } from "@/components/Modules/services/our-specialities/HematoOncology";
import {MedicalOncology} from "@/components/Modules/services/our-specialities/MedicalOncology";
import { PalliativeCare } from "@/components/Modules/services/our-specialities/PalliativeCare";
import { RadiationOncology } from "@/components/Modules/services/our-specialities/RadiationOncology";
import { SurgicalOncology } from "@/components/Modules/services/our-specialities/SurgicalOncology";
import { DiagnosticImaging } from "@/components/Modules/services/support-services/DiagnosticImaging";
import { Laboratory } from "@/components/Modules/services/support-services/Laboratory";
import { Pharmacy } from "@/components/Modules/services/support-services/Pharmacy";
import { Physiotherapy } from "@/components/Modules/services/support-services/Physiotherapy";
import { ActionItem, LeaderCardProps, MenuItemProps, TestimonialItem } from "@/types";
import { FaHospital, FaPhone, FaSearch, FaUserMd } from "react-icons/fa";
import Cardiology from "@/components/Modules/services/our-specialities/Cardiology";
import Neurology from "@/components/Modules/services/our-specialities/Neurology";
import Neurosurgery from "@/components/Modules/services/our-specialities/Neurosurgery";
import Nephrology from "@/components/Modules/services/our-specialities/Nephrology";
import Urology from "@/components/Modules/services/our-specialities/Urology";
import Gastroenterology from "@/components/Modules/services/our-specialities/Gastroenterology";
import Hepatology from "@/components/Modules/services/our-specialities/Hepatology";
import Orthopedics from "@/components/Modules/services/our-specialities/Orthopedics";
import Rheumatology from "@/components/Modules/services/our-specialities/Rheumatology";
import Pulmonology from "@/components/Modules/services/our-specialities/Pulmonology";
import Endocrinology from "@/components/Modules/services/our-specialities/Endocrinology";
import Dermatology from "@/components/Modules/services/our-specialities/Dermatology";
import ENT from "@/components/Modules/services/our-specialities/ENT";
import Ophthalmology from "@/components/Modules/services/our-specialities/Ophthalmology";
import GeneralSurgery from "@/components/Modules/services/our-specialities/GeneralSurgery";
import InternalMedicine from "@/components/Modules/services/our-specialities/InternalMedicine";
import Pediatrics from "@/components/Modules/services/our-specialities/Pediatrics";
import Gynecology from "@/components/Modules/services/our-specialities/Gynecology";
import Psychiatry from "@/components/Modules/services/our-specialities/Psychiatry";
import BloodBank from "@/components/Modules/services/support-services/BloodBank";
import Dialysis from "@/components/Modules/services/support-services/Dialysis";
import { Ambulance } from "lucide-react";
import HealthChecks from "@/components/Modules/patient-care/HealthChecks";
import Insurance from "@/components/Modules/patient-care/Insurance";
import { useRouter } from "next/navigation";

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
          name: "doctors",
          links: [
            { label: "Dr. Alok Tiwari", href: "/doctors/Dr-Alok-Tiwari" },
            { label: "Dr. Anjali Jain", href: "/doctors/Dr-Anjali-Jain" },
            { label: "Dr. Saurabh Mishra", href: "/doctors/Dr-Saurabh-Mishra" },
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
          name: "Terms And Privacy Policy",
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
              { label: "Radiation Oncology", href: "/services/radiation-oncology" },
              { label: "Surgical Oncology", href: "/services/surgical-oncology" },
              { label: "Hemato-Oncology", href: "/services/hemato-oncology" },
              { label: "Pain & Palliative Care", href: "/services/palliative-care" },
              { label: "Cardiology", href: "/services/cardiology" },
              { label: "Neurology", href: "/services/neurology" },
              { label: "Neurosurgery", href: "/services/neurosurgery" },
              { label: "Nephrology", href: "/services/nephrology" },
              { label: "Urology", href: "/services/urology" },
              { label: "Gastroenterology", href: "/services/gastroenterology" },
              { label: "Hepatology", href: "/services/hepatology" },
              { label: "Orthopedics", href: "/services/orthopedics" },
              { label: "Rheumatology", href: "/services/rheumatology" },
              { label: "Endocrinology", href: "/services/endocrinology" },
              { label: "Pulmonology", href: "/services/pulmonology" },
              { label: "Dermatology", href: "/services/dermatology" },
              { label: "ENT (Otorhinolaryngology)", href: "/services/ent" },
              { label: "Ophthalmology", href: "/services/ophthalmology" },
              { label: "General Surgery", href: "/services/general-surgery" },
              { label: "Internal Medicine", href: "/services/internal-medicine" },
              { label: "Pediatrics", href: "/services/pediatrics" },
              { label: "Gynecology & Obstetrics", href: "/services/gynecology" },
              { label: "Psychiatry", href: "/services/psychiatry" }
            ]
          },
          {
            name: "Support Services",
            links: [
              { label: "Diagnostic Imaging", href: "/services/diagnostic-imaging" },
              { label: "Laboratory Services", href: "/services/laboratory" },
              { label: "Pharmacy", href: "/services/pharmacy" },
              { label: "Physiotherapy", href: "/services/physiotherapy" },
              { label: "Blood Bank", href: "/services/blood-bank" },
              { label: "Dialysis Unit", href: "/services/dialysis" },
              { label: "Ambulance Services", href: "/services/ambulance" }
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
            { label: "Breast Cancer", href: "/health-library/breast-cancer" },
            { label: "Lung Cancer", href: "/health-library/lung-cancer" },
            { label: "Blood Cancer", href: "/health-library/blood-cancer" },
            { label: "Prostate Cancer", href: "/health-library/prostate-cancer" },
            { label: "Cervical Cancer", href: "/health-library/cervical-cancer" },
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
            { label: "Video Messages", href: "/survivors/videos" },
          ],
        },
        {
          name: "Support Programs",
          links: [
            { label: "Counseling & Mental Health", href: "/survivors/counseling" },
            { label: "Rehabilitation Programs", href: "/survivors/rehab" },
            { label: "Survivorship Clinics", href: "/survivors/clinics" },
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
  ];
export  const quickLinks = [
    { label: "Emergency", value: "1066" },
    { label: "Global Helpline", value: "+91 4043441066" },
    { label: "Support", value: "1800-500-1066" },
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
      image: "/patients/rahul-thumb.jpeg",
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
      image: "/patients/rahul-thumb.jpeg",
      videoUrl: "https://www.youtube.com/embed/bMqi1ujAgUc",
    },
    {
      type: "written",
      name: "Amit Kumar",
      description:
        "I was thoroughly impressed by the expertise and compassion shown by the doctors at Synergy. They understood my condition well and created a treatment plan tailored specifically to my needs. Their patient-first approach and the state-of-the-art facilities made all the difference. Thanks to their dedication, I was able to recover faster than I thought possible. I would strongly recommend Synergy to anyone in need of quality medical care.",
      image: "/patients/anita.jpeg",
    },
    {
      type: "video",
      image: "/patients/rahul-thumb.jpeg",
      videoUrl: "https://www.youtube.com/embed/bMqi1ujAgUc",
    },
    {
      type: "written",
      name: "Sonia Sharma",
      description:
        "The facilities at Synergy are top-notch and extremely well maintained. I was really nervous before starting my treatment, but the warmth of the staff and the comfort of the environment quickly put me at ease. Every step of the way, the doctors and nurses made sure I understood the process and felt supported. I genuinely appreciate their professionalism and kindness. My experience here was truly positive and healing.",
      image: "/patients/suresh.jpeg",
    },
    {
      type: "video",
      image: "/patients/rahul-thumb.jpeg",
      videoUrl: "https://www.youtube.com/embed/bMqi1ujAgUc",
    },
    {
      type: "written",
      name: "Rohan Gupta",
      description:
        "I'm thankful for the personalized care I received at Synergy. The doctors took time to listen and understand my concerns. They explained the treatment plan clearly and kept me informed throughout. The nursing staff was always available and ready to help. Their approach made me feel like more than just a patient. I regained my health with confidence, thanks to the excellent team at Synergy.",
      image: "/patients/anita.jpeg",
    },
    {
      type: "video",
      image: "/patients/rahul-thumb.jpeg",
      videoUrl: "https://www.youtube.com/embed/bMqi1ujAgUc",
    },
    {
      type: "written",
      name: "Nalini Jain",
      description:
        "Synergy's team is extremely supportive, and they made my treatment journey feel much less daunting. Their commitment to patient care is visible in everything they do — from their clear communication to the genuine concern they show for your well-being. I always felt heard and respected during my visits. It's rare to find such a combination of professionalism and empathy in healthcare. I'm truly grateful.",
      image: "/patients/suresh.jpeg",
    },
    {
      type: "video",
      image: "/patients/rahul-thumb.jpeg",
      videoUrl: "https://www.youtube.com/embed/bMqi1ujAgUc",
    },
    {
      type: "written",
      name: "Vikram Singh",
      description:
        "I'm impressed by the cutting-edge technology and treatment methods used at Synergy. What really stood out to me, though, was the personalized care I received. The doctors made sure I was involved in every decision, and the staff ensured I was always comfortable. Every appointment felt like a step forward in my healing journey. It's comforting to know that such advanced care is delivered with such kindness.",
      image: "/patients/anita.jpeg",
    },
    {
      type: "video",
      image: "/patients/rahul-thumb.jpeg",
      videoUrl: "https://www.youtube.com/embed/bMqi1ujAgUc",
    },
    {
      type: "written",
      name: "Preeti Rao",
      description:
        "The doctors at Synergy are incredibly knowledgeable and experienced. From my first consultation to the end of my treatment, I felt like I was in expert hands. They answered every question patiently and made sure I was comfortable throughout the process. The hospital environment is calm, clean, and well-organized. It's rare to find such a perfect blend of medical expertise and human compassion in one place.",
      image: "/patients/suresh.jpeg",
    },
    {
      type: "video",
      image: "/patients/rahul-thumb.jpeg",
      videoUrl: "https://www.youtube.com/embed/bMqi1ujAgUc",
    },
  ];
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
  ];
export const actions: ActionItem[] = [
    { icon: <FaUserMd className="size-6" />, label: "Book Appointment", onClick: ()=>{}, className: "rounded-l-xl rounded-r-none border-r-none bg-black/40 backdrop-blur-sm hover:bg-white/70 hover:text-slate-700 border-1 font-bold " },
    { icon: <FaHospital className="size-6" />, label: "Hospitals", onClick: ()=>{}, className: "rounded-none border-x-none bg-black/40 backdrop-blur-sm hover:bg-white/70 hover:text-slate-700 border-1 font-bold " },
    { icon: <FaPhone className="size-6" />, label: "Call Us", onClick: ()=>{}, className: "rounded-none border-x-none bg-black/40 backdrop-blur-sm hover:bg-white/70 hover:text-slate-700 border-1 font-bold " },
    { icon: <FaSearch className="size-6" />, label: "Search", onClick: ()=>{}, className: "rounded-r-xl rounded-l-none border-l-none bg-black/40 backdrop-blur-sm hover:bg-white/70 hover:text-slate-700 border-1 font-bold " },
  ];

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
  ];

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
  ];

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
  ];

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
  ];

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
  ];


  export const Leaders: LeaderCardProps[] = [
    {
      name: "Dr. Alok Tiwari",
      role: "Surgical Oncologist",
      description:
        "MBBS (Gold Medalist), MS (Gen Surgery), KGMU Lucknow, DNB Superspeciality (Surgical Oncology), ESSO (Breast Oncoplasty), FMAS, FALS (Colorectal), Dip MAS, daVinciXi Certified Robotic Onco Surgeon",
      image: "", 
      onDownload: "",
      onReadMore: "/leadership/Dr-Alok-Tiwari"
    },
    {
      name: "Dr. Anjali Jain",
      role: "Director & Head – Gynae Oncology",
      description:
        "Specialist in gynaecologic oncology and minimal invasive gynaecologic surgeries, offering advanced and compassionate care in women's cancer treatment.",
      image: "/doctors/doc-anjali-jain.png",
      onDownload: '/doctors/doc-anjali-jain.png',
      onReadMore: '/leadership/Dr-Anjali-Jain'
    },
    {
      name: "Dr. Saurabh Mishra",
      role: "Medical Oncologist & Haemat Oncologist",
      description:
        "Director – Synergy Superspeciality Hospital and Cancer Institute. M.B.B.S. (KGMU), M.D. (Internal Medicine), ECMO, D.N.B. Superspeciality (Medical Oncology).",
      image: "/doctors/doc-saurabh-mishra.png", 
      onDownload: "/doctors/doc-saurabh-mishra.png",
      onReadMore: "/leadership/Dr-Saurabh-Mishra",
    },
  ];

// MAPS FOR DYNAMIC PAGES

  export const LeadershipMap = {
    "Dr-Alok-Tiwari": <DrAlokTiwari />,
    "Dr-Anjali-Jain": <DrAnjaliJain />,
    "Dr-Saurabh-Mishra": <DrSaurabhMishra />
  };

  export const DoctorsMap = {
    "Dr-Alok-Tiwari": <DrAlokTiwari />,
    "Dr-Anjali-Jain": <DrAnjaliJain />,
    "Dr-Saurabh-Mishra": <DrSaurabhMishra />
  };

  export const ServicesMap = {
    "medical-oncology": <MedicalOncology />,
    "radiation-oncology": <RadiationOncology />,
    "surgical-oncology": <SurgicalOncology />,
    "hemato-oncology": <HematoOncology />,
    "palliative-care": <PalliativeCare />,
    "cardiology": <Cardiology />,
    "neurology": <Neurology />,
    "neurosurgery": <Neurosurgery />,
    "nephrology": <Nephrology />,
    "urology": <Urology />,
    "gastroenterology": <Gastroenterology />,
    "hepatology": <Hepatology />,
    "orthopedics": <Orthopedics />,
    "rheumatology": <Rheumatology />,
    "endocrinology": <Endocrinology />,
    "pulmonology": <Pulmonology />,
    "dermatology": <Dermatology />,
    "ent": <ENT />,
    "ophthalmology": <Ophthalmology />,
    "general-surgery": <GeneralSurgery />,
    "internal-medicine": <InternalMedicine />,
    "pediatrics": <Pediatrics />,
    "gynecology": <Gynecology />,
    "psychiatry": <Psychiatry />,

    // Support Services
    "diagnostic-imaging": <DiagnosticImaging />,
    laboratory: <Laboratory />,
    pharmacy: <Pharmacy />,
    physiotherapy: <Physiotherapy />,
    "blood-bank": <BloodBank />,
    dialysis: <Dialysis />,
    ambulance: <Ambulance />,
  };

  export const PatientCareMap = {
    emergency: <EmergencyCare />,
    "second-opinion" : <SecondOpinion />,
    "in-patient" : <InPatientFacilities />,
    "out-patient" : <OutPatientClinic />,
    "health-checks" : <HealthChecks />,
    "insurance" : <Insurance />,
  };

  export const HealthLibraryMap = {
    "breast-cancer": <BreastCancer />,
    "prostate-cancer" : <ProstateCancer />,
    "lung-cancer" : <LungCancer />,
    "cervical-cancer" : <CervicalCancer />,
    "blood-cancer" : <BloodCancer />,
    prevention : <CancerPrevention />,
    diagnosis : <DiagnosisAndStaging />,
    treatments : <TreatmentOptions />,
    nutrition : <NutritionAndWellness />,
    faqs: <Faqs/>
  };

  export const CancerSurvivorsMap = {
    testimonials: <PatientTestimonials />,
    "victory-stories" : <VictoryStories />,
    videos : <VideoMessages />,
    counseling : <CounselingAndMentalHealth />,
    rehab : <RehabilationPrograms />,
    clinics : <SurvivorshipClinics />,
    volunteer : <Volunteer />,
    awareness : <AwarenessCampaigns />,
  };
