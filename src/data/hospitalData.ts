export const HOSPITAL_INFO = {
  name: "Shashwat Multi-Speciality Hospital",
  shortName: "Shashwat Hospital",
  tagline: "Advanced Clinical Excellence, Compassionate Care 24x7",
  address: {
    line1: "Nagar–Manmad Road, Near Naik Hospital, Kaman",
    locality: "Savedi Gaon",
    city: "Ahilyanagar (Ahmednagar)",
    state: "Maharashtra",
    pincode: "414003",
    country: "India",
    landmark: "Near Naik Hospital Kaman, Savedi"
  },
  phones: {
    emergency: "+91 98679 87698",
    reception: "0241 2427949",
    displayEmergency: "+91 98679 87698",
    rawEmergency: "919867987698",
    whatsapp: "+91 98679 87698",
    whatsappRaw: "919867987698"
  },
  email: "shashwathospital2025@gmail.com",
  timings: {
    emergency: "24 Hours / 7 Days (Round-the-clock)",
    pharmacy: "24 Hours / 7 Days",
    opd: "Mon – Sat: 10:00 AM – 02:00 PM & 05:00 PM – 09:00 PM",
    visitingHours: "Morning: 10:00 AM – 11:30 AM | Evening: 05:00 PM – 07:00 PM",
    icuVisiting: "11:00 AM – 12:00 PM & 05:30 PM – 06:30 PM (1 Attendant only)"
  },
  maps: {
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.1587289544415!2d74.7335!3d19.1245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcbb9ef4881005%3A0x6b132a0cfa5fbc31!2sSavedi%2C%20Ahmednagar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Shashwat+Multi-Speciality+Hospital+Savedi+Ahilyanagar"
  },
  stats: [
    { label: "Emergency & Trauma", value: "24x7" },
    { label: "Specialist Consultations", value: "6+" },
    { label: "Clinical Specialties", value: "10+" },
    { label: "Cashless Mediclaim", value: "100%" }
  ]
};

export const CASHLESS_INSURANCE_PARTNERS = [
  { name: "Star Health Insurance", type: "Health Insurer", cashless: true },
  { name: "Care Health Insurance (Religare)", type: "Health Insurer", cashless: true },
  { name: "HDFC ERGO General Insurance", type: "General Insurer", cashless: true },
  { name: "ICICI Lombard Health", type: "General Insurer", cashless: true },
  { name: "Bajaj Allianz General Insurance", type: "General Insurer", cashless: true },
  { name: "Medi Assist TPA", type: "Third Party Administrator", cashless: true },
  { name: "Vidal Health TPA", type: "Third Party Administrator", cashless: true },
  { name: "MDIndia Health Insurance TPA", type: "Third Party Administrator", cashless: true },
  { name: "Paramount Health Services TPA", type: "Third Party Administrator", cashless: true },
  { name: "The New India Assurance Co.", type: "Public Sector Insurer", cashless: true },
  { name: "United India Insurance", type: "Public Sector Insurer", cashless: true },
  { name: "National Insurance Co.", type: "Public Sector Insurer", cashless: true }
];

export const HOSPITAL_FAQS = [
  {
    id: "faq-emergency",
    category: "Emergency",
    question: "What is the procedure for emergency patient admission?",
    answer: "Our Emergency & Trauma Centre is open 24x7. Walk directly to our Emergency casualty department on the ground floor or call +91 98679 87698. Our trauma triage team immediately stabilizes the patient without delay, initiates preliminary diagnostics, and summons the on-call surgical or critical care specialist."
  },
  {
    id: "faq-cashless",
    category: "Insurance",
    question: "How do I avail cashless mediclaim hospitalization at Shashwat Hospital?",
    answer: "Bring the patient's original health insurance card, a government photo ID (Aadhaar/PAN), and prior doctor consultation prescriptions to our Cashless Mediclaim & TPA Desk. For planned surgeries, submit these 48-72 hours prior for pre-authorization. For emergency admissions, pre-authorization requests are submitted within 24 hours of admission."
  },
  {
    id: "faq-opd-timings",
    category: "OPD",
    question: "What are the OPD consultation timings and do I need prior booking?",
    answer: "OPD consultations operate Monday through Saturday in two slots: 10:00 AM – 02:00 PM (Morning) and 05:00 PM – 09:00 PM (Evening). While walk-ins are welcomed, prior booking via our website form or WhatsApp enquiry (+91 98679 87698) guarantees prioritized scheduling with your chosen doctor."
  },
  {
    id: "faq-icu-visiting",
    category: "General",
    question: "What are the ICU visiting hours and rules?",
    answer: "To minimize infection risks and maintain sterile conditions, ICU visiting hours are strictly: Morning 11:00 AM – 12:00 PM and Evening 05:30 PM – 06:30 PM. Only one attendant with a sterilized visitor apron and mask is permitted at a time inside the critical care unit."
  },
  {
    id: "faq-dialysis",
    category: "General",
    question: "Does Shashwat Hospital have an in-house haemodialysis facility?",
    answer: "Yes, we have an advanced Dialysis Unit supervised by Kidney Disease & Transplant Specialist Dr. Akash Berad. The unit utilizes state-of-the-art dialysis machines with RO water purification and adheres to stringent sterilization and single-use dialyzer protocols."
  },
  {
    id: "faq-pharmacy-diagnostics",
    category: "Appointments",
    question: "Are pharmacy and diagnostic services open during nighttime and holidays?",
    answer: "Yes, our in-house 24-hour pharmacy, Digital X-Ray, 12-lead ECG, and emergency pathology laboratory operate round-the-clock, 365 days a year, ensuring timely emergency diagnosis and medication availability."
  }
];
