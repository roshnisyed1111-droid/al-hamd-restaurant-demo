import React from 'react';
import { Star, MessageSquareQuote, CheckCircle, MapPin } from 'lucide-react';
import { CUSTOMER_REVIEWS } from '../data/restaurantData';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#F3EFEA] border-b border-[#EAE4DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-[#BF432F] font-semibold text-xs tracking-wider uppercase mb-2">
            <MessageSquareQuote className="w-4 h-4" />
            <span>Real Local Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#231E1B] tracking-tight">
            Customer Reviews
          </h2>
          <p className="mt-3 text-base text-[#665E55]">
            Authentic customer testimonials from verified diners visiting Al-Hamd Restaurant & Bar B.Q. in Larkana, Sindh.
          </p>
        </div>

        {/* Overall Google Rating Snapshot Banner */}
        <div className="max-w-4xl mx-auto mb-12 bg-white border border-[#EAE4DA] rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4 text-center sm:text-left">
            <div className="w-16 h-16 rounded-2xl bg-[#231E1B] text-white flex flex-col items-center justify-center shadow-xs">
              <span className="text-2xl font-black text-[#E8927C] leading-none">4.2</span>
              <span className="text-[10px] text-[#A6AEA8] font-bold uppercase mt-1">out of 5</span>
            </div>
            <div>
              {/* Terracotta Stars */}
              <div className="flex items-center space-x-1 text-[#BF432F]">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < 4 ? 'fill-current' : 'fill-current opacity-60'}`} 
                  />
                ))}
              </div>
              <h3 className="text-base font-bold text-[#231E1B] mt-1">
                Google Verified Rating
              </h3>
              <p className="text-xs text-[#786E64]">
                Based on 65 verified customer reviews in Larkana
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center space-x-2 px-3.5 py-2 bg-[#FAF7F2] rounded-xl border border-[#EAE4DA] text-xs font-semibold text-[#231E1B] shadow-2xs">
              <CheckCircle className="w-4 h-4 text-[#16A34A]" />
              <span>Budget-Friendly Taste</span>
            </div>
            <div className="flex items-center space-x-2 px-3.5 py-2 bg-[#FAF7F2] rounded-xl border border-[#EAE4DA] text-xs font-semibold text-[#231E1B] shadow-2xs">
              <CheckCircle className="w-4 h-4 text-[#16A34A]" />
              <span>Quality Food & Service</span>
            </div>
          </div>
        </div>

        {/* The 3 Real Customer Reviews in Clean White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {CUSTOMER_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl border border-[#EAE4DA] p-6 sm:p-7 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Terracotta Star Rating */}
                <div className="flex items-center space-x-1 text-[#BF432F] mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base text-[#231E1B] italic leading-relaxed mb-6 font-serif">
                  "{rev.text}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-[#F2ECE1] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#231E1B]">
                    {rev.author}
                  </h4>
                  <p className="text-[11px] text-[#786E64] flex items-center mt-0.5 font-medium">
                    <MapPin className="w-3 h-3 mr-1 text-[#BF432F]" />
                    Larkana, Sindh • {rev.source}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#FAF7F2] text-[#231E1B] border border-[#EAE4DA] flex items-center justify-center font-bold text-xs uppercase">
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
