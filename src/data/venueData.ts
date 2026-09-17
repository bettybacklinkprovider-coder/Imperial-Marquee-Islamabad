import { FeatureItem, GalleryItem, HighlightCard, ServiceCard } from '../types';

export const VENUE_INFO = {
  name: 'Imperial Marquee',
  fullName: 'Imperial Marquee Islamabad',
  tagline: 'Where Elegant Celebrations Become Unforgettable Memories',
  phone: '+92 333 2442428',
  phoneRaw: '+923332442428',
  address: 'NUST Exam Hall, Off Kashmir Highway, Opp Gate No. 1, H-13, Islamabad, Pakistan',
  locationShort: 'Opp. Gate No. 1 NUST, H-13, Islamabad',
  mapUrl: 'https://maps.google.com/?q=NUST+Exam+Hall+Off+Kashmir+Highway+H-13+Islamabad',
  googleEmbedMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.123456789!2d72.9876543!3d33.6456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbe123456789%3A0x9876543210!2sH-13%2C%20Islamabad%2C%20Pakistan!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk',
  email: 'info@imperialmarquee.pk',
  openingHours: 'Mon - Sun: 10:00 AM - 11:00 PM (Inquiries & Visits)',
};

// High resolution premium event marquee and luxury venue imagery
export const HERO_IMAGE = 'https://i.pinimg.com/736x/a8/93/75/a89375fb3bb0e4f4ef753017195cd206.jpg';
export const WELCOME_IMAGE = 'https://i.pinimg.com/736x/4a/3f/39/4a3f39776e740d145cf8f9a01f2c51eb.jpg';
export const ABOUT_BANNER_IMAGE = 'https://i.pinimg.com/736x/a8/93/75/a89375fb3bb0e4f4ef753017195cd206.jpg';

export const SERVICE_CARDS: ServiceCard[] = [
  {
    id: 'weddings',
    title: 'Weddings',
    shortDesc: 'Elegant and memorable wedding celebrations with beautiful décor and comfortable event arrangements.',
    fullDesc: 'Your wedding day deserves nothing short of grandeur. At Imperial Marquee, we transform your dream wedding into a fairy tale experience. From grand entrance walkways and intricate stage backdrops to exquisite crystal chandeliers and regal guest seating, our spacious hall accommodates large gatherings seamlessly with unmatched elegance.',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop',
    iconName: 'Crown',
    capacity: '500 - 1,500 Guests',
    features: ['Custom Stage & Floral Mandap', 'Bridal Suite Access', 'State-of-the-art Sound & Intelligent Lighting', 'Climate Controlled Grand Hall']
  },
  {
    id: 'receptions',
    title: 'Receptions',
    shortDesc: 'A sophisticated venue for reception dinners and large celebrations.',
    fullDesc: 'Host an unforgettable Walima or reception dinner in Islamabad’s premier event hall. We offer versatile banquet layouts, luxurious table setups, fine dining presentation, and spacious dance/stage areas designed for memorable speeches and family photographs.',
    imageUrl: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1000&auto=format&fit=crop',
    iconName: 'Sparkles',
    capacity: '400 - 1,200 Guests',
    features: ['Gourmet Buffet & Table Setup', 'Ambient Crystal Chandelier Lighting', 'Dedicated Valet Parking', 'Professional Banquet Staff']
  },
  {
    id: 'engagements',
    title: 'Engagements & Family Events',
    shortDesc: 'Perfect for engagements, birthdays, family gatherings, mehndi events, and other special occasions.',
    fullDesc: 'Celebrate intimate and vibrant family moments in an atmosphere filled with warmth and splendor. Whether it is a colorful Mehndi night with traditional dholki decor, a warm Engagement ring ceremony, or a landmark anniversary celebration, Imperial Marquee provides customizable floor plans tailored to your theme.',
    imageUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000&auto=format&fit=crop',
    iconName: 'HeartHandshake',
    capacity: '150 - 600 Guests',
    features: ['Vibrant Mehndi Setup Options', 'Themed Floral & Fabric Drapery', 'Private Lounge Area', 'Audio-Visual Integration']
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    shortDesc: 'Professional space for corporate dinners, conferences, meetings, seminars, and business events.',
    fullDesc: 'Impress your executive guests, international delegates, and company team members. Imperial Marquee is equipped with high-speed presentation setups, acoustics, stage rostrums, flexible theatre or round-table seating, and high-end catering options ideal for annual galas, product launches, and corporate summits.',
    imageUrl: 'https://i.pinimg.com/736x/27/dc/7e/27dc7e85a28dfecf4f65f3f5e6415498.jpg',
    iconName: 'Briefcase',
    capacity: '100 - 1,000 Guests',
    features: ['HD Projection & Screen Facilities', 'Podium & Wireless Microphones', 'Executive Buffet Options', 'Generous Parking Area']
  },
  {
    id: 'mehndi',
    title: 'Mehndi & Mayun Celebrations',
    shortDesc: 'Vibrant colors, traditional marigold setups, and rhythmic celebration arrangements.',
    fullDesc: 'Bring the joy of Pakistani Mehndi traditions to life! Our venue accommodates intricate folk stages, lively dance floors, vibrant lounge cushions, and traditional light strings for an unforgettable night of music and happiness.',
    imageUrl: 'https://i.pinimg.com/736x/eb/d9/16/ebd916563670dcd9d05b827d3204dcbc.jpg',
    iconName: 'Music',
    capacity: '200 - 800 Guests',
    features: ['Traditional Marigold & Light Decor', 'Custom Dance Floor Area', 'Specialty Food Stalls Integration', 'Acoustic Sound Treatment']
  },
  {
    id: 'private',
    title: 'Private Celebrations',
    shortDesc: 'Flexible arrangements for special private occasions, milestone birthdays, and qawwali nights.',
    fullDesc: 'From intimate Qawwali evenings under shimmering lights to grand milestone birthday galas, Imperial Marquee adapts to suit your exact visionary requirements with flawless hospitality and security.',
    imageUrl: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1000&auto=format&fit=crop',
    iconName: 'PartyPopper',
    capacity: '100 - 500 Guests',
    features: ['Custom Mood Lighting', 'Lounge Seating Layouts', 'Dedicated Security Staff', 'Catering Management']
  }
];

