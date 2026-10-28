import { Facility } from '../types';

export const HOSPITAL_FACILITIES: Facility[] = [
  {
    id: "modular-ot-facility",
    title: "State-of-the-Art Modular Operation Theatre",
    shortDescription: "Ultra-sterile surgical environment with vertical laminar airflow and HEPA filters.",
    fullDescription: "Designed to minimize surgical site infections, our modular operating theatre is equipped with positive pressure ventilation, surgical pendants, anti-static flooring, high-definition laparoscopy towers, and advanced anaesthetic workstations.",
    features: [
      "Ultra-clean Laminar Airflow with 0.3-micron HEPA filters",
      "Full HD Laparoscopic camera system and LED surgical lights",
      "Advanced multi-gas anaesthesia workstation with ventilator backup",
      "Continuous sterile air change cycle and anti-bacterial surfaces"
    ],
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80",
    highlightBadge: "Zero-Infection Protocol"
  },
  {
    id: "icu-critical-unit",
    title: "Advanced Intensive Care Unit (ICU)",
    shortDescription: "Dedicated multi-bed critical care unit with invasive/non-invasive mechanical ventilators.",
    fullDescription: "Supervised by experienced intensivists and critical care physicians, our ICU caters to post-operative recovery, severe trauma, septic shock, acute respiratory distress, and multi-organ dysfunction with round-the-clock intensive vital monitoring.",
    features: [
      "High-end invasive & non-invasive mechanical ventilators",
      "Multipara cardiac monitors with central nursing telemetry",
      "Arterial blood gas (ABG) monitoring & central venous line care",
      "Defibrillator, crash cart, and emergency infusion syringe pumps"
    ],
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80",
    highlightBadge: "24x7 Intensivist Supervised"
  },
  {
    id: "dialysis-wing-facility",
    title: "Dedicated Haemodialysis Unit",
    shortDescription: "Modern dialysis stations backed by specialized reverse osmosis (RO) water purification.",
    fullDescription: "Supervised by Kidney Disease & Transplant Specialist Dr. Akash Berad, our dialysis wing offers safe maintenance haemodialysis for chronic renal failure and acute dialysis support for critical patients.",
    features: [
      "Latest generation haemodialysis machines",
      "Multi-barrier Reverse Osmosis (RO) water treatment plant",
      "Single-use dialyzer protocols preventing cross-contamination",
      "Comfortable dialysis recliners with entertainment and patient call"
    ],
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
    highlightBadge: "Specialist Supervised"
  },
  {
    id: "inpatient-rooms-facility",
    title: "Comfortable Inpatient Rooms & Wards",
    shortDescription: "Thoughtfully designed Deluxe AC, Private, Semi-Private, and General Ward accommodations.",
    fullDescription: "Every patient room is designed to facilitate peaceful recovery. Equipped with motorized multi-function hospital beds, attendant couches, private en-suite bathrooms, nurse call systems, and piped oxygen connections.",
    features: [
      "Deluxe AC private suites with patient-attendant comforts",
      "Well-ventilated semi-private and general recovery wards",
      "Centralized oxygen and medical vacuum at every bed",
      "24-hour round-the-clock dedicated nursing and housekeeping"
    ],
    image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=800&q=80",
    highlightBadge: "Patient Comfort First"
  },
  {
    id: "diagnostics-imaging-facility",
    title: "High-Frequency Digital Radiology & Lab",
    shortDescription: "Immediate on-site diagnostics including Digital X-Ray, 2D Echo, ECG, and pathology.",
    fullDescription: "Rapid diagnostic turnaround is central to effective clinical decisions. Our in-house diagnostic suite eliminates the need for patients to travel elsewhere for routine or emergency testing.",
    features: [
      "Digital X-Ray with high image sharpness and low radiation",
      "2D Echocardiography with Color Doppler cardiac evaluation",
      "Computerized 12-Lead Electrocardiogram (ECG)",
      "Automated clinical biochemistry & haematology analyzers"
    ],
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
    highlightBadge: "Rapid Turnaround"
  },
  {
    id: "ambulance-emergency-facility",
    title: "24x7 Emergency Ambulance & Triage Casualty",
    shortDescription: "Equipped patient transport vehicle with on-call paramedics and trauma support.",
    fullDescription: "Providing immediate emergency pickup across Ahmednagar and Savedi locality. Equipped with oxygen cylinders, spine board, stretcher, and emergency resuscitation kit.",
    features: [
      "Emergency medical vehicle with portable oxygen supply",
      "Foldable stretcher and scoop stretcher for trauma stabilization",
      "Direct communication with hospital emergency casualty team",
      "Helpline: +91 98679 87698 available round-the-clock"
    ],
    image: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&w=800&q=80",
    highlightBadge: "24x7 Rapid Response"
  }
];

