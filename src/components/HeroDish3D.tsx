import React, { useState, useRef, useEffect } from 'react';
import karahi3dImg from '../assets/images/karahi_3d_dish_1790090459851.jpg';
import { Sparkles, Flame, Utensils } from 'lucide-react';

interface HeroDish3DProps {
  isTriggeringScroll?: boolean;
}

export const HeroDish3D: React.FC<HeroDish3DProps> = ({ isTriggeringScroll = false }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Initial load entrance
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 80);
    return () => clearTimeout(timer);
  }, []);

  // Smooth scroll tracking for natural upward float as user scrolls
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global cursor parallax across hero
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    // Normalized factor (-1 to 1)
    const normX = Math.max(-1, Math.min(1, x / (rect.width / 2)));
    const normY = Math.max(-1, Math.min(1, y / (rect.height / 2)));

    setMouseOffset({
      x: normX,
      y: normY,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Smooth reset toward natural presentation angle
    setMouseOffset({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Upward translation calculated from scroll (subtly moves up as page scrolls)
  // Capped at 110px upward so it stays well-behaved
  const scrollTranslateY = Math.min(120, scrollY * 0.28);
  const scrollScale = Math.max(0.94, 1 - scrollY * 0.0003);
  const scrollTilt = Math.min(8, scrollY * 0.02);

  // Interactive 3D rotation angles
  const rotX = -mouseOffset.y * 10 - scrollTilt;
  const rotY = mouseOffset.x * 12;
  const transX = mouseOffset.x * 14;
  const transY = mouseOffset.y * 12 - (isTriggeringScroll ? 45 : scrollTranslateY);

  // Dynamic light reflection position (percentage)
  const lightX = 35 + mouseOffset.x * 30;
  const lightY = 30 + mouseOffset.y * 25;

  return (
    <div 
      className="relative w-full max-w-[460px] sm:max-w-[500px] lg:max-w-[550px] mx-auto perspective-1000 select-none py-4"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 3D Transform Stage with entrance transition */}
      <div 
        className={`relative w-full aspect-square preserve-3d transition-transform duration-500 ease-out flex items-center justify-center ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
        style={{
          transform: `translate3d(${transX}px, ${transY}px, 0px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(${isHovered ? 1.03 * scrollScale : scrollScale})`,
          transition: isHovered 
            ? 'transform 0.12s cubic-bezier(0.2, 0.8, 0.4, 1), opacity 0.6s ease-out' 
            : 'transform 0.45s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.6s ease-out',
        }}
      >
        {/* Layer 0: Warm Restaurant Studio Ambient Glow (Behind) */}
        <div 
          className="absolute inset-2 rounded-full blur-3xl opacity-40 pointer-events-none transition-all duration-700"
          style={{
            background: 'radial-gradient(circle, rgba(202, 120, 38, 0.45) 0%, rgba(191, 67, 47, 0.22) 45%, transparent 75%)',
            transform: 'translateZ(-50px)',
          }}
        />

        {/* Layer 1: Realistic Deep Floor Shadow (Ground plane contact) */}
        <div 
          className="absolute -bottom-4 w-[84%] h-14 rounded-full blur-xl pointer-events-none transition-all duration-300"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(35, 30, 27, 0.38) 0%, rgba(35, 30, 27, 0.12) 60%, transparent 80%)',
            transform: `translateZ(-30px) translateY(${isHovered ? '16px' : '6px'}) scale(${isHovered ? 1.08 : 0.98})`,
            opacity: Math.max(0.2, 1 - scrollY * 0.0015),
          }}
        />
        <div 
          className="absolute bottom-0 w-[62%] h-8 rounded-full blur-md bg-[#231E1B]/35 pointer-events-none"
          style={{
            transform: 'translateZ(-15px)',
          }}
        />

        {/* Layer 2: Main 3D Karahi Iron Wok & Presentation Plate */}
        <div 
          className="relative w-[86%] sm:w-[88%] aspect-square rounded-full preserve-3d shadow-2xl transition-all duration-300"
          style={{
            transform: 'translateZ(25px)',
            boxShadow: isHovered 
              ? '0 30px 60px -15px rgba(35, 30, 27, 0.4), 0 0 35px rgba(202, 120, 38, 0.25)' 
              : '0 20px 45px -12px rgba(35, 30, 27, 0.28)',
          }}
        >
          {/* Subtle Outer Traditional Copper/Brass Rim */}
          <div className="absolute -inset-3 sm:-inset-3.5 rounded-full border border-[#D8CEBF] bg-[#F7F3ED]/80 backdrop-blur-xs -z-10 shadow-xs" />
          
          {/* Iron Wok Rim Accent Ring */}
          <div className="absolute -inset-1 rounded-full border-2 border-[#382F2A] pointer-events-none -z-5" />

          {/* Sizzling Karahi Food Dish Photography */}
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#231E1B] relative bg-[#1E1714]">
            <img 
              src={karahi3dImg} 
              alt="Al-Hamd Sizzling Chicken Karahi"
              className="w-full h-full object-cover transform scale-103"
              referrerPolicy="no-referrer"
            />

            {/* Dynamic Specular Sheen (Reacts to cursor tilt) */}
            <div 
              className="absolute inset-0 pointer-events-none mix-blend-overlay transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle at ${lightX}% ${lightY}%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.08) 40%, transparent 65%)`,
                opacity: isHovered ? 0.95 : 0.6,
              }}
            />

            {/* Subtle Vignette on Rim */}
            <div className="absolute inset-0 rounded-full shadow-[inset_0_0_45px_rgba(0,0,0,0.55)] pointer-events-none" />
          </div>

          {/* Subtle Steaming Heat Shimmer Particles */}
          <div className="absolute -top-6 inset-x-12 h-14 pointer-events-none overflow-hidden opacity-50 flex justify-around">
            <span className="w-1.5 h-7 bg-white/40 rounded-full blur-[1.5px] animate-pulse transform -translate-y-2" />
            <span className="w-1 h-9 bg-white/30 rounded-full blur-[2px] animate-pulse delay-150 transform -translate-y-4" />
            <span className="w-1.5 h-6 bg-white/35 rounded-full blur-[1.5px] animate-pulse delay-300 transform -translate-y-1" />
          </div>
        </div>

        {/* Layer 3: Floating 3D Signature Badge (+55px Z depth) */}
        <div 
          className="absolute -top-2 right-1 sm:right-5 bg-white/95 backdrop-blur-md border border-[#EAE4DA] rounded-2xl py-2.5 px-4 shadow-xl transition-transform duration-200 pointer-events-none"
          style={{
            transform: `translateZ(60px) translateX(${mouseOffset.x * 12}px) translateY(${mouseOffset.y * 12}px)`,
          }}
        >
          <div className="flex items-center space-x-2.5">
            <div className="w-7 h-7 rounded-xl bg-[#BF432F]/10 text-[#BF432F] flex items-center justify-center shadow-2xs">
              <Flame className="w-4 h-4 fill-current" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#CA7826] leading-none mb-0.5">
                Signature Specialty
              </p>
              <p className="text-xs font-extrabold text-[#231E1B] leading-none">
                Sizzling Chicken Karahi
              </p>
            </div>
          </div>
        </div>

        {/* Layer 4: Floating Cast-Iron Wok Badge (+65px Z depth) */}
        <div 
          className="absolute bottom-5 left-0 sm:left-3 bg-[#231E1B]/95 text-white backdrop-blur-md border border-white/12 rounded-2xl py-2.5 px-4 shadow-2xl transition-transform duration-200 pointer-events-none"
          style={{
            transform: `translateZ(65px) translateX(${mouseOffset.x * -14}px) translateY(${mouseOffset.y * -14}px)`,
          }}
        >
          <div className="flex items-center space-x-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CA7826] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#BF432F]" />
            </span>
            <div>
              <p className="text-[10px] font-semibold text-[#D8D2C8] leading-none">
                Cooked in Iron Wok
              </p>
              <p className="text-[11px] font-bold text-white leading-none mt-0.5">
                Fresh Spices & Desi Ghee
              </p>
            </div>
          </div>
        </div>

        {/* Layer 5: Floating Garnish Badge (+45px Z depth) */}
        <div 
          className="absolute top-1/3 -left-2 w-8 h-8 rounded-full bg-white border border-[#EAE4DA] shadow-lg flex items-center justify-center text-[#BF432F] pointer-events-none"
          style={{
            transform: `translateZ(45px) translateX(${mouseOffset.x * 16}px) translateY(${mouseOffset.y * 16}px)`,
          }}
          title="Fresh Ginger & Herbs"
        >
          <Sparkles className="w-4 h-4 text-[#CA7826]" />
        </div>

      </div>

      {/* Interactive Exploration Hint */}
      <div className="text-center mt-3">
        <p className="inline-flex items-center space-x-1.5 text-[11px] font-semibold text-[#786E64] bg-white/70 backdrop-blur-xs px-3 py-1 rounded-full border border-[#EAE4DA] shadow-2xs">
          <Utensils className="w-3 h-3 text-[#BF432F]" />
          <span>Interactive 3D Dish • Tilt cursor to view depth</span>
        </p>
      </div>
    </div>
  );
};
