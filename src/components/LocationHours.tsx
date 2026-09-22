import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  Calendar, 
  DollarSign, 
  CheckCircle,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { RESTAURANT_INFO, WEEKLY_HOURS } from '../data/restaurantData';

export const LocationHours: React.FC = () => {
  const [hoursExpanded, setHoursExpanded] = useState(false);
  const [selectedDay, setSelectedDay] = useState<string>('Tuesday');

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Al-Hamd Restaurant & Bar B.Q. Larkana Sindh Pakistan G.T Road near Shaikh Zaid Chowk')}`;

  return (
    <section id="location" className="py-16 sm:py-24 bg-[#FBF9F5] border-b border-[#EBE5DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-[#C2410C] font-semibold text-xs tracking-wider uppercase mb-2">
            <MapPin className="w-4 h-4" />
            <span>Visit Us in Larkana, Sindh</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#1C201E] tracking-tight">
            Location, Contact & Operating Hours
          </h2>
          <p className="mt-3 text-base text-[#61584D]">
            Conveniently located on G.T Road near Shaikh Zaid Chowk in Larkana. Open daily for lunch, dinner, and late-night cravings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Address, Phone, Price & Interactive Hours */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            
            {/* Primary Details Card */}
            <div className="bg-white rounded-2xl border border-[#E5DFD4] p-6 sm:p-8 shadow-xs">
              <div className="border-b border-[#EDE6DB] pb-6 mb-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#C2410C] block mb-1">
                  Restaurant Address
                </span>
                <h3 className="text-2xl font-bold font-display text-[#1C201E] mb-2">
                  {RESTAURANT_INFO.name}
                </h3>
                <p className="text-base text-[#473F35] leading-relaxed flex items-start">
                  <MapPin className="w-5 h-5 text-[#C2410C] mr-2 flex-shrink-0 mt-0.5" />
                  <span>
                    G.T Road, near Shaikh Zaid Chowk,<br />
                    Muhalla Manzoorabad, <strong>Larkana</strong>, Sindh, Pakistan
                  </span>
                </p>
              </div>

              {/* Contact Information & Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-[#FBF9F5] border border-[#E8E1D5]">
                  <span className="text-xs font-semibold text-[#73695C] block mb-1">
                    Phone / Orders
                  </span>
                  <a 
                    href={`tel:${RESTAURANT_INFO.phone}`}
                    className="text-base font-bold text-[#C2410C] hover:underline flex items-center"
                  >
                    <Phone className="w-4 h-4 mr-1.5" />
                    {RESTAURANT_INFO.phoneDisplay}
                  </a>
                  <span className="text-[11px] text-[#73695C] block mt-1">Direct call for orders & takeaway</span>
                </div>

                <div className="p-4 rounded-xl bg-[#FBF9F5] border border-[#E8E1D5]">
                  <span className="text-xs font-semibold text-[#73695C] block mb-1">
                    City & Region
                  </span>
                  <p className="text-base font-bold text-[#1C201E]">
                    Larkana, Sindh
                  </p>
                  <span className="text-[11px] text-[#73695C] block mt-1">Pakistan</span>
                </div>
              </div>

              {/* Price Range & Budget Badge */}
              <div className="p-4 rounded-xl bg-[#ECFDF5] border border-[#A7F3D0] flex flex-wrap items-center justify-between gap-3 mb-6">
                <div>
                  <span className="text-xs font-bold text-[#065F46] block uppercase tracking-wider">
                    Price Range
                  </span>
                  <p className="text-sm font-semibold text-[#047857]">
                    {RESTAURANT_INFO.priceRange}
                  </p>
                </div>
                <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#10B981] text-white text-xs font-bold shadow-xs">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>{RESTAURANT_INFO.budgetBadge}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  id="location-get-directions-btn"
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center space-x-2 bg-[#1C201E] hover:bg-[#333A36] text-white py-3.5 px-6 rounded-xl font-semibold text-sm shadow-sm transition-all"
                >
                  <Navigation className="w-4 h-4 text-[#F59E0B]" />
                  <span>Get Directions</span>
                </a>

                <a
                  id="location-call-now-btn"
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="flex-1 inline-flex items-center justify-center space-x-2 bg-[#C2410C] hover:bg-[#A33406] text-white py-3.5 px-6 rounded-xl font-semibold text-sm shadow-sm transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {RESTAURANT_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Weekly Operating Hours Component */}
            <div className="bg-white rounded-2xl border border-[#E5DFD4] p-6 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2.5">
                  <Clock className="w-5 h-5 text-[#C2410C]" />
                  <div>
                    <h4 className="text-base font-bold text-[#1C201E]">
                      Operating Schedule
                    </h4>
                    <p className="text-xs text-[#16A34A] font-semibold flex items-center mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-[#16A34A] mr-1.5 animate-pulse" />
                      Open today • Closes at {RESTAURANT_INFO.closingTime}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setHoursExpanded(!hoursExpanded)}
                  className="text-xs font-semibold text-[#73695C] hover:text-[#1C201E] flex items-center space-x-1 py-1 px-2.5 rounded-lg bg-[#F5EFEB]"
                >
                  <span>{hoursExpanded ? 'Hide Days' : 'View All Days'}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${hoursExpanded ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* Weekly schedule list */}
              <div className="space-y-2 pt-2 border-t border-[#EDE6DB]">
                {WEEKLY_HOURS.map((slot) => {
                  const isCurrentDay = slot.day === selectedDay || slot.isToday;
                  if (!hoursExpanded && !isCurrentDay) return null;

                  return (
                    <div
                      key={slot.day}
                      onClick={() => setSelectedDay(slot.day)}
                      className={`flex items-center justify-between py-2 px-3 rounded-lg text-xs transition-colors cursor-pointer ${
                        isCurrentDay
                          ? 'bg-[#FEF3C7] text-[#92400E] font-bold border border-[#FDE68A]'
                          : 'text-[#4F463B] hover:bg-[#FBF9F5]'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <span>{slot.day}</span>
                        {slot.isToday && (
                          <span className="text-[10px] bg-[#D97706] text-white px-1.5 py-0.2 rounded font-bold uppercase">
                            Today
                          </span>
                        )}
                      </div>
                      <span>{slot.hours}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Clean Larkana Map Placeholder & Landmark Visualizer */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl border border-[#E5DFD4] overflow-hidden shadow-xs">
              
              {/* Map Canvas Card */}
              <div className="relative aspect-4/3 sm:aspect-16/11 w-full bg-[#EAE6DE] overflow-hidden flex flex-col justify-between p-6">
                
                {/* Visual Map Grid Pattern */}
                <div 
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: 'radial-gradient(#8C7E6C 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }}
                />

                {/* Simulated Road Lines & Crossroads for Larkana GT Road / Shaikh Zaid Chowk */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {/* G.T. Road Larkana diagonal line */}
                  <div className="absolute top-1/2 left-0 right-0 h-9 bg-[#DDD5C7] -rotate-6 transform translate-y-2 border-y border-[#CBC0AF]" />
                  <div className="absolute top-1/2 left-0 right-0 h-0.5 border-t border-dashed border-[#A89C8A] -rotate-6 transform translate-y-6" />
                  
                  {/* Crossing Road */}
                  <div className="absolute top-0 bottom-0 left-1/2 w-8 bg-[#DDD5C7] rotate-12 transform -translate-x-4 border-x border-[#CBC0AF]" />
                  
                  {/* Shaikh Zaid Chowk Roundabout */}
                  <div className="absolute top-1/2 left-1/2 w-28 h-28 -translate-x-14 -translate-y-14 rounded-full border-4 border-[#C7BCAB] bg-[#EFECE6]/70 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-[#7A6F60] text-center px-1">
                      Shaikh Zaid Chowk
                    </span>
                  </div>
                </div>

                {/* Top Badge on Map */}
                <div className="relative z-10 flex justify-between items-start">
                  <div className="bg-white/95 backdrop-blur-xs px-3.5 py-2 rounded-xl border border-[#D8CEBF] shadow-xs">
                    <p className="text-xs font-bold text-[#1C201E]">G.T Road • Larkana City</p>
                    <p className="text-[11px] text-[#73695C]">Muhalla Manzoorabad, Sindh</p>
                  </div>

                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1C201E] hover:bg-[#C2410C] text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm transition-colors flex items-center space-x-1"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Central Restaurant Pin on Map */}
                <div className="relative z-10 self-center transform -translate-y-2 flex flex-col items-center animate-bounce-subtle">
                  <div className="bg-[#C2410C] text-white p-3 rounded-full shadow-lg border-2 border-white flex items-center justify-center">
                    <MapPin className="w-6 h-6 fill-current" />
                  </div>
                  <div className="mt-2 bg-[#1C201E] text-white px-3 py-1 rounded-md text-xs font-bold shadow-md whitespace-nowrap">
                    AL-HAMD RESTAURANT & BAR B.Q.
                  </div>
                  <div className="text-[10px] text-[#544B3E] font-bold bg-white/90 px-2 py-0.5 rounded shadow-xs mt-1">
                    Larkana, Sindh
                  </div>
                </div>

                {/* Bottom Landmark Info Bar */}
                <div className="relative z-10 bg-white/95 backdrop-blur-xs p-3 rounded-xl border border-[#D8CEBF] shadow-xs flex items-center justify-between text-xs text-[#4F463B]">
                  <div className="flex items-center space-x-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#C2410C]" />
                    <span className="font-semibold">Near Shaikh Zaid Chowk, Larkana</span>
                  </div>
                  <span className="text-[#8C8275] text-[11px]">Dine-in • Takeout</span>
                </div>

              </div>

              {/* Directions Assist Box */}
              <div className="p-6 bg-[#F7F4EE] border-t border-[#E8E1D5]">
                <h4 className="text-sm font-bold text-[#1C201E] mb-2 flex items-center">
                  <Navigation className="w-4 h-4 text-[#C2410C] mr-1.5" />
                  How to reach Al-Hamd Restaurant
                </h4>
                <p className="text-xs text-[#5D554B] leading-relaxed">
                  Located directly on G.T Road in Muhalla Manzoorabad, just a short walk from Shaikh Zaid Chowk in central Larkana, Sindh. Ample street parking available for cars and motorcycles.
                </p>
                
                <div className="mt-4 pt-4 border-t border-[#E8E1D5] flex items-center justify-between text-xs font-medium text-[#73695C]">
                  <span>City: <strong>Larkana</strong></span>
                  <span>Province: <strong>Sindh</strong></span>
                  <span>Country: <strong>Pakistan</strong></span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
