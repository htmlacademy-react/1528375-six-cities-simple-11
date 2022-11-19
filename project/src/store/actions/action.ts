import { createAction } from '@reduxjs/toolkit';
import { AuthStatus } from '../../constants';
import { City, OffersType, UserData } from '../../types/types';

const selectCityAction = createAction<City>('offer/SelectCity');

const getSortingTypeAction = createAction<string>('offer/GetSortType');

const getOfferAction = createAction<OffersType[]>('offer/GetOffers');

const setLoadingStatusAction = createAction<boolean>('offers/LoadingStatus');

const getAuthStatusAction = createAction<AuthStatus>('user/AuthStatus');

const getUserData = createAction<UserData>('user/data');

export {selectCityAction, getSortingTypeAction, getOfferAction, setLoadingStatusAction, getAuthStatusAction, getUserData};
