import { PayloadAction } from '@reduxjs/toolkit';
import {
  take,
  call,
  put,
  select,
  takeLatest,
  debounce,
} from 'redux-saga/effects';
import {
  AddProductAction,
  GetProductsAction,
  productsActions as actions,
} from '.';

function* getProductsSaga(action: PayloadAction<GetProductsAction>) {
  try {
    const { search } = action.payload;

    let productRes;

    if (search) {
      productRes = yield fetch(
        `https://dummyjson.com/products/search?q=${search}`,
      );
    } else {
      productRes = yield fetch('https://dummyjson.com/products');
    }
    const jsonData = yield productRes.json();

    yield put(actions.getProductsOk({ productListState: jsonData }));
  } catch (e) {
    yield put(actions.getProductsError());
  }
}

function* onChangeSearchSaga(action: PayloadAction<string>) {
  yield put(actions.getProducts({ search: action.payload }));
}

function* addProductSaga(action: PayloadAction<AddProductAction>) {
  try {
    yield fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(action.payload.form),
    });

    action.payload.navigate('/');
  } catch (e) {
    yield put(actions.addProductError());
  }
}

export function* productsSaga() {
  yield takeLatest(actions.getProducts.type, getProductsSaga);
  yield debounce(300, actions.onChangeSearch.type, onChangeSearchSaga);

  yield takeLatest(actions.addProduct.type, addProductSaga);
}
