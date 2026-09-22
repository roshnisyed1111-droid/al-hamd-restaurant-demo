import React from 'react';
import { Star, Phone, UtensilsCrossed, Clock, CheckCircle2, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeroProps {
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu }) => {
  return (
    <section id="home" className="relative overflow-hidden bg-[#FBF9F5] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#EBE5DB]">
      {/* Decorative subtle texture/accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5ECE0] rounded-full blur-3xl opacity-60 -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F0E6D8] rounded-full blur-3xl opacity-40 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center space-x-2 bg-[#F2ECE1] border border-[#DDD4C4] px-3.5 py-1.5 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
              <span className="text-xs font-semibold text-[#544B3E] tracking-wide uppercase">
                Welcome to Al-Hamd • Larkana, Sindh
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-[#1C201E] tracking-tight leading-[1.15]">
              Authentic Pakistani Taste, <br className="hidden sm:inline" />
              <span className="text-[#C2410C] italic font-serif">Served Fresh</span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-[#524B42] leading-relaxed max-w-2xl">
              {RESTAURANT_INFO.subtext}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="hero-explore-menu-btn"
                onClick={onExploreMenu}
                className="inline-flex items-center justify-center space-x-2.5 bg-[#C2410C] hover:bg-[#A33406] text-white px-7 py-3.5 rounded-xl font-semibold text-base shadow-md hover:shadow-lg transition-all transform active:scale-95"
              >
                <UtensilsCrossed className="w-5 h-5" />
                <span>Explore Menu</span>
              </button>

              <a
                id="hero-call-now-btn"
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="inline-flex items-center justify-center space-x-2.5 bg-white hover:bg-[#F7F4EE] text-[#1C201E] border border-[#DCD5C9] px-7 py-3.5 rounded-xl font-semibold text-base shadow-xs hover:border-[#C2410C] transition-all"
              >
                <Phone className="w-5 h-5 text-[#C2410C]" />
                <span>Call Now: {RESTAURANT_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Verified Information Row */}
            <div className="pt-6 border-t border-[#E8E1D5] grid grid-cols-2 sm:grid-cols-4 gap-4">
              
              {/* Rating */}
              <div className="flex flex-col">
                <div className="flex items-center space-x-1.5 text-[#1C201E]">
                  <div className="flex text-[#F59E0B]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="font-bold text-sm">4.2/5</span>
                </div>
                <span className="text-xs text-[#736A5E] mt-0.5 font-medium">65 Google reviews</span>
              </div>

              {/* Service Types */}
              <div className="flex flex-col">
                <span className="font-bold text-sm text-[#1C201E] flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] mr-1" />
                  Dine-in • Takeout
                </span>
                <span className="text-xs text-[#736A5E] mt-0.5 font-medium">Table service</span>
              </div>

              {/* Hours */}
              <div className="flex flex-col">
                <span className="font-bold text-sm text-[#1C201E] flex items-center">
                  <Clock className="w-4 h-4 text-[#C2410C] mr-1" />
                  Open Today
                </span>
                <span className="text-xs text-[#736A5E] mt-0.5 font-medium">Until 2:00 AM</span>
              </div>

              {/* Budget Badge */}
              <div className="flex flex-col">
                <span className="inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded-md bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0] w-fit">
                  Budget-friendly
                </span>
                <span className="text-xs text-[#736A5E] mt-0.5 font-medium">PKR 1,000 or less / person</span>
              </div>

            </div>

          </div>

          {/* Right Column: Food Imagery Presentation */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative card frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-[#1C201E]">
                <img
                  src={RESTAURANT_INFO.images.hero}
                  alt="Pakistani Karahi and Tandoori dining spread at Al-Hamd Restaurant Larkana"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating caption overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-5 text-white">
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#FDBA74] mb-1">
                    Signature Culinary Tradition
                  </span>
                  <p className="text-sm sm:text-base font-medium text-white/95">
                    Fresh Karahi, Char-Grilled BBQ & Shahi Daal
                  </p>
                  <p className="text-xs text-white/70 flex items-center mt-1">
                    <MapPin className="w-3.5 h-3.5 mr-1 text-[#FDBA74]" />
                    G.T Road, Larkana, Sindh, Pakistan
                  </p>
                </div>
              </div>

              {/* Floating Badge on Corner */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-white rounded-2xl shadow-lg border border-[#E9E4DC] p-3.5 hidden sm:flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-[#FEF3C7] text-[#D97706] flex items-center justify-center font-bold text-lg">
                  ★
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1C201E] leading-tight">Authentic Taste</p>
                  <p className="text-[11px] text-[#78716C]">Larkana City Specialty</p>
                </div>
              </div>

              {/* Floating Small Dish Chip */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white rounded-2xl shadow-lg border border-[#E9E4DC] p-3 hidden sm:flex items-center space-x-3 max-w-[240px]">
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                  <img
                    src={RESTAURANT_INFO.images.karahi}
                    alt="Chicken Karahi"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-[#1C201E] truncate">Chicken Karahi</p>
                  <p className="text-[11px] font-semibold text-[#C2410C]">From PKR 1,600</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
