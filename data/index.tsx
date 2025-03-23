import { ActionItem, NavigationMenuStructureProps, TestimonialItem } from "@/types";
import { FaHospital, FaPhone, FaSearch, FaUserMd } from "react-icons/fa";
export const discoverSynergyPages: NavigationMenuStructureProps[] = [
    {
      name: "The Synergy Story",
      links: [
        {label: "Overview", href: "/the-synergy-story#Overview"},
        {label: "Our Vision",  href: "/the-synergy-story#Our-Vision"},
        {label: "Our Mission",  href: "/the-synergy-story#Our-Mission"},
        {label: "Leadership",  href: "/the-synergy-story#Leadership"},
        {label: "Awards and Accolades",  href: "/the-synergy-story#Awards-and-Accolades"},
        {label: "Achievements and Milestones",  href: "/the-synergy-story#Achievements-and-Milestones"},
        {label: "A Day at Synergy",  href: "/the-synergy-story#A-Day-at-Synergy"}
      ]
    },
    {
      name: "Leadership",
      links: [
        {label: "Dr. Alok Tiwari", href: "/leadership/Dr-Alok-Tiwari"},
        {label: "Dr. Anjali Jain", href: "/leadership/Dr-Anjali-Jain"},
        {label: "Dr. Saurabh Mishra", href: "/leadership/Dr-Saurabh-Mishra"},
      ]
    },
    {
      name: "Media Center",
      links: [
        {label: "Synergy in the News", href: "/media-center#synergy-in-the-news"},
        {label: "Press Releases", href: "/media-center#press-releases"},
        {label: "Events", href: "/media-center#events"},
        {label: "Media Gallery", href: "/media-center#media-gallery"},
        {label: "Media Contacts", href: "/media-center#media-contacts"},
      ]
    },
  ]

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
