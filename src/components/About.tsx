import React, { useState } from 'react';
import { 
  Check, 
  MapPin, 
  Moon, 
  Clock, 
  Users, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface AboutProps {
  onOpenGalleryItem?: (id: string) => void;
}

export const About: React.FC<AboutProps> = ({ onOpenGalleryItem }) => {
  const [imgError, setImgError] = useState(false);

  const features = [
    { name: 'Dine-in Experience', desc: 'Welcoming dining hall with comfortable traditional seating' },
    { name: 'Takeout Service', desc: 'Fresh hot food packaged securely for your home or gathering' },
    { name: '100% Halal Food', desc: 'Prepared strictly with fresh, certified halal ingredients' },
    { name: 'Lunch & Dinner', desc: 'Open daily from afternoon until late into the night' },
    { name: 'Late-Night Food', desc: 'Serving hot karahi and BBQ until 2:00 AM every night' },
    { name: 'Attentive Table Service', desc: 'Friendly staff and prompt service for you and your family' },
    { name: 'Quick Bites & Small Plates', desc: 'Fresh seekh kababs, tikka boti, and light meals on the go' },
    { name: 'Budget-Friendly Pricing', desc: 'Generous portions priced at PKR 1,000 or less per person' }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#EAE4DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Photograph of Restaurant Seating & Dining Area */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Main Photo Card */}
              <div className="rounded-2xl overflow-hidden border border-[#EAE4DA] shadow-lg bg-white">
                <div className="relative aspect-4/3 w-full bg-[#231E1B] overflow-hidden">
                  <img
                    src={imgError ? RESTAURANT_INFO.images.interior : "/Screenshot 2026-09-22 185851.png"}
                    alt="Al-Hamd Restaurant Larkana authentic interior seating dining area"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover transform hover:scale-103 transition-transform duration-500"
                  />
                  
                  {/* Real Photo Tag Badge */}
                  <div className="absolute top-4 left-4 bg-[#231E1B]/85 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/20 flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
                    <span>Actual Dining Hall • Larkana</span>
                  </div>

                  {/* Caption bar at bottom */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 text-white">
                    <p className="text-sm font-medium">
                      Traditional Pakistani Sindhi woven seating & family dining hall
                    </p>
                    <p className="text-xs text-[#EAE4DA] flex items-center mt-0.5">
                      <MapPin className="w-3.5 h-3.5 mr-1 text-[#BF432F]" />
                      G.T Road, near Shaikh Zaid Chowk, Larkana
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-[#FAF7F2] border-t border-[#EAE4DA] flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs text-[#665E55]">
                    <Users className="w-4 h-4 text-[#BF432F]" />
                    <span>Family-friendly dining • Casual atmosphere</span>
                  </div>
                  {onOpenGalleryItem && (
                    <button
                      onClick={() => onOpenGalleryItem('gal-interior')}
                      className="text-xs font-semibold text-[#BF432F] hover:text-[#A63725] inline-flex items-center space-x-1 cursor-pointer"
                    >
                      <span>View in Gallery</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>

              {/* Decorative quote card */}
              <div className="absolute -bottom-6 -right-3 sm:-right-6 bg-white rounded-xl shadow-xl border border-[#EAE4DA] p-4 max-w-[230px] hidden sm:block">
                <div className="flex items-center space-x-1.5 text-xs font-bold text-[#231E1B] mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#CA7826]" />
                  <span>Local Favorite</span>
                </div>
                <p className="text-[11px] text-[#665E55] leading-snug italic font-serif">
                  "Among the fine restaurants of Larkana city with great taste at low prices."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Key Attributes */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#BF432F] block mb-2">
                About Al-Hamd Restaurant & Bar B.Q.
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#231E1B] tracking-tight">
                Authentic Pakistani Taste in the Heart of Larkana
              </h2>
            </div>

            <p className="text-base text-[#665E55] leading-relaxed">
              <strong>Al-Hamd Restaurant & Bar B.Q.</strong> is a beloved local restaurant located on G.T Road near Shaikh Zaid Chowk in Muhalla Manzoorabad, Larkana, Sindh. We specialize in authentic Pakistani cuisine, freshly cooked chicken karahi varieties, charcoal-grilled Bar B.Q., flavorful daals, and traditional recipes.
            </p>

            <p className="text-sm sm:text-base text-[#665E55] leading-relaxed">
              Whether you are sitting down for a family dinner in our spacious hall, grabbing quick bites with friends, or ordering freshly packed takeout for home, we take pride in offering delicious food, attentive table service, and honest budget-friendly pricing.
            </p>

            {/* Feature Checklist Grid */}
            <div className="pt-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#786E64] mb-3">
                Dining Offerings & Amenities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feat, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 p-2.5 rounded-xl bg-white border border-[#EAE4DA] shadow-2xs">
                    <div className="w-5 h-5 rounded-full bg-[#ECFDF5] text-[#16A34A] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#231E1B] leading-tight">{feat.name}</p>
                      <p className="text-[11px] text-[#786E64] leading-tight mt-0.5">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Action Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <div className="inline-flex items-center space-x-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-lg bg-white border border-[#EAE4DA] text-[#423A30] shadow-2xs">
                <Clock className="w-3.5 h-3.5 text-[#BF432F]" />
                <span>Open Daily: 12:00 PM – 2:00 AM</span>
              </div>
              <div className="inline-flex items-center space-x-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-lg bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A]">
                <Moon className="w-3.5 h-3.5 text-[#CA7826]" />
                <span>Late-Night Food Available</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
