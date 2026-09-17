import React, { useState } from 'react';
import { GalleryCategory, GalleryItem } from '../types';
import { GALLERY_ITEMS, VENUE_INFO } from '../data/venueData';
import { MapSection } from '../components/MapSection';
import { 
  Crown, 
  Images, 
  Eye, 
  Phone, 
  MapPin, 
  Mail, 
  Send, 
  CheckCircle2, 
  Clock, 
  User, 
  Users, 
  Calendar as CalendarIcon, 
  MessageSquare,
  Sparkles
} from 'lucide-react';

interface GalleryContactPageProps {
  onOpenLightbox: (index: number) => void;
}

export const GalleryContactPage: React.FC<GalleryContactPageProps> = ({ onOpenLightbox }) => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('All');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [contactForm, setContactForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    eventType: 'Weddings',
    preferredDate: '',
    guestCount: '250 - 500',
    message: ''
  });

  const categories: GalleryCategory[] = [
    'All',
    'Weddings',
    'Receptions',
    'Décor',
    'Interior',
    'Exterior',
    'Dining',
    'Stage Setup',
    'Corporate Events'
  ];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-[#fafaf9] text-[#1c1917]">
      
      {/* Banner */}
      <section className="relative py-20 bg-[#1c1917] text-white overflow-hidden border-b border-[#332f2c]">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop" 
            alt="Imperial Marquee Gallery and Contact" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917] via-[#1c1917]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#11100f]/80 border border-[#c5a059]/40">
            <Images className="w-4 h-4 text-[#c5a059]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#c5a059] font-semibold">
              VENUE GALLERY & CONTACT
            </span>
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-6xl font-bold text-white">
            Gallery & Contact Us
          </h1>

          <p className="font-serif-luxury text-lg sm:text-xl text-[#e7e5e4] italic max-w-2xl mx-auto">
            Experience Our Real Venue Photography & Book Your Next Event in Islamabad
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* GALLERY SECTION                                           */}
      {/* ========================================================= */}
      <section id="gallery-section" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b8860b]">
            EVENT PHOTOGRAPHY
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#1c1917]">
            Imperial Marquee Gallery
          </h2>
          <p className="text-xs sm:text-sm text-[#57534e]">
            Filter through our curated gallery showcasing real wedding setups, grand marquee interiors, stage floral arrangements, and dining setups. Click any image to view in lightbox.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all ${
                  isActive 
                    ? 'gold-gradient-bg text-[#1c1917] shadow-md' 
                    : 'bg-white text-[#57534e] hover:text-[#1c1917] hover:bg-[#e7e5e4] border border-[#e7e5e4]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4">
          {filteredItems.map((item) => {
            // Find global index in GALLERY_ITEMS for Lightbox
            const globalIndex = GALLERY_ITEMS.findIndex(g => g.id === item.id);

            return (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(globalIndex >= 0 ? globalIndex : 0)}
                className="group relative h-72 rounded-xl overflow-hidden border border-[#e7e5e4] shadow-sm hover:shadow-2xl cursor-pointer bg-[#1c1917] transition-all duration-300"
              >
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                <div className="absolute inset-0 p-5 flex flex-col justify-between">
                  <span className="self-start px-3 py-1 rounded-full bg-[#1c1917]/80 text-[#c5a059] text-[10px] font-semibold uppercase border border-[#c5a059]/40 backdrop-blur-sm">
                    {item.category}
                  </span>

                  <div>
                    <h3 className="font-serif-luxury text-lg font-bold text-white leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#d6d3d1] line-clamp-2 mt-1">
                      {item.description}
                    </p>
                    <div className="mt-3 flex items-center gap-1.5 text-xs text-[#c5a059] font-medium uppercase tracking-wider">
                      <Eye className="w-4 h-4" />
                      <span>Enlarge Photo</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* ========================================================= */}
      {/* CONTACT US SECTION                                         */}
      {/* ========================================================= */}
      <section id="contact-section" className="py-16 bg-[#1c1917] text-[#f5f5f4] border-t border-[#332f2c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c5a059]">
              GET IN TOUCH
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white">
              Contact Imperial Marquee
            </h2>
            <p className="text-xs sm:text-sm text-[#a8a29e]">
              We look forward to welcoming you. Reach out via phone, visit our Islamabad office, or submit an inquiry form below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 bg-[#11100f] p-8 rounded-2xl border border-[#332f2c] space-y-8 shadow-2xl">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Crown className="w-6 h-6 text-[#c5a059]" />
                  <h3 className="font-serif-luxury text-2xl font-bold text-[#f5f5f4]">
                    Imperial Marquee
                  </h3>
                </div>
                <p className="text-xs text-[#a8a29e] leading-relaxed">
                  Premier event venue for weddings, receptions, corporate galas, and family celebrations in Islamabad.
                </p>
              </div>

              <div className="space-y-6 text-xs">
                <a 
                  href={`tel:${VENUE_INFO.phoneRaw}`}
                  className="flex items-start gap-4 p-4 rounded-xl bg-[#1c1917] border border-[#332f2c] hover:border-[#c5a059] transition-all group"
                >
                  <div className="p-3 rounded-lg bg-[#11100f] text-[#c5a059] border border-[#332f2c] group-hover:border-[#c5a059] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-[#a8a29e] uppercase font-semibold">Phone Number</span>
                    <span className="text-base font-bold text-[#f5f5f4] group-hover:text-[#c5a059] transition-colors">
                      {VENUE_INFO.phone}
                    </span>
                    <span className="block text-[10px] text-[#78716c] mt-0.5">Clickable tel link for immediate assistance</span>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#1c1917] border border-[#332f2c]">
                  <div className="p-3 rounded-lg bg-[#11100f] text-[#c5a059] border border-[#332f2c] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-[#a8a29e] uppercase font-semibold">Address</span>
                    <span className="text-xs text-[#f5f5f4] font-medium leading-relaxed block">
                      {VENUE_INFO.address}
                    </span>
                    <span className="block text-[10px] text-[#78716c] mt-1">Opposite Gate No. 1 NUST, H-13, Islamabad</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#1c1917] border border-[#332f2c]">
                  <div className="p-3 rounded-lg bg-[#11100f] text-[#c5a059] border border-[#332f2c] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-[#a8a29e] uppercase font-semibold">Inquiry Hours</span>
                    <span className="text-xs text-[#f5f5f4] font-medium block">
                      {VENUE_INFO.openingHours}
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7 bg-[#11100f] p-8 sm:p-10 rounded-2xl border border-[#332f2c] shadow-2xl">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#c5a059]/20 text-[#c5a059] mx-auto flex items-center justify-center border border-[#c5a059]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-serif-luxury text-3xl font-bold text-white">
                    Thank You For Your Inquiry!
                  </h3>
                  <p className="text-sm text-[#a8a29e] max-w-md mx-auto leading-relaxed">
                    We have received your event details for <span className="text-[#c5a059] font-medium">{contactForm.eventType}</span>. Representative will contact you at <span className="text-white">{contactForm.phone}</span> within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setContactForm({
                        fullName: '',
                        phone: '',
                        email: '',
                        eventType: 'Weddings',
                        preferredDate: '',
                        guestCount: '250 - 500',
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 rounded bg-[#272422] text-[#f5f5f4] text-xs font-semibold uppercase tracking-wider hover:bg-[#332f2c] transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div>
                    <h3 className="font-serif-luxury text-2xl font-bold text-white mb-1">
                      Event Inquiry Form
                    </h3>
                    <p className="text-xs text-[#a8a29e]">
                      Submit your preferred dates and guest count to receive venue pricing and custom decor estimates.
                    </p>
                  </div>

                  {/* Full Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#d6d3d1] mb-1">Full Name *</label>
                      <div className="relative">
                        <User className="w-4 h-4 absolute left-3 top-3 text-[#78716c]" />
                        <input
                          type="text"
                          required
                          placeholder="e.g. Muhammad Hassan"
                          value={contactForm.fullName}
                          onChange={(e) => setContactForm({ ...contactForm, fullName: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 bg-[#1c1917] border border-[#332f2c] rounded text-xs text-[#f5f5f4] focus:outline-none focus:border-[#c5a059]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#d6d3d1] mb-1">Phone Number *</label>
                      <div className="relative">
                        <Phone className="w-4 h-4 absolute left-3 top-3 text-[#78716c]" />
                        <input
                          type="tel"
                          required
                          placeholder="+92 333 0000000"
                          value={contactForm.phone}
                          onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 bg-[#1c1917] border border-[#332f2c] rounded text-xs text-[#f5f5f4] focus:outline-none focus:border-[#c5a059]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email & Event Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#d6d3d1] mb-1">Email Address</label>
                      <div className="relative">
                        <Mail className="w-4 h-4 absolute left-3 top-3 text-[#78716c]" />
                        <input
                          type="email"
                          placeholder="hassan@example.com"
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 bg-[#1c1917] border border-[#332f2c] rounded text-xs text-[#f5f5f4] focus:outline-none focus:border-[#c5a059]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#d6d3d1] mb-1">Event Type *</label>
                      <select
                        value={contactForm.eventType}
                        onChange={(e) => setContactForm({ ...contactForm, eventType: e.target.value })}
                        className="w-full px-3 py-2.5 bg-[#1c1917] border border-[#332f2c] rounded text-xs text-[#f5f5f4] focus:outline-none focus:border-[#c5a059]"
                      >
                        <option value="Weddings / Barat">Weddings / Barat</option>
                        <option value="Walima / Reception">Walima / Reception</option>
                        <option value="Engagement Ceremony">Engagement Ceremony</option>
                        <option value="Mehndi & Mayun">Mehndi & Mayun</option>
                        <option value="Corporate Events">Corporate Events</option>
                        <option value="Private Celebrations">Private Celebrations</option>
                      </select>
                    </div>
                  </div>

                  {/* Preferred Date & Guests */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#d6d3d1] mb-1">Preferred Date *</label>
                      <div className="relative">
                        <CalendarIcon className="w-4 h-4 absolute left-3 top-3 text-[#78716c]" />
                        <input
                          type="date"
                          required
                          value={contactForm.preferredDate}
                          onChange={(e) => setContactForm({ ...contactForm, preferredDate: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 bg-[#1c1917] border border-[#332f2c] rounded text-xs text-[#f5f5f4] focus:outline-none focus:border-[#c5a059]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#d6d3d1] mb-1">Number of Guests *</label>
                      <div className="relative">
                        <Users className="w-4 h-4 absolute left-3 top-3 text-[#78716c]" />
                        <select
                          value={contactForm.guestCount}
                          onChange={(e) => setContactForm({ ...contactForm, guestCount: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 bg-[#1c1917] border border-[#332f2c] rounded text-xs text-[#f5f5f4] focus:outline-none focus:border-[#c5a059]"
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
                    <label className="block text-xs font-medium text-[#d6d3d1] mb-1">Message / Requirements</label>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 absolute left-3 top-3 text-[#78716c]" />
                      <textarea
                        rows={3}
                        placeholder="Please share catering preferences, stage theme expectations, or specific questions..."
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 bg-[#1c1917] border border-[#332f2c] rounded text-xs text-[#f5f5f4] focus:outline-none focus:border-[#c5a059]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded gold-gradient-bg text-[#1c1917] font-bold text-xs uppercase tracking-wider shadow-lg hover:opacity-95 transition-opacity flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* Map Location Section */}
      <MapSection />

    </div>
  );
};
