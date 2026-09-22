import React, { useState, useRef, useEffect } from 'react';
import karahi3dImg from '../assets/images/karahi_3d_dish_1790090459851.jpg';
import { Sparkles, Flame } from 'lucide-react';

export const HeroDish3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 4, y: -6 });
  const [isHovered, setIsHovered] = useState(false);
  const [reflectionPos, setReflectionPos] = useState({ x: 30, y: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalize coordinates (-1 to 1)
    const normalizedX = (x / rect.width) * 2 - 1;
    const normalizedY = (y / rect.height) * 2 - 1;

    // Calculate subtle 3D tilt angles (capped at -10 to +10 degrees)
    setRotation({
      x: -normalizedY * 9,
      y: normalizedX * 11,
    });

    // Move specular highlight
    setReflectionPos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Smoothly return to natural presentation angle
    setRotation({ x: 4, y: -5 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div 
      className="relative w-full max-w-[480px] lg:max-w-[540px] mx-auto perspective-1000 select-none"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 3D Transform Stage */}
      <div 
        className="relative w-full aspect-square preserve-3d transition-transform duration-300 ease-out flex items-center justify-center"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${isHovered ? 1.02 : 1})`,
        }}
      >
        {/* Layer 0: Warm Restaurant Studio Ambient Glow */}
        <div 
          className="absolute inset-0 rounded-full blur-3xl opacity-30 pointer-events-none transition-opacity duration-500"
          style={{
            background: 'radial-gradient(circle, rgba(202, 120, 38, 0.4) 0%, rgba(191, 67, 47, 0.15) 50%, transparent 75%)',
            transform: 'translateZ(-40px)',
          }}
        />

        {/* Layer 1: Soft Contact Floor Shadow */}
        <div 
          className="absolute bottom-6 w-[78%] h-12 rounded-full blur-xl bg-[#2E1C12]/25 pointer-events-none transition-all duration-300"
          style={{
            transform: `translateZ(-20px) translateY(${isHovered ? '8px' : '0px'}) scale(${isHovered ? 1.05 : 0.96})`,
          }}
        />
        <div 
          className="absolute bottom-9 w-[60%] h-7 rounded-full blur-md bg-[#1C140F]/35 pointer-events-none"
          style={{
            transform: 'translateZ(-10px)',
          }}
        />

        {/* Layer 2: The Main 3D Karahi Plate / Iron Wok */}
        <div 
          className="relative w-[86%] aspect-square rounded-full preserve-3d shadow-2xl transition-shadow duration-300"
          style={{
            transform: 'translateZ(15px)',
            boxShadow: isHovered 
              ? '0 25px 50px -12px rgba(46, 28, 18, 0.35), 0 0 30px rgba(202, 120, 38, 0.2)' 
              : '0 20px 40px -15px rgba(46, 28, 18, 0.25)',
          }}
        >
          {/* Subtle Outer Ceramic & Cast-Iron Rim Ring */}
          <div className="absolute -inset-2.5 rounded-full border border-[#D9CEBF] bg-[#F5EFEB]/50 backdrop-blur-xs -z-10" />

          {/* Sizzling Dish Photography */}
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#2D231E] relative bg-[#1E1612]">
            <img 
              src={karahi3dImg} 
              alt="Al-Hamd Sizzling Chicken Karahi"
              className="w-full h-full object-cover transform scale-102"
              referrerPolicy="no-referrer"
            />

            {/* Dynamic Specular Lighting Sheen */}
            <div 
              className="absolute inset-0 pointer-events-none mix-blend-overlay transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle at ${reflectionPos.x}% ${reflectionPos.y}%, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.05) 45%, transparent 70%)`,
                opacity: isHovered ? 0.9 : 0.5,
              }}
            />

            {/* Subtle Vignette on Rim */}
            <div className="absolute inset-0 rounded-full shadow-[inset_0_0_40px_rgba(0,0,0,0.5)] pointer-events-none" />
          </div>
        </div>

        {/* Layer 3: Floating Depth Tag (Interactive 3D Layer) */}
        <div 
          className="absolute -top-1 right-2 sm:right-6 bg-white/95 backdrop-blur-sm border border-[#EAE4DA] rounded-2xl py-2.5 px-4 shadow-lg transition-transform duration-200 pointer-events-none"
          style={{
            transform: `translateZ(45px) translateX(${rotation.y * 1.5}px) translateY(${rotation.x * 1.5}px)`,
          }}
        >
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-lg bg-[#BF432F]/10 text-[#BF432F] flex items-center justify-center">
              <Flame className="w-3.5 h-3.5 fill-current" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#CA7826]">
                Signature Specialty
              </p>
              <p className="text-xs font-extrabold text-[#231E1B]">
                Sizzling Chicken Karahi
              </p>
            </div>
          </div>
        </div>

        {/* Layer 4: Floating Cooking Badge (Interactive 3D Layer) */}
        <div 
          className="absolute bottom-4 left-0 sm:left-4 bg-[#231E1B]/95 text-white backdrop-blur-sm border border-white/10 rounded-2xl py-2 px-3.5 shadow-xl transition-transform duration-200 pointer-events-none"
          style={{
            transform: `translateZ(50px) translateX(${rotation.y * -1.8}px) translateY(${rotation.x * -1.8}px)`,
          }}
        >
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-[#CA7826] animate-pulse" />
            <span className="text-[11px] font-semibold text-[#F3EFEA]">
              Prepared Fresh in Cast-Iron Wok
            </span>
          </div>
        </div>

        {/* Layer 5: Subtle 3D Floating Spice Accent */}
        <div 
          className="absolute top-1/4 -left-2 w-7 h-7 rounded-full bg-white/90 border border-[#EAE4DA] shadow-md flex items-center justify-center text-[#CA7826] text-xs pointer-events-none"
          style={{
            transform: `translateZ(35px) translateX(${rotation.y * 2}px) translateY(${rotation.x * 2}px)`,
          }}
          title="Fresh Spices"
        >
          <Sparkles className="w-3.5 h-3.5" />
        </div>

      </div>

      {/* Subtle Hint for client / user */}
      <p className="text-center text-[11px] text-[#8C8276] mt-2 font-medium tracking-wide">
        Interactive 3D Serving • Move cursor to explore wok depth
      </p>
    </div>
  );
};