export const WHY_CHOOSE_ITEMS: FeatureItem[] = [
  {
    id: '1',
    title: 'Elegant & Spacious Venue',
    desc: 'Grand carpeted hall with soaring ceilings, opulent crystal chandeliers, and pillarless views for up to 1,500 guests.',
    icon: 'Maximize',
    imageUrl: 'https://i.pinimg.com/1200x/5c/73/c6/5c73c6123e9627fc5729acd785bcd443.jpg'
  },
  {
    id: '2',
    title: 'Premium Event Ambience',
    desc: 'Sophisticated interior architecture with customizable ambient LED lighting tailored to your wedding or corporate theme.',
    icon: 'Sparkles',
    imageUrl: 'https://i.pinimg.com/736x/70/6d/4c/706d4cfd82428cd6f6d3e7d46f4786d2.jpg'
  },
  {
    id: '3',
    title: 'Beautiful Décor Options',
    desc: 'Collaborations with top wedding designers for bespoke floral stages, royal walkways, drapery, and table centerpieces.',
    icon: 'Flower2',
    imageUrl: 'https://i.pinimg.com/736x/eb/d9/16/ebd916563670dcd9d05b827d3204dcbc.jpg'
  },
  {
    id: '4',
    title: 'Professional Event Arrangements',
    desc: 'Experienced venue management team taking care of sound, climate control, backup power generators, and smooth coordination.',
    icon: 'ShieldCheck',
    imageUrl: 'https://i.pinimg.com/1200x/23/d8/12/23d8123f833179c1bd3532f025476417.jpg'
  },
  {
    id: '5',
    title: 'Convenient Islamabad Location',
    desc: 'Prime position opposite NUST Gate No. 1 on Kashmir Highway (H-13), easily accessible from Rawalpindi and all Islamabad sectors.',
    icon: 'MapPin',
    imageUrl: 'https://i.pinimg.com/736x/77/2b/7d/772b7d923a99782714b1e5130ef4cd1c.jpg'
  },
  {
    id: '6',
    title: 'Memorable Guest Experience',
    desc: 'Dedicated bridal suite, clean executive restrooms, ample secure parking space, and warm Pakistani hospitality.',
    icon: 'Smile',
    imageUrl: 'https://i.pinimg.com/736x/a9/67/2c/a9672cf62a80f993d0f29bca1dd6ca2d.jpg'
  }
];

