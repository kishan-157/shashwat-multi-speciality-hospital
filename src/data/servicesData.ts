import { MedicalService } from '../types';

export const MEDICAL_SERVICES: MedicalService[] = [
  {
    id: "emergency-trauma-care",
    title: "24x7 Emergency & Trauma Care",
    category: "Emergency & Critical",
    shortDescription: "Immediate resuscitation, dedicated casualty triage, and 24-hour critical surgical response.",
    fullDescription: "Our round-the-clock emergency and trauma department is prepared for acute medical emergencies, road accidents, polytrauma, cardiac events, and acute respiratory failure with on-duty casualty medical officers and immediate specialist on-call dispatch.",
    features: [
      "24x7 Casualty & resuscitation bays",
      "Dedicated emergency minor OT",
      "Immediate trauma life support (ATLS protocols)",
      "Instant access to Digital X-Ray & ICU"
    ],
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    is24x7: true,
    department: "Emergency Medicine"
  },
  {
    id: "icu-critical-care",
    title: "ICU & Ventilator Critical Care",
    category: "Emergency & Critical",
    shortDescription: "Advanced multi-bed intensive care unit equipped with invasive/non-invasive ventilators.",
    fullDescription: "A state-of-the-art intensive care unit managed by critical care physicians and trained ICU nursing staff. Designed with central oxygen, multi-parameter monitors, defibrillators, arterial blood gas support, and strict sterile barrier protocols.",
    features: [
      "Invasive and non-invasive mechanical ventilators",
      "Continuous multi-parameter cardiac & vital monitoring",
      "Central pipeline suction & oxygen systems",
      "1:1 dedicated nursing ratio for critical patients"
    ],
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80",
    is24x7: true,
    department: "Critical Care"
  },
  {
    id: "modular-operation-theatre",
    title: "Modular Operation Theatres",
    category: "Surgical Specialties",
    shortDescription: "Ultra-clean surgical suites with laminar airflow and HEPA filtration for infection-free procedures.",
    fullDescription: "Built to stringent international surgical standards, our modular operation theatres feature laminar airflow ceilings, surgical pendants, advanced anaesthesia workstations, electrocautery, and high-definition laparoscopy towers.",
    features: [
      "True laminar airflow with HEPA filtration",
      "Advanced multi-gas anaesthesia workstations",
      "Full HD Laparoscopic camera stack",
      "Comprehensive surgical monitoring & sterilization autoclave"
    ],
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80",
    is24x7: true,
    department: "Surgical Suite"
  },
  {
    id: "orthopaedics-joint-surgery",
    title: "Orthopaedics & Joint Surgery",
    category: "Surgical Specialties",
    shortDescription: "Joint replacements, complex fracture reconstruction, arthroscopic procedures, and spine care.",
    fullDescription: "Headed by Dr. Deepak Kalamkar, our orthopaedic department delivers compassionate, modern care for musculoskeletal disorders. From high-energy trauma fixations to Total Knee and Hip Replacements, we focus on restoring painless mobility.",
    features: [
      "Total Knee & Total Hip Arthroplasty (Joint Replacement)",
      "Complex intra-articular fracture reconstructions",
      "Arthroscopic ligament repairs (ACL / Meniscus)",
      "Spine pain and disc decompression therapies"
    ],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    department: "Orthopaedics"
  },
  {
    id: "general-laparoscopic-surgery",
    title: "General & Laparoscopic Surgery",
    category: "Surgical Specialties",
    shortDescription: "Minimally invasive keyhole surgeries ensuring faster recovery, minimal pain, and smaller scars.",
    fullDescription: "Led by Dr. Vishwajit Pawar (FIAGE, FMAS), our laparoscopic wing offers minimal-access abdominal procedures. Patients benefit from shorter hospital stays, less tissue trauma, and quick return to work.",
    features: [
      "Laparoscopic Cholecystectomy (Gallstone surgery)",
      "Laparoscopic Inguinal & Ventral Hernia Repairs",
      "Laparoscopic Appendectomy",
      "Laser and conventional surgery for piles, fissure & fistula"
    ],
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80",
    department: "General Surgery"
  },
  {
    id: "obstetrics-gynaecology-care",
    title: "Obstetrics & High-Risk Pregnancy",
    category: "Maternal & Women",
    shortDescription: "Comprehensive prenatal care, normal and painless deliveries, and advanced fetal monitoring.",
    fullDescription: "Under Dr. Yogita Darekar Pawar and Dr. Apoorva Mate-Kalamkar, our maternal department provides loving, evidence-based care for mothers and newborns. We are equipped for both routine deliveries and complex high-risk obstetric emergencies.",
    features: [
      "Antenatal check-ups & maternal fetal surveillance",
      "Painless normal delivery and emergency Lower Segment Cesarean Sections (LSCS)",
      "Management of gestational hypertension & gestational diabetes",
      "Postnatal recovery & newborn stabilization nursery"
    ],
    image: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&w=800&q=80",
    is24x7: true,
    department: "Obstetrics & Gynaecology"
  },
  {
    id: "gynaecology-infertility-clinic",
    title: "Gynaecology & Infertility Care",
    category: "Maternal & Women",
    shortDescription: "Endoscopic gynaecology, fertility evaluations, PCOS management, and adolescent health.",
    fullDescription: "Providing personalized diagnostic hysteroscopy, uterine fibroid management, endometriosis relief, fertility counselling, and hormonal balancing for women at every stage of life.",
    features: [
      "Infertility workup & follicle monitoring",
      "Diagnostic and operative hysteroscopy",
      "Treatment for ovarian cysts, fibroids, and endometriosis",
      "Pap smear screening & cervical cancer vaccination guidance"
    ],
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    department: "Obstetrics & Gynaecology"
  },
  {
    id: "nephrology-dialysis-care",
    title: "Nephrology & Haemodialysis Unit",
    category: "Specialty Medicine",
    shortDescription: "Dedicated maintenance dialysis stations supervised by Kidney Specialist Dr. Akash Berad.",
    fullDescription: "Our renal care unit provides compassionate support for chronic kidney disease (CKD) and acute kidney injury. Features cutting-edge dialysis machines, advanced Reverse Osmosis (RO) purified water plants, and strict infection control.",
    features: [
      "Modern haemodialysis machines with bicarbonate delivery",
      "Dedicated beds with individualized vital monitoring",
      "Management of dialysis vascular access (AV Fistula / Permcath)",
      "Kidney disease staging and pre-transplant workup"
    ],
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
    department: "Nephrology"
  },
  {
    id: "general-medicine-diabetology",
    title: "General Medicine & Diabetology",
    category: "Specialty Medicine",
    shortDescription: "Expert physician consultation for diabetes, hypertension, fever, and multi-system illness.",
    fullDescription: "Led by Dr. Pradeep Kanthali, our general medicine department focuses on accurate diagnosis, holistic disease management, preventative lifestyle counseling, and effective stabilization of complex lifestyle illnesses.",
    features: [
      "Comprehensive diabetes & metabolic syndrome management",
      "Hypertension, lipid disorder & cardiovascular risk screening",
      "Treatment for Dengue, Malaria, Typhoid, and viral fevers",
      "Geriatric medicine & adult vaccination"
    ],
    image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=800&q=80",
    department: "General Medicine"
  },
  {
    id: "digital-xray-imaging",
    title: "Digital X-Ray & Radiology",
    category: "Diagnostics & Support",
    shortDescription: "High-resolution digital radiography for immediate bone, chest, and abdominal imaging.",
    fullDescription: "Equipped with state-of-the-art high-frequency digital radiography equipment delivering crystal-clear images with minimal radiation exposure for rapid diagnostic decision-making.",
    features: [
      "Full-body musculoskeletal and chest digital radiography",
      "Instant computerized radiographic reporting",
      "Orthopedic joint alignment views",
      "24x7 emergency radiology availability"
    ],
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    is24x7: true,
    department: "Radiology"
  },
  {
    id: "echo-ecg-cardiac",
    title: "2D Echocardiography & ECG",
    category: "Diagnostics & Support",
    shortDescription: "Non-invasive cardiac evaluation including 12-lead ECG and color Doppler echocardiogram.",
    fullDescription: "Crucial cardiac diagnostics for assessing heart muscle function, valve health, congenital defects, and ischemic heart disease indicators before surgical clearance or emergency care.",
    features: [
      "12-Lead digital computerized electrocardiogram (ECG)",
      "2D Echocardiography with color Doppler analysis",
      "Pre-operative cardiac risk stratification",
      "Bedside cardiac diagnostics for ICU patients"
    ],
    image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=800&q=80",
    is24x7: true,
    department: "Cardiology Diagnostics"
  },
  {
    id: "pathology-clinical-laboratory",
    title: "In-House Pathology Laboratory",
    category: "Diagnostics & Support",
    shortDescription: "Fully automated biochemistry, haematology, serology, and clinical pathology tests.",
    fullDescription: "Accredited quality protocols ensuring rapid and precise reports for blood counts, renal function, liver enzymes, electrolytes, cardiac markers, and hormonal profiles.",
    features: [
      "Complete Blood Count (CBC) on automated 5-part analyzer",
      "Renal Function Test (RFT) & Liver Function Test (LFT)",
      "Cardiac enzymes (Troponin, CK-MB) for rapid triage",
      "Urine routine & specialized microscopic analysis"
    ],
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
    is24x7: true,
    department: "Pathology"
  },
  {
    id: "inhouse-pharmacy-247",
    title: "24-Hour In-House Pharmacy",
    category: "Diagnostics & Support",
    shortDescription: "Round-the-clock dispensing of verified genuine pharmaceuticals, surgicals, and life-saving drugs.",
    fullDescription: "Stocked with comprehensive emergency medications, antibiotics, surgical implants, critical care infusions, and routine outpatient prescriptions, operated by licensed pharmacists.",
    features: [
      "Open 24 hours a day, 365 days a year",
      "Complete inventory of critical care and surgical supplies",
      "Proper cold chain storage for vaccines and insulins",
      "Direct dispensing for both IPD and OPD patients"
    ],
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80",
    is24x7: true,
    department: "Pharmacy"
  },
  {
    id: "emergency-ambulance-service",
    title: "24/7 Ambulance & Patient Transport",
    category: "Emergency & Critical",
    shortDescription: "Rapid response medical ambulance equipped with oxygen, stretchers, and emergency support.",
    fullDescription: "Ensuring timely pre-hospital transport for trauma patients, cardiac crises, and critical transfers from surrounding Ahmednagar districts directly to our emergency casualty.",
    features: [
      "Oxygen cylinder and suction units onboard",
      "Foldable stretcher and spine board for trauma immobilization",
      "Trained paramedic on-call for transit monitoring",
      "Instant dispatch via emergency hotline +91 98679 87698"
    ],
    image: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&w=800&q=80",
    is24x7: true,
    department: "Emergency Medicine"
  },
  {
    id: "cashless-mediclaim-desk",
    title: "Cashless Mediclaim & Insurance Desk",
    category: "Diagnostics & Support",
    shortDescription: "Hassle-free insurance claim processing, pre-authorization, and tie-ups with leading TPAs.",
    fullDescription: "Dedicated staff assisting patients with health insurance documentation, TPA coordination, cashless hospitalization approvals, and reimbursement claims.",
    features: [
      "Tie-ups with leading private & government insurance TPAs",
      "On-desk support for pre-authorization paperwork",
      "Transparent billing with no hidden hospital charges",
      "Emergency cashless claim filing assistance"
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    department: "Hospital Administration"
  },
  {
    id: "executive-health-checkups",
    title: "Preventive Health Check-Up Packages",
    category: "Specialty Medicine",
    shortDescription: "Curated comprehensive health screening packages for men, women, seniors, and executives.",
    fullDescription: "Early detection saves lives. Our comprehensive packages assess cardiovascular, renal, metabolic, and liver health with consolidated specialist review in a single convenient visit.",
    features: [
      "Basic, Comprehensive & Senior Citizen profiles",
      "Includes ECG, X-Ray, Blood profiles, and Doctor review",
      "Personalized lifestyle & dietary recommendations",
      "Same-day digital test reports"
    ],
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
    department: "Preventive Healthcare"
  }
];

export const DEPARTMENTS = [
  {
    id: "ortho",
    name: "Orthopaedics & Joint Surgery",
    tagline: "Restoring Mobility & Relieving Pain",
    description: "Specialized care for joint replacements, complex fractures, arthroscopy, and spine disorders.",
    keyTreatments: ["Knee & Hip Replacement", "Complex Fracture Fixation", "Arthroscopic Surgery", "Spine Pain Therapy"],
    leadSpecialist: "Dr. Deepak Kalamkar (MBBS, D.Ortho)"
  },
  {
    id: "obgy",
    name: "Obstetrics & Gynaecology",
    tagline: "Dedicated Care for Mothers & Women",
    description: "Comprehensive antenatal care, painless deliveries, high-risk pregnancy, and infertility workup.",
    keyTreatments: ["Normal & High-Risk Delivery", "Hysteroscopy & Endoscopy", "Infertility Management", "PCOS & Menopause Care"],
    leadSpecialist: "Dr. Yogita Darekar Pawar & Dr. Apoorva Mate-Kalamkar"
  },
  {
    id: "surgery",
    name: "General & Laparoscopic Surgery",
    tagline: "Advanced Minimal-Invasive Surgery",
    description: "Modern keyhole surgeries with tiny incisions, minimal post-operative pain, and rapid discharge.",
    keyTreatments: ["Laparoscopic Gallbladder", "Hernia Mesh Repair", "Appendectomy", "Trauma & Emergency Surgery"],
    leadSpecialist: "Dr. Vishwajit Pawar (MBBS, MS, FIAGE, FMAS)"
  },
  {
    id: "nephro",
    name: "Nephrology & Dialysis",
    tagline: "Precision Renal Medicine & Dialysis",
    description: "Expert kidney disease management, maintenance haemodialysis, and pre-transplant workup.",
    keyTreatments: ["Maintenance Haemodialysis", "Chronic Kidney Disease Care", "Hypertensive Renal Disease", "Dialysis Access Management"],
    leadSpecialist: "Dr. Akash Berad (MBBS, MD, DNB, FICN)"
  },
  {
    id: "medicine",
    name: "General Medicine & Critical Care",
    tagline: "Comprehensive Physician & ICU Care",
    description: "Expert diagnosis for acute and chronic internal diseases, diabetes, infectious illnesses, and ICU care.",
    keyTreatments: ["Diabetes & Hypertension", "ICU Sepsis & Critical Care", "Fever & Infectious Diseases", "Multi-Organ Management"],
    leadSpecialist: "Dr. Pradeep Kanthali (Consultant Physician)"
  },
  {
    id: "diagnostics",
    name: "Radiology & Pathology Lab",
    tagline: "24x7 Precise Diagnostic Insight",
    description: "Digital X-Ray, 2D Echo, computerized ECG, and fully automated in-house pathology laboratory.",
    keyTreatments: ["Digital X-Ray Imaging", "2D Color Doppler Echo", "Automated Pathology Testing", "12-Lead Digital ECG"],
    leadSpecialist: "Dedicated Diagnostic Technicians & Panel"
  }
];
