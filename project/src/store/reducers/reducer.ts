import { createReducer } from '@reduxjs/toolkit';
import { CITIES, sortingItems } from '../../constants';
import { offers } from '../../mocks/offers';
import { selectCityAction, getSortingTypeAction } from '../actions/action';

const initialState = {
  selectedCity: CITIES[0],
  offers: offers,
  sortType: sortingItems.POPULAR,
};


const changeLocation = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCityAction, (state, action) => {
      state.selectedCity = action.payload;
    })

    .addCase(getSortingTypeAction, (state, action) => {
      state.sortType = action.payload;
    });
});


export {changeLocation};
