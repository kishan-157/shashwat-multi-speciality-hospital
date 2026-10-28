import React from 'react';
import { PhoneCall, ShieldAlert, Clock, MapPin } from 'lucide-react';
import { HOSPITAL_INFO } from '../../data/hospitalData';

export const EmergencyStrip: React.FC = () => {
  return (
    <aside aria-label="Emergency Services Notice" className="bg-red-700 text-white text-xs py-2 px-4 border-b border-red-800">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 font-bold tracking-wide uppercase text-white bg-red-800/80 px-2.5 py-0.5 rounded text-[11px]">
            <ShieldAlert className="w-3.5 h-3.5" />
            24x7 Emergency & Trauma
          </span>
          <span className="hidden sm:inline text-red-100">
            Immediate casualty admission, ICU & critical surgical response in Savedi, Ahilyanagar
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <div className="hidden md:flex items-center gap-1 text-red-100">
            <Clock className="w-3.5 h-3.5" />
            <span>Casualty, Pharmacy & ICU: Open 24 Hours</span>
          </div>

          <a
            href={`tel:${HOSPITAL_INFO.phones.emergency}`}
            className="flex items-center gap-1.5 font-bold bg-white text-red-700 hover:bg-red-50 px-3 py-1 rounded transition-colors whitespace-nowrap shadow-sm"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Emergency: {HOSPITAL_INFO.phones.displayEmergency}</span>
          </a>
        </div>
      </div>
    </aside>
  );
};
