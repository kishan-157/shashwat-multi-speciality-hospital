import React from 'react';
import { PlusCircle, PhoneCall, Mail, MapPin, ShieldAlert, ArrowUp } from 'lucide-react';
import { HOSPITAL_INFO } from '../../data/hospitalData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-24 md:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-800">
          
          {/* Col 1: Hospital Brand (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-600 flex items-center justify-center text-white">
                <PlusCircle className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white tracking-tight leading-tight">
                  Shashwat Multi-Speciality
                </span>
                <span className="text-xs text-sky-400 font-medium">
                  Hospital · Savedi, Ahilyanagar
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Providing ethical, patient-centric healthcare, modular surgical suites, intensive critical care, and round-the-clock emergency assistance to the families of Ahilyanagar and surrounding regions.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-red-400 shrink-0" />
                <span className="text-white font-bold">24x7 Emergency:</span>
                <a href={`tel:${HOSPITAL_INFO.phones.emergency}`} className="text-red-400 hover:underline">
                  {HOSPITAL_INFO.phones.displayEmergency}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{HOSPITAL_INFO.email}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Savedi Gaon, Nagar–Manmad Road, Ahilyanagar 414003</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Hospital Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Hospital
                </a>
              </li>
              <li>
                <a href="#departments" className="hover:text-white transition-colors">
                  Departments
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Medical Services
                </a>
              </li>
              <li>
                <a href="#doctors" className="hover:text-white transition-colors">
                  Consultant Doctors
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-white transition-colors">
                  Infrastructure
                </a>
              </li>
              <li>
                <a href="#diagnostics" className="hover:text-white transition-colors">
                  Diagnostics & Lab
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Clinical Divisions (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Specialized Care
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Orthopaedics & Joint Replacement
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Obstetrics & High-Risk Pregnancy
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  General & Laparoscopic Surgery
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Nephrology & Haemodialysis Unit
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  ICU & Ventilator Critical Care
                </a>
              </li>
              <li>
                <a href="#insurance" className="hover:text-white transition-colors">
                  Cashless Mediclaim & TPA Desk
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Timings & Emergency Notice (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Working Timings
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/60">
                <span className="font-semibold text-white block">Emergency & Trauma</span>
                <span className="text-red-400 font-bold">24 Hours / 7 Days Active</span>
              </div>
              <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/60">
                <span className="font-semibold text-white block">OPD Consultations</span>
                <span>Mon – Sat: 10:00 AM – 2:00 PM & 5:00 PM – 9:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Medical Disclaimer Section */}
        <div className="py-6 border-b border-slate-800 text-[11px] text-slate-400 leading-relaxed flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <p>
            <strong className="text-slate-200">Medical Emergency Disclaimer:</strong> The information published on this website is for general patient information and educational orientation only and does not constitute individual medical diagnosis or professional consultation. For acute medical emergencies, sudden trauma, breathing distress, or severe chest pain, do not rely on digital form enquiries—immediately call our 24x7 emergency helpline at <a href={`tel:${HOSPITAL_INFO.phones.emergency}`} className="text-white underline font-semibold">{HOSPITAL_INFO.phones.emergency}</a> or proceed directly to our emergency casualty reception on Nagar–Manmad Road, Savedi, Ahilyanagar.
          </p>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Shashwat Multi-Speciality Hospital. All rights reserved. Savedi, Ahilyanagar (Ahmednagar), Maharashtra.
          </p>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-slate-300">About</a>
            <a href="#services" className="hover:text-slate-300">Services</a>
            <a href="#contact" className="hover:text-slate-300">Contact</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
