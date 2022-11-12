import { OffersType } from './types/types';

export const cityNames = {
  PARIS: 'Paris',
  COLOGNE: 'Cologne',
  BRUSSELS: 'Brussels',
  AMSTERDAM: 'Amsterdam',
  HAMBURG: 'Hamburg',
  DUSSELDORF: 'Dusseldorf',
};

export const sortingItems = {
  POPULAR: 'Popular',
  PRICE_UP: 'Price: low to high',
  PRICE_DOWN: 'Price: high to low',
  RATING_DOWN: 'Top rated first',
};

export const sortOffer = [
  {'Popular': (offers: OffersType[]) => offers},
  {'Price: low to high': (offers: OffersType[]) => offers.sort((a, b) => a.price - b.price)},
  {'Price: high to low': (offers: OffersType[]) => offers.sort((a, b) => b.price - a.price)},
  {'Top rated first': (offers: OffersType[]) => offers.sort((a, b) => b.rating - a.rating)},
];
