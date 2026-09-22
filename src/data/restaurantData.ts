import { MenuItem, Review, GalleryImage } from '../types';

// Image asset imports
import heroFoodSpread from '../assets/images/hero_food_spread_1790088109926.jpg';
import chickenKarahiImg from '../assets/images/chicken_karahi_1790088128736.jpg';
import chickenBbqImg from '../assets/images/chicken_bbq_1790088147367.jpg';
import shahiDaalImg from '../assets/images/shahi_daal_1790088167344.jpg';
import whiteKarahiImg from '../assets/images/white_karahi_1790088184212.jpg';
import diningAreaImg from '../assets/images/restaurant_dining_area_1790088260141.jpg';
import liveCookingImg from '../assets/images/karahi_cooking_live_1790088285725.jpg';

export const RESTAURANT_INFO = {
  name: 'AL-HAMD RESTAURANT & BAR B.Q.',
  shortName: 'Al-Hamd',
  tagline: 'Authentic Pakistani Taste, Served Fresh',
  subtext: 'Al-Hamd Restaurant & Bar B.Q. — delicious Pakistani cuisine, BBQ and karahi in the heart of Larkana.',
  city: 'Larkana',
  province: 'Sindh',
  country: 'Pakistan',
  fullAddress: 'G.T Road, near Shaikh Zaid Chowk, Muhalla Manzoorabad, Larkana, Pakistan',
  phone: '+92 313 0262784',
  phoneDisplay: '+92 313 0262784',
  rating: 4.2,
  reviewsCount: 65,
  priceRange: 'PKR 1,000 or less per person',
  budgetBadge: 'Budget-friendly',
  closingTime: '2:00 AM',
  services: ['Dine-in', 'Takeout', 'Halal Food', 'Late-night Food', 'Table Service', 'Quick Bites', 'Small Plates', 'Lunch', 'Dinner'],
  images: {
    hero: heroFoodSpread,
    karahi: chickenKarahiImg,
    bbq: chickenBbqImg,
    shahiDaal: shahiDaalImg,
    whiteKarahi: whiteKarahiImg,
    interior: diningAreaImg,
    cooking: liveCookingImg,
  }
};

