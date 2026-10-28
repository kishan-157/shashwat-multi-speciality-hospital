/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { EmergencyStrip } from './components/common/EmergencyStrip';
import { Header } from './components/common/Header';
import { Hero } from './components/home/Hero';
import { QuickAccessCards } from './components/home/QuickAccessCards';
import { AboutSection } from './components/home/AboutSection';
import { ServicesSection } from './components/home/ServicesSection';
import { DepartmentsSection } from './components/home/DepartmentsSection';
import { DoctorsSection } from './components/home/DoctorsSection';
import { FacilitiesSection } from './components/home/FacilitiesSection';
import { DiagnosticsSection } from './components/home/DiagnosticsSection';
import { AppointmentProcess } from './components/home/AppointmentProcess';
import { InsuranceSection } from './components/home/InsuranceSection';
import { GallerySection } from './components/home/GallerySection';
import { FaqSection } from './components/home/FaqSection';
import { LocationSection } from './components/home/LocationSection';
import { Footer } from './components/common/Footer';
import { FloatingActions } from './components/common/FloatingActions';
import { MobileBottomBar } from './components/common/MobileBottomBar';
import { AppointmentModal } from './components/modals/AppointmentModal';
import { ServiceDetailModal } from './components/modals/ServiceDetailModal';
import { Doctor, MedicalService } from './types';

export default function App() {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [selectedServiceForDetail, setSelectedServiceForDetail] = useState<MedicalService | null>(null);
  const [appointmentInitialDept, setAppointmentInitialDept] = useState<string | undefined>(undefined);
  const [appointmentInitialDoctor, setAppointmentInitialDoctor] = useState<string | undefined>(undefined);

  const handleOpenAppointment = (dept?: string, doctor?: string) => {
    setAppointmentInitialDept(dept);
    setAppointmentInitialDoctor(doctor);
    setAppointmentModalOpen(true);
  };

  const handleBookDoctor = (doctor: Doctor) => {
    setAppointmentInitialDept(doctor.department);
    setAppointmentInitialDoctor(doctor.name);
    setAppointmentModalOpen(true);
  };

  const handleBookService = (serviceName: string) => {
    setAppointmentInitialDept(serviceName);
    setAppointmentInitialDoctor('Any Available Specialist');
    setAppointmentModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800 font-sans selection:bg-sky-100 selection:text-sky-900">
      
      {/* 1. Emergency announcement strip */}
      <EmergencyStrip />

      {/* 2. Header with hospital logo & navigation */}
      <Header onOpenAppointment={() => handleOpenAppointment()} />

      {/* Main Content Sections strictly in requested order */}
      <main className="flex-1">
        
        {/* 3. Hero section */}
        <Hero onOpenAppointment={() => handleOpenAppointment()} />

        {/* 4. Quick-access cards */}
        <QuickAccessCards onOpenAppointment={() => handleOpenAppointment()} />

        {/* 5. About the hospital */}
        <AboutSection />

        {/* 6. Complete medical services section */}
        <ServicesSection
          onSelectService={(svc) => setSelectedServiceForDetail(svc)}
          onBookService={(name) => handleBookService(name)}
        />

        {/* 7. Departments and specialties */}
        <DepartmentsSection
          onOpenAppointmentForDept={(deptName) => handleOpenAppointment(deptName)}
        />

        {/* 8. Doctors section */}
        <DoctorsSection
          onBookDoctor={(doc) => handleBookDoctor(doc)}
        />

        {/* 9. Hospital infrastructure and facilities */}
        <FacilitiesSection />

        {/* 10. Diagnostic services */}
        <DiagnosticsSection
          onOpenAppointment={() => handleOpenAppointment('Diagnostics & Lab')}
        />

        {/* 11. Patient appointment process */}
        <AppointmentProcess
          onOpenAppointment={() => handleOpenAppointment()}
        />

        {/* 12. Insurance and cashless facilities */}
        <InsuranceSection />

        {/* 13. Hospital photo gallery */}
        <GallerySection />

        {/* 14. Frequently asked questions */}
        <FaqSection />

        {/* 15. Location, map, address, phone, email & hours */}
        <div id="contact">
          <LocationSection />
        </div>

      </main>

      {/* 16. Footer with useful links and medical disclaimer */}
      <Footer />

      {/* 17. Floating WhatsApp and Call buttons */}
      <FloatingActions />

      {/* Mobile bottom action bar for Call, Directions & Appointment */}
      <MobileBottomBar onOpenAppointment={() => handleOpenAppointment()} />

      {/* Interactive Modals */}
      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={() => setAppointmentModalOpen(false)}
        initialServiceOrDept={appointmentInitialDept}
        initialDoctor={appointmentInitialDoctor}
      />

      <ServiceDetailModal
        service={selectedServiceForDetail}
        isOpen={Boolean(selectedServiceForDetail)}
        onClose={() => setSelectedServiceForDetail(null)}
        onBookService={(name) => handleBookService(name)}
      />

    </div>
  );
}
