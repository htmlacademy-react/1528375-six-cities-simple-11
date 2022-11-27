import { NameSpace } from '../../constants';
import { State } from '../../types/types';

export const getTargetOfferLoadingStatus = (state: State) => state[NameSpace.TargetOffer].isTargetLoading;
export const getTargetOffer = (state: State) => state[NameSpace.TargetOffer].targetOffer;
export const getNearbyOffers = (state: State) => state[NameSpace.TargetOffer].nearbyOffers;
