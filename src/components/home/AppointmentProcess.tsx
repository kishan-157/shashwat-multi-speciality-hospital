import React from 'react';
import { Calendar, UserCheck, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

interface AppointmentProcessProps {
  onOpenAppointment: () => void;
}

export const AppointmentProcess: React.FC<AppointmentProcessProps> = ({ onOpenAppointment }) => {
  const steps = [
    {
      step: "01",
      title: "Select Department or Doctor",
      description: "Choose from Orthopaedics, Gynaecology, Laparoscopic Surgery, Nephrology, or General Medicine.",
      icon: <UserCheck className="w-5 h-5 text-sky-700" />
    },
    {
      step: "02",
      title: "Choose Convenient Slot",
      description: "Pick a date and choose between Morning (10 AM – 2 PM) or Evening (5 PM – 9 PM) OPD slots.",
      icon: <Calendar className="w-5 h-5 text-sky-700" />
    },
    {
      step: "03",
      title: "Instant Reference ID",
      description: "Receive an immediate digital tracking reference and optional 1-click WhatsApp sync to our desk.",
      icon: <Clock className="w-5 h-5 text-sky-700" />
    },
    {
      step: "04",
      title: "Streamlined Consultation",
      description: "Present your reference at the reception counter in Savedi for priority token issuance and minimal waiting.",
      icon: <CheckCircle2 className="w-5 h-5 text-teal-600" />
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold text-sky-800 tracking-wider uppercase block mb-2">
            Seamless Patient Journey
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            How to Schedule Your Consultation
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            We value your time. Follow our 4-step streamlined consultation process for a stress-free hospital visit.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative mb-12">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-2xs">
                    {item.icon}
                  </div>
                  <span className="font-mono text-2xl font-extrabold text-slate-300">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Trigger */}
        <div className="text-center">
          <button
            type="button"
            onClick={onOpenAppointment}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-sky-700 hover:bg-sky-800 text-white font-semibold text-xs rounded-xl shadow-md transition-all active:scale-[0.98] cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Consultation Online Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