export const HIGHLIGHT_CARDS: HighlightCard[] = [
  {
    title: 'Spacious Event Area',
    desc: 'Accommodates large weddings and grand receptions without feeling crowded, offering flexible floor plans.',
    icon: 'LayoutGrid',
    imageUrl: 'https://i.pinimg.com/1200x/5c/73/c6/5c73c6123e9627fc5729acd785bcd443.jpg'
  },
  {
    title: 'Elegant Interior',
    desc: 'High ceilings, grand entry pathways, plush carpeting, and magnificent lighting for breathtaking photography.',
    icon: 'Building2',
    imageUrl: 'https://i.pinimg.com/736x/70/6d/4c/706d4cfd82428cd6f6d3e7d46f4786d2.jpg'
  },
  {
    title: 'Beautiful Décor',
    desc: 'From classic royal gold and ivory themes to modern minimalist floral concepts, we turn visions into reality.',
    icon: 'Palette',
    imageUrl: 'https://i.pinimg.com/736x/eb/d9/16/ebd916563670dcd9d05b827d3204dcbc.jpg'
  },
  {
    title: 'Flexible Event Setup',
    desc: 'Easily configured for banquets, theatre seating, buffet layouts, or stage performances.',
    icon: 'SlidersHorizontal',
    imageUrl: 'https://i.pinimg.com/736x/c2/0f/ba/c20fba03f44e00edbac486eca8523770.jpg'
  },
  {
    title: 'Comfortable Guest Seating',
    desc: 'Premium padded chairs, plush sofas for family, and spacious table arrangements for guest comfort.',
    icon: 'Armchair',
    imageUrl: 'https://i.pinimg.com/736x/a9/67/2c/a9672cf62a80f993d0f29bca1dd6ca2d.jpg'
  },
  {
    title: 'Professional Service',
    desc: 'Attentive, polite staff ensuring seamless coordination from guest arrival to event departure.',
    icon: 'UserCheck',
    imageUrl: 'https://i.pinimg.com/1200x/23/d8/12/23d8123f833179c1bd3532f025476417.jpg'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Imperial Grand Entrance & Lawn',
    category: 'Exterior',
    imageUrl: 'https://i.pinimg.com/1200x/5c/73/c6/5c73c6123e9627fc5729acd785bcd443.jpg',
    description: 'Illuminated evening facade and welcoming entrance pathway of Imperial Marquee.'
  },
  {
    id: 'g2',
    title: 'Royal Floral Wedding Stage',
    category: 'Stage Setup',
    imageUrl: 'https://i.pinimg.com/736x/1c/6d/f5/1c6df50478328ae84048b722c6eafa10.jpg',
    description: 'Bespoke wedding stage featuring fresh roses, crystal backdrop, and royal sofa seating.'
  },
  {
    id: 'g3',
    title: 'Grand Banquet Hall & Chandelier Ceiling',
    category: 'Interior',
    imageUrl: 'https://i.pinimg.com/736x/70/6d/4c/706d4cfd82428cd6f6d3e7d46f4786d2.jpg',
    description: 'Spacious carpeted marquee interior under warm crystal chandelier illumination.'
  },
  {
    id: 'g4',
    title: 'Ivory & Gold Reception Dining Setup',
    category: 'Dining',
    imageUrl: 'https://i.pinimg.com/736x/c2/0f/ba/c20fba03f44e00edbac486eca8523770.jpg',
    description: 'Elegantly set round guest tables with fine glassware and gold charger plates.'
  },
  {
    id: 'g5',
    title: 'Bridal Entrance Aisle & Lighting',
    category: 'Weddings',
    imageUrl: 'https://i.pinimg.com/736x/4a/3f/39/4a3f39776e740d145cf8f9a01f2c51eb.jpg',
    description: 'Romantic floral arches lining the walkway for the bride and groom entrance.'
  },
  {
    id: 'g6',
    title: 'Traditional Color Mehndi Stage',
    category: 'Décor',
    imageUrl: 'https://i.pinimg.com/736x/eb/d9/16/ebd916563670dcd9d05b827d3204dcbc.jpg',
    description: 'Vibrant marigold flowers, colorful drapery, and plush lounge seating for Mehndi night.'
  },
  {
    id: 'g7',
    title: 'Executive Corporate Conference Setup',
    category: 'Corporate Events',
    imageUrl: 'https://i.pinimg.com/736x/27/dc/7e/27dc7e85a28dfecf4f65f3f5e6415498.jpg',
    description: 'Professional seating arrangement with stage rostrum for business seminars.'
  },
  {
    id: 'g8',
    title: 'Walima Dinner Gala Table',
    category: 'Receptions',
    imageUrl: 'https://i.pinimg.com/736x/a9/67/2c/a9672cf62a80f993d0f29bca1dd6ca2d.jpg',
    description: 'Warm candlelight dining atmosphere for evening reception celebrations.'
  },
  {
    id: 'g9',
    title: 'Luxe Centerpiece & Table Decor',
    category: 'Décor',
    imageUrl: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1000&auto=format&fit=crop',
    description: 'Custom crystal vase centerpiece with white orchids and soft flickering candles.'
  },
  {
    id: 'g10',
    title: 'Marquee Night View & Parking Area',
    category: 'Exterior',
    imageUrl: 'https://i.pinimg.com/736x/77/2b/7d/772b7d923a99782714b1e5130ef4cd1c.jpg',
    description: 'Well-lit exterior view off Kashmir Highway H-13 Islamabad with ample parking.'
  },
  {
    id: 'g11',
    title: 'Engagements Ring Ceremony Stage',
    category: 'Stage Setup',
    imageUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000&auto=format&fit=crop',
    description: 'Modern minimal floral backdrop designed for ring exchange ceremonies.'
  },
  {
    id: 'g12',
    title: 'Luxury Buffet & Catering Display',
    category: 'Dining',
    imageUrl: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1000&auto=format&fit=crop',
    description: 'Hygienic and grand buffet setup featuring Pakistani and Continental cuisine.'
  }
];
