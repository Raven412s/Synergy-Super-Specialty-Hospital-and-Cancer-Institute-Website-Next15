import { TestimonialCardProps } from "@/types";
import { LuRibbon } from "react-icons/lu";




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
