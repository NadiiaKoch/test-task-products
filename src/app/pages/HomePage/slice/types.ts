import { ProductListResponse } from 'types/ProductData';

/* --- STATE --- */
export interface ProductsState {
  loading?: boolean;
  error?: boolean;
  productListState: ProductListState;

  search?: string;
}

export interface ProductListState extends ProductListResponse {}
