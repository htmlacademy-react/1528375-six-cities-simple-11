import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants';
import { OffersDataType } from '../../types/types';
import { fetchOffersAction } from '../actions/api-actions';

const initialState: OffersDataType = {
  offers: [],
  isOffersLoading: false,
};

const offersData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersLoading = false;
      });
  },
});

export {offersData};
