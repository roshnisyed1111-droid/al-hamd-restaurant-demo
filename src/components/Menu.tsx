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
    <section id="menu" className="py-16 sm:py-24 bg-white border-b border-[#EBE5DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C2410C] block mb-2">
            Freshly Prepared Daily • Larkana
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#1C201E] tracking-tight">
            Al-Hamd Restaurant Menu
          </h2>
          <p className="mt-3 text-base text-[#61584D]">
            All dishes are prepared fresh upon order with authentic Pakistani spices, served hot with tandoori naan and sides.
          </p>
        </div>

        {/* Search Bar & Stats */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <Search className="w-5 h-5 text-[#8A8073] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              id="menu-search-input"
              type="text"
              placeholder="Search karahi, daal, BBQ, biryani..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-[#FBF9F5] border border-[#DDD5C7] rounded-xl text-sm text-[#1C201E] placeholder-[#8A8073] focus:outline-hidden focus:border-[#C2410C] focus:bg-white shadow-xs transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#8A8073] hover:text-[#1C201E] bg-[#ECE5D8] px-2 py-1 rounded-md"
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
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-xs ${
                  isActive
                    ? 'bg-[#1C201E] text-white shadow-sm'
                    : 'bg-[#F5EFEB] text-[#4A433A] hover:bg-[#EBE2D5] hover:text-[#1C201E]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#FBF9F5] rounded-2xl border border-dashed border-[#DDD5C7]">
            <p className="text-base font-semibold text-[#1C201E]">No menu items found</p>
            <p className="text-xs text-[#736A5E] mt-1">
              Try searching for something else or browse all categories.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                onCategoryChange('All');
              }}
              className="mt-4 px-4 py-2 bg-[#C2410C] text-white rounded-lg text-xs font-semibold"
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
                  className="bg-[#FBF9F5] rounded-2xl border border-[#E8E1D5] hover:border-[#D1C5B4] p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Row: Category tag, urdu name & badges */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-semibold text-[#C2410C] tracking-wide uppercase">
                        {dish.category}
                      </span>
                      {dish.urduName && (
                        <span className="text-xs font-semibold text-[#786E61]">
                          {dish.urduName}
                        </span>
                      )}
                    </div>

                    {/* Image if available */}
                    {dish.image && (
                      <div className="relative h-44 rounded-xl overflow-hidden mb-4 bg-gray-100">
                        <img
                          src={dish.image}
                          alt={dish.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                        />
                        {dish.isPopular && (
                          <div className="absolute top-2.5 left-2.5 bg-[#C2410C] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md flex items-center space-x-1 shadow-xs">
                            <Flame className="w-3 h-3" />
                            <span>Popular</span>
                          </div>
                        )}
                        {dish.isSpecial && (
                          <div className="absolute top-2.5 right-2.5 bg-[#1C201E] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md flex items-center space-x-1 shadow-xs">
                            <Sparkles className="w-3 h-3 text-[#F59E0B]" />
                            <span>Special</span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Dish Title & Price */}
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-lg font-bold font-display text-[#1C201E] leading-snug">
                        {dish.name}
                      </h3>
                      <div className="text-right flex-shrink-0">
                        <span className="text-base font-extrabold text-[#C2410C] whitespace-nowrap">
                          PKR {dish.price.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-[#5D5449] leading-relaxed mb-3">
                      {dish.description}
                    </p>

                    {/* Spiciness & Serving Details */}
                    <div className="flex items-center space-x-2 text-[11px] text-[#7A7165] mb-4">
                      {dish.spiciness && (
                        <span className="px-2 py-0.5 rounded-md bg-[#F2ECE1] font-medium">
                          Spiciness: {dish.spiciness}
                        </span>
                      )}
                      {dish.serving && (
                        <span className="px-2 py-0.5 rounded-md bg-[#F2ECE1] font-medium">
                          {dish.serving}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Add to Order Button */}
                  <div className="pt-3 border-t border-[#EDE6DB]">
                    <button
                      id={`add-btn-${dish.id}`}
                      onClick={() => handleAdd(dish)}
                      className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center space-x-2 transition-all ${
                        isAdded
                          ? 'bg-[#16A34A] text-white'
                          : 'bg-white border border-[#D5CDBD] text-[#1C201E] hover:border-[#C2410C] hover:text-[#C2410C] shadow-xs active:scale-98'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Added to Order</span>
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
        <div className="mt-12 p-4 rounded-2xl bg-[#F7F4EE] border border-[#E5DFD4] text-center max-w-2xl mx-auto">
          <p className="text-xs text-[#61574A] leading-relaxed">
            All prices are in Pakistani Rupees (PKR) and confirmed from Al-Hamd Restaurant & Bar B.Q. Larkana. Freshly baked roghni naan, roti, and chilled raita are available with every order.
          </p>
        </div>

      </div>
    </section>
  );
};
