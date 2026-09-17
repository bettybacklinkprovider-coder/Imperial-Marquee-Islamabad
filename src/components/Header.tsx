import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';
import { VENUE_INFO } from '../data/venueData';
import { ImperialLogo } from './ImperialLogo';
import { Phone, Calendar, Menu, X, Crown, MapPin } from 'lucide-react';

interface HeaderProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, onNavigate, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; route: PageRoute; action?: string }[] = [
    { label: 'Home', route: 'home' },
    { label: 'About Us', route: 'about' },
    { label: 'Events & Services', route: 'services' },
    { label: 'Gallery', route: 'gallery-contact', action: 'gallery' },
    { label: 'Contact Us', route: 'gallery-contact', action: 'contact' },
  ];

  const handleNavClick = (route: PageRoute, action?: string) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    
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
    <>
      {/* Top Banner Bar */}
      <div className="bg-[#1c1917] text-[#e7e5e4] text-xs py-2 px-4 border-b border-[#332f2c]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-[#a8a29e]">
            <a 
              href={`tel:${VENUE_INFO.phoneRaw}`} 
              className="flex items-center gap-1.5 hover:text-[#c5a059] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
              <span className="font-medium text-[#f5f5f4]">{VENUE_INFO.phone}</span>
            </a>
            <span className="hidden md:inline text-[#44403c]">|</span>
            <span className="hidden md:flex items-center gap-1.5 truncate">
              <MapPin className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
              <span>{VENUE_INFO.locationShort}</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#c5a059] font-medium tracking-wide uppercase text-[10px]">
              Premier Venue in Islamabad
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#1c1917]/95 backdrop-blur-md shadow-2xl py-3 border-b border-[#332f2c]' 
            : 'bg-[#1c1917] py-4 border-b border-[#27272a]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <button 
              onClick={() => handleNavClick('home')}
              className="group text-left flex items-center gap-3 focus:outline-none"
            >
              <ImperialLogo className="w-11 h-11 group-hover:scale-105 transition-transform shadow-lg rounded-xl overflow-hidden" />
              <div>
                <span className="block font-serif-luxury text-2xl font-bold tracking-tight text-[#f5f5f4] group-hover:text-[#c5a059] transition-colors">
                  IMPERIAL
                </span>
                <span className="block text-[10px] tracking-[0.25em] text-[#c5a059] uppercase font-semibold">
                  MARQUEE ISLAMABAD
                </span>
              </div>
            </button>

            {/* Desktop Navigation Menu */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item, idx) => {
                const isActive = currentRoute === item.route;
                return (
                  <button
                    key={idx}
                    onClick={() => handleNavClick(item.route, item.action)}
                    className={`text-sm font-medium tracking-wide transition-colors relative py-1 ${
                      isActive 
                        ? 'text-[#c5a059]' 
                        : 'text-[#e7e5e4] hover:text-[#c5a059]'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#c5a059] rounded-full shadow-[0_0_8px_#c5a059]" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* CTA Button & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-md gold-gradient-bg text-[#1c1917] font-semibold text-xs tracking-wider uppercase hover:shadow-[0_0_20px_rgba(197,160,89,0.4)] transition-all transform active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Now</span>
              </button>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-md text-[#e7e5e4] hover:text-[#c5a059] hover:bg-[#2a2624] transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#1c1917] border-b border-[#332f2c] px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-2">
              {navItems.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleNavClick(item.route, item.action)}
                  className={`text-left px-4 py-3 rounded-md font-medium text-sm transition-colors ${
                    currentRoute === item.route 
                      ? 'bg-[#2a2624] text-[#c5a059] border-l-2 border-[#c5a059]' 
                      : 'text-[#e7e5e4] hover:bg-[#272422] hover:text-[#c5a059]'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-3 border-t border-[#332f2c] flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-md gold-gradient-bg text-[#1c1917] font-semibold text-xs uppercase tracking-wider shadow-md"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Your Event</span>
                </button>
                
                <a
                  href={`tel:${VENUE_INFO.phoneRaw}`}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-md bg-[#272422] text-[#f5f5f4] font-medium text-xs border border-[#332f2c]"
                >
                  <Phone className="w-4 h-4 text-[#c5a059]" />
                  <span>Call {VENUE_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
