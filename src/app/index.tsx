import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { useProductsSlice } from './pages/HomePage/slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectProductSearch } from './pages/HomePage/slice/selectors';
import Header from './components/Header/Header';
import { AddProductPage } from './pages/AddProductPage';

export function App() {
  const { i18n } = useTranslation();

  const { actions } = useProductsSlice();

  const search = useSelector(selectProductSearch);

  const dispatch = useDispatch();

  const handleSearch = (value?: string) => {
    dispatch(actions.onChangeSearch(value || ''));
  };

  return (
    <BrowserRouter>
      <Helmet htmlAttributes={{ lang: i18n.language }}>
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <div>
        <Header searchValue={search} onChangeSearchValue={handleSearch} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-product" element={<AddProductPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <GlobalStyle />
    </BrowserRouter>
  );
}
