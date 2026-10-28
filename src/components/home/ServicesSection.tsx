import React, { useState, useMemo } from 'react';
import { Search, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { MEDICAL_SERVICES } from '../../data/servicesData';
import { MedicalService } from '../../types';
import { SmartImage } from '../common/SmartImage';

interface ServicesSectionProps {
  onSelectService: (service: MedicalService) => void;
  onBookService: (serviceName: string) => void;
}

const CATEGORIES = [
  'All Services',
  'Emergency & Critical',
  'Surgical Specialties',
  'Maternal & Women',
  'Specialty Medicine',
  'Diagnostics & Support'
] as const;

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onBookService
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Services');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = useMemo(() => {
    return MEDICAL_SERVICES.filter((svc) => {
      const matchesCategory =
        selectedCategory === 'All Services' || svc.category === selectedCategory;
      const matchesSearch =
        svc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        svc.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        svc.department.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="services" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-semibold text-sky-800 tracking-wider uppercase block mb-2">
              Verified Medical Care
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
              Comprehensive Clinical Services & Specialities
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-2xl">
              All clinical offerings are verified and active at our Ahilyanagar facility, backed by specialized medical equipment and round-the-clock doctor availability.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search services or tests..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-sky-600 shadow-2xs"
            />
          </div>
        </div>

        {/* Category Filter Tabs (Segmented functional buttons) */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-200/80 rounded-xl overflow-x-auto scrollbar-none mb-10 max-w-fit">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <p className="text-sm text-slate-500 mb-2">No medical services matching your search.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All Services');
                setSearchQuery('');
              }}
              className="text-xs text-sky-700 font-semibold hover:underline"
            >
              Clear filters and view all
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Service Image with ratio & alt */}
                  <div className="relative">
                    <SmartImage
                      src={service.image}
                      alt={`${service.title} at Shashwat Hospital`}
                      aspectRatioClass="aspect-[16/10]"
                      fallbackTitle={service.title}
                    />
                    
                    {/* Quiet 24x7 indicator */}
                    {service.is24x7 && (
                      <div className="absolute top-3 right-3 bg-red-600 text-white text-[10px] font-bold tracking-wider px-2 py-0.5 rounded shadow-sm">
                        24x7 ACTIVE
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    {/* Unboxed Metadata Line (Zero-pill rule) */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2">
                      <span className="font-medium text-sky-800">{service.department}</span>
                      <span aria-hidden="true">·</span>
                      <span>{service.category}</span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-800 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
                      {service.shortDescription}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-1.5 text-[11px] text-slate-500 mb-5">
                      {service.features.slice(0, 2).map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-1.5 line-clamp-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0"></span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="px-5 pb-5 pt-0 flex items-center justify-between gap-3 border-t border-slate-100 pt-3">
                  <button
                    type="button"
                    onClick={() => onSelectService(service)}
                    className="text-xs font-semibold text-slate-700 hover:text-sky-700 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Learn More
                  </button>

                  <button
                    type="button"
                    onClick={() => onBookService(service.title)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-sky-50 text-sky-800 hover:bg-sky-700 hover:text-white rounded-lg text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <span>Enquire & Book</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
