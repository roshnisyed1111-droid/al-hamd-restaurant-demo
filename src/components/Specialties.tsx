import React from 'react';
import { ArrowRight, Flame } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface SpecialtiesProps {
  onSelectCategory: (category: string) => void;
}

export const Specialties: React.FC<SpecialtiesProps> = ({ onSelectCategory }) => {
  const specialties = [
    {
      id: 'karahi-specialty',
      title: 'Chicken Karahi',
      urdu: 'چکن کڑاہی',
      category: 'Chicken Karahi',
      tagline: 'Sizzling Wok Specialty',
      description: 'Rich, spicy and freshly prepared Pakistani karahi cooked in iron woks with vine-ripened tomatoes, fresh ginger strips, and green chilies.',
      price: 'From PKR 1,600',
      image: RESTAURANT_INFO.images.karahi,
      badge: 'House Favorite',
    },
    {
      id: 'bbq-specialty',
      title: 'Pakistani BBQ',
      urdu: 'بار بی کیو اسپیشل',
      category: 'BBQ',
      tagline: 'Charcoal Grilled',
      description: 'Grilled Pakistani BBQ dishes including tender chicken seekh kababs and smoky tikka boti marinated in traditional herbs and spices.',
      price: 'From PKR 450',
      image: RESTAURANT_INFO.images.bbq,
      badge: 'Charcoal Fired',
    },
    {
      id: 'daal-specialty',
      title: 'Special Shahi Daal',
      urdu: 'الحمد اسپیشل شاہی دال',
      category: 'Daal',
      tagline: 'Desi Ghee Tarka',
      description: 'A creamy, flavorful daal specialty slow-cooked to a buttery consistency and tempered with golden garlic, cumin, and fragrant desi ghee.',
      price: 'From PKR 400',
      image: RESTAURANT_INFO.images.shahiDaal,
      badge: 'Al-Hamd Specialty',
    }
  ];

  return (
    <section id="specialties" className="py-16 sm:py-20 bg-white border-b border-[#EBE5DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-[#C2410C] font-semibold text-xs tracking-wider uppercase mb-2">
            <Flame className="w-4 h-4" />
            <span>Al-Hamd Signature Offerings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#1C201E] tracking-tight">
            Karahi • BBQ • Traditional Pakistani Cuisine
          </h2>
          <p className="mt-3 text-base text-[#61584D] leading-relaxed">
            Prepared fresh to order following traditional Pakistani culinary recipes with premium local ingredients in Larkana.
          </p>
        </div>

        {/* 3 Signature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialties.map((spec) => (
            <div
              key={spec.id}
              className="group bg-[#FBF9F5] rounded-2xl overflow-hidden border border-[#E8E1D5] hover:border-[#C2410C]/40 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative h-60 overflow-hidden bg-[#242A27]">
                <img
                  src={spec.image}
                  alt={spec.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 bg-[#1C201E]/80 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
                  {spec.badge}
                </div>
                <div className="absolute bottom-3 right-3 bg-white/95 text-[#1C201E] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  {spec.price}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-semibold text-[#C2410C] tracking-wide uppercase">
                      {spec.tagline}
                    </span>
                    <span className="text-xs font-bold text-[#8C8275]">
                      {spec.urdu}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-display text-[#1C201E] mb-2.5">
                    {spec.title}
                  </h3>
                  <p className="text-sm text-[#544D44] leading-relaxed">
                    {spec.description}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="pt-5 mt-5 border-t border-[#EDE7DD]">
                  <button
                    onClick={() => onSelectCategory(spec.category)}
                    className="w-full inline-flex items-center justify-center space-x-2 text-sm font-semibold text-[#1C201E] hover:text-[#C2410C] group-hover:translate-x-1 transition-all py-1"
                  >
                    <span>View in Menu</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
