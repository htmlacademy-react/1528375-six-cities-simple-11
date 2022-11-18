import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthStatus } from '../../constants';
import { saveToken } from '../../services/token';
import { OffersType, PostData, UserData } from '../../types/types';
import { api, store } from '../store';
import { getAuthStatusAction, getOfferAction, setLoadingStatusAction } from './action';

const fetchOffersAction = createAsyncThunk(
  'offer/FetchOffers',
  async() => {
    store.dispatch(setLoadingStatusAction(true));
    const {data} = await api.get<OffersType[]>('/hotels');
    store.dispatch(setLoadingStatusAction(false));
    store.dispatch(getOfferAction(data));
  },
);

const fetchAuthStatusAction = createAsyncThunk(
  'auth/FetchAuthStatus',
  async() => {
    try {
      await api.get('/login');
      store.dispatch(getAuthStatusAction(AuthStatus.Auth));
    } catch {
      store.dispatch(getAuthStatusAction(AuthStatus.NoAuth));
    }
  }
);

const postUserDataAction = createAsyncThunk<void, PostData>(
  'auth/PostUserData',
  async({email, password}) => {
    const {data: {token}} = await api.post<UserData>('/login', {email, password});
    saveToken(token);
    store.dispatch(getAuthStatusAction(AuthStatus.Auth));
    console.log(token);
  }
);

export {fetchOffersAction, fetchAuthStatusAction, postUserDataAction};
