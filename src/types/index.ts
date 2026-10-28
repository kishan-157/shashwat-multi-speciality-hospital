export interface Doctor {
  id: string;
  name: string;
  qualifications: string;
  designation: string;
  department: string;
  experience: string;
  specialization: string[];
  opdTimings: string;
  image: string;
  availableDays: string;
  about: string;
}

export interface MedicalService {
  id: string;
  title: string;
  category: 'Emergency & Critical' | 'Surgical Specialties' | 'Maternal & Women' | 'Specialty Medicine' | 'Diagnostics & Support';
  shortDescription: string;
  fullDescription: string;
  features: string[];
  image: string;
  is24x7?: boolean;
  department: string;
}

export interface Department {
  id: string;
  name: string;
  iconName: string;
  tagline: string;
  description: string;
  keyTreatments: string[];
  leadSpecialist?: string;
}

export interface Facility {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  image: string;
  highlightBadge?: string;
}

export interface DiagnosticTest {
  id: string;
  name: string;
  category: string;
  turnaroundTime: string;
  description: string;
  preparation?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Infrastructure' | 'Operation Theatre' | 'ICU & Care' | 'Diagnostics' | 'Patient Rooms';
  image: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Emergency' | 'Insurance' | 'Appointments' | 'OPD';
}

export interface AppointmentData {
  patientName: string;
  phoneNumber: string;
  email?: string;
  department: string;
  doctorName?: string;
  preferredDate: string;
  preferredShift: 'Morning (10:00 AM - 02:00 PM)' | 'Evening (05:00 PM - 09:00 PM)';
  notes?: string;
}
