import { DepartmentData } from "@/types";

export const departmentData: DepartmentData[] = [
    {
      id: 'medical-oncology',
      index: 0,
      name: 'Medical Oncology',
      slug: 'medical-oncology',
      heroImage: '/department/medical-oncology.webp',
      heroTitle: 'Comprehensive Cancer Treatment & Care',
      isFeatured: true,
      heroSubtitle: 'Advanced medical oncology services with personalized treatment plans in Gorakhpur.',

      overview: {
        title: 'Our Medical Oncology Approach',
        description: [
          'At Synergy Super Speciality Hospital & Cancer Institute, our Medical Oncology team provides cutting-edge cancer treatments including chemotherapy, immunotherapy, and targeted therapy. We focus on delivering compassionate, patient-centered care tailored to each individual\'s needs.',
          'Our multidisciplinary team collaborates to develop optimal treatment strategies, ensuring the best possible outcomes for our patients. With state-of-the-art facilities and a commitment to innovation, we bring world-class cancer care to Gorakhpur.'
        ],
        whyChooseUs: [
          'Experienced oncologists with specialized training in the latest cancer treatments',
          'Personalized treatment plans developed through tumor board reviews',
          'Access to cutting-edge therapies and clinical trials',
          'Comprehensive supportive care to manage side effects and improve quality of life'
        ]
      },

      treatments: {
        title: 'Treatment Options & Specialties',
        items: [
          {
            title: 'Chemotherapy',
            description: 'Advanced chemotherapy protocols tailored to your specific cancer type and stage, administered with precision and care.'
          },
          {
            title: 'Immunotherapy',
            description: 'Innovative treatments that harness your immune system to fight cancer, offering new hope for many patients.'
          },
          {
            title: 'Targeted Therapy',
            description: 'Precision medicines designed to attack specific cancer cells while sparing healthy tissue.'
          }
        ]
      },

      stats: {
        title: 'Our Impact in Numbers',
        items: [
          {
            value: '5,000+',
            label: 'Patients Treated Annually'
          },
          {
            value: '98%',
            label: 'Patient Satisfaction Rate'
          },
          {
            value: '50+',
            label: 'Clinical Trials Available'
          },
          {
            value: '24/7',
            label: 'Supportive Care Availability'
          }
        ]
      },

      team: {
        title: 'Meet Our Oncologists',
        members: [
          {
            name: 'Dr. Saurabh Mishra',
            role: 'Medical Oncologist & Haemat Oncologist',
            credentials: 'MBBS (KGMU), MD (internal Medicine) ECMO DNB',
            image: '/doctors/dr-saurabh-mishra.webp',
            specialty: 'Director Synergy Super Speciality Hospital & Cancer Institue'
          }
        ]
      },

      facilities: {
        title: 'Advanced Treatment Facilities',
        description: 'Our center is equipped with the latest technology to provide comprehensive cancer care.',
        features: [
          'Modern chemotherapy infusion suites',
          'Specialized pharmacy for cancer medications',
          'On-site laboratory for rapid testing',
          'Comfortable recovery areas',
          'Dedicated patient education resources'
        ],
        image: '/fallback-image.webp',
      },

      research: {
        title: 'Research & Clinical Trials',
        items: [
          {
            title: 'Novel Therapies',
            content: 'Participating in groundbreaking research to bring new treatment options to our patients.',
            icon: 'flask'
          },
          {
            title: 'Precision Medicine',
            content: 'Research focused on tailoring treatments based on genetic markers and tumor characteristics.',
            icon: 'dna'
          },
          {
            title: 'Quality of Life Studies',
            content: 'Investigating ways to improve patient comfort and outcomes during treatment.',
            icon: 'heart'
          }
        ]
      },

      testimonials: {
        title: 'Patient Experiences',
        items: [
          {
            quote: 'The compassion and expertise of the medical oncology team gave me hope during my toughest days.',
            author: 'Priya K.',
            image: '/fallback-image.webp',
          },
          {
            quote: 'I received personalized care that made all the difference in my cancer journey.',
            author: 'Rahul S.',
            image: '/fallback-image.webp',
          },
        ]
      },

      cta: {
        title: 'Begin Your Personalized Treatment Plan',
        subtitle: 'Schedule a consultation with our medical oncology specialists today.',
        buttons: [
          {
            text: 'Book Appointment',
            isPrimary: true,
          },
          {
            text: 'Learn More',
            isPrimary: false,
          }
        ]
      },
    },

    {
      id: 'surgical-oncology',
      index: 1,
      name: 'Surgical Oncology',
      slug: 'surgical-oncology',
      heroImage: '/department/surgical-oncology.webp',
      heroTitle: 'Expert Surgical Solutions for Cancer Care',
      isFeatured: true,
      heroSubtitle: 'Combining surgical excellence with personalized oncology care in Gorakhpur.',

      overview: {
        title: 'Our Surgical Oncology Approach',
        description: [
          'At Synergy Super Speciality Hospital & Cancer Institute, our Surgical Oncology team is dedicated to providing precise, effective cancer surgeries tailored to each patient\'s needs. We combine advanced surgical techniques with a compassionate, patient-first philosophy to ensure the best possible outcomes.',
          'Since 2005, we have been a trusted leader in surgical cancer care, offering integrated treatment plans developed in collaboration with medical oncologists, radiation specialists, and support teams. Our commitment to innovation and excellence drives us to deliver superior care every step of the way.'
        ],
        whyChooseUs: [
          'Experienced and highly skilled cancer surgeons specialized in complex procedures',
          'Collaborative tumor board ensures personalized surgical treatment plans',
          'Minimally invasive and organ-preserving surgical options available',
          'Comprehensive pre- and post-surgical care with emotional and rehabilitative support'
        ]
      },

      treatments: {
        title: 'Surgical Expertise & Specialties',
        items: [
          {
            title: 'Complex Cancer Surgeries',
            description: 'Expertise in performing intricate oncologic surgeries, including tumor resections in challenging anatomical locations while preserving function and aesthetics.'
          },
          {
            title: 'Minimally Invasive & Laparoscopic Surgery',
            description: 'Advanced laparoscopic and keyhole procedures for faster recovery, less pain, and minimal scarring in select cancer types.'
          },
          {
            title: 'Organ-Preserving Cancer Surgeries',
            description: 'Surgical techniques focused on removing tumors while retaining maximum healthy tissue to maintain organ function and improve quality of life.'
          }
        ]
      },

      stats: {
        title: 'Our Impact in Numbers',
        items: [
          {
            value: '2,500+',
            label: 'Successful Cancer Surgeries Performed'
          },
          {
            value: '20+',
            label: 'Years of Specialized Surgical Experience'
          },
          {
            value: '95%',
            label: 'Post-Surgical Recovery Satisfaction Rate'
          },
          {
            value: '100+',
            label: 'Complex Multispecialty Procedures Annually'
          }
        ]
      },

      team: {
        title: 'Meet Our Specialists',
        members: [
          {
            name: 'Dr. Alok Tiwari',
            role: 'Chief Surgical Oncologist',
            credentials: 'MBBS (Gold Medalist), MS (Gen Surgery) KGMU LucknowDNB, Dip MAS daVinciXi Certified Robotic Onco Surgeon',
            image: '/doctors/dr-alok-tiwari.webp',
            specialty: 'Surgical Oncology, ESSO (Breast Oncoplasty) FMAS, FALS (Colorectal)'
          },
        ]
      },

      facilities: {
        title: 'State-of-the-Art Facilities',
        description: 'Our center is equipped with the latest in medical technology to support both standard care and advanced research.',
        features: [
          'Dedicated infusion suites with comfort-focused design',
          'On-site genomic and pathology labs',
          'Real-time treatment monitoring systems',
          'Private consultation rooms for family discussions',
          'Fully integrated electronic health records'
        ],
        image: '/department/surgical-oncology-facilities.webp',
      },

      research: {
        title: 'Research & Innovation',
        items: [
          {
            title: 'Precision Oncology Trials',
            content: 'We lead Phase I-III clinical trials aimed at targeting the molecular basis of cancer.',
            icon: 'flask'
          },
          {
            title: 'Biobank & Genomics',
            content: 'Our biobank supports large-scale genomic studies and data-driven treatment personalization.',
            icon: 'dna'
          },
          {
            title: 'AI in Cancer Detection',
            content: 'Collaborating with tech partners to utilize artificial intelligence in early diagnosis.',
            icon: 'cpu'
          }
        ]
      },

      testimonials: {
        title: 'What Our Patients Say',
        items: [
          {
            quote: 'The care I received at Synergy Oncology was beyond exceptional. Every doctor and nurse treated me like family.',
            author: 'Sophia M.',
            image: '/fallback-image.webp',
          },
          {
            quote: 'They gave me hope when I had none. I\'m now two years cancer-free and forever grateful.',
            author: 'James R.',
            image: '/fallback-image.webp',
          },
        ]
      },

      cta: {
        title: 'Ready to Begin Your Treatment Journey?',
        subtitle: 'Schedule a consultation today with one of our medical oncology specialists.',
        buttons: [
          {
            text: 'Book an Appointment',
            isPrimary: true,
          },
          {
            text: 'Contact Our Team',
            isPrimary: false,
          }
        ]
      },
    },

    {
      id: 'neurology',
      index: 2,
      name: 'Neurology',
      slug: 'neurology',
      heroImage: '/department/neurology.webp',
      heroTitle: 'Expert Care for Neurological Conditions',
      isFeatured: false,
      heroSubtitle: 'Comprehensive diagnosis and treatment for disorders of the nervous system.',

      overview: {
        title: 'Our Neurological Approach',
        description: [
          'Our Neurology department provides expert care for patients with disorders of the brain, spinal cord, nerves, and muscles. We combine advanced diagnostic techniques with evidence-based treatments to manage complex neurological conditions.',
          'Our team of specialists works collaboratively to develop personalized treatment plans for conditions ranging from migraines to multiple sclerosis, ensuring each patient receives the most appropriate care.'
        ],
        whyChooseUs: [
          'Board-certified neurologists with specialized expertise',
          'Advanced neurodiagnostic testing capabilities',
          'Multidisciplinary approach to complex cases',
          'Comprehensive follow-up and rehabilitation planning'
        ]
      },

      treatments: {
        title: 'Neurological Services',
        items: [
          {
            title: 'Stroke Care',
            description: 'Comprehensive stroke prevention, acute treatment, and rehabilitation services.'
          },
          {
            title: 'Epilepsy Management',
            description: 'Advanced diagnostics and treatment for seizure disorders, including medication management and monitoring.'
          },
          {
            title: 'Movement Disorders',
            description: 'Specialized care for Parkinson\'s disease, tremors, and other movement disorders.'
          }
        ]
      },

      stats: {
        title: 'Neurology By The Numbers',
        items: [
          {
            value: '10,000+',
            label: 'Neurological Evaluations Annually'
          },
          {
            value: '95%',
            label: 'Patient Satisfaction Rate'
          },
          {
            value: '24/7',
            label: 'Acute Stroke Care Availability'
          },
          {
            value: '15+',
            label: 'Specialized Neurological Services'
          }
        ]
      },

      team: {
        title: 'Our Neurology Specialists',
        members: [
          {
            name: 'Dr. Tripurari Pandey',
            role: 'Neurologist',
            credentials: 'M.B.B.S, MCH Neuro Surgeon',
            image: '/doctors/dr-tripurari-pandey.webp',
            specialty: 'Neurological Disorders'
          },
          {
            name: 'Dr. Anurag Singh',
            role: 'Neurologist',
            credentials: 'M.B.B.S, MS, MCH Neuro Surgeon',
            image: '/doctors/dr-anurag-singh.webp',
            specialty: 'Neurological Surgery'
          }
        ]
      },

      facilities: {
        title: 'Neurology Facilities',
        description: 'Our neurology department features advanced diagnostic and treatment technologies.',
        features: [
          'State-of-the-art EEG and EMG equipment',
          'Advanced neuroimaging capabilities',
          'Dedicated stroke unit',
          'Specialized neurophysiology lab',
          'Comfortable infusion center for neurological treatments'
        ],
        image: '/fallback-image.webp',
      },

      research: {
        title: 'Neurology Research',
        items: [
          {
            title: 'Stroke Recovery',
            content: 'Investigating new approaches to enhance recovery after stroke.',
            icon: 'brain'
          },
          {
            title: 'Neurodegenerative Diseases',
            content: 'Research into novel treatments for Alzheimer\'s and Parkinson\'s diseases.',
            icon: 'microscope'
          },
          {
            title: 'Headache Therapies',
            content: 'Developing more effective treatments for chronic migraine and headache disorders.',
            icon: 'head-side-virus'
          }
        ]
      },

      testimonials: {
        title: 'Patient Stories',
        items: [
          {
            quote: 'The neurology team accurately diagnosed my condition after years of uncertainty.',
            author: 'Anita R.',
            image: '/fallback-image.webp',
          },
          {
            quote: 'Their compassionate care made all the difference in my recovery from stroke.',
            author: 'Vikram S.',
            image: '/fallback-image.webp',
          },
        ]
      },

      cta: {
        title: 'Schedule Your Neurological Consultation',
        subtitle: 'Contact us to book an appointment with our neurology specialists.',
        buttons: [
          {
            text: 'Book Now',
            isPrimary: true,
          },
          {
            text: 'Learn More',
            isPrimary: false,
          }
        ]
      },
    },

    {
      id: 'neurosurgery',
      index: 3,
      name: 'Neurosurgery',
      slug: 'neurosurgery',
      heroImage: '/department/neurosurgery.webp',
      heroTitle: 'Advanced Surgical Care for Brain and Spine',
      isFeatured: false,
      heroSubtitle: 'Precision neurosurgical interventions for complex neurological conditions.',

      overview: {
        title: 'Our Neurosurgical Approach',
        description: [
          'The Neurosurgery department at Synergy Hospital provides comprehensive surgical care for disorders of the brain, spine, and peripheral nerves. Our team utilizes minimally invasive techniques and advanced technology to achieve optimal outcomes.',
          'We specialize in treating complex conditions including brain tumors, spinal disorders, cerebrovascular diseases, and traumatic injuries, offering both surgical and non-surgical management options.'
        ],
        whyChooseUs: [
          'Highly skilled neurosurgeons with specialized training',
          'Advanced intraoperative imaging and navigation systems',
          'Multidisciplinary approach to complex cases',
          'Comprehensive post-operative rehabilitation programs'
        ]
      },

      treatments: {
        title: 'Neurosurgical Services',
        items: [
          {
            title: 'Brain Tumor Surgery',
            description: 'Advanced surgical techniques for benign and malignant brain tumors, including awake craniotomies.'
          },
          {
            title: 'Spinal Surgery',
            description: 'Minimally invasive and complex spinal procedures for degenerative conditions, trauma, and deformities.'
          },
          {
            title: 'Cerebrovascular Surgery',
            description: 'Surgical treatment for aneurysms, AVMs, and other vascular disorders of the brain.'
          }
        ]
      },

      stats: {
        title: 'Our Neurosurgical Outcomes',
        items: [
          {
            value: '500+',
            label: 'Complex Brain Surgeries Annually'
          },
          {
            value: '90%',
            label: 'Successful Tumor Resection Rate'
          },
          {
            value: '24/7',
            label: 'Trauma Neurosurgery Availability'
          },
          {
            value: '30%',
            label: 'Minimally Invasive Procedures'
          }
        ]
      },

      team: {
        title: 'Our Neurosurgical Team',
        members: [
          {
            name: 'Dr. Tripurari Pandey',
            role: 'Neurosurgeon',
            credentials: 'M.B.B.S, MCH Neuro Surgeon',
            image: '/doctors/dr-tripurari-pandey.webp',
            specialty: 'Brain and Spine Surgery'
          },
          {
            name: 'Dr. Anurag Singh',
            role: 'Neurosurgeon',
            credentials: 'M.B.B.S, MS, MCH Neuro Surgeon',
            image: '/doctors/dr-anurag-singh.webp',
            specialty: 'Complex Spinal Procedures'
          }
        ]
      },

      facilities: {
        title: 'Neurosurgical Facilities',
        description: 'Our neurosurgery suite features the latest technology for precision interventions.',
        features: [
          'Advanced intraoperative MRI and CT',
          'Neuronavigation systems',
          'Intraoperative neurophysiological monitoring',
          'Dedicated neuro ICU',
          'Minimally invasive spinal surgery equipment'
        ],
        image: '/fallback-image.webp',
      },

      research: {
        title: 'Neurosurgical Innovation',
        items: [
          {
            title: 'Skull Base Techniques',
            content: 'Developing less invasive approaches to complex skull base tumors.',
            icon: 'skull'
          },
          {
            title: 'Spinal Biomechanics',
            content: 'Research into improved stabilization techniques for spinal disorders.',
            icon: 'spine'
          },
          {
            title: 'Neuroprotection',
            content: 'Investigating methods to protect neural tissue during surgery.',
            icon: 'shield-alt'
          }
        ]
      },

      testimonials: {
        title: 'Patient Experiences',
        items: [
          {
            quote: 'The neurosurgeons gave me back my quality of life after years of spinal problems.',
            author: 'Rajesh K.',
            image: '/fallback-image.webp',
          },
          {
            quote: 'Their skill and care during my brain tumor surgery were extraordinary.',
            author: 'Meena P.',
            image: '/fallback-image.webp',
          },
        ]
      },

      cta: {
        title: 'Consult Our Neurosurgical Team',
        subtitle: 'Contact us to discuss your surgical options.',
        buttons: [
          {
            text: 'Request Consultation',
            isPrimary: true,
          },
          {
            text: 'Learn About Procedures',
            isPrimary: false,
          }
        ]
      },
    },

    {
      id: 'gastroenterology',
      index: 4,
      name: 'Gastroenterology',
      slug: 'gastroenterology',
      heroImage: '/department/gastroenterology.webp',
      heroTitle: 'Comprehensive Digestive Health Care',
      isFeatured: false,
      heroSubtitle: 'Expert diagnosis and treatment for gastrointestinal and liver disorders.',

      overview: {
        title: 'Our Gastroenterology Services',
        description: [
          'The Gastroenterology department provides complete care for disorders of the digestive system, including the esophagus, stomach, intestines, liver, pancreas, and gallbladder. Our specialists utilize advanced endoscopic techniques for both diagnosis and treatment.',
          'We offer personalized care plans for conditions ranging from acid reflux to inflammatory bowel disease, with a focus on both medical management and preventive care.'
        ],
        whyChooseUs: [
          'Board-certified gastroenterologists with specialized training',
          'Advanced endoscopic procedures including ERCP and EUS',
          'Comprehensive liver disease management',
          'Multidisciplinary approach to complex digestive disorders'
        ]
      },

      treatments: {
        title: 'Gastroenterology Treatments',
        items: [
          {
            title: 'Endoscopic Procedures',
            description: 'Diagnostic and therapeutic upper and lower endoscopy, including polyp removal and stent placement.'
          },
          {
            title: 'Liver Disease Management',
            description: 'Comprehensive care for hepatitis, cirrhosis, and other liver conditions, including transplant evaluation.'
          },
          {
            title: 'IBD Center',
            description: 'Specialized care for Crohn\'s disease and ulcerative colitis with the latest medical therapies.'
          }
        ]
      },

      stats: {
        title: 'Gastroenterology By The Numbers',
        items: [
          {
            value: '5,000+',
            label: 'Endoscopic Procedures Annually'
          },
          {
            value: '98%',
            label: 'Polyp Detection Rate'
          },
          {
            value: '24/7',
            label: 'Emergency GI Bleed Coverage'
          },
          {
            value: '10+',
            label: 'Specialized GI Clinics'
          }
        ]
      },

      team: {
        title: 'Our Gastroenterology Team',
        members: [
          {
            name: 'Dr. Upendra Gupta',
            role: 'Gastroenterologist',
            credentials: 'M.B.B.S , MD, DM-(GASTROENTEROLOGY)',
            image: '/doctors/dr-upendra-gupta.webp',
            specialty: 'Advanced Endoscopy'
          }
        ]
      },

      facilities: {
        title: 'Endoscopy Center',
        description: 'Our state-of-the-art endoscopy suite features the latest technology for patient comfort and safety.',
        features: [
          'High-definition endoscopy systems',
          'ERCP capability for biliary and pancreatic disorders',
          'Endoscopic ultrasound (EUS)',
          'Capsule endoscopy for small bowel evaluation',
          'Comfortable recovery area'
        ],
        image: '/fallback-image.webp',
      },

      research: {
        title: 'GI Research',
        items: [
          {
            title: 'Microbiome Studies',
            content: 'Investigating the role of gut bacteria in digestive health and disease.',
            icon: 'bacteria'
          },
          {
            title: 'Advanced Endoscopy',
            content: 'Developing new techniques for minimally invasive treatment of complex GI disorders.',
            icon: 'endoscope'
          },
          {
            title: 'IBD Therapies',
            content: 'Clinical trials of new medications for inflammatory bowel diseases.',
            icon: 'prescription-bottle-alt'
          }
        ]
      },

      testimonials: {
        title: 'Patient Stories',
        items: [
          {
            quote: 'The gastroenterology team diagnosed my condition quickly and treated me with great care.',
            author: 'Sunil M.',
            image: '/fallback-image.webp',
          },
          {
            quote: 'My colonoscopy was comfortable and professional - I highly recommend their services.',
            author: 'Geeta R.',
            image: '/fallback-image.webp',
          },
        ]
      },

      cta: {
        title: 'Schedule Your GI Consultation',
        subtitle: 'Contact us to book an appointment or procedure.',
        buttons: [
          {
            text: 'Book Appointment',
            isPrimary: true,
          },
          {
            text: 'Learn About Procedures',
            isPrimary: false,
          }
        ]
      },
    },

    {
      id: 'nephrology',
      index: 5,
      name: 'Nephrology',
      slug: 'nephrology',
      heroImage: '/fallback-image.webp',
      heroTitle: 'Comprehensive Kidney Care',
      isFeatured: false,
      heroSubtitle: 'Expert diagnosis and treatment for kidney diseases and hypertension.',

      overview: {
        title: 'Our Nephrology Approach',
        description: [
          'The Nephrology department provides comprehensive care for patients with kidney disorders, including chronic kidney disease, acute kidney injury, hypertension, and electrolyte imbalances. We offer both medical management and dialysis services.',
          'Our team works closely with patients to slow disease progression, manage complications, and provide renal replacement therapies when needed, with a focus on quality of life and patient education.'
        ],
        whyChooseUs: [
          'Board-certified nephrologists with specialized training',
          'Comprehensive dialysis services',
          'Multidisciplinary approach to complex kidney disorders',
          'Chronic disease management programs'
        ]
      },

      treatments: {
        title: 'Nephrology Services',
        items: [
          {
            title: 'Dialysis Care',
            description: 'In-center hemodialysis, peritoneal dialysis, and home dialysis training programs.'
          },
          {
            title: 'Hypertension Management',
            description: 'Specialized care for difficult-to-control high blood pressure and its complications.'
          },
          {
            title: 'Chronic Kidney Disease',
            description: 'Comprehensive management to slow progression and manage complications of CKD.'
          }
        ]
      },

      stats: {
        title: 'Nephrology By The Numbers',
        items: [
          {
            value: '1,200+',
            label: 'Dialysis Treatments Monthly'
          },
          {
            value: '90%',
            label: 'Patient Satisfaction Rate'
          },
          {
            value: '15+',
            label: 'Years of Nephrology Experience'
          },
          {
            value: '24/7',
            label: 'Acute Dialysis Availability'
          }
        ]
      },

      team: {
        title: 'Our Nephrology Team',
        members: [
          {
            name: 'Dr. Anindya Biswas',
            role: 'Nephrologist',
            credentials: 'MBBS, DNB,DrNB(NEFROLOGY)',
            image: '/doctors/dr-anindya-biswas.webp',
            specialty: 'Chronic Kidney Disease Management'
          }
        ]
      },

      facilities: {
        title: 'Dialysis Center',
        description: 'Our modern dialysis unit provides comfortable, high-quality care for patients with kidney failure.',
        features: [
          'State-of-the-art hemodialysis machines',
          'Comfortable dialysis chairs with entertainment options',
          'Specialized water treatment system',
          'Dedicated infection control protocols',
          'Private consultation rooms'
        ],
        image: '/fallback-image.webp',
      },

      research: {
        title: 'Kidney Research',
        items: [
          {
            title: 'CKD Progression',
            content: 'Investigating factors that influence the progression of chronic kidney disease.',
            icon: 'kidneys'
          },
          {
            title: 'Dialysis Innovations',
            content: 'Research into improving outcomes and quality of life for dialysis patients.',
            icon: 'clinic-medical'
          },
          {
            title: 'Hypertension Studies',
            content: 'Clinical trials of new approaches to managing resistant hypertension.',
            icon: 'heartbeat'
          }
        ]
      },

      testimonials: {
        title: 'Patient Experiences',
        items: [
          {
            quote: 'The nephrology team has taken excellent care of me through my kidney disease journey.',
            author: 'Arun S.',
            image: '/fallback-image.webp',
          },
          {
            quote: 'They made dialysis much less intimidating and always treat me with respect.',
            author: 'Lata M.',
            image: '/fallback-image.webp',
          },
        ]
      },

      cta: {
        title: 'Schedule Your Nephrology Consultation',
        subtitle: 'Contact us to discuss your kidney health needs.',
        buttons: [
          {
            text: 'Book Appointment',
            isPrimary: true,
          },
          {
            text: 'Learn About Services',
            isPrimary: false,
          }
        ]
      },
    },

    {
      id: 'urology',
      index: 6,
      name: 'Urology',
      slug: 'urology',
      heroImage: '/fallback-image.webp',
      heroTitle: 'Comprehensive Urological Care',
      isFeatured: false,
      heroSubtitle: 'Advanced diagnosis and treatment for urinary tract and male reproductive system disorders.',

      overview: {
        title: 'Our Urology Services',
        description: [
          'The Urology department provides complete care for disorders of the urinary tract in both men and women, as well as male reproductive health. Our specialists utilize both medical and surgical approaches to treat conditions ranging from kidney stones to prostate cancer.',
          'We offer minimally invasive and robotic-assisted surgical techniques when appropriate, with a focus on patient-centered care and optimal outcomes.'
        ],
        whyChooseUs: [
          'Board-certified urologists with specialized training',
          'Advanced minimally invasive and robotic surgical techniques',
          'Comprehensive prostate health services',
          'Multidisciplinary approach to complex urologic cancers'
        ]
      },

      treatments: {
        title: 'Urological Treatments',
        items: [
          {
            title: 'Kidney Stone Management',
            description: 'Medical expulsive therapy, lithotripsy, and minimally invasive stone removal procedures.'
          },
          {
            title: 'Prostate Care',
            description: 'Comprehensive services for BPH, prostatitis, and prostate cancer screening and treatment.'
          },
          {
            title: 'Urologic Oncology',
            description: 'Specialized care for cancers of the bladder, kidney, prostate, and testicles.'
          }
        ]
      },

      stats: {
        title: 'Urology By The Numbers',
        items: [
          {
            value: '1,000+',
            label: 'Surgical Procedures Annually'
          },
          {
            value: '95%',
            label: 'Stone-Free Rate After Treatment'
          },
          {
            value: '50+',
            label: 'Robotic Surgeries Performed Yearly'
          },
          {
            value: '24/7',
            label: 'Emergency Urology Coverage'
          }
        ]
      },

      team: {
        title: 'Our Urology Team',
        members: [
          {
            name: 'Dr. Rohit Kumar Singh',
            role: 'Urologist',
            credentials: 'M.B.B.S, M.S, Mch. Urology, Davinci certified Robotic Uro Surgeon',
            image: '/doctors/dr-rohit-kumar-singh.webp',
            specialty: 'Robotic Urologic Surgery'
          },
          {
            name: 'Dr. Vishrut Bharti',
            role: 'Urologist',
            credentials: 'M.B.B.S M.S (General Surgery) MCH (Urologist) Gold Medalist',
            image: '/doctors/dr-vishrut-bharti.webp',
            specialty: 'Endourology and Stone Disease'
          }
        ]
      },

      facilities: {
        title: 'Urology Center',
        description: 'Our urology department features advanced diagnostic and treatment technologies.',
        features: [
          'Digital urodynamics equipment',
          'Flexible and rigid ureteroscopy capabilities',
          'Da Vinci robotic surgical system',
          'Shock wave lithotripsy unit',
          'Comfortable cystoscopy suite'
        ],
        image: '/fallback-image.webp',
      },

      research: {
        title: 'Urology Research',
        items: [
          {
            title: 'Stone Prevention',
            content: 'Investigating dietary and medical approaches to prevent recurrent kidney stones.',
            icon: 'stone'
          },
          {
            title: 'Robotic Techniques',
            content: 'Developing improved robotic surgical approaches for urologic cancers.',
            icon: 'robot'
          },
          {
            title: 'BPH Therapies',
            content: 'Clinical trials of new minimally invasive treatments for enlarged prostate.',
            icon: 'prostate'
          }
        ]
      },

      testimonials: {
        title: 'Patient Stories',
        items: [
          {
            quote: 'The urology team made my kidney stone treatment virtually painless and very effective.',
            author: 'Sanjay P.',
            image: '/fallback-image.webp',
          },
          {
            quote: 'Their expertise in robotic prostate surgery gave me confidence in my treatment choice.',
            author: 'Mohan D.',
            image: '/fallback-image.webp',
          },
        ]
      },

      cta: {
        title: 'Schedule Your Urology Consultation',
        subtitle: 'Contact us to discuss your urological health needs.',
        buttons: [
          {
            text: 'Book Appointment',
            isPrimary: true,
          },
          {
            text: 'Learn About Services',
            isPrimary: false,
          }
        ]
      },
    },

    {
      id: 'orthopedics',
      index: 7,
      name: 'Orthopedics',
      slug: 'orthopedics',
      heroImage: '/fallback-image.webp',
      heroTitle: 'Comprehensive Musculoskeletal Care',
      isFeatured: false,
      heroSubtitle: 'Expert diagnosis and treatment for bone, joint, and muscle disorders.',

      overview: {
        title: 'Our Orthopedic Approach',
        description: [
          'The Orthopedics department provides complete care for musculoskeletal conditions, including arthritis, sports injuries, fractures, and spinal disorders. Our specialists utilize both surgical and non-surgical approaches to restore function and relieve pain.',
          'We offer specialized clinics for joint replacement, sports medicine, hand surgery, and spine care, with a focus on personalized treatment plans and rehabilitation.'
        ],
        whyChooseUs: [
          'Board-certified orthopedic surgeons with subspecialty training',
          'Advanced joint replacement and arthroscopic techniques',
          'Multidisciplinary approach to complex musculoskeletal problems',
          'Comprehensive rehabilitation services'
        ]
      },

      treatments: {
        title: 'Orthopedic Services',
        items: [
          {
            title: 'Joint Replacement',
            description: 'Hip, knee, and shoulder replacement surgery using advanced techniques and implants.'
          },
          {
            title: 'Sports Medicine',
            description: 'Treatment for athletic injuries, including arthroscopic surgery and rehabilitation.'
          },
          {
            title: 'Spine Care',
            description: 'Surgical and non-surgical management of back and neck disorders.'
          }
        ]
      },

      stats: {
        title: 'Orthopedics By The Numbers',
        items: [
          {
            value: '500+',
            label: 'Joint Replacements Annually'
          },
          {
            value: '95%',
            label: 'Patient Satisfaction Rate'
          },
          {
            value: '20+',
            label: 'Years of Orthopedic Experience'
          },
          {
            value: '24/7',
            label: 'Fracture Care Availability'
          }
        ]
      },

      team: {
        title: 'Our Orthopedic Team',
        members: [
          {
            name: 'Dr. Prateek',
            role: 'Orthopedic Surgeon',
            credentials: 'M.B.B.S. MS ORTHO,FIJR,FAGE orthopedic trauma Jioint Replacement,Spine Specialist Surgeon & Sports Injury Surgeon',
            image: '/doctors/dr-prateek.webp',
            specialty: 'Joint Replacement and Sports Medicine'
          },
          {
            name: 'Dr. Anil Srivastava',
            role: 'Orthopedic Surgeon',
            credentials: 'M.B.B.S. MS ORTHO',
            image: '/doctors/dr-anil-srivastava.webp',
            specialty: 'Trauma and General Orthopedics'
          }
        ]
      },

      facilities: {
        title: 'Orthopedic Center',
        description: 'Our orthopedic facility features advanced technology for diagnosis, treatment, and rehabilitation.',
        features: [
          'Digital radiography and advanced imaging',
          'Modern operating rooms with specialized equipment',
          'Dedicated joint replacement unit',
          'Physical therapy and rehabilitation center',
          'On-site orthotics and bracing'
        ],
        image: '/fallback-image.webp',
      },

      research: {
        title: 'Orthopedic Research',
        items: [
          {
            title: 'Implant Longevity',
            content: 'Studying factors that influence the longevity of joint replacements.',
            icon: 'bone'
          },
          {
            title: 'Regenerative Medicine',
            content: 'Investigating stem cell and PRP therapies for musculoskeletal injuries.',
            icon: 'dna'
          },
          {
            title: 'Minimally Invasive Techniques',
            content: 'Developing less invasive surgical approaches with faster recovery.',
            icon: 'scalpel-path'
          }
        ]
      },

      testimonials: {
        title: 'Patient Experiences',
        items: [
          {
            quote: 'My knee replacement went smoothly and I was walking the same day - amazing care!',
            author: 'Rekha M.',
            image: '/fallback-image.webp',
          },
          {
            quote: 'The sports medicine team got me back to playing cricket after my shoulder injury.',
            author: 'Vivek S.',
            image: '/fallback-image.webp',
          },
        ]
      },

      cta: {
        title: 'Schedule Your Orthopedic Consultation',
        subtitle: 'Contact us to discuss your bone and joint health needs.',
        buttons: [
          {
            text: 'Book Appointment',
            isPrimary: true,
          },
          {
            text: 'Learn About Services',
            isPrimary: false,
          }
        ]
      },
    },

    {
        id: 'anesthesia',
        index: 8,
        name: 'Anesthesia',
        slug: 'anesthesia',
        heroImage: '/fallback-image.webp',
        heroTitle: 'Expert Anesthesia Care for Safe Procedures',
        heroSubtitle: 'Providing advanced anesthesia solutions with patient safety as our top priority in Gorakhpur.',
        isFeatured: true,

        overview: {
          title: 'Our Anesthesia Approach',
          description: [
            'At Synergy Super Speciality Hospital, our Anesthesia department provides comprehensive perioperative care using the latest techniques and monitoring technology. Our team ensures patient comfort and safety during surgical procedures.',
            'With specialized training in various anesthesia subspecialties, our experts tailor anesthesia plans to each patient\'s medical needs, minimizing risks and optimizing recovery.'
          ],
          whyChooseUs: [
            'Board-certified anesthesiologists with subspecialty expertise',
            'Advanced monitoring and pain management techniques',
            'Pediatric and geriatric anesthesia specialists',
            'Comprehensive pre-anesthesia evaluation and post-op care'
          ]
        },

        treatments: {
          title: 'Anesthesia Services',
          items: [
            {
              title: 'General Anesthesia',
              description: 'Safe administration of anesthesia for patients undergoing major surgical procedures with advanced monitoring.'
            },
            {
              title: 'Regional Anesthesia',
              description: 'Expertise in spinal, epidural and nerve block techniques for targeted pain relief and faster recovery.'
            },
            {
              title: 'Pain Management',
              description: 'Multimodal approaches to acute and chronic pain management during and after procedures.'
            }
          ]
        },

        stats: {
          title: 'Our Anesthesia Expertise',
          items: [
            {
              value: '10,000+',
              label: 'Safe Anesthesia Procedures Performed'
            },
            {
              value: '24/7',
              label: 'Anesthesia Coverage Availability'
            },
            {
              value: '99%',
              label: 'Patient Satisfaction Rate'
            },
            {
              value: '5',
              label: 'Specialized Anesthesia Techniques Offered'
            }
          ]
        },

        team: {
          title: 'Meet Our Anesthesiologists',
          members: [
            {
              name: 'Dr. Harshit Mishra',
              role: 'Anesthesiologist',
              credentials: 'M.B.B.S MD,PDAF(Neuroanesthesia),Ex Seniorfellow Resident SGPGI LKO',
              image: '/doctors/dr-harshit-mishra.webp',
              specialty: 'Neuroanesthesia'
            },
            {
              name: 'Dr. Amritansh Pandey',
              role: 'Anesthesiologist',
              credentials: 'M.B.B.S, MD-Anesthesia',
              image: '/doctors/dr-amritansh-pandey.webp',
              specialty: 'General Anesthesia'
            }
          ]
        },

        facilities: {
          title: 'Advanced Anesthesia Facilities',
          description: 'Our department is equipped with cutting-edge technology to ensure safe anesthesia delivery and monitoring.',
          features: [
            'State-of-the-art anesthesia machines with advanced ventilation modes',
            'Comprehensive hemodynamic monitoring systems',
            'Dedicated post-anesthesia care unit (PACU)',
            'Advanced pain management equipment',
            'Emergency airway management resources'
          ],
          image: '/fallback-image.webp'
        },

        research: {
          title: 'Research & Innovation',
          items: [
            {
              title: 'Enhanced Recovery Protocols',
              content: 'Developing optimized anesthesia protocols for faster postoperative recovery.',
              icon: 'flask'
            },
            {
              title: 'Pain Management Studies',
              content: 'Researching novel approaches to perioperative pain control.',
              icon: 'dna'
            },
            {
              title: 'Safety Monitoring Systems',
              content: 'Implementing AI-assisted monitoring for anesthesia safety.',
              icon: 'cpu'
            }
          ]
        },

        testimonials: {
          title: 'Patient Experiences',
          items: [
            {
              quote: 'The anesthesia team made me feel completely at ease before my surgery. I woke up comfortable with excellent pain control.',
              author: 'Rajesh K.',
              image: '/fallback-image.webp'
            },
            {
              quote: 'Their expertise in regional anesthesia helped me recover quickly with minimal pain after my procedure.',
              author: 'Priya M.',
              image: '/fallback-image.webp'
            }
          ]
        },

        cta: {
          title: 'Have Questions About Anesthesia?',
          subtitle: 'Our anesthesia specialists are available to discuss your upcoming procedure.',
          buttons: [
            {
              text: 'Consult Our Team',
              isPrimary: true
            },
            {
              text: 'Learn More',
              isPrimary: false
            }
          ]
        }
      },

      {
        id: 'general-surgery',
        index: 9,
        name: 'General Surgery',
        slug: 'general-surgery',
        heroImage: '/fallback-image.webp',
        heroTitle: 'Comprehensive Surgical Care for All Needs',
        heroSubtitle: 'Expert surgical solutions with compassionate care in Gorakhpur.',
        isFeatured: true,

        overview: {
          title: 'Our Surgical Services',
          description: [
            'The General Surgery department at Synergy Super Speciality Hospital provides a full spectrum of surgical care using both traditional and minimally invasive techniques.',
            'Our experienced surgeons perform procedures ranging from routine appendectomies to complex abdominal surgeries, always prioritizing patient safety and optimal outcomes.'
          ],
          whyChooseUs: [
            'Experienced surgeons with specialized training',
            'Minimally invasive laparoscopic options',
            'Comprehensive pre- and post-operative care',
            'Multidisciplinary approach to complex cases'
          ]
        },

        treatments: {
          title: 'Surgical Procedures',
          items: [
            {
              title: 'Laparoscopic Surgery',
              description: 'Minimally invasive procedures for gallbladder, appendix, hernia and other abdominal conditions.'
            },
            {
              title: 'Gastrointestinal Surgery',
              description: 'Expert management of conditions affecting the stomach, intestines, colon and rectum.'
            },
            {
              title: 'Hernia Repair',
              description: 'Advanced techniques for inguinal, umbilical and ventral hernia repairs.'
            }
          ]
        },

        stats: {
          title: 'Our Surgical Expertise',
          items: [
            {
              value: '5,000+',
              label: 'Successful Surgeries Performed'
            },
            {
              value: '85%',
              label: 'Minimally Invasive Procedures'
            },
            {
              value: '98%',
              label: 'Patient Satisfaction Rate'
            },
            {
              value: '24/7',
              label: 'Emergency Surgical Coverage'
            }
          ]
        },

        team: {
          title: 'Our Surgical Team',
          members: [
            {
              name: 'Dr. D.P. Singh',
              role: 'General Surgeon',
              credentials: 'M.B.B.S, MS GENERAL SURGERY, DEPARTMENT OF GI SURGERY',
              image: '/doctors/dr-dp-singh.webp',
              specialty: 'Gastrointestinal Surgery'
            }
          ]
        },

        facilities: {
          title: 'Surgical Facilities',
          description: 'Our modern operating suites are equipped with the latest technology for safe, effective procedures.',
          features: [
            'Advanced laparoscopic equipment',
            'State-of-the-art operating rooms',
            'Comprehensive sterilization systems',
            'Dedicated recovery areas',
            '24/7 emergency surgical capability'
          ],
          image: '/fallback-image.webp'
        },

        research: {
          title: 'Surgical Innovation',
          items: [
            {
              title: 'Minimally Invasive Techniques',
              content: 'Developing new approaches to reduce surgical trauma and improve recovery.',
              icon: 'flask'
            },
            {
              title: 'Enhanced Recovery Protocols',
              content: 'Researching optimized pathways for postoperative recovery.',
              icon: 'dna'
            },
            {
              title: 'Surgical Education',
              content: 'Training programs for advancing surgical skills in the region.',
              icon: 'cpu'
            }
          ]
        },

        testimonials: {
          title: 'Patient Stories',
          items: [
            {
              quote: 'My laparoscopic gallbladder surgery was smooth with minimal pain and quick recovery thanks to the skilled surgical team.',
              author: 'Amit S.',
              image: '/fallback-image.webp'
            },
            {
              quote: 'The surgeons explained everything clearly and took excellent care of me before and after my procedure.',
              author: 'Neha P.',
              image: '/fallback-image.webp'
            }
          ]
        },

        cta: {
          title: 'Need Surgical Consultation?',
          subtitle: 'Our general surgeons are available to evaluate your condition and discuss treatment options.',
          buttons: [
            {
              text: 'Schedule Consultation',
              isPrimary: true
            },
            {
              text: 'Learn About Procedures',
              isPrimary: false
            }
          ]
        }
      },

      {
        id: 'pediatrics',
        index: 10,
        name: 'Pediatrics',
        slug: 'pediatrics',
        heroImage: '/fallback-image.webp',
        heroTitle: 'Compassionate Care for Children of All Ages',
        heroSubtitle: 'Specialized pediatric services for infants through adolescents in Gorakhpur.',
        isFeatured: true,

        overview: {
          title: 'Our Pediatric Approach',
          description: [
            'The Pediatrics department at Synergy Super Speciality Hospital provides comprehensive medical care for children from birth through adolescence.',
            'Our team of pediatric specialists focuses on preventive care, early intervention, and treatment of childhood illnesses in a child-friendly environment.'
          ],
          whyChooseUs: [
            'Board-certified pediatricians and neonatologists',
            'Child-friendly clinic environment',
            'Developmental and behavioral specialists',
            '24/7 pediatric emergency care'
          ]
        },

        treatments: {
          title: 'Pediatric Services',
          items: [
            {
              title: 'Well-Child Care',
              description: 'Comprehensive check-ups, immunizations, and developmental screenings.'
            },
            {
              title: 'Neonatal Care',
              description: 'Specialized care for newborns, including premature and high-risk infants.'
            },
            {
              title: 'Pediatric Illness Management',
              description: 'Expert diagnosis and treatment of childhood illnesses and chronic conditions.'
            }
          ]
        },

        stats: {
          title: 'Our Pediatric Impact',
          items: [
            {
              value: '10,000+',
              label: 'Healthy Children in Our Care'
            },
            {
              value: '98%',
              label: 'Vaccination Completion Rate'
            },
            {
              value: '24/7',
              label: 'Availability for Emergencies'
            },
            {
              value: '15+',
              label: 'Years of Pediatric Experience'
            }
          ]
        },

        team: {
          title: 'Our Pediatric Team',
          members: [
            {
              name: 'Dr. AP Shahi',
              role: 'Pediatrician & Neonatologist',
              credentials: 'M.B.B.S, DCH,MIAP ,Pediatrician & Neonatologist Fellowship ,POPN Boston(USA)',
              image: '/doctors/dr-ap-shahi.webp',
              specialty: 'Neonatology, General Pediatrics'
            }
          ]
        },

        facilities: {
          title: 'Child-Friendly Facilities',
          description: 'Our pediatric unit is designed to make children feel comfortable while receiving top-quality medical care.',
          features: [
            'Colorful, welcoming clinic environment',
            'Specialized pediatric equipment',
            'Neonatal intensive care capabilities',
            'Child life specialists',
            'Family-centered care approach'
          ],
          image: '/fallback-image.webp'
        },

        research: {
          title: 'Pediatric Research',
          items: [
            {
              title: 'Childhood Nutrition',
              content: 'Studies on optimal nutrition for growth and development.',
              icon: 'flask'
            },
            {
              title: 'Vaccine Effectiveness',
              content: 'Monitoring local vaccine efficacy and safety.',
              icon: 'dna'
            },
            {
              title: 'Developmental Milestones',
              content: 'Research on early childhood development patterns.',
              icon: 'cpu'
            }
          ]
        },

        testimonials: {
          title: 'Parent Testimonials',
          items: [
            {
              quote: 'The pediatric team has cared for all three of our children with such warmth and expertise.',
              author: 'Sunita R.',
              image: '/fallback-image.webp'
            },
            {
              quote: 'They made my nervous toddler feel completely at ease during every visit.',
              author: 'Rahul G.',
              image: '/fallback-image.webp'
            }
          ]
        },

        cta: {
          title: 'Schedule Your Child\'s Visit',
          subtitle: 'Our pediatric team is ready to provide compassionate care for your child.',
          buttons: [
            {
              text: 'Book Appointment',
              isPrimary: true
            },
            {
              text: 'Learn About Services',
              isPrimary: false
            }
          ]
        }
      },

      {
        id: 'gynecology',
        index: 11,
        name: 'Gynecology & Obstetrics',
        slug: 'gynecology',
        heroImage: '/doctors/dr-anjali-jain.webp',
        heroTitle: 'Comprehensive Women\'s Health Services',
        heroSubtitle: 'Expert care for all stages of a woman\'s life in Gorakhpur.',
        isFeatured: true,

        overview: {
          title: 'Our Women\'s Health Approach',
          description: [
            'The Gynecology & Obstetrics department at Synergy Super Speciality Hospital provides complete care for women through all life stages, from adolescence through menopause.',
            'Our team offers compassionate, personalized care for routine gynecologic needs, high-risk pregnancies, fertility concerns, and gynecologic surgeries.'
          ],
          whyChooseUs: [
            'Experienced OB/GYN specialists',
            'Comprehensive prenatal and maternity care',
            'Advanced gynecologic surgery options',
            'Personalized approach to women\'s health'
          ]
        },

        treatments: {
          title: 'Our Services',
          items: [
            {
              title: 'Prenatal & Maternity Care',
              description: 'Comprehensive care through pregnancy, delivery, and postpartum.'
            },
            {
              title: 'Gynecologic Surgery',
              description: 'Minimally invasive options for hysterectomy, fibroid removal, and other procedures.'
            },
            {
              title: 'Preventive Care',
              description: 'Annual exams, cancer screenings, and contraceptive counseling.'
            }
          ]
        },

        stats: {
          title: 'Women\'s Health Statistics',
          items: [
            {
              value: '2,000+',
              label: 'Healthy Babies Delivered'
            },
            {
              value: '90%',
              label: 'Minimally Invasive Gynecologic Surgeries'
            },
            {
              value: '24/7',
              label: 'Labor & Delivery Availability'
            },
            {
              value: '30+',
              label: 'Years of Combined Experience'
            }
          ]
        },

        team: {
          title: 'Our OB/GYN Team',
          members: [
            {
              name: 'Dr. Anjali Jain',
              role: 'Gynecologist',
              credentials: 'MBBS, MD (General Physician), GENERAL MEDICINE',
              image: '/doctors/dr-anjali-jain.webp',
              specialty: 'General Gynecology, Obstetrics'
            }
          ]
        },

        facilities: {
          title: 'Women\'s Health Facilities',
          description: 'Our department offers comfortable, private spaces for all women\'s health needs.',
          features: [
            'Modern labor and delivery suites',
            'Advanced ultrasound technology',
            'Comfortable exam rooms',
            'Private consultation areas',
            'Minimally invasive surgery capabilities'
          ],
          image: '/fallback-image.webp'
        },

        research: {
          title: 'Women\'s Health Research',
          items: [
            {
              title: 'Pregnancy Outcomes',
              content: 'Studies on optimizing care for high-risk pregnancies.',
              icon: 'flask'
            },
            {
              title: 'Minimally Invasive Techniques',
              content: 'Developing new approaches to gynecologic surgery.',
              icon: 'dna'
            },
            {
              title: 'Reproductive Health',
              content: 'Research on common gynecologic conditions.',
              icon: 'cpu'
            }
          ]
        },

        testimonials: {
          title: 'Patient Experiences',
          items: [
            {
              quote: 'The OB team made my pregnancy and delivery such a positive experience with their expertise and kindness.',
              author: 'Priya K.',
              image: '/fallback-image.webp'
            },
            {
              quote: 'My gynecologic surgery went smoothly with minimal discomfort thanks to their skilled approach.',
              author: 'Ananya S.',
              image: '/fallback-image.webp'
            }
          ]
        },

        cta: {
          title: 'Schedule Your Women\'s Health Visit',
          subtitle: 'Our OB/GYN team is ready to provide compassionate, expert care.',
          buttons: [
            {
              text: 'Book Appointment',
              isPrimary: true
            },
            {
              text: 'Learn About Services',
              isPrimary: false
            }
          ]
        }
      },

      {
        id: 'head-neck',
        index: 12,
        name: 'Head & Neck',
        slug: 'head-neck',
        heroImage: '/fallback-image.webp',
        heroTitle: 'Specialized Care for Head & Neck Conditions',
        heroSubtitle: 'Expert diagnosis and treatment of complex head and neck disorders in Gorakhpur.',
        isFeatured: true,

        overview: {
          title: 'Our Head & Neck Approach',
          description: [
            'The Head & Neck department at Synergy Super Speciality Hospital provides comprehensive care for conditions affecting this complex anatomical region.',
            'Our team of specialists offers medical and surgical management of benign and malignant conditions, combining expertise with compassionate care.'
          ],
          whyChooseUs: [
            'Specialized head and neck surgeons',
            'Multidisciplinary tumor board review',
            'Advanced diagnostic capabilities',
            'Reconstructive surgery options'
          ]
        },

        treatments: {
          title: 'Our Services',
          items: [
            {
              title: 'Head & Neck Surgery',
              description: 'Expert surgical management of tumors, trauma, and other conditions.'
            },
            {
              title: 'Oncologic Care',
              description: 'Comprehensive treatment for head and neck cancers.'
            },
            {
              title: 'Reconstructive Procedures',
              description: 'Advanced techniques to restore form and function after surgery.'
            }
          ]
        },

        stats: {
          title: 'Head & Neck Expertise',
          items: [
            {
              value: '500+',
              label: 'Complex Procedures Performed'
            },
            {
              value: '95%',
              label: 'Successful Treatment Outcomes'
            },
            {
              value: '24/7',
              label: 'Trauma Care Availability'
            },
            {
              value: '10+',
              label: 'Years of Specialized Experience'
            }
          ]
        },

        team: {
          title: 'Our Head & Neck Team',
          members: [
            {
              name: 'Dr. Tarik Anwar',
              role: 'Head & Neck Surgeon',
              credentials: 'BDS, MDS MAXILLOFACIAL SURGEON, FELLOSHIP IN HEAD & NECK ONCOLOGY',
              image: '/doctors/dr-tarik-anwar.webp',
              specialty: 'Head & Neck Oncology'
            },
            {
              name: 'Dr. Vishal Mishra',
              role: 'Head & Neck Surgeon',
              credentials: 'BDS, MDS, MDS MAXILLOFACIAL SURGEON, FELLOSHIP IN HEAD & NECK',
              image: '/doctors/dr-vishal-mishra.webp',
              specialty: 'Maxillofacial Surgery'
            }
          ]
        },

        facilities: {
          title: 'Specialized Facilities',
          description: 'Our department is equipped with advanced technology for precise diagnosis and treatment.',
          features: [
            'Advanced imaging capabilities',
            'Microsurgical equipment',
            'Dedicated head and neck OR',
            'Multidisciplinary clinic space',
            'Speech and swallowing therapy'
          ],
          image: '/fallback-image.webp'
        },

        research: {
          title: 'Research & Innovation',
          items: [
            {
              title: 'Oncologic Outcomes',
              content: 'Tracking treatment results to improve protocols.',
              icon: 'flask'
            },
            {
              title: 'Reconstructive Techniques',
              content: 'Developing new approaches to restore function.',
              icon: 'dna'
            },
            {
              title: 'Minimally Invasive Approaches',
              content: 'Researching less traumatic surgical options.',
              icon: 'cpu'
            }
          ]
        },

        testimonials: {
          title: 'Patient Stories',
          items: [
            {
              quote: 'The head and neck team gave me excellent care through my cancer treatment and recovery.',
              author: 'Vikram P.',
              image: '/fallback-image.webp'
            },
            {
              quote: 'Their expertise and compassion made a difficult diagnosis much easier to face.',
              author: 'Meera D.',
              image: '/fallback-image.webp'
            }
          ]
        },

        cta: {
          title: 'Schedule a Consultation',
          subtitle: 'Our head and neck specialists are available to evaluate your condition.',
          buttons: [
            {
              text: 'Book Appointment',
              isPrimary: true
            },
            {
              text: 'Learn About Conditions',
              isPrimary: false
            }
          ]
        }
      },

      {
        id: 'emergency-critical-care',
        index: 13,
        name: 'Emergency & Critical Care',
        slug: 'emergency-critical-care',
        heroImage: '/fallback-image.webp',
        heroTitle: '24/7 Emergency & Critical Care Services',
        heroSubtitle: 'Immediate, life-saving care when every second counts in Gorakhpur.',
        isFeatured: true,

        overview: {
          title: 'Our Emergency Approach',
          description: [
            'The Emergency & Critical Care department at Synergy Super Speciality Hospital provides round-the-clock care for acute illnesses and injuries.',
            'Our team of emergency physicians and critical care specialists is trained to handle medical emergencies of all kinds, from trauma to heart attacks, with rapid response and expert intervention.'
          ],
          whyChooseUs: [
            'Board-certified emergency physicians',
            '24/7 availability of all specialties',
            'Advanced life support capabilities',
            'Seamless ICU transition when needed'
          ]
        },

        treatments: {
          title: 'Our Services',
          items: [
            {
              title: 'Emergency Care',
              description: 'Immediate evaluation and treatment for acute medical conditions and injuries.'
            },
            {
              title: 'Critical Care',
              description: 'Specialized ICU management for severely ill patients.'
            },
            {
              title: 'Trauma Response',
              description: 'Organized team approach to serious injuries and multi-system trauma.'
            }
          ]
        },

        stats: {
          title: 'Emergency Care Statistics',
          items: [
            {
              value: '24/7',
              label: 'Emergency Department Availability'
            },
            {
              value: '<15 min',
              label: 'Average Physician Response Time'
            },
            {
              value: '95%',
              label: 'Patient Satisfaction Rate'
            },
            {
              value: '10+',
              label: 'Specialties Available for Consultation'
            }
          ]
        },

        team: {
          title: 'Our Emergency Team',
          members: [
            {
              name: 'Dr. Harshit Mishra',
              role: 'Critical Care Specialist',
              credentials: 'M.B.B.S MD,PDAF(Neuroanesthesia),Ex Seniorfellow Resident SGPGI LKO',
              image: '/doctors/dr-harshit-mishra.webp',
              specialty: 'Neurocritical Care'
            }
          ]
        },

        facilities: {
          title: 'Emergency & ICU Facilities',
          description: 'Our department is equipped to handle the most critical emergencies with advanced technology.',
          features: [
            'Fully-equipped resuscitation bays',
            'Advanced monitoring systems',
            'Dedicated trauma room',
            'Critical care pharmacy',
            '24/7 imaging and lab services'
          ],
          image: '/fallback-image.webp'
        },

        research: {
          title: 'Emergency Medicine Research',
          items: [
            {
              title: 'Resuscitation Science',
              content: 'Studying optimal approaches to cardiac arrest care.',
              icon: 'flask'
            },
            {
              title: 'Sepsis Protocols',
              content: 'Developing rapid response systems for severe infection.',
              icon: 'dna'
            },
            {
              title: 'Trauma Systems',
              content: 'Researching coordinated approaches to injury care.',
              icon: 'cpu'
            }
          ]
        },

        testimonials: {
          title: 'Patient Experiences',
          items: [
            {
              quote: 'The emergency team saved my life when I had my heart attack. Their quick response made all the difference.',
              author: 'Ramesh C.',
              image: '/fallback-image.webp'
            },
            {
              quote: 'When my child had a severe allergic reaction, they provided immediate, expert care that stabilized him quickly.',
              author: 'Sunita M.',
              image: '/fallback-image.webp'
            }
          ]
        },

        cta: {
          title: 'Emergency Services Available 24/7',
          subtitle: 'No appointment needed for emergency care - walk in or call for immediate assistance.',
          buttons: [
            {
              text: 'Call Emergency',
              isPrimary: true
            },
            {
              text: 'Learn About Services',
              isPrimary: false
            }
          ]
        }
      }
]
