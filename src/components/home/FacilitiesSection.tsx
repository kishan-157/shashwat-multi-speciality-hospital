import React from 'react';
import { CheckCircle2, Shield, Sparkles } from 'lucide-react';
import { HOSPITAL_FACILITIES } from '../../data/facilitiesData';
import { SmartImage } from '../common/SmartImage';

export const FacilitiesSection: React.FC = () => {
  return (
    <section id="facilities" className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold text-sky-800 tracking-wider uppercase block mb-2">
            Hospital Infrastructure
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Engineered for Sterility, Safety & Clinical Precision
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            From zero-infection modular surgical suites to life-support intensive care bays and reverse-osmosis dialysis water systems, our physical infrastructure is maintained under strict clinical bio-safety norms.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HOSPITAL_FACILITIES.map((facility) => (
            <div
              key={facility.id}
              className="bg-slate-50/60 rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-300 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Facility Image */}
                <div className="relative">
                  <SmartImage
                    src={facility.image}
                    alt={facility.title}
                    aspectRatioClass="aspect-[16/10]"
                    fallbackTitle={facility.title}
                  />
                  {facility.highlightBadge && (
                    <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-0.5 rounded shadow-xs">
                      {facility.highlightBadge}
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {facility.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {facility.fullDescription}
                  </p>

                  <div className="pt-3 border-t border-slate-200/80">
                    <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-2">
                      Key Technical Features:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {facility.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                          <span className="text-[11px] leading-tight">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="flex items-center gap-2 text-[11px] text-slate-500 bg-white p-2.5 rounded-lg border border-slate-200">
                  <Shield className="w-3.5 h-3.5 text-sky-700 shrink-0" />
                  <span>Adheres to NABH sterility & safety protocols</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
