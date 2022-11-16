import { createReducer } from '@reduxjs/toolkit';
import { CITIES, sortingItems } from '../../constants';
import { City, OffersType } from '../../types/types';
import { selectCityAction, getSortingTypeAction, getOfferAction } from '../actions/action';

type initialStateType = {
  selectedCity: City;
  sortType: string;
  offers: OffersType[];
}

const initialState: initialStateType = {
  selectedCity: CITIES[0],
  sortType: sortingItems.POPULAR,
  offers: [],
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCityAction, (state, action) => {
      state.selectedCity = action.payload;
    })

    .addCase(getSortingTypeAction, (state, action) => {
      state.sortType = action.payload;
    })

    .addCase(getOfferAction, (state, action) => {
      state.offers = action.payload;
    });
});


export {reducer};
