import { DepartmentData } from "@/types";

export const departmentData: DepartmentData[] = [
    {
        id: 'medical-oncology',
        index: 1,
        name: 'Medical Oncology',
        slug: 'medical-oncology',
        heroImage: '/fallback-image.webp',
        heroTitle: 'Precision Oncology Care',
        isFeatured: true,
        heroSubtitle: 'Where cutting-edge research meets compassionate patient care in the heart of New York',

        overview: {
          title: 'Our Approach',
          description: [
            'At Synergy Oncology Center, we combine the latest medical advancements with a patient-first philosophy to provide individualized cancer treatment. Our medical oncologists work closely with a multidisciplinary team to design comprehensive care plans.',
            'Founded in 2005, we’ve been at the forefront of cancer care innovation, integrating clinical research and personalized medicine to improve patient outcomes.'
          ],
          whyChooseUs: [
            'Nationally recognized cancer center with a holistic care model',
            'Multidisciplinary tumor board reviews every case',
            'Access to cutting-edge clinical trials and experimental therapies',
            'Comprehensive support services for patients and families'
          ]
        },

        treatments: {
          title: 'Treatment Specialties',
          items: [
            {
              title: 'Chemotherapy Protocols',
              description: 'Tailored regimens including dose-dense and metronomic chemotherapy to maximize efficacy while minimizing side effects.'
            },
            {
              title: 'Targeted Therapy',
              description: 'Utilizing biomarker testing to identify therapies that target specific genetic mutations driving cancer growth.'
            },
            {
              title: 'Immunotherapy',
              description: 'Harnessing the immune system with immune checkpoint inhibitors and CAR-T cell therapy for select cancers.'
            },
          ]
        },

        stats: {
          title: 'Our Impact in Numbers',
          items: [
            {
              value: '20+',
              label: 'Years of Oncology Excellence'
            },
            {
              value: '15K+',
              label: 'Patients Treated'
            },
            {
              value: '50+',
              label: 'Clinical Trials Conducted'
            },
            {
              value: '98%',
              label: 'Patient Satisfaction Rate'
            }
          ]
        },

        team: {
          title: 'Meet Our Specialists',
          members: [
            {
              name: 'Dr. Elena Martinez',
              role: 'Chief Medical Oncologist',
              credentials: 'MD, PhD',
              image: '/fallback-image.webp',
              specialty: 'Breast and Ovarian Cancers'
            },
            {
              name: 'Dr. Rajiv Patel',
              role: 'Senior Oncologist',
              credentials: 'MD',
              image: '/fallback-image.webp',
              specialty: 'Lung and GI Malignancies'
            },
            {
              name: 'Dr. Linda Cheng',
              role: 'Clinical Trials Director',
              credentials: 'MD, MPH',
              image: '/fallback-image.webp',
              specialty: 'Immunotherapy & Targeted Agents'
            },
            {
              name: 'Dr. Thomas Greene',
              role: 'Pediatric Oncologist',
              credentials: 'MD',
              image: '/fallback-image.webp',
              specialty: 'Childhood Leukemias and Lymphomas'
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
          image: '/fallback-image.webp',
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
              quote: 'They gave me hope when I had none. I’m now two years cancer-free and forever grateful.',
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
        id: 'radiation-oncology',
        index: 2,
        name: 'Radiation Oncology',
        slug: 'radiation-oncology',
        heroImage: '/fallback-image.webp',
        heroTitle: 'Precision Radiation Therapy',
        isFeatured: true,
        heroSubtitle: 'Advanced radiation techniques delivering targeted cancer treatment with minimal side effects.',

        overview: {
          title: 'Our Approach',
          description: [
            'At Synergy Oncology Center, our radiation oncologists use state-of-the-art technologies like IMRT, IGRT, and stereotactic radiosurgery to deliver accurate, effective treatment.',
            'Since 2007, we’ve pioneered personalized radiation plans, prioritizing both tumor control and healthy tissue preservation.'
          ],
          whyChooseUs: [
            'Highly experienced radiation specialists',
            'Precision technologies minimizing side effects',
            'Dedicated planning and simulation suites',
            'Integrated care with medical and surgical teams'
          ]
        },

        treatments: {
          title: 'Treatment Specialties',
          items: [
            {
              title: 'IMRT (Intensity-Modulated Radiation Therapy)',
              description: 'Allows for precise dose distribution, reducing radiation to surrounding healthy tissue.'
            },
            {
              title: 'Stereotactic Radiosurgery (SRS)',
              description: 'Non-invasive treatment for brain and spine tumors with pinpoint accuracy.'
            },
            {
              title: 'Brachytherapy',
              description: 'Internal radiation for prostate, cervical, and breast cancers.'
            }
          ]
        },

        stats: {
          title: 'Our Impact in Numbers',
          items: [
            { value: '15+', label: 'Years of Radiation Expertise' },
            { value: '10K+', label: 'Patients Treated with Radiation' },
            { value: '40+', label: 'Types of Cancers Treated' },
            { value: '97%', label: 'Treatment Accuracy Rate' }
          ]
        },

        team: {
          title: 'Meet Our Specialists',
          members: [
            {
              name: 'Dr. Monica Ray',
              role: 'Chief Radiation Oncologist',
              credentials: 'MD',
              image: '/fallback-image.webp',
              specialty: 'IMRT and SRS'
            },
            {
              name: 'Dr. Kenji Tanaka',
              role: 'Senior Radiation Physicist',
              credentials: 'PhD',
              image: '/fallback-image.webp',
              specialty: 'Dosimetry and Planning'
            }
          ]
        },

        facilities: {
          title: 'Advanced Radiation Suites',
          description: 'Equipped with linear accelerators, planning systems, and advanced imaging for precise treatment delivery.',
          features: [
            'Varian TrueBeam® systems',
            'Dedicated planning CT and MRI',
            'Real-time image guidance',
            'Comfortable and private treatment bays'
          ],
          image: '/fallback-image.webp',
        },

        research: {
          title: 'Research & Innovation',
          items: [
            {
              title: 'Adaptive Radiation Protocols',
              content: 'Refining dose plans in real time to respond to tumor changes.',
              icon: 'radar'
            },
            {
              title: 'Radiogenomics',
              content: 'Studying genetic factors influencing radiation response.',
              icon: 'activity'
            },
            {
              title: 'AI-based Planning Tools',
              content: 'Leveraging AI to optimize radiation delivery plans.',
              icon: 'cpu'
            }
          ]
        },

        testimonials: {
          title: 'Patient Experiences',
          items: [
            {
              quote: 'The precision and care I received were extraordinary. My side effects were minimal and the results were fantastic.',
              author: 'Karen D.',
              image: '/fallback-image.webp',
            },
            {
              quote: 'From planning to delivery, the radiation team made me feel safe and hopeful every step of the way.',
              author: 'Martin L.',
              image: '/fallback-image.webp',
            }
          ]
        },

        cta: {
          title: 'Explore Radiation Treatment Options',
          subtitle: 'Speak with our radiation oncology team to understand your best options.',
          buttons: [
            { text: 'Schedule a Consultation', isPrimary: true },
            { text: 'View Facility', isPrimary: false }
          ]
        }
      },
      {
        id: 'surgical-oncology',
        index: 3,
        name: 'Surgical Oncology',
        slug: 'surgical-oncology',
        heroImage: '/images/surgical-oncology-hero.jpg',
        heroTitle: 'Precision Surgical Interventions',
        isFeatured: false,
        heroSubtitle: 'Expert cancer surgery focused on outcomes, recovery, and quality of life.',

        overview: {
          title: 'Our Approach',
          description: [
            'Our surgical oncology team performs complex cancer surgeries with a focus on minimally invasive techniques and rapid recovery protocols.',
            'With a strong foundation in evidence-based care, we prioritize tumor removal, organ preservation, and optimal functional outcomes.'
          ],
          whyChooseUs: [
            'Board-certified surgical oncologists',
            'Robotic and laparoscopic expertise',
            'Fast-track recovery programs',
            'Close collaboration with medical and radiation oncology teams'
          ]
        },

        treatments: {
          title: 'Surgical Expertise',
          items: [
            {
              title: 'Robotic-Assisted Cancer Surgery',
              description: 'Improved precision, smaller incisions, and faster recovery for select tumors.'
            },
            {
              title: 'Cytoreductive Surgery',
              description: 'Extensive tumor debulking for ovarian and GI malignancies.'
            },
            {
              title: 'Breast-Conserving Surgery',
              description: 'Minimally invasive techniques that prioritize aesthetics and efficacy.'
            }
          ]
        },

        stats: {
          title: 'Surgical Outcomes by the Numbers',
          items: [
            { value: '5K+', label: 'Cancer Surgeries Performed' },
            { value: '95%', label: 'Minimally Invasive Procedure Rate' },
            { value: '3', label: 'Days Average Hospital Stay' },
            { value: '99%', label: 'Post-Surgical Satisfaction' }
          ]
        },

        team: {
          title: 'Meet Our Surgeons',
          members: [
            {
              name: 'Dr. Ana Rodrigues',
              role: 'Director of Surgical Oncology',
              credentials: 'MD, FACS',
              image: '/fallback-image.webp',
              specialty: 'Breast & GI Surgeries'
            },
            {
              name: 'Dr. Jason Meyer',
              role: 'Robotic Surgery Specialist',
              credentials: 'MD',
              image: '/fallback-image.webp',
              specialty: 'Urologic and Hepatobiliary Cancers'
            }
          ]
        },

        facilities: {
          title: 'Advanced Operating Theaters',
          description: 'Our modular OT suites are designed for precision and sterility, equipped with the latest robotic systems.',
          features: [
            'da Vinci® robotic systems',
            'Hybrid ORs with intra-op imaging',
            'Dedicated post-op recovery zones',
            'Sterile surgical robotics labs'
          ],
          image: '/fallback-image.webp',
        },

        research: {
          title: 'Surgical Innovation',
          items: [
            {
              title: 'Minimally Invasive Trials',
              content: 'Pioneering faster recovery protocols in laparoscopic oncology.',
              icon: 'scalpel'
            },
            {
              title: 'Biomarker-Guided Resection',
              content: 'Identifying surgical margins with fluorescence and biomarker tagging.',
              icon: 'microscope'
            },
            {
              title: 'Recovery Optimization Studies',
              content: 'Exploring nutrition and pain control for better outcomes.',
              icon: 'heart-pulse'
            }
          ]
        },

        testimonials: {
          title: 'Surgical Success Stories',
          items: [
            {
              quote: 'My robotic surgery left barely any scars. The team was phenomenal.',
              author: 'Emily P.',
              image: '/fallback-image.webp',
            },
            {
              quote: 'They removed the tumor without compromising function. I feel whole again.',
              author: 'Ron K.',
              image: '/fallback-image.webp',
            }
          ]
        },

        cta: {
          title: 'Considering Surgery for Cancer Treatment?',
          subtitle: 'Get in touch with our surgical team to explore personalized options.',
          buttons: [
            { text: 'Consult a Surgeon', isPrimary: true },
            { text: 'View Surgical FAQs', isPrimary: false }
          ]
        }
      },
      {
        id: 'hemato-oncology',
        index: 1,
        name: 'Hemato-Oncology',
        slug: 'hemato-oncology',
        heroImage: '/images/hemato-oncology-hero.jpg',
        heroTitle: 'Advanced Blood Cancer Care',
        isFeatured: true,
        heroSubtitle: 'Specialized treatments for leukemia, lymphoma, and multiple myeloma with compassion and precision.',

        overview: {
          title: 'Our Approach',
          description: [
            'Our Hemato-Oncology program provides cutting-edge care for hematologic malignancies through a multidisciplinary approach.',
            'Combining diagnostics, chemotherapy, immunotherapy, and transplants, we aim to improve survival and quality of life.'
          ],
          whyChooseUs: [
            'Dedicated blood cancer unit',
            'Expertise in rare and complex hematologic conditions',
            'In-house bone marrow transplant program',
            '24/7 hematology support and transfusion services'
          ]
        },

        treatments: {
          title: 'Blood Cancer Treatments',
          items: [
            {
              title: 'Chemotherapy & Immunotherapy',
              description: 'Custom protocols tailored for leukemia, lymphoma, and myeloma.'
            },
            {
              title: 'Bone Marrow Transplants',
              description: 'Autologous and allogeneic transplants in our HEPA-filtered transplant suites.'
            },
            {
              title: 'Targeted Agents',
              description: 'Monoclonal antibodies and kinase inhibitors improving disease control.'
            }
          ]
        },

        stats: {
          title: 'Hemato-Oncology in Numbers',
          items: [
            { value: '3K+', label: 'Blood Cancer Cases Treated' },
            { value: '150+', label: 'Transplants Performed' },
            { value: '95%', label: 'Post-Treatment Survival (1 Year)' },
            { value: '99%', label: 'Infection-Control Compliance' }
          ]
        },

        team: {
          title: 'Meet Our Hemato-Oncologists',
          members: [
            {
              name: 'Dr. Meera Nair',
              role: 'Director, Hemato-Oncology',
              credentials: 'MD, DM',
              image: '/fallback-image.webp',
              specialty: 'Lymphomas & Myelomas'
            },
            {
              name: 'Dr. Arjun Kapoor',
              role: 'Transplant Specialist',
              credentials: 'MD',
              image: '/fallback-image.webp',
              specialty: 'Leukemia & Bone Marrow Transplants'
            }
          ]
        },

        facilities: {
          title: 'HEPA-Safe Cancer Suites',
          description: 'Specialized infrastructure supporting high-risk treatments with a focus on infection control and patient safety.',
          features: [
            'HEPA-filtered transplant units',
            'Dedicated transfusion bays',
            'Isolation rooms for immunocompromised patients',
            'Real-time vitals and monitoring dashboards'
          ],
          image: '/fallback-image.webp',
        },

        research: {
          title: 'Blood Cancer Research',
          items: [
            {
              title: 'CAR-T Trials',
              content: 'Testing immune-engineered cell therapies for relapsed leukemia.',
              icon: 'droplet'
            },
            {
              title: 'Real-World Data Analytics',
              content: 'Leveraging patient data to optimize treatment outcomes.',
              icon: 'bar-chart'
            },
            {
              title: 'Transplant Conditioning Protocols',
              content: 'Exploring safer, more effective pre-transplant regimens.',
              icon: 'thermometer'
            }
          ]
        },

        testimonials: {
          title: 'Voices of Hope',
          items: [
            {
              quote: 'The transplant team saved my life. I am now 18 months cancer-free and thriving.',
              author: 'Lena T.',
              image: '/fallback-image.webp',
            },
            {
              quote: 'They gave me world-class treatment with a deeply human touch.',
              author: 'Ahmed B.',
              image: '/fallback-image.webp',
            }
          ]
        },

        cta: {
          title: 'Need Help with Blood Cancer Treatment?',
          subtitle: 'Book a session with our hemato-oncology team to begin your healing journey.',
          buttons: [
            { text: 'Start Consultation', isPrimary: true },
            { text: 'Know More', isPrimary: false }
          ]
        }
      },

]