export const DIAGNOSTIC_TESTS = [
  {
    id: "test-xray",
    name: "Digital X-Ray (High-Frequency)",
    category: "Radiology",
    turnaroundTime: "Within 20–30 mins",
    description: "Digital imaging of Chest, Spine, Joints, Bones & Abdomen with computerized digital enhancement.",
    preparation: "No special fasting required. Remove metallic items and jewelry."
  },
  {
    id: "test-echo",
    name: "2D Echocardiography (Color Doppler)",
    category: "Cardiology",
    turnaroundTime: "Same Day / Immediate",
    description: "Detailed ultrasound evaluation of heart chambers, ejection fraction (EF), and valve dynamics.",
    preparation: "Wear comfortable loose clothing. Prior ECG report recommended if available."
  },
  {
    id: "test-ecg",
    name: "12-Lead Digital Computerized ECG",
    category: "Cardiology",
    turnaroundTime: "Immediate (5 mins)",
    description: "Rapid electrical rhythm mapping for detection of arrhythmias, ischemia, and heart attacks.",
    preparation: "No prior fasting needed. Performed immediately at bedside or in OPD."
  },
  {
    id: "test-cbc",
    name: "Complete Blood Count (CBC) with ESR",
    category: "Pathology Lab",
    turnaroundTime: "Within 1 Hour",
    description: "Evaluation of Haemoglobin, Platelets, Total WBC count, differential count, and RBC indices.",
    preparation: "Fasting not strictly required for CBC alone."
  },
  {
    id: "test-rft",
    name: "Renal Function Test (RFT / KFT)",
    category: "Pathology Lab",
    turnaroundTime: "Within 2 Hours",
    description: "Measures Serum Creatinine, Blood Urea Nitrogen (BUN), Uric Acid, and Electrolytes.",
    preparation: "Overnight 8-10 hour fasting recommended for baseline accuracy."
  },
  {
    id: "test-lft",
    name: "Liver Function Test (LFT)",
    category: "Pathology Lab",
    turnaroundTime: "Within 2 Hours",
    description: "Bilirubin (Total/Direct), SGOT, SGPT, Alkaline Phosphatase, Total Proteins, and Albumin.",
    preparation: "8-10 hours fasting recommended."
  },
  {
    id: "test-sugar",
    name: "Blood Glucose (Fasting & PP / HbA1c)",
    category: "Diabetology & Lab",
    turnaroundTime: "Within 1 Hour",
    description: "Fasting Blood Sugar, Post-Prandial Glucose, and Glycated Haemoglobin (3-month control).",
    preparation: "10-12 hours fasting for fasting sugar; PP exactly 2 hours after breakfast."
  },
  {
    id: "test-urine",
    name: "Urine Routine & Microscopic Examination",
    category: "Pathology Lab",
    turnaroundTime: "Within 45 mins",
    description: "Screening for urinary tract infections, protein leakage, pus cells, and crystals.",
    preparation: "Clean-catch midstream urine sample collected in sterile container."
  }
];
