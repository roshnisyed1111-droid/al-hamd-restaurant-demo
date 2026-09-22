import React, { useState } from 'react';
import { Phone, ShoppingBag, Menu as MenuIcon, X, MapPin, Clock } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Specialties', href: '#specialties' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location & Hours', href: '#location' },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#1C201E] text-[#D8D2C6] text-xs py-2 px-4 border-b border-[#2C322E]">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-[#E87A5D] font-medium">
              <MapPin className="w-3.5 h-3.5 mr-1" />
              Larkana, Sindh, Pakistan
            </span>
            <span className="hidden sm:inline-block text-[#525E57]">•</span>
            <span className="hidden sm:flex items-center text-[#A6AEA8]">
              <Clock className="w-3.5 h-3.5 mr-1 text-[#E87A5D]" />
              Open today until 2:00 AM
            </span>
          </div>
          <div className="flex items-center space-x-3 ml-auto text-xs">
            <span className="bg-[#2E3632] px-2 py-0.5 rounded text-[#F5EFEB] font-medium">
              PKR 1,000 or less / person
            </span>
            <a 
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="text-[#E87A5D] hover:text-[#F39C82] font-semibold flex items-center transition-colors"
            >
              <Phone className="w-3 h-3 mr-1" />
              {RESTAURANT_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#E9E4DC] shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo & Brand Identity */}
            <a href="#home" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 rounded-xl bg-[#1C201E] text-white flex flex-col items-center justify-center shadow-sm group-hover:bg-[#C2410C] transition-colors border border-[#3A403C]">
                <span className="text-xs font-bold tracking-widest text-[#E87A5D] group-hover:text-white uppercase">الحمد</span>
                <span className="text-[10px] font-semibold text-[#D4CDC3] leading-none">AL-HAMD</span>
              </div>
              <div>
                <span className="text-lg sm:text-xl font-bold font-display text-[#1C201E] tracking-tight block leading-tight">
                  AL-HAMD
                </span>
                <span className="text-[11px] sm:text-xs font-medium text-[#735F4C] tracking-wider uppercase block">
                  Restaurant & Bar B.Q. • Larkana
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-[#4A453E] hover:text-[#C2410C] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#C2410C] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Actions: Cart & Call Now */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* Order Cart Drawer Button */}
              <button
                id="cart-trigger-button"
                onClick={onOpenCart}
                className="relative p-2.5 rounded-xl border border-[#E0D9CE] bg-white text-[#2B2723] hover:border-[#C2410C] hover:text-[#C2410C] transition-all shadow-xs flex items-center"
                aria-label="View Order Tray"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-[#C2410C] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-xs animate-scale">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Call Now Action Button */}
              <a
                id="header-call-button"
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="hidden sm:inline-flex items-center space-x-2 bg-[#C2410C] hover:bg-[#A33406] text-white px-4 py-2.5 rounded-xl text-sm font-semibold shadow-sm transition-all transform active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>

              {/* Mobile Menu Toggle Button */}
              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-xl border border-[#E0D9CE] bg-white text-[#2B2723] hover:text-[#C2410C] transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FBF9F5] border-b border-[#E9E4DC] px-4 pt-3 pb-6 shadow-lg animate-fadeIn">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-base font-medium text-[#2B2723] hover:bg-[#F2ECE1] hover:text-[#C2410C] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-[#E9E4DC] flex flex-col space-y-3">
                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="w-full flex items-center justify-center space-x-2 bg-[#C2410C] text-white py-3 rounded-xl font-semibold shadow-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {RESTAURANT_INFO.phoneDisplay}</span>
                </a>
                <p className="text-center text-xs text-[#7A7268]">
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
