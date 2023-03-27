export interface ProductData {
  id: string;
  title: string;
  description: string;
  price: string;
  rating: string;
  stock: string;
  category: string;
  thumbnail: string;
}

export interface ProductListResponse {
  limit: number;
  products: ProductData[];
  total: number;
}
