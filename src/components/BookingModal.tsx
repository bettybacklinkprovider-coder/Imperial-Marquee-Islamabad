import React, { useState } from 'react';
import { X, Calendar, Phone, CheckCircle2, User, Mail, Users, MessageSquare, Clock } from 'lucide-react';
import { VENUE_INFO } from '../data/venueData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultEventType?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, defaultEventType = 'Wedding' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    eventType: defaultEventType || 'Wedding',
    preferredDate: '',
    guestCount: '300-500',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      eventType: 'Wedding',
      preferredDate: '',
      guestCount: '300-500',
      message: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#1c1917] border border-[#332f2c] rounded-xl shadow-2xl overflow-hidden text-[#e7e5e4]">
        
        {/* Modal Header */}
        <div className="bg-[#11100f] px-6 py-4 border-b border-[#272422] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#c5a059]" />
            <h3 className="font-serif-luxury text-xl font-bold text-[#f5f5f4]">
              Book Your Event at Imperial Marquee
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-[#a8a29e] hover:text-[#f5f5f4] hover:bg-[#272422] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#c5a059]/20 text-[#c5a059] mx-auto flex items-center justify-center border border-[#c5a059]">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-serif-luxury text-2xl font-bold text-[#f5f5f4]">
                Inquiry Received Successfully!
              </h4>
              <p className="text-sm text-[#a8a29e] max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-[#f5f5f4] font-semibold">{formData.fullName}</span>. Our event management team at Imperial Marquee Islamabad will review your request for <span className="text-[#c5a059] font-medium">{formData.eventType}</span> and contact you shortly at <span className="text-[#f5f5f4]">{formData.phone}</span>.
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`tel:${VENUE_INFO.phoneRaw}`}
                  className="w-full sm:w-auto px-5 py-2.5 rounded gold-gradient-bg text-[#1c1917] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Us Now ({VENUE_INFO.phone})</span>
                </a>
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-5 py-2.5 rounded bg-[#272422] text-[#e7e5e4] font-medium text-xs hover:bg-[#332f2c] transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-[#a8a29e]">
                Fill out the form below to check availability, discuss custom decor options, or request an official quote for your event.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-medium text-[#d6d3d1] mb-1">Full Name *</label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-3 text-[#78716c]" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ali Ahmed"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 bg-[#11100f] border border-[#332f2c] rounded text-sm text-[#f5f5f4] focus:outline-none focus:border-[#c5a059]"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-medium text-[#d6d3d1] mb-1">Phone Number *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3 top-3 text-[#78716c]" />
                    <input
                      type="tel"
                      required
                      placeholder="+92 300 0000000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 bg-[#11100f] border border-[#332f2c] rounded text-sm text-[#f5f5f4] focus:outline-none focus:border-[#c5a059]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email Address */}
                <div>
                  <label className="block text-xs font-medium text-[#d6d3d1] mb-1">Email Address</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3 top-3 text-[#78716c]" />
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 bg-[#11100f] border border-[#332f2c] rounded text-sm text-[#f5f5f4] focus:outline-none focus:border-[#c5a059]"
                    />
                  </div>
                </div>

                {/* Event Type */}
                <div>
                  <label className="block text-xs font-medium text-[#d6d3d1] mb-1">Event Type *</label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-3 py-2 bg-[#11100f] border border-[#332f2c] rounded text-sm text-[#f5f5f4] focus:outline-none focus:border-[#c5a059]"
                  >
                    <option value="Wedding / Barat">Wedding / Barat</option>
                    <option value="Walima / Reception">Walima / Reception</option>
                    <option value="Engagement Ceremony">Engagement Ceremony</option>
                    <option value="Mehndi & Mayun">Mehndi & Mayun</option>
                    <option value="Corporate Event / Seminar">Corporate Event / Seminar</option>
                    <option value="Birthday / Family Gathering">Birthday / Family Gathering</option>
                    <option value="Other Celebration">Other Celebration</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Preferred Date */}
                <div>
                  <label className="block text-xs font-medium text-[#d6d3d1] mb-1">Preferred Date *</label>
                  <div className="relative">
                    <Clock className="w-4 h-4 absolute left-3 top-3 text-[#78716c]" />
                    <input
                      type="date"
                      required
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 bg-[#11100f] border border-[#332f2c] rounded text-sm text-[#f5f5f4] focus:outline-none focus:border-[#c5a059]"
                    />
                  </div>
                </div>

                {/* Estimated Guests */}
                <div>
                  <label className="block text-xs font-medium text-[#d6d3d1] mb-1">Estimated Guests *</label>
                  <div className="relative">
                    <Users className="w-4 h-4 absolute left-3 top-3 text-[#78716c]" />
                    <select
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 bg-[#11100f] border border-[#332f2c] rounded text-sm text-[#f5f5f4] focus:outline-none focus:border-[#c5a059]"
                    >
                      <option value="100 - 250">100 - 250 Guests</option>
                      <option value="250 - 500">250 - 500 Guests</option>
                      <option value="500 - 800">500 - 800 Guests</option>
                      <option value="800 - 1200">800 - 1,200 Guests</option>
                      <option value="1200+">1,200+ Guests</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-medium text-[#d6d3d1] mb-1">Event Details / Special Requirements</label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 absolute left-3 top-3 text-[#78716c]" />
                  <textarea
                    rows={3}
                    placeholder="Tell us about decor preferences, catering needs, stage layout, etc."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 bg-[#11100f] border border-[#332f2c] rounded text-sm text-[#f5f5f4] focus:outline-none focus:border-[#c5a059]"
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded text-xs font-medium text-[#a8a29e] hover:text-[#f5f5f4] hover:bg-[#272422]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded gold-gradient-bg text-[#1c1917] font-semibold text-xs uppercase tracking-wider shadow-lg hover:opacity-95 transition-opacity"
                >
                  Submit Booking Inquiry
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
