export type PageRoute = 'home' | 'about' | 'services' | 'gallery-contact';

export type GalleryCategory = 
  | 'All'
  | 'Weddings'
  | 'Receptions'
  | 'Décor'
  | 'Interior'
  | 'Exterior'
  | 'Dining'
  | 'Stage Setup'
  | 'Corporate Events';

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  imageUrl: string;
  description: string;
  aspect?: string;
}

export interface ServiceCard {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  imageUrl: string;
  iconName: string;
  features: string[];
  capacity?: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  desc: string;
  icon: string;
  imageUrl?: string;
}

export interface HighlightCard {
  title: string;
  desc: string;
  icon: string;
  imageUrl: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  eventType: string;
  preferredDate: string;
  guestCount: string;
  message: string;
}
