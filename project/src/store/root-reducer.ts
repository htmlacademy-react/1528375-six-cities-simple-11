import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../constants';
import { commentsData } from './comments-data/comments-data';
import { offersData } from './offers-data/offers-data';
import { targetOfferData } from './target-offer-data/target-offer-data';
import { uiActions } from './ui-actions/ui-actions';
import { userProcess } from './user-process/user-process';

const rootReducer = combineReducers({
  [NameSpace.Ui]: uiActions.reducer,
  [NameSpace.Offers]: offersData.reducer,
  [NameSpace.TargetOffer]: targetOfferData.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Comments]: commentsData.reducer,
});

export {rootReducer};
