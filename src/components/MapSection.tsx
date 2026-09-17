import React from 'react';
import { MapPin, Navigation, Phone, Clock, ExternalLink } from 'lucide-react';
import { VENUE_INFO } from '../data/venueData';

export const MapSection: React.FC = () => {
  return (
    <div className="bg-[#11100f] text-[#e7e5e4] py-12 px-4 sm:px-6 lg:px-8 border-t border-[#272422]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Info Card */}
          <div className="bg-[#1c1917] p-8 rounded-xl border border-[#332f2c] shadow-xl flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c5a059] block mb-1">
                LOCATION & DIRECTIONS
              </span>
              <h3 className="font-serif-luxury text-2xl font-bold text-[#f5f5f4] mb-4">
                Visit Imperial Marquee
              </h3>
              <p className="text-xs text-[#a8a29e] leading-relaxed mb-6">
                Conveniently located on Kashmir Highway in sector H-13 Islamabad, directly opposite NUST Exam Hall & Gate No. 1. Easily accessible from both Rawalpindi and Islamabad.
              </p>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-[#272422] border border-[#332f2c] shrink-0 text-[#c5a059]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-semibold text-[#f5f5f4]">Address</span>
                    <span className="text-[#a8a29e] leading-relaxed">{VENUE_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-[#272422] border border-[#332f2c] shrink-0 text-[#c5a059]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-semibold text-[#f5f5f4]">Direct Phone</span>
                    <a href={`tel:${VENUE_INFO.phoneRaw}`} className="text-[#c5a059] font-medium hover:underline">
                      {VENUE_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-[#272422] border border-[#332f2c] shrink-0 text-[#c5a059]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-semibold text-[#f5f5f4]">Inquiry & Office Hours</span>
                    <span className="text-[#a8a29e]">{VENUE_INFO.openingHours}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#272422]">
              <a
                href={VENUE_INFO.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 rounded gold-gradient-bg text-[#1c1917] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:opacity-90 transition-opacity"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Driving Directions</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          </div>

          {/* Interactive Map Embed Frame */}
          <div className="lg:col-span-2 bg-[#1c1917] rounded-xl border border-[#332f2c] overflow-hidden min-h-[350px] relative shadow-2xl group">
            {/* Embedded Google Map Simulation / Map Visual */}
            <div className="w-full h-full min-h-[380px] bg-[#1a1a1a] relative flex items-center justify-center">
              <iframe
                title="Imperial Marquee Islamabad Location Map"
                src="https://maps.google.com/maps?q=NUST%20Exam%20Hall,%20Off%20Kashmir%20Highway,%20Opp%20Gate%20No.%201,%20H-13,%20Islamabad,%20Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px', filter: 'grayscale(0.3) contrast(1.1) invert(0.1)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full absolute inset-0"
              />
              
              {/* Floating Overlay Badge */}
              <div className="absolute bottom-4 left-4 bg-[#1c1917]/90 backdrop-blur-md px-4 py-2.5 rounded-lg border border-[#c5a059]/40 text-xs shadow-xl flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#c5a059] animate-ping" />
                <div>
                  <span className="font-bold text-[#f5f5f4] block">Imperial Marquee Islamabad</span>
                  <span className="text-[11px] text-[#a8a29e]">Opp. NUST Gate No. 1, Kashmir Highway</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
