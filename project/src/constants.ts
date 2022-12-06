import { City } from './types/types';

export const CITIES: City[] = [
  {
    title: 'Paris',
    lat: 48.864716,
    lng: 2.349014,
  },
  {
    title: 'Cologne',
    lat: 50.935173,
    lng: 6.953101,
  },
  {
    title: 'Brussels',
    lat: 50.85045,
    lng: 4.34878,
  },
  {
    title: 'Amsterdam',
    lat: 52.377956,
    lng: 4.897070,
  },
  {
    title: 'Hamburg',
    lat: 53.551086,
    lng: 9.993682,
  },
  {
    title: 'Dusseldorf',
    lat: 51.233334,
    lng: 6.783333,
  },
];

export const sortItemsList = {
  POPULAR: 'Popular',
  PRICE_UP: 'Price: low to high',
  PRICE_DOWN: 'Price: high to low',
  RATING_DOWN: 'Top rated first',
};

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum NameSpace {
  Offers = 'OFFERS',
  TargetOffer = 'TARGET_OFFER',
  User = 'USER',
  Comments = 'COMMENTS',
  Ui = 'UI',
}

export const ReviewValid = {
  MAX_LENGTH: 300,
  MIN_LENGTH: 50
};

