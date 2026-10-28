import React from 'react';
import { Bone, Baby, Scissors, Droplets, Activity, Microscope, ArrowRight } from 'lucide-react';
import { DEPARTMENTS } from '../../data/servicesData';

interface DepartmentsSectionProps {
  onOpenAppointmentForDept: (deptName: string) => void;
}

export const DepartmentsSection: React.FC<DepartmentsSectionProps> = ({
  onOpenAppointmentForDept
}) => {
  const getDeptIcon = (id: string) => {
    switch (id) {
      case 'ortho':
        return <Bone className="w-6 h-6 text-sky-700" />;
      case 'obgy':
        return <Baby className="w-6 h-6 text-sky-700" />;
      case 'surgery':
        return <Scissors className="w-6 h-6 text-sky-700" />;
      case 'nephro':
        return <Droplets className="w-6 h-6 text-sky-700" />;
      case 'medicine':
        return <Activity className="w-6 h-6 text-sky-700" />;
      case 'diagnostics':
      default:
        return <Microscope className="w-6 h-6 text-sky-700" />;
    }
  };

  return (
    <section id="departments" className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold text-sky-800 tracking-wider uppercase block mb-2">
            Clinical Departments
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Specialized Medical & Surgical Divisions
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Each clinical department at Shashwat Hospital is supervised by verified consultant doctors with dedicated surgical instrumentation, diagnostics, and protocolized inpatient care.
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEPARTMENTS.map((dept) => (
            <div
              key={dept.id}
              className="bg-slate-50/70 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-sky-300 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-4 shadow-2xs">
                  {getDeptIcon(dept.id)}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  {dept.name}
                </h3>
                
                <p className="text-xs font-medium text-sky-800 mb-3">
                  {dept.tagline}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {dept.description}
                </p>

                {/* Key Treatments */}
                <div className="pt-3 border-t border-slate-200/80 mb-5">
                  <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-2">
                    Key Clinical Interventions:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {dept.keyTreatments.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] bg-white border border-slate-200 text-slate-600 px-2 py-0.5 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Consultant Lead */}
                {dept.leadSpecialist && (
                  <div className="text-[11px] text-slate-500 mb-4 bg-sky-50/70 p-2.5 rounded-lg border border-sky-100">
                    <span className="font-semibold text-sky-950 block">Consultant Panel:</span>
                    <span>{dept.leadSpecialist}</span>
                  </div>
                )}
              </div>

              {/* Action */}
              <button
                type="button"
                onClick={() => onOpenAppointmentForDept(dept.name)}
                className="inline-flex items-center justify-between w-full pt-3 border-t border-slate-200 text-xs font-semibold text-sky-800 hover:text-sky-900 transition-colors cursor-pointer"
              >
                <span>Book Department Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
