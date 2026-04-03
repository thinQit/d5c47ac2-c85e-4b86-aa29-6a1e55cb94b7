export interface NavItem {
  label: string;
  href: string;
}

export interface CTA {
  label: string;
  href: string;
}

export interface Product {
  slug: string;
  name: string;
  price: number;
  compareAtPrice: number | null;
  currency: string;
  rating: number;
  reviewCount: number;
  badges: string[];
  highlights: string[];
  colorways: string[];
  sizes: string[];
}

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  product: string;
  quote: string;
}

export interface Review {
  id: string;
  productSlug: string;
  authorName: string;
  rating: number;
  title?: string;
  body: string;
  verified: boolean;
  createdAt: string;
}

export interface CartItem {
  productSlug: string;
  name: string;
  color: string;
  size: string;
  quantity: number;
  unitPrice: number;
  image?: string;
}

export interface ContactMessageInput {
  name: string;
  email: string;
  topic: "sizing" | "return" | "order" | "product" | "other";
  orderNumber?: string;
  message: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
