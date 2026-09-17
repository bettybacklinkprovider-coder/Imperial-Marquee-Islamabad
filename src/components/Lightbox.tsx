import React, { useEffect } from 'react';
import { GalleryItem } from '../types';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ items, currentIndex, onClose, onNavigate }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + items.length) % items.length);
      }
      if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % items.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, items, onClose, onNavigate]);

  if (currentIndex === null || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200">
      
      {/* Top Close Bar */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-3">
        <span className="text-xs text-[#a8a29e] hidden sm:inline">
          {currentIndex + 1} / {items.length}
        </span>
        <button
          onClick={onClose}
          className="p-2 rounded-full bg-[#1c1917]/80 text-[#f5f5f4] hover:text-[#c5a059] border border-[#332f2c] transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => onNavigate((currentIndex - 1 + items.length) % items.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#1c1917]/80 text-[#f5f5f4] hover:text-[#c5a059] border border-[#332f2c] transition-all hover:scale-110"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={() => onNavigate((currentIndex + 1) % items.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#1c1917]/80 text-[#f5f5f4] hover:text-[#c5a059] border border-[#332f2c] transition-all hover:scale-110"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center p-2">
        <div className="relative group overflow-hidden rounded-lg shadow-2xl border border-[#332f2c]">
          <img
            src={currentItem.imageUrl}
            alt={currentItem.title}
            referrerPolicy="no-referrer"
            className="max-h-[70vh] w-auto object-contain rounded-lg shadow-2xl"
          />
        </div>

        {/* Caption Info */}
        <div className="mt-4 text-center max-w-2xl px-4">
          <span className="inline-block px-3 py-1 mb-2 rounded-full bg-[#c5a059]/20 text-[#c5a059] text-[11px] font-semibold tracking-wider uppercase border border-[#c5a059]/30">
            {currentItem.category}
          </span>
          <h3 className="font-serif-luxury text-2xl font-bold text-[#f5f5f4]">
            {currentItem.title}
          </h3>
          <p className="text-xs text-[#a8a29e] mt-1 leading-relaxed">
            {currentItem.description}
          </p>
        </div>
      </div>
    </div>
  );
};
