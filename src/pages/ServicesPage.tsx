import React from 'react';
import { PageRoute } from '../types';
import { SERVICE_CARDS, VENUE_INFO } from '../data/venueData';
import { 
  Crown, 
  Sparkles, 
  HeartHandshake, 
  Briefcase, 
  Music, 
  PartyPopper, 
  Check, 
  Phone, 
  Calendar, 
  Users,
  ArrowRight
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBooking: (eventType?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenBooking }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Crown': return <Crown className="w-6 h-6 text-[#c5a059]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#c5a059]" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-[#c5a059]" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-[#c5a059]" />;
      case 'Music': return <Music className="w-6 h-6 text-[#c5a059]" />;
      case 'PartyPopper': return <PartyPopper className="w-6 h-6 text-[#c5a059]" />;
      default: return <Sparkles className="w-6 h-6 text-[#c5a059]" />;
    }
  };

  return (
    <div className="bg-[#fafaf9] text-[#1c1917]">
      
      {/* Banner */}
      <section className="relative py-20 bg-[#1c1917] text-white overflow-hidden border-b border-[#332f2c]">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1600&auto=format&fit=crop" 
            alt="Events and Services Imperial Marquee" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917] via-[#1c1917]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#11100f]/80 border border-[#c5a059]/40">
            <Sparkles className="w-4 h-4 text-[#c5a059]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#c5a059] font-semibold">
              EVENT SERVICES
            </span>
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-6xl font-bold text-white">
            Events & Services at Imperial Marquee
          </h1>

          <p className="font-serif-luxury text-lg sm:text-xl text-[#e7e5e4] italic max-w-2xl mx-auto">
            From Regal Wedding Barat Ceremonies to High-Profile Corporate Seminars
          </p>
        </div>
      </section>

      {/* Service Detail Cards Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {SERVICE_CARDS.map((service, index) => {
          const isEven = index % 2 === 0;

          return (
            <div 
              key={service.id}
              className={`bg-white rounded-2xl border border-[#e7e5e4] shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0`}
            >
              {/* Image Side */}
              <div className={`lg:col-span-5 relative h-72 lg:h-auto min-h-[320px] ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
                <div className="absolute top-4 left-4 p-3 rounded-lg bg-[#1c1917]/90 backdrop-blur-md border border-[#c5a059]/40 shadow-lg">
                  {getServiceIcon(service.iconName)}
                </div>
              </div>

              {/* Text Side */}
              <div className={`lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e7e5e4] pb-4">
                    <h2 className="font-serif-luxury text-3xl font-bold text-[#1c1917]">
                      {service.title}
                    </h2>
                    {service.capacity && (
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#fafaf9] border border-[#e7e5e4] text-[#b8860b] text-xs font-semibold">
                        <Users className="w-3.5 h-3.5" />
                        <span>{service.capacity}</span>
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-[#44403c] leading-relaxed">
                    {service.fullDesc}
                  </p>

                  {/* Feature Checklist */}
                  <div className="pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#b8860b] mb-3">
                      Included Arrangement Highlights:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#57534e]">
                      {service.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-[#c5a059]/20 text-[#b8860b] flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3" />
                          </div>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-[#e7e5e4] flex flex-col sm:flex-row items-center gap-4">
                  <button
                    onClick={() => onOpenBooking(service.title)}
                    className="w-full sm:w-auto px-6 py-3 rounded gold-gradient-bg text-[#1c1917] font-bold text-xs uppercase tracking-wider shadow hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Inquire / Book {service.title}</span>
                  </button>

                  <a
                    href={`tel:${VENUE_INFO.phoneRaw}`}
                    className="w-full sm:w-auto px-6 py-3 rounded bg-[#fafaf9] border border-[#e7e5e4] hover:border-[#c5a059] text-[#1c1917] font-semibold text-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-[#b8860b]" />
                    <span>Call {VENUE_INFO.phone}</span>
                  </a>
                </div>

              </div>
            </div>
          );
        })}

      </section>

      {/* Final Call to Action Section */}
      <section className="bg-[#1c1917] text-white py-16 border-t border-[#332f2c]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c5a059]">
            PLAN YOUR CELEBRATION
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white">
            Ready to Plan Your Event?
          </h2>
          <p className="text-sm text-[#d6d3d1] max-w-xl mx-auto leading-relaxed">
            Contact our dedicated event coordination team at Imperial Marquee Islamabad to discuss dates, menu selection, stage design, and package customization.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${VENUE_INFO.phoneRaw}`}
              className="px-8 py-4 rounded gold-gradient-bg text-[#1c1917] font-bold text-sm uppercase tracking-wider shadow-xl flex items-center gap-3 hover:scale-105 transition-all"
            >
              <Phone className="w-5 h-5" />
              <span>Call +92 333 2442428</span>
            </a>

            <button
              onClick={() => onNavigate('gallery-contact')}
              className="px-8 py-4 rounded bg-[#272422] hover:bg-[#332f2c] text-[#f5f5f4] font-semibold text-xs uppercase tracking-wider border border-[#332f2c] transition-colors flex items-center gap-2"
            >
              <span>Visit Contact & Map Page</span>
              <ArrowRight className="w-4 h-4 text-[#c5a059]" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
