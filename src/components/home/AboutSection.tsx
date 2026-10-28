import React, { useState } from 'react';
import { ShieldCheck, Heart, Award, CheckCircle2, Play, X } from 'lucide-react';
import { HOSPITAL_INFO } from '../../data/hospitalData';
import { SmartImage } from '../common/SmartImage';

export const AboutSection: React.FC = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section id="about" className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold text-sky-800 tracking-wider uppercase block mb-2">
            About Shashwat Hospital
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Rooted in Ahilyanagar. Dedicated to Rational, Compassionate Healthcare.
          </h2>
        </div>

        {/* 2-Column Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Visual Asset & Video Link */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md group">
              <SmartImage
                src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
                alt="Shashwat Multi-Speciality Hospital clinical care team"
                aspectRatioClass="aspect-[4/3]"
                className="w-full"
              />

              {/* Video Play Button Overlay */}
              <div className="absolute inset-0 bg-slate-950/30 flex items-center justify-center group-hover:bg-slate-950/40 transition-colors">
                <button
                  type="button"
                  onClick={() => setVideoModalOpen(true)}
                  className="flex items-center gap-2.5 px-4 py-2.5 bg-white text-slate-900 rounded-full font-semibold text-xs shadow-lg hover:bg-sky-50 transition-transform active:scale-95 cursor-pointer"
                  aria-label="Watch hospital introduction video"
                >
                  <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-white">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </div>
                  <span>Watch Video Tour (1:30)</span>
                </button>
              </div>

              {/* Bottom Caption */}
              <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-600">
                <p className="font-semibold text-slate-800">
                  Shashwat Multi-Speciality Hospital, Savedi
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Nagar–Manmad Road, Near Naik Hospital Kaman, Ahilyanagar
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-slate-600 leading-relaxed">
            <p>
              Located prominently on Nagar–Manmad Road near Naik Hospital Kaman in Savedi Gaon, <strong>Shashwat Multi-Speciality Hospital</strong> was founded with a singular commitment: delivering state-of-the-art tertiary medical and surgical care within Ahilyanagar (Ahmednagar) with uncompromising transparency and patient dignity.
            </p>
            <p>
              Patients in Ahmednagar historically had to travel to larger metropolitan cities for complex joint reconstructions, laparoscopic interventions, dialysis, or tertiary intensive care. Shashwat Hospital eliminates that burden by combining a top-tier modular operation theatre equipped with laminar airflow, a fully monitored intensive care unit (ICU) with ventilator support, and a dedicated haemodialysis wing under one roof.
            </p>
            <p>
              Our multidisciplinary team includes certified specialists across Orthopaedic Surgery, Obstetrics & Gynaecology, General & Laparoscopic Surgery, Nephrology & Kidney Care, and Critical Care Internal Medicine.
            </p>

            {/* Core Values Grid */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <Heart className="w-5 h-5 text-sky-700 mb-2" />
                <h4 className="text-xs font-bold text-slate-900 mb-1">
                  Ethical & Rational Care
                </h4>
                <p className="text-[11px] text-slate-500 leading-normal">
                  Strictly protocol-driven diagnostics and necessary medical interventions.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <ShieldCheck className="w-5 h-5 text-teal-700 mb-2" />
                <h4 className="text-xs font-bold text-slate-900 mb-1">
                  Sterility & Safety
                </h4>
                <p className="text-[11px] text-slate-500 leading-normal">
                  Laminar flow modular OT & infection-controlled ICU bays.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <Award className="w-5 h-5 text-sky-700 mb-2" />
                <h4 className="text-xs font-bold text-slate-900 mb-1">
                  Cashless Accessibility
                </h4>
                <p className="text-[11px] text-slate-500 leading-normal">
                  Comprehensive network of private & public health insurance TPAs.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Video Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl bg-black rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-4 bg-slate-900 text-white border-b border-slate-800">
              <span className="text-xs font-bold">
                Shashwat Multi-Speciality Hospital Video Tour
              </span>
              <button
                type="button"
                onClick={() => setVideoModalOpen(false)}
                className="p-1 rounded-md text-slate-400 hover:text-white"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video w-full bg-black">
              <iframe
                src="https://www.youtube.com/embed/sCQ7eK5Th1s?autoplay=1"
                title="Shashwat Multi-Speciality Hospital Tour"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
