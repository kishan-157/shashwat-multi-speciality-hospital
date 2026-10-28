import React, { useState } from 'react';
import { X, Calendar, User, Phone, CheckCircle2, MessageSquare, AlertCircle, Clock } from 'lucide-react';
import { HOSPITAL_INFO } from '../../data/hospitalData';
import { VERIFIED_DOCTORS } from '../../data/doctorsData';
import { DEPARTMENTS } from '../../data/servicesData';
import { AppointmentData } from '../../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceOrDept?: string;
  initialDoctor?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialServiceOrDept,
  initialDoctor
}) => {
  const [formData, setFormData] = useState<AppointmentData>({
    patientName: '',
    phoneNumber: '',
    email: '',
    department: initialServiceOrDept || 'General Medicine & Critical Care',
    doctorName: initialDoctor || 'Any Available Specialist',
    preferredDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    preferredShift: 'Morning (10:00 AM - 02:00 PM)',
    notes: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.patientName.trim()) {
      errs.patientName = 'Please enter patient full name';
    } else if (formData.patientName.trim().length < 3) {
      errs.patientName = 'Name must be at least 3 characters';
    }

    const cleanPhone = formData.phoneNumber.replace(/[\s-]/g, '');
    if (!cleanPhone) {
      errs.phoneNumber = 'Please enter contact phone number';
    } else if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      errs.phoneNumber = 'Enter a valid 10-digit Indian mobile number';
    }

    if (!formData.preferredDate) {
      errs.preferredDate = 'Please select a date';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const ref = `SHW-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(ref);
    setIsSubmitted(true);
  };

  const handleWhatsAppForward = () => {
    const message = encodeURIComponent(
      `*New Appointment Request - Shashwat Hospital*\n` +
      `*Ref:* ${bookingRef}\n` +
      `*Patient:* ${formData.patientName}\n` +
      `*Phone:* ${formData.phoneNumber}\n` +
      `*Department:* ${formData.department}\n` +
      `*Doctor:* ${formData.doctorName}\n` +
      `*Preferred Date:* ${formData.preferredDate}\n` +
      `*Slot:* ${formData.preferredShift}\n` +
      (formData.notes ? `*Notes:* ${formData.notes}\n` : '') +
      `\nPlease review and confirm my OPD token.`
    );
    window.open(`https://wa.me/${HOSPITAL_INFO.phones.whatsappRaw}?text=${message}`, '_blank');
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      patientName: '',
      phoneNumber: '',
      email: '',
      department: 'General Medicine & Critical Care',
      doctorName: 'Any Available Specialist',
      preferredDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
      preferredShift: 'Morning (10:00 AM - 02:00 PM)',
      notes: ''
    });
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-sky-800 text-white px-6 py-5 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold">Book Doctor Consultation</h3>
            <p className="text-xs text-sky-100 mt-0.5">
              Shashwat Multi-Speciality Hospital · Savedi, Ahilyanagar
            </p>
          </div>
          <button
            onClick={handleReset}
            className="p-1.5 rounded-lg text-sky-200 hover:text-white hover:bg-sky-700 transition-colors focus:outline-hidden"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-1">
                Consultation Request Received
              </h4>
              <p className="text-sm text-slate-600 mb-4 max-w-md mx-auto">
                Your appointment enquiry has been assigned reference ID:
                <span className="font-mono font-bold text-sky-700 mx-1 block text-base mt-1">
                  {bookingRef}
                </span>
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left text-xs text-slate-700 mb-6 space-y-1.5">
                <div className="flex justify-between border-b border-slate-200 pb-1">
                  <span className="text-slate-500">Patient:</span>
                  <span className="font-semibold">{formData.patientName}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-1">
                  <span className="text-slate-500">Department / Doctor:</span>
                  <span className="font-semibold text-right">{formData.doctorName} ({formData.department})</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-1">
                  <span className="text-slate-500">Requested Schedule:</span>
                  <span className="font-semibold">{formData.preferredDate} · {formData.preferredShift}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Hospital Phone:</span>
                  <span className="font-semibold text-sky-700">{HOSPITAL_INFO.phones.emergency}</span>
                </div>
              </div>

              <div className="bg-sky-50 border border-sky-100 rounded-lg p-3 text-xs text-sky-900 text-left mb-6 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
                <span>
                  <strong>Note:</strong> This enquiry has been queued for desk verification. Our reception staff will call or WhatsApp you within 30 minutes during OPD hours to confirm exact slot availability.
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppForward}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-lg transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  Send to WhatsApp Helpdesk
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-lg transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Patient Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Patient Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. Ramesh Kulkarni"
                      value={formData.patientName}
                      onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                      className={`w-full pl-9 pr-3 py-2 text-sm border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-sky-600 ${
                        errors.patientName ? 'border-red-400 bg-red-50/50' : 'border-slate-300'
                      }`}
                    />
                  </div>
                  {errors.patientName && (
                    <p className="text-[11px] text-red-600 mt-1">{errors.patientName}</p>
                  )}
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      placeholder="10-digit mobile number"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      className={`w-full pl-9 pr-3 py-2 text-sm border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-sky-600 ${
                        errors.phoneNumber ? 'border-red-400 bg-red-50/50' : 'border-slate-300'
                      }`}
                    />
                  </div>
                  {errors.phoneNumber && (
                    <p className="text-[11px] text-red-600 mt-1">{errors.phoneNumber}</p>
                  )}
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Department */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Department / Specialty
                  </label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-sky-600 bg-white"
                  >
                    {DEPARTMENTS.map((dept) => (
                      <option key={dept.id} value={dept.name}>
                        {dept.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Doctor Selection */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Doctor
                  </label>
                  <select
                    value={formData.doctorName}
                    onChange={(e) => setFormData({ ...formData, doctorName: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-sky-600 bg-white"
                  >
                    <option value="Any Available Specialist">Any Available Specialist</option>
                    {VERIFIED_DOCTORS.map((doc) => (
                      <option key={doc.id} value={doc.name}>
                        {doc.name} ({doc.qualifications})
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Preferred Date */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className={`w-full pl-9 pr-3 py-2 text-sm border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-sky-600 ${
                        errors.preferredDate ? 'border-red-400 bg-red-50/50' : 'border-slate-300'
                      }`}
                    />
                  </div>
                  {errors.preferredDate && (
                    <p className="text-[11px] text-red-600 mt-1">{errors.preferredDate}</p>
                  )}
                </div>

                {/* Shift / Slot */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Time Slot
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <select
                      value={formData.preferredShift}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          preferredShift: e.target.value as AppointmentData['preferredShift']
                        })
                      }
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-sky-600 bg-white"
                    >
                      <option value="Morning (10:00 AM - 02:00 PM)">
                        Morning (10:00 AM - 02:00 PM)
                      </option>
                      <option value="Evening (05:00 PM - 09:00 PM)">
                        Evening (05:00 PM - 09:00 PM)
                      </option>
                    </select>
                  </div>
                </div>

              </div>

              {/* Message / Symptoms */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Symptoms / Medical Reason (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Briefly state symptoms or doctor referral details..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-sky-600"
                ></textarea>
              </div>

              {/* Emergency note */}
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <p>
                  <strong>For critical trauma or acute chest pain emergencies:</strong> Please do not wait for an online enquiry form. Call our 24x7 emergency helpline immediately at{' '}
                  <a href={`tel:${HOSPITAL_INFO.phones.emergency}`} className="font-bold underline text-amber-950">
                    {HOSPITAL_INFO.phones.emergency}
                  </a>{' '}
                  or report straight to the casualty desk.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-sky-700 hover:bg-sky-800 active:scale-[0.98] text-white text-xs font-semibold rounded-lg shadow-sm transition-all cursor-pointer"
                >
                  Submit Appointment Request
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
