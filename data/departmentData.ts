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
              name: 'Dr. Saurabh Mishra',
              role: 'Chief Medical Oncologist',
              credentials: 'MD, PhD',
              image: '/fallback-image.webp',
              specialty: 'Breast and Ovarian Cancers'
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
        id: 'surgical-oncology',
        index: 2,
        name: 'Surgical Oncology',
        slug: 'surgical-oncology',
        heroImage: 'fallback-image.webp',
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
              name: 'Dr. Alok Tiwari',
              role: 'Director of Surgical Oncology',
              credentials: 'MD, FACS',
              image: '/fallback-image.webp',
              specialty: 'Breast & GI Surgeries'
            },
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
    //   {
    //     id: 'hemato-oncology',
    //     index: 1,
    //     name: 'Hemato-Oncology',
    //     slug: 'hemato-oncology',
    //     heroImage: '/fallback-image.webp',
    //     heroTitle: 'Advanced Blood Cancer Care',
    //     isFeatured: true,
    //     heroSubtitle: 'Specialized treatments for leukemia, lymphoma, and multiple myeloma with compassion and precision.',

    //     overview: {
    //       title: 'Our Approach',
    //       description: [
    //         'Our Hemato-Oncology program provides cutting-edge care for hematologic malignancies through a multidisciplinary approach.',
    //         'Combining diagnostics, chemotherapy, immunotherapy, and transplants, we aim to improve survival and quality of life.'
    //       ],
    //       whyChooseUs: [
    //         'Dedicated blood cancer unit',
    //         'Expertise in rare and complex hematologic conditions',
    //         'In-house bone marrow transplant program',
    //         '24/7 hematology support and transfusion services'
    //       ]
    //     },

    //     treatments: {
    //       title: 'Blood Cancer Treatments',
    //       items: [
    //         {
    //           title: 'Chemotherapy & Immunotherapy',
    //           description: 'Custom protocols tailored for leukemia, lymphoma, and myeloma.'
    //         },
    //         {
    //           title: 'Bone Marrow Transplants',
    //           description: 'Autologous and allogeneic transplants in our HEPA-filtered transplant suites.'
    //         },
    //         {
    //           title: 'Targeted Agents',
    //           description: 'Monoclonal antibodies and kinase inhibitors improving disease control.'
    //         }
    //       ]
    //     },

    //     stats: {
    //       title: 'Hemato-Oncology in Numbers',
    //       items: [
    //         { value: '3K+', label: 'Blood Cancer Cases Treated' },
    //         { value: '150+', label: 'Transplants Performed' },
    //         { value: '95%', label: 'Post-Treatment Survival (1 Year)' },
    //         { value: '99%', label: 'Infection-Control Compliance' }
    //       ]
    //     },

    //     team: {
    //       title: 'Meet Our Hemato-Oncologists',
    //       members: [
    //         {
    //           name: 'Dr. Meera Nair',
    //           role: 'Director, Hemato-Oncology',
    //           credentials: 'MD, DM',
    //           image: '/fallback-image.webp',
    //           specialty: 'Lymphomas & Myelomas'
    //         },
    //         {
    //           name: 'Dr. Arjun Kapoor',
    //           role: 'Transplant Specialist',
    //           credentials: 'MD',
    //           image: '/fallback-image.webp',
    //           specialty: 'Leukemia & Bone Marrow Transplants'
    //         }
    //       ]
    //     },

    //     facilities: {
    //       title: 'HEPA-Safe Cancer Suites',
    //       description: 'Specialized infrastructure supporting high-risk treatments with a focus on infection control and patient safety.',
    //       features: [
    //         'HEPA-filtered transplant units',
    //         'Dedicated transfusion bays',
    //         'Isolation rooms for immunocompromised patients',
    //         'Real-time vitals and monitoring dashboards'
    //       ],
    //       image: '/fallback-image.webp',
    //     },

    //     research: {
    //       title: 'Blood Cancer Research',
    //       items: [
    //         {
    //           title: 'CAR-T Trials',
    //           content: 'Testing immune-engineered cell therapies for relapsed leukemia.',
    //           icon: 'droplet'
    //         },
    //         {
    //           title: 'Real-World Data Analytics',
    //           content: 'Leveraging patient data to optimize treatment outcomes.',
    //           icon: 'bar-chart'
    //         },
    //         {
    //           title: 'Transplant Conditioning Protocols',
    //           content: 'Exploring safer, more effective pre-transplant regimens.',
    //           icon: 'thermometer'
    //         }
    //       ]
    //     },

    //     testimonials: {
    //       title: 'Voices of Hope',
    //       items: [
    //         {
    //           quote: 'The transplant team saved my life. I am now 18 months cancer-free and thriving.',
    //           author: 'Lena T.',
    //           image: '/fallback-image.webp',
    //         },
    //         {
    //           quote: 'They gave me world-class treatment with a deeply human touch.',
    //           author: 'Ahmed B.',
    //           image: '/fallback-image.webp',
    //         }
    //       ]
    //     },

    //     cta: {
    //       title: 'Need Help with Blood Cancer Treatment?',
    //       subtitle: 'Book a session with our hemato-oncology team to begin your healing journey.',
    //       buttons: [
    //         { text: 'Start Consultation', isPrimary: true },
    //         { text: 'Know More', isPrimary: false }
    //       ]
    //     }
    //   },
      {
        id: 'orthopedics',
        index: 1,
        name: 'Orthopedics',
        slug: 'orthopedics',
        heroImage: '/fallback-image.webp',
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
          title: 'Orthopedics in Numbers',
          items: [
            { value: '3K+', label: 'Blood Cancer Cases Treated' },
            { value: '150+', label: 'Transplants Performed' },
            { value: '95%', label: 'Post-Treatment Survival (1 Year)' },
            { value: '99%', label: 'Infection-Control Compliance' }
          ]
        },

        team: {
          title: 'Meet Our Orthopedics',
          members: [
            {
              name: 'Dr. Prateek',
              role: 'Director, Orthopedics',
              credentials: 'MD, DM',
              image: '/fallback-image.webp',
              specialty: 'Lymphomas & Myelomas'
            },
            {
              name: 'Dr. Anil Srivastava',
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
