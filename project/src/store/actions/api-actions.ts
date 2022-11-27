import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { deleteToken, saveToken } from '../../services/token';
import { AppDispatch, CommentType, OffersType, PostData, State, UserData } from '../../types/types';
import { getCommentsAction } from './action';

const fetchOffersAction = createAsyncThunk<OffersType[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/FetchOffers',
  async(_arg, {extra: api}) => {
    const {data} = await api.get<OffersType[]>('/hotels');
    return data;
  },
);

const fetchAuthStatusAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'auth/FetchAuthStatus',
  async(_arg, {extra: api}) => {
    await api.get('/login');
  }
);

const loginAction = createAsyncThunk<UserData, PostData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async({email, password}, {extra: api}) => {
    const {data: {token}, data} = await api.post<UserData>('/login', {email, password});
    saveToken(token);
    return data;
  }
);

const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async(_arg, {extra: api}) => {
    await api.delete('/logout');
    deleteToken();
  }
);

const fetchTargetOfferAction = createAsyncThunk<OffersType, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/targetData',
  async(id, {extra: api}) => {
    const {data} = await api.get<OffersType>(`/hotels/${id}`);
    return data;
  }
);

const fetchNearbyOffersAction = createAsyncThunk<OffersType[], number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/nearbyOffers',
  async(id, {extra: api}) => {
    const {data} = await api.get<OffersType[]>(`/hotels/${id}/nearby`);
    return data;
  }
);

const fetchCommentsAction = createAsyncThunk<CommentType[], number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/fetchComments',
  async(id, {extra: api}) => {
    const {data} = await api.get<CommentType[]>(`/comments/${id}`);
    return data;
  }
);

const postCommentAction = createAsyncThunk<void, {id: number; comment: string; rating: number}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/postComment',
  async({id, comment, rating}, {dispatch, extra: api}) => {
    await api.post(`/comments/${id}`, {comment, rating});
    dispatch(fetchCommentsAction(id));
  }
);

export {
  fetchOffersAction,
  fetchAuthStatusAction,
  loginAction,
  logoutAction,
  fetchNearbyOffersAction,
  fetchTargetOfferAction,
  fetchCommentsAction,
  postCommentAction,
};
