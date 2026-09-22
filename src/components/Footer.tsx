import React from 'react';
import { MapPin, Phone, Clock, UtensilsCrossed, ShieldCheck } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1C201E] text-[#D4CDC3] border-t border-[#2C322E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Identity & Description */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-[#C2410C] text-white flex flex-col items-center justify-center font-bold shadow-xs">
                <span className="text-[10px] tracking-widest uppercase">الحمد</span>
              </div>
              <div>
                <h3 className="text-lg font-bold font-display text-white tracking-tight leading-tight">
                  AL-HAMD RESTAURANT
                </h3>
                <span className="text-[11px] text-[#A6AEA8] uppercase tracking-wider block">
                  & Bar B.Q. • Larkana
                </span>
              </div>
            </div>

            <p className="text-xs text-[#A6AEA8] leading-relaxed">
              Authentic Pakistani dining specializing in freshly prepared chicken karahi woks, charcoal Bar B.Q., creamy shahi daal, and traditional dishes in Larkana, Sindh.
            </p>

            <div className="pt-2 flex items-center space-x-2 text-xs text-[#22C55E]">
              <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
              <span className="font-semibold">100% Halal Food Guaranteed</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A6AEA8]">
              <li>
                <a href="#home" className="hover:text-[#E87A5D] transition-colors">Home</a>
              </li>
              <li>
                <a href="#specialties" className="hover:text-[#E87A5D] transition-colors">Specialties</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#E87A5D] transition-colors">Full Food Menu</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#E87A5D] transition-colors">About Restaurant</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#E87A5D] transition-colors">Photo Gallery</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#E87A5D] transition-colors">Customer Reviews</a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#E87A5D] transition-colors">Location & Hours</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Specialties */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Confirmed Specialties
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A6AEA8]">
              <li className="flex justify-between">
                <span>Chicken Karahi (Red)</span>
                <span className="font-semibold text-white">PKR 1,600</span>
              </li>
              <li className="flex justify-between">
                <span>Chicken Peshawari Karahi</span>
                <span className="font-semibold text-white">PKR 1,800</span>
              </li>
              <li className="flex justify-between">
                <span>Chicken Shahi Karahi</span>
                <span className="font-semibold text-white">PKR 1,800</span>
              </li>
              <li className="flex justify-between">
                <span>Al-Hamd Special Shahi Daal</span>
                <span className="font-semibold text-white">PKR 400</span>
              </li>
              <li className="flex justify-between">
                <span>Singapuri Daal</span>
                <span className="font-semibold text-white">PKR 450</span>
              </li>
              <li className="flex justify-between">
                <span>Chicken Seekh Kabab</span>
                <span className="font-semibold text-white">PKR 500</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Contact & Location
            </h4>
            <div className="space-y-3 text-xs text-[#A6AEA8]">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#E87A5D] flex-shrink-0 mt-0.5" />
                <span>
                  G.T Road, near Shaikh Zaid Chowk, Muhalla Manzoorabad, <strong>Larkana</strong>, Sindh, Pakistan
                </span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#E87A5D] flex-shrink-0" />
                <a 
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="font-bold text-white hover:text-[#E87A5D] transition-colors"
                >
                  {RESTAURANT_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-[#E87A5D] flex-shrink-0" />
                <span>Daily: 12:00 PM – 2:00 AM</span>
              </div>
              <div className="pt-2">
                <span className="inline-block bg-[#2E3632] px-2.5 py-1 rounded text-[11px] text-[#E87A5D] font-bold">
                  {RESTAURANT_INFO.priceRange}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & City Identity */}
        <div className="pt-8 border-t border-[#2C322E] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#859089]">
          <p>
            © {new Date().getFullYear()} {RESTAURANT_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <span>Location: <strong>Larkana, Sindh, Pakistan</strong></span>
            <span>•</span>
            <span>Dine-in & Takeout</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
