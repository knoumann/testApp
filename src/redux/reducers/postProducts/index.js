/*
 * getRoles Reducer
 */
import {createSlice} from '@reduxjs/toolkit';

const initialState = {};

export const postProductsSlice = createSlice({
  name: 'postProducts',
  initialState,
  reducers: {
    /**
     * GetRoles Request
     */
    postProductsRequest: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    postProductsSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.postData = action.payload;
    },
    postProductsFailure: (state, action) => {
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const {postProductsRequest, postProductsSuccess, postProductsFailure} =
  postProductsSlice.actions;

export default postProductsSlice.reducer;
