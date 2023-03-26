import Header from 'app/components/Header/Header';
import ProductsList from 'app/components/ProductsList/ProductsList';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Products</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Header searchValue="wqqwe" onChangeSearchValue={() => {}} />
      <ProductsList />
    </>
  );
}
