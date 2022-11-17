import { createAsyncThunk } from '@reduxjs/toolkit';
import { OffersType } from '../../types/types';
import { api, store } from '../store';
import { getOfferAction, setLoadingStatusAction } from './action';

const fetchOffersAction = createAsyncThunk(
  'offer/FetchOffers',
  async() => {
    store.dispatch(setLoadingStatusAction(true));
    const {data} = await api.get<OffersType[]>('/hotels');
    store.dispatch(setLoadingStatusAction(false));
    store.dispatch(getOfferAction(data));
  },
);

export {fetchOffersAction};
