import { createAction } from '@reduxjs/toolkit';
import { City, OffersType } from '../../types/types';

const selectCityAction = createAction('offer/SelectCity', (city: City) => ({payload: city}));

const getOfferAction = createAction<OffersType[]>('offer/GetOffers');

const getSortingTypeAction = createAction('offer/GetSortType', (sortType: string) => ({payload: sortType}));

export {selectCityAction, getOfferAction, getSortingTypeAction};
