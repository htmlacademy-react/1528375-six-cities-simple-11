import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AuthStatus } from '../../constants';
import { deleteToken, saveToken } from '../../services/token';
import { AppDispatch, CommentType, OffersType, PostComment, PostData, State, UserData } from '../../types/types';
import { enterCommentAction, getAuthStatusAction, getCommentsAction, getNearbyOffersAction, getOfferAction, getTargetOffer, getUserData, setLoadingStatusAction, setLoadingTargetOfferAction } from './action';

const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/FetchOffers',
  async(_arg, {dispatch, extra: api}) => {
    dispatch(setLoadingStatusAction(true));
    const {data} = await api.get<OffersType[]>('/hotels');
    dispatch(setLoadingStatusAction(false));
    dispatch(getOfferAction(data));
  },
);

const fetchAuthStatusAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'auth/FetchAuthStatus',
  async(_arg, {dispatch, extra: api}) => {
    try {
      await api.get('/login');
      dispatch(getAuthStatusAction(AuthStatus.Auth));
    } catch {
      dispatch(getAuthStatusAction(AuthStatus.NoAuth));
    }
  }
);

const loginAction = createAsyncThunk<void, PostData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async({email, password}, {dispatch, extra: api}) => {
    const {data: {token}, data} = await api.post<UserData>('/login', {email, password});
    saveToken(token);
    dispatch(getAuthStatusAction(AuthStatus.Auth));
    dispatch(getUserData(data));
  }
);

const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async(_arg, {dispatch, extra: api}) => {
    await api.delete('/logout');
    deleteToken();
    dispatch(getAuthStatusAction(AuthStatus.NoAuth));
  }
);

const fetchTargetOfferAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/targetData',
  async(id, {dispatch, extra: api}) => {
    dispatch(setLoadingTargetOfferAction(true));
    const {data} = await api.get<OffersType>(`/hotels/${id}`);
    dispatch(getTargetOffer(data));
    dispatch(setLoadingTargetOfferAction(false));
  }
);

const fetchNearbyOffersAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/nearbyOffers',
  async(id, {dispatch, extra: api}) => {
    const {data} = await api.get<OffersType[]>(`/hotels/${id}/nearby`);
    dispatch(getNearbyOffersAction(data));
  }
);

const fetchCommentsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/fetchComments',
  async(id, {dispatch, extra: api}) => {
    const {data} = await api.get<CommentType[]>(`/comments/${id}`);
    dispatch(getCommentsAction(data));
  }
);

const postCommentAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/postComment',
  async(id, {dispatch, extra: api}) => {
    const {data} = await api.post<PostComment>(`/comments/${id}`);
    dispatch(enterCommentAction(data));
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
