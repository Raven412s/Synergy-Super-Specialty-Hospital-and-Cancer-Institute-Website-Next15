import { SliderCardProps, TestimonialCardProps } from "@/types";
import { LuRibbon } from "react-icons/lu";
export const slides : SliderCardProps[] = [
    {
      id: 1,
       label: "Cardiac Sciences",
       specialties : [
      "Coronary Angiography",
      "Coronary Artery Bypass Grafting (CABG)",
      "Keyhole Angioplasty",
      "Heart Transplant",
      "Beating Heart Surgery",
      "Heart Valve Surgery",
      "Transcatheter Aortic Valve Replacement (TAVR)",
      "Pacemaker Insertion",
      "OCT Technique Optical Coherence Tomography",
      "Fractional Flow Reserve (FFR)",
    ],
    readMoreLink: "",
    findDoctorLink: "",
    description: "Synergy Super-Specialty Hospital and Cancer Institute is a leader in advanced cardiac care, offering a full spectrum of diagnostic, interventional, and surgical treatments. Our expert cardiologists and cardiac surgeons specialize in procedures such as Coronary Angiography, Bypass Surgery (CABG), Keyhole Angioplasty, Heart Valve Surgery, and Heart Transplantation. With state-of-the-art technology and a patient-centered approach, we ensure precise, effective, and compassionate care for every heart condition.",
    imgSrc: "/cardiac.jpg.webp"
  },
    {
      id: 2,
       label: "Oncology",
       specialties : [
          "Gynec Oncology",
          "Haemato oncology & BMT"
    ],
    readMoreLink: "",
    findDoctorLink: "",
    description: "Synergy Super-Specialty Hospital and Cancer Institute offers cutting-edge oncology care, combining advanced diagnostics, personalized treatment plans, and state-of-the-art technology. Our expert team specializes in Gynec Oncology, Hemato-Oncology, and Bone Marrow Transplantation (BMT), ensuring comprehensive and compassionate cancer care. With a patient-centric approach, we strive to deliver the highest standards of excellence in cancer treatment and survivorship.",
    imgSrc: "/oncology_2.jpg.webp"
  },
    {
      id: 3,
       label: "Neurosciences",
       specialties : [
        "PERIPHERAL NERVE SURGERY",
        "CRANIOTOMY FOR TUMOR REMOVAL",
        "DEEP BRAIN STIMULATION (DBS)",
        "CYBERKNIFE",
        "ROBOTIC NEUROREHABILITATION",
        "EPILEPSY SURGERY",
        "LUMBAR PUNCTURE (SPINAL TAP)",
        "NEUROVASCULAR BYPASS SURGERY",
        "BRAIN ANEURYSM REPAIR",
        "NEURO NAVIGATION"
    ],
    readMoreLink: "",
    findDoctorLink: "",
    description: "Synergy Super-Specialty Hospital and Cancer Institute offers cutting-edge neurological care, providing advanced diagnostics, innovative surgical solutions, and comprehensive neurorehabilitation programs. Our expert team specializes in a wide range of neurological procedures, including Peripheral Nerve Surgery, Craniotomy for Tumor Removal, Deep Brain Stimulation (DBS), and CyberKnife treatments. With state-of-the-art technology and a compassionate approach, we are dedicated to enhancing the quality of life for patients with neurological conditions",
    imgSrc: "/oncology_2.jpg.webp"
  },
  ];



  export const hospitalHighlights: TestimonialCardProps[] = [
    {
      titleNumber: "1,00,000+",
      titleText: "Patients Treated",
      description: "Delivering quality healthcare to over one lakh patients with compassion and expertise.",
      imgSrc: "👩🏻‍⚕️",
      imgAlt: "Patients Treated"
    },
    {
      titleNumber: "12,000+",
      titleText: " Successful Surgeries",
      description: "Performed a wide range of complex surgeries with precision and care.",
      imgSrc: "🪡",
      imgAlt: "Surgeries"
    },
    {
      titleNumber: "25+",
      titleText: " Departments of Excellence",
      description: "Comprehensive super-specialty departments including oncology, cardiology, neurology, and more.",
      imgSrc: "🏥",
      imgAlt: "Departments"
    },
    {
      titleNumber: "8,000+",
      titleText: " Cancer Cases Treated",
      description: "Advanced oncology treatments for all types of cancers with a patient-first approach.",
      imgSrc: <LuRibbon className="stroke-1 stroke-[#c885ee]"/>,
      imgAlt: "Cancer Care"
    },
    {
      titleNumber: "50,000+",
      titleText: " Diagnoses Performed",
      description: "State-of-the-art diagnostic infrastructure enabling early and accurate detection.",
      imgSrc: "🩺",
      imgAlt: "Diagnostics"
    },
    {
      titleNumber: "Countless",
      titleText: " Lives Saved",
      description: "Round-the-clock emergency and critical care ensuring timely intervention and survival.",
      imgSrc: "❤️",
      imgAlt: "Lives Saved"
    }
  ];

  