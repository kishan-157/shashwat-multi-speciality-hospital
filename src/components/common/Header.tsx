import React, { useState } from 'react';
import { Menu, X, PlusCircle } from 'lucide-react';
import { HOSPITAL_INFO } from '../../data/hospitalData';

interface HeaderProps {
  onOpenAppointment: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAppointment }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Single text element Brand Wordmark */}
          <a
            href="/"
            className="flex items-center gap-3 whitespace-nowrap shrink-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-sky-600 rounded-md"
            aria-label="Shashwat Multi-Speciality Hospital Homepage"
          >
            <div className="w-10 h-10 rounded-xl bg-sky-700 flex items-center justify-center text-white shadow-xs">
              <PlusCircle className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 leading-tight">
                Shashwat Multi-Speciality Hospital
              </span>
              <span className="text-[11px] font-medium text-slate-500 tracking-wide uppercase">
                Savedi · Ahilyanagar
              </span>
            </div>
          </a>

          {/* Zone 2: Concise Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-sky-700 transition-colors whitespace-nowrap shrink-0">
              About
            </a>
            <a href="#services" className="hover:text-sky-700 transition-colors whitespace-nowrap shrink-0">
              Services
            </a>
            <a href="#departments" className="hover:text-sky-700 transition-colors whitespace-nowrap shrink-0">
              Departments
            </a>
            <a href="#doctors" className="hover:text-sky-700 transition-colors whitespace-nowrap shrink-0">
              Doctors
            </a>
            <a href="#facilities" className="hover:text-sky-700 transition-colors whitespace-nowrap shrink-0">
              Facilities
            </a>
            <a href="#diagnostics" className="hover:text-sky-700 transition-colors whitespace-nowrap shrink-0">
              Diagnostics
            </a>
            <a href="#gallery" className="hover:text-sky-700 transition-colors whitespace-nowrap shrink-0">
              Gallery
            </a>
            <a href="#contact" className="hover:text-sky-700 transition-colors whitespace-nowrap shrink-0">
              Contact
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenAppointment}
              type="button"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold text-white bg-sky-700 hover:bg-sky-800 active:scale-[0.98] rounded-lg shadow-xs transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              Book Appointment
            </button>

            {/* Mobile hamburger button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-slate-700">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-sky-700"
            >
              About Hospital
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-sky-700"
            >
              Medical Services
            </a>
            <a
              href="#departments"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-sky-700"
            >
              Departments & Specialties
            </a>
            <a
              href="#doctors"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-sky-700"
            >
              Consultant Doctors
            </a>
            <a
              href="#facilities"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-sky-700"
            >
              Hospital Facilities
            </a>
            <a
              href="#diagnostics"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-sky-700"
            >
              Diagnostic Lab & X-Ray
            </a>
            <a
              href="#insurance"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-sky-700"
            >
              Cashless Mediclaim
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-sky-700"
            >
              Photo Gallery
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-sky-700"
            >
              Contact & Directions
            </a>
          </nav>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointment();
              }}
              type="button"
              className="w-full py-2.5 px-4 text-center text-sm font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-lg shadow-xs"
            >
              Book Appointment
            </button>
            <a
              href={`tel:${HOSPITAL_INFO.phones.emergency}`}
              className="w-full py-2 px-4 text-center text-xs font-semibold text-red-700 bg-red-50 hover:bg-red-100 rounded-lg border border-red-200"
            >
              Call Emergency: {HOSPITAL_INFO.phones.emergency}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
