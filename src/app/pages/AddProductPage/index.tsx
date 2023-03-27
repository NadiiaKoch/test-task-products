import { Box } from '@mui/material';
import { AddProductForm } from 'app/components/Form/Form';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';

export function AddProductPage() {
  return (
    <>
      <Helmet>
        <title>Add Product</title>
      </Helmet>
      <Box p={2}>
        <AddProductForm />
      </Box>
    </>
  );
}
