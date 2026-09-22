import React, { useState, useMemo } from 'react';
import { Search, Plus, Check, Flame, Sparkles } from 'lucide-react';
import { MENU_ITEMS } from '../data/restaurantData';
import { MenuItem, MenuCategory } from '../types';

interface MenuProps {
  onAddToCart: (item: MenuItem) => void;
  selectedCategory: string;
  onCategoryChange: (category: MenuCategory) => void;
}

export const Menu: React.FC<MenuProps> = ({ 
  onAddToCart, 
  selectedCategory, 
  onCategoryChange 
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [recentlyAddedId, setRecentlyAddedId] = useState<string | null>(null);

  const categories: MenuCategory[] = [
    'All',
    'Chicken Karahi',
    'Red & White Chicken Karahi',
    'Al-Hamd Special Shahi',
    'Daal',
    'BBQ',
    'Chicken',
    'Vegetables',
    'Rice / Other Pakistani Dishes'
  ];

  // Filter items based on category and search query
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = 
        selectedCategory === 'All' || 
        item.category === selectedCategory ||
        (selectedCategory === 'Chicken' && (item.category === 'Chicken Karahi' || item.category === 'Red & White Chicken Karahi' || item.category === 'BBQ'));

      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.urduName && item.urduName.includes(searchQuery));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleAdd = (item: MenuItem) => {
    onAddToCart(item);
    setRecentlyAddedId(item.id);
    setTimeout(() => {
      setRecentlyAddedId(null);
    }, 1200);
  };

  return (
    <section id="menu" className="py-16 sm:py-24 bg-[#F3EFEA] border-b border-[#EAE4DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#BF432F] block mb-2">
            Freshly Prepared Daily • Larkana
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#231E1B] tracking-tight">
            Al-Hamd Restaurant Menu
          </h2>
          <p className="mt-3 text-base text-[#665E55]">
            All dishes are prepared fresh upon order with authentic Pakistani spices, served hot with tandoori naan and sides.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <Search className="w-5 h-5 text-[#8C8276] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              id="menu-search-input"
              type="text"
              placeholder="Search karahi, daal, BBQ, chicken..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-16 py-3.5 bg-white border border-[#DDD6CB] rounded-xl text-sm text-[#231E1B] placeholder-[#8C8276] focus:outline-hidden focus:border-[#BF432F] focus:ring-1 focus:ring-[#BF432F]/20 shadow-xs transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#8C8276] hover:text-[#231E1B] bg-[#F2ECE1] px-2.5 py-1 rounded-md transition-colors"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Pills Navigation */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-10 no-scrollbar justify-start sm:justify-center">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={`whitespace-nowrap px-4.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-xs cursor-pointer ${
                  isActive
                    ? 'bg-[#231E1B] text-white shadow-sm'
                    : 'bg-white text-[#574E46] border border-[#EAE4DA] hover:border-[#BF432F] hover:text-[#BF432F]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-[#DDD6CB] max-w-xl mx-auto">
            <p className="text-base font-semibold text-[#231E1B]">No menu items found</p>
            <p className="text-xs text-[#786E64] mt-1">
              Try searching for another dish or reset the filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                onCategoryChange('All');
              }}
              className="mt-4 px-4 py-2 bg-[#BF432F] text-white rounded-lg text-xs font-semibold hover:bg-[#A63725] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((dish) => {
              const isAdded = recentlyAddedId === dish.id;

              return (
                <div
                  key={dish.id}
                  className="group bg-white rounded-2xl border border-[#EAE4DA] hover:border-[#BF432F]/50 p-5 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div>
                    {/* Top Row: Category tag, urdu name & badges */}
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-[11px] font-bold text-[#BF432F] tracking-wider uppercase">
                        {dish.category}
                      </span>
                      {dish.urduName && (
                        <span className="text-xs font-bold text-[#8C8276]">
                          {dish.urduName}
                        </span>
                      )}
                    </div>

                    {/* Image with subtle 3D hover scale */}
                    {dish.image && (
                      <div className="relative h-48 rounded-xl overflow-hidden mb-4 bg-[#231E1B]/5 border border-[#EAE4DA]/70">
                        <img
                          src={dish.image}
                          alt={dish.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                        />
                        {dish.isPopular && (
                          <div className="absolute top-2.5 left-2.5 bg-[#BF432F] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md flex items-center space-x-1 shadow-xs">
                            <Flame className="w-3 h-3" />
                            <span>Popular</span>
                          </div>
                        )}
                        {dish.isSpecial && (
                          <div className="absolute top-2.5 right-2.5 bg-[#231E1B] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md flex items-center space-x-1 shadow-xs border border-white/10">
                            <Sparkles className="w-3 h-3 text-[#CA7826]" />
                            <span>Special</span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Dish Title & Price */}
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-lg font-bold font-display text-[#231E1B] leading-snug group-hover:text-[#BF432F] transition-colors">
                        {dish.name}
                      </h3>
                      <div className="text-right flex-shrink-0">
                        <span className="text-base font-extrabold text-[#BF432F] whitespace-nowrap">
                          PKR {dish.price.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-[#665E55] leading-relaxed mb-3">
                      {dish.description}
                    </p>

                    {/* Spiciness & Serving Details */}
                    <div className="flex items-center space-x-2 text-[11px] text-[#786E64] mb-4">
                      {dish.spiciness && (
                        <span className="px-2 py-0.5 rounded-md bg-[#FAF7F2] border border-[#EAE4DA] font-medium">
                          Spiciness: {dish.spiciness}
                        </span>
                      )}
                      {dish.serving && (
                        <span className="px-2 py-0.5 rounded-md bg-[#FAF7F2] border border-[#EAE4DA] font-medium">
                          {dish.serving}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Terracotta Add to Order Button */}
                  <div className="pt-3 border-t border-[#F2ECE1]">
                    <button
                      id={`add-btn-${dish.id}`}
                      onClick={() => handleAdd(dish)}
                      className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-xs ${
                        isAdded
                          ? 'bg-[#16A34A] text-white'
                          : 'bg-[#BF432F] hover:bg-[#A63725] text-white active:scale-98'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Added to Order Tray</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" />
                          <span>Add to Order</span>
                        </>
                      )}
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* Note on Prices & Fresh Preparation */}
        <div className="mt-12 p-4 rounded-2xl bg-white border border-[#EAE4DA] text-center max-w-2xl mx-auto shadow-xs">
          <p className="text-xs text-[#665E55] leading-relaxed">
            All prices are in Pakistani Rupees (PKR) and confirmed from Al-Hamd Restaurant & Bar B.Q. Larkana. Freshly baked roghni naan, roti, and chilled raita are available with every order.
          </p>
        </div>

      </div>
    </section>
  );
};
