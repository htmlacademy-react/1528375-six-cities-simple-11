import { createAction } from '@reduxjs/toolkit';
import { AuthStatus } from '../../constants';
import { City, CommentType, OffersType, PostComment, UserData } from '../../types/types';

export const selectCityAction = createAction<City>('offer/selectCity');

export const getSortingTypeAction = createAction<string>('offer/getSortType');

export const getOfferAction = createAction<OffersType[]>('offer/getOffers');

export const setLoadingStatusAction = createAction<boolean>('offers/loadingStatus');

export const getAuthStatusAction = createAction<AuthStatus>('user/authStatus');

export const getUserData = createAction<UserData>('user/data');

export const getTargetOffer = createAction<OffersType>('offer/target');

export const getNearbyOffersAction = createAction<OffersType[]>('offer/getNearby');

export const getCommentsAction = createAction<CommentType[]>('offer/comments');

export const enterCommentAction = createAction<PostComment>('offer/enterComment');

