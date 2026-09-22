export type MenuCategory = 
  | 'All'
  | 'Chicken Karahi'
  | 'Red & White Chicken Karahi'
  | 'Al-Hamd Special Shahi'
  | 'Daal'
  | 'BBQ'
  | 'Chicken'
  | 'Vegetables'
  | 'Rice / Other Pakistani Dishes';

export interface MenuItem {
  id: string;
  name: string;
  urduName?: string;
  category: MenuCategory;
  price: number;
  description: string;
  image?: string;
  isPopular?: boolean;
  isSpecial?: boolean;
  spiciness?: 'Mild' | 'Medium' | 'Spicy';
  serving?: string;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  specialInstructions?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  source: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: string;
  description: string;
  imageSrc: string;
  fallbackSrc?: string;
  isRealUploaded?: boolean;
}
