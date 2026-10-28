import React from 'react';
import { PhoneCall, Stethoscope, Microscope, Calendar, ArrowRight } from 'lucide-react';
import { HOSPITAL_INFO } from '../../data/hospitalData';

interface QuickAccessCardsProps {
  onOpenAppointment: () => void;
}

export const QuickAccessCards: React.FC<QuickAccessCardsProps> = ({ onOpenAppointment }) => {
  return (
    <section className="py-8 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: 24/7 Emergency */}
          <div className="bg-white rounded-xl p-5 border border-red-100 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-red-50 text-red-700 flex items-center justify-center mb-3">
                <PhoneCall className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">
                24x7 Emergency & Trauma
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Round-the-clock emergency casualty, resuscitation, surgical on-call & ambulance service.
              </p>
            </div>
            <a
              href={`tel:${HOSPITAL_INFO.phones.emergency}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-red-700 hover:text-red-800 transition-colors"
            >
              <span>Call Helpline</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2: OPD Consultations */}
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center mb-3">
                <Stethoscope className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">
                Specialist OPD Consultations
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Consult verified specialists across Orthopedics, Gynaecology, Surgery, Nephrology & Medicine.
              </p>
            </div>
            <a
              href="#doctors"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 hover:text-sky-800 transition-colors"
            >
              <span>View Doctor Panel</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 3: Diagnostics & Laboratory */}
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center mb-3">
                <Microscope className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">
                Diagnostics, Lab & X-Ray
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Digital X-Ray, 2D Echo, 12-lead ECG & automated clinical pathology testing with rapid reports.
              </p>
            </div>
            <a
              href="#diagnostics"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 hover:text-teal-800 transition-colors"
            >
              <span>Explore Diagnostic Tests</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 4: Book Appointment */}
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center mb-3">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">
                Online Appointment Enquiry
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Schedule prior consultations with zero waiting and seamless WhatsApp verification.
              </p>
            </div>
            <button
              onClick={onOpenAppointment}
              type="button"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 hover:text-sky-800 transition-colors text-left cursor-pointer"
            >
              <span>Book Appointment Slot</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
