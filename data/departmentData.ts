import { DepartmentData } from "@/types";
import { useTranslations } from "next-intl";

export const useDepartmentData = () => {
    const t = useTranslations('DepartmentDataMegaArray')

    const departmentData: DepartmentData[] = [
        {
          id: 'medical-oncology',
          index: 0,
          name: t('MedicalOncology.name'),
          slug: 'medical-oncology',
          heroImage: '/department/medical-oncology.jpeg',
          bannerImage: '/department/medical-oncology-banner.jpeg',
          heroTitle: t('MedicalOncology.heroTitle'),
          isFeatured: true,
          heroSubtitle: t('MedicalOncology.heroSubtitle'),
          overview: {
            title: t('MedicalOncology.overview.title'),
            description: [
              t('MedicalOncology.overview.description.0'),
              t('MedicalOncology.overview.description.1')
            ],
            whyChooseUs: [
              t('MedicalOncology.overview.whyChooseUs.0'),
              t('MedicalOncology.overview.whyChooseUs.1'),
              t('MedicalOncology.overview.whyChooseUs.2'),
              t('MedicalOncology.overview.whyChooseUs.3')
            ]
          },

          treatments: {
            title: t('MedicalOncology.treatments.title'),
            items: [
              {
                title: t('MedicalOncology.treatments.items.chemotherapy.title'),
                description: t('MedicalOncology.treatments.items.chemotherapy.description')
              },
              {
                title: t('MedicalOncology.treatments.items.immunotherapy.title'),
                description: t('MedicalOncology.treatments.items.immunotherapy.description')
              },
              {
                title: t('MedicalOncology.treatments.items.targetedTherapy.title'),
                description: t('MedicalOncology.treatments.items.targetedTherapy.description')
              }
            ]
          },

          stats: {
            title: t('MedicalOncology.stats.title'),
            items: [
              {
                value: t('MedicalOncology.stats.items.patients.value'),
                label: t('MedicalOncology.stats.items.patients.label')
              },
              {
                value: t('MedicalOncology.stats.items.satisfaction.value'),
                label: t('MedicalOncology.stats.items.satisfaction.label')
              },
              {
                value: t('MedicalOncology.stats.items.trials.value'),
                label: t('MedicalOncology.stats.items.trials.label')
              },
              {
                value: t('MedicalOncology.stats.items.care.value'),
                label: t('MedicalOncology.stats.items.care.label')
              }
            ]
          },

          team: {
            title: t('MedicalOncology.team.title'),
            members: [
              {
                name: t('MedicalOncology.team.members.drSaurabh.name'),
                role: t('MedicalOncology.team.members.drSaurabh.role'),
                credentials: t('MedicalOncology.team.members.drSaurabh.credentials'),
                image: '/doctors/dr-saurabh-mishra.webp',
                specialty: t('MedicalOncology.team.members.drSaurabh.specialty')
              }
            ]
          },

          facilities: {
            title: t('MedicalOncology.facilities.title'),
            description: t('MedicalOncology.facilities.description'),
            features: [
              t('MedicalOncology.facilities.features.0'),
              t('MedicalOncology.facilities.features.1'),
              t('MedicalOncology.facilities.features.2'),
              t('MedicalOncology.facilities.features.3'),
              t('MedicalOncology.facilities.features.4')
            ],
            image: '/fallback-image.webp',
          },

          research: {
            title: t('MedicalOncology.research.title'),
            items: [
              {
                title: t('MedicalOncology.research.items.novelTherapies.title'),
                content: t('MedicalOncology.research.items.novelTherapies.content'),
                icon: 'flask'
              },
              {
                title: t('MedicalOncology.research.items.precisionMedicine.title'),
                content: t('MedicalOncology.research.items.precisionMedicine.content'),
                icon: 'dna'
              },
              {
                title: t('MedicalOncology.research.items.qualityOfLife.title'),
                content: t('MedicalOncology.research.items.qualityOfLife.content'),
                icon: 'heart'
              }
            ]
          },

          testimonials: {
            title: t('MedicalOncology.testimonials.title'),
            items: [
              {
                quote: t('MedicalOncology.testimonials.items.priya.quote'),
                author: t('MedicalOncology.testimonials.items.priya.author'),
                image: '/fallback-image.webp',
              },
              {
                quote: t('MedicalOncology.testimonials.items.rahul.quote'),
                author: t('MedicalOncology.testimonials.items.rahul.author'),
                image: '/fallback-image.webp',
              },
            ]
          },

          cta: {
            title: t('MedicalOncology.cta.title'),
            subtitle: t('MedicalOncology.cta.subtitle'),
            buttons: [
              {
                text: t('MedicalOncology.cta.buttons.appointment.text'),
                isPrimary: true,
              },
              {
                text: t('MedicalOncology.cta.buttons.learnMore.text'),
                isPrimary: false,
              }
            ]
          },
        },
        {
          id: 'surgical-oncology',
          index: 1,
          name: t('SurgicalOncology.name'),
          slug: 'surgical-oncology',
          heroImage: '/department/surgical-oncology.webp',
          bannerImage: '/department/surgical-oncology-banner.jpeg',
          heroTitle: t('SurgicalOncology.heroTitle'),
          isFeatured: true,
          heroSubtitle: t('SurgicalOncology.heroSubtitle'),

          overview: {
            title: t('SurgicalOncology.overview.title'),
            description: [
              t('SurgicalOncology.overview.description.0'),
              t('SurgicalOncology.overview.description.1')
            ],
            whyChooseUs: [
              t('SurgicalOncology.overview.whyChooseUs.0'),
              t('SurgicalOncology.overview.whyChooseUs.1'),
              t('SurgicalOncology.overview.whyChooseUs.2'),
              t('SurgicalOncology.overview.whyChooseUs.3')
            ]
          },

          treatments: {
            title: t('SurgicalOncology.treatments.title'),
            items: [
              {
                title: t('SurgicalOncology.treatments.items.complexSurgeries.title'),
                description: t('SurgicalOncology.treatments.items.complexSurgeries.description')
              },
              {
                title: t('SurgicalOncology.treatments.items.laparoscopicSurgery.title'),
                description: t('SurgicalOncology.treatments.items.laparoscopicSurgery.description')
              },
              {
                title: t('SurgicalOncology.treatments.items.organPreserving.title'),
                description: t('SurgicalOncology.treatments.items.organPreserving.description')
              }
            ]
          },

          stats: {
            title: t('SurgicalOncology.stats.title'),
            items: [
              {
                value: t('SurgicalOncology.stats.items.surgeries.value'),
                label: t('SurgicalOncology.stats.items.surgeries.label')
              },
              {
                value: t('SurgicalOncology.stats.items.experience.value'),
                label: t('SurgicalOncology.stats.items.experience.label')
              },
              {
                value: t('SurgicalOncology.stats.items.satisfaction.value'),
                label: t('SurgicalOncology.stats.items.satisfaction.label')
              },
              {
                value: t('SurgicalOncology.stats.items.procedures.value'),
                label: t('SurgicalOncology.stats.items.procedures.label')
              }
            ]
          },

          team: {
            title: t('SurgicalOncology.team.title'),
            members: [
              {
                name: t('SurgicalOncology.team.members.drAlok.name'),
                role: t('SurgicalOncology.team.members.drAlok.role'),
                credentials: t('SurgicalOncology.team.members.drAlok.credentials'),
                image: '/doctors/dr-alok-tiwari.webp',
                specialty: t('SurgicalOncology.team.members.drAlok.specialty')
              }
            ]
          },

          facilities: {
            title: t('SurgicalOncology.facilities.title'),
            description: t('SurgicalOncology.facilities.description'),
            features: [
              t('SurgicalOncology.facilities.features.0'),
              t('SurgicalOncology.facilities.features.1'),
              t('SurgicalOncology.facilities.features.2'),
              t('SurgicalOncology.facilities.features.3'),
              t('SurgicalOncology.facilities.features.4')
            ],
            image: '/department/surgical-oncology-facilities.webp',
          },

          research: {
            title: t('SurgicalOncology.research.title'),
            items: [
              {
                title: t('SurgicalOncology.research.items.precisionOncology.title'),
                content: t('SurgicalOncology.research.items.precisionOncology.content'),
                icon: 'flask'
              },
              {
                title: t('SurgicalOncology.research.items.biobankGenomics.title'),
                content: t('SurgicalOncology.research.items.biobankGenomics.content'),
                icon: 'dna'
              },
              {
                title: t('SurgicalOncology.research.items.aiDetection.title'),
                content: t('SurgicalOncology.research.items.aiDetection.content'),
                icon: 'cpu'
              }
            ]
          },

          testimonials: {
            title: t('SurgicalOncology.testimonials.title'),
            items: [
              {
                quote: t('SurgicalOncology.testimonials.items.sophia.quote'),
                author: t('SurgicalOncology.testimonials.items.sophia.author'),
                image: '/fallback-image.webp',
              },
              {
                quote: t('SurgicalOncology.testimonials.items.james.quote'),
                author: t('SurgicalOncology.testimonials.items.james.author'),
                image: '/fallback-image.webp',
              },
            ]
          },

          cta: {
            title: t('SurgicalOncology.cta.title'),
            subtitle: t('SurgicalOncology.cta.subtitle'),
            buttons: [
              {
                text: t('SurgicalOncology.cta.buttons.appointment.text'),
                isPrimary: true,
              },
              {
                text: t('SurgicalOncology.cta.buttons.contact.text'),
                isPrimary: false,
              }
            ]
          },
        },
        {
            id: 'gynecology',
            index: 11,
            name: t('Gynecology.name'),
            slug: 'gynecology',
            heroImage: '/department/gynaecology.webp',
            bannerImage: '/department/gynae-banner.jpeg',
            heroTitle: t('Gynecology.heroTitle'),
            heroSubtitle: t('Gynecology.heroSubtitle'),
            isFeatured: true,

            overview: {
              title: t('Gynecology.overview.title'),
              description: [
                t('Gynecology.overview.description.0'),
                t('Gynecology.overview.description.1')
              ],
              whyChooseUs: [
                t('Gynecology.overview.whyChooseUs.0'),
                t('Gynecology.overview.whyChooseUs.1'),
                t('Gynecology.overview.whyChooseUs.2'),
                t('Gynecology.overview.whyChooseUs.3')
              ]
            },

            treatments: {
              title: t('Gynecology.treatments.title'),
              items: [
                {
                  title: t('Gynecology.treatments.items.prenatalCare.title'),
                  description: t('Gynecology.treatments.items.prenatalCare.description')
                },
                {
                  title: t('Gynecology.treatments.items.gynecologicSurgery.title'),
                  description: t('Gynecology.treatments.items.gynecologicSurgery.description')
                },
                {
                  title: t('Gynecology.treatments.items.preventiveCare.title'),
                  description: t('Gynecology.treatments.items.preventiveCare.description')
                }
              ]
            },

            stats: {
              title: t('Gynecology.stats.title'),
              items: [
                {
                  value: t('Gynecology.stats.items.babiesDelivered.value'),
                  label: t('Gynecology.stats.items.babiesDelivered.label')
                },
                {
                  value: t('Gynecology.stats.items.surgeryRate.value'),
                  label: t('Gynecology.stats.items.surgeryRate.label')
                },
                {
                  value: t('Gynecology.stats.items.availability.value'),
                  label: t('Gynecology.stats.items.availability.label')
                },
                {
                  value: t('Gynecology.stats.items.experienceYears.value'),
                  label: t('Gynecology.stats.items.experienceYears.label')
                }
              ]
            },

            team: {
              title: t('Gynecology.team.title'),
              members: [
                {
                  name: t('Gynecology.team.members.drAnjali.name'),
                  role: t('Gynecology.team.members.drAnjali.role'),
                  credentials: t('Gynecology.team.members.drAnjali.credentials'),
                  image: '/doctors/dr-anjali-jain.webp',
                  specialty: t('Gynecology.team.members.drAnjali.specialty')
                }
              ]
            },

            facilities: {
              title: t('Gynecology.facilities.title'),
              description: t('Gynecology.facilities.description'),
              features: [
                t('Gynecology.facilities.features.0'),
                t('Gynecology.facilities.features.1'),
                t('Gynecology.facilities.features.2'),
                t('Gynecology.facilities.features.3'),
                t('Gynecology.facilities.features.4')
              ],
              image: '/fallback-image.webp'
            },

            research: {
              title: t('Gynecology.research.title'),
              items: [
                {
                  title: t('Gynecology.research.items.pregnancyOutcomes.title'),
                  content: t('Gynecology.research.items.pregnancyOutcomes.content'),
                  icon: 'flask'
                },
                {
                  title: t('Gynecology.research.items.minimallyInvasive.title'),
                  content: t('Gynecology.research.items.minimallyInvasive.content'),
                  icon: 'dna'
                },
                {
                  title: t('Gynecology.research.items.reproductiveHealth.title'),
                  content: t('Gynecology.research.items.reproductiveHealth.content'),
                  icon: 'cpu'
                }
              ]
            },

            testimonials: {
              title: t('Gynecology.testimonials.title'),
              items: [
                {
                  quote: t('Gynecology.testimonials.items.priya.quote'),
                  author: t('Gynecology.testimonials.items.priya.author'),
                  image: '/fallback-image.webp'
                },
                {
                  quote: t('Gynecology.testimonials.items.ananya.quote'),
                  author: t('Gynecology.testimonials.items.ananya.author'),
                  image: '/fallback-image.webp'
                }
              ]
            },

            cta: {
              title: t('Gynecology.cta.title'),
              subtitle: t('Gynecology.cta.subtitle'),
              buttons: [
                {
                  text: t('Gynecology.cta.buttons.appointment.text'),
                  isPrimary: true
                },
                {
                  text: t('Gynecology.cta.buttons.learnMore.text'),
                  isPrimary: false
                }
              ]
            }
          },
          {
            id: 'neurology',
            index: 2,
            name: t('Neurology.name'),
            slug: 'neurology',
            heroImage: '/department/neurology.jpeg',
            bannerImage: '/department/neurology-banner.webp',
            heroTitle: t('Neurology.heroTitle'),
            isFeatured: false,
            heroSubtitle: t('Neurology.heroSubtitle'),

            overview: {
              title: t('Neurology.overview.title'),
              description: [
                t('Neurology.overview.description.0'),
                t('Neurology.overview.description.1')
              ],
              whyChooseUs: [
                t('Neurology.overview.whyChooseUs.0'),
                t('Neurology.overview.whyChooseUs.1'),
                t('Neurology.overview.whyChooseUs.2'),
                t('Neurology.overview.whyChooseUs.3')
              ]
            },

            treatments: {
              title: t('Neurology.treatments.title'),
              items: [
                {
                  title: t('Neurology.treatments.items.strokeCare.title'),
                  description: t('Neurology.treatments.items.strokeCare.description')
                },
                {
                  title: t('Neurology.treatments.items.epilepsy.title'),
                  description: t('Neurology.treatments.items.epilepsy.description')
                },
                {
                  title: t('Neurology.treatments.items.movementDisorders.title'),
                  description: t('Neurology.treatments.items.movementDisorders.description')
                }
              ]
            },

            stats: {
              title: t('Neurology.stats.title'),
              items: [
                {
                  value: t('Neurology.stats.items.evaluations.value'),
                  label: t('Neurology.stats.items.evaluations.label')
                },
                {
                  value: t('Neurology.stats.items.satisfaction.value'),
                  label: t('Neurology.stats.items.satisfaction.label')
                },
                {
                  value: t('Neurology.stats.items.strokeCare.value'),
                  label: t('Neurology.stats.items.strokeCare.label')
                },
                {
                  value: t('Neurology.stats.items.services.value'),
                  label: t('Neurology.stats.items.services.label')
                }
              ]
            },

            team: {
              title: t('Neurology.team.title'),
              members: [
                {
                  name: t('Neurology.team.members.drTripurari.name'),
                  role: t('Neurology.team.members.drTripurari.role'),
                  credentials: t('Neurology.team.members.drTripurari.credentials'),
                  image: '/doctors/dr-tripurari-pandey.webp',
                  specialty: t('Neurology.team.members.drTripurari.specialty')
                },
                {
                  name: t('Neurology.team.members.drAnurag.name'),
                  role: t('Neurology.team.members.drAnurag.role'),
                  credentials: t('Neurology.team.members.drAnurag.credentials'),
                  image: '/doctors/dr-anurag-singh.webp',
                  specialty: t('Neurology.team.members.drAnurag.specialty')
                }
              ]
            },

            facilities: {
              title: t('Neurology.facilities.title'),
              description: t('Neurology.facilities.description'),
              features: [
                t('Neurology.facilities.features.0'),
                t('Neurology.facilities.features.1'),
                t('Neurology.facilities.features.2'),
                t('Neurology.facilities.features.3'),
                t('Neurology.facilities.features.4')
              ],
              image: '/fallback-image.webp',
            },

            research: {
              title: t('Neurology.research.title'),
              items: [
                {
                  title: t('Neurology.research.items.strokeRecovery.title'),
                  content: t('Neurology.research.items.strokeRecovery.content'),
                  icon: 'brain'
                },
                {
                  title: t('Neurology.research.items.neuroDegeneration.title'),
                  content: t('Neurology.research.items.neuroDegeneration.content'),
                  icon: 'microscope'
                },
                {
                  title: t('Neurology.research.items.headacheTherapies.title'),
                  content: t('Neurology.research.items.headacheTherapies.content'),
                  icon: 'head-side-virus'
                }
              ]
            },

            testimonials: {
              title: t('Neurology.testimonials.title'),
              items: [
                {
                  quote: t('Neurology.testimonials.items.anita.quote'),
                  author: t('Neurology.testimonials.items.anita.author'),
                  image: '/fallback-image.webp',
                },
                {
                  quote: t('Neurology.testimonials.items.vikram.quote'),
                  author: t('Neurology.testimonials.items.vikram.author'),
                  image: '/fallback-image.webp',
                }
              ]
            },

            cta: {
              title: t('Neurology.cta.title'),
              subtitle: t('Neurology.cta.subtitle'),
              buttons: [
                {
                  text: t('Neurology.cta.buttons.bookNow.text'),
                  isPrimary: true,
                },
                {
                  text: t('Neurology.cta.buttons.learnMore.text'),
                  isPrimary: false,
                }
              ]
            }
          },


        {
          id: 'neurosurgery',
          index: 3,
          name: 'Neurosurgery',
          slug: 'neurosurgery',
          heroImage: '/department/neurosurgery.jpg',
          bannerImage: '/department/neurology-banner.webp',
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
          bannerImage: '/department/gastroenterology-banner.jpg',
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
          heroImage: '/department/pediatrics.jpeg',
          bannerImage: '/department/nephrology-banner.jpg',
          heroTitle: '',
          isFeatured: false,
          heroSubtitle: '',

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
          heroImage: '/department/urology.jpeg',
          bannerImage: '/department/urology-banner.jpeg',
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
          heroImage: '/department/pediatrics.jpeg',
          bannerImage: '/department/orthopaedic-banner.jpg',
          heroTitle: '',
          isFeatured: false,
          heroSubtitle: '.',

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
            heroImage: '/department/anesthesia.jpg',
            bannerImage: '/department/anesthesia-banner.webp',
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
              image: '/department/anesthesia-facilities.webp'
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
            heroImage: '/department/general-surgery.webp',
            bannerImage: '/department/general-surgery.webp',
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
            heroImage: '/department/pediatrics.jpeg',
            bannerImage: '/department/pediatric-banner.jpeg',
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
            id: 'head-neck',
            index: 12,
            name: 'Head & Neck',
            slug: 'head-and-neck',
            heroImage: '/department/head-and-neck.jpeg',
            bannerImage: '/department/head-and-neck-banner.jpeg',
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
            heroImage: '/department/emergency.jpg',
            bannerImage: '/department/emergency-banner.jpg',
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
          },

          {
            id: 'diagnostic-imaging',
            index: 14,
            name: 'Diagnostic Imaging',
            slug: 'diagnostic-imaging',
            heroImage: '/department/diagnostic-imaging.webp',
            bannerImage: '/department/diagnostic-imaging-banner.webp',
            heroTitle: 'Advanced Diagnostic Imaging Services',
            heroSubtitle: 'Precision imaging for accurate diagnoses in Gorakhpur.',
            isFeatured: true,

            overview: {
              title: 'Our Imaging Approach',
              description: [
                'The Diagnostic Imaging department at Synergy Super Speciality Hospital utilizes cutting-edge technology to provide comprehensive imaging services.',
                'Our radiologists and technicians deliver high-quality diagnostic results with minimal patient discomfort using the latest imaging modalities.'
              ],
              whyChooseUs: [
                'Board-certified radiologists',
                'Advanced imaging technology',
                'Fast result turnaround',
                'Low-dose radiation protocols'
              ]
            },

            treatments: {
              title: 'Our Services',
              items: [
                {
                  title: 'MRI Scans',
                  description: 'High-resolution magnetic resonance imaging for soft tissue evaluation.'
                },
                {
                  title: 'CT Scans',
                  description: 'Advanced computed tomography with 3D reconstruction capabilities.'
                },
                {
                  title: 'Ultrasound',
                  description: 'Real-time imaging for abdominal, obstetric and vascular studies.'
                }
              ]
            },

            stats: {
              title: 'Imaging Statistics',
              items: [
                {
                  value: '30 min',
                  label: 'Average Scan Time'
                },
                {
                  value: '24/7',
                  label: 'Emergency Imaging Availability'
                },
                {
                  value: '98%',
                  label: 'Diagnostic Accuracy Rate'
                },
                {
                  value: '10+',
                  label: 'Imaging Modalities Available'
                }
              ]
            },

            team: {
              title: 'Our Imaging Team',
              members: [
                {
                  name: 'Dr. Rajesh Verma',
                  role: 'Chief Radiologist',
                  credentials: 'M.B.B.S, MD Radiology',
                  image: '/doctors/dr-rajesh-verma.webp',
                  specialty: 'Neuroimaging'
                }
              ]
            },

            facilities: {
              title: 'Imaging Facilities',
              description: 'Our department features state-of-the-art imaging technology for precise diagnostics.',
              features: [
                '1.5T MRI machine',
                '128-slice CT scanner',
                'Digital mammography',
                'Fluoroscopy suite',
                'PACS digital imaging system'
              ],
              image: '/imaging-facility.webp'
            },

            research: {
              title: 'Imaging Research',
              items: [
                {
                  title: 'AI-Assisted Diagnostics',
                  content: 'Developing machine learning tools for image analysis.',
                  icon: 'cpu'
                },
                {
                  title: 'Low-Dose Protocols',
                  content: 'Researching radiation reduction techniques.',
                  icon: 'radiation'
                },
                {
                  title: 'Functional Imaging',
                  content: 'Advancing dynamic assessment of organ function.',
                  icon: 'brain'
                }
              ]
            },

            testimonials: {
              title: 'Patient Experiences',
              items: [
                {
                  quote: 'The MRI was much quicker and less claustrophobic than I expected. The staff made me feel comfortable throughout.',
                  author: 'Anjali S.',
                  image: '/fallback-image.webp'
                },
                {
                  quote: 'The detailed CT scan identified my condition immediately, allowing for prompt treatment.',
                  author: 'Vikram P.',
                  image: '/fallback-image.webp'
                }
              ]
            },

            cta: {
              title: 'Advanced Imaging Services',
              subtitle: 'Schedule your diagnostic scan or walk-in for emergency imaging needs.',
              buttons: [
                {
                  text: 'Schedule Imaging',
                  isPrimary: true
                },
                {
                  text: 'View Preparation Guides',
                  isPrimary: false
                }
              ]
            }
          },

          {
            id: 'dialysis',
            index: 15,
            name: 'Dialysis',
            slug: 'dialysis',
            heroImage: '/dialysis-hero.webp',
            bannerImage: '/dialysis-hero-banner.webp',
            heroTitle: 'Comprehensive Renal Care Services',
            heroSubtitle: 'Advanced dialysis treatments for kidney health in Gorakhpur.',
            isFeatured: false,

            overview: {
              title: 'Our Dialysis Approach',
              description: [
                'The Dialysis Unit at Synergy Super Speciality Hospital provides life-sustaining treatments for patients with renal failure.',
                'Our nephrology team offers personalized dialysis regimens using the latest technology in a comfortable environment.'
              ],
              whyChooseUs: [
                'Experienced nephrologists',
                'Individualized treatment plans',
                'Advanced water purification',
                'Compassionate care'
              ]
            },

            treatments: {
              title: 'Our Services',
              items: [
                {
                  title: 'Hemodialysis',
                  description: 'Blood filtration using advanced dialysis machines.'
                },
                {
                  title: 'Peritoneal Dialysis',
                  description: 'Home dialysis training and support services.'
                },
                {
                  title: 'Continuous Renal Replacement',
                  description: 'Critical care dialysis for ICU patients.'
                }
              ]
            },

            stats: {
              title: 'Dialysis Statistics',
              items: [
                {
                  value: '15+',
                  label: 'Dialysis Stations'
                },
                {
                  value: '6 days',
                  label: 'Weekly Operation'
                },
                {
                  value: '95%',
                  label: 'Treatment Efficacy'
                },
                {
                  value: '500+',
                  label: 'Patients Served Monthly'
                }
              ]
            },

            team: {
              title: 'Our Nephrology Team',
              members: [
                {
                  name: 'Dr. Anindya Biswas',
                  role: 'Nephrologist',
                  credentials: 'MBBS, DNB,DrNB(NEFROLOGY), DEPARTMENT OF NEFROLOGY',
                  image: '/doctors/dr-anindya-biswas.webp',
                  specialty: 'Chronic Kidney Disease'
                }
              ]
            },

            facilities: {
              title: 'Dialysis Facilities',
              description: 'Our unit features advanced dialysis technology in a patient-centered environment.',
              features: [
                'High-flux dialysis machines',
                'Ultrapure water system',
                'Individual TV monitors',
                'Comfortable recliners',
                'Emergency response system'
              ],
              image: '/dialysis-unit.webp'
            },

            research: {
              title: 'Renal Research',
              items: [
                {
                  title: 'Vascular Access',
                  content: 'Improving fistula longevity and function.',
                  icon: 'heart-pulse'
                },
                {
                  title: 'Dialysis Adequacy',
                  content: 'Optimizing treatment protocols.',
                  icon: 'vial'
                },
                {
                  title: 'Anemia Management',
                  content: 'Reducing transfusion requirements.',
                  icon: 'droplet'
                }
              ]
            },

            testimonials: {
              title: 'Patient Experiences',
              items: [
                {
                  quote: 'The dialysis staff feels like family. They know exactly how to make my treatments comfortable.',
                  author: 'Mahesh K.',
                  image: '/fallback-image.webp'
                },
                {
                  quote: 'After my kidney failure, their expert care gave me back my quality of life.',
                  author: 'Priya R.',
                  image: '/fallback-image.webp'
                }
              ]
            },

            cta: {
              title: 'Renal Care Services',
              subtitle: 'Schedule dialysis treatments or consult with our nephrology team.',
              buttons: [
                {
                  text: 'Book Dialysis',
                  isPrimary: true
                },
                {
                  text: 'Learn About Options',
                  isPrimary: false
                }
              ]
            }
          },

          {
            id: 'radiology',
            index: 16,
            name: 'Radiology',
            slug: 'radiology',
            heroImage: '/radiology-hero.webp',
            bannerImage: '/radiology-hero-banner.webp',
            heroTitle: 'Comprehensive Radiology Services',
            heroSubtitle: 'Advanced diagnostic and interventional radiology in Gorakhpur.',
            isFeatured: false,

            overview: {
              title: 'Our Radiology Approach',
              description: [
                'The Radiology Department at Synergy Super Speciality Hospital provides both diagnostic and therapeutic imaging services.',
                'Our subspecialty-trained radiologists deliver precise interpretations using cutting-edge imaging technology.'
              ],
              whyChooseUs: [
                'Fellowship-trained radiologists',
                'Multidisciplinary approach',
                'Minimally invasive procedures',
                'Rapid reporting'
              ]
            },

            treatments: {
              title: 'Our Services',
              items: [
                {
                  title: 'Diagnostic Radiology',
                  description: 'X-ray, fluoroscopy and contrast studies for accurate diagnosis.'
                },
                {
                  title: 'Interventional Radiology',
                  description: 'Image-guided minimally invasive procedures.'
                },
                {
                  title: 'Nuclear Medicine',
                  description: 'Advanced molecular imaging and therapy.'
                }
              ]
            },

            stats: {
              title: 'Radiology Statistics',
              items: [
                {
                  value: '<2 hrs',
                  label: 'Stat Report Turnaround'
                },
                {
                  value: '15+',
                  label: 'Radiology Subspecialties'
                },
                {
                  value: '99%',
                  label: 'Procedure Success Rate'
                },
                {
                  value: '24/7',
                  label: 'Emergency Coverage'
                }
              ]
            },

            team: {
              title: 'Our Radiology Team',
              members: [
                {
                  name: 'Dr. Amit Patel',
                  role: 'Interventional Radiologist',
                  credentials: 'M.B.B.S, MD, DNB Radiology',
                  image: '/doctors/dr-amit-patel.webp',
                  specialty: 'Vascular Interventions'
                }
              ]
            },

            facilities: {
              title: 'Radiology Facilities',
              description: 'Our department features comprehensive imaging technology for diagnosis and treatment.',
              features: [
                'Digital radiography suites',
                'Angiography lab',
                'PET-CT scanner',
                'Bone densitometry',
                'Teleradiology capabilities'
              ],
              image: '/radiology-lab.webp'
            },

            research: {
              title: 'Radiology Research',
              items: [
                {
                  title: 'Image-Guided Therapy',
                  content: 'Developing new minimally invasive treatments.',
                  icon: 'syringe'
                },
                {
                  title: 'Contrast Optimization',
                  content: 'Reducing contrast media requirements.',
                  icon: 'vial'
                },
                {
                  title: 'AI in Radiology',
                  content: 'Implementing machine learning for image analysis.',
                  icon: 'cpu'
                }
              ]
            },

            testimonials: {
              title: 'Patient Experiences',
              items: [
                {
                  quote: 'The CT-guided biopsy was quick and painless, with precise results that guided my treatment.',
                  author: 'Rahul D.',
                  image: '/fallback-image.webp'
                },
                {
                  quote: 'Their interventional radiology procedure solved my problem without major surgery.',
                  author: 'Geeta M.',
                  image: '/fallback-image.webp'
                }
              ]
            },

            cta: {
              title: 'Advanced Radiology Services',
              subtitle: 'Schedule your imaging study or consult with our radiologists.',
              buttons: [
                {
                  text: 'Book Imaging',
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
            id: 'pathology',
            index: 17,
            name: 'Pathology',
            slug: 'pathology',
            heroImage: '/pathology-hero.webp',
            bannerImage: '/pathology-hero-banner.webp',
            heroTitle: 'Comprehensive Pathology Services',
            heroSubtitle: 'Precise diagnostic testing for accurate treatment in Gorakhpur.',
            isFeatured: false,

            overview: {
              title: 'Our Pathology Approach',
              description: [
                'The Pathology Department at Synergy Super Speciality Hospital provides comprehensive laboratory diagnostics.',
                'Our pathologists deliver accurate and timely results using advanced techniques and quality-controlled processes.'
              ],
              whyChooseUs: [
                'Board-certified pathologists',
                'CAP-accredited lab',
                'Rapid turnaround times',
                'Subspecialty expertise'
              ]
            },

            treatments: {
              title: 'Our Services',
              items: [
                {
                  title: 'Histopathology',
                  description: 'Tissue diagnosis for cancers and other diseases.'
                },
                {
                  title: 'Cytopathology',
                  description: 'Cell analysis including Pap smears and FNAC.'
                },
                {
                  title: 'Molecular Pathology',
                  description: 'Advanced genetic and molecular testing.'
                }
              ]
            },

            stats: {
              title: 'Pathology Statistics',
              items: [
                {
                  value: '24 hrs',
                  label: 'Routine Report Time'
                },
                {
                  value: '99.8%',
                  label: 'Test Accuracy'
                },
                {
                  value: '200+',
                  label: 'Available Tests'
                },
                {
                  value: 'NABL',
                  label: 'Accreditation'
                }
              ]
            },

            team: {
              title: 'Our Pathology Team',
              members: [
                {
                  name: 'Dr. Sunita Rao',
                  role: 'Pathologist',
                  credentials: 'M.B.B.S, MD Pathology',
                  image: '/doctors/dr-sunita-rao.webp',
                  specialty: 'Oncopathology'
                }
              ]
            },

            facilities: {
              title: 'Pathology Facilities',
              description: 'Our laboratory features advanced diagnostic technology with rigorous quality control.',
              features: [
                'Automated analyzers',
                'Immunohistochemistry lab',
                'Flow cytometry',
                'Molecular diagnostics',
                'Digital pathology'
              ],
              image: '/pathology-lab.webp'
            },

            research: {
              title: 'Pathology Research',
              items: [
                {
                  title: 'Cancer Biomarkers',
                  content: 'Identifying new diagnostic markers.',
                  icon: 'dna'
                },
                {
                  title: 'Digital Pathology',
                  content: 'Implementing AI for slide analysis.',
                  icon: 'cpu'
                },
                {
                  title: 'Liquid Biopsies',
                  content: 'Developing blood-based diagnostics.',
                  icon: 'vial'
                }
              ]
            },

            testimonials: {
              title: 'Patient Experiences',
              items: [
                {
                  quote: 'The detailed pathology report gave my oncologist exactly the information needed for my treatment plan.',
                  author: 'Arun T.',
                  image: '/fallback-image.webp'
                },
                {
                  quote: 'Quick and accurate test results helped diagnose my rare condition promptly.',
                  author: 'Meena K.',
                  image: '/fallback-image.webp'
                }
              ]
            },

            cta: {
              title: 'Precision Diagnostics',
              subtitle: 'Contact us for pathology services or test result inquiries.',
              buttons: [
                {
                  text: 'Request Testing',
                  isPrimary: true
                },
                {
                  text: 'Access Results',
                  isPrimary: false
                }
              ]
            }
          },

          {
            id: 'microbiology',
            index: 18,
            name: 'Microbiology',
            slug: 'microbiology',
            heroImage: '/microbiology-hero.webp',
            bannerImage: '/microbiology-hero-banner.webp',
            heroTitle: 'Advanced Microbiology Services',
            heroSubtitle: 'Comprehensive infectious disease diagnostics in Gorakhpur.',
            isFeatured: false,

            overview: {
              title: 'Our Microbiology Approach',
              description: [
                'The Microbiology Laboratory at Synergy Super Speciality Hospital provides comprehensive infectious disease testing.',
                'Our team identifies pathogens and provides antimicrobial susceptibility testing to guide effective treatment.'
              ],
              whyChooseUs: [
                'Expert microbiologists',
                'Rapid diagnostic methods',
                'Antimicrobial stewardship',
                'Infection control support'
              ]
            },

            treatments: {
              title: 'Our Services',
              items: [
                {
                  title: 'Culture & Sensitivity',
                  description: 'Identification of pathogens and effective antibiotics.'
                },
                {
                  title: 'Molecular Diagnostics',
                  description: 'PCR-based detection of microorganisms.'
                },
                {
                  title: 'Serology',
                  description: 'Antibody detection for infectious diseases.'
                }
              ]
            },

            stats: {
              title: 'Microbiology Statistics',
              items: [
                {
                  value: '48 hrs',
                  label: 'Average Culture Time'
                },
                {
                  value: '95%',
                  label: 'Identification Accuracy'
                },
                {
                  value: '100+',
                  label: 'Pathogens Tested'
                },
                {
                  value: '24/7',
                  label: 'Emergency Testing'
                }
              ]
            },

            team: {
              title: 'Our Microbiology Team',
              members: [
                {
                  name: 'Dr. Anil Kumar',
                  role: 'Microbiologist',
                  credentials: 'M.B.B.S, MD Microbiology',
                  image: '/doctors/dr-anil-kumar.webp',
                  specialty: 'Antimicrobial Resistance'
                }
              ]
            },

            facilities: {
              title: 'Microbiology Facilities',
              description: 'Our laboratory features advanced technology for comprehensive infectious disease testing.',
              features: [
                'Automated culture systems',
                'MALDI-TOF identification',
                'Molecular biology lab',
                'Biosafety level 2 containment',
                'Antimicrobial susceptibility testing'
              ],
              image: '/microbiology-lab.webp'
            },

            research: {
              title: 'Microbiology Research',
              items: [
                {
                  title: 'Antibiotic Resistance',
                  content: 'Tracking emerging resistance patterns.',
                  icon: 'bacteria'
                },
                {
                  title: 'Rapid Diagnostics',
                  content: 'Developing faster identification methods.',
                  icon: 'flask'
                },
                {
                  title: 'Hospital Epidemiology',
                  content: 'Studying infection transmission patterns.',
                  icon: 'chart-line'
                }
              ]
            },

            testimonials: {
              title: 'Patient Experiences',
              items: [
                {
                  quote: 'The microbiology team identified the exact bacteria causing my infection and which antibiotics would work best.',
                  author: 'Sanjay M.',
                  image: '/fallback-image.webp'
                },
                {
                  quote: 'Their rapid COVID-19 testing helped protect my elderly parents when I developed symptoms.',
                  author: 'Neha S.',
                  image: '/fallback-image.webp'
                }
              ]
            },

            cta: {
              title: 'Infection Diagnostics',
              subtitle: 'Contact us for microbiology testing or infection control consultation.',
              buttons: [
                {
                  text: 'Request Testing',
                  isPrimary: true
                },
                {
                  text: 'View Test Menu',
                  isPrimary: false
                }
              ]
            }
          },

          {
            id: 'biochemistry',
            index: 19,
            name: 'Biochemistry',
            slug: 'biochemistry',
            heroImage: '/biochemistry-hero.webp',
            bannerImage: '/biochemistry-hero-banner.webp',
            heroTitle: 'Comprehensive Biochemistry Services',
            heroSubtitle: 'Advanced metabolic and chemical pathology testing in Gorakhpur.',
            isFeatured: false,

            overview: {
              title: 'Our Biochemistry Approach',
              description: [
                'The Biochemistry Laboratory at Synergy Super Speciality Hospital provides comprehensive metabolic testing.',
                'Our automated analyzers and quality-controlled processes deliver accurate results for disease diagnosis and monitoring.'
              ],
              whyChooseUs: [
                'Automated analyzers',
                'Rapid turnaround',
                'Specialized testing',
                'Quality assurance'
              ]
            },

            treatments: {
              title: 'Our Services',
              items: [
                {
                  title: 'Routine Chemistry',
                  description: 'Comprehensive metabolic panels and electrolyte analysis.'
                },
                {
                  title: 'Endocrinology',
                  description: 'Hormone testing and endocrine function evaluation.'
                },
                {
                  title: 'Therapeutic Drug Monitoring',
                  description: 'Medication level testing for optimal dosing.'
                }
              ]
            },

            stats: {
              title: 'Biochemistry Statistics',
              items: [
                {
                  value: '2 hrs',
                  label: 'Routine Test Turnaround'
                },
                {
                  value: '99%',
                  label: 'Analytical Accuracy'
                },
                {
                  value: '150+',
                  label: 'Available Tests'
                },
                {
                  value: '24/7',
                  label: 'Emergency Testing'
                }
              ]
            },

            team: {
              title: 'Our Biochemistry Team',
              members: [
                {
                  name: 'Dr. Priya Singh',
                  role: 'Biochemist',
                  credentials: 'M.Sc, PhD Biochemistry',
                  image: '/doctors/dr-priya-singh.webp',
                  specialty: 'Metabolic Disorders'
                }
              ]
            },

            facilities: {
              title: 'Biochemistry Facilities',
              description: 'Our laboratory features state-of-the-art analyzers for precise biochemical testing.',
              features: [
                'Automated chemistry analyzers',
                'Electrolyte analyzers',
                'HbA1c testing',
                'Blood gas analysis',
                'Quality control systems'
              ],
              image: '/biochemistry-lab.webp'
            },

            research: {
              title: 'Biochemistry Research',
              items: [
                {
                  title: 'Cardiac Markers',
                  content: 'Evaluating new biomarkers for heart disease.',
                  icon: 'heart-pulse'
                },
                {
                  title: 'Diabetes Monitoring',
                  content: 'Improving glycemic control assessment.',
                  icon: 'vial'
                },
                {
                  title: 'Automation',
                  content: 'Enhancing laboratory efficiency.',
                  icon: 'cpu'
                }
              ]
            },

            testimonials: {
              title: 'Patient Experiences',
              items: [
                {
                  quote: 'The comprehensive metabolic panel gave my doctor a complete picture of my health status.',
                  author: 'Rakesh B.',
                  image: '/fallback-image.webp'
                },
                {
                  quote: 'Accurate and timely test results helped adjust my diabetes medication perfectly.',
                  author: 'Anita L.',
                  image: '/fallback-image.webp'
                }
              ]
            },

            cta: {
              title: 'Metabolic Testing',
              subtitle: 'Contact us for biochemistry testing or result inquiries.',
              buttons: [
                {
                  text: 'Request Tests',
                  isPrimary: true
                },
                {
                  text: 'View Test Prep',
                  isPrimary: false
                }
              ]
            }
          },

          {
            id: 'pain-and-palliative-care',
            index: 20,
            name: 'Pain & Palliative Care',
            slug: 'pain-and-palliative-care',
            heroImage: '/department/pain-and-palliative-care.jpeg',
            bannerImage: '/department/pain-and-palliative-care-banner.jpeg',
            heroTitle: 'Compassionate Pain Management & Palliative Care',
            heroSubtitle: 'Specialized care for chronic pain and serious illness in Gorakhpur.',
            isFeatured: true,

            overview: {
              title: 'Our Palliative Approach',
              description: [
                'The Pain & Palliative Care department at Synergy Super Speciality Hospital provides comprehensive care for patients with chronic pain and life-limiting illnesses.',
                'Our interdisciplinary team focuses on improving quality of life through expert pain management, symptom control, and psychosocial support for patients and families.'
              ],
              whyChooseUs: [
                'Board-certified pain specialists',
                'Personalized treatment plans',
                'Holistic approach to symptom management',
                'Emotional and spiritual support services'
              ]
            },

            treatments: {
              title: 'Our Services',
              items: [
                {
                  title: 'Chronic Pain Management',
                  description: 'Multimodal approaches for persistent pain conditions'
                },
                {
                  title: 'Symptom Control',
                  description: 'Expert management of pain, nausea, fatigue and other symptoms'
                },
                {
                  title: 'End-of-Life Care',
                  description: 'Compassionate care focused on comfort and dignity'
                }
              ]
            },

            stats: {
              title: 'Palliative Care Statistics',
              items: [
                {
                  value: '90%',
                  label: 'Patients Report Improved Pain Control'
                },
                {
                  value: '24/7',
                  label: 'On-Call Support Available'
                },
                {
                  value: '98%',
                  label: 'Family Satisfaction Rate'
                },
                {
                  value: '50+',
                  label: 'Pain Management Protocols'
                }
              ]
            },

            team: {
              title: 'Our Palliative Care Team',
              members: [
                {
                  name: 'Dr. Anjali Verma',
                  role: 'Palliative Care Specialist',
                  credentials: 'M.B.B.S, MD (Pain Medicine), Fellowship in Palliative Care',
                  image: '/doctors/dr-anjali-verma.webp',
                  specialty: 'Cancer Pain Management'
                },
                {
                  name: 'Dr. Rajiv Khanna',
                  role: 'Pain Management Physician',
                  credentials: 'M.B.B.S, DA, FIPM',
                  image: '/doctors/dr-rajiv-khanna.webp',
                  specialty: 'Interventional Pain Procedures'
                }
              ]
            },

            facilities: {
              title: 'Palliative Care Facilities',
              description: 'Our department provides a healing environment with specialized equipment for comprehensive pain and symptom management.',
              features: [
                'Dedicated pain management clinic',
                'Procedure room for nerve blocks',
                'Comfortable family consultation rooms',
                'Palliative care inpatient unit',
                '24/7 pain management support'
              ],
              image: '/fallback-image.webp'
            },

            research: {
              title: 'Pain Medicine Research',
              items: [
                {
                  title: 'Novel Analgesics',
                  content: 'Studying new approaches to opioid-sparing pain control.',
                  icon: 'flask'
                },
                {
                  title: 'Quality of Life Metrics',
                  content: 'Developing better measurement tools for palliative outcomes.',
                  icon: 'chart-line'
                },
                {
                  title: 'Interventional Techniques',
                  content: 'Researching minimally invasive pain procedures.',
                  icon: 'microscope'
                }
              ]
            },

            testimonials: {
              title: 'Patient Experiences',
              items: [
                {
                  quote: 'After years of chronic back pain, the team developed a plan that finally gave me relief and my life back.',
                  author: 'Vikram S.',
                  image: '/fallback-image.webp'
                },
                {
                  quote: 'The compassionate care my mother received in her final days brought comfort to our whole family.',
                  author: 'Priya K.',
                  image: '/fallback-image.webp'
                }
              ]
            },

            cta: {
              title: 'Compassionate Care When You Need It Most',
              subtitle: 'Consultations available for pain management and palliative care services.',
              buttons: [
                {
                  text: 'Schedule Consultation',
                  isPrimary: true
                },
                {
                  text: 'Learn About Our Approach',
                  isPrimary: false
                }
              ]
            }
          }
    ]

    return departmentData
}
