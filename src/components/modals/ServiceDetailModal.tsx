import React from 'react';
import { X, CheckCircle, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { MedicalService } from '../../types';
import { SmartImage } from '../common/SmartImage';

interface ServiceDetailModalProps {
  service: MedicalService | null;
  isOpen: boolean;
  onClose: () => void;
  onBookService: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  isOpen,
  onClose,
  onBookService
}) => {
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden my-8">
        
        {/* Header with image */}
        <div className="relative">
          <SmartImage
            src={service.image}
            alt={service.title}
            aspectRatioClass="aspect-[21/9]"
            className="w-full"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/70 text-white hover:bg-slate-900 transition-colors focus:outline-hidden"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="absolute bottom-4 left-6 right-6">
            <span className="inline-block px-2.5 py-1 text-[11px] font-semibold bg-sky-700 text-white rounded-md mb-2 shadow-xs">
              {service.category}
            </span>
            <h3 className="text-2xl font-bold text-white drop-shadow-md">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-4 text-xs text-slate-500 mb-4 pb-3 border-b border-slate-100">
            <span className="flex items-center gap-1 text-sky-700 font-medium">
              <ShieldCheck className="w-4 h-4" />
              Department: {service.department}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1 text-slate-600">
              <Clock className="w-4 h-4" />
              {service.is24x7 ? '24x7 Round-the-Clock' : 'OPD & Inpatient Hours'}
            </span>
          </div>

          <p className="text-sm text-slate-700 leading-relaxed mb-5">
            {service.fullDescription}
          </p>

          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
            Key Clinical Capabilities & Inclusions:
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
            <button
              onClick={onClose}
              type="button"
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookService(service.title);
              }}
              type="button"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-sky-700 hover:bg-sky-800 text-white text-xs font-semibold rounded-lg shadow-sm transition-all cursor-pointer"
            >
              <span>Enquire & Book Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
