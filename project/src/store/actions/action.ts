import { createAction } from '@reduxjs/toolkit';

const selectCityAction = createAction('offer/SelectCity', (city: string) => ({payload: city}));

const getOfferAction = createAction('offer/GetOffers');


export {selectCityAction, getOfferAction};
