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
    <section id="gallery" className="py-16 sm:py-24 bg-[#FBF9F5] border-b border-[#EBE5DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 text-[#C2410C] font-semibold text-xs tracking-wider uppercase mb-2">
            <Camera className="w-4 h-4" />
            <span>Actual Restaurant Photographs & Dishes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#1C201E] tracking-tight">
            Al-Hamd Restaurant Gallery
          </h2>
          <p className="mt-3 text-base text-[#61584D]">
            Explore our dining atmosphere, traditional Sindhi woven seating, freshly prepared chicken karahi woks, and tandoori specialties in Larkana.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center space-x-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                filter === cat
                  ? 'bg-[#1C201E] text-white shadow-xs'
                  : 'bg-white border border-[#DDD5C7] text-[#554C41] hover:border-[#C2410C] hover:text-[#C2410C]'
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
              className="group relative cursor-pointer rounded-2xl overflow-hidden border border-[#E0D7CA] bg-white shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-[#202523]">
                <img
                  src={img.imageSrc}
                  alt={img.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Real Photo Flag */}
                {img.isRealUploaded && (
                  <div className="absolute top-3 left-3 bg-[#1C201E]/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded-md backdrop-blur-xs border border-white/20 flex items-center space-x-1">
                    <CheckCircle className="w-3 h-3 text-[#22C55E]" />
                    <span>Restaurant Interior</span>
                  </div>
                )}

                {/* Hover Overlay with Zoom Icon */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 text-[#1C201E] flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                </div>

                {/* Category Pill on Corner */}
                <div className="absolute bottom-3 right-3 bg-black/75 text-white text-[10px] font-medium px-2 py-0.5 rounded-md backdrop-blur-xs">
                  {img.category}
                </div>
              </div>

              {/* Caption Card */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold font-display text-[#1C201E] group-hover:text-[#C2410C] transition-colors">
                    {img.title}
                  </h3>
                  <p className="text-xs text-[#635A4E] mt-1 line-clamp-2">
                    {img.description}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-[#EDE7DD] flex items-center justify-between text-[11px] text-[#8C8275]">
                  <span className="flex items-center">
                    <MapPin className="w-3 h-3 mr-1 text-[#C2410C]" />
                    Larkana, Sindh
                  </span>
                  <span className="font-semibold text-[#C2410C] group-hover:underline">
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