export const MENU_ITEMS: MenuItem[] = [
  // --- CHICKEN KARAHI ---
  {
    id: 'ck-red',
    name: 'Chicken Karahi (Red)',
    urduName: 'چکن کڑاہی (سرخ)',
    category: 'Chicken Karahi',
    price: 1600,
    description: 'Fresh chicken cooked in a traditional iron wok with fresh tomatoes, ginger, green chilies, and authentic local spices.',
    image: chickenKarahiImg,
    isPopular: true,
    spiciness: 'Spicy',
    serving: 'Full Karahi (serves 3-4)'
  },
  {
    id: 'ck-peshawari',
    name: 'Chicken Peshawari Karahi',
    urduName: 'چکن پشاوری کڑاہی',
    category: 'Chicken Karahi',
    price: 1800,
    description: 'Slow-simmered in rich desi tomato reduction with cracked black pepper and green chilies. A northern Pakistani classic.',
    image: chickenKarahiImg,
    isPopular: true,
    spiciness: 'Medium',
    serving: 'Full Karahi (serves 3-4)'
  },
  {
    id: 'ck-singapuri',
    name: 'Chicken Singapuri Karahi',
    urduName: 'چکن سنگاپوری کڑاہی',
    category: 'Chicken Karahi',
    price: 1800,
    description: 'A special fusion recipe seasoned with aromatic spices, capsicum, and savory tomato-chili glaze.',
    image: chickenKarahiImg,
    spiciness: 'Medium',
    serving: 'Full Karahi (serves 3-4)'
  },
  {
    id: 'ck-tandoori',
    name: 'Chicken Tandoori Karahi',
    urduName: 'چکن تندوری کڑاہی',
    category: 'Chicken Karahi',
    price: 1800,
    description: 'Smoky tandoori-marinated chicken prepared in a robust karahi masala with charcoal aroma.',
    image: chickenKarahiImg,
    isPopular: true,
    spiciness: 'Spicy',
    serving: 'Full Karahi (serves 3-4)'
  },
  {
    id: 'ck-shahi',
    name: 'Chicken Shahi Karahi',
    urduName: 'چکن شاہی کڑاہی',
    category: 'Al-Hamd Special Shahi',
    price: 1800,
    description: 'Al-Hamd signature preparation enriched with rich butter, roasted spices, and velvety gravy.',
    image: chickenKarahiImg,
    isSpecial: true,
    isPopular: true,
    spiciness: 'Medium',
    serving: 'Full Karahi (serves 3-4)'
  },
  {
    id: 'ck-taaftani',
    name: 'Chicken Taaftani Karahi',
    urduName: 'چکن تافتانی کڑاہی',
    category: 'Chicken Karahi',
    price: 1800,
    description: 'Rich, thick-textured traditional karahi crafted to pair perfectly with hot tandoori taftan or roghni naan.',
    image: chickenKarahiImg,
    spiciness: 'Medium',
    serving: 'Full Karahi (serves 3-4)'
  },
  {
    id: 'ck-green',
    name: 'Chicken Green Karahi',
    urduName: 'چکن ہری کڑاہی',
    category: 'Chicken Karahi',
    price: 1800,
    description: 'Infused with fragrant fresh mint, green coriander, and crushed green chili paste for an herbal kick.',
    image: chickenKarahiImg,
    spiciness: 'Spicy',
    serving: 'Full Karahi (serves 3-4)'
  },
  {
    id: 'ck-lemon',
    name: 'Chicken Lemon Karahi',
    urduName: 'چکن لیمن کڑاہی',
    category: 'Chicken Karahi',
    price: 1800,
    description: 'Tangy and zesty chicken karahi balanced with fresh lemon juice, ginger strips, and whole spices.',
    image: chickenKarahiImg,
    spiciness: 'Medium',
    serving: 'Full Karahi (serves 3-4)'
  },
  {
    id: 'ck-dhaka',
    name: 'Chicken Dhaka Karahi',
    urduName: 'چکن ڈھاکہ کڑاہی',
    category: 'Chicken Karahi',
    price: 1800,
    description: 'Distinctive eastern-spiced karahi with toasted sesame hints and rich aromatic masala.',
    image: chickenKarahiImg,
    spiciness: 'Medium',
    serving: 'Full Karahi (serves 3-4)'
  },
  // --- RED & WHITE CHICKEN KARAHI ---
  {
    id: 'ck-white',
    name: 'Chicken White Karahi (Makhni)',
    urduName: 'چکن وائٹ کڑاہی',
    category: 'Red & White Chicken Karahi',
    price: 1800,
    description: 'Cooked with pure fresh dairy cream, yogurt, white pepper, and julienned ginger without red chillies.',
    image: whiteKarahiImg,
    isSpecial: true,
    isPopular: true,
    spiciness: 'Mild',
    serving: 'Full Karahi (serves 3-4)'
  },
  // --- DAAL ---
  {
    id: 'daal-shahi',
    name: 'Al-Hamd Special Shahi Daal',
    urduName: 'الحمد اسپیشل شاہی دال',
    category: 'Al-Hamd Special Shahi',
    price: 400,
    description: 'Our house specialty daal, slow-cooked to a buttery, velvety texture and finished with a sizzling desi ghee tarka.',
    image: shahiDaalImg,
    isSpecial: true,
    isPopular: true,
    spiciness: 'Medium',
    serving: 'Full Plate'
  },
  {
    id: 'daal-singapuri',
    name: 'Singapuri Daal',
    urduName: 'سنگاپوری دال',
    category: 'Daal',
    price: 450,
    description: 'Flavorful spiced lentils with tempered garlic, cumin, sliced vegetables, and a unique zesty sauce.',
    image: shahiDaalImg,
    spiciness: 'Medium',
    serving: 'Full Plate'
  },
  {
    id: 'daal-lemon',
    name: 'Lemon Daal',
    urduName: 'لیمن دال',
    category: 'Daal',
    price: 400,
    description: 'Comforting lentil stew with a refreshing citrus lemon tarka, green coriander, and crisp fried garlic.',
    image: shahiDaalImg,
    spiciness: 'Mild',
    serving: 'Full Plate'
  },
  {
    id: 'daal-green',
    name: 'Green Daal',
    urduName: 'ہری دال',
    category: 'Daal',
    price: 400,
    description: 'Healthy and aromatic yellow lentils blended with fresh spinach, coriander, and green chili tadka.',
    image: shahiDaalImg,
    spiciness: 'Mild',
    serving: 'Full Plate'
  },
  {
    id: 'daal-malai',
    name: 'Malai Daal',
    urduName: 'ملائی دال',
    category: 'Daal',
    price: 400,
    description: 'Creamy and mild lentils enriched with dairy malai and butter, gentle on spice and rich in flavor.',
    image: shahiDaalImg,
    spiciness: 'Mild',
    serving: 'Full Plate'
  },
  // --- BBQ & CHICKEN SPECIALTIES ---
  {
    id: 'bbq-tikka',
    name: 'Chicken Tikka Boti',
    urduName: 'چکن تکہ بوٹی',
    category: 'BBQ',
    price: 450,
    description: 'Tender boneless chicken cubes marinated in traditional spices and char-grilled over glowing coals.',
    image: chickenBbqImg,
    isPopular: true,
    spiciness: 'Medium',
    serving: 'Plate of 6-8 boti'
  },
  {
    id: 'bbq-seekh',
    name: 'Chicken Seekh Kabab',
    urduName: 'چکن سیخ کباب',
    category: 'BBQ',
    price: 500,
    description: 'Finely minced chicken seasoned with coriander, green chilies, and roasted cumin skewered to juicy perfection.',
    image: chickenBbqImg,
    isPopular: true,
    spiciness: 'Medium',
    serving: '4 skewers with raita'
  },
  {
    id: 'bbq-malai',
    name: 'Chicken Malai Boti',
    urduName: 'چکن ملائی بوٹی',
    category: 'BBQ',
    price: 550,
    description: 'Melt-in-mouth chicken marinated in thick cream, green cardamoms, and mild herbs, light on spice.',
    image: chickenBbqImg,
    isSpecial: true,
    spiciness: 'Mild',
    serving: 'Plate of 6-8 boti'
  },
  // --- VEGETABLES & SIDES ---
  {
    id: 'veg-mix',
    name: 'Desi Tarka Mixed Vegetables',
    urduName: 'مکس سبزی تڑکا',
    category: 'Vegetables',
    price: 350,
    description: 'Fresh seasonal vegetables sautéed with cumin seeds, tomatoes, onion, and crushed black pepper.',
    image: shahiDaalImg,
    spiciness: 'Medium',
    serving: 'Full Plate'
  },
  // --- RICE / OTHER PAKISTANI DISHES ---
  {
    id: 'rice-biryani',
    name: 'Special Chicken Biryani',
    urduName: 'اسپیشل چکن بریانی',
    category: 'Rice / Other Pakistani Dishes',
    price: 350,
    description: 'Fragrant basmati rice layered with spiced chicken, potatoes, prunes, and fried golden onions.',
    image: heroFoodSpread,
    isPopular: true,
    spiciness: 'Medium',
    serving: 'Full Plate with Raita'
  },
  {
    id: 'bread-naan',
    name: 'Tandoori Roghni Naan',
    urduName: 'تندوری روغنی نان',
    category: 'Rice / Other Pakistani Dishes',
    price: 60,
    description: 'Freshly baked in a clay tandoor, brushed with desi ghee and sprinkled with sesame seeds.',
    serving: '1 piece'
  },
  {
    id: 'bread-roti',
    name: 'Fresh Tandoori Roti',
    urduName: 'تندوری روٹی',
    category: 'Rice / Other Pakistani Dishes',
    price: 30,
    description: 'Whole wheat flatbread baked fresh per order in the traditional clay oven.',
    serving: '1 piece'
  },
  {
    id: 'side-raita',
    name: 'Zeera Raita & Fresh Kachumber Salad',
    urduName: 'زیرہ رائتہ اور سلاد',
    category: 'Rice / Other Pakistani Dishes',
    price: 80,
    description: 'Chilled whipped yogurt with roasted cumin powder, cucumber, tomato, and fresh onion rings.',
    serving: '1 bowl'
  }
];

