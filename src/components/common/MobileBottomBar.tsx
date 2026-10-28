import React from 'react';
import { PhoneCall, Navigation, Calendar } from 'lucide-react';
import { HOSPITAL_INFO } from '../../data/hospitalData';

interface MobileBottomBarProps {
  onOpenAppointment: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenAppointment }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 px-3 py-2 md:hidden shadow-lg">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={`tel:${HOSPITAL_INFO.phones.emergency}`}
          className="flex flex-col items-center justify-center py-1.5 px-2 bg-red-50 text-red-700 hover:bg-red-100 rounded-lg text-center transition-colors border border-red-100"
          aria-label="Call Emergency Helpline"
        >
          <PhoneCall className="w-4 h-4 mb-0.5" />
          <span className="text-[11px] font-bold leading-tight">Call 24/7</span>
        </a>

        <a
          href={HOSPITAL_INFO.maps.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 bg-slate-50 text-slate-700 hover:bg-slate-100 rounded-lg text-center transition-colors border border-slate-200"
          aria-label="Get Directions to Hospital"
        >
          <Navigation className="w-4 h-4 mb-0.5 text-sky-700" />
          <span className="text-[11px] font-semibold leading-tight">Directions</span>
        </a>

        <button
          onClick={onOpenAppointment}
          type="button"
          className="flex flex-col items-center justify-center py-1.5 px-2 bg-sky-700 text-white hover:bg-sky-800 rounded-lg text-center transition-colors shadow-xs"
          aria-label="Book Hospital Appointment"
        >
          <Calendar className="w-4 h-4 mb-0.5" />
          <span className="text-[11px] font-semibold leading-tight">Appointment</span>
        </button>
      </div>
    </div>
  );
};
