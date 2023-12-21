/*
 * getRoles Reducer
 */
import {createSlice} from '@reduxjs/toolkit';

const initialState = {};

export const getProductsSlice = createSlice({
  name: 'getProducts',
  initialState,
  reducers: {
    /**
     * GetRoles Request
     */
    getProductsRequest: (state, action) => {
      state.isLoading =
        action.payload.page === 1 && !action?.payload?.refresh ? true : false;
      state.error = null;
      state.loadMore =
        action.payload.page !== 1 && !action?.payload?.refresh ? true : false;
    },
    getProductsSuccess: (state, action) => {
      state.isLoading = false;
      state.loadMore = false;

      state.error = null;
      state.getProductsData =
        state?.getProductsData && action?.payload?.page !== 1
          ? [...state.getProductsData, ...action?.payload?.data]
          : [...action?.payload?.data];
    },
    getProductsFailure: (state, action) => {
      state.isLoading = false;
      state.loadMore = false;

      state.error = null;
    },
  },
});

export const {getProductsRequest, getProductsSuccess, getProductsFailure} =
  getProductsSlice.actions;

export default getProductsSlice.reducer;
