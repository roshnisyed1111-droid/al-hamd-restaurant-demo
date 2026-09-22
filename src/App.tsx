import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Specialties } from './components/Specialties';
import { Menu } from './components/Menu';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { LocationHours } from './components/LocationHours';
import { CartDrawer } from './components/CartDrawer';
import { LightboxModal } from './components/LightboxModal';
import { Footer } from './components/Footer';
import { CartItem, MenuItem, MenuCategory, GalleryImage } from './types';
import { GALLERY_ITEMS, RESTAURANT_INFO } from './data/restaurantData';
import { Phone, ShoppingBag, Check } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('All');
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Add item to demo order cart
  const handleAddToCart = (item: MenuItem) => {
    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex((ci) => ci.item.id === item.id);
      if (existingIndex > -1) {
        const next = [...prevItems];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + 1,
        };
        return next;
      } else {
        return [...prevItems, { item, quantity: 1 }];
      }
    });

    // Show temporary feedback toast
    setToastMessage(`Added "${item.name}" to Order Tray`);
    setTimeout(() => {
      setToastMessage(null);
    }, 2400);
  };

  // Adjust item quantity
  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) => {
      return prev
        .map((ci) => {
          if (ci.item.id === id) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  // Remove single item
  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((ci) => ci.item.id !== id));
  };

  // Clear entire cart
  const handleClearCart = () => {
    setCartItems([]);
  };

  // Handle specialty category click to jump to menu
  const handleSelectSpecialtyCategory = (categoryName: string) => {
    setSelectedCategory(categoryName as MenuCategory);
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Open specific gallery item
  const handleOpenGalleryItem = (id: string) => {
    const found = GALLERY_ITEMS.find((item) => item.id === id);
    if (found) {
      setLightboxImage(found);
    }
  };

  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#231E1B] flex flex-col font-sans">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 sm:bottom-6 sm:left-auto sm:right-6 sm:translate-x-0 z-50 bg-[#231E1B] text-white px-4.5 py-3 rounded-xl shadow-2xl border border-white/10 flex items-center space-x-2 text-xs font-semibold">
          <Check className="w-4 h-4 text-[#10B981]" />
          <span>{toastMessage}</span>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="ml-2 text-[#E8927C] hover:underline cursor-pointer"
          >
            View Tray
          </button>
        </div>
      )}

      {/* Main Sticky Navigation Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Page Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreMenu={() => {
            const menuEl = document.getElementById('menu');
            if (menuEl) {
              menuEl.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        />

        {/* 3 Signature Specialties */}
        <Specialties
          onSelectCategory={handleSelectSpecialtyCategory}
        />

        {/* Interactive Food Menu */}
        <Menu
          onAddToCart={handleAddToCart}
          selectedCategory={selectedCategory}
          onCategoryChange={(cat) => setSelectedCategory(cat)}
        />

        {/* Authentic Restaurant Introduction & Interior Seating */}
        <About
          onOpenGalleryItem={handleOpenGalleryItem}
        />

        {/* Gallery Section */}
        <Gallery
          onOpenLightbox={(img) => setLightboxImage(img)}
        />

        {/* Verified Customer Reviews */}
        <Reviews />

        {/* Location, Directions & Operating Hours */}
        <LocationHours />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Gallery Lightbox Modal */}
      <LightboxModal
        image={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />

      {/* Mobile Sticky Quick Action Bar */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-[#EAE4DA] p-3 z-30 flex items-center justify-between gap-3 shadow-lg">
        <a
          id="mobile-sticky-call-btn"
          href={`tel:${RESTAURANT_INFO.phone}`}
          className="flex-1 flex items-center justify-center space-x-2 py-3 bg-[#BF432F] text-white rounded-xl font-bold text-xs shadow-xs active:scale-98"
        >
          <Phone className="w-4 h-4" />
          <span>Call Al-Hamd ({RESTAURANT_INFO.phoneDisplay})</span>
        </a>

        <button
          id="mobile-sticky-cart-btn"
          onClick={() => setIsCartOpen(true)}
          className="relative p-3 bg-[#FAF7F2] border border-[#EAE4DA] rounded-xl text-[#231E1B] flex items-center justify-center shadow-xs cursor-pointer"
          aria-label="Open Order Tray"
        >
          <ShoppingBag className="w-5 h-5 text-[#BF432F]" />
          {totalCartCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 bg-[#BF432F] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {totalCartCount}
            </span>
          )}
        </button>
      </div>

    </div>
  );
}
