import React from 'react';
import { PageRoute } from '../types';
import { 
  VENUE_INFO, 
  ABOUT_BANNER_IMAGE, 
  WELCOME_IMAGE, 
  HIGHLIGHT_CARDS 
} from '../data/venueData';
import { 
  Crown, 
  CheckCircle2, 
  Heart, 
  ShieldCheck, 
  Sparkles, 
  Calendar, 
  Phone, 
  ArrowRight,
  LayoutGrid,
  Building2,
  Palette,
  SlidersHorizontal,
  Armchair,
  UserCheck
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenBooking }) => {
  const getHighlightIcon = (iconName: string) => {
    switch (iconName) {
      case 'LayoutGrid': return <LayoutGrid className="w-5 h-5 text-[#c5a059]" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-[#c5a059]" />;
      case 'Palette': return <Palette className="w-5 h-5 text-[#c5a059]" />;
      case 'SlidersHorizontal': return <SlidersHorizontal className="w-5 h-5 text-[#c5a059]" />;
      case 'Armchair': return <Armchair className="w-5 h-5 text-[#c5a059]" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5 text-[#c5a059]" />;
      default: return <Sparkles className="w-5 h-5 text-[#c5a059]" />;
    }
  };

  return (
    <div className="bg-[#fafaf9] text-[#1c1917]">
      
      {/* Page Header Banner */}
      <section className="relative py-20 bg-[#1c1917] text-white overflow-hidden border-b border-[#332f2c]">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src={ABOUT_BANNER_IMAGE} 
            alt="About Imperial Marquee Islamabad" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917] via-[#1c1917]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#11100f]/80 border border-[#c5a059]/40">
            <Crown className="w-4 h-4 text-[#c5a059]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#c5a059] font-semibold">
              ABOUT OUR VENUE
            </span>
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-6xl font-bold text-white">
            About Imperial Marquee
          </h1>

          <p className="font-serif-luxury text-lg sm:text-xl text-[#e7e5e4] italic max-w-2xl mx-auto">
            Islamabad’s Premier Destination for Elegant Weddings & Special Occasions
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section 1: About Imperial Marquee */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b8860b]">
              WHO WE ARE
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#1c1917]">
              Creating Unforgettable Memories in Islamabad
            </h2>
            <p className="text-sm text-[#44403c] leading-relaxed font-normal">
              Imperial Marquee was established with a singular vision: to offer a regal, spacious, and impeccably managed event venue in Islamabad where families and businesses can host landmark celebrations with ease and dignity.
            </p>
            <p className="text-sm text-[#57534e] leading-relaxed">
              Situated right off Kashmir Highway in sector H-13, opposite NUST Exam Hall Gate No. 1, our strategic location makes us convenient for guests arriving from all across Islamabad and Rawalpindi. From grand Barat processions to intimate corporate luncheons, our grand marquee hall sets the gold standard for venue hospitality.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1000&auto=format&fit=crop" 
              alt="Imperial Marquee Venue Architecture" 
              className="w-full h-80 sm:h-96 object-cover"
            />
          </div>
        </div>

        {/* Section 2: Our Venue */}
        <div className="bg-white p-8 sm:p-12 rounded-2xl border border-[#e7e5e4] shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 rounded-xl overflow-hidden shadow-xl border border-[#e7e5e4]">
            <img 
              src={WELCOME_IMAGE} 
              alt="Imperial Marquee Interior Setup" 
              className="w-full h-80 sm:h-96 object-cover"
            />
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b8860b]">
              VENUE ATMOSPHERE & FACILITY
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#1c1917]">
              Our Venue & Atmosphere
            </h2>
            <p className="text-sm text-[#44403c] leading-relaxed">
              Step into an expansive, pillarless carpeted hall adorned with crystal chandeliers, customizable mood lighting, and climate-controlled air conditioning.
            </p>
            
            <div className="space-y-3 text-xs text-[#57534e]">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#b8860b] shrink-0 mt-0.5" />
                <p><strong className="text-[#1c1917]">Spacious Capacity:</strong> Easily accommodates up to 1,500 guests with customized round table or theatre seating layouts.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#b8860b] shrink-0 mt-0.5" />
                <p><strong className="text-[#1c1917]">Décor Possibilities:</strong> Seamlessly supports custom floral stages, aisle mandaps, canopy drapes, and thematic light installations.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#b8860b] shrink-0 mt-0.5" />
                <p><strong className="text-[#1c1917]">Guest Amenities:</strong> Features private bridal dressing lounge, executive restroom facilities, and uninterrupted heavy-duty generator backup power.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Our Commitment */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#c5a059]/20 text-[#b8860b] mx-auto flex items-center justify-center">
            <Heart className="w-6 h-6" />
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#1c1917]">
            Our Commitment to Excellence
          </h2>
          <p className="text-sm text-[#57534e] leading-relaxed">
            We believe every event is a cherished story in the making. Our commitment is rooted in providing absolute comfort, regal elegance, and meticulous planning so host families and guests can focus entirely on celebrating their most precious moments.
          </p>
        </div>

        {/* Section 4: Venue Highlights Cards */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b8860b]">
              KEY ADVANTAGES
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#1c1917]">
              Venue Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {HIGHLIGHT_CARDS.map((card, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl border border-[#e7e5e4] shadow-sm hover:shadow-xl hover:border-[#c5a059] overflow-hidden transition-all duration-300 group"
              >
                <div className="h-44 overflow-hidden relative">
                  <img 
                    src={card.imageUrl} 
                    alt={card.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 p-2 rounded bg-black/80 backdrop-blur-sm border border-[#c5a059]/40">
                    {getHighlightIcon(card.icon)}
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="font-serif-luxury text-xl font-bold text-[#1c1917]">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#57534e] leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#1c1917] text-white p-10 sm:p-12 rounded-2xl border border-[#332f2c] text-center space-y-6 shadow-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c5a059]">
            READY TO CELEBRATE WITH US?
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white max-w-xl mx-auto">
            Experience the Imperial Standard in Person
          </h2>
          <p className="text-xs sm:text-sm text-[#a8a29e] max-w-md mx-auto leading-relaxed">
            Schedule a venue walkthrough with our management team or request a detailed quote for your event.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-3.5 rounded gold-gradient-bg text-[#1c1917] font-bold text-xs uppercase tracking-wider shadow-lg hover:opacity-95 transition-opacity"
            >
              Book Your Venue Tour
            </button>
            <button
              onClick={() => onNavigate('gallery-contact')}
              className="w-full sm:w-auto px-8 py-3.5 rounded bg-[#272422] text-[#f5f5f4] font-semibold text-xs uppercase tracking-wider border border-[#332f2c] hover:border-[#c5a059] transition-colors inline-flex items-center justify-center gap-2"
            >
              <span>Contact Imperial Marquee</span>
              <ArrowRight className="w-4 h-4 text-[#c5a059]" />
            </button>
          </div>
        </div>

      </section>

    </div>
  );
};
