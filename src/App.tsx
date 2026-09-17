import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { GALLERY_ITEMS } from './data/venueData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { Lightbox } from './components/Lightbox';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryContactPage } from './pages/GalleryContactPage';

export default function App() {
  // Parse initial route from window pathname
  const getInitialRoute = (): PageRoute => {
    const path = window.location.pathname.toLowerCase();
    if (path.includes('about')) return 'about';
    if (path.includes('service') || path.includes('event')) return 'services';
    if (path.includes('gallery') || path.includes('contact')) return 'gallery-contact';
    return 'home';
  };

  const [currentRoute, setCurrentRoute] = useState<PageRoute>(getInitialRoute);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingDefaultType, setBookingDefaultType] = useState<string>('Wedding');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Sync title and URL history
  useEffect(() => {
    let pageTitle = 'Imperial Marquee Islamabad | Weddings & Events';
    let path = '/';

    switch (currentRoute) {
      case 'home':
        pageTitle = 'Imperial Marquee Islamabad | Weddings & Events';
        path = '/';
        break;
      case 'about':
        pageTitle = 'About Imperial Marquee Islamabad';
        path = '/about';
        break;
      case 'services':
        pageTitle = 'Events & Services | Imperial Marquee Islamabad';
        path = '/services';
        break;
      case 'gallery-contact':
        pageTitle = 'Gallery & Contact | Imperial Marquee Islamabad';
        path = '/gallery-contact';
        break;
    }

    document.title = pageTitle;

    if (window.location.pathname !== path) {
      window.history.pushState({ route: currentRoute }, '', path);
    }
  }, [currentRoute]);

  // Listen to popstate (back/forward browser buttons)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(getInitialRoute());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (route: PageRoute) => {
    setCurrentRoute(route);
  };

  const handleOpenBooking = (eventType?: string) => {
    if (eventType) {
      setBookingDefaultType(eventType);
    }
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf9] text-[#1c1917] selection:bg-[#c5a059]/20 selection:text-[#b8860b]">
      
      {/* Sticky Universal Header */}
      <Header 
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking('Wedding')}
      />

      {/* Main Active Page View */}
      <main className="flex-grow">
        {currentRoute === 'home' && (
          <HomePage 
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
            onOpenLightbox={(idx) => setLightboxIndex(idx)}
          />
        )}

        {currentRoute === 'about' && (
          <AboutPage 
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking('Tour')}
          />
        )}

        {currentRoute === 'services' && (
          <ServicesPage 
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentRoute === 'gallery-contact' && (
          <GalleryContactPage 
            onOpenLightbox={(idx) => setLightboxIndex(idx)}
          />
        )}
      </main>

      {/* Universal Footer */}
      <Footer 
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking('General Inquiry')}
      />

      {/* Global Booking & Inquiry Modal */}
      <BookingModal 
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultEventType={bookingDefaultType}
      />

      {/* Global Image Lightbox */}
      <Lightbox 
        items={GALLERY_ITEMS}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />

    </div>
  );
}
