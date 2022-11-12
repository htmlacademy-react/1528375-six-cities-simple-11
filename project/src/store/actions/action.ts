import { createAction } from '@reduxjs/toolkit';

const selectCityAction = createAction('offer/SelectCity', (city: string) => ({payload: city}));

const getOfferAction = createAction('offer/GetOffers');

const getSortingTypeAction = createAction('offer/GetSortType', (sortType: string) => ({payload: sortType}));

export {selectCityAction, getOfferAction, getSortingTypeAction};
