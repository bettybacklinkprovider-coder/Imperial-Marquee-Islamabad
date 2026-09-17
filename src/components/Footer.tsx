import React from 'react';
import { PageRoute } from '../types';
import { VENUE_INFO } from '../data/venueData';
import { ImperialLogo } from './ImperialLogo';
import { Phone, MapPin, Mail, Crown, Facebook, Instagram, Twitter, Youtube, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  const handleLink = (route: PageRoute, action?: string) => {
    onNavigate(route);
    if (action) {
      setTimeout(() => {
        const el = document.getElementById(action === 'gallery' ? 'gallery-section' : 'contact-section');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#11100f] text-[#d6d3d1] border-t border-[#272422] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#272422]">
          
          {/* Col 1: Venue Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <ImperialLogo className="w-11 h-11 rounded-xl shadow-lg overflow-hidden" />
              <div>
                <span className="block font-serif-luxury text-2xl font-bold tracking-tight text-[#f5f5f4]">
                  IMPERIAL
                </span>
                <span className="block text-[10px] tracking-[0.25em] text-[#c5a059] uppercase font-semibold">
                  MARQUEE ISLAMABAD
                </span>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-[#a8a29e]">
              Imperial Marquee is Islamabad’s premier event hall for grand weddings, receptions, corporate galas, and special celebrations. Where elegant celebrations become unforgettable memories.
            </p>

            {/* Social Icons Placeholders */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#1c1917] border border-[#332f2c] flex items-center justify-center text-[#a8a29e] hover:text-[#c5a059] hover:border-[#c5a059] transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#1c1917] border border-[#332f2c] flex items-center justify-center text-[#a8a29e] hover:text-[#c5a059] hover:border-[#c5a059] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#1c1917] border border-[#332f2c] flex items-center justify-center text-[#a8a29e] hover:text-[#c5a059] hover:border-[#c5a059] transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#1c1917] border border-[#332f2c] flex items-center justify-center text-[#a8a29e] hover:text-[#c5a059] hover:border-[#c5a059] transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif-luxury text-lg font-semibold text-[#f5f5f4] border-b border-[#332f2c] pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => handleLink('home')}
                  className="hover:text-[#c5a059] transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-[#c5a059]" />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLink('about')}
                  className="hover:text-[#c5a059] transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-[#c5a059]" />
                  <span>About Us</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLink('services')}
                  className="hover:text-[#c5a059] transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-[#c5a059]" />
                  <span>Events & Services</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLink('gallery-contact', 'gallery')}
                  className="hover:text-[#c5a059] transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-[#c5a059]" />
                  <span>Gallery</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLink('gallery-contact', 'contact')}
                  className="hover:text-[#c5a059] transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-[#c5a059]" />
                  <span>Contact Us</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div className="space-y-4">
            <h3 className="font-serif-luxury text-lg font-semibold text-[#f5f5f4] border-b border-[#332f2c] pb-2 inline-block">
              Contact Information
            </h3>
            <ul className="space-y-3 text-xs">
              <li>
                <a 
                  href={`tel:${VENUE_INFO.phoneRaw}`}
                  className="flex items-start gap-3 hover:text-[#c5a059] transition-colors group"
                >
                  <div className="p-1.5 rounded bg-[#1c1917] border border-[#332f2c] group-hover:border-[#c5a059] shrink-0">
                    <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-[#888] uppercase tracking-wider">Phone</span>
                    <span className="font-medium text-[#f5f5f4]">{VENUE_INFO.phone}</span>
                  </div>
                </a>
              </li>
              <li>
                <a 
                  href={VENUE_INFO.mapUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-start gap-3 hover:text-[#c5a059] transition-colors group"
                >
                  <div className="p-1.5 rounded bg-[#1c1917] border border-[#332f2c] group-hover:border-[#c5a059] shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-[#888] uppercase tracking-wider">Address</span>
                    <span className="text-[#a8a29e] leading-tight block">{VENUE_INFO.address}</span>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded bg-[#1c1917] border border-[#332f2c] shrink-0">
                    <Mail className="w-3.5 h-3.5 text-[#c5a059]" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-[#888] uppercase tracking-wider">Email Inquiry</span>
                    <span className="text-[#a8a29e]">{VENUE_INFO.email}</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4: Booking & Hours */}
          <div className="space-y-4">
            <h3 className="font-serif-luxury text-lg font-semibold text-[#f5f5f4] border-b border-[#332f2c] pb-2 inline-block">
              Plan Your Event
            </h3>
            <p className="text-xs text-[#a8a29e] leading-relaxed">
              Bookings are open for upcoming wedding seasons, corporate dinners, and private celebrations.
            </p>
            <button
              onClick={onOpenBooking}
              className="w-full py-3 px-4 rounded gold-gradient-bg text-[#1c1917] font-semibold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity shadow-lg"
            >
              Book Your Event Today
            </button>
            <p className="text-[11px] text-[#78716c] italic">
              {VENUE_INFO.openingHours}
            </p>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#78716c]">
          <p>© 2026 Imperial Marquee. All Rights Reserved.</p>
          <p className="text-[11px]">Designed for Premium Wedding & Event Experiences in Islamabad</p>
        </div>
      </div>
    </footer>
  );
};
