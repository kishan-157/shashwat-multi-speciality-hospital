import React from 'react';
import { PhoneCall, Calendar, ShieldCheck, HeartPulse, Stethoscope, Clock } from 'lucide-react';
import { HOSPITAL_INFO } from '../../data/hospitalData';
import { SmartImage } from '../common/SmartImage';

interface HeroProps {
  onOpenAppointment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppointment }) => {
  return (
    <section className="relative bg-white pt-6 pb-12 lg:pt-10 lg:pb-16 border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Grid Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Heading and CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Location & Trust Kicker (Quiet unboxed text) */}
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-800 tracking-wide uppercase mb-3">
              <span className="flex items-center gap-1.5">
                <HeartPulse className="w-4 h-4 text-sky-700" />
                Ahilyanagar’s Premier Multi-Speciality Centre
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-500 font-medium lowercase first-letter:uppercase">Savedi Gaon</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-5 text-balance">
              Advanced Clinical Care, Precision Surgery & 24x7 Emergency.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
              Equipped with state-of-the-art modular operation theatres, intensive critical care (ICU), dedicated haemodialysis, and an experienced multidisciplinary consultant panel committed to honest, evidence-based healing.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <button
                type="button"
                onClick={onOpenAppointment}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-sky-700 hover:bg-sky-800 active:scale-[0.98] text-white font-semibold text-sm rounded-xl shadow-md transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Doctor Appointment</span>
              </button>

              <a
                href={`tel:${HOSPITAL_INFO.phones.emergency}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-red-50 hover:bg-red-100 active:scale-[0.98] text-red-700 font-bold text-sm rounded-xl border border-red-200 transition-all shadow-xs"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Emergency: {HOSPITAL_INFO.phones.emergency}</span>
              </a>
            </div>

            {/* Micro Highlights */}
            <div className="pt-4 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-sky-700 shrink-0" />
                <span>24/7 Casualty & ICU Care</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Cashless Mediclaim Desk</span>
              </div>
              <div className="flex items-center gap-2">
                <Stethoscope className="w-4 h-4 text-sky-700 shrink-0" />
                <span>Senior Specialists On-Site</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 flex items-center">
            <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-50 group">
              <SmartImage
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80"
                alt="Shashwat Multi-Speciality Hospital clinical healthcare facility"
                aspectRatioClass="aspect-[4/3] lg:aspect-[5/4]"
                className="w-full h-full object-cover"
                fallbackTitle="Shashwat Multi-Speciality Hospital Building"
              />
              
              {/* Contextual Card Overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-transparent p-6 text-white">
                <span className="text-[11px] font-semibold text-sky-300 tracking-wider uppercase mb-1 block">
                  Nagar–Manmad Road, Savedi
                </span>
                <p className="text-sm font-semibold text-white leading-snug">
                  Comprehensive tertiary surgical, trauma & maternal care in Ahilyanagar
                </p>
                <div className="mt-2 flex items-center gap-3 text-xs text-slate-300">
                  <span>Emergency Casualty: Open 24 Hours</span>
                  <span>·</span>
                  <a href="#location" className="text-sky-300 hover:underline">
                    View on Map
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Column Metric Strip (Full width row below hero) */}
        <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col">
            <span className="font-mono text-2xl lg:text-3xl font-extrabold text-slate-900 tabular-nums">
              24/7
            </span>
            <span className="text-xs font-medium text-slate-500 mt-1">
              Emergency, Trauma & Pharmacy
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-2xl lg:text-3xl font-extrabold text-sky-700 tabular-nums">
              Modular OT
            </span>
            <span className="text-xs font-medium text-slate-500 mt-1">
              Laminar Flow Surgical Suite
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-2xl lg:text-3xl font-extrabold text-slate-900 tabular-nums">
              6+
            </span>
            <span className="text-xs font-medium text-slate-500 mt-1">
              Senior Specialist Consultants
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-2xl lg:text-3xl font-extrabold text-teal-700 tabular-nums">
              100%
            </span>
            <span className="text-xs font-medium text-slate-500 mt-1">
              Cashless Mediclaim Support
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
