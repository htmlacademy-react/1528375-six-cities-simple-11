import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthStatus } from '../../constants';
import { deleteToken, saveToken } from '../../services/token';
import { OffersType, PostData, UserData } from '../../types/types';
import { api, store } from '../store';
import { getAuthStatusAction, getOfferAction, getUserData, setLoadingStatusAction } from './action';

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

const loginAction = createAsyncThunk<void, PostData>(
  'user/login',
  async({email, password}) => {
    const {data: {token}, data} = await api.post<UserData>('/login', {email, password});
    saveToken(token);
    store.dispatch(getAuthStatusAction(AuthStatus.Auth));
    store.dispatch(getUserData(data));
  }
);

const logoutAction = createAsyncThunk(
  'user/logout',
  async() => {
    await api.delete('/logout');
    deleteToken();
    store.dispatch(getAuthStatusAction(AuthStatus.NoAuth));
  }
);

export {fetchOffersAction, fetchAuthStatusAction, loginAction, logoutAction};
