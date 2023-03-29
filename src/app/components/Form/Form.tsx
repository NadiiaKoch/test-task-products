import React from 'react';
import { Field, Form, Formik } from 'formik';
import { TextField, Button, Box, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useProductsSlice } from 'app/pages/HomePage/slice';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

export const validationSchema = yup.object({
  title: yup.string().required('Title is required'),
  author: yup.string().required('Author is required'),
  year: yup
    .number()
    .integer('Year must be a whole number')
    .min(1900, 'Year must be at least 1900')
    .max(
      new Date().getFullYear(),
      `Year cannot be more than the current year (${new Date().getFullYear()})`,
    ),
  rating: yup
    .number()
    .min(1, 'Rating must be at least 1')
    .max(5, 'Rating cannot be more than 5')
    .nullable(),
});

export function AddProductForm() {
  const { actions } = useProductsSlice();

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleFormSubmit = values => {
    dispatch(
      actions.addProduct({
        form: {
          ...values,
          id: '101',
          description: 'fh',
          price: 'iuefg',
          stock: 'wt',
          category: 'wt',
          thumbnail: 'wt',
        },
        navigate,
      }),
    );
  };
  return (
    <Box maxWidth="300px" margin="0 auto">
      <Formik
        initialValues={{ title: '', author: '', year: '', rating: null }}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ handleSubmit, handleChange, values, errors, touched }) => (
          <Form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="title"
                  label="Title"
                  fullWidth
                  value={values.title}
                  onChange={handleChange}
                  error={touched.title && Boolean(errors.title)}
                  helperText={touched.title && errors.title}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="author"
                  label="Author"
                  fullWidth
                  value={values.author}
                  onChange={handleChange}
                  error={touched.author && Boolean(errors.author)}
                  helperText={touched.author && errors.author}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  as={TextField}
                  name="year"
                  label="Year"
                  fullWidth
                  value={values.year}
                  onChange={handleChange}
                  error={touched.year && Boolean(errors.year)}
                  helperText={touched.year && errors.year}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  as={TextField}
                  name="rating"
                  label="Rating"
                  type="number"
                  step="0.01"
                  fullWidth
                  value={values.rating}
                  onChange={handleChange}
                  error={touched.rating && Boolean(errors.rating)}
                  helperText={touched.rating && errors.rating}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary">
                  Add Product
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
