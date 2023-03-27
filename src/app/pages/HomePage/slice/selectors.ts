import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.products || initialState;

export const selectProducts = createSelector([selectSlice], state => state);

export const selectProductSearch = createSelector(
  [selectSlice],
  state => state.search,
);
