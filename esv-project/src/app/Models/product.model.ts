export interface Discount {
  percentage: number;
  expireDate: Date;
  isValid: boolean; // Virtual property
}

export interface Review {
  _id: string;
  rating: number;
  // Add other properties from the actual Review model if available
}

export interface Product {
  _id?: string;
  title?: string;
  brand?: string;
  description?: string;
  price?: number;
  stock?: number;
  discount?: Discount;
  thumbnail?: string;
  images?: string[];
  reviews?: Review[];
  category: string;
  details?: object;
  priceAfterDiscount?: string; // Virtual property
  avgRating?: string; // Virtual property
}
