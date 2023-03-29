export interface ProductData {
  id: string;
  title: string;
  description: string;
  price: string | number;
  rating: string | number;
  stock: string | number;
  category: string;
  thumbnail: string;
}

export interface ProductListResponse {
  limit: number;
  products: ProductData[];
  total: number;
}
