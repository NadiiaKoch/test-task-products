import { PayloadAction } from '@reduxjs/toolkit';
import { NewProductForm } from 'types/NewProductForm';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { productsSaga } from './saga';
import { ProductListState, ProductsState } from './types';

export const initialState: ProductsState = {
  productListState: {
    limit: 30,
    products: [],
    total: 0,
  },
  search: '',
};

export interface GetProductsAction {
  search?: string;
}

export interface GetProductsOkAction {
  productListState: ProductListState;
}

export interface RemoveProductAction {
  ids: string[];
}

export interface AddProductAction {
  form: NewProductForm;
  navigate: (url: string) => void;
}

const slice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProducts(state, action: PayloadAction<GetProductsAction>) {
      state.loading = true;
      state.error = false;
    },
    getProductsOk(state, action: PayloadAction<GetProductsOkAction>) {
      state.loading = false;
      state.productListState = action.payload.productListState;
    },
    getProductsError(state) {
      state.error = true;
    },

    removeProduct(state, action: PayloadAction<RemoveProductAction>) {
      state.productListState.products =
        state.productListState?.products.filter(
          product => !action.payload.ids.includes(product.id),
        ) || [];
    },

    onChangeSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },

    addProduct(state, action: PayloadAction<AddProductAction>) {
      state.loading = true;
      state.error = false;
    },
    addProductOk(state) {
      state.loading = false;
    },
    addProductError(state) {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { actions: productsActions } = slice;

export const useProductsSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: productsSaga });
  return { actions: slice.actions };
};
