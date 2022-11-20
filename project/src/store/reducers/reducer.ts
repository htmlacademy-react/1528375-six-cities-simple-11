import { createReducer } from '@reduxjs/toolkit';
import { AuthStatus, CITIES, sortingItems } from '../../constants';
import { City, CommentType, OffersType, PostComment, UserData } from '../../types/types';
import { selectCityAction, getSortingTypeAction, getOfferAction, setLoadingStatusAction, getAuthStatusAction, getUserData, getNearbyOffersAction, getTargetOffer, getCommentsAction, enterCommentAction, setLoadingTargetOfferAction } from '../actions/action';

type initialStateType = {
  selectedCity: City;
  sortType: string;
  offers: OffersType[];
  isOffersLoading: boolean;
  authorizationStatus: AuthStatus;
  userData: UserData;
  targetOffer: OffersType;
  isTargetLoaded: boolean;
  nearbyOffers: OffersType[];
  comments: CommentType[];
  postedComment: PostComment;
}

const initialState: initialStateType = {
  selectedCity: CITIES[0],
  sortType: sortingItems.POPULAR,
  offers: [],
  isOffersLoading: false,
  authorizationStatus: AuthStatus.Unknown,
  userData: {} as UserData,
  targetOffer: {} as OffersType,
  isTargetLoaded: false,
  nearbyOffers: [],
  comments: [],
  postedComment: {} as PostComment,
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCityAction, (state, action) => {
      state.selectedCity = action.payload;
    })

    .addCase(getSortingTypeAction, (state, action) => {
      state.sortType = action.payload;
    })

    .addCase(setLoadingStatusAction, (state, action) => {
      state.isOffersLoading = action.payload;
    })

    .addCase(getOfferAction, (state, action) => {
      state.offers = action.payload;
    })

    .addCase(getAuthStatusAction, (state, action) => {
      state.authorizationStatus = action.payload;
    })

    .addCase(getUserData, (state, action) => {
      state.userData = action.payload;
    })

    .addCase(getTargetOffer, (state, action) => {
      state.targetOffer = action.payload;
    })

    .addCase(setLoadingTargetOfferAction, (state, action) => {
      state.isTargetLoaded = action.payload;
    })

    .addCase(getNearbyOffersAction, (state, action) => {
      state.nearbyOffers = action.payload;
    })

    .addCase(getCommentsAction, (state, action) => {
      state.comments = action.payload;
    })

    .addCase(enterCommentAction, (state, action) => {
      state.postedComment = action.payload;
    });
});


export {reducer};
