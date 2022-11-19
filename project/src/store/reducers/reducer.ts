import { createReducer } from '@reduxjs/toolkit';
import { AuthStatus, CITIES, sortingItems } from '../../constants';
import { City, OffersType, UserData } from '../../types/types';
import { selectCityAction, getSortingTypeAction, getOfferAction, setLoadingStatusAction, getAuthStatusAction, getUserData } from '../actions/action';

type initialStateType = {
  selectedCity: City;
  sortType: string;
  offers: OffersType[];
  isOffersLoading: boolean;
  authorizationStatus: AuthStatus;
  userData: UserData;
}

const initialState: initialStateType = {
  selectedCity: CITIES[0],
  sortType: sortingItems.POPULAR,
  offers: [],
  isOffersLoading: false,
  authorizationStatus: AuthStatus.Unknown,
  userData: {avatarUrl: '',
    email: '',
    id: NaN,
    isPro: false,
    name: '',
    token: '',}
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
    })

    .addCase(getAuthStatusAction, (state, action) => {
      state.authorizationStatus = action.payload;
    })

    .addCase(getUserData, (state, action) => {
      state.userData = action.payload;
    });
});


export {reducer};
