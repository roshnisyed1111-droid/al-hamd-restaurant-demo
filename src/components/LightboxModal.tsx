import React, { useEffect } from 'react';
import { X, MapPin } from 'lucide-react';
import { GalleryImage } from '../types';

interface LightboxModalProps {
  image: GalleryImage | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ image, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (image) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#231E1B]/90 backdrop-blur-md animate-fadeIn">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10 cursor-pointer"
        aria-label="Close fullscreen view"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="max-w-4xl w-full bg-[#231E1B] rounded-2xl overflow-hidden border border-white/15 shadow-2xl flex flex-col max-h-[90vh]">
        {/* Main Image Frame */}
        <div className="relative flex-1 bg-black/60 flex items-center justify-center overflow-hidden min-h-[300px]">
          <img
            src={image.imageSrc}
            alt={image.title}
            referrerPolicy="no-referrer"
            className="max-h-[65vh] w-auto object-contain mx-auto"
          />
        </div>

        {/* Caption bar */}
        <div className="p-5 sm:p-6 bg-[#231E1B] border-t border-white/10 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-semibold text-[#E8927C] uppercase tracking-wider mb-1">
              <span>{image.category}</span>
              {image.isRealUploaded && (
                <span className="bg-[#22C55E]/20 text-[#4ADE80] border border-[#22C55E]/40 px-2 py-0.5 rounded text-[10px]">
                  Real Photo from Al-Hamd Restaurant
                </span>
              )}
            </div>
            <h3 className="text-xl font-bold font-display text-white">
              {image.title}
            </h3>
            <p className="text-xs text-[#D8D2C8] mt-1 max-w-xl">
              {image.description}
            </p>
          </div>

          <div className="flex-shrink-0 text-right sm:text-right">
            <span className="inline-flex items-center text-xs text-[#A69C91]">
              <MapPin className="w-3.5 h-3.5 mr-1 text-[#E8927C]" />
              Larkana, Sindh, Pakistan
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
