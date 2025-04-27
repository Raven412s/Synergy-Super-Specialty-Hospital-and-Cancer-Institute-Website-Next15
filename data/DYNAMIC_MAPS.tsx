// MAPS FOR DYNAMIC PAGES

import LeadershipPage from "@/components/Modules/discover-synergy/leadership/LeadershipPage"
import { leaderAlokTiwari, leaderAnjaliJain, leaderSaurabhMishra } from "."
import { DoctorsPage } from "@/components/Modules/discover-synergy/doctors/DoctorsPage"
import DepartmentPage from "@/components/Modules/services/SingleServicePage"
import ServicesPage from "@/components/Modules/services/ServicesPage"
import { Pharmacy } from "@/components/Modules/services/support-services/Pharmacy"
import BloodBank from "@/components/Modules/services/support-services/BloodBank"
import { Dietary } from "@/components/Modules/services/support-services/Dietary"
import { Laundry } from "@/components/Modules/services/support-services/Laundry"
import { HouseKeeping } from "@/components/Modules/services/support-services/HouseKeeping"
import { Security } from "@/components/Modules/services/support-services/Security"
import Ambulance from "@/components/Modules/services/support-services/Ambulance"
import SupportServicesPage from "@/components/Modules/services/support-services/SupportServicesPage"
import { DiagnosticImaging } from "@/components/Modules/services/support-services/DiagnosticImaging"
import { Physiotherapy } from "@/components/Modules/services/support-services/Physiotherapy"
import { Dialysis } from "@/components/Modules/services/support-services/Dialysis"
import { EmergencyCare } from "@/components/Modules/patient-care/EmergencyCare"
import { SecondOpinion } from "@/components/Modules/patient-care/SecondOpinion"
import { InPatientFacilities } from "@/components/Modules/patient-care/InPatientFacilities"
import { OutPatientClinic } from "@/components/Modules/patient-care/OutPatientClinic"
import HealthChecks from "@/components/Modules/patient-care/HealthChecks"
import Insurance from "@/components/Modules/patient-care/Insurance"
import { BreastCancer } from "@/components/Modules/health-library/types-of-cancer/BreastCancer"
import { ProstateCancer } from "@/components/Modules/health-library/types-of-cancer/ProstateCancer"
import { LungCancer } from "@/components/Modules/health-library/types-of-cancer/LungCancer"
import { CervicalCancer } from "@/components/Modules/health-library/types-of-cancer/CervicalCancer"
import { BloodCancer } from "@/components/Modules/health-library/types-of-cancer/BloodCancer"
import { AdrenalCancer } from "@/components/Modules/health-library/types-of-cancer/AdrenalCancer"
import { AnalCancer } from "@/components/Modules/health-library/types-of-cancer/AnalCancer"
import { BileDuctCancer } from "@/components/Modules/health-library/types-of-cancer/BileDuctCancer"
import { BladderCancer } from "@/components/Modules/health-library/types-of-cancer/BladderCancer"
import { BoneCancer } from "@/components/Modules/health-library/types-of-cancer/BoneCancer"
import { BrainCancer } from "@/components/Modules/health-library/types-of-cancer/BrainCancer"
import { BreastCancerInMen } from "@/components/Modules/health-library/types-of-cancer/BreastCancerInMen"
import { ColonRectalCancer } from "@/components/Modules/health-library/types-of-cancer/ColonRectalCancer"
import { EndometrialCancer } from "@/components/Modules/health-library/types-of-cancer/EndometrialCancer"
import { EsophagealCancer } from "@/components/Modules/health-library/types-of-cancer/EsophagealCancer"
import { EyeCancer } from "@/components/Modules/health-library/types-of-cancer/EyeCancer"
import { GallbladderCancer } from "@/components/Modules/health-library/types-of-cancer/GallbladderCancer"
import { GastricCancer } from "@/components/Modules/health-library/types-of-cancer/GastricCancer"
import { HeadAndNeckCancer } from "@/components/Modules/health-library/types-of-cancer/HeadAndNeckCancer"
import { KidneyCancer } from "@/components/Modules/health-library/types-of-cancer/KidneyCancer"
import { LaryngealCancer } from "@/components/Modules/health-library/types-of-cancer/LaryngealCancer"
import { LiverCancer } from "@/components/Modules/health-library/types-of-cancer/LiverCancer"
import { MultipleMyeloma } from "@/components/Modules/health-library/types-of-cancer/MultipleMyeloma"
import { NeuroendocrineTumors } from "@/components/Modules/health-library/types-of-cancer/NeuroendocrineTumors"
import { NonHodgkinLymphoma } from "@/components/Modules/health-library/types-of-cancer/NonHodgkinLymphoma"
import { OralCancer } from "@/components/Modules/health-library/types-of-cancer/OralCancer"
import { OvarianCancer } from "@/components/Modules/health-library/types-of-cancer/OvarianCancer"
import { PancreaticCancer } from "@/components/Modules/health-library/types-of-cancer/PancreaticCancer"
import { PenileCancer } from "@/components/Modules/health-library/types-of-cancer/PenileCancer"
import { PituitaryTumors } from "@/components/Modules/health-library/types-of-cancer/PituitaryTumors"
import { SalivaryGlandCancer } from "@/components/Modules/health-library/types-of-cancer/SalivaryGlandCancer"
import { SkinCancer } from "@/components/Modules/health-library/types-of-cancer/SkinCancer"
import { StomachCancer } from "@/components/Modules/health-library/types-of-cancer/StomachCancer"
import { UterineCancer } from "@/components/Modules/health-library/types-of-cancer/UterineCancer"
import { CancerPrevention } from "@/components/Modules/health-library/patient-education/CancerPrevention"
import { DiagnosisAndStaging } from "@/components/Modules/health-library/patient-education/DiagnosisAndStaging"
import { TreatmentOptions } from "@/components/Modules/health-library/patient-education/TreatmentOptions"
import { NutritionAndWellness } from "@/components/Modules/health-library/patient-education/NutritionAndWellness"
import { Faqs } from "@/components/Modules/health-library/faqs/Faqs"
import { PatientTestimonials } from "@/components/homepage/PatientTestimonials"
import { VictoryStories } from "@/components/Modules/cancer-survivors/stories-of-hope/VictoryStories"
import { VideoMessages } from "@/components/Modules/cancer-survivors/stories-of-hope/VideoMessages"
import { CounselingAndMentalHealth } from "@/components/Modules/cancer-survivors/support-programs/CounselingAndMentalHealth"
import { RehabilationPrograms } from "@/components/Modules/cancer-survivors/support-programs/RehabilationPrograms"
import { SurvivorshipClinics } from "@/components/Modules/cancer-survivors/support-programs/SurvivorshipClinics"
import { Volunteer } from "@/components/Modules/cancer-survivors/get-involved/Volunteer"
import { AwarenessCampaigns } from "@/components/Modules/cancer-survivors/get-involved/AwarenessCampaigns"
import DiagnosticServices from "@/components/Modules/services/DiagnosticServices"

