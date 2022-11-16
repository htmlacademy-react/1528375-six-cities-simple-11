import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from '../store';
import { getOfferAction } from './action';

const fetchOffersAction = createAsyncThunk(
  'offer/FetchOffers',
  async() => {
    const {data} = await api.get('/hotels');
    store.dispatch(getOfferAction(data));
  },
);

export {fetchOffersAction};
