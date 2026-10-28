import React, { useState, useEffect } from 'react';
import { MessageSquare, PhoneCall, ArrowUp } from 'lucide-react';
import { HOSPITAL_INFO } from '../../data/hospitalData';

export const FloatingActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage = encodeURIComponent(
    "Hello Shashwat Multi-Speciality Hospital, I would like to enquire about doctor consultation and hospital services."
  );

  return (
    <div className="fixed right-4 bottom-20 md:bottom-6 z-30 flex flex-col items-end gap-3 pointer-events-none">
      {/* Scroll to Top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          type="button"
          aria-label="Scroll to top of page"
          className="pointer-events-auto p-3 rounded-full bg-slate-800/90 text-white hover:bg-slate-900 shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus:outline-hidden"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Call Button */}
      <a
        href={`tel:${HOSPITAL_INFO.phones.emergency}`}
        aria-label="Call Hospital Emergency Line"
        className="pointer-events-auto flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-3.5 py-2.5 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 group"
      >
        <PhoneCall className="w-5 h-5 shrink-0" />
        <span className="hidden sm:inline text-xs font-bold whitespace-nowrap">
          Call 24/7 Helpline
        </span>
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${HOSPITAL_INFO.phones.whatsappRaw}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Shashwat Hospital on WhatsApp"
        className="pointer-events-auto flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-2.5 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 group"
      >
        <MessageSquare className="w-5 h-5 shrink-0" />
        <span className="hidden sm:inline text-xs font-semibold whitespace-nowrap">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
};
