import { createReducer } from '@reduxjs/toolkit';
import { cityNames } from '../../constants';
import { offers } from '../../mocks/offers';
import { selectCityAction } from '../actions/action';

const initialState = {
  selectedCity: cityNames.PARIS,
  offers: offers,
};


const changeLocation = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCityAction, (state, action) => {
      state.selectedCity = action.payload;
    });
});


export {changeLocation};
