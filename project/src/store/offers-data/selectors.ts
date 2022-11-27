import { NameSpace } from '../../constants';
import { State } from '../../types/types';

export const getOffersLoadingStatus = (state: State) => state[NameSpace.Offers].isOffersLoading;
export const getOffers = (state: State) => state[NameSpace.Offers].offers;
