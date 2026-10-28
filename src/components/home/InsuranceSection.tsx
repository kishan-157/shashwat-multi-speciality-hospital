import React from 'react';
import { ShieldCheck, FileCheck, CheckCircle2, PhoneCall, HelpCircle } from 'lucide-react';
import { CASHLESS_INSURANCE_PARTNERS, HOSPITAL_INFO } from '../../data/hospitalData';

export const InsuranceSection: React.FC = () => {
  return (
    <section id="insurance" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold text-sky-800 tracking-wider uppercase block mb-2">
            Hassle-Free Mediclaim
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Cashless Hospitalization & Insurance Facilities
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Shashwat Multi-Speciality Hospital operates a dedicated in-house Cashless Mediclaim & TPA Helpdesk to assist patients and families with pre-authorization, admission approvals, and smooth claim settlements.
          </p>
        </div>

        {/* 2-Column Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Column: Process & Guidelines */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Planned vs Emergency Box */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-sky-700" />
                How Cashless Admission Works
              </h3>

              <div className="space-y-4 text-xs text-slate-600">
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-1">
                    1. Planned Hospitalization (48–72 Hours Prior)
                  </h4>
                  <p className="leading-relaxed">
                    Submit your doctor's surgery advice note, diagnostic reports, valid health card, and Aadhaar card at our TPA desk. We coordinate with your insurance provider to secure pre-authorization before admission.
                  </p>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-1">
                    2. Emergency Hospitalization (Immediate Admission)
                  </h4>
                  <p className="leading-relaxed">
                    Emergency care is initiated immediately without awaiting insurance approval. The patient’s attendant submits insurance details at the TPA desk within 24 hours of casualty admission for cashless processing.
                  </p>
                </div>
              </div>
            </div>

            {/* Required Documents Checklist */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs">
              <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                Mandatory Documents for Cashless Claims:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>Original Health Insurance E-card / Policy</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>Government Photo ID (Aadhaar / PAN)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>Doctor’s Prescription & Clinical Advice</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>Prior Diagnostic & Lab Investigation Reports</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: Accepted Partners */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-slate-900">
                Network TPAs & Insurers
              </h3>
              <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded">
                Cashless Supported
              </span>
            </div>
            
            <p className="text-xs text-slate-500 mb-4">
              We process cashless pre-authorization with major private health insurers, government companies, and Third-Party Administrators (TPAs):
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[380px] overflow-y-auto pr-1">
              {CASHLESS_INSURANCE_PARTNERS.map((partner, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-lg border border-slate-100 bg-slate-50/70 text-xs text-slate-700 flex flex-col justify-between"
                >
                  <span className="font-semibold text-slate-900 leading-tight">
                    {partner.name}
                  </span>
                  <span className="text-[10px] text-slate-500 mt-1">
                    {partner.type}
                  </span>
                </div>
              ))}
            </div>

            {/* Insurance Helpdesk Callout */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-slate-500 block">TPA Desk Helpline:</span>
                <span className="text-xs font-bold text-slate-900">{HOSPITAL_INFO.phones.emergency}</span>
              </div>
              <a
                href={`tel:${HOSPITAL_INFO.phones.emergency}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-sky-50 text-sky-700 hover:bg-sky-100 rounded-lg text-xs font-semibold transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call TPA Desk</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
