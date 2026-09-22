import React from 'react';
import { Star, Phone, UtensilsCrossed, Clock, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { HeroDish3D } from './HeroDish3D';

interface HeroProps {
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu }) => {
  return (
    <section id="home" className="relative overflow-hidden bg-[#FAF7F2] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#EAE4DA]">
      {/* Ambient Warm Studio Accents */}
      <div className="absolute top-0 right-1/4 w-[480px] h-[480px] bg-[#F2ECE1] rounded-full blur-3xl opacity-70 -z-10 pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-80 h-80 bg-[#EFE9DF] rounded-full blur-3xl opacity-60 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center space-x-2.5 bg-white border border-[#EAE4DA] px-4 py-1.5 rounded-full w-fit shadow-xs">
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
            <p className="text-base sm:text-lg text-[#665E55] leading-relaxed max-w-2xl">
              {RESTAURANT_INFO.subtext}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="hero-explore-menu-btn"
                onClick={onExploreMenu}
                className="inline-flex items-center justify-center space-x-2.5 bg-[#BF432F] hover:bg-[#A63725] text-white px-7 py-3.5 rounded-xl font-semibold text-base shadow-sm hover:shadow-md transition-all transform active:scale-95 cursor-pointer"
              >
                <UtensilsCrossed className="w-5 h-5" />
                <span>Explore Menu</span>
              </button>

              <a
                id="hero-call-now-btn"
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="inline-flex items-center justify-center space-x-2.5 bg-white hover:bg-[#F7F3ED] text-[#231E1B] border border-[#DDD6CB] px-7 py-3.5 rounded-xl font-semibold text-base shadow-xs hover:border-[#BF432F] transition-all"
              >
                <Phone className="w-5 h-5 text-[#BF432F]" />
                <span>Call Now: {RESTAURANT_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Verified Information Row */}
            <div className="pt-6 border-t border-[#EAE4DA] grid grid-cols-2 sm:grid-cols-4 gap-4">
              
              {/* Rating */}
              <div className="flex flex-col">
                <div className="flex items-center space-x-1.5 text-[#231E1B]">
                  <div className="flex text-[#D97706]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-[#D97706]" />
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

          {/* Right Column: 3D Karahi Presentation Feature */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <HeroDish3D />
          </div>

        </div>
      </div>
    </section>
  );
};
