import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, ShieldAlert, PhoneCall } from 'lucide-react';
import { HOSPITAL_INFO } from '../../data/hospitalData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold text-sky-800 tracking-wider uppercase block mb-2">
            Visit & Contact Us
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Hospital Location, Map & Timings
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Strategically located on Nagar–Manmad Road in Savedi Gaon, Ahilyanagar, providing convenient connectivity from Ahmednagar city and highway commuters.
          </p>
        </div>

        {/* 2-Column Map & Contact Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Contact Cards & Operating Timings */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Address Card */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-700 text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">
                    Hospital Address
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    {HOSPITAL_INFO.address.line1},
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {HOSPITAL_INFO.address.locality}, {HOSPITAL_INFO.address.city} – {HOSPITAL_INFO.address.pincode}, {HOSPITAL_INFO.address.state}.
                  </p>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Landmark: {HOSPITAL_INFO.address.landmark}
                  </p>
                  
                  <div className="mt-3">
                    <a
                      href={HOSPITAL_INFO.maps.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-sky-700 hover:bg-sky-800 text-white text-xs font-semibold rounded-lg shadow-2xs transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Open in Google Maps</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Phone Numbers */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900">
                    24x7 Emergency & Trauma Helpline
                  </h3>
                  <a
                    href={`tel:${HOSPITAL_INFO.phones.emergency}`}
                    className="text-base font-extrabold text-red-700 hover:underline block mt-0.5"
                  >
                    {HOSPITAL_INFO.phones.displayEmergency}
                  </a>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Casualty Medical Officer, ICU & Ambulance Dispatch
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200/70 flex items-center justify-between text-xs text-slate-700">
                <span className="text-slate-500">Reception Desk:</span>
                <a href={`tel:${HOSPITAL_INFO.phones.reception}`} className="font-semibold text-slate-900 hover:text-sky-700">
                  {HOSPITAL_INFO.phones.reception}
                </a>
              </div>

              <div className="pt-2 border-t border-slate-200/70 flex items-center justify-between text-xs text-slate-700">
                <span className="text-slate-500">Official Email:</span>
                <a href={`mailto:${HOSPITAL_INFO.email}`} className="font-semibold text-slate-900 hover:text-sky-700">
                  {HOSPITAL_INFO.email}
                </a>
              </div>
            </div>

            {/* Timings Card */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-teal-700 text-white flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Operating & Visiting Hours
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Standard hospital service schedule
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Emergency & Casualty:</span>
                  <span className="font-bold text-red-700">Open 24 Hours / 7 Days</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">In-house Pharmacy:</span>
                  <span className="font-bold text-slate-900">Open 24 Hours</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">OPD Consultations:</span>
                  <span className="font-medium text-slate-800 text-right">
                    10 AM – 2 PM & 5 PM – 9 PM
                  </span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Inpatient Visiting:</span>
                  <span className="font-medium text-slate-800 text-right">
                    10:00–11:30 AM & 5:00–7:00 PM
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Embedded Map */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative w-full h-full min-h-[420px] rounded-2xl overflow-hidden border border-slate-200 shadow-xs bg-slate-100 flex flex-col justify-between">
              
              {/* Map Iframe */}
              <iframe
                src={HOSPITAL_INFO.maps.embedUrl}
                title="Shashwat Multi-Speciality Hospital Savedi Ahilyanagar Map"
                className="w-full h-full min-h-[380px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Bottom Quick Directions Bar */}
              <div className="p-4 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-slate-600">
                  <MapPin className="w-4 h-4 text-sky-700 shrink-0" />
                  <span>Nagar–Manmad Highway, Savedi Gaon, Ahilyanagar</span>
                </div>
                <a
                  href={HOSPITAL_INFO.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg transition-colors whitespace-nowrap"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Driving Directions</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
