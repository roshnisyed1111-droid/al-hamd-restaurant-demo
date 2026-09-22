import React, { useState } from 'react';
import { Star, Phone, UtensilsCrossed, Clock, CheckCircle2, ChevronDown, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { HeroDish3D } from './HeroDish3D';

interface HeroProps {
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu }) => {
  const [isTriggeringScroll, setIsTriggeringScroll] = useState(false);

  const handleScrollDown = () => {
    setIsTriggeringScroll(true);
    setTimeout(() => {
      setIsTriggeringScroll(false);
    }, 800);

    const target = document.getElementById('specialties') || document.getElementById('menu');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden bg-[#FAF7F2] pt-8 pb-14 lg:pt-14 lg:pb-20 border-b border-[#EAE4DA]">
      
      {/* Subtle Warm Decorative Background Architecture & Motifs */}
      <div className="absolute top-0 right-1/4 w-[520px] h-[520px] bg-[#F2ECE1] rounded-full blur-3xl opacity-65 -z-10 pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-96 h-96 bg-[#EFE9DF] rounded-full blur-3xl opacity-50 -z-10 pointer-events-none" />
      
      {/* Minimalist fine geometric lines / arch subtle accents */}
      <svg 
        className="absolute top-6 right-8 w-64 h-64 text-[#BF432F]/6 pointer-events-none -z-10" 
        viewBox="0 0 100 100" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1"
      >
        <circle cx="50" cy="50" r="45" strokeDasharray="3 3" />
        <circle cx="50" cy="50" r="32" />
        <path d="M50 5 L50 95 M5 50 L95 50" strokeDasharray="2 4" />
      </svg>
      <svg 
        className="absolute bottom-10 left-6 w-48 h-48 text-[#CA7826]/6 pointer-events-none -z-10" 
        viewBox="0 0 100 100" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1"
      >
        <rect x="15" y="15" width="70" height="70" rx="35" />
        <circle cx="50" cy="50" r="22" strokeDasharray="2 3" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Key Information */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center space-x-2.5 bg-white border border-[#EAE4DA] px-4 py-1.5 rounded-full w-fit shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
              <span className="text-xs font-semibold text-[#665E55] tracking-wide uppercase">
                Al-Hamd Restaurant & Bar B.Q. • Larkana, Sindh
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-[#231E1B] tracking-tight leading-[1.12]">
              Authentic Pakistani Taste, <br className="hidden sm:inline" />
              <span className="text-[#BF432F] italic font-serif">Served Fresh</span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-[#665E55] leading-relaxed max-w-2xl font-normal">
              {RESTAURANT_INFO.subtext}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="hero-explore-menu-btn"
                onClick={onExploreMenu}
                className="inline-flex items-center justify-center space-x-2.5 bg-[#BF432F] hover:bg-[#A63725] text-white px-7 py-3.5 rounded-xl font-bold text-base shadow-sm hover:shadow-md transition-all transform active:scale-98 cursor-pointer"
              >
                <UtensilsCrossed className="w-5 h-5" />
                <span>Explore Full Menu</span>
              </button>

              <a
                id="hero-call-now-btn"
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="inline-flex items-center justify-center space-x-2.5 bg-white hover:bg-[#FAF7F2] text-[#231E1B] border border-[#DDD6CB] hover:border-[#BF432F] px-7 py-3.5 rounded-xl font-bold text-base shadow-2xs hover:shadow-xs transition-all active:scale-98"
              >
                <Phone className="w-5 h-5 text-[#BF432F]" />
                <span>Call to Order: {RESTAURANT_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Verified Information Row */}
            <div className="pt-6 border-t border-[#EAE4DA] grid grid-cols-2 sm:grid-cols-4 gap-4">
              
              {/* Rating */}
              <div className="flex flex-col">
                <div className="flex items-center space-x-1.5 text-[#231E1B]">
                  <div className="flex text-[#BF432F]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-[#BF432F]" />
                    ))}
                  </div>
                  <span className="font-bold text-sm">4.2/5</span>
                </div>
                <span className="text-xs text-[#786E64] mt-0.5 font-medium">65 Google reviews</span>
              </div>

              {/* Service Types */}
              <div className="flex flex-col">
                <span className="font-bold text-sm text-[#231E1B] flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] mr-1" />
                  Dine-in • Takeout
                </span>
                <span className="text-xs text-[#786E64] mt-0.5 font-medium">Table service</span>
              </div>

              {/* Hours */}
              <div className="flex flex-col">
                <span className="font-bold text-sm text-[#231E1B] flex items-center">
                  <Clock className="w-4 h-4 text-[#BF432F] mr-1" />
                  Open Today
                </span>
                <span className="text-xs text-[#786E64] mt-0.5 font-medium">Until 2:00 AM</span>
              </div>

              {/* Budget Badge */}
              <div className="flex flex-col">
                <span className="inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded-md bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0] w-fit">
                  Budget-friendly
                </span>
                <span className="text-xs text-[#786E64] mt-0.5 font-medium">PKR 1,000 or less / person</span>
              </div>

            </div>

          </div>

          {/* Right Column: 3D Karahi Interactive Presentation */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <HeroDish3D isTriggeringScroll={isTriggeringScroll} />
          </div>

        </div>

        {/* Section Bottom: Directional Scroll Down Interaction Button */}
        <div className="mt-10 pt-4 flex flex-col items-center justify-center">
          <button
            id="hero-scroll-indicator"
            onClick={handleScrollDown}
            className="group inline-flex flex-col items-center space-y-1.5 text-xs font-semibold text-[#786E64] hover:text-[#BF432F] transition-colors cursor-pointer"
            aria-label="Scroll down to Specialties & Menu"
          >
            <span className="tracking-wider uppercase text-[10px] font-bold text-[#8C8276] group-hover:text-[#BF432F] transition-colors">
              Explore Specialties & Menu
            </span>
            <div className="w-8 h-8 rounded-full border border-[#EAE4DA] bg-white group-hover:border-[#BF432F] group-hover:bg-[#FAF7F2] shadow-2xs flex items-center justify-center transition-all transform group-hover:translate-y-1">
              <ChevronDown className="w-4 h-4 text-[#BF432F] animate-bounce-subtle" />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
};
