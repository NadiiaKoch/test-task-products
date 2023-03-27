import Error from 'app/components/Error/Error';
import Loader from 'app/components/Loader/Loader';
import ProductsList from 'app/pages/HomePage/ProductsList/ProductsList';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useProductList } from './ProductsList/useProductList';

export function HomePage() {
  const { loading, error } = useProductList();
  return (
    <>
      <Helmet>
        <title>Products</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      {loading && !error && <Loader />}
      <ProductsList />
      {error && <Error />}
    </>
  );
}
