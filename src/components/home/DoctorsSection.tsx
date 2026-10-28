import React from 'react';
import { Clock, Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import { VERIFIED_DOCTORS } from '../../data/doctorsData';
import { Doctor } from '../../types';
import { SmartImage } from '../common/SmartImage';

interface DoctorsSectionProps {
  onBookDoctor: (doctor: Doctor) => void;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({ onBookDoctor }) => {
  return (
    <section id="doctors" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold text-sky-800 tracking-wider uppercase block mb-2">
            Verified Specialist Faculty
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Consultant Doctors & Surgeons
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Our medical specialists bring verified tertiary training, academic credentials, and extensive surgical and clinical experience to patients in Ahilyanagar.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VERIFIED_DOCTORS.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Doctor Headshot */}
                <div className="relative">
                  <SmartImage
                    src={doc.image}
                    alt={`${doc.name} - ${doc.designation} at Shashwat Hospital`}
                    aspectRatioClass="aspect-[4/3]"
                    fallbackTitle={doc.name}
                  />
                  <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-0.5 rounded-md">
                    {doc.department}
                  </div>
                </div>

                {/* Doctor Details */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {doc.name}
                  </h3>
                  
                  {/* Qualifications (Clean unboxed text) */}
                  <div className="text-xs font-bold text-sky-800 mt-0.5 mb-1.5">
                    {doc.qualifications}
                  </div>

                  <p className="text-xs font-medium text-slate-700 mb-3">
                    {doc.designation}
                  </p>

                  <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-2">
                    {doc.about}
                  </p>

                  {/* Specializations */}
                  <div className="mb-4">
                    <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-1.5">
                      Clinical Focus:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-600">
                      {doc.specialization.slice(0, 3).map((spec, idx) => (
                        <li key={idx} className="flex items-center gap-1.5 line-clamp-1">
                          <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* OPD Timings */}
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600 space-y-1">
                    <div className="flex items-center gap-1.5 text-slate-800 font-semibold">
                      <Clock className="w-3.5 h-3.5 text-sky-700 shrink-0" />
                      <span>OPD Timings:</span>
                    </div>
                    <p className="text-[11px] pl-5 text-slate-600">
                      {doc.opdTimings}
                    </p>
                    <div className="flex items-center gap-1.5 text-[11px] pl-5 text-slate-500">
                      <Calendar className="w-3 h-3 text-slate-400 shrink-0" />
                      <span>{doc.availableDays}</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  type="button"
                  onClick={() => onBookDoctor(doc)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-sky-700 hover:bg-sky-800 active:scale-[0.99] text-white text-xs font-semibold rounded-xl shadow-2xs transition-all cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Consultation with {doc.name.split(' ')[1]}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
