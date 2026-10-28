import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';
import { HOSPITAL_FAQS, HOSPITAL_INFO } from '../../data/hospitalData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-emergency');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-sky-800 tracking-wider uppercase block mb-2">
            Patient Information & Queries
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Quick answers regarding admissions, doctor appointments, cashless insurance, and visitor guidelines.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {HOSPITAL_FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-bold text-slate-900">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-600 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-sky-50 text-sky-700' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-10 p-5 bg-sky-50 rounded-2xl border border-sky-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-700 text-white flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">
                Have specific queries about treatment or doctors?
              </h4>
              <p className="text-[11px] text-slate-600 mt-0.5">
                Our helpdesk reception in Savedi is happy to assist you directly.
              </p>
            </div>
          </div>

          <a
            href={`tel:${HOSPITAL_INFO.phones.emergency}`}
            className="inline-flex items-center gap-2 px-4 py-2 bg-sky-700 hover:bg-sky-800 text-white text-xs font-semibold rounded-lg shadow-2xs whitespace-nowrap transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Call Helpdesk: {HOSPITAL_INFO.phones.emergency}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
