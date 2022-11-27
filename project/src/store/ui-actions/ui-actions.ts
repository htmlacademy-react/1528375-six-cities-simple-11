import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CITIES, NameSpace, sortItemsList } from '../../constants';
import { City, UiActionsType } from '../../types/types';

const initialState: UiActionsType = {
  selectedCity: CITIES[0],
  sortType: sortItemsList.POPULAR,
};

const uiActions = createSlice({
  name: NameSpace.Ui,
  initialState,
  reducers: {
    selectCityAction: (state, action: PayloadAction<City>) => {
      state.selectedCity = action.payload;
    },
    getSortingTypeAction: (state, action:PayloadAction<string>) => {
      state.sortType = action.payload;
    },
  }
});

export {uiActions};
export const {selectCityAction, getSortingTypeAction} = uiActions.actions;
