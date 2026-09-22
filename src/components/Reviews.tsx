import React from 'react';
import { Star, MessageSquareQuote, CheckCircle, MapPin } from 'lucide-react';
import { CUSTOMER_REVIEWS, RESTAURANT_INFO } from '../data/restaurantData';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-white border-b border-[#EBE5DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-[#C2410C] font-semibold text-xs tracking-wider uppercase mb-2">
            <MessageSquareQuote className="w-4 h-4" />
            <span>Real Local Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#1C201E] tracking-tight">
            Customer Reviews
          </h2>
          <p className="mt-3 text-base text-[#61584D]">
            Authentic customer testimonials from verified diners visiting Al-Hamd Restaurant & Bar B.Q. in Larkana, Sindh.
          </p>
        </div>

        {/* Overall Google Rating Snapshot Banner */}
        <div className="max-w-4xl mx-auto mb-12 bg-[#FBF9F5] border border-[#E5DFD4] rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4 text-center sm:text-left">
            <div className="w-16 h-16 rounded-2xl bg-[#1C201E] text-white flex flex-col items-center justify-center shadow-xs">
              <span className="text-2xl font-black text-[#F59E0B] leading-none">4.2</span>
              <span className="text-[10px] text-[#A6AEA8] font-bold uppercase mt-1">out of 5</span>
            </div>
            <div>
              <div className="flex items-center space-x-1 text-[#F59E0B]">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < 4 ? 'fill-current' : 'fill-current text-[#F59E0B]/70'}`} 
                  />
                ))}
              </div>
              <h3 className="text-base font-bold text-[#1C201E] mt-1">
                Google Verified Rating
              </h3>
              <p className="text-xs text-[#73695C]">
                Based on 65 verified customer reviews in Larkana
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center space-x-2 px-3.5 py-2 bg-white rounded-xl border border-[#DDD5C7] text-xs font-semibold text-[#1C201E]">
              <CheckCircle className="w-4 h-4 text-[#16A34A]" />
              <span>Budget-Friendly Taste</span>
            </div>
            <div className="flex items-center space-x-2 px-3.5 py-2 bg-white rounded-xl border border-[#DDD5C7] text-xs font-semibold text-[#1C201E]">
              <CheckCircle className="w-4 h-4 text-[#16A34A]" />
              <span>Quality Food & Service</span>
            </div>
          </div>
        </div>

        {/* The 3 Real Customer Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {CUSTOMER_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#FBF9F5] rounded-2xl border border-[#E8E1D5] p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Star rating */}
                <div className="flex items-center space-x-1 text-[#F59E0B] mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base text-[#3A332B] italic leading-relaxed mb-6 font-serif">
                  "{rev.text}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-[#EDE6DB] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#1C201E]">
                    {rev.author}
                  </h4>
                  <p className="text-[11px] text-[#786E61] flex items-center mt-0.5">
                    <MapPin className="w-3 h-3 mr-1 text-[#C2410C]" />
                    Larkana, Sindh • {rev.source}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#EAE3D6] text-[#5C5346] flex items-center justify-center font-bold text-xs uppercase">
                  {rev.author.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