export const CUSTOMER_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Saleem Khan Khakhrani',
    rating: 5,
    text: 'Quite an amazing restaurant special for local citizens of Larkana. It provides quality service and food.',
    date: 'Verified Local Diner',
    source: 'Google Reviews'
  },
  {
    id: 'rev-2',
    author: 'Azizullah Soomro',
    rating: 5,
    text: 'Overall good experience and they are among fine restaurants of the city Larkana.',
    date: 'Verified Local Diner',
    source: 'Google Reviews'
  },
  {
    id: 'rev-3',
    author: 'Zameer Baloch',
    rating: 5,
    text: 'The food at Al Hamad Restaurant is delicious and budget friendly. It\'s a great place for good taste at a low price.',
    date: 'Verified Local Diner',
    source: 'Google Reviews'
  }
];

export const GALLERY_ITEMS: GalleryImage[] = [
  {
    id: 'gal-interior',
    title: 'Al-Hamd Dining Hall & Family Seating',
    category: 'Restaurant Interior',
    description: 'Authentic local dining hall in Larkana featuring traditional high-backed woven mooda seating with yellow patterns and red velvet borders.',
    imageSrc: diningAreaImg,
    fallbackSrc: '/Screenshot 2026-09-22 185851.png',
    isRealUploaded: true,
  },
  {
    id: 'gal-karahi',
    title: 'Signature Chicken Karahi (Red)',
    category: 'Karahi Dishes',
    description: 'Sizzling hot chicken karahi in a cast-iron wok, garnished with fresh julienned ginger, green chilies, and coriander.',
    imageSrc: chickenKarahiImg,
  },
  {
    id: 'gal-white-karahi',
    title: 'Makhni White Chicken Karahi',
    category: 'Karahi Dishes',
    description: 'Creamy, white-pepper infused karahi simmered with dairy yogurt and fresh cream.',
    imageSrc: whiteKarahiImg,
  },
  {
    id: 'gal-cooking',
    title: 'Live Karahi Kitchen Prep',
    category: 'Kitchen & Tandoor',
    description: 'Fresh chicken karahi cooked over high flame burners with live spices and fresh ingredients.',
    imageSrc: liveCookingImg,
  },
  {
    id: 'gal-bbq',
    title: 'Char-Grilled Bar B.Q. Platter',
    category: 'BBQ',
    description: 'Tikka boti and seekh kababs prepared over natural charcoal fire, served with mint chutney.',
    imageSrc: chickenBbqImg,
  },
  {
    id: 'gal-daal',
    title: 'Al-Hamd Special Shahi Daal',
    category: 'Traditional Daal',
    description: 'Slow-cooked lentils with rich desi ghee tarka and golden fried garlic.',
    imageSrc: shahiDaalImg,
  }
];

export const WEEKLY_HOURS = [
  { day: 'Monday', hours: '12:00 PM – 2:00 AM', isToday: false },
  { day: 'Tuesday', hours: '12:00 PM – 2:00 AM', isToday: true },
  { day: 'Wednesday', hours: '12:00 PM – 2:00 AM', isToday: false },
  { day: 'Thursday', hours: '12:00 PM – 2:00 AM', isToday: false },
  { day: 'Friday', hours: '12:00 PM – 2:00 AM', isToday: false },
  { day: 'Saturday', hours: '12:00 PM – 2:00 AM', isToday: false },
  { day: 'Sunday', hours: '12:00 PM – 2:00 AM', isToday: false }
];
