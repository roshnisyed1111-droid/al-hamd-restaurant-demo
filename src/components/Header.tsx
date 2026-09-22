import React, { useState, useEffect } from 'react';
import { Phone, ShoppingBag, Menu as MenuIcon, X, MapPin, Clock } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Specialties', href: '#specialties' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#location' },
  ];

  return (
    <>
      {/* Top Refined Information Bar */}
      <div className="bg-[#231E1B] text-[#D8D2C8] text-xs py-2 px-4 border-b border-[#352F2B]">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <span className="flex items-center text-[#E8927C] font-semibold">
              <MapPin className="w-3.5 h-3.5 mr-1" />
              Larkana, Sindh, Pakistan
            </span>
            <span className="hidden sm:inline-block text-[#574E47]">•</span>
            <span className="hidden sm:flex items-center text-[#B8AEA3]">
              <Clock className="w-3.5 h-3.5 mr-1 text-[#E8927C]" />
              Open today until 2:00 AM
            </span>
          </div>
          <div className="flex items-center space-x-3 ml-auto text-xs">
            <span className="hidden md:inline-block bg-[#362E28] px-2.5 py-0.5 rounded text-[#EDE7DE] font-medium border border-white/5">
              PKR 1,000 or less / person (Budget-friendly)
            </span>
            <a 
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="text-[#E8927C] hover:text-white font-semibold flex items-center transition-colors"
            >
              <Phone className="w-3 h-3 mr-1" />
              {RESTAURANT_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main Polished Ivory Header with Dynamic Scroll Transition */}
      <header className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#EAE4DA] transition-all duration-300 ${
        isScrolled 
          ? 'py-2 shadow-[0_4px_20px_-4px_rgba(35,30,27,0.08)]' 
          : 'py-4 shadow-[0_2px_10px_-4px_rgba(35,30,27,0.04)]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Restaurant Name & Logo */}
            <a href="#home" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#231E1B] text-white flex flex-col items-center justify-center shadow-xs group-hover:bg-[#BF432F] transition-colors border border-[#3E3630]">
                <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-[#E8927C] group-hover:text-white uppercase">الحمد</span>
                <span className="text-[8px] sm:text-[9px] font-semibold text-[#D8D0C5] leading-none">AL-HAMD</span>
              </div>
              <div>
                <span className="text-base sm:text-xl font-bold font-display text-[#231E1B] tracking-tight block leading-tight">
                  AL-HAMD RESTAURANT
                </span>
                <span className="text-[10px] sm:text-xs font-semibold text-[#786E64] tracking-wider uppercase block">
                  & Bar B.Q. • Larkana
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold text-[#4A423A] hover:text-[#BF432F] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#BF432F] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Actions: Cart Tray & Primary CTA */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* Order Cart Drawer Button */}
              <button
                id="cart-trigger-button"
                onClick={onOpenCart}
                className="relative p-2.5 rounded-xl border border-[#EAE4DA] bg-[#FAF7F2] text-[#231E1B] hover:border-[#BF432F] hover:text-[#BF432F] transition-all shadow-2xs flex items-center cursor-pointer"
                aria-label="View Order Tray"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-[#BF432F] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-xs">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Primary Order Now / Call Now CTA Button */}
              <a
                id="header-call-button"
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="hidden sm:inline-flex items-center space-x-2 bg-[#BF432F] hover:bg-[#A63725] text-white px-4.5 py-2.5 rounded-xl text-sm font-bold shadow-2xs hover:shadow-xs transition-all transform active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>Call / Order Now</span>
              </a>

              {/* Mobile Menu Toggle Button */}
              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-xl border border-[#EAE4DA] bg-[#FAF7F2] text-[#231E1B] hover:text-[#BF432F] transition-colors cursor-pointer"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#EAE4DA] px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
            <nav className="flex flex-col space-y-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-base font-semibold text-[#231E1B] hover:bg-[#FAF7F2] hover:text-[#BF432F] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-[#EAE4DA] flex flex-col space-y-3">
                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="w-full flex items-center justify-center space-x-2 bg-[#BF432F] text-white py-3 rounded-xl font-bold shadow-xs"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call to Order: {RESTAURANT_INFO.phoneDisplay}</span>
                </a>
                <p className="text-center text-xs text-[#786E64]">
                  Open until 2:00 AM • G.T Road, Larkana, Sindh
                </p>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
