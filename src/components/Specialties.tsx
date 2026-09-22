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
    <section id="specialties" className="py-16 sm:py-22 bg-[#FAF7F2] border-b border-[#EAE4DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-[#BF432F] font-semibold text-xs tracking-wider uppercase mb-2">
            <Flame className="w-4 h-4" />
            <span>Signature Specialties</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#231E1B] tracking-tight">
            Karahi • BBQ • Traditional Pakistani Cuisine
          </h2>
          <p className="mt-3 text-base text-[#665E55] leading-relaxed">
            Prepared fresh to order following traditional Pakistani culinary recipes with premium local ingredients in Larkana.
          </p>
        </div>

        {/* 3 Signature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialties.map((spec) => (
            <div
              key={spec.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#EAE4DA] hover:border-[#BF432F]/50 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-[#231E1B]">
                <img
                  src={spec.image}
                  alt={spec.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Badges */}
                <div className="absolute top-3.5 left-3.5 bg-[#231E1B]/85 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/15">
                  {spec.badge}
                </div>
                <div className="absolute bottom-3.5 right-3.5 bg-white text-[#231E1B] text-xs font-bold px-3 py-1 rounded-full shadow-md border border-[#EAE4DA]">
                  {spec.price}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#BF432F] tracking-wider uppercase">
                      {spec.tagline}
                    </span>
                    <span className="text-xs font-bold text-[#8C8276]">
                      {spec.urdu}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-display text-[#231E1B] mb-2.5 group-hover:text-[#BF432F] transition-colors">
                    {spec.title}
                  </h3>
                  <p className="text-sm text-[#665E55] leading-relaxed">
                    {spec.description}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="pt-5 mt-6 border-t border-[#F2ECE1]">
                  <button
                    onClick={() => onSelectCategory(spec.category)}
                    className="w-full inline-flex items-center justify-center space-x-2 text-sm font-semibold text-[#231E1B] hover:text-[#BF432F] transition-all py-1.5 group-hover:translate-x-1 cursor-pointer"
                  >
                    <span>View in Menu</span>
                    <ArrowRight className="w-4 h-4 text-[#BF432F]" />
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
