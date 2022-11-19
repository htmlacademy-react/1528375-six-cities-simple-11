import { createReducer } from '@reduxjs/toolkit';
import { AuthStatus, CITIES, sortingItems } from '../../constants';
import { City, CommentType, OffersType, PostComment, UserData } from '../../types/types';
import { selectCityAction, getSortingTypeAction, getOfferAction, setLoadingStatusAction, getAuthStatusAction, getUserData, getNearbyOffersAction, getTargetOffer, getCommentsAction, enterCommentAction } from '../actions/action';

type initialStateType = {
  selectedCity: City;
  sortType: string;
  offers: OffersType[];
  isOffersLoading: boolean;
  authorizationStatus: AuthStatus;
  userData: UserData;
  targetOffer: OffersType;
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
  userData: {avatarUrl: '',
    email: '',
    id: NaN,
    isPro: false,
    name: '',
    token: '',},
  targetOffer: {
    'bedrooms': 3,
    'city': {
      'location': {
        'latitude': 52.370216,
        'longitude': 4.895168,
        'zoom': 10
      },
      'name': 'Amsterdam'
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': [
      'Heating'
    ],
    'host': {
      'avatarUrl': 'img/1.png',
      'id': 3,
      'isPro': true,
      'name': 'Angelina'
    },
    'id': 1,
    'images': [
      'img/1.png'
    ],
    'isPremium': false,
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'maxAdults': 4,
    'previewImage': 'img/1.png',
    'price': 120,
    'rating': 4.8,
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment'
  },
  nearbyOffers: [],
  comments: [],
  postedComment: {
    comment: '',
    rating: NaN
  }
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