export const LeadershipMap = {
    "Dr-Alok-Tiwari": <LeadershipPage {...leaderAlokTiwari} />,
    "Dr-Anjali-Jain": <LeadershipPage {...leaderAnjaliJain} />,
    "Dr-Saurabh-Mishra": <LeadershipPage {...leaderSaurabhMishra} />
}

export const DoctorsMap = {
    "Dr-Alok-Tiwari": <DoctorsPage />,
    "Dr-Anjali-Jain": <DoctorsPage />,
    "Dr-Saurabh-Mishra": <DoctorsPage />,
    "all": <DoctorsPage />,
}

export const ServicesMap = {
    "medical-oncology": <DepartmentPage />,
    "surgical-oncology": <DepartmentPage />,
    "neurology": <DepartmentPage />,
    "neurosurgery": <DepartmentPage />,
    "gastroenterology": <DepartmentPage />,
    "nephrology": <DepartmentPage />,
    "urology": <DepartmentPage />,
    "orthopedics": <DepartmentPage />,
    "anesthesia": <DepartmentPage />,
    "general-surgery": <DepartmentPage />,
    "pediatrics": <DepartmentPage />,
    "gynecology": <DepartmentPage />,
    "head-and-neck": <DepartmentPage />,
    "emergency-and-critical-care": <DepartmentPage />,
    "pain-and-palliative-care": <DepartmentPage />,
    "all": <ServicesPage />,
    // "cardiology": <DepartmentPage />,
    // "hepatology": <DepartmentPage />,
    // "rheumatology": <DepartmentPage />,
    // "endocrinology": <DepartmentPage />,
    // "pulmonology": <DepartmentPage />,
    // "dermatology": <DepartmentPage />,
    // "ent": <DepartmentPage />,
    // "ophthalmology": <DepartmentPage />,
    // "internal-medicine": <DepartmentPage />,
    // "psychiatry": <DepartmentPage />,

    // Support Services
    pharmacy: <Pharmacy />,
    "blood-bank": <BloodBank />,
    "dietary": <Dietary />,
    "laundry": <Laundry />,
    "house-keeping": <HouseKeeping />,
    "security": <Security />,
    ambulance: <Ambulance />,
    "support-services": <SupportServicesPage />,

    // Diagnostic Services
    "diagnostic-imaging": <DepartmentPage />,
    "dialysis": <DepartmentPage />,
    "radiology": <DepartmentPage />,
    "pathology": <DepartmentPage />,
    "microbiology": <DepartmentPage />,
    "biochemistry": <DepartmentPage />,
    "diagnostic-services": <DiagnosticServices />,

    // Specialized Services
    "icu": <DiagnosticImaging />,
    "nicu": <Physiotherapy />,
    "operation-theater": <Dialysis />,
    "endoscopy": <Dialysis />,
    "physiotherapy": <Physiotherapy />,
    "specialized-services": <Dialysis />,

    // Specialized Services
    "admission-and-discharge": <DiagnosticImaging />,
    "billing-and-insurance": <Physiotherapy />,
    "medical-records": <Dialysis />,
    "customer-care": <Dialysis />,
    "administrative-services": <Dialysis />,
}

