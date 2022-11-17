import { createReducer } from '@reduxjs/toolkit';
import { CITIES, sortingItems } from '../../constants';
import { City, OffersType } from '../../types/types';
import { selectCityAction, getSortingTypeAction, getOfferAction, setLoadingStatusAction } from '../actions/action';

type initialStateType = {
  selectedCity: City;
  sortType: string;
  offers: OffersType[];
  isOffersLoading: boolean;
}

const initialState: initialStateType = {
  selectedCity: CITIES[0],
  sortType: sortingItems.POPULAR,
  offers: [],
  isOffersLoading: false,
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCityAction, (state, action) => {
      state.selectedCity = action.payload;
    })

    .addCase(getSortingTypeAction, (state, action) => {
      state.sortType = action.payload;
    })

    .addCase(setLoadingStatusAction, (state, action) => {
      state.isOffersLoading = action.payload;
    })

    .addCase(getOfferAction, (state, action) => {
      state.offers = action.payload;
    });
});


export {reducer};
