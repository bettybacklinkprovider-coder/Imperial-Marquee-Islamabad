import React from 'react';

interface ImperialLogoProps {
  className?: string;
  size?: number;
  showCardBg?: boolean;
}

export const ImperialLogo: React.FC<ImperialLogoProps> = ({ 
  className = "w-10 h-10", 
  showCardBg = true 
}) => {
  return (
    <svg 
      viewBox="0 0 200 200" 
      className={className} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Metallic Gold Gradient */}
        <linearGradient id="imperialGoldMain" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f7eaaf" />
          <stop offset="25%" stopColor="#e5c158" />
          <stop offset="60%" stopColor="#c5a059" />
          <stop offset="85%" stopColor="#9e772d" />
          <stop offset="100%" stopColor="#6e4f16" />
        </linearGradient>

        {/* Highlight Gold Gradient */}
        <linearGradient id="imperialGoldHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#fff5cb" />
          <stop offset="50%" stopColor="#e2bd5d" />
          <stop offset="100%" stopColor="#a37c32" />
        </linearGradient>

        {/* Soft Drop Shadow */}
        <filter id="logoShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.6" />
        </filter>
      </defs>

      {/* Rounded Dark Card Background */}
      {showCardBg && (
        <rect width="200" height="200" rx="36" fill="#14110f" />
      )}

      <g filter="url(#logoShadow)">
        {/* === SERIF LETTER "I" === */}
        {/* Top Horizontal Serif */}
        <path 
          d="M 68 50 C 68 46 132 46 132 50 C 132 55 118 57 114 62 L 114 68 L 86 68 L 86 62 C 82 57 68 55 68 50 Z" 
          fill="url(#imperialGoldMain)" 
        />

        {/* Main Vertical Column */}
        <rect x="88" y="60" width="24" height="80" fill="url(#imperialGoldMain)" />

        {/* Bottom Horizontal Serif */}
        <path 
          d="M 68 150 C 68 145 82 143 86 138 L 86 132 L 114 132 L 114 138 C 118 143 132 145 132 150 Z" 
          fill="url(#imperialGoldMain)" 
        />

        {/* === DUAL ELEGANT SWOOSHES / RAYS === */}
        {/* Upper Wave Ribbon */}
        <path 
          d="M 32 114 C 58 114 82 100 102 96 C 126 92 154 82 172 68 C 146 82 122 92 98 94 C 74 96 52 108 32 114 Z" 
          fill="url(#imperialGoldHighlight)" 
        />

        {/* Lower Wave Ribbon */}
        <path 
          d="M 48 124 C 72 124 94 112 114 108 C 138 103 162 94 176 82 C 156 94 134 102 112 106 C 90 110 68 120 48 124 Z" 
          fill="url(#imperialGoldMain)" 
        />
      </g>
    </svg>
  );
};