export const PatientCareMap = {
    emergency: <EmergencyCare />,
    "second-opinion": <SecondOpinion />,
    "in-patient": <InPatientFacilities />,
    "out-patient": <OutPatientClinic />,
    "health-checks": <HealthChecks />,
    "insurance": <Insurance />,
}

export const HealthLibraryMap = {
    "breast-cancer": <BreastCancer />,
    "prostate-cancer": <ProstateCancer />,
    "lung-cancer": <LungCancer />,
    "cervical-cancer": <CervicalCancer />,
    "blood-cancer": <BloodCancer />,
    "adrenal-cancer": <AdrenalCancer />,
    "anal-cancer": <AnalCancer />,
    "bile-duct-cancer": <BileDuctCancer />,
    "bladder-cancer": <BladderCancer />,
    "bone-cancer": <BoneCancer />,
    "brain-cancer": <BrainCancer />,
    "breast-cancer-in-men": <BreastCancerInMen />,
    "colon-rectal-cancer": <ColonRectalCancer />,
    "endometrial-cancer": <EndometrialCancer />,
    "esophageal-cancer": <EsophagealCancer />,
    "eye-cancer": <EyeCancer />,
    "gallbladder-cancer": <GallbladderCancer />,
    "gastric-cancer": <GastricCancer />,
    "head-and-neck-cancer": <HeadAndNeckCancer />,
    "kidney-cancer": <KidneyCancer />,
    "laryngeal-cancer": <LaryngealCancer />,
    "liver-cancer": <LiverCancer />,
    "multiple-myeloma": <MultipleMyeloma />,
    "neuroendocrine-tumors": <NeuroendocrineTumors />,
    "non-hodgkin-lymphoma": <NonHodgkinLymphoma />,
    "oral-cancer": <OralCancer />,
    "ovarian-cancer": <OvarianCancer />,
    "pancreatic-cancer": <PancreaticCancer />,
    "penile-cancer": <PenileCancer />,
    "pituitary-tumors": <PituitaryTumors />,
    "salivary-gland-cancer": <SalivaryGlandCancer />,
    "skin-cancer": <SkinCancer />,
    "stomach-cancer": <StomachCancer />,
    "uterine-cancer": <UterineCancer />,
    prevention: <CancerPrevention />,
    diagnosis: <DiagnosisAndStaging />,
    treatments: <TreatmentOptions />,
    nutrition: <NutritionAndWellness />,
    faqs: <Faqs />
}

export const CancerSurvivorsMap = {
    testimonials: <PatientTestimonials />,
    "victory-stories": <VictoryStories />,
    videos: <VideoMessages />,
    counseling: <CounselingAndMentalHealth />,
    rehab: <RehabilationPrograms />,
    clinics: <SurvivorshipClinics />,
    volunteer: <Volunteer />,
    awareness: <AwarenessCampaigns />,
}
