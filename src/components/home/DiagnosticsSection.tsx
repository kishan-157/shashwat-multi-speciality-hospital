import React, { useState } from 'react';
import { Microscope, Clock, ShieldCheck, FileText, CheckCircle2, PhoneCall } from 'lucide-react';
import { DIAGNOSTIC_TESTS } from '../../data/facilitiesData';
import { HOSPITAL_INFO } from '../../data/hospitalData';

interface DiagnosticsSectionProps {
  onOpenAppointment: () => void;
}

export const DiagnosticsSection: React.FC<DiagnosticsSectionProps> = ({ onOpenAppointment }) => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const categories = ['All', 'Radiology', 'Cardiology', 'Pathology Lab', 'Diabetology & Lab'];

  const filteredTests = DIAGNOSTIC_TESTS.filter(
    (t) => selectedFilter === 'All' || t.category === selectedFilter
  );

  return (
    <section id="diagnostics" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-semibold text-sky-800 tracking-wider uppercase block mb-2">
              Diagnostics & Imaging Suite
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
              Accurate On-Site Clinical Pathology & Digital X-Ray
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-2xl">
              Equipped with computerized high-frequency radiography, automated hematology analyzers, and 2D Echo for rapid, reliable diagnostic reporting.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${HOSPITAL_INFO.phones.emergency}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-slate-300 hover:border-slate-400 rounded-lg text-xs font-semibold text-slate-700 transition-colors shadow-2xs whitespace-nowrap"
            >
              <PhoneCall className="w-3.5 h-3.5 text-sky-700" />
              <span>Lab Enquiry: {HOSPITAL_INFO.phones.emergency}</span>
            </a>
          </div>
        </div>

        {/* Filter controls */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-200/80 rounded-xl overflow-x-auto scrollbar-none mb-8 max-w-fit">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedFilter(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                selectedFilter === cat
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tests Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {filteredTests.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs hover:shadow-sm transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="font-semibold text-sky-800">{test.category}</span>
                  <span className="flex items-center gap-1 text-[11px] text-slate-500">
                    <Clock className="w-3 h-3 text-slate-400" />
                    {test.turnaroundTime}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 mb-2 leading-snug">
                  {test.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  {test.description}
                </p>

                {test.preparation && (
                  <div className="text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-100 mb-2">
                    <span className="font-semibold text-slate-700 block">Prep Note:</span>
                    <span>{test.preparation}</span>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] text-emerald-700 font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  Available 24x7
                </span>
                <button
                  onClick={onOpenAppointment}
                  type="button"
                  className="text-xs font-semibold text-sky-700 hover:text-sky-800 transition-colors"
                >
                  Schedule Test
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Lab Trust Banner */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
              <Microscope className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Need Fast-Track Blood Tests or Pre-Operative Clearance?
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Our in-house clinical pathology and digital X-ray operate alongside our emergency casualty. Get urgent reports verified quickly by our clinical staff.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenAppointment}
            className="px-5 py-2.5 bg-sky-700 hover:bg-sky-800 text-white text-xs font-semibold rounded-lg shadow-2xs whitespace-nowrap transition-colors shrink-0 cursor-pointer"
          >
            Enquire Diagnostic Packages
          </button>
        </div>

      </div>
    </section>
  );
};
