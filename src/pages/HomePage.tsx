import React from 'react';
import { PageRoute } from '../types';
import { 
  VENUE_INFO, 
  HERO_IMAGE, 
  WELCOME_IMAGE, 
  SERVICE_CARDS, 
  WHY_CHOOSE_ITEMS, 
  GALLERY_ITEMS 
} from '../data/venueData';
import { 
  Calendar, 
  Sparkles, 
  ArrowRight, 
  Phone, 
  MapPin, 
  Crown, 
  CheckCircle2, 
  Maximize, 
  Flower2, 
  ShieldCheck, 
  Smile,
  ChevronRight,
  Eye,
  Navigation
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBooking: (eventType?: string) => void;
  onOpenLightbox: (index: number) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenBooking, onOpenLightbox }) => {
  // First 4 service cards for Section 3
  const primaryServices = SERVICE_CARDS.slice(0, 4);

  // Preview 8 gallery items for Section 5
  const previewGallery = GALLERY_ITEMS.slice(0, 8);

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Maximize': return <Maximize className="w-6 h-6 text-[#c5a059]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#c5a059]" />;
      case 'Flower2': return <Flower2 className="w-6 h-6 text-[#c5a059]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#c5a059]" />;
      case 'MapPin': return <MapPin className="w-6 h-6 text-[#c5a059]" />;
      case 'Smile': return <Smile className="w-6 h-6 text-[#c5a059]" />;
      default: return <Sparkles className="w-6 h-6 text-[#c5a059]" />;
    }
  };

  return (
    <div className="space-y-0">
      
      {/* ========================================================= */}
      {/* SECTION 1 — HERO SECTION                                  */}
      {/* ========================================================= */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center bg-[#11100f] overflow-hidden">
        {/* Background Venue Image with Luxurious Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_IMAGE} 
            alt="Imperial Marquee Islamabad Grand Hall Venue" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[10000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#11100f] via-[#11100f]/75 to-[#11100f]/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(17,16,15,0.6)_100%)]" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-[#f5f5f4] space-y-6">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1c1917]/80 border border-[#c5a059]/40 backdrop-blur-md shadow-xl animate-in fade-in slide-in-from-top-4 duration-700">
            <Crown className="w-4 h-4 text-[#c5a059]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#c5a059] font-semibold">
              ISLAMABAD'S PREMIER EVENT VENUE
            </span>
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] drop-shadow-2xl animate-in fade-in duration-1000">
            Imperial Marquee <span className="block gold-gradient-text">Islamabad</span>
          </h1>

          <p className="font-serif-luxury text-xl sm:text-2xl lg:text-3xl font-medium text-[#e7e5e4] italic max-w-3xl mx-auto leading-relaxed">
            "{VENUE_INFO.tagline}"
          </p>

          <p className="text-sm sm:text-base text-[#d6d3d1] max-w-2xl mx-auto leading-relaxed font-light">
            Imperial Marquee provides an elegant, state-of-the-art venue for weddings, receptions, engagements, family celebrations, corporate events, and special occasions in Islamabad near NUST Kashmir Highway.
          </p>

          {/* Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-8 py-4 rounded-md gold-gradient-bg text-[#1c1917] font-bold text-xs uppercase tracking-[0.15em] shadow-[0_0_25px_rgba(197,160,89,0.3)] hover:shadow-[0_0_35px_rgba(197,160,89,0.5)] hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Event</span>
            </button>

            <button
              onClick={() => onNavigate('about')}
              className="w-full sm:w-auto px-8 py-4 rounded-md bg-[#1c1917]/80 hover:bg-[#272422] text-[#f5f5f4] font-semibold text-xs uppercase tracking-[0.15em] border border-[#c5a059]/40 hover:border-[#c5a059] transition-all flex items-center justify-center gap-2 backdrop-blur-md"
            >
              <span>Explore Our Venue</span>
              <ArrowRight className="w-4 h-4 text-[#c5a059]" />
            </button>
          </div>

        </div>

        {/* Decorative Bottom Arch Accent */}
        <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-[#fafaf9] to-transparent pointer-events-none" />
      </section>

      {/* ========================================================= */}
      {/* SECTION 2 — WELCOME TO IMPERIAL MARQUEE                    */}
      {/* ========================================================= */}
      <section className="py-20 bg-[#fafaf9] text-[#1c1917] border-b border-[#e7e5e4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Text Column */}
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 rounded bg-[#c5a059]/10 text-[#b8860b] text-xs font-semibold tracking-widest uppercase border border-[#c5a059]/30">
                SOPHISTICATED CELEBRATIONS
              </div>

              <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#1c1917] leading-tight">
                Welcome to <span className="text-[#b8860b]">Imperial Marquee</span>
              </h2>

              <p className="text-sm sm:text-base text-[#44403c] leading-relaxed font-normal">
                Imperial Marquee is thoughtfully designed for memorable celebrations in Islamabad. We offer an elegant atmosphere, spacious carpeted event facilities, beautiful decor possibilities, and professional event arrangements tailored to your personal vision.
              </p>

              <p className="text-sm text-[#57534e] leading-relaxed">
                Whether you are hosting a regal wedding Barat, a lavish Walima reception, a lively Mehndi night, or a high-level corporate dinner, our dedicated team ensures every detail—from ambient crystal lighting to guest seating—is flawlessly executed.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-[#e7e5e4]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#b8860b] shrink-0" />
                  <span className="text-xs font-semibold text-[#1c1917]">Capacity up to 1,500 Guests</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#b8860b] shrink-0" />
                  <span className="text-xs font-semibold text-[#1c1917]">Climate Controlled Hall</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#b8860b] shrink-0" />
                  <span className="text-xs font-semibold text-[#1c1917]">Custom Stage & Floral Decor</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#b8860b] shrink-0" />
                  <span className="text-xs font-semibold text-[#1c1917]">Prime Islamabad H-13 Location</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-6 py-3.5 rounded gold-gradient-bg text-[#1c1917] font-bold text-xs uppercase tracking-wider hover:shadow-lg transition-all inline-flex items-center gap-2"
                >
                  <span>Discover More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Image Column */}
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img 
                  src={WELCOME_IMAGE} 
                  alt="Imperial Marquee Interior Arrangement" 
                  referrerPolicy="no-referrer"
                  className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Floating Highlight Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-[#c5a059]/40 text-white">
                  <p className="font-serif-luxury text-lg font-bold text-[#f5f5f4]">
                    Unmatched Ambience & Space
                  </p>
                  <p className="text-xs text-[#d6d3d1] mt-0.5">
                    Located Opp. Gate 1 NUST, Off Kashmir Highway, Islamabad.
                  </p>
                </div>
              </div>
              
              {/* Decorative Background Frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#c5a059] rounded-2xl -z-10 hidden sm:block" />
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3 — EVENTS & SERVICES                              */}
      {/* ========================================================= */}
      <section className="py-20 bg-[#1c1917] text-[#f5f5f4] border-b border-[#332f2c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c5a059]">
              TAILORED CELEBRATIONS
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white">
              Events & Services
            </h2>
            <p className="text-xs sm:text-sm text-[#a8a29e] leading-relaxed">
              We specialize in hosting a wide spectrum of grand and intimate occasions with bespoke setups and refined hospitality.
            </p>
          </div>

          {/* 4 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {primaryServices.map((card) => (
              <div 
                key={card.id}
                className="group bg-[#11100f] rounded-xl border border-[#332f2c] hover:border-[#c5a059] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-xl"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={card.imageUrl} 
                      alt={card.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#11100f] via-transparent to-transparent" />
                    {card.capacity && (
                      <span className="absolute top-3 right-3 px-2.5 py-1 rounded bg-[#1c1917]/90 text-[#c5a059] text-[10px] font-semibold tracking-wider border border-[#c5a059]/30">
                        {card.capacity}
                      </span>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-3">
                    <h3 className="font-serif-luxury text-2xl font-bold text-[#f5f5f4] group-hover:text-[#c5a059] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs text-[#a8a29e] leading-relaxed">
                      {card.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Card Footer Button */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => onNavigate('services')}
                    className="w-full py-2.5 px-4 rounded border border-[#332f2c] group-hover:border-[#c5a059] bg-[#1c1917] hover:bg-[#c5a059] text-[#e7e5e4] hover:text-[#1c1917] text-xs font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-2"
                  >
                    <span>Learn More</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('services')}
              className="px-8 py-3.5 rounded gold-gradient-bg text-[#1c1917] font-bold text-xs uppercase tracking-wider hover:shadow-lg transition-all inline-flex items-center gap-2"
            >
              <span>View All Events & Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4 — WHY CHOOSE IMPERIAL MARQUEE                    */}
      {/* ========================================================= */}
      <section className="py-20 bg-[#fafaf9] text-[#1c1917] border-b border-[#e7e5e4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b8860b]">
              EXCELLENCE & DISTINCTION
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#1c1917]">
              Why Choose Imperial Marquee?
            </h2>
            <p className="text-xs sm:text-sm text-[#57534e] leading-relaxed">
              We bring together architectural elegance, premier location, and hospitable event management to ensure your special day is seamless.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_CHOOSE_ITEMS.map((item) => (
              <div 
                key={item.id}
                className="bg-white rounded-xl border border-[#e7e5e4] shadow-sm hover:shadow-xl hover:border-[#c5a059] transition-all duration-300 overflow-hidden group flex flex-col justify-between"
              >
                {item.imageUrl && (
                  <div className="relative h-44 w-full overflow-hidden bg-[#1c1917]">
                    <img 
                      src={item.imageUrl} 
                      alt={item.title} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
                  </div>
                )}
                <div className="p-8 pt-4 space-y-3 flex-1 flex flex-col justify-start">
                  <div className="w-12 h-12 rounded-lg bg-[#fafaf9] border border-[#e7e5e4] group-hover:border-[#c5a059] group-hover:bg-[#c5a059]/10 flex items-center justify-center transition-colors">
                    {getIconComponent(item.icon)}
                  </div>
                  <h3 className="font-serif-luxury text-2xl font-bold text-[#1c1917] group-hover:text-[#b8860b] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#57534e] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5 — GALLERY PREVIEW                                */}
      {/* ========================================================= */}
      <section className="py-20 bg-[#11100f] text-[#f5f5f4] border-b border-[#272422]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c5a059]">
                VISUAL SHOWCASE
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white">
                Experience Imperial Marquee
              </h2>
              <p className="text-xs sm:text-sm text-[#a8a29e] max-w-xl">
                Explore real event photography featuring exterior views, interior hall setups, wedding stages, and reception dining arrangements.
              </p>
            </div>

            <div>
              <button
                onClick={() => onNavigate('gallery-contact')}
                className="px-6 py-3 rounded gold-gradient-bg text-[#1c1917] font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                <span>View Full Gallery</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {previewGallery.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(idx)}
                className="group relative h-64 rounded-lg overflow-hidden border border-[#332f2c] cursor-pointer bg-[#1c1917]"
              >
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                <div className="absolute inset-0 p-4 flex flex-col justify-between">
                  <span className="self-start px-2.5 py-0.5 rounded-full bg-[#1c1917]/80 text-[#c5a059] text-[10px] font-semibold uppercase border border-[#c5a059]/40 backdrop-blur-sm">
                    {item.category}
                  </span>

                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-serif-luxury text-lg font-bold text-white leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-[#a8a29e] line-clamp-1 mt-0.5">
                      {item.description}
                    </p>
                    <div className="mt-2 flex items-center gap-1 text-[10px] text-[#c5a059] font-medium uppercase">
                      <Eye className="w-3 h-3" />
                      <span>Click to view</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('gallery-contact')}
              className="px-8 py-3.5 rounded bg-[#1c1917] hover:bg-[#272422] border border-[#c5a059]/50 text-[#f5f5f4] font-semibold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2"
            >
              <span>View Full Gallery Page ({GALLERY_ITEMS.length} Photos)</span>
              <ArrowRight className="w-4 h-4 text-[#c5a059]" />
            </button>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 6 — CONTACT / BOOKING CTA                          */}
      {/* ========================================================= */}
      <section className="py-20 bg-gradient-to-b from-[#1c1917] to-[#11100f] text-white relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c5a059]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          <div className="w-12 h-12 rounded-full bg-[#c5a059]/20 border border-[#c5a059] text-[#c5a059] mx-auto flex items-center justify-center">
            <Crown className="w-6 h-6" />
          </div>

          <div className="space-y-3">
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white">
              Plan Your Next Celebration With Imperial Marquee
            </h2>
            <p className="text-sm sm:text-base text-[#d6d3d1] max-w-2xl mx-auto leading-relaxed font-light">
              Make your special occasion memorable with an elegant venue in Islamabad. Contact Imperial Marquee today to discuss your event and booking requirements.
            </p>
          </div>

          {/* Contact Details Bar */}
          <div className="max-w-2xl mx-auto bg-[#11100f]/90 p-6 rounded-xl border border-[#332f2c] shadow-2xl space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-around gap-4 text-xs">
              <a 
                href={`tel:${VENUE_INFO.phoneRaw}`}
                className="flex items-center gap-2 hover:text-[#c5a059] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#c5a059]" />
                <span className="font-semibold text-sm text-[#f5f5f4]">{VENUE_INFO.phone}</span>
              </a>

              <span className="hidden sm:inline text-[#332f2c]">|</span>

              <div className="flex items-center gap-2 text-[#a8a29e] text-center sm:text-left">
                <MapPin className="w-4 h-4 text-[#c5a059] shrink-0" />
                <span>{VENUE_INFO.locationShort}</span>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${VENUE_INFO.phoneRaw}`}
              className="w-full sm:w-auto px-8 py-4 rounded-md gold-gradient-bg text-[#1c1917] font-bold text-xs uppercase tracking-[0.15em] shadow-[0_0_20px_rgba(197,160,89,0.3)] hover:shadow-[0_0_30px_rgba(197,160,89,0.5)] transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now ({VENUE_INFO.phone})</span>
            </a>

            <a
              href={VENUE_INFO.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-md bg-[#272422] hover:bg-[#332f2c] text-[#f5f5f4] font-semibold text-xs uppercase tracking-[0.15em] border border-[#332f2c] transition-all flex items-center justify-center gap-2"
            >
              <Navigation className="w-4 h-4 text-[#c5a059]" />
              <span>Get Directions</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
};
