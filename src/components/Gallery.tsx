import React, { useState } from 'react';
import { Camera, ZoomIn, MapPin, CheckCircle } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { GalleryImage } from '../types';

interface GalleryProps {
  onOpenLightbox: (image: GalleryImage) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenLightbox }) => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Restaurant Interior', 'Karahi Dishes', 'BBQ', 'Traditional Daal', 'Kitchen & Tandoor'];

  const filteredItems = filter === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#EAE4DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 text-[#BF432F] font-semibold text-xs tracking-wider uppercase mb-2">
            <Camera className="w-4 h-4" />
            <span>Actual Restaurant Photographs & Dishes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#231E1B] tracking-tight">
            Al-Hamd Restaurant Gallery
          </h2>
          <p className="mt-3 text-base text-[#665E55]">
            Explore our dining atmosphere, traditional Sindhi woven seating, freshly prepared chicken karahi woks, and tandoori specialties in Larkana.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center space-x-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-xs cursor-pointer ${
                filter === cat
                  ? 'bg-[#231E1B] text-white shadow-sm'
                  : 'bg-white border border-[#EAE4DA] text-[#574E46] hover:border-[#BF432F] hover:text-[#BF432F]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((img) => (
            <div
              key={img.id}
              onClick={() => onOpenLightbox(img)}
              className="group relative cursor-pointer rounded-2xl overflow-hidden border border-[#EAE4DA] bg-white shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-[#231E1B]">
                <img
                  src={img.imageSrc}
                  alt={img.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                />

                {/* Real Photo Flag */}
                {img.isRealUploaded && (
                  <div className="absolute top-3 left-3 bg-[#231E1B]/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded-md backdrop-blur-xs border border-white/20 flex items-center space-x-1 shadow-md">
                    <CheckCircle className="w-3 h-3 text-[#22C55E]" />
                    <span>Restaurant Interior</span>
                  </div>
                )}

                {/* Hover Overlay with Zoom Icon */}
                <div className="absolute inset-0 bg-[#231E1B]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white text-[#231E1B] flex items-center justify-center shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-5 h-5 text-[#BF432F]" />
                  </div>
                </div>

                {/* Category Pill on Corner */}
                <div className="absolute bottom-3 right-3 bg-[#231E1B]/85 text-white text-[10px] font-medium px-2.5 py-0.5 rounded-md backdrop-blur-xs border border-white/10">
                  {img.category}
                </div>
              </div>

              {/* Caption Card */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold font-display text-[#231E1B] group-hover:text-[#BF432F] transition-colors">
                    {img.title}
                  </h3>
                  <p className="text-xs text-[#665E55] mt-1.5 line-clamp-2">
                    {img.description}
                  </p>
                </div>
                <div className="pt-3.5 mt-3.5 border-t border-[#F2ECE1] flex items-center justify-between text-[11px] text-[#8C8276]">
                  <span className="flex items-center font-medium">
                    <MapPin className="w-3 h-3 mr-1 text-[#BF432F]" />
                    Larkana, Sindh
                  </span>
                  <span className="font-bold text-[#BF432F] group-hover:underline">
                    View Fullscreen
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
